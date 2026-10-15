/* CoreCloud RC22: transparent self-assessment rules, not predictive risk scoring. */
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./assessment-data.js'));
  else root.CoreCloudAssessment=factory(root.CoreCloudAssessmentData);
})(typeof globalThis!=='undefined'?globalThis:this,function(data){
  'use strict';
  const VERSION='RC22-1.0',COVERAGE=80,SECTION_COVERAGE=60,UNKNOWN=5;
  function freeze(o){Object.values(o).forEach(v=>{if(v&&typeof v==='object')freeze(v);});return Object.freeze(o);}freeze(data);
  function definition(type){if(!Object.hasOwn(data,type))throw new Error('Unknown assessment type');return data[type];}
  function normalise(type,values){
    const d=definition(type);
    if(!Array.isArray(values)||values.length!==d.questions.length)throw new Error('Answer every question before calculating.');
    return values.map((v,i)=>{
      if(typeof v==='string'&&/^[0-5]$/.test(v))v=Number(v);
      if(!Number.isInteger(v)||!d.questions[i].options.some(o=>o.value===v))throw new Error('Review question '+(i+1)+': select one of its listed answers.');
      return v;
    });
  }
  function classify(type,score){
    definition(type);if(score===null)return 'Insufficient evidence';
    if(!Number.isInteger(score)||score<0||score>100)throw new Error('Invalid score');
    if(type==='SILVERFORT_IDENTITY')return score<25?'Lower indicated exposure':score<55?'Moderate indicated exposure':'Higher indicated exposure';
    const names=type==='SOVEREIGNTY'?['Exposed','Emerging','Developing','Governed','Strategic']:type==='AI_READINESS'?['Not Ready','Emerging','Developing','Ready','Advanced']:['Reactive','Emerging','Developing','Managed','Strategic'];
    return names[[20,40,60,80,100].findIndex(end=>score<=end)];
  }
  function fingerprint(type,values){return VERSION+'|'+type+'|'+normalise(type,values).join(',');}
  function scoreKnown(direction,known){if(!known.length)return null;const points=known.reduce((s,v)=>s+(direction==='exposure'?4-v:v),0),denominator=known.length*4;return Math.floor((points*100+denominator/2)/denominator);}
  function analyse(type,input){
    const d=definition(type),values=normalise(type,input),total=values.length,known=values.filter(v=>v!==UNKNOWN),unknown=total-known.length;
    const coveragePercent=Math.round(known.length/total*100);
    const sections=d.groups.map(g=>{
      const vals=g.indices.map(i=>values[i]),k=vals.filter(v=>v!==UNKNOWN),sufficient=k.length*100>=g.indices.length*SECTION_COVERAGE;
      return {name:g.name,total:vals.length,known:k.length,unknown:vals.length-k.length,coveragePercent:Math.round(k.length/vals.length*100),sufficient,score:sufficient?scoreKnown(d.direction,k):null,gaps:k.filter(v=>v===0).length,weak:k.filter(v=>v===1).length,partial:k.filter(v=>v===2).length};
    });
    const sufficient=known.length*100>=total*COVERAGE&&sections.every(g=>g.sufficient),score=sufficient?scoreKnown(d.direction,known):null;
    const counts={gaps:known.filter(v=>v===0).length,weak:known.filter(v=>v===1).length,partial:known.filter(v=>v===2).length,strong:known.filter(v=>v>=3).length,unknown};
    const records=d.questions.map((q,i)=>({number:i+1,id:q.id,question:q.question.replace(/^\d+\.\s*/,''),value:values[i],answer:q.options.find(o=>o.value===values[i]).text,section:d.groups.find(g=>g.indices.includes(i)).name,action:q.action}));
    const rank=r=>r.value===UNKNOWN?(sufficient?2:0):r.value===0?(sufficient?0:1):r.value===1?(sufficient?1:2):r.value===2?3:r.value===3?4:5;
    const candidates=records.filter(r=>r.value!==4);
    let priorities;
    if(candidates.length){
      const ordered=candidates.slice().sort((a,b)=>rank(a)-rank(b)||a.value-b.value||a.number-b.number);
      let selected=ordered.slice(0,5);
      // Do not let a long unknown list hide the most material reported gaps.
      if(!sufficient){
        const reported=ordered.filter(r=>r.value!==UNKNOWN&&r.value<=2);
        if(reported.length){const evidence=ordered.filter(r=>r.value===UNKNOWN).slice(0,3);selected=[...evidence,...reported.slice(0,5-evidence.length)];}
      }
      priorities=selected.map(r=>({question:r.number,section:r.section,kind:r.value===UNKNOWN?'Validate evidence':r.value===0?'Reported gap':r.value===1?'Weak practice':r.value===2?'Partial practice':'Refine practice',finding:'Q'+r.number+' '+r.question+' Selected: '+r.answer+'.',action:(r.value===UNKNOWN?'Establish the current position and owner before choosing a remedy. ':r.value===0?'Agree an owner and completion evidence for this reported gap. ':r.value===1?'Strengthen the limited practice and verify that it is repeatable. ':r.value===2?'Close the remaining gaps in this reported partial practice. ':'Target remaining exceptions and verify completeness. ')+r.action}));
    }
    else priorities=d.groups.slice(0,3).map(g=>records[g.indices[0]]).map(r=>({question:r.number,section:r.section,kind:'Maintain and validate',finding:'Q'+r.number+' '+r.question+' Selected: '+r.answer+'.',action:'Your answer reports a strong practice. At the next review, revalidate the evidence for this activity: '+r.action}));
    const classification=classify(type,score);
    const weakest=sections.slice().sort((a,b)=>a.coveragePercent-b.coveragePercent||((a.score===null?0:d.direction==='exposure'?100-a.score:a.score)-(b.score===null?0:d.direction==='exposure'?100-b.score:b.score))).slice(0,2).map(g=>g.name).join(' and ');
    const evidence=known.length+' of '+total+' controls have known answers ('+coveragePercent+'% coverage); '+unknown+' '+(unknown===1?'is':'are')+' unknown.';
    const profile='Your known answers report '+counts.gaps+' '+(counts.gaps===1?'gap':'gaps')+', '+counts.weak+' weak and '+counts.partial+' partial '+(counts.partial===1?'practice':'practices')+'. ';
    const summary=!sufficient?'Insufficient evidence for an overall '+d.direction+' score. '+evidence+' Each section also needs at least '+SECTION_COVERAGE+'% known answers. Start by validating '+weakest+'. '+profile+'The priority list starts with evidence validation and retains reported gaps when present.':classification+' on this self-reported '+d.direction+' profile. '+evidence+' '+profile+(candidates.length?'Focus the next discussion on '+priorities[0].section+' and the specific answers below.':'No gap is reported in these answers. Maintain the practices and independently validate the evidence before relying on the result.');
    return {modelVersion:VERSION,type,label:d.label,interest:d.interest,direction:d.direction,total,known:known.length,unknown,coveragePercent,sufficient,score,classification,counts,summary,sections,priorities,answers:records,fingerprint:fingerprint(type,values),caveat:'An indicative self-assessment, not a technical audit, certification, product-fit decision or incident probability.'};
  }
  function createPayload(type,values,expectedFingerprint){
    const result=analyse(type,values);if(!expectedFingerprint||result.fingerprint!==expectedFingerprint)throw new Error('Answers changed. Recalculate before sending this assessment.');
    return {assessmentType:result.type,assessmentLabel:result.label,'Interest Area':result.interest,modelVersion:VERSION,score:result.score===null?'N/A':String(result.score),scoreDirection:result.direction,classification:result.classification,evidenceCoverage:result.coveragePercent+'%',knownControls:String(result.known),unknownControls:String(result.unknown),totalControls:String(result.total),evidenceStatus:result.sufficient?'Sufficient self-reported coverage':'Insufficient evidence',notes:result.summary,assessmentAnswers:result.answers.map(a=>'Q'+a.number+'. '+a.question+' - '+a.answer+' [value '+a.value+']').join('\n'),diagnosticFindings:result.priorities.map(a=>a.kind+': '+a.finding).join('\n'),priorityActions:result.priorities.map(a=>'Q'+a.question+': '+a.action).join('\n'),sectionEvidence:JSON.stringify(result.sections),resultSnapshot:JSON.stringify({modelVersion:VERSION,type:result.type,score:result.score,classification:result.classification,coveragePercent:result.coveragePercent,known:result.known,unknown:result.unknown,summary:result.summary,priorities:result.priorities,sections:result.sections,answers:result.answers}),'Lead Type':'ASSESSMENT_RESULT',Source:'CoreCloudZA '+result.label,_subject:'[CoreCloudZA] '+result.label+' follow-up'};
  }
  function session(type){definition(type);let current=null;return {calculate(values){current=analyse(type,values);return current;},invalidate(){current=null;},get current(){return current;},prepare(values){if(!current)throw new Error('Calculate a current result before sending.');return createPayload(type,values,current.fingerprint);}};}
  return Object.freeze({VERSION,COVERAGE,SECTION_COVERAGE,UNKNOWN,definition,normalise,classify,fingerprint,analyse,createPayload,session});
});

