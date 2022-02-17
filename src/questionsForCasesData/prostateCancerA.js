export const prostateCancerA = {
    "Initial Presentation": [
        {
            id: 1,
            // questionType: 1, //Initial presentation
            // page: 1,
            // circle: 1,
            type: 'text',
            title: 'History',
            text: [
                'Mr. H is a 58M who presents to your office to discuss the management of a newly diagnosed prostate cancer.  His PSA has been monitored approximately annually for the past few years.  When it was first checked about 3 years ago, his PSA was 2.5.  His PSA gradually increased over the past several years.  Three months ago, his PSA was measured to be 3.8.  A repeat PSA two weeks later was found to be 4.3. A digital rectal exam done by his urologist was reportedly negative for any nodules.  He underwent a transrectal US-guided biopsy 6 weeks ago.  His prostate volume was measured at 25cc.  Biopsy demonstrated Gleason 3+3 adenocarcinoma in 1/6 right-sided cores (R base involved) and 4/6 left-sided cores (2/2 in L base, 1/2 in the L mid and apex cores) with a maximum of up to 40% of tissue involved.',
                'He has now been referred to your office to discuss possible treatment options. ',
                'He notes that he has occasional urinary frequency as well as nocturia twice a night, which has gradually increased from once nightly over the past 6-12 months.  He denies other significant urinary symptoms.  Otherwise, he feels pretty well overall and is in his usual state of health. He denies any significant fatigue and denies any new bony aches or pains.',
                'The remainder of his medical history is as below: ',
                'Past Medical History: HTN, HLD, bilateral cataracts, cervical radiculopathy ',
                'Past Surgical History: Hernia repair approximately 20 years ago, foot surgery as a child ',
                'Past Radiation History: None',
                'Medications: Lisinopril, Pravastatin, Cyclobenzaprine',
                'Allergies: NKDA',
                'Family History: No known oncologic family history',
                'Social History: Never smoker.  Denies ETOH use or other substance use.  He works in finance and is hoping to retire soon.  He is physically active and enjoys hiking and golf.',
                'Review of Systems: Negative except as above'
            ]
        },
        {
            id: 2,
            type: 'seeAnswerButton',
            title: '',
            questions: [
                {
                    question: 'While Mr. H does not does not report a lot of urinary symptoms, what tool might you use to quantify his urinary symptoms in this setting?',
                    answer: "The AUA symptom score is a common way to assess a patient's degree of obstructive urinary symptoms.  It can serve as a pre-treatment baseline and may also impact treatment decisions.   Scores range from 0-35 with higher scores representing worse urinary symptoms. A score of 0-7 is considered mild symptoms, 8-19 moderate symptoms, and 20-35 severe symptoms. An AUA score calculator can be found here:  https://www.mdapp.co/aua-symptom-score-for-bph-calculator-526/"
                },
                {
                    question: 'Aside from an AUA score, what other class of symptoms would you like to ask Mr. H about and what tool will you use to quantify these symptoms?',
                    answer: 'It is standard to ask patients about sexual function, which is standardly quantified using the Sexual Health Inventory for Men (SHIM) score. Scores range from 1-25 with lower scores indicating worse sexual function.'
                }
            ]
        },
        {
            id: 3,
            type: 'text',
            title: '',
            text: [
                'You have now completed your history and are ready to do a physical exam.'
            ]
        },
        {
            id: 4,
            type: 'text',
            title: 'Physical Exam',
            text: [
                "Mr. H’s vital signs were measured. His blood pressure was 161/68 and all other vital signs were within normal limits. "
            ]
        },
        {
            id: 5,
            type: 'seeAnswerButton',
            title: '',
            questions: [
                {
                    question:"In addition to a complete general exam, what components of the physical exam are most pertinent for this patient?  ",
                    answer:
                        "Important components of the physical exam include a digital rectal exam" + 
                        "to evaluate the prostate, a lymph node exam to evaluate for    lymphadenopathy, and an MSK exam to evaluate for bony pains suggestive of metastatic disease.\n You complete Mr. H’s physical exam.  Your findings are documented below.\n General: Well-developed, well-nourished and in no acute distress \n" +
                        "Head: NCAT                                                             Eyes: PERLLA, EOMI                                                      ENMT: No gross abnormalities Pulmonary: CTAB Cardiovascular: Regular rate and rhythm.No murmurs heard.GI: Soft, nontender and nondistended, normal bowel sounds                                                         Musculoskeletal: No palpable bony tenderness.                      Lymphatics: No palpable adenopathy                               Extremities: WWP                                                        Neurologic: Alert, oriented.No gross focal abnormalities.               DRE: No abnormalities noted on external exam.Palpation of the prostate reveals a small, soft, symmetric gland without any palpable nodules"
                }
            ]
        },
        {
            id: 6,
            type: 'learningPoints',
            title: 'Learning Points',
            text:[
                "-Epidemiology: In the US, prostate cancer is the most common non-cutaneous malignancy in men and is the second leading cause of cancer death in men after lung cancer.   aside from  there are approximately 9,000 new cases annually and comprises about 2.5% of GI malignancies in the US. The median age at diagnosis is men in their 60s. ",
                "-Risk factors: Older age and family history are important risk factors for prostate cancer.  Additionally, African American men have higher incidence and worse outcomes than Caucasian men.  ",
                "-Most common symptoms/signs: Most commonly, prostate cancer is asymptomatic.  Locally advanced disease may present with obstructive urinary symptoms.  If there is local extension to adjacent structures or significantly enlarged nodes symptoms of mass effect may be observed. Bony pain may be present in the setting of metastatic disease.   Baseline urinary symptoms at presentation are typically assessed with the AUA symptom score and sexual function is typically measured with the SHIM score. "
            ]
        }
    ],

    "Work-Up":[
        {       
            id:7,
            type: 'text',
            title: null,
            text: ["You have now completed an initial evaluation of Mr. H.  You now need to decide if additional work-up is required at this time. "]
        },
        {
            id:8,
            type: 'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"Aside from the testing that has been completed above, are there any other tests that you need to complete for risk stratifying Mr. H's prostate cancer?",
                    answer:"No other tests are required at this time. Possible answers may include MRI to rule out any suspicious lesions or to establish a baseline prior to starting active surveillance. Another possible answer might be genomic testing (ie Decipher, Oncotype DX, among others) to help decide between AS and active treatment.  Neither of these would be wrong, though neither is strictly required."
                }
            ]
        },
        {
            id:9,
            type: 'text',
            title:null,
            text:["You are now ready to proceed with risk stratification of Mr. H’s disease. "]
        }
    ],

    "Staging":[
        {
            id:10,
            type:'text',
            title:null,
            text:["Mr. H remembers that his urologist told him about different “risk levels” for prostate cancer.  He doesn’t remember exactly what “risk level” his urologist says his disease is."]
        },
        {
            id:11,
            type:"multiple choice",
            title:null,
            question: "Based on the given information, Mr. H's prostate cancer should be characterized as ___ risk prostate cancer, according to NCCN risk groups. ",
            options: [
                {
                    answer:"Very Low",
                    correct: false,
                    reason:"Patients with very low-risk prostate cancer must meet all the criteria for low risk disease, plus have fewer than 3 positive biopsy cores with and up to 50% tissue involvement in each involved core.  Additionally, PSA density must be less than 0.15 ng/mL/g.  Mr. H has 5 involved cores and his PSA density is slightly higher than 0.15. Therefore, he does not have very low risk prostate cancer. "
                },
                {
                    answer:"Low",
                    correct: true,
                    reason:"Patients with low-risk disease must have cT1-T2a disease, Gleason score 3+3, and a PSA <10 ng/mL.  Mr. H fits all of these criteria. "
                },
                {
                    answer:"Intermediate",
                    correct: false,
                    reason:"Mr. H does not meet any of the necessary clinical criteria for intermediate-risk prostate cancer. Try again. "
                },
                {
                    answer:"High",
                    correct:false,
                    reason:"Mr. H does not meet any of the necessary clinical criteria for high-risk prostate cancer. Try again. "
                },
                {
                    answer:"Very high",
                    correct:false,
                    reason:" Mr. H does not meet any of the necessary clinical criteria for very high-risk prostate cancer. Try again."
                },
                {
                    answer:"None of the above",
                    correct: false,
                    reason:null
                }
            ]
        },
        {
            id:12,
            type: 'learningPoints',
            title: "Learning Points  - Risk Stratification",
            text:[
                "-Prostate cancer can be stratified according to DRE findings, biopsy results, and PSA levels using the NCCN risk stratification schema.  NCCN risk groups are prognostic for likelihood of biochemical recurrence. If imaging (such as a prostate MRI) demonstrates a higher T-stage than DRE, it is useful to note both the clinical and radiologic T stage. ",
                "-Patients with low-risk disease must have cT1-T2a disease, Gleason score 3+3, and a PSA <10 ng/mL.  A patient with low-risk disease who also has fewer than 3 positive biopsy cores with and no more than 50% tissue involvement in each involved core is classified as having very low-risk disease. "
            ]
        }
    ]






}