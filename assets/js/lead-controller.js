/* RC22: FormSubmit only. No optimistic delivery claim, background transmission or localStorage leads. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.CoreCloudLead=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const MAP={
    'identity-security':{interest:'Identity Security / Silverfort',assessment:'SILVERFORT_IDENTITY'},
    'workload-venue':{interest:'Workload Venue Assessment',assessment:'WORKLOAD_VENUE'},
    sovereignty:{interest:'Digital Sovereignty',assessment:'SOVEREIGNTY'},
    'ai-readiness':{interest:'AI Readiness',assessment:'AI_READINESS'},
    finops:{interest:'FinOps / Cost Optimisation',assessment:''}
  };
  const SUBJECT={'AI Readiness Assessment':'ai-readiness','Digital Sovereignty Assessment':'sovereignty','Workload Venue Assessment':'workload-venue','Silverfort Identity Security Risk Assessment':'identity-security'};
  function resolveIntent(search){const p=new URLSearchParams(search),subject=p.get('subject'),key=Object.hasOwn(MAP,p.get('interest'))?p.get('interest'):Object.hasOwn(SUBJECT,subject)?SUBJECT[subject]:null;return key?Object.freeze({...MAP[key]}):null;}
  function resolveNext(base,path){const u=new URL(path||'thank-you.html',base),root=new URL('.',base);const allowed=['thank-you.html','assets/guides/corecloud-ai-readiness.html','assets/guides/corecloud-digital-sovereignty.html','assets/guides/corecloud-workload-venue-strategy.html'];if(u.origin!==root.origin||!allowed.some(p=>u.href===new URL(p,root).href))return new URL('thank-you.html',root).href;return u.href;}
  return Object.freeze({resolveIntent,resolveNext});
});
(function(){
  'use strict';if(typeof document==='undefined')return;
  const api=window.CoreCloudLead;
  function hidden(form,name,value){let e=[...form.elements].find(el=>el.name===name);if(!e){e=document.createElement('input');e.type='hidden';e.name=name;form.append(e);}e.value=value;}
  function init(){
    const enquiry=document.querySelector('#corecloud-main-enquiry-form');
    if(enquiry){const intent=api.resolveIntent(location.search);if(intent){enquiry.querySelector('[name="Interest Area"]').value=intent.interest;hidden(enquiry,'Originating Assessment',intent.assessment);}else enquiry.querySelector('[name="Interest Area"]').value='';}
    document.querySelectorAll('form.lead-form').forEach(f=>{hidden(f,'_next',api.resolveNext(location.href,'thank-you.html'));f.setAttribute('aria-label',f.id==='corecloud-main-enquiry-form'?'Contact CoreCloud':f.dataset.leadType==='NDA_REQUEST'?'Request a mutual NDA':'Request guide follow-up');});
    const backdrop=document.querySelector('[data-modal-backdrop]');if(!backdrop)return;
    const dialog=backdrop.querySelector('[role="dialog"]'),closeButton=backdrop.querySelector('[data-modal-close]'),form=backdrop.querySelector('form'),assets=window.CORECLOUD_CONFIG?.GUIDE_ASSETS||{};
    let trigger=null,inerted=[],previousOverflow='';
    function close(){backdrop.classList.remove('open');backdrop.hidden=true;document.body.style.overflow=previousOverflow;inerted.forEach(([e,old])=>e.inert=old);inerted=[];trigger?.focus();}
    closeButton.addEventListener('click',close);backdrop.addEventListener('click',e=>{if(e.target===backdrop)close();});
    document.querySelectorAll('[data-guide]').forEach(link=>link.addEventListener('click',e=>{
      e.preventDefault();const guide=link.dataset.guide,path=assets[guide];if(!path)return;
      trigger=link;backdrop.querySelector('[data-guide-title]').textContent='Read the '+guide+' guide without leaving details, or use the optional form to request a discussion.';
      backdrop.querySelector('[data-guide-open]').href=path;
      hidden(form,'_next',api.resolveNext(location.href,path));hidden(form,'_subject','[CoreCloudZA] Guide follow-up: '+guide);hidden(form,'asset',guide);hidden(form,'Lead Type','GUIDE_FOLLOW_UP');
      let node=backdrop;while(node.parentElement){for(const sibling of node.parentElement.children)if(sibling!==node&&!['SCRIPT','STYLE','LINK'].includes(sibling.tagName)){inerted.push([sibling,sibling.inert]);sibling.inert=true;}if(node.parentElement===document.body)break;node=node.parentElement;}
      previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';backdrop.hidden=false;backdrop.classList.add('open');closeButton.focus();
    }));
    document.addEventListener('keydown',e=>{
      if(backdrop.hidden)return;if(e.key==='Escape'){e.preventDefault();close();return;}
      if(e.key==='Tab'){const focusable=[...dialog.querySelectorAll('a[href],button,input:not([type="hidden"]),select,textarea,summary')].filter(x=>!x.disabled&&x.getClientRects().length);const first=focusable[0],last=focusable[focusable.length-1];if(!first)return;if(!dialog.contains(document.activeElement)){e.preventDefault();first.focus();}else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  document.addEventListener('submit',event=>{
    const form=event.target;if(!form.matches('form.lead-form'))return;
    const note=form.querySelector('[data-form-note]');
    if(event.defaultPrevented)return;
    if(!form.checkValidity()){event.preventDefault();if(note)note.textContent='Complete the required fields and check the email address before sending.';form.reportValidity();return;}
    if(form.dataset.submitting==='true'){event.preventDefault();return;}
    if(form.action!=='https://formsubmit.co/sales@corecloudza.com'){event.preventDefault();if(note)note.textContent='This form has an unexpected destination. Contact CoreCloud directly.';return;}
    hidden(form,'Page URL',location.origin+location.pathname);
    const interest=form.querySelector('[name="Interest Area"]');if(form.id==='corecloud-main-enquiry-form'&&interest)hidden(form,'_subject','[CoreCloudZA] Enquiry: '+interest.value);
    if(note)note.textContent='Opening FormSubmit for processing. Complete any verification shown there. This page cannot verify delivery to the receiving mailbox.';
    form.dataset.submitting='true';
  });
  window.addEventListener('pageshow',()=>document.querySelectorAll('form.lead-form').forEach(f=>{delete f.dataset.submitting;const n=f.querySelector('[data-form-note]');if(n)n.textContent='';}));
})();
