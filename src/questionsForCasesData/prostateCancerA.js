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
    ],
    "Treatment Paradigm":[
        {
            id:13,
            type:'text',
            title:null,
            text:[
                "Now that you have determined that Mr. H has low-risk prostate cancer (Gleason 3+3, T1c, PSA 4.3) and need to decide on the next steps in his management."
            ]
        },
        {
            id:14,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"Mr. H says that his urologist recommended radical prostatectomy as the best option for the management of his prostate cancer.  Do you agree with this assessment?  What alternatives would you be sure to discuss with Mr. H during your consultation?",
                    answer:"While radical prostatectomy is an option for the treatment of low-risk prostate cancer, it should not be framed as a definitively superior treatment option.  Alternatives that should be discussed include active surveillance, EBRT, and brachytherapy. "
                },
                {
                    question:"You mention the possible alternatives of active surveillance, EBRT, and brachytherapy to Mr. H.  He is surprised to hear that one option for managing his cancer is to hold off on treating it for now.  He asks, 'What are the chances that I'll be able to avoid treatment of my prostate cancer all together?'  What do you think are the chances that Mr. H would require some form of definitive therapy over the next 10 years?",
                    answer:"Approximately 50% based on data from the ProtecT trial. That said, a reasonably healthy 58 year-old patient such as Mr. H has a life expectancy longer than 10 years.  With longer follow-up beyond 10 years, the likelihood that he would need definitive treatment at any point in the future would likely be higher than 50%. "
                },
                {
                    question:"If Mr. H does decide that he is interested in active surveillance, are there any additional tests you would like to order to confirm that he is a good candidate for active surveillance? ",
                    answer:"Additional tests may be done, though none are strictly necessary.  NCCN recommends consideration for a confirmatory prostate biopsy and/or a multiparametric prostate MRI in order to confirm candidacy for active surveillance.  If an MRI is to be done, it is a good idea to do this prior to the confirmatory biopsy so that any suspicious lesions can undergo targeted biopsy.  Patients with PI-RADS 4 or 5 lesions on mpMRI have been shown to be at increased risk for biopsy progression on active surveillance.  Additionally, genomic testing (Decipher, Oncotype DX, etc) could be ordered for men with low-risk (like Mr. H) or favorable intermediate-risk prostate cancer who are considering active surveillance. "
                },
                {
                    question:"Mr. H is interested in active surveillance but does have some concerns about leaving a cancer in his body untreated.  He asks, 'Is there an increased chance of dying from prostate cancer if I choose active surveillance?'  How would you respond to Mr. H? ",
                    answer:" Given Mr. H's low risk disease, the likelihood of prostate cancer death in his case would be quite small regardless of his treatment choice (active surveillance, radiation therapy, or radical prostatectomy).  In the 10-yr update from the ProtecT trial, there was no difference in prostate cancer-specific survival among those three treatment options. "
                },
                {
                    question:"Mr. H then asks, 'If I choose active surveillance and then do eventually have to get treated, would I just need the surgery or radiation that are options right now, or would the treatments be tougher since my cancer has gotten worse?' How might you respond to Mr. H? ",
                    answer:" It is true that active surveillance increases the likelihood of clinical disease progression (including things such as development of metastases, cT3/T4 disease, or initiation of long-term ADT) compared to surgery or radiation based on data from the ProtecT trial.  For example, 6.1% of men randomized to active surveillance developed metastatic disease on the ProtecT trial, compared to 2.4% and 2.9% for surgery and radiation respectively.  Similarly, a higher percentage of patients on active surveillance ultimately required long-term ADT (8.6% for AS vs 4.7% for surgery vs 5.5% RT).  Therefore, depending on Mr. H's subsequent disease course, additional therapy may be recommended in the future above and beyond what would be required to definitively manage his prostate cancer at this time. "
                },
                {
                    question:"Mr. H asks you, 'If I do decide to go with this active surveillance plan, how will you know if my cancer is getting worse and needs to be treated?' What tests would you use in order to monitor his prostate cancer and how frequently would you do them? ",
                    answer:"Per NCCN guidelines, recommendations for active surveillance include: " +
                    "-PSA no more often than q6 months unless clinically indicated  " + 
                    "-DRE no more often than q12 months unless clinically indicated  " + 
                    "-Repeat MRI no more often than q12 months unless clinically indicated " + 
                    "-Repeat biopsy no more often than q12 months unless clinically indicated " +
                    "-can do within 6 months if initial biopsy was less than 10 cores " + 
                    "-If there are no signs of clinical progression, it is also common practice to repeat biopsies approximately every 2 years instead of annually.  " + 
                    "-Prostate prostate biopsy should also be done if one of the other tests above shows abnormal or changing results "
                }
            ]
        },
        {
            id:15,
            type:'text',
            title:null,
            text:[
                "Mr. H thanks you for answering his questions and would like to proceed with active surveillance.  A multiparametric prostate MRI does not identify suspicious lesions and a confirmatory biopsy again demonstrates Gleason 3+3 disease, with results similar to his initial biopsy. "
            ]
        },
        {
            id:16,
            type:'text',
            title:null,
            text:[
                "As the two of you discussed, Mr. H had decided to proceed with active surveillance.  He continues to follow-up with you during his active surveillance plan, just in case he needs treatment. "
            ]
        },
        {
            id:17,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"Not sure how to display this question",
                    answer:"Not sure how to display this question"
                }
            ]
        },
        {
            id:18,
            type:'text',
            title:null,
            text:['Mr. H decides to continue with active surveillance per your recommendation. ']
        },
        {
            id:19,
            type:'text',
            title:null,
            text:["A year later, Mr. H returns to your office for a follow-up.  His most recent PSA is 7.  There is no change in his DRE.  He had a repeat TRUS biopsy two weeks ago per his plan urologist's plan for annual prostate biopsies.  The biopsy demonstrated Gleason 3+4 disease in 2/2 cores in the L base with up to 25% tissue involved.  Gleason 3+3 disease is found in 2/2 cores from the left mid with less than 5% tissue involvement.  All other cores on a standard 12-core biopsy were negative.  A repeat MRI is unchanged. "]
        },
        {
            id:20,
            type:"multiple choice",
            title:null,
            question: "Based on the given information, Mr. H's prostate cancer should be characterized as ___ risk prostate cancer, according to NCCN risk groups. ",
            options: [
                {
                    answer:"Low",
                    correct: false,
                    reason:"Due to the presence of Gleason 3+4 disease, Mr. H's prostate cancer is no longer considered low risk. "
                },
                {
                    answer:"Favorable Intermediate",
                    correct: true,
                    reason:"Mr. H has intermediate risk disease on the basis of his Gleason 3+4 biopsy findings, but does not meet criteria for unfavorable intermediate risk disease."
                },
                {
                    answer:"Unfavorable Intermediate",
                    correct:false,
                    reason:"Close! While Mr. H does have intermediate risk disease based on his new biopsy results, he does not meet the criteria for unfavorable intermediate risk (which would require multiple intermediate risk factors, Gleason 4+3 disease, or >50% positive biopsy cores)"
                },
                {
                    answer:"High",
                    correct:false,
                    reason:"Despite the change in his biopsy results, Mr. H does not meet any of the criteria for high risk prostate cancer."
                }
            ]
        },
        {
            id:21,
            type:'text',
            title:null,
            text:["Recommending definitive therapy at this time is a reasonable, and possibly preferred, approach in Mr. H’s case.  With regards to candidates for active surveillance, NCCN recommends that active surveillance is a potential treatment option for patients with low or favorable intermediate risk prostate cancer with life expectancy of at least 10 years. Additionally, precise criteria for triggering definitive therapy in patients on active surveillance are not universally established.  Because of the above, it would not be technically incorrect to consider continuation of active surveillance in Mr. H's case given that he still has favorable intermediate risk disease. That said, active surveillance should be approached with more caution in the setting of favorable intermediate risk disease.  Furthermore, the criteria by which a patient qualifies for favorable intermediate disease may also be relevant.  For example, a study by Musunuru et al (Journal of Urology 2016) compared outcomes in low and intermediate risk patients who were on active surveillance. In summary, their findings suggested that while active surveillance may be appropriate for patients with favorable intermediate risk disease with Gleason 6 disease, active surveillance leads to worse outcomes for patients with Gleason 7 disease. In Mr. H's case, he was reclassified as favorable intermediate risk disease by virtue of Gleason 3+4 disease on repeat biopsy. It is therefore a reasonable choice to proceed with definitive treatment in his case.   One possible approach in practice is to tend towards active surveillance for patients with low-risk disease and initiation of definitive therapy at the time of progression to intermediate risk disease.  However, it is important to understand that the available data paint a more nuanced picture with questions that remain incompletely answered as to the optimal candidates for active surveillance and the optimal criteria upon which active surveillance should give way to definitive therapy.  Additionally, patient age could be considered in this situation.  Had Mr. H been significantly older or had more significant comorbidities, having a higher threshold to transition from active surveillance to definitive therapy may be reasonable, as the competing risks of older age and other health issues may preclude the necessity for definitive therapy. "]
        },
        {
            id:22,
            type:'text',
            title:null,
            text:["After a discussion of continuing active surveillance vs starting definitive therapy, you and Mr. H agree that it is time to proceed with definitive therapy."]
        },
        {
            id:23,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"Not sure how to display this question",
                    answer:"Not sure how to display this question"
                }
            ]
        },
        {
            id: 24,
            type: 'learningPoints',
            title: 'Learning Points',
            text:[
                "After a discussion of his treatment options, Mr. H discloses that he is quite fearful of undergoing any procedures.  He would like to move forward with definitive treatment with EBRT and is not interested in surgery or brachytherapy.  You agree to treat Mr. H with EBRT. ",
                "Learning Points ",
                "Treatment Paradigm: ",
                "-Active Surveillance, RT with either ERBT or brachytherapy, and radical prostatectomy are all potentially treatment options for patients with low risk prostate cancer.  Approximately half of patients who opt for active surveillance may require some form of definitive therapy over the following 10 years. ",
                "-A confirmation biopsy and/or mpMRI may be done prior to initiating active surveillance to help confirm candidacy for active surveillance.  Molecular tumor analysis through genomic testing may also be ordered for patients considering active surveillance vs definitive therapy.  ",
                "-Active surveillance typically consists of serial DRE, PSA, prostate biopsy, and potentially prostate MRIs and regular intervals as outlined above ",
                "-If a patient is placed on active surveillance, it is important to have a plan for what findings on surveillance tests would prompt a recommendation for definitive therapy.  For patients who progress from low risk to favorable intermediate risk disease, there is some gray area as to whether active surveillance is an acceptable option.  However, active surveillance should be approached cautiously in the setting of favorable intermediate risk disease.  There is some evidence to suggest that the criteria by which a patient qualifies for favorable intermediate risk disease is important and that patients who progress by Gleason grade should not remain on active surveillance. In practice, a common approach may be to recommend definitive treatment once a patient progresses from low to intermediate risk disease.  ",
                "-For patients with favorable intermediate risk disease, definitive treatment options include radical prostatectomy and RT with either ERBT or brachytherapy. ADT is not typically recommended "
            ]
        }
    ]







}