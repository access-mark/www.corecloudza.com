(function(root,factory){const data=factory();if(typeof module==="object"&&module.exports)module.exports=data;else root.CoreCloudAssessmentData=data;})(typeof globalThis!=="undefined"?globalThis:this,function(){"use strict";return {
  "WORKLOAD_VENUE": {
    "label": "Workload Venue Assessment",
    "path": "assess-workload-venue.html",
    "interest": "Workload Venue Assessment",
    "direction": "maturity",
    "groups": [
      {
        "name": "Current Environment",
        "indices": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "name": "Technology Economics",
        "indices": [
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        "name": "Sovereignty & Governance",
        "indices": [
          10,
          11,
          12,
          13,
          14
        ]
      },
      {
        "name": "AI Readiness",
        "indices": [
          15,
          16,
          17,
          18,
          19
        ]
      },
      {
        "name": "Capability & Operations",
        "indices": [
          20,
          21,
          22,
          23,
          24
        ]
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "1. How would you describe your current environment?",
        "options": [
          {
            "value": 4,
            "text": "Environment designed around workload needs with clear placement"
          },
          {
            "value": 3,
            "text": "Environment with a defined workload placement rationale"
          },
          {
            "value": 2,
            "text": "Mixed environment with partial rationale"
          },
          {
            "value": 1,
            "text": "Fragmented environment with limited rationale"
          },
          {
            "value": 0,
            "text": "undocumented environment"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Document the current venue of each critical workload and the reason it is there."
      },
      {
        "id": "q2",
        "question": "2. How many cloud providers do you currently use?",
        "options": [
          {
            "value": 4,
            "text": "Provider selection governed by requirements and tested exit plans"
          },
          {
            "value": 3,
            "text": "Provider selection with clear rationale and named owners"
          },
          {
            "value": 2,
            "text": "Provider use documented with some governance"
          },
          {
            "value": 1,
            "text": "Ad-hoc or unmanaged provider use"
          },
          {
            "value": 0,
            "text": "Provider use and dependencies unmanaged"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map provider concentration and the practical consequences of losing a primary provider."
      },
      {
        "id": "q3",
        "question": "3. Do you maintain a documented workload inventory?",
        "options": [
          {
            "value": 4,
            "text": "Complete and maintained inventory"
          },
          {
            "value": 3,
            "text": "Mostly maintained inventory"
          },
          {
            "value": 2,
            "text": "Partial inventory"
          },
          {
            "value": 1,
            "text": "Informal or outdated inventory"
          },
          {
            "value": 0,
            "text": "No inventory"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Build an owned workload inventory with criticality, dependencies and operating requirements."
      },
      {
        "id": "q4",
        "question": "4. Do you classify workloads by criticality?",
        "options": [
          {
            "value": 4,
            "text": "Classified across all workloads"
          },
          {
            "value": 3,
            "text": "Mostly classified"
          },
          {
            "value": 2,
            "text": "Partially classified"
          },
          {
            "value": 1,
            "text": "Limited classification"
          },
          {
            "value": 0,
            "text": "Not classified"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Classify data and applications by sensitivity, availability and performance needs."
      },
      {
        "id": "q5",
        "question": "5. Do you maintain a workload placement strategy?",
        "options": [
          {
            "value": 4,
            "text": "Documented and actively used"
          },
          {
            "value": 3,
            "text": "Defined with partial adoption"
          },
          {
            "value": 2,
            "text": "Emerging or informal strategy"
          },
          {
            "value": 1,
            "text": "Limited strategic guidance"
          },
          {
            "value": 0,
            "text": "No strategy"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Approve placement criteria and decision ownership before selecting a venue."
      },
      {
        "id": "q6",
        "question": "6. Can you accurately attribute cloud costs to business units?",
        "options": [
          {
            "value": 4,
            "text": "Accurate business-unit attribution"
          },
          {
            "value": 3,
            "text": "Mostly accurate attribution"
          },
          {
            "value": 2,
            "text": "Partial attribution"
          },
          {
            "value": 1,
            "text": "Limited attribution"
          },
          {
            "value": 0,
            "text": "No attribution"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Assign workload cost owners and reconcile provider spend to the business service."
      },
      {
        "id": "q7",
        "question": "7. Do you operate a FinOps practice?",
        "options": [
          {
            "value": 4,
            "text": "Formal FinOps practice operating"
          },
          {
            "value": 3,
            "text": "Defined FinOps processes"
          },
          {
            "value": 2,
            "text": "Informal cost optimisation"
          },
          {
            "value": 1,
            "text": "Ad-hoc cost reviews"
          },
          {
            "value": 0,
            "text": "No FinOps capability"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Establish a repeatable cost-review cadence with named optimisation owners."
      },
      {
        "id": "q8",
        "question": "8. Do you regularly review workload economics?",
        "options": [
          {
            "value": 4,
            "text": "Reviewed regularly with decisions made"
          },
          {
            "value": 3,
            "text": "Reviewed periodically"
          },
          {
            "value": 2,
            "text": "Reviewed occasionally"
          },
          {
            "value": 1,
            "text": "Rarely reviewed"
          },
          {
            "value": 0,
            "text": "Not reviewed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Recheck demand, utilisation and rightsizing against measured service requirements."
      },
      {
        "id": "q9",
        "question": "9. Have you evaluated cloud repatriation opportunities?",
        "options": [
          {
            "value": 4,
            "text": "Completed formal evaluation"
          },
          {
            "value": 3,
            "text": "Evaluation in progress"
          },
          {
            "value": 2,
            "text": "Discussed internally"
          },
          {
            "value": 1,
            "text": "Aware but not assessed"
          },
          {
            "value": 0,
            "text": "Not considered"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Compare realistic placement options using full lifecycle and migration costs."
      },
      {
        "id": "q10",
        "question": "10. Do you understand the cost impact of vendor lock-in?",
        "options": [
          {
            "value": 4,
            "text": "Clearly understood and quantified"
          },
          {
            "value": 3,
            "text": "Mostly understood"
          },
          {
            "value": 2,
            "text": "Partially understood"
          },
          {
            "value": 1,
            "text": "Limited understanding"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Document the operating constraints and cost drivers behind each placement decision."
      },
      {
        "id": "q11",
        "question": "11. Do you know which jurisdictions govern your critical workloads?",
        "options": [
          {
            "value": 4,
            "text": "Fully mapped and understood"
          },
          {
            "value": 3,
            "text": "Mostly mapped"
          },
          {
            "value": 2,
            "text": "Partially mapped"
          },
          {
            "value": 1,
            "text": "Limited visibility"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map the jurisdictions and dependencies affecting critical workloads."
      },
      {
        "id": "q12",
        "question": "12. Do you have formal data residency requirements?",
        "options": [
          {
            "value": 4,
            "text": "Fully documented and governed"
          },
          {
            "value": 3,
            "text": "Mostly documented"
          },
          {
            "value": 2,
            "text": "Partially documented"
          },
          {
            "value": 1,
            "text": "Informal or limited documentation"
          },
          {
            "value": 0,
            "text": "Not documented"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Document residency obligations and the data flows needed to meet them."
      },
      {
        "id": "q13",
        "question": "13. Do you evaluate access control from a sovereignty perspective?",
        "options": [
          {
            "value": 4,
            "text": "Formally assessed and governed"
          },
          {
            "value": 3,
            "text": "Regularly assessed"
          },
          {
            "value": 2,
            "text": "Partially or informally assessed"
          },
          {
            "value": 1,
            "text": "Rarely assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review provider, contractual and access dependencies with the accountable stakeholders."
      },
      {
        "id": "q14",
        "question": "14. Can critical workloads be recovered independently of a provider?",
        "options": [
          {
            "value": 4,
            "text": "Migration-ready"
          },
          {
            "value": 3,
            "text": "Mostly migration-ready"
          },
          {
            "value": 2,
            "text": "Possible with significant effort"
          },
          {
            "value": 1,
            "text": "Difficult to migrate"
          },
          {
            "value": 0,
            "text": "Not migration-ready"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Test whether required data can be exported and restored independently of its provider."
      },
      {
        "id": "q15",
        "question": "15. Do you assess recoverability as part of technology governance?",
        "options": [
          {
            "value": 4,
            "text": "Formally assessed and governed"
          },
          {
            "value": 3,
            "text": "Regularly assessed"
          },
          {
            "value": 2,
            "text": "Partially or informally assessed"
          },
          {
            "value": 1,
            "text": "Rarely assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review continuity, access and governance controls before approving a venue change."
      },
      {
        "id": "q16",
        "question": "16. Does your organisation currently use AI?",
        "options": [
          {
            "value": 4,
            "text": "Operational AI use cases in production"
          },
          {
            "value": 3,
            "text": "Multiple pilots or controlled deployments"
          },
          {
            "value": 2,
            "text": "Early experimentation"
          },
          {
            "value": 1,
            "text": "Limited informal use"
          },
          {
            "value": 0,
            "text": "No current AI use"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Select a bounded AI use case with a business owner and an observable outcome."
      },
      {
        "id": "q17",
        "question": "17. Do you have AI governance policies?",
        "options": [
          {
            "value": 4,
            "text": "Approved and enforced"
          },
          {
            "value": 3,
            "text": "Documented and adopted"
          },
          {
            "value": 2,
            "text": "Partially defined or informal"
          },
          {
            "value": 1,
            "text": "Under consideration"
          },
          {
            "value": 0,
            "text": "Not in place"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Define AI accountability, approval and oversight before expanding adoption."
      },
      {
        "id": "q18",
        "question": "18. Is your data estate AI-ready?",
        "options": [
          {
            "value": 4,
            "text": "Ready for AI use"
          },
          {
            "value": 3,
            "text": "Mostly ready with minor gaps"
          },
          {
            "value": 2,
            "text": "Partially usable with remediation needed"
          },
          {
            "value": 1,
            "text": "Limited usable data available"
          },
          {
            "value": 0,
            "text": "Not suitable"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Assess the quality, permitted use and accessibility of data for the intended AI use case."
      },
      {
        "id": "q19",
        "question": "19. Have you assessed AI infrastructure requirements?",
        "options": [
          {
            "value": 4,
            "text": "Completed formal assessment"
          },
          {
            "value": 3,
            "text": "Assessment in progress"
          },
          {
            "value": 2,
            "text": "Discussed but not fully assessed"
          },
          {
            "value": 1,
            "text": "Aware but not assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Size AI compute, storage and networking against tested workload requirements."
      },
      {
        "id": "q20",
        "question": "20. Have you evaluated AI workload venue requirements?",
        "options": [
          {
            "value": 4,
            "text": "Completed formal assessment"
          },
          {
            "value": 3,
            "text": "Assessment in progress"
          },
          {
            "value": 2,
            "text": "Discussed but not fully assessed"
          },
          {
            "value": 1,
            "text": "Aware but not assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Compare AI venue options against data control, economics and operational constraints."
      },
      {
        "id": "q21",
        "question": "21. Do you have internal cloud architecture capability?",
        "options": [
          {
            "value": 4,
            "text": "Strong internal capability"
          },
          {
            "value": 3,
            "text": "Adequate capability with gaps"
          },
          {
            "value": 2,
            "text": "Some capability in pockets"
          },
          {
            "value": 1,
            "text": "Limited capability"
          },
          {
            "value": 0,
            "text": "No capability"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Assign architecture capability to the placement decisions that need it."
      },
      {
        "id": "q22",
        "question": "22. Do you have documented governance processes?",
        "options": [
          {
            "value": 4,
            "text": "Approved and enforced"
          },
          {
            "value": 3,
            "text": "Documented and adopted"
          },
          {
            "value": 2,
            "text": "Partially defined or informal"
          },
          {
            "value": 1,
            "text": "Under consideration"
          },
          {
            "value": 0,
            "text": "Not in place"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Document decision rights, exceptions and the operating governance process."
      },
      {
        "id": "q23",
        "question": "23. Do executive stakeholders participate in workload decisions?",
        "options": [
          {
            "value": 4,
            "text": "Actively involved across business units"
          },
          {
            "value": 3,
            "text": "Key units regularly involved"
          },
          {
            "value": 2,
            "text": "Some business involvement"
          },
          {
            "value": 1,
            "text": "Limited business involvement"
          },
          {
            "value": 0,
            "text": "No involvement"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Include business owners in workload decisions and record the agreed trade-offs."
      },
      {
        "id": "q24",
        "question": "24. Do you maintain technology roadmaps?",
        "options": [
          {
            "value": 4,
            "text": "Maintained and actively governed"
          },
          {
            "value": 3,
            "text": "Mostly maintained"
          },
          {
            "value": 2,
            "text": "Partially maintained"
          },
          {
            "value": 1,
            "text": "Informal or outdated"
          },
          {
            "value": 0,
            "text": "No roadmap"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Maintain a sequenced technology roadmap with owners, dependencies and decision dates."
      },
      {
        "id": "q25",
        "question": "25. Do you regularly reassess workload placement?",
        "options": [
          {
            "value": 4,
            "text": "Reviewed on a defined schedule"
          },
          {
            "value": 3,
            "text": "Reviewed periodically"
          },
          {
            "value": 2,
            "text": "Reviewed occasionally"
          },
          {
            "value": 1,
            "text": "Rarely reviewed"
          },
          {
            "value": 0,
            "text": "Never reviewed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Schedule placement reviews when demand, cost, risk or business priorities change."
      }
    ]
  },
  "SOVEREIGNTY": {
    "label": "Digital Sovereignty Assessment",
    "path": "assess-sovereignty.html",
    "interest": "Digital Sovereignty",
    "direction": "maturity",
    "groups": [
      {
        "name": "Jurisdiction",
        "indices": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "name": "Residency",
        "indices": [
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        "name": "Access",
        "indices": [
          10,
          11,
          12,
          13,
          14
        ]
      },
      {
        "name": "Control",
        "indices": [
          15,
          16,
          17,
          18,
          19
        ]
      },
      {
        "name": "Recoverability",
        "indices": [
          20,
          21,
          22,
          23,
          24
        ]
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "1. Do you know which jurisdictions govern your critical workloads?",
        "options": [
          {
            "value": 4,
            "text": "Fully mapped and understood"
          },
          {
            "value": 3,
            "text": "Mostly mapped"
          },
          {
            "value": 2,
            "text": "Partially mapped"
          },
          {
            "value": 1,
            "text": "Limited visibility"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map the jurisdictions governing critical workloads and assign an accountable owner."
      },
      {
        "id": "q2",
        "question": "2. Have contractual jurisdictional obligations been formally reviewed?",
        "options": [
          {
            "value": 4,
            "text": "Formally reviewed and current"
          },
          {
            "value": 3,
            "text": "Reviewed with minor gaps"
          },
          {
            "value": 2,
            "text": "Partially reviewed"
          },
          {
            "value": 1,
            "text": "Informally or rarely reviewed"
          },
          {
            "value": 0,
            "text": "Not reviewed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Arrange a qualified review of provider contracts and jurisdictional obligations."
      },
      {
        "id": "q3",
        "question": "3. Do executives understand the legal implications of cloud provider jurisdictions?",
        "options": [
          {
            "value": 4,
            "text": "Clearly understood and quantified"
          },
          {
            "value": 3,
            "text": "Mostly understood"
          },
          {
            "value": 2,
            "text": "Partially understood"
          },
          {
            "value": 1,
            "text": "Limited understanding"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Give executives a clear account of jurisdiction dependencies and their business implications."
      },
      {
        "id": "q4",
        "question": "4. Do technology procurement processes include jurisdiction reviews?",
        "options": [
          {
            "value": 4,
            "text": "Embedded in procurement process"
          },
          {
            "value": 3,
            "text": "Usually included in procurement"
          },
          {
            "value": 2,
            "text": "Sometimes included informally"
          },
          {
            "value": 1,
            "text": "Rarely included"
          },
          {
            "value": 0,
            "text": "Not included"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Include jurisdiction checks in procurement approval and exception handling."
      },
      {
        "id": "q5",
        "question": "5. Can you identify all critical providers operating outside South Africa?",
        "options": [
          {
            "value": 4,
            "text": "Complete provider visibility"
          },
          {
            "value": 3,
            "text": "Mostly complete visibility"
          },
          {
            "value": 2,
            "text": "Partial provider visibility"
          },
          {
            "value": 1,
            "text": "Limited visibility"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Maintain a current register of critical providers and their operating jurisdictions."
      },
      {
        "id": "q6",
        "question": "6. Do you know where critical data is physically stored?",
        "options": [
          {
            "value": 4,
            "text": "Fully mapped and understood"
          },
          {
            "value": 3,
            "text": "Mostly mapped"
          },
          {
            "value": 2,
            "text": "Partially mapped"
          },
          {
            "value": 1,
            "text": "Limited visibility"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map where critical data is stored, replicated and backed up."
      },
      {
        "id": "q7",
        "question": "7. Do you classify information by sensitivity?",
        "options": [
          {
            "value": 4,
            "text": "Classified and actively governed"
          },
          {
            "value": 3,
            "text": "Mostly classified"
          },
          {
            "value": 2,
            "text": "Partially classified"
          },
          {
            "value": 1,
            "text": "Limited classification"
          },
          {
            "value": 0,
            "text": "Not classified"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Classify information and assign owners before deciding its permitted locations."
      },
      {
        "id": "q8",
        "question": "8. Do you maintain a data residency register?",
        "options": [
          {
            "value": 4,
            "text": "Fully documented and governed"
          },
          {
            "value": 3,
            "text": "Mostly documented"
          },
          {
            "value": 2,
            "text": "Partially documented"
          },
          {
            "value": 1,
            "text": "Informal or limited documentation"
          },
          {
            "value": 0,
            "text": "Not documented"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Maintain a data-residency register covering production, backup and recovery copies."
      },
      {
        "id": "q9",
        "question": "9. Are residency requirements documented?",
        "options": [
          {
            "value": 4,
            "text": "Fully documented and governed"
          },
          {
            "value": 3,
            "text": "Mostly documented"
          },
          {
            "value": 2,
            "text": "Partially documented"
          },
          {
            "value": 1,
            "text": "Informal or limited documentation"
          },
          {
            "value": 0,
            "text": "Not documented"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Document residency requirements and the evidence needed to validate them."
      },
      {
        "id": "q10",
        "question": "10. Are residency requirements regularly reviewed?",
        "options": [
          {
            "value": 4,
            "text": "Reviewed on a defined schedule"
          },
          {
            "value": 3,
            "text": "Reviewed periodically"
          },
          {
            "value": 2,
            "text": "Reviewed occasionally"
          },
          {
            "value": 1,
            "text": "Rarely reviewed"
          },
          {
            "value": 0,
            "text": "Never reviewed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review residency arrangements when providers, contracts or data flows change."
      },
      {
        "id": "q11",
        "question": "11. Do you know who can access critical information?",
        "options": [
          {
            "value": 4,
            "text": "Complete access visibility"
          },
          {
            "value": 3,
            "text": "Mostly understood"
          },
          {
            "value": 2,
            "text": "Partial visibility"
          },
          {
            "value": 1,
            "text": "Limited visibility"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map who can access critical information, including providers and support teams."
      },
      {
        "id": "q12",
        "question": "12. Do you review privileged access regularly?",
        "options": [
          {
            "value": 4,
            "text": "Reviewed on a defined schedule"
          },
          {
            "value": 3,
            "text": "Reviewed periodically"
          },
          {
            "value": 2,
            "text": "Reviewed occasionally"
          },
          {
            "value": 1,
            "text": "Rarely reviewed"
          },
          {
            "value": 0,
            "text": "Never reviewed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review privileged access on a defined schedule and retire unjustified permissions."
      },
      {
        "id": "q13",
        "question": "13. Do third-party providers have access to sensitive information?",
        "options": [
          {
            "value": 4,
            "text": "Fully known and governed"
          },
          {
            "value": 3,
            "text": "Mostly known and governed"
          },
          {
            "value": 2,
            "text": "Partially known"
          },
          {
            "value": 1,
            "text": "Limited visibility"
          },
          {
            "value": 0,
            "text": "unmanaged"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Identify and govern third-party access with named owners and expiry conditions."
      },
      {
        "id": "q14",
        "question": "14. Are access controls audited?",
        "options": [
          {
            "value": 4,
            "text": "Fully auditable"
          },
          {
            "value": 3,
            "text": "Mostly auditable"
          },
          {
            "value": 2,
            "text": "Partially auditable"
          },
          {
            "value": 1,
            "text": "Limited auditability"
          },
          {
            "value": 0,
            "text": "Not auditable"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Test whether access activity can be traced and audited for critical information."
      },
      {
        "id": "q15",
        "question": "15. Do executives receive access governance reporting?",
        "options": [
          {
            "value": 4,
            "text": "Regular executive reporting"
          },
          {
            "value": 3,
            "text": "Periodic executive reporting"
          },
          {
            "value": 2,
            "text": "Ad-hoc reporting"
          },
          {
            "value": 1,
            "text": "Limited reporting"
          },
          {
            "value": 0,
            "text": "No reporting"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Report material access exceptions and remediation progress to accountable executives."
      },
      {
        "id": "q16",
        "question": "16. Do you maintain a documented sovereignty governance framework?",
        "options": [
          {
            "value": 4,
            "text": "Approved and enforced"
          },
          {
            "value": 3,
            "text": "Documented and adopted"
          },
          {
            "value": 2,
            "text": "Partially defined or informal"
          },
          {
            "value": 1,
            "text": "Under consideration"
          },
          {
            "value": 0,
            "text": "Not in place"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Approve a sovereignty governance framework with decision and exception ownership."
      },
      {
        "id": "q17",
        "question": "17. Are sovereignty risks included in governance reviews?",
        "options": [
          {
            "value": 4,
            "text": "Formally assessed and governed"
          },
          {
            "value": 3,
            "text": "Regularly assessed"
          },
          {
            "value": 2,
            "text": "Partially or informally assessed"
          },
          {
            "value": 1,
            "text": "Rarely assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Include material sovereignty dependencies in the regular governance review."
      },
      {
        "id": "q18",
        "question": "18. Do executives understand strategic technology dependencies?",
        "options": [
          {
            "value": 4,
            "text": "Dependencies mapped and governed"
          },
          {
            "value": 3,
            "text": "Mostly understood"
          },
          {
            "value": 2,
            "text": "Partially understood"
          },
          {
            "value": 1,
            "text": "Limited dependency visibility"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map strategic technology dependencies and the consequences of losing control over them."
      },
      {
        "id": "q19",
        "question": "19. Do you evaluate sovereignty before adopting new platforms?",
        "options": [
          {
            "value": 4,
            "text": "Always evaluated before adoption"
          },
          {
            "value": 3,
            "text": "Usually evaluated"
          },
          {
            "value": 2,
            "text": "Sometimes evaluated"
          },
          {
            "value": 1,
            "text": "Rarely evaluated"
          },
          {
            "value": 0,
            "text": "Not evaluated"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Evaluate control, access and recoverability requirements before adopting a platform."
      },
      {
        "id": "q20",
        "question": "20. Do you maintain provider dependency assessments?",
        "options": [
          {
            "value": 4,
            "text": "Dependencies mapped and governed"
          },
          {
            "value": 3,
            "text": "Mostly understood"
          },
          {
            "value": 2,
            "text": "Partially understood"
          },
          {
            "value": 1,
            "text": "Limited dependency visibility"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Maintain provider dependency assessments and revisit critical concentration risks."
      },
      {
        "id": "q21",
        "question": "21. Can critical data be exported independently of providers?",
        "options": [
          {
            "value": 4,
            "text": "Independently exportable and tested"
          },
          {
            "value": 3,
            "text": "Exportable with minor constraints"
          },
          {
            "value": 2,
            "text": "Partially exportable"
          },
          {
            "value": 1,
            "text": "Difficult to export"
          },
          {
            "value": 0,
            "text": "Not exportable"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Test independent data export and restoration with representative critical data."
      },
      {
        "id": "q22",
        "question": "22. Do you maintain documented exit strategies?",
        "options": [
          {
            "value": 4,
            "text": "Documented and maintained"
          },
          {
            "value": 3,
            "text": "Documented with gaps"
          },
          {
            "value": 2,
            "text": "Partially documented"
          },
          {
            "value": 1,
            "text": "Informal or outdated"
          },
          {
            "value": 0,
            "text": "No exit strategy"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Document a provider exit plan covering data, contracts, transition and operating ownership."
      },
      {
        "id": "q23",
        "question": "23. Have provider exit plans been tested?",
        "options": [
          {
            "value": 4,
            "text": "Tested and validated"
          },
          {
            "value": 3,
            "text": "Partially tested"
          },
          {
            "value": 2,
            "text": "Planned but not tested"
          },
          {
            "value": 1,
            "text": "Discussed only"
          },
          {
            "value": 0,
            "text": "Not tested"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Exercise exit steps and record what succeeds, fails and needs remediation."
      },
      {
        "id": "q24",
        "question": "24. Can critical workloads be migrated if required?",
        "options": [
          {
            "value": 4,
            "text": "Migration-ready"
          },
          {
            "value": 3,
            "text": "Mostly migration-ready"
          },
          {
            "value": 2,
            "text": "Possible with significant effort"
          },
          {
            "value": 1,
            "text": "Difficult to migrate"
          },
          {
            "value": 0,
            "text": "Not migration-ready"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Validate migration prerequisites, capacity and dependencies for critical workloads."
      },
      {
        "id": "q25",
        "question": "25. Do executives review recoverability as part of governance?",
        "options": [
          {
            "value": 4,
            "text": "Regular executive reporting"
          },
          {
            "value": 3,
            "text": "Periodic executive reporting"
          },
          {
            "value": 2,
            "text": "Ad-hoc reporting"
          },
          {
            "value": 1,
            "text": "Limited reporting"
          },
          {
            "value": 0,
            "text": "No reporting"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review recoverability evidence and unresolved limitations with accountable executives."
      }
    ]
  },
  "AI_READINESS": {
    "label": "AI Readiness Assessment",
    "path": "assess-ai-readiness.html",
    "interest": "AI Readiness",
    "direction": "maturity",
    "groups": [
      {
        "name": "Data Readiness",
        "indices": [
          0,
          1,
          2,
          3,
          4
        ]
      },
      {
        "name": "Infrastructure Readiness",
        "indices": [
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        "name": "Governance Readiness",
        "indices": [
          10,
          11,
          12,
          13,
          14
        ]
      },
      {
        "name": "Capability Readiness",
        "indices": [
          15,
          16,
          17,
          18,
          19
        ]
      },
      {
        "name": "Operational Readiness",
        "indices": [
          20,
          21,
          22,
          23,
          24
        ]
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "1. Is your business data centrally accessible?",
        "options": [
          {
            "value": 4,
            "text": "Fully centralised and accessible"
          },
          {
            "value": 3,
            "text": "Mostly accessible across key systems"
          },
          {
            "value": 2,
            "text": "Partially accessible with some silos"
          },
          {
            "value": 1,
            "text": "Limited access across disconnected systems"
          },
          {
            "value": 0,
            "text": "not accessible"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map the data needed for the selected AI use case and resolve access barriers."
      },
      {
        "id": "q2",
        "question": "2. Do you trust the quality of your data?",
        "options": [
          {
            "value": 4,
            "text": "Trusted and actively governed"
          },
          {
            "value": 3,
            "text": "Mostly trusted with known issues"
          },
          {
            "value": 2,
            "text": "Variable quality across systems"
          },
          {
            "value": 1,
            "text": "Limited trust in key datasets"
          },
          {
            "value": 0,
            "text": "unreliable"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Validate data quality against the intended decision or task, with a named owner."
      },
      {
        "id": "q3",
        "question": "3. Do you maintain formal data governance?",
        "options": [
          {
            "value": 4,
            "text": "Approved and enforced"
          },
          {
            "value": 3,
            "text": "Documented and adopted"
          },
          {
            "value": 2,
            "text": "Partially defined or informal"
          },
          {
            "value": 1,
            "text": "Under consideration"
          },
          {
            "value": 0,
            "text": "Not in place"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Define data ownership, permitted use, quality controls and exception handling."
      },
      {
        "id": "q4",
        "question": "4. Can critical business information be used for AI initiatives?",
        "options": [
          {
            "value": 4,
            "text": "Ready for AI use"
          },
          {
            "value": 3,
            "text": "Mostly ready with minor gaps"
          },
          {
            "value": 2,
            "text": "Partially usable with remediation needed"
          },
          {
            "value": 1,
            "text": "Limited usable data available"
          },
          {
            "value": 0,
            "text": "Not suitable"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Check whether the intended AI use can lawfully and reliably use the necessary information."
      },
      {
        "id": "q5",
        "question": "5. Do you understand data ownership across the organisation?",
        "options": [
          {
            "value": 4,
            "text": "Clear ownership across all domains"
          },
          {
            "value": 3,
            "text": "Mostly clear ownership"
          },
          {
            "value": 2,
            "text": "Some ownership defined"
          },
          {
            "value": 1,
            "text": "Limited ownership clarity"
          },
          {
            "value": 0,
            "text": "no defined ownership"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Assign accountable owners to the data domains that the AI use case depends on."
      },
      {
        "id": "q6",
        "question": "6. Can your infrastructure support AI workloads?",
        "options": [
          {
            "value": 4,
            "text": "Fully capable today"
          },
          {
            "value": 3,
            "text": "Mostly capable with minor gaps"
          },
          {
            "value": 2,
            "text": "Partially capable with constraints"
          },
          {
            "value": 1,
            "text": "Limited capability"
          },
          {
            "value": 0,
            "text": "Not capable"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Test infrastructure against the intended AI workload before committing to capacity."
      },
      {
        "id": "q7",
        "question": "7. Have AI infrastructure requirements been assessed?",
        "options": [
          {
            "value": 4,
            "text": "Completed formal assessment"
          },
          {
            "value": 3,
            "text": "Assessment in progress"
          },
          {
            "value": 2,
            "text": "Discussed but not fully assessed"
          },
          {
            "value": 1,
            "text": "Aware but not assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Assess compute, storage, network and integration requirements for the selected use case."
      },
      {
        "id": "q8",
        "question": "8. Do you understand the economics of AI workloads?",
        "options": [
          {
            "value": 4,
            "text": "Clearly understood and quantified"
          },
          {
            "value": 3,
            "text": "Mostly understood"
          },
          {
            "value": 2,
            "text": "Partially understood"
          },
          {
            "value": 1,
            "text": "Limited understanding"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Model operating costs and unit economics using measured usage assumptions."
      },
      {
        "id": "q9",
        "question": "9. Have you evaluated cloud, sovereign and hybrid AI deployment options?",
        "options": [
          {
            "value": 4,
            "text": "Completed formal assessment"
          },
          {
            "value": 3,
            "text": "Assessment in progress"
          },
          {
            "value": 2,
            "text": "Discussed but not fully assessed"
          },
          {
            "value": 1,
            "text": "Aware but not assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Compare cloud, private and hybrid options against control, performance and operating needs."
      },
      {
        "id": "q10",
        "question": "10. Can infrastructure scale with AI demand?",
        "options": [
          {
            "value": 4,
            "text": "Scales predictably with demand"
          },
          {
            "value": 3,
            "text": "Mostly scalable with known limits"
          },
          {
            "value": 2,
            "text": "Partially scalable"
          },
          {
            "value": 1,
            "text": "Limited scalability"
          },
          {
            "value": 0,
            "text": "Cannot scale"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Load-test the proposed scaling approach within a bounded evaluation environment."
      },
      {
        "id": "q11",
        "question": "11. Do you have documented AI governance policies?",
        "options": [
          {
            "value": 4,
            "text": "Approved and enforced"
          },
          {
            "value": 3,
            "text": "Documented and adopted"
          },
          {
            "value": 2,
            "text": "Partially defined or informal"
          },
          {
            "value": 1,
            "text": "Under consideration"
          },
          {
            "value": 0,
            "text": "Not in place"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Approve AI-use policies, review responsibilities and exception handling."
      },
      {
        "id": "q12",
        "question": "12. Are AI risks formally assessed?",
        "options": [
          {
            "value": 4,
            "text": "Formally assessed and governed"
          },
          {
            "value": 3,
            "text": "Regularly assessed"
          },
          {
            "value": 2,
            "text": "Partially or informally assessed"
          },
          {
            "value": 1,
            "text": "Rarely assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Assess use-case risks and define the controls and evidence needed before release."
      },
      {
        "id": "q13",
        "question": "13. Has accountability for AI been defined?",
        "options": [
          {
            "value": 4,
            "text": "Clear accountable owners defined"
          },
          {
            "value": 3,
            "text": "Mostly defined ownership"
          },
          {
            "value": 2,
            "text": "Partial ownership assigned"
          },
          {
            "value": 1,
            "text": "Limited ownership clarity"
          },
          {
            "value": 0,
            "text": "No accountability"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Name the business and technical owners accountable for the AI service."
      },
      {
        "id": "q14",
        "question": "14. Are sovereignty implications considered for AI initiatives?",
        "options": [
          {
            "value": 4,
            "text": "Formally assessed and governed"
          },
          {
            "value": 3,
            "text": "Regularly assessed"
          },
          {
            "value": 2,
            "text": "Partially or informally assessed"
          },
          {
            "value": 1,
            "text": "Rarely assessed"
          },
          {
            "value": 0,
            "text": "Not assessed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review data control, provider dependence and residency implications for the AI use case."
      },
      {
        "id": "q15",
        "question": "15. Do executives receive AI governance reporting?",
        "options": [
          {
            "value": 4,
            "text": "Regular executive reporting"
          },
          {
            "value": 3,
            "text": "Periodic executive reporting"
          },
          {
            "value": 2,
            "text": "Ad-hoc reporting"
          },
          {
            "value": 1,
            "text": "Limited reporting"
          },
          {
            "value": 0,
            "text": "No reporting"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Report AI risk, cost, performance and unresolved exceptions to the accountable executives."
      },
      {
        "id": "q16",
        "question": "16. Do leaders understand AI opportunities?",
        "options": [
          {
            "value": 4,
            "text": "Clearly understood and quantified"
          },
          {
            "value": 3,
            "text": "Mostly understood"
          },
          {
            "value": 2,
            "text": "Partially understood"
          },
          {
            "value": 1,
            "text": "Limited understanding"
          },
          {
            "value": 0,
            "text": "Confirmed gap: no established practice or visibility"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Agree a bounded business problem and the evidence that will show whether AI helps."
      },
      {
        "id": "q17",
        "question": "17. Does the organisation possess AI-related skills?",
        "options": [
          {
            "value": 4,
            "text": "Strong internal capability"
          },
          {
            "value": 3,
            "text": "Adequate capability with gaps"
          },
          {
            "value": 2,
            "text": "Some capability in pockets"
          },
          {
            "value": 1,
            "text": "Limited capability"
          },
          {
            "value": 0,
            "text": "No capability"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map required AI skills and close gaps through the appropriate internal or partner capability."
      },
      {
        "id": "q18",
        "question": "18. Are AI training programmes in place?",
        "options": [
          {
            "value": 4,
            "text": "Formal training programme in place"
          },
          {
            "value": 3,
            "text": "Training available for key teams"
          },
          {
            "value": 2,
            "text": "Ad-hoc training only"
          },
          {
            "value": 1,
            "text": "Limited awareness activity"
          },
          {
            "value": 0,
            "text": "No training"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Train the affected teams on permitted use, limitations and escalation."
      },
      {
        "id": "q19",
        "question": "19. Do business units participate in AI planning?",
        "options": [
          {
            "value": 4,
            "text": "Actively involved across business units"
          },
          {
            "value": 3,
            "text": "Key units regularly involved"
          },
          {
            "value": 2,
            "text": "Some business involvement"
          },
          {
            "value": 1,
            "text": "Limited business involvement"
          },
          {
            "value": 0,
            "text": "No involvement"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Include the business units whose workflows and decisions will change."
      },
      {
        "id": "q20",
        "question": "20. Can the organisation adapt operating models for AI?",
        "options": [
          {
            "value": 4,
            "text": "Defined and operationalised"
          },
          {
            "value": 3,
            "text": "Defined with partial adoption"
          },
          {
            "value": 2,
            "text": "Informal or emerging model"
          },
          {
            "value": 1,
            "text": "Under consideration"
          },
          {
            "value": 0,
            "text": "No operating model"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Define the workflow changes, human review and ownership required to use AI effectively."
      },
      {
        "id": "q21",
        "question": "21. Do you have a defined AI operating model?",
        "options": [
          {
            "value": 4,
            "text": "Defined and operationalised"
          },
          {
            "value": 3,
            "text": "Defined with partial adoption"
          },
          {
            "value": 2,
            "text": "Informal or emerging model"
          },
          {
            "value": 1,
            "text": "Under consideration"
          },
          {
            "value": 0,
            "text": "No operating model"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Specify the production operating model, service owner and support responsibilities."
      },
      {
        "id": "q22",
        "question": "22. Can AI systems be monitored effectively?",
        "options": [
          {
            "value": 4,
            "text": "Continuously monitored with controls"
          },
          {
            "value": 3,
            "text": "Regular monitoring in place"
          },
          {
            "value": 2,
            "text": "Partial monitoring"
          },
          {
            "value": 1,
            "text": "Limited monitoring"
          },
          {
            "value": 0,
            "text": "No monitoring"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Define monitoring for service health, cost, output quality and exception response."
      },
      {
        "id": "q23",
        "question": "23. Do you have processes for model lifecycle management?",
        "options": [
          {
            "value": 4,
            "text": "Formal lifecycle management in place"
          },
          {
            "value": 3,
            "text": "Defined process with some gaps"
          },
          {
            "value": 2,
            "text": "Informal lifecycle practices"
          },
          {
            "value": 1,
            "text": "Limited lifecycle control"
          },
          {
            "value": 0,
            "text": "No lifecycle process"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Manage model and prompt changes through versioning, evaluation and rollback decisions."
      },
      {
        "id": "q24",
        "question": "24. Can AI outputs be audited?",
        "options": [
          {
            "value": 4,
            "text": "Fully auditable"
          },
          {
            "value": 3,
            "text": "Mostly auditable"
          },
          {
            "value": 2,
            "text": "Partially auditable"
          },
          {
            "value": 1,
            "text": "Limited auditability"
          },
          {
            "value": 0,
            "text": "Not auditable"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Retain appropriate decision and change evidence so AI outputs can be investigated."
      },
      {
        "id": "q25",
        "question": "25. Can AI initiatives move from pilot to production consistently?",
        "options": [
          {
            "value": 4,
            "text": "Consistently productionised"
          },
          {
            "value": 3,
            "text": "Often productionised with gaps"
          },
          {
            "value": 2,
            "text": "Sometimes moves beyond pilot"
          },
          {
            "value": 1,
            "text": "Rarely moves beyond pilot"
          },
          {
            "value": 0,
            "text": "Pilot-only"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Define pilot exit criteria and require operating-readiness evidence before production expansion."
      }
    ]
  },
  "SILVERFORT_IDENTITY": {
    "label": "Silverfort Identity Security Risk Assessment",
    "path": "assess-silverfort-identity.html",
    "interest": "Identity Security / Silverfort",
    "direction": "exposure",
    "groups": [
      {
        "name": "Identity estate and visibility",
        "indices": [
          0,
          1,
          2,
          3
        ]
      },
      {
        "name": "MFA and authentication enforcement",
        "indices": [
          4,
          5,
          6,
          7
        ]
      },
      {
        "name": "Privileged and third-party access",
        "indices": [
          8,
          9,
          10,
          11
        ]
      },
      {
        "name": "Service accounts and non-human identities",
        "indices": [
          12,
          13,
          14,
          15
        ]
      },
      {
        "name": "Identity threat detection and response",
        "indices": [
          16,
          17,
          18,
          19
        ]
      }
    ],
    "questions": [
      {
        "id": "q1",
        "question": "1. How accurately are your Active Directory and Entra ID authentication paths mapped?",
        "options": [
          {
            "value": 4,
            "text": "Documented and verified"
          },
          {
            "value": 2,
            "text": "Mostly mapped with tracked exceptions"
          },
          {
            "value": 0,
            "text": "Fragmented or incomplete mapping"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Map and validate Active Directory and Entra ID authentication paths for critical services."
      },
      {
        "id": "q2",
        "question": "2. How are legacy authentication protocols and applications identified?",
        "options": [
          {
            "value": 4,
            "text": "Inventoried with ownership and review"
          },
          {
            "value": 2,
            "text": "Partially inventoried"
          },
          {
            "value": 0,
            "text": "Important legacy paths remain unreviewed"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Inventory legacy protocols and applications, with owners and supported-control requirements."
      },
      {
        "id": "q3",
        "question": "3. How complete is the inventory of privileged human identities?",
        "options": [
          {
            "value": 4,
            "text": "Complete and periodically reviewed"
          },
          {
            "value": 2,
            "text": "Partial or inconsistently reviewed"
          },
          {
            "value": 0,
            "text": "No dependable privileged identity inventory"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Reconcile privileged human identities to accountable owners and review their necessity."
      },
      {
        "id": "q4",
        "question": "4. Are directory trust relationships and changes governed?",
        "options": [
          {
            "value": 4,
            "text": "Approved, logged and regularly reviewed"
          },
          {
            "value": 2,
            "text": "Documented with inconsistent reviews"
          },
          {
            "value": 0,
            "text": "Ad hoc or insufficiently monitored"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review directory trusts, their change approvals and the monitoring evidence."
      },
      {
        "id": "q5",
        "question": "5. Is MFA enforced for domain administrators across relevant authentication paths?",
        "options": [
          {
            "value": 4,
            "text": "Validated enforcement across relevant paths"
          },
          {
            "value": 2,
            "text": "Enforced with documented exceptions"
          },
          {
            "value": 0,
            "text": "Significant privileged authentication gaps"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Validate domain-administrator MFA on the relevant authentication paths with the identity specialists."
      },
      {
        "id": "q6",
        "question": "6. How are legacy applications without native MFA protected?",
        "options": [
          {
            "value": 4,
            "text": "Suitable compensating enforcement validated"
          },
          {
            "value": 2,
            "text": "Selected applications protected"
          },
          {
            "value": 0,
            "text": "Broad legacy MFA gaps remain"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Scope supported protection for legacy applications with the OEM; validate exceptions before enforcement."
      },
      {
        "id": "q7",
        "question": "7. How consistently are vendor and contractor logins protected?",
        "options": [
          {
            "value": 4,
            "text": "Consistent MFA and access expiry"
          },
          {
            "value": 2,
            "text": "Most accounts protected with exceptions"
          },
          {
            "value": 0,
            "text": "Inconsistent or unmanaged access"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Apply appropriate MFA, named ownership and access expiry to supplier and contractor access."
      },
      {
        "id": "q8",
        "question": "8. Are break-glass accounts safeguarded and recovery procedures tested?",
        "options": [
          {
            "value": 4,
            "text": "Documented and exercised controls"
          },
          {
            "value": 2,
            "text": "Controls exist but seldom tested"
          },
          {
            "value": 0,
            "text": "Unmanaged emergency access"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Document emergency-access safeguards and exercise recovery without disrupting essential services."
      },
      {
        "id": "q9",
        "question": "9. How are standing administrative privileges limited?",
        "options": [
          {
            "value": 4,
            "text": "Least privilege with regular review"
          },
          {
            "value": 2,
            "text": "Some standing privilege exceptions"
          },
          {
            "value": 0,
            "text": "Broad unreviewed standing access"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review standing administrative privilege and remove unjustified access."
      },
      {
        "id": "q10",
        "question": "10. Are privileged protocols covered by authentication-time controls?",
        "options": [
          {
            "value": 4,
            "text": "Relevant protocols verified"
          },
          {
            "value": 2,
            "text": "Partial coverage and tracked gaps"
          },
          {
            "value": 0,
            "text": "Important privileged protocols unprotected"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Validate authentication-time control coverage on the privileged protocols actually used."
      },
      {
        "id": "q11",
        "question": "11. How are third-party privileged accounts retired?",
        "options": [
          {
            "value": 4,
            "text": "Named ownership and enforced expiry"
          },
          {
            "value": 2,
            "text": "Mostly controlled, persistent exceptions"
          },
          {
            "value": 0,
            "text": "Shared or persistent unmanaged accounts"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Retire third-party privileged accounts using named ownership and enforced expiry."
      },
      {
        "id": "q12",
        "question": "12. Can privileged logins be traced to accountable individuals?",
        "options": [
          {
            "value": 4,
            "text": "Consistently attributable"
          },
          {
            "value": 2,
            "text": "Partial audit attribution"
          },
          {
            "value": 0,
            "text": "Shared identities or material audit gaps"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Resolve shared privileged identities or attribution gaps so logins can be investigated."
      },
      {
        "id": "q13",
        "question": "13. Do you have an owned inventory of service accounts and machine identities?",
        "options": [
          {
            "value": 4,
            "text": "Complete with accountable owners"
          },
          {
            "value": 2,
            "text": "Partial inventory"
          },
          {
            "value": 0,
            "text": "Significant unknown or orphaned identities"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Discover service accounts and machine identities and assign accountable owners."
      },
      {
        "id": "q14",
        "question": "14. Are service account privileges and interactive access restricted?",
        "options": [
          {
            "value": 4,
            "text": "Least privilege and restrictions validated"
          },
          {
            "value": 2,
            "text": "Some controls with exceptions"
          },
          {
            "value": 0,
            "text": "Broad privileges or interactive logins unchecked"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Validate service-account privileges and restrict unexpected interactive authentication where supported."
      },
      {
        "id": "q15",
        "question": "15. How are long-lived service credentials governed?",
        "options": [
          {
            "value": 4,
            "text": "Appropriate rotation and safeguards"
          },
          {
            "value": 2,
            "text": "Mixed controls and tracked exceptions"
          },
          {
            "value": 0,
            "text": "Weak oversight of persistent credentials"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Review long-lived credentials with the application owners and plan safe rotation or compensating controls."
      },
      {
        "id": "q16",
        "question": "16. Can unusual service-account activity be investigated?",
        "options": [
          {
            "value": 4,
            "text": "Monitored with tested response"
          },
          {
            "value": 2,
            "text": "Partial monitoring"
          },
          {
            "value": 0,
            "text": "Little detection or response capability"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Baseline service-account behaviour and test investigation of unexpected authentication activity."
      },
      {
        "id": "q17",
        "question": "17. Can on-premises and cloud identity events be correlated?",
        "options": [
          {
            "value": 4,
            "text": "Operationally correlated and reviewed"
          },
          {
            "value": 2,
            "text": "Partial correlation"
          },
          {
            "value": 0,
            "text": "Siloed telemetry"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Correlate relevant on-premises and cloud identity events in an operational investigation workflow."
      },
      {
        "id": "q18",
        "question": "18. How prepared is the team for password spraying and suspicious privileged logins?",
        "options": [
          {
            "value": 4,
            "text": "Exercised investigation workflow"
          },
          {
            "value": 2,
            "text": "Documented but rarely exercised"
          },
          {
            "value": 0,
            "text": "Reactive or manual investigation"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Exercise investigation of password spraying and suspicious privileged authentication."
      },
      {
        "id": "q19",
        "question": "19. Is there a tested playbook for privileged identity compromise?",
        "options": [
          {
            "value": 4,
            "text": "Tested containment and recovery"
          },
          {
            "value": 2,
            "text": "Documented but not tested"
          },
          {
            "value": 0,
            "text": "Ad hoc response"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Test the containment and recovery playbook for privileged identity compromise."
      },
      {
        "id": "q20",
        "question": "20. When were identity controls last independently validated?",
        "options": [
          {
            "value": 4,
            "text": "Within 12 months with remediation tracking"
          },
          {
            "value": 2,
            "text": "Partial or older review"
          },
          {
            "value": 0,
            "text": "No recent comprehensive validation"
          },
          {
            "value": 5,
            "text": "Unknown / not assessed"
          }
        ],
        "action": "Arrange a scoped independent validation and track agreed remediation to closure."
      }
    ]
  }
};});
