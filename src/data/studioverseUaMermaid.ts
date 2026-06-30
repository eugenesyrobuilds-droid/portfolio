export const proposalGenerationFlow = `flowchart TD
   %% =========== MAIN PIPELINE (linear, plain language) ===========
   Start[User opens an Upwork job<br/>and clicks Generate] --> ReadJob
   ReadJob[Read the job posting from the page<br/>title, description, screening questions, client reviews]
   ReadJob --> CheckCache{Have we already<br/>analyzed this job?}
   CheckCache -->|Yes, reuse it| Score
   CheckCache -->|No, fresh| AnalyzeBoth
   AnalyzeBoth[AI analyzes the client and the job in parallel<br/>client side: pain points, values, red and green flags<br/>job side: niche, deliverable, key phrases to mirror]
   AnalyzeBoth --> Score
   Score[Score the job: is it worth our connects?<br/>budget, urgency, client quality, niche fit]
   Score --> ScoreGate{Score says skip?}
   ScoreGate -->|Yes| StopReturn[Stop early, no letter written<br/>operator told this job is not worth applying]
   ScoreGate -->|No| Match
   Match[Match the job to our portfolio<br/>pick top portfolio pieces for the 'recent work' block<br/>find one campaign-result line as proof<br/>pull one past winning proposal as a style example]
   Match --> Opener
   Opener[Craft the 2-line hook opener<br/>high-priority jobs: 3 hook styles tried in parallel, AI picks winner<br/>normal jobs: 1 hook style only<br/>safety net: stock opener if AI output looks invalid]
   Opener --> Template[Operator selected one of 4 letter templates from the sidebar<br/>Default, Paragraph, Agency, or Direct<br/>see structures stacked at the bottom]
   Template --> WriteLetter[AI writes the letter following the selected template<br/>hook opener is injected as the first line<br/>portfolio links injected verbatim where template wants them]
   Opener --> Questions[In parallel: AI answers screening questions, if any are on the page]
   WriteLetter --> Quality{Quality check passes?}
   Quality -->|Yes| Merge
   Quality -->|Found issues| Retry[AI retries once, told what to fix<br/>e.g. 'add the missing URL', 'remove the dollar amount']
   Retry --> Quality2{Quality re-check}
   Quality2 --> Merge
   Questions --> Merge
   Merge[Bundle the result: letter, screening answers, scores, cost]
   Merge --> SaveLocal[Save the proposal on this device<br/>mark it for backup to Google Sheet]
   SaveLocal --> Sync[Next backup uploads the proposal to Google Sheet<br/>so the team can see it]
   Sync --> Ready[Ready to send<br/>letter auto-fills when you open Upwork's apply form]

   %% =========== QUALITY-CHECK RULES (sidebar legend) ===========
   Quality -.-> QualityRules
   QualityRules["Quality rules<br/>UNIVERSAL (all templates):<br/>- no banned phrases, no gap-confessions, no amateur phrasing<br/>- no dollar amounts, no 'first draft', no '24h', no em-dashes<br/>- no invented URLs, every chosen portfolio link must be present verbatim<br/>- every required phrase from the job must be mirrored at least once<br/><br/>TEMPLATE-SPECIFIC:<br/>- Default and Direct: must end with an open-ended question<br/>- Default only: must include a 'Trial sample' section header<br/>- Direct only: skips the trial-sample check entirely"]

   %% =========== TEMPLATES STACKED VERTICALLY ===========
   Ready -.see structures.-> TemplateA

   subgraph TemplateA["TEMPLATE A: DEFAULT - 8 numbered sections, scannable"]
       direction TB
       A1[1. Why we are a strong fit, tight paragraph]
       A2[2. Recent work, portfolio links]
       A3[3. Tools we use]
       A4[4. Workflow: Storyboard, Rough, Fine, Final]
       A5[5. Turnaround time]
       A6[6. Pricing approach]
       A7[7. Trial sample offer]
       A8[8. Closing question to start a conversation]
       A1 --> A2 --> A3 --> A4 --> A5 --> A6 --> A7 --> A8
   end

   TemplateA -.-> TemplateB

   subgraph TemplateB["TEMPLATE B: PARAGRAPH - 4 prose paragraphs, no headers"]
       direction TB
       B1[1. Hook, mirror the client's pain, position ourselves]
       B2[2. Why us, 3-4 bullet wins, embed portfolio links here]
       B3[3. What you will get + our process + soft pricing line]
       B4[4. Portfolio link + trial offer + closing question]
       B1 --> B2 --> B3 --> B4
   end

   TemplateB -.-> TemplateC

   subgraph TemplateC["TEMPLATE C: AGENCY - collective 'we', section headers, signature 50% trial hook"]
       direction TB
       C1[1. Positioning prose that continues the opener]
       C2[2. Why StudioVerse fits: niche, tools, speed]
       C3[3. What you will get: deliverables]
       C4[4. Process and speed: 24-72h, 4-stage flow]
       C5[5. Tools we use, optional, skip if already covered above]
       C6[6. Portfolio + SIGNATURE offer:<br/>free if you do not like it, 50% paid if you do]
       C7[7. Pricing and timing, optional]
       C8[8. Imperative CTA: book a 15-min Upwork Zoom]
       C1 --> C2 --> C3 --> C4 --> C5 --> C6 --> C7 --> C8
   end

   TemplateC -.-> TemplateD

   subgraph TemplateD["TEMPLATE D: DIRECT - ultra-short, no warmup"]
       direction TB
       D1[1. 1-2 sentences directly answering their core pain]
       D2[2. 2-3 portfolio links, no commentary between them]
       D3[3. ONE closing question<br/>no tools, no pricing, no workflow, no trial section]
       D1 --> D2 --> D3
   end

   %% =========== STYLES ===========
   classDef ai fill:#fff2dc,stroke:#8a5a00,color:#181818
   classDef decision fill:#eaf0ff,stroke:#2242F8,color:#181818
   classDef storage fill:#e8f5ec,stroke:#1d6f3b,color:#181818
   classDef terminal fill:#fdecec,stroke:#a32626,color:#181818
   classDef rules fill:#fffbe6,stroke:#8a5a00,color:#181818
   classDef templA fill:#f0f0ff,stroke:#444488,color:#181818
   classDef templB fill:#e8f5ec,stroke:#1d6f3b,color:#181818
   classDef templC fill:#fff2dc,stroke:#8a5a00,color:#181818
   classDef templD fill:#fdecec,stroke:#a32626,color:#181818

   class AnalyzeBoth,Opener,WriteLetter,Questions,Retry ai
   class CheckCache,ScoreGate,Quality,Quality2 decision
   class SaveLocal,Sync storage
   class Start,Ready,StopReturn terminal
   class QualityRules rules
   class A1,A2,A3,A4,A5,A6,A7,A8 templA
   class B1,B2,B3,B4 templB
   class C1,C2,C3,C4,C5,C6,C7,C8 templC
   class D1,D2,D3 templD
`;
