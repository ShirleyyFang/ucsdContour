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
            type:'multiple choice',
            title:null,
            question:"Six months later, Mr. H's PSA is 6.0 (increased from 4.3).  He has no changes in symptoms.  What do you recommend at this point? ",
            options: [
                {
                    answer:"Continue with active surveillance (PSA q6 months; DRE, repeat biopsy, MRI no more often than q12 months)",
                    correct:true,
                    reason:""
                },
                {
                    answer:"Order additional tests (ie repeat prostate biopsy or MRI ahead of previous schedule).",
                    correct:false,
                    reason:"tests could be ordered due to the rising PSA, his disease remains low risk at this time and it is also acceptable to continue with active surveillance. "
                },
                {
                    answer:"Recommend definitive treatment.",
                    correct:false,
                    reason:"He continues to have low risk disease and remains a candidate for active surveillance.  Aside from a change in patient preference, it is unnecessary to switch to definitive therapy at this time"
                }
            ]
        },
        {
            id:18,
            type: 'text',
            title: null,
            text:['Great job, please proceed to next question']
        },
        {
            id:19,
            type:'text',
            title: null,
            text:['Based on prior background, please proceed to next question']
        },
        {
            id:20,
            type:'multiple choice',
            title:null,
            question: "After another 6 months pass, Mr. H's PSA is 6.2.  His DRE is unchanged. He undergoes a repeat prostate biopsy (1 year after his diagnosis) that demonstrates Gleason 3+3 disease in 1/6 R-sided cores and 4/6 L-sided cores with a maximum of up to 40% of tissue involved, similar to his prior biopsies. There is no change in his MRI findings. How would you like to proceed? ",
            options:[
                {   
                    answer:"Continue with active surveillance (PSA q6 months; DRE, repeat biopsy, MRI no more often than q12 months) ",
                    correct:true,
                    reason:"He has continued to undergo active surveillance without significant change in his disease status.  At this time, there is no need to order additional tests beyond his scheduled surveillance."
                },
                {
                    answer:"Order additional tests (ie repeat additional tests ahead of surveillance schedule).",
                    correct:false,
                    reason:""
                },
                {
                    answer:"Recommend definitive treatment.",
                    correct:false,
                    reason:"He has continued on active surveillance without significant change in his disease status. Aside from patient preference, there is no need to switch to definitive therapy at this time. "
                }
            ]
        },
        {
            id:21,
            type:'text',
            title:null,
            text:['Mr. H decides to continue with active surveillance per your recommendation. ']
        },
        {
            id:22,
            type:'text',
            title:null,
            text:["A year later, Mr. H returns to your office for a follow-up.  His most recent PSA is 7.  There is no change in his DRE.  He had a repeat TRUS biopsy two weeks ago per his plan urologist's plan for annual prostate biopsies.  The biopsy demonstrated Gleason 3+4 disease in 2/2 cores in the L base with up to 25% tissue involved.  Gleason 3+3 disease is found in 2/2 cores from the left mid with less than 5% tissue involvement.  All other cores on a standard 12-core biopsy were negative.  A repeat MRI is unchanged. "]
        },
        {
            id:23,
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
            id:24,
            type:'text',
            title:null,
            text:["Recommending definitive therapy at this time is a reasonable, and possibly preferred, approach in Mr. H’s case.  With regards to candidates for active surveillance, NCCN recommends that active surveillance is a potential treatment option for patients with low or favorable intermediate risk prostate cancer with life expectancy of at least 10 years. Additionally, precise criteria for triggering definitive therapy in patients on active surveillance are not universally established.  Because of the above, it would not be technically incorrect to consider continuation of active surveillance in Mr. H's case given that he still has favorable intermediate risk disease. That said, active surveillance should be approached with more caution in the setting of favorable intermediate risk disease.  Furthermore, the criteria by which a patient qualifies for favorable intermediate disease may also be relevant.  For example, a study by Musunuru et al (Journal of Urology 2016) compared outcomes in low and intermediate risk patients who were on active surveillance. In summary, their findings suggested that while active surveillance may be appropriate for patients with favorable intermediate risk disease with Gleason 6 disease, active surveillance leads to worse outcomes for patients with Gleason 7 disease. In Mr. H's case, he was reclassified as favorable intermediate risk disease by virtue of Gleason 3+4 disease on repeat biopsy. It is therefore a reasonable choice to proceed with definitive treatment in his case.   One possible approach in practice is to tend towards active surveillance for patients with low-risk disease and initiation of definitive therapy at the time of progression to intermediate risk disease.  However, it is important to understand that the available data paint a more nuanced picture with questions that remain incompletely answered as to the optimal candidates for active surveillance and the optimal criteria upon which active surveillance should give way to definitive therapy.  Additionally, patient age could be considered in this situation.  Had Mr. H been significantly older or had more significant comorbidities, having a higher threshold to transition from active surveillance to definitive therapy may be reasonable, as the competing risks of older age and other health issues may preclude the necessity for definitive therapy. "]
        },
        {
            id:25,
            type:'text',
            title:null,
            text:["After a discussion of continuing active surveillance vs starting definitive therapy, you and Mr. H agree that it is time to proceed with definitive therapy."]
        },
        {
            id:26,
            type:'checkboxes',
            title:null,
            question:"Which of the following would be reasonable treatment options for his favorable intermediate risk prostate cancer? Select all that apply ",
            selections:["Radical Prostatectomy","EBRT alone","EBRT + short-course ADT","EBRT + brachytherapy.","Brachytherapy alone"],
            answer:"The answer is Radical Prostatectomy, EBRT alone and Brachytherapy alone    Per NCCN guidelines, options for definitive therapy for favorable intermediate risk prostate cancer include radical prostatectomy, EBRT, or brachytherapy.  For favorable intermediate risk patients who undergo EBRT, the addition of a brachytherapy boost is not warranted.  With regards to the use of ADT, it is common to treat patients with favorable intermediate risk prostate cancer with radiation alone. The RTOG 9408 study demonstrated that short-course ADT, when added to EBRT, improved rates of biochemical failure, distant metastases, prostate-cancer specific mortality, and overall survival (Jones et al, NEJM 2011).  The majority of patients on this trial had intermediate risk disease, including patients with both favorable and unfavorable intermediate risk disease.  A subsequent secondary analysis (Zumsteg et al, JAMA Netw Open) suggests that improved outcomes with ADT were seen in patients with unfavorable intermediate risk disease but not in those with favorable intermediate risk disease.  That said, ADT could be considered even in the setting of favorable intermediate risk disease, especially for patients whose risk factors (PSA, DRE, biopsy, and imaging results if done) are close to meeting criteria for unfavorable intermediate risk disease.  "
        },
        {
            id: 27,
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
    ],

    "Radiation Planning":[
        {
            id:28,
            type:'text',
            title:null,
            text:[
                "Mr. H returns to your department to undergo his CT simulation.  In order to properly plan his treatment, you will need to simulate him properly."
            ]
        },
        {
            id: 29,
            type:"multiple choice",
            title:null,
            question:"Of the following options, how would you prefer to simulate the patient? ",
            options:[
                {
                    answer:"Empty bladder, full rectum",
                    correct:false,
                    reason:"A full bladder is preferable to an empty bladder for simulation because increased bladder fill will decrease the amount of the bladder wall contained within the RT field and may also potentially move bowel away from the treatment field.  It should be noted that having an entirely full bladder is likely to be uncomfortable for patients and difficult to reproduce on a daily basis.  Therefore a 'mostly full' or 'comfortably full' bladder is ideal.  An empty rectum is preferable to a full rectum as a full rectum can push the prostate anterior and is more difficult to reproduce than an empty rectum.  To that end, it is common to instruct patients to use an enema prior to simulation in order ensure an empty rectum. "
                },
                {
                    answer:"Empty bladder, empty rectum",
                    correcy:false,
                    reason:"A full bladder is preferable to an empty bladder for simulation because increased bladder fill will decrease the amount of the bladder wall contained within the RT field and may also potentially move bowel away from the treatment field.  It should be noted that having an entirely full bladder is likely to be uncomfortable for patients and difficult to reproduce on a daily basis.  Therefore a 'mostly full' or 'comfortably full' bladder is ideal.  An empty rectum is preferable to a full rectum as a full rectum can push the prostate anterior and is more difficult to reproduce than an empty rectum.  To that end, it is common to instruct patients to use an enema prior to simulation in order ensure an empty rectum. "
                },
                {
                    answer:"Full bladder, full rectum",
                    correct:false,
                    reason:"A full bladder is preferable to an empty bladder for simulation because increased bladder fill will decrease the amount of the bladder wall contained within the RT field and may also potentially move bowel away from the treatment field.  It should be noted that having an entirely full bladder is likely to be uncomfortable for patients and difficult to reproduce on a daily basis.  Therefore a 'mostly full' or 'comfortably full' bladder is ideal.  An empty rectum is preferable to a full rectum as a full rectum can push the prostate anterior and is more difficult to reproduce than an empty rectum.  To that end, it is common to instruct patients to use an enema prior to simulation in order ensure an empty rectum. "
                },{
                    answer:"Full bladder, empty rectum",
                    correct:true,
                    reason:"A full bladder is preferable to an empty bladder for simulation because increased bladder fill will decrease the amount of the bladder wall contained within the RT field and may also potentially move bowel away from the treatment field.  It should be noted that having an entirely full bladder is likely to be uncomfortable for patients and difficult to reproduce on a daily basis.  Therefore a 'mostly full' or 'comfortably full' bladder is ideal.  An empty rectum is preferable to a full rectum as a full rectum can push the prostate anterior and is more difficult to reproduce than an empty rectum.  To that end, it is common to instruct patients to use an enema prior to simulation in order ensure an empty rectum. "
                }
            ]
        },
        {
            id:30,
            type:'text',
            title:null,
            text:["good job! Please proceed to next question"]
        },
        {
            id:31,
            type:'text',
            title:null,
            text:["Based on prior background, please proceed to next question"]
        },
        {
            id:32,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"What else could you consider doing to limit the amount of variability in rectal filling from day to day?",
                    answer:"An endorectal balloon can be used at simulation and for daily treatments to limit intertreatment variability in rectal filling and prostate positioning.  For patients having difficulty maintaining an empty rectum during the treatment course, alterations in diet as well as medications like simethicone could be used to help address this issue."
                },
                {
                    question:"What position do you want his arms to be in during simulation?",
                    answer:"Arms should be out of the treatment field.  From prostate cancer patients, it is common to place the arms on the chest and have patients hold a ring in their hands to ensure that the arms do not unconsciously move down into the treatment field during treatment."
                },
                {
                    question:"What type of immobilization device would you use during simulation?",
                    answer:"A lower body Vac-Lok or similar device should be strongly considered to increase daily reproducibility. "
                }
            ]
        },
        {
            id:33,
            type:'learningPoints',
            title: 'Simulation',
            text:["Simulation is typically done with a comfortably full bladder and an empty rectum (typically achieve with enema prep).  An endorectal balloon can also be used for simulation and treatment, though this should be weighed against patient comfort.  Arms should be on the patient's chest and a lower body immobilization device is recommended."]
        },
        {
            id:34,
            type:'text',
            title:'Target Delineation',
            text:['Now that Mr. H has undergone a CT simulation, you need to determine what volumes you will treat.']
        },
        {
            id:35,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"In addition to the entire prostate, would you include any other structures in your CTV? ",
                    answer:"It is common to include the proximal SVs in the CTV for patients undergoing definitive EBRT for intermediate risk prostate cancer.  A risk adapted approach is also possible and has been used on multiple studies.  In such studies, the SVs may be excluded from the target volume if the risk of SV invasion is less than ~10-15% based on tools such as the Partin or MSKCC nomograms.   Ultimately, you decide to treat both the prostate as well as the proximal 1cm of the SVs in Mr. H's case. "
                },
                {
                    question:"What margins would you use to expand your CTV into a PTV?",
                    answer:"There is not a single correct answer, though it is common to use margins of approximately 5-7mm in all directions, with a slightly smaller margin posteriorly(~3-5mm) and possibly slightly larger margins in the superior and inferior direction (~7mm).  Precise margins will vary based on daily imaging and immobilization techniques.  "
                }
            ]
        },
        {
            id:36,
            type:'learningPoints',
            title:'Target Delineation',
            text:["The prostate will of course be included in the treatment volume.  It is common to include the proximal SVs in the treatment of favorable intermediate risk disease, though a risk adapted approach based on the likelihood of SV involvement has also been used. PTV margins of approximately 5-7mm are typically used, with slightly smaller margins posteriorly (~3-5mm) and possibly slightly larger margins in the superior and inferior direction (~7mm)"]
        },
        {
            id:37,
            type:'text',
            title:'Radiation technique',
            text:["In addition to deciding what volumes you want to treat, you need to decide what radiation technique you will use to treat Mr. H. "]
        },
        {
            id:38,
            type:"multiple choice",
            title:null,
            question:"What technique would you use to treat this patient? ",
            options:[
                {
                    answer:"3D CRT",
                    correct:true,
                    reason:"Any of the three listed options may be used in Mr. H’s case.  Please see the next slide for further explanation."
                },
                {
                    answer:"IMRT/VMAT",
                    correct:true,
                    reason:"Any of the three listed options may be used in Mr. H’s case.  Please see the next slide for further explanation.",
                },
                {
                    answer:"SBRT",
                    correct:true,
                    reason:"Any of the three listed options may be used in Mr. H’s case.  Please see the next slide for further explanation."
                }
            ]
        },
        {
            id:39,
            type:'learningPoints',
            title:'Learning Points',
            text:[
                "Radiation technique: While 3D CRT could be used for the treatment of prostate cancer, some of the retrospective studies done to compare the use of 3D CRT to IMRT have demonstrated decreased GI toxicity with the use of IMRT.  Nationwide, IMRT is the predominant technique used for treatment of prostate cancer.  While IMRT is frequently used and well-established as a suitable radiation technique for the management of prostate cancer, there is a growing body of literature surrounding the use of SBRT for the definitive treatment of prostate cancer.  They HYPO-RT-PC study, for example, was a multi-institutional, prospective, randomized, non-inferiority trial of 1,180 men with intermediate-high risk prostate cancer who were randomized to conventional fractionation vs ultra-hypofractionated treatment (7 fractions total, 3 days per week).  The study suggested that ultra-hypofractionation is non-inferior to conventional fractionation with regards to failure-free survival.  Early toxicity was greater with ultra-hypofractionation, but late toxicity was similar between the two groups. While this is still an emerging technique, the growing literature regarding SBRT for the definitive treatment of prostate cancer is reflected in the NCCN recommendation that SBRT is an acceptable treatment technique, with the caveat longer-term follow-up and additional prospective multi-institutional data are needed, especially due to theoretical concern for increased late toxicity."
            ]
        },
        {
            id:40,
            type:'text',
            title:'Dose Prescription',
            text:["Now that you have decided the technique you will use and the volumes you plan to treat, you will need to decide the proper treatment dose."]
        },
        {
            id:41,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"To what dose/fractionation would you treat Mr. H's prostate? ",
                    answer:"Moderately hypofractionated schemes would be appropriate in his case.  Multiple studies have been conducted to compare moderately hypofractionated image-guided IMRT schemes to conventional fractionation.  On the whole, these studies have shown similar efficacy of moderately hypofractionated regimens and many, but not all, of these trials also showed similar toxicity between moderately hypofractionated and conventional regimens. Precise doses and fractionation may vary somewhat, as different dosing schemes have been used on various trials.  However, recommended moderately hypofractionated dosing schemes typically fall in the approximate range of 60-70Gy/20-28fx.  As an example, 70Gy/28fx was used on the RTOG 0415 and 60Gy/20fx was used on the PROFIT and CHHiP trials. "
                },
                {
                    question:"To what dose/fractionation would you treat the proximal SVs? ",
                    answer:"When the proximal SVs are included in the treatment volume for favorable intermediate risk disease, it is common to take them to a reduced dose. The Dutch HYPRO trial is an example in which this was done.  On this study, the prostate was treated to 64.6Gy at 3.4Gy/fx whereas the seminal vesicles, when included, were treated to 54.4Gy at 3.4Gy/fx.   When using a dose of 70Gy/28fx, a common practice is to treat the entire prostate and proximal seminal vesicles to 50Gy/20fx, followed by a cone-down to the prostate alone for the final 8 fractions."
                },
                {
                    question:"Would you use a different dose/fractionation if Mr. H had significant urinary symptoms at the time of presentation (AUA 18)? ",
                    answer:"Yes.  In patients with worse urinary symptoms at presentation, consideration should be given to conventional fractionation due to concern for worse acute, and possibly late, toxicity in this setting.  NCCN recommends a range of 1.8-2Gy x 37-45fx in such cases.  A common regimen is 78Gy/39fx in such cases (the prostate and proximal SVs can be treated to 54Gy/27fx followed by a sequential boost to the prostate)"
                }
            ]
        },
        {
            id:42,
            type:'text',
            title:null,
            text:[
                "You decide to treat Mr. H’s prostate and proximal SVs to a dose of 50Gy/20fx followed by a sequential boost to the prostate to a total dose of 70Gy/28fx. ",
                "Learning Points",
                "Dosing: Moderately hypofractionated regimens have generally become more widely used in the treatment of prostate cancer, as multiple studies have demonstrated similar efficacy with reasonable toxicity profiles.  Common dosing ranges for hypofractionated regimens typically fall in an approximate range of 60-70Gy/20-28fx. For patients with significantly bothersome urinary symptoms at presentation, consideration should be given to conventional fractionation as there is concern for worse toxicity with hypofractionated regimens in this setting.  NCCN recommends a range of 1.8-2Gy x 37-45fx in such cases.  A common regimen is 78Gy/39fx in such cases. When the proximal seminal vesicles are included in the treatment volume, they are frequently treated to a lower dose than the prostate itself.  "
            ]
        },
        {
            id:43,
            type:'text',
            title: 'Daily Imaging',
            text:[
                "In order to make sure that you are treating Mr. H properly, you need to consider important aspects of his daily treatment set-up."
            ]
        },
        {
            id:44,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:'What daily imaging would you like to use for this patient to verify patient positioning? ',
                    answer:"Daily CBCT is reasonable in this case in order to allow for soft tissue visualization.  In patients who have had fiducials placed, which Mr. H did not, planar imaging can be used instead of CTs. "
                },
                {
                    question:"What structure should the therapists align to when using daily imaging to confirm Mr. H's positioning? ",
                    answer:"The prostate.  While this may seem obvious, it is important to remember to align to the prostate rather than to other structures such as bony anatomy.  The prostate moves independently from the bony pelvis and so aligning to the bony anatomy may or may not lead to proper positioning of the target.  "
                }
            ]
        },
        {
            id:45,
            type:'text',
            title:null,
            text:["Mr. H is now ready to proceed with treatment."]
        }
    ],

    "OTVs": [
        {
            id:46,
            type:'text',
            title:null,
            text:["Mr. H is now ready to start treatment.  You will need to monitor his progress on treatment and assist him with any side effects, questions/concerns, or other issues that arise during his treatment course."]
        },
        {
            id:47,
            type:"multiple choice",
            title:null,
            question:"Week 1: Completed treatment 3/28.  Vitals are stable, blood pressure is 156/64, consistent with his history of hypertension.  He continues to have nocturia x 2, unchanged since consultation.  He denies urinary urgency, weak stream, or dysuria.  He denies any changes in bowel function.  His energy levels are good.  Otherwise, he feels well physically and denies any other physical symptoms. What would you like to do? ",
            options:[
                {
                    answer:"Continue treatment as planned",
                    correct:true,
                    reason:null,
                },
                {
                    answer:"Enter orders.",
                    correct:false,
                    reason:"Mr. H is doing well on treatment thus far and it is reasonable to continue his treatment as planned"
                }
            ]
        },
        {
            id:48,
            type:'text',
            title:null,
            text:['Good job, please proceed to next question']
        },
        {
            id:49,
            type:'text',
            title:null,
            text:['Week 2: Completed 8/28 treatments.  Vitals are stable, blood pressure is 158/66.  He endorses nocturia x 4, increased from last week, that is affected his ability to sleep.  He also notices a weak urinary stream over the past week, but denies urinary urgency or dysuria. He denies any changes in bowel function.  He is tired and attributes this to poor sleep over the past week.  You suggest that he avoid drinking water within the last 1-2 hours before going to bed.  He states that he has already been doing that, since a friend of his who was recently treated with prostate cancer had suggested it to him.  He asks, "Is there anything else we can do to help with these symptoms at night?"']
        },
        {
            id:50,
            type:"multiple choice",
            title:null,
            question:"What would you like to do? ",
            options:[
                {
                    answer:"Continue treatment as planned. ",
                    correct:false,
                    reason:' If this answer is chosen, patient will come in with worse symptoms the next week.'
                },
                {
                    answer:"Enter orders. Prescribe tamsulosin (dosing generally starts at 0.4mg daily).",
                    correct:true,
                    reason:null,
                }
            ]
        },
        {
            id:51,
            type:'text',
            title:null,
            text:['Good job, please proceed to next question']
        },
        {
            id:52,
            type:'text',
            title:null,
            text:['Week 3 (if tamsulosin not prescribed): Completed 13/28 treatments. Vitals are stable, BP is 152/62.  His nocturia has gotten worse over the past week and he is now waking up about 6 times every night.  He is not able to get very much sleep and feels very tired. He is also urinating frequently during the day and feels like he has a weaker urinary stream and is not fully emptying his bladder.  He asks, “Is there anything I can do to make these symptoms better?”']
        },
        {
            id:53,
            type:'multiple choice',
            title:null,
            question:"What would you like to do? ",
            options:[
                {
                    answer:"Continue treatment as planned. ",
                    correct:false,
                    reason:'If this answer is chosen, Feedback is: “Over the next week, Mr. H’s urinary symptoms continue to get worse.  He does not think that he can tolerate any further treatments.  He decides to quit radiation in the hopes that his symptoms will improve.   If his symptoms had been managed appropriately, Mr. H likely would have continued on treatment. Please return to the case and find a way to manage Mr. H’s urinary symptoms while on treatment.”'
                },
                {
                    answer:"Enter orders. Prescribe tamsulosin (dosing generally starts at 0.4mg daily).",
                    correct:true,
                    reason:null,
                }
            ]
        },
        {
            id:54,
            type:'text',
            title:null,
            text:['Good job, please proceed to next question']
        },     
        {
            id:55,
            type:'text',
            title:null,
            text:["Week 3 (if tamsulosin prescribed initially, Week 4 if it took an extra week to prescribe): Completed 13/28 (18/28 if took an extra week to prescribe tamsulosin) treatments.  Vitals are stable, BP is 152/62.  He continues to have nocturia 3-4x nightly. He takes one of the tamsulosin tablets each day and thinks the medication is helping a little bit, but not enough. He is still having trouble falling back asleep after using the restroom and he is tired today.  He continues to endorse some weak urinary stream.  He denies urinary urgency or dysuria.  He denies any changes in bowel function. He denies any other physical symptoms."]
        },
        {
            id:56,
            type:'multiple choice',
            title:null,
            question:"What would you like to do?  ",
            options:[
                {
                    answer:"Continue treatment as planned",
                    correct:false,
                    reason:" Incorrect! Mr. H continues to have symptoms that may be improved with medical management. Adjust a current medication. "
                },
                {
                    answer:"Adjust a current medication.",
                    correct:true,
                    reason:"Tamsulosin is often prescribed at a starting dose of 0.4mg daily, due to concern for possible side effects, including possible hypotension.  However, the dose can be increased to 0.8mg daily if needed for increased effect.  Given that Mr. H feels the medication has helped a little bit but not enough and that his blood pressure has remained stable, increasing the dose makes sense in his case.  Due to the possibility for side effects, tamsulosin should be used with more caution in patients taking other medications that may interact with tamsulosin (such as other alpha receptor blocker, a PDE5 inhibitor, or nitroglycerin)."
                },
                {
                    answer:" Prescribe a new medication for his urinary symptoms.",
                    correct:false,
                    reason: "While there are other medications to besides tamsulosin that could help with his urinary symptoms, it makes sense to try increasing the dose of tamsulosin before starting an additional medication. "
                },
                {
                    answer:"Prescribe a sleep aid. ",
                    correct:false,
                    reason:"The main reason for Mr. H’s difficulty sleeping is his urinary symptoms.  You should try to address those rather than prescribe a sleep aid."
                },
                {
                    answer:"Take a treatment break and resume once his symptoms improve.",
                    correct:false,
                    reason:"Trying to optimize medical management of Mr. H’s symptoms is preferable to taking a treatment break. "
                }
            ]
        },
        {
            id:57,
            type:'text',
            title:null,
            text:['Good job, please proceed to next question']
        },
        {
            id:58,
            typr:'text',
            title:null,
            text:["Week 4 (if tamsulosin prescribed initially, Week 5 if it took an extra week to prescribe): Completed 18/28 treatments (23/28 if took an extra week to prescribe tamsulosin). Vital signs are stable, BP 146/60.  Now that he has increased the dose of tamsulosin, his nocturia has returned to 2x night, which he finds manageable.  His urinary flow has also improved.  He denies dysuria or urinary urgency.  Today, he does note that he has been having 3-4 episodes of loose stools over the past week.  He has tried to modify his diet, including having a lower fiber diet and avoiding spicy foods, which he usually eats frequently.  He asks if this is a possible symptom of radiation.  When you confirm that it is, he asks, 'Is there anything you can give me to help with diarrhea?'"]
        },
        {
            id:59,
            type:'multiple choice',
            title:null,
            question:"What would you like to do? ",
            options:[
                {
                    answer:"Continue treatment as planned. ",
                    correct:false,
                    reason:'Given that Mr. H has a new acute toxicity from radiation, this toxicity should be adequately managed before continuing with treatment. Please prescribe a medication to help with Mr. H’s diarrhea.'
                },
                {
                    answer:"Enter orders. Prescribe tamsulosin (dosing generally starts at 0.4mg daily).",
                    correct:true,
                    reason:null,
                }
            ]
        },
        {
            id:60,
            type:'text',
            title:null,
            text:['Good job, please proceed to next question']
        },
        {
            id:61,
            type:'text',
            title:null,
            text:['Week 5 (if tamsulosin prescribed initially, Week 6 if it took an extra week to prescribe): Completed 23/28 treatments (23/28 if took an extra week to prescribe tamsulosin).  Vital signs are stable.  His urinary symptoms remain under control.  He has been taking two tablets of the Imodium that you prescribed each day.  He continues to have 3 episodes of loose stools daily and is concerned that the medication is not working.  Otherwise, he denies any new physical complaints.  ']
        },
        {
            id:62,
            type:'multiple choice',
            title:null,
            question:"What would you like to do?  ",
            options:[
                {
                    answer:"Continue treatment as planned",
                    correct:false,
                    reason:"Incorrect! As was the case with Mr. H’s urinary symptoms, we should try to help manage his acute bowel symptoms. "
                },
                {
                    answer:"Adjust a current medication.",
                    correct:true,
                    reason:"His Imodium dose should be increased. Imodium dosing should be titrated based on effect.   Imodium tablets typically contain 2mg of loperamide. A common approach is to start with an initial dose of 4mg, which Mr. H was taking, then take an additional 2mg after each loose stool.  The maximum recommended dose is typically 16mg/day",
                },
                {
                    answer:" Prescribe a new medication for his urinary symptoms.",
                    correct:false,
                    reason: "While there are other medications that can help with acute bowel toxicity secondary to radiation, it makes sense to try adjusting the dose of his current medication before adding a new medication to help with his loose stools. "
                },
                {
                    answer:"Prescribed a new medication. ",
                    correct:false,
                    reason:"The main reason for Mr. H’s difficulty sleeping is his urinary symptoms.  You should try to address those rather than prescribe a sleep aid."
                },
                {
                    answer:"Take a treatment break and resume once his symptoms improve.",
                    correct:false,
                    reason:" It is preferable to optimize the medical management of Mr. H’s diarrhea as opposed to taking a treatment break. "
                }
            ]
        },
        {
            id:63,
            type:'text',
            title:null,
            text:['Week 6 (if tamsulosin prescribed initially, if it took and extra week then this section finishes with the purple text below): Completed 28/28 treatments. His urinary symptoms remain well controlled. Since increasing the dose of Imodium, his diarrhea has resolved as well. He is now having 2-3 formed stools daily.  He thanks you for all of your help over the past 6 weeks.  You plan to see him for follow-up in 3 months with a new PSA at that time. After increasing the dose of Imodium, Mr. H’s diarrhea has been well controlled.  He thanks you for all of your help over the past 6 weeks.  Now that his treatments are finished, you plan to see him for follow-up in 3 months with a new PSA at that time.  ']
        },
        {
            id:48,
            type:'learningPoints',
            title:'Learning Points',
            text:[
                "Toxicity:",  
                "-Nocturia: Obstructive urinary symptoms such as nocturia are common acute side effects during treatment.  Tamsulosin is a common first line agent to treat nocturia.  It is commonly started at a dose of 0.4mg daily but can be increased to 0.8mg daily if needed and if the patient tolerates the initial dose well.  Tamsulosin can cause hypotension and so it is important to pay attention to vitals and ask about symptoms of hypotension. Tamsulosin should also be used with more caution in patients taking medications that may interact with tamsulosin.",
                "-Diarrhea: Diarrhea is a possible acute toxicity during treatment. First-line medical therapy is typically with Imodium and the dose can be titrated up to 16mg daily before trying other agents.  Additionally, dietary modifications including a low-fiber diet may improve symptoms. "
            ]
        }
    ],

    "Follow":[
        {
            id:49,
            type:'text',
            title:null,
            text:[
                "You see Mr. H for follow-up 3 months after he completed treatment.  His PSA is 2.2, compared to a pre-treatment PSA of 4.3.  He feels well physically and denies any lingering urinary or bowel side effects since completing treatment."
            ]
        },
        {
            id:50,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"Mr. H asks you, 'How often do I have to have my PSA checked to make sure the cancer doesn't come back?'  How often would you recommend checking his PSA? ",
                    answer:"NCCN recommends PSA every 6-12 months for 5 years followed by annual measurement thereafter.  For higher risk patients (which does not include Mr. H), PSA should be checked more frequently, up to every 3 months.   "
                },
                {
                    question:"He asks, 'I'm glad my PSA is lower than it was before radiation, but I was hoping it would go away completely.  When will that happen?'  How would you respond to Mr. H? ",
                    answer:"Following radiation alone, his PSA is unlikely to become undetectable.  It is important to follow his PSA regularly as described above. The PSA will likely continue to decrease over time and reach a new nadir, though this is unlikely to be at a value of 0."
                },
                {
                    question:"He then asks, 'If my PSA looks good when we check it, do we need to do anything else to follow the prostate cancer?'  Is there anything else that you would recommend for routine surveillance of his prostate cancer? ",
                    answer:"NCCN recommends DRE annually, though this can be omitted if PSA is undetectable."
                }
            ]
        },
        {
            id:51,
            type:'text',
            title:null,
            text:[
                "Mr. H thanks you for answering his questions and will plan to follow-up with you every six months. His PSA at the next visit is 1.4 and he is happy that his PSA has continued to decrease.  He denies any urinary or bowel symptoms and there are no suspicious findings on DRE. "
            ]
        },
        {
            id:52,
            type:'text',
            title:null,
            text:[
                "Mr. H continues to follow-up with you.  Six months after his last follow-up, he still has no new symptoms and DRE is again normal, but his PSA has now increased to 2.0. "
            ]
        },
        {
            id:53,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"Mr. H is concerned about his rising PSA and asks, 'Does this mean that my cancer is coming back?'  What do you think is the most likely cause of his increased PSA? What would you like to do to manage his case at this point? ",
                    answer:"His PSA increase is likely a 'PSA bounce'.  This is a common phenomenon after radiation therapy for prostate cancer, and is characterized by a small increase in PSA during post-treatment monitoring (followed by a return to pre-bounce or even lower PSA levels) and does not necessarily indicate recurrent disease.   Mr. H has an increasing PSA at a single time point approximately 15 months after treatment, which is a common time for a PSA bounce to occur.  It would be appropriate to continue to monitor his PSA.  A full work-up for recurrence is not needed at this time. "
                }
            ]
        },
        {
            id:54,
            type:'text',
            title:null,
            text:[
                "You see him again for follow-up in 3 months. You opted for 3 months as opposed to a 6 month follow-up due to the rise in his PSA at his last follow-up.  His symptoms and exam are stable.  His most recent PSA was 1.6.  He is relieved that his PSA has not continued to increase. You continue to follow him every 6 months.  He is now 4 years post-treatment with no evidence of recurrence or long-term toxicities from treatment. ",
                "Learning Points",
                "Follow-up: NCCN recommends PSA every 6-12 months for 5 years followed by annual measurement thereafter.  For higher risk patients (which does not include Mr. H), PSA should be checked more frequently, up to every 3 months. NCCN also recommends DRE annually, though this can be omitted if PSA is undetectable. While monitoring PSA, it is important to be aware of the possibility of a benign “PSA bounce”.  This is a common phenomenon after radiation therapy for prostate cancer, and is characterized by a small increase in PSA during post-treatment monitoring (followed by a return to pre-bounce or even lower PSA levels) and does not necessarily indicate recurrent disease."
            ]
        },
        {
            id:55,
            type:'text',
            title:null,
            text:[
                "You have completed Mr. H’s case.  Please consider the following variation to Mr. H’s case and consider how this might impact your treatment decisions. "
            ]
        },
        {
            id:56,
            type:'seeAnswerButton',
            title:null,
            questions:[
                {
                    question:"If Mr. H were 80 years old as opposed to 58 years old, how would your approach to his care change?",
                    answer:"When managing prostate cancer, it is important to keep in mind a patient's life expectancy.  Prostate cancer is often relatively slowly progressing and, therefore, some men diagnosed with prostate cancer may not require any form of active treatment.  Life expectancy can be measured with various tools, including the Social Security Administration tables and the MSKCC Life Expectancy tool.  Social Security tables do not, of course, account for a particular patient's comorbidities and so life expectancy estimates are often increased by 50% for patient's in the best quartile of health for their age and decreased by 50% for patients in the worst quartile of health for their age. If Mr. H were an 80 year old man with average health, his life expectancy would be approximately 8.4 years based on the SSA actuarial tables.  NCCN recommends that patients with low risk prostate cancer and <10 year life expectancy should be considered for observation rather than active surveillance.  Observation entails monitoring the course of disease with the expectation to deliver palliative therapy with the goal of maintaining quality of life.  Per NCCN guidelines, patients managed with observation should have physical exam and PSA no more often than every 6 months. Patients on observation should not be monitored with routine prostate biopsies (or additional imaging) as patients on active surveillance are. If on AS for favorable intermediate risk at 80, would probably keep there as opposed to going to definitive therapy."
                }
            ]
        },
        {
            id:57,
            type:'text',
            title:null,
            text:["Congratulations, you have completed this case!"]
        }
    ]

}