(function(){
  'use strict';if(typeof document==='undefined')return;const engine=window.CoreCloudAssessment;if(!engine)return;
  const text=(tag,value,attrs={})=>{const e=document.createElement(tag);e.textContent=value;Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));return e;};
  document.querySelectorAll('[data-assessment-form]').forEach(form=>{
    const type=form.dataset.assessmentType,definition=engine.definition(type),state=engine.session(type),wrap=document.querySelector('[data-result-wrap]'),status=form.querySelector('[data-assessment-status]'),questions=[...form.querySelectorAll('.question')];let capture=null;
    const values=()=>questions.map(q=>q.querySelector('input:checked')?.value??null),setStatus=message=>{status.textContent=message;};
    function invalidate(){
      const hadResult=Boolean(state.current);state.invalidate();wrap.hidden=true;
      if(capture)[...capture.elements].forEach(e=>{e.disabled=true;if(e.hasAttribute('data-result-payload'))e.value='';if(e.name==='assessmentConsent')e.checked=false;});
      if(hadResult)setStatus('Answers changed. The previous result and follow-up payload have been invalidated. Recalculate to continue.');
    }
    ['input','change'].forEach(name=>form.addEventListener(name,e=>{if(e.target.matches('input[type="radio"]'))invalidate();}));
    function hidden(name,value,payload=true){
      let e=[...capture.elements].find(el=>el.name===name);
      if(!e){e=document.createElement('input');e.type='hidden';e.name=name;if(payload)e.setAttribute('data-result-payload','');capture.append(e);}e.value=value;
    }
    function buildCapture(){
      const panel=text('div','',{'class':'glass capture-panel','data-assessment-capture-panel':''});panel.append(text('h3','Request an assessment-specific follow-up'),text('p','Send this result and your selected answers to CoreCloud to discuss the evidence and the business decision. This does not book or commit you to a product.'));
      capture=document.createElement('form');capture.className='lead-form';capture.method='POST';capture.action='https://formsubmit.co/sales@corecloudza.com';capture.setAttribute('data-lead-form','');capture.setAttribute('aria-label',definition.label+' follow-up');panel.append(capture);
      [['_cc','mark@corecloudza.com'],['_template','table'],['_captcha','true'],['_next',new URL('thank-you.html',location.href).href]].forEach(([n,v])=>hidden(n,v,false));
      [['firstName','First name','text',true,'given-name'],['lastName','Last name','text',false,'family-name'],['company','Company','text',true,'organization'],['title','Job title','text',false,'organization-title'],['email','Email address','email',true,'email'],['phone','Phone number','tel',false,'tel']].forEach(([name,label,kind,required,auto])=>{
        const id='assessment-'+type.toLowerCase()+'-'+name,l=text('label',label+(required?' (required)':' (optional)'),{'for':id,'class':'field-label'}),i=document.createElement('input');Object.assign(i,{id,name,type:kind,required,autocomplete:auto});if(kind==='email')i.maxLength=254;capture.append(l,i);
      });
      const consent=text('label','',{'class':'check'}),check=document.createElement('input');Object.assign(check,{type:'checkbox',name:'assessmentConsent',required:true,value:'Requested follow-up with assessment answers'});consent.append(check,document.createTextNode(' I request CoreCloud to contact me about this assessment and understand that my answers and result are included.'));capture.append(consent);
      const privacy=text('p','Your details and answers are handled through FormSubmit. Do not send credentials or sensitive customer information. ',{'class':'form-privacy'});privacy.append(text('a','Read the privacy notice',{'href':'privacy.html'}));capture.append(privacy,text('button','Send current assessment to CoreCloud',{'type':'submit','class':'btn primary'}),text('p','',{'class':'form-note','data-form-note':'','role':'status','aria-live':'polite'}));
      const help=text('p','If the external service reports an error, return here and try again or contact ',{'class':'form-help'});help.append(text('a','sales@corecloudza.com',{'href':'mailto:sales@corecloudza.com'}));capture.append(help);wrap.querySelector('.container').append(panel);
      capture.addEventListener('submit',event=>{try{const payload=state.prepare(values());if(wrap.hidden)throw new Error('Recalculate this assessment before sending.');Object.entries(payload).forEach(([n,v])=>hidden(n,v));}catch(error){event.preventDefault();invalidate();setStatus(error.message);status.focus();}});
    }
    function render(result){
      wrap.querySelector('[data-score]').textContent=result.score===null?'N/A':result.score;wrap.querySelector('[data-classification]').textContent=result.classification;wrap.querySelector('[data-summary]').textContent=result.summary;
      wrap.querySelector('[data-coverage]').textContent='Evidence coverage: '+result.known+'/'+result.total+' known ('+result.coveragePercent+'%). '+result.unknown+' unknown. '+result.caveat;
      wrap.querySelector('[data-diagnostic-findings]').replaceChildren(...result.priorities.map(r=>text('li',r.kind+' - '+r.finding)));
      wrap.querySelector('[data-diagnostic-actions]').replaceChildren(...result.priorities.map(r=>text('li','Q'+r.question+' / '+r.section+': '+r.action)));
      wrap.querySelector('[data-diagnostic-sections]').replaceChildren(...result.sections.map(g=>text('p',g.name+': '+g.known+'/'+g.total+' known, '+g.unknown+' unknown; '+(g.score===null?'insufficient section evidence':result.direction+' index '+g.score+'/100')+'.')));
      if(!capture)buildCapture();[...capture.elements].forEach(e=>e.disabled=false);Object.entries(state.prepare(values())).forEach(([n,v])=>hidden(n,v));
      wrap.hidden=false;setStatus('Current result calculated. '+result.known+' of '+result.total+' answers are known.');wrap.querySelector('[data-result-title]').focus();wrap.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
    }
    form.addEventListener('submit',event=>{event.preventDefault();try{render(state.calculate(values()));}catch(error){invalidate();setStatus(error.message);const first=questions.find(q=>!q.querySelector('input:checked'));if(first)first.querySelector('input').focus();else status.focus();}});
    form.removeAttribute('onsubmit');form.querySelector('[data-calculate]').disabled=false;
  });
})();
