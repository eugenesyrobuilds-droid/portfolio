import type { Locale } from "@/lib/i18n/types";

export type Priority = "Must" | "Should" | "Could";

export type StoryCopy = {
  title: string;
  userStory: string;
  criteria: string[];
};

export type UserStory = {
  id: string;
  priority: Priority;
  en: StoryCopy;
  uk: StoryCopy;
};

export type Epic = {
  number: number;
  en: { title: string };
  uk: { title: string };
  stories: UserStory[];
};

export type UserStoriesMeta = {
  intro: { en: string; uk: string };
  format: { en: string; uk: string };
  personas: {
    en: { name: string; description: string }[];
    uk: { name: string; description: string }[];
  };
  legend: { en: string; uk: string };
};

export const meta: UserStoriesMeta = {
  intro: {
    en: "A set of user stories describing the functionality of a browser extension for searching, scoring jobs, and generating and tracking proposals on Upwork.",
    uk: "Набір користувацьких історій, що описують функціонал браузерного розширення для пошуку, оцінювання джоб, а також генерації та трекінгу пропозалів на Upwork.",
  },
  format: {
    en: 'Format: Connextra ("As a… I want… so that…") + Acceptance Criteria. Priorities are assigned using MoSCoW (Must / Should / Could) as a starting suggestion and should be refined with the team.',
    uk: "Формат: Connextra («Як… я хочу… щоб…») + критерії приймання (Acceptance Criteria). Пріоритети проставлені за MoSCoW (Must / Should / Could) як стартова пропозиція й підлягають уточненню з командою.",
  },
  personas: {
    en: [
      {
        name: "Lead Gen",
        description:
          "lead generation specialist / freelancer. Searches for jobs, scores them, generates and sends proposals. Primary user.",
      },
      {
        name: "Team Lead",
        description:
          "team manager. Analyzes performance by person, template, and niche; does not send proposals themselves.",
      },
    ],
    uk: [
      {
        name: "Лідген",
        description:
          "спеціаліст із лідогенерації / фрилансер. Шукає джоби, оцінює їх, генерує та надсилає пропозали. Основний користувач.",
      },
      {
        name: "Тімлід",
        description:
          "керівник команди. Аналізує ефективність за людьми, шаблонами та нішами; сам пропозали не надсилає.",
      },
    ],
  },
  legend: {
    en: "🟢 PRIORITY — worth applying · 🟡 STANDARD — acceptable · 🔴 SKIP — don't spend connects",
    uk: "🟢 PRIORITY — варто подаватися · 🟡 STANDARD — можна · 🔴 SKIP — не витрачати конекти",
  },
};

export const epics: Epic[] = [
  {
    number: 1,
    en: { title: "Deep Scan — bulk job scoring on the search results page (SERP)" },
    uk: { title: "Deep Scan — масове оцінювання джоб на сторінці пошуку (SERP)" },
    stories: [
      {
        id: "US-1.1",
        priority: "Must",
        en: {
          title: "Bulk-scan visible jobs",
          userStory:
            "As a Lead Gen, I want to scan all visible job cards sequentially with one click, so that I can quickly shortlist promising jobs without opening each one manually.",
          criteria: [
            "A “Deep Scan” sidebar is shown on the right of the search results page.",
            "On clicking “Deep scan visible jobs”, the extension opens each card one by one, waits for client data to load, and reads enrichment facts: hire rate, total spent, last viewed, invites, interviewing, screening questions, etc.",
            "For each job it runs an LLM analysis of the description, computes a score, then closes the card panel and moves to the next.",
            "Cards are processed strictly sequentially (not in parallel) so as not to overload Upwork.",
          ],
        },
        uk: {
          title: "Масове сканування видимих джоб",
          userStory:
            "Як лідген, я хочу одним кліком послідовно просканувати всі видимі картки джоб, щоб швидко відібрати перспективні, не відкриваючи кожну вручну.",
          criteria: [
            "На сторінці результатів пошуку праворуч відображається сайдбар «Deep Scan».",
            "За натисканням «Deep scan visible jobs» розширення по черзі відкриває кожну картку, очікує підвантаження клієнтських даних і зчитує enrichment-факти: hire rate, total spent, last viewed, invites, interviewing, screening questions тощо.",
            "Для кожної джоби виконується LLM-аналіз опису, обчислюється score, після чого панель картки закривається й відбувається перехід до наступної.",
            "Картки обробляються строго послідовно (не паралельно), щоб не перевантажувати Upwork.",
          ],
        },
      },
      {
        id: "US-1.2",
        priority: "Must",
        en: {
          title: "Traffic-light badge on the card",
          userStory:
            "As a Lead Gen, I want to see a colored badge with the verdict and a numeric score on each card, so that I can assess a job's priority at a glance.",
          criteria: [
            "After the scan, a badge appears on the card: 🟢 PRIORITY / 🟡 STANDARD / 🔴 SKIP.",
            "A numeric score value is shown next to the verdict.",
          ],
        },
        uk: {
          title: "Світлофор-бейдж на картці",
          userStory:
            "Як лідген, я хочу бачити на кожній картці кольоровий бейдж з вердиктом і числовим score, щоб з одного погляду оцінювати пріоритет джоби.",
          criteria: [
            "Після скану на картці з'являється бейдж: 🟢 PRIORITY / 🟡 STANDARD / 🔴 SKIP.",
            "Поруч із вердиктом відображається числове значення score.",
          ],
        },
      },
      {
        id: "US-1.3",
        priority: "Should",
        en: {
          title: "Tooltip with score breakdown",
          userStory:
            "As a Lead Gen, I want to see a rule-by-rule score breakdown when hovering over the badge, so that I understand why the job received that score.",
          criteria: [
            "Hovering over the badge shows a tooltip with a breakdown: which rule contributed how many points and why.",
            "Example: “+3 active 1h ago”, “−5 4 invites ignored”, “+2 paid trial offered”.",
          ],
        },
        uk: {
          title: "Tooltip з розбивкою оцінки",
          userStory:
            "Як лідген, я хочу під час наведення на бейдж бачити деталізацію score за правилами, щоб розуміти, чому джоба отримала таку оцінку.",
          criteria: [
            "При наведенні на бейдж показується tooltip із розбивкою: яке правило скільки балів дало й чому.",
            "Приклад: «+3 active 1h ago», «−5 4 invites ignored», «+2 paid trial offered».",
          ],
        },
      },
      {
        id: "US-1.4",
        priority: "Should",
        en: {
          title: "Stop the scan",
          userStory:
            "As a Lead Gen, I want to interrupt the scan at any moment, so that I don't have to wait for all cards to be processed once I've found what I need.",
          criteria: [
            "A “Stop scan” button is available during the scan.",
            "On click, the current process is interrupted after the current card's analysis finishes; badges already assigned are kept.",
          ],
        },
        uk: {
          title: "Зупинка скану",
          userStory:
            "Як лідген, я хочу перервати сканування будь-якої миті, щоб не чекати обробки всіх карток, якщо вже знайшов потрібне.",
          criteria: [
            "Під час скану доступна кнопка «Stop scan».",
            "За натисканням поточний процес переривається після завершення аналізу поточної картки; уже проставлені бейджі зберігаються.",
          ],
        },
      },
      {
        id: "US-1.5",
        priority: "Could",
        en: {
          title: "Re-score without cache",
          userStory:
            "As a Lead Gen, I want to recompute the score from scratch, ignoring the cache, so that I get an up-to-date score when data has changed.",
          criteria: [
            "The “Re-score visible” link runs the scan again without using cached results.",
          ],
        },
        uk: {
          title: "Повторне оцінювання без кешу",
          userStory:
            "Як лідген, я хочу перерахувати score заново, ігноруючи кеш, щоб отримати актуальну оцінку при змінених даних.",
          criteria: [
            "Посилання «Re-score visible» запускає скан заново, не використовуючи кешовані результати.",
          ],
        },
      },
      {
        id: "US-1.6",
        priority: "Should",
        en: {
          title: "Filter cards by verdict",
          userStory:
            "As a Lead Gen, I want to filter visible cards by verdict with multi-select, so that I can focus only on the jobs I care about.",
          criteria: [
            "The sidebar has PRIORITY / STANDARD / SKIP filter pills.",
            "Multi-select is supported (e.g. PRIORITY + STANDARD at the same time).",
            "Only cards matching the selected filters are shown.",
          ],
        },
        uk: {
          title: "Фільтрація карток за вердиктом",
          userStory:
            "Як лідген, я хочу фільтрувати видимі картки за вердиктом із можливістю мультивибору, щоб зосередитися лише на потрібних джобах.",
          criteria: [
            "У сайдбарі є фільтри-пілюлі PRIORITY / STANDARD / SKIP.",
            "Підтримується мультивибір (наприклад, PRIORITY + STANDARD одночасно).",
            "Відображаються лише картки, що підпадають під вибрані фільтри.",
          ],
        },
      },
      {
        id: "US-1.7",
        priority: "Should",
        en: {
          title: "Reset the filter",
          userStory:
            "As a Lead Gen, I want to clear the filter with a single action, so that I can return to the full list of jobs.",
          criteria: [
            "The “Show all jobs” link removes all active filters and shows all cards.",
          ],
        },
        uk: {
          title: "Скидання фільтра",
          userStory:
            "Як лідген, я хочу однією дією скинути фільтр, щоб повернутися до повного списку джоб.",
          criteria: [
            "Посилання «Show all jobs» знімає всі активні фільтри й показує всі картки.",
          ],
        },
      },
      {
        id: "US-1.8",
        priority: "Must",
        en: {
          title: "Open a job with auto-generation",
          userStory:
            "As a Lead Gen, I want to open a job in a new tab with proposal generation starting automatically, so that I don't have to click Generate manually.",
          criteria: [
            "An “Open ↗” button is available on the card.",
            "On click, the job opens in a new tab where proposal generation starts automatically.",
          ],
        },
        uk: {
          title: "Відкриття джоби з автогенерацією",
          userStory:
            "Як лідген, я хочу відкрити джобу в новій вкладці з автоматичним запуском генерації пропозала, щоб не натискати Generate вручну.",
          criteria: [
            "На картці доступна кнопка «Open ↗».",
            "За натисканням джоба відкривається в новій вкладці, де автоматично стартує генерація пропозала.",
          ],
        },
      },
      {
        id: "US-1.9",
        priority: "Should",
        en: {
          title: "New-card counter on scroll",
          userStory:
            "As a Lead Gen, I want to see how many new cards loaded while scrolling, so that I know there are more to scan.",
          criteria: [
            "When new cards load on scroll, a counter “N new cards — click Deep scan to score them” appears in the sidebar.",
          ],
        },
        uk: {
          title: "Лічильник нових карток під час скролу",
          userStory:
            "Як лідген, я хочу бачити, скільки нових карток підвантажилося під час прокручування, щоб розуміти, що їх треба досканувати.",
          criteria: [
            "При підвантаженні нових карток скролом у сайдбарі з'являється лічильник «N new cards — click Deep scan to score them».",
          ],
        },
      },
      {
        id: "US-1.10",
        priority: "Should",
        en: {
          title: "Restore cached badges",
          userStory:
            "As a Lead Gen, I want badges to be restored instantly when I refresh the page or return to search, so that I don't have to scan again.",
          criteria: [
            "After F5 or returning to the SERP, cached badges are restored without re-scanning.",
            "The cache is valid for 60 minutes.",
          ],
        },
        uk: {
          title: "Відновлення кешованих бейджів",
          userStory:
            "Як лідген, я хочу щоб при оновленні сторінки або поверненні на пошук бейджі відновлювалися миттєво, щоб не сканувати заново.",
          criteria: [
            "Після F5 або повернення на SERP кешовані бейджі відновлюються без повторного скану.",
            "Кеш дійсний 60 хвилин.",
          ],
        },
      },
      {
        id: "US-1.11",
        priority: "Could",
        en: {
          title: "Hide/show the sidebar",
          userStory:
            "As a Lead Gen, I want to hide and show the Deep Scan sidebar, so that I can free up screen space when needed.",
          criteria: [
            "The sidebar is hidden via a close button and reopened via a thin button on the right.",
          ],
        },
        uk: {
          title: "Приховування/показ сайдбара",
          userStory:
            "Як лідген, я хочу приховувати й показувати сайдбар Deep Scan, щоб звільняти місце на екрані за потреби.",
          criteria: [
            "Сайдбар приховується хрестиком і відкривається тонкою кнопкою праворуч.",
          ],
        },
      },
    ],
  },
  {
    number: 2,
    en: { title: "Proposal generation on the job page (/jobs/<id>/)" },
    uk: { title: "Генерація пропозала на сторінці джоби (/jobs/<id>/)" },
    stories: [
      {
        id: "US-2.1",
        priority: "Must",
        en: {
          title: "Generator sidebar auto-appears",
          userStory:
            "As a Lead Gen, I want the generator sidebar to open automatically and expanded on the job page, so that I can start working on the proposal right away.",
          criteria: [
            "On /jobs/<id>/, the sidebar appears on the right automatically.",
            "On this page it is always expanded, even if it was collapsed on other pages.",
          ],
        },
        uk: {
          title: "Автопоява сайдбара-генератора",
          userStory:
            "Як лідген, я хочу щоб на сторінці джоби сайдбар-генератор відкривався автоматично й розгорнуто, щоб одразу взятися до роботи з пропозалом.",
          criteria: [
            "На /jobs/<id>/ сайдбар з'являється праворуч автоматично.",
            "На цій сторінці він завжди розгорнутий, навіть якщо був згорнутий на інших сторінках.",
          ],
        },
      },
      {
        id: "US-2.2",
        priority: "Should",
        en: {
          title: "Monthly mini-stats in the topbar",
          userStory:
            "As a Lead Gen, I want to see my monthly stats in the topbar (Sent / Viewed / Replied / Hired + percentages), so that I keep my performance in focus.",
          criteria: [
            "The topbar shows Sent / Viewed / Replied / Hired and the percentages open% / reply% / hire%.",
            "Clicking the stats opens the dashboard.",
          ],
        },
        uk: {
          title: "Міні-статистика за місяць у топбарі",
          userStory:
            "Як лідген, я хочу бачити в топбарі свою статистику за поточний календарний місяць (Sent / Viewed / Replied / Hired + відсотки), щоб тримати у фокусі свою ефективність.",
          criteria: [
            "У топбарі відображаються Sent / Viewed / Replied / Hired та відсотки open% / reply% / hire%.",
            "Клік по статистиці відкриває дашборд.",
          ],
        },
      },
      {
        id: "US-2.3",
        priority: "Must",
        en: {
          title: "Choose a proposal template",
          userStory:
            "As a Lead Gen, I want to choose the proposal format from a set of templates, so that I can tailor the letter's style to the job.",
          criteria: [
            "The “Template” dropdown offers the formats:",
            "Default — standard with 8 sections (Why we're a strong fit, Recent work, Tools, Workflow, Turnaround, Pricing, Trial sample, Closing question);",
            "Paragraph — 4 paragraphs without bullet points;",
            "Agency — 50% hook, a more collective tone;",
            "Direct — minimal fluff: answer to the client's pain + 2–3 refs + question.",
            "The chosen template persists across sessions.",
          ],
        },
        uk: {
          title: "Вибір шаблону пропозала",
          userStory:
            "Як лідген, я хочу обирати формат пропозала з набору шаблонів, щоб підлаштовувати стиль листа під джобу.",
          criteria: [
            "Дропдаун «Template» пропонує формати:",
            "Default — стандарт з 8 секцій (Why we're a strong fit, Recent work, Tools, Workflow, Turnaround, Pricing, Trial sample, Closing question);",
            "Paragraph — 4 абзаци без булет-пойнтів;",
            "Agency — 50% хук, більш колективний тон;",
            "Direct — мінімум води: відповідь на pain клієнта + 2–3 рефи + питання.",
            "Вибір шаблону зберігається між сесіями.",
          ],
        },
      },
      {
        id: "US-2.4",
        priority: "Should",
        en: {
          title: "Pre-filled verdict from the SERP",
          userStory:
            "As a Lead Gen, I want to see a ready verdict and breakdown in the sidebar if the job was scanned on search, so that I don't have to run scoring again.",
          criteria: [
            "If the job was pre-scanned from the SERP, the sidebar immediately renders the traffic-light verdict and breakdown without clicking Generate.",
            "The age of the score is shown (e.g. “scored 12m ago”).",
          ],
        },
        uk: {
          title: "Попередньо заповнений вердикт із SERP",
          userStory:
            "Як лідген, я хочу бачити в сайдбарі вже готовий вердикт і breakdown, якщо джоба була просканована на пошуку, щоб не запускати оцінювання повторно.",
          criteria: [
            "Якщо джоба була pre-scanned із SERP, у сайдбарі одразу відображений світлофор-вердикт і breakdown без натискання Generate.",
            "Відображається давність оцінки (наприклад, «scored 12m ago»).",
          ],
        },
      },
      {
        id: "US-2.5",
        priority: "Must",
        en: {
          title: "Generate proposal (full pipeline)",
          userStory:
            "As a Lead Gen, I want to launch the full proposal generation pipeline with one button, so that I get a ready, personalized letter.",
          criteria: [
            "On clicking “Generate proposal”, the extension:",
            "expands and parses the client's reviews;",
            "analyzes the client (who they are, their fears, what they value) and the job (pain, fear, competitors' arguments, mirror phrases, required tools);",
            "computes the score via the job-scorer;",
            "selects 2–3 relevant portfolio projects (TF-IDF over tags + a format-match boost);",
            "selects a proof campaign if the job is about performance;",
            "generates the opener: for PRIORITY — 3 variants in parallel with the best chosen by an LLM judge; for STANDARD — sequentially tries 3 strategies until the first valid one;",
            "generates the letter and the screening-question answers in parallel;",
            "validates the letter (10+ checks: banned words, mirror phrases, fabricated URLs, em-dashes, missing closing question, vague trial sample, etc.);",
            "on validation failure, retries with fixes.",
          ],
        },
        uk: {
          title: "Генерація пропозала (повний пайплайн)",
          userStory:
            "Як лідген, я хочу однією кнопкою запускати повний пайплайн генерації пропозала, щоб отримувати готовий персоналізований лист.",
          criteria: [
            "За натисканням «Generate proposal» розширення:",
            "розкриває й парсить відгуки клієнта;",
            "аналізує клієнта (хто він, його побоювання, що цінує) і джобу (pain, fear, аргументи конкурентів, mirror-фрази, потрібні tools);",
            "рахує score через job-scorer;",
            "добирає 2–3 релевантні проєкти з портфоліо (TF-IDF за тегами + буст за збігом формату);",
            "добирає кампанію-доказ, якщо джоба про performance;",
            "генерує opener: для PRIORITY — 3 варіанти паралельно з вибором найкращого через LLM-суддю; для STANDARD — послідовний перебір 3 стратегій до першої валідної;",
            "генерує лист і відповіді на screening-питання паралельно;",
            "валідує лист (10+ перевірок: banned words, mirror-фрази, вигадані URL, em-dashes, відсутність закривального питання, розмитий trial sample тощо);",
            "у разі провалу валідації робить retry з виправленнями.",
          ],
        },
      },
      {
        id: "US-2.6",
        priority: "Must",
        en: {
          title: "Manual letter editing",
          userStory:
            "As a Lead Gen, I want to edit the generated letter manually, so that I can polish the text to the state I need before sending.",
          criteria: [
            "The “Cover letter” field contains the ready text and is editable.",
          ],
        },
        uk: {
          title: "Ручне редагування листа",
          userStory:
            "Як лідген, я хочу редагувати згенерований лист вручну, щоб доводити текст до потрібного стану перед надсиланням.",
          criteria: [
            "У сайдбарі поле «Cover letter» містить готовий текст і доступне для редагування.",
          ],
        },
      },
      {
        id: "US-2.7",
        priority: "Should",
        en: {
          title: "Regenerate only the letter",
          userStory:
            "As a Lead Gen, I want to regenerate only the letter based on the already-computed analysis, so that I get an alternative variant quickly and without a full recompute.",
          criteria: [
            "The “↺ Letter” button regenerates the letter using the cached analysis (without re-running analyzeJob).",
          ],
        },
        uk: {
          title: "Перегенерація лише листа",
          userStory:
            "Як лідген, я хочу перегенерувати лише лист на основі вже порахованого аналізу, щоб отримати альтернативний варіант швидко й без повного перерахунку.",
          criteria: [
            "Кнопка «↺ Letter» перегенеровує лист, використовуючи кешований аналіз (без повторного analyzeJob).",
          ],
        },
      },
      {
        id: "US-2.8",
        priority: "Should",
        en: {
          title: "Full regeneration",
          userStory:
            "As a Lead Gen, I want to rerun the entire pipeline from scratch, so that I refresh the analysis and the letter as a whole.",
          criteria: ["The “⟳ Full” button runs the whole pipeline again."],
        },
        uk: {
          title: "Повна перегенерація",
          userStory:
            "Як лідген, я хочу перезапустити весь пайплайн з нуля, щоб оновити аналіз і лист цілком.",
          criteria: ["Кнопка «⟳ Full» заново виконує весь пайплайн."],
        },
      },
      {
        id: "US-2.9",
        priority: "Must",
        en: {
          title: "Copy the letter",
          userStory:
            "As a Lead Gen, I want to copy the letter to the clipboard, so that I can quickly paste it into the submission form.",
          criteria: [
            "The “Copy” button copies the current letter text to the clipboard.",
          ],
        },
        uk: {
          title: "Копіювання листа",
          userStory:
            "Як лідген, я хочу скопіювати лист у буфер обміну, щоб швидко вставити його у форму надсилання.",
          criteria: ["Кнопка «Copy» копіює поточний текст листа в буфер."],
        },
      },
      {
        id: "US-2.10",
        priority: "Must",
        en: {
          title: "Screening-question answers",
          userStory:
            "As a Lead Gen, I want to get ready answers under each screening question of the job, so that I don't have to write them manually.",
          criteria: [
            "If the job has questions, the “Screening answers” section contains a ready answer under each of them.",
          ],
        },
        uk: {
          title: "Відповіді на screening-питання",
          userStory:
            "Як лідген, я хочу отримувати готові відповіді під кожне скринінг-питання джоби, щоб не писати їх вручну.",
          criteria: [
            "Якщо в джобі є питання, секція «Screening answers» містить готову відповідь під кожним із них.",
          ],
        },
      },
      {
        id: "US-2.11",
        priority: "Should",
        en: {
          title: "View rationale and signals",
          userStory:
            "As a Lead Gen, I want to see which projects and facts were used in the letter, so that I can verify correctness and rely on them when editing.",
          criteria: [
            "The “Embedded reference” section — the portfolio project that made it into the opener.",
            "The “Recent work refs” section — links to projects from the Recent work block.",
            "The “Job signals” section — enrichment facts: hire rate %, total spent, last viewed, interviewing count, invites sent, unanswered invites.",
          ],
        },
        uk: {
          title: "Перегляд обґрунтувань і сигналів",
          userStory:
            "Як лідген, я хочу бачити, які проєкти та факти використовувалися в листі, щоб перевіряти коректність і спиратися на них під час правок.",
          criteria: [
            "Секція «Embedded reference» — проєкт із портфоліо, що потрапив в opener.",
            "Секція «Recent work refs» — посилання на проєкти з блоку Recent work.",
            "Секція «Job signals» — enrichment-факти: hire rate %, total spent, last viewed, interviewing count, invites sent, unanswered invites.",
          ],
        },
      },
      {
        id: "US-2.12",
        priority: "Could",
        en: {
          title: "Generate against a SKIP verdict",
          userStory:
            "As a Lead Gen, I want the option to generate a proposal even with a SKIP verdict, so that I can handle exceptions at my own discretion.",
          criteria: [
            "When verdict = SKIP, a “Generate anyway” button is available that launches generation.",
          ],
        },
        uk: {
          title: "Генерація всупереч вердикту SKIP",
          userStory:
            "Як лідген, я хочу мати змогу згенерувати пропозал навіть за вердикту SKIP, щоб обробляти винятки на власний розсуд.",
          criteria: [
            "За verdict = SKIP доступна кнопка «Generate anyway», що запускає генерацію.",
          ],
        },
      },
      {
        id: "US-2.13",
        priority: "Must",
        en: {
          title: "Proceed to submit on Upwork",
          userStory:
            "As a Lead Gen, I want to proceed to submitting the proposal on Upwork directly from the sidebar, so that I don't have to find the Apply button manually.",
          criteria: [
            "The “Apply on Upwork →” button saves the current letter text, finds the Apply button on the page, and navigates to the submission page.",
          ],
        },
        uk: {
          title: "Перехід до надсилання на Upwork",
          userStory:
            "Як лідген, я хочу перейти до надсилання пропозала на Upwork прямо із сайдбара, щоб не шукати кнопку Apply вручну.",
          criteria: [
            "Кнопка «Apply on Upwork →» зберігає поточний текст листа, знаходить на сторінці кнопку Apply й переходить на сторінку надсилання.",
          ],
        },
      },
      {
        id: "US-2.14",
        priority: "Could",
        en: {
          title: "Sidebar management (resize / collapse / hide)",
          userStory:
            "As a Lead Gen, I want to resize, collapse, and close the sidebar, so that I can set up the workspace to suit me.",
          criteria: [
            "Resize — by dragging the left edge; the width is remembered.",
            "Collapse — into a narrow strip (▶).",
            "Hide — via the close button (✕); a floating “Cover” button appears on the right to reopen.",
          ],
        },
        uk: {
          title: "Керування сайдбаром (resize / collapse / hide)",
          userStory:
            "Як лідген, я хочу змінювати розмір, згортати й закривати сайдбар, щоб налаштовувати робочий простір під себе.",
          criteria: [
            "Resize — потягуванням за лівий край; ширина запам'ятовується.",
            "Collapse — згортання у вузьку смужку (▶).",
            "Hide — закриття хрестиком (✕); праворуч з'являється плаваюча кнопка «Cover» для повторного відкриття.",
          ],
        },
      },
    ],
  },
  {
    number: 3,
    en: { title: "Proposal submission and auto-fill (/nx/proposals/job/<id>/apply/)" },
    uk: { title: "Надсилання пропозала та автозаповнення (/nx/proposals/job/<id>/apply/)" },
    stories: [
      {
        id: "US-3.1",
        priority: "Must",
        en: {
          title: "Auto-fill the submission form",
          userStory:
            "As a Lead Gen, I want the extension to fill in the letter and answers itself, so that I don't have to copy them manually.",
          criteria: [
            "The extension finds the relevant textareas and inserts the generated letter and the screening-question answers.",
          ],
        },
        uk: {
          title: "Автозаповнення форми надсилання",
          userStory:
            "Як лідген, я хочу щоб розширення саме вставляло лист і відповіді у форму, щоб не копіювати їх вручну.",
          criteria: [
            "Розширення знаходить потрібні textarea й підставляє згенерований лист і відповіді на screening-питання.",
          ],
        },
      },
      {
        id: "US-3.2",
        priority: "Should",
        en: {
          title: "Auto-fill status banner",
          userStory:
            "As a Lead Gen, I want to see the auto-fill result, so that I know whether everything was filled or I need to complete it manually.",
          criteria: [
            "On success, “✓ Auto-filled N fields — review and Send” is shown at the bottom.",
            "On partial fill — “⚠ Auto-filled N of M — fill manually”.",
          ],
        },
        uk: {
          title: "Банер статусу автозаповнення",
          userStory:
            "Як лідген, я хочу бачити результат автозаповнення, щоб розуміти, чи все заповнилося, чи потрібно доповнити вручну.",
          criteria: [
            "У разі успіху внизу показується «✓ Auto-filled N fields — review and Send».",
            "За часткового заповнення — «⚠ Auto-filled N of M — fill manually».",
          ],
        },
      },
      {
        id: "US-3.3",
        priority: "Must",
        en: {
          title: "Auto-track submission (submit detector)",
          userStory:
            "As a Lead Gen, I want the proposal submission to be recorded automatically, so that tracking happens without manual entry.",
          criteria: [
            "When the Upwork Send/Submit button is clicked, the extension:",
            "records sentAt (submission time);",
            "parses the number of connects spent;",
            "saves the final version of the letter and answers (accounting for manual edits before Send);",
            "computes the job's age at the moment of submission;",
            "marks the record as needing sync to the cloud.",
          ],
        },
        uk: {
          title: "Автотрекінг надсилання (submit-детектор)",
          userStory:
            "Як лідген, я хочу щоб надсилання пропозала фіксувалося автоматично, щоб трекінг вівся без ручного введення.",
          criteria: [
            "При натисканні Upwork-кнопки Send/Submit розширення:",
            "записує sentAt (час надсилання);",
            "парсить кількість витрачених конектів;",
            "зберігає фінальну версію листа й відповідей (з урахуванням ручних правок перед Send);",
            "обчислює вік джоби на момент надсилання;",
            "позначає запис як такий, що потребує синхронізації з хмарою.",
          ],
        },
      },
    ],
  },
  {
    number: 4,
    en: { title: "Analytics dashboard" },
    uk: { title: "Дашборд аналітики" },
    stories: [
      {
        id: "US-4.1",
        priority: "Must",
        en: {
          title: "Period selection",
          userStory:
            "As a Team Lead / Lead Gen, I want to choose the analysis period, so that I can view metrics in the time slice I need.",
          criteria: [
            "Available periods: This week, Last week, This month, Last month, This quarter, Last quarter, This year, All time.",
          ],
        },
        uk: {
          title: "Вибір періоду",
          userStory:
            "Як тімлід / лідген, я хочу обирати період аналізу, щоб дивитися метрики в потрібному часовому зрізі.",
          criteria: [
            "Доступні періоди: This week, Last week, This month, Last month, This quarter, Last quarter, This year, All time.",
          ],
        },
      },
      {
        id: "US-4.2",
        priority: "Must",
        en: {
          title: "Refresh statuses from Upwork",
          userStory:
            "As a Lead Gen, I want to pull current proposal statuses from Upwork, so that viewed/replied tracking stays up to date.",
          criteria: [
            "The “↻ Refresh statuses” button opens the My Proposals page in a new tab, parses Active / Submitted / Replied statuses, and updates the corresponding records (viewed / replied).",
          ],
        },
        uk: {
          title: "Оновлення статусів з Upwork",
          userStory:
            "Як лідген, я хочу підтягувати актуальні статуси пропозалів з Upwork, щоб трекінг viewed/replied був актуальним.",
          criteria: [
            "Кнопка «↻ Refresh statuses» відкриває в новій вкладці сторінку My Proposals, парсить статуси Active / Submitted / Replied й оновлює відповідні записи (viewed / replied).",
          ],
        },
      },
      {
        id: "US-4.3",
        priority: "Should",
        en: {
          title: "Manual cloud sync",
          userStory:
            "As a Lead Gen, I want to run sync manually, so that I can exchange data with the team immediately.",
          criteria: [
            "The “⇅ Sync now” button performs a push of pending records and a pull of the combined data.",
          ],
        },
        uk: {
          title: "Ручний синк із хмарою",
          userStory:
            "Як лідген, я хочу запускати синхронізацію вручну, щоб негайно обмінятися даними з командою.",
          criteria: [
            "Кнопка «⇅ Sync now» виконує push pending-записів і pull об'єднаних даних.",
          ],
        },
      },
      {
        id: "US-4.4",
        priority: "Should",
        en: {
          title: "CSV export",
          userStory:
            "As a Team Lead / Lead Gen, I want to export the tracking to CSV, so that I can analyze the data in external tools.",
          criteria: [
            "The “Export CSV” button exports all tracking in CSV format.",
          ],
        },
        uk: {
          title: "Експорт CSV",
          userStory:
            "Як тімлід / лідген, я хочу вивантажувати трекінг у CSV, щоб аналізувати дані в зовнішніх інструментах.",
          criteria: [
            "Кнопка «Export CSV» вивантажує весь трекінг у форматі CSV.",
          ],
        },
      },
      {
        id: "US-4.5",
        priority: "Must",
        en: {
          title: "Cloud sync settings",
          userStory:
            "As a Lead Gen, I want to configure my name and auto-sync, so that my records are tagged correctly and synced.",
          criteria: [
            "In the collapsible “Cloud sync settings” section, I can:",
            "enter a userId (the name all my records are tagged with in the shared Sheet);",
            "enable the “Enable auto-sync (every 15 min)” checkbox;",
            "save settings (“Save settings”);",
            "test the connection (“Test connection”).",
            "A status is shown: working / disabled / last sync time.",
          ],
        },
        uk: {
          title: "Налаштування хмарної синхронізації",
          userStory:
            "Як лідген, я хочу налаштовувати своє ім'я та автосинк, щоб мої записи коректно позначалися й синхронізувалися.",
          criteria: [
            "У згортуваній секції «Cloud sync settings» можна:",
            "ввести userId (ім'я, яким позначаються всі мої записи у спільному Sheet'і);",
            "увімкнути чекбокс «Enable auto-sync (every 15 min)»;",
            "зберегти налаштування («Save settings»);",
            "перевірити з'єднання («Test connection»).",
            "Відображається статус: working / disabled / час останнього синку.",
          ],
        },
      },
      {
        id: "US-4.6",
        priority: "Must",
        en: {
          title: "KPI cards",
          userStory:
            "As a Team Lead / Lead Gen, I want to see the key metrics for the period, so that I can assess funnel performance.",
          criteria: [
            "The following cards are shown:",
            "Sent — proposals sent;",
            "Viewed — opened by clients + open rate %;",
            "Replied — replies + reply rate %;",
            "Hired — hired + hire rate % (of sent and of replied);",
            "Median reply — median time to client reply, in days;",
            "Connects spent — total for the period + per-reply.",
          ],
        },
        uk: {
          title: "KPI-картки",
          userStory:
            "Як тімлід / лідген, я хочу бачити ключові метрики за період, щоб оцінювати ефективність воронки.",
          criteria: [
            "Відображаються картки:",
            "Sent — надіслано пропозалів;",
            "Viewed — відкрито клієнтами + open rate %;",
            "Replied — відповідей + reply rate %;",
            "Hired — найнято + hire rate % (від sent і від replied);",
            "Median reply — медіанний час до відповіді клієнта, у днях;",
            "Connects spent — сумарно за період + per-reply.",
          ],
        },
      },
      {
        id: "US-4.7",
        priority: "Should",
        en: {
          title: "Filter by record author",
          userStory:
            "As a Team Lead / Lead Gen, I want to filter the data by author, so that I can compare the overall result, my own, and each team member's.",
          criteria: [
            "Filter pills: Total (all records), Just me (only mine), and a separate pill for each lead gen on the team.",
          ],
        },
        uk: {
          title: "Фільтр за автором записів",
          userStory:
            "Як тімлід / лідген, я хочу фільтрувати дані за автором, щоб порівнювати загальний результат, свій і по кожному учаснику команди.",
          criteria: [
            "Пілюлі-фільтри: Total (усі записи), Just me (лише мої) та окрема пілюля під кожного лідгена команди.",
          ],
        },
      },
      {
        id: "US-4.8",
        priority: "Should",
        en: {
          title: "Per-template analytics (funnel)",
          userStory:
            "As a Team Lead / Lead Gen, I want to see funnel performance per template, so that I understand which format works best.",
          criteria: [
            "The “By template — funnel performance” card: 4 vertical stacked bars (PRIORITY / STANDARD / SKIP colors) per template default / paragraph / agency / direct; an unused template is shown as an empty bar.",
            "Below the chart — a per-template table: Sent / Viewed / Replied / Hired / Open% / Reply%.",
          ],
        },
        uk: {
          title: "Аналітика за шаблонами (funnel)",
          userStory:
            "Як тімлід / лідген, я хочу бачити ефективність воронки за кожним шаблоном, щоб розуміти, який формат працює краще.",
          criteria: [
            "Картка «By template — funnel performance»: 4 вертикальні stacked-bar (кольори PRIORITY / STANDARD / SKIP) за шаблонами default / paragraph / agency / direct; невикористаний шаблон відображається порожнім баром.",
            "Під графіком — таблиця per-template: Sent / Viewed / Replied / Hired / Open% / Reply%.",
          ],
        },
      },
      {
        id: "US-4.9",
        priority: "Should",
        en: {
          title: "Per-niche analytics",
          userStory:
            "As a Team Lead / Lead Gen, I want to see metrics broken down by niche, so that I can identify the highest-converting directions.",
          criteria: [
            "The “By niche” table: Niche / Sent / Open% / Reply% / Hire%.",
          ],
        },
        uk: {
          title: "Аналітика за нішами",
          userStory:
            "Як тімлід / лідген, я хочу бачити метрики в розрізі ніш, щоб визначати найконверсійніші напрями.",
          criteria: [
            "Таблиця «By niche»: Niche / Sent / Open% / Reply% / Hire%.",
          ],
        },
      },
      {
        id: "US-4.10",
        priority: "Must",
        en: {
          title: "Proposals table with inline editing",
          userStory:
            "As a Lead Gen, I want to view and edit proposal records, so that I can correct data when auto-detection fails.",
          criteria: [
            "Status filters: All / Sent only / Viewed / Replied / Hired.",
            "Columns: Job (title + link) / Source (author) / Niche / Sent (date) / Connects / Status / Actions.",
            "Connects are edited inline.",
            "A record can be deleted.",
          ],
        },
        uk: {
          title: "Таблиця пропозалів з інлайн-редагуванням",
          userStory:
            "Як лідген, я хочу переглядати й правити записи пропозалів, щоб коригувати дані за помилок автодетекту.",
          criteria: [
            "Фільтри статусу: All / Sent only / Viewed / Replied / Hired.",
            "Колонки: Job (title + посилання) / Source (автор) / Niche / Sent (дата) / Connects / Status / Actions.",
            "Конекти редагуються інлайн.",
            "Запис можна видалити.",
          ],
        },
      },
      {
        id: "US-4.11",
        priority: "Should",
        en: {
          title: "Read-only records of others",
          userStory:
            "As a Team Lead / Lead Gen, I want to see colleagues' records as read-only, so that I don't accidentally change someone else's data.",
          criteria: ["Other people's records are shown without actions (read-only)."],
        },
        uk: {
          title: "Read-only чужі записи",
          userStory:
            "Як тімлід / лідген, я хочу бачити записи колег лише для читання, щоб випадково не змінити чужі дані.",
          criteria: ["Чужі записи відображаються без дій (read-only)."],
        },
      },
    ],
  },
  {
    number: 5,
    en: { title: "Cloud sync and background automation" },
    uk: { title: "Хмарна синхронізація та фонова автоматизація" },
    stories: [
      {
        id: "US-5.1",
        priority: "Should",
        en: {
          title: "Auto-sync every 15 minutes",
          userStory:
            "As a Lead Gen, I want data to sync automatically in the background, so that the team always sees an up-to-date picture without manual actions.",
          criteria: [
            "If auto-sync is enabled, every 15 minutes the extension:",
            "pushes new/changed records to the Google Sheet;",
            "pulls others' records and records synced by others;",
            "pulls the updated portfolio (References + Campaigns).",
          ],
        },
        uk: {
          title: "Автосинк кожні 15 хвилин",
          userStory:
            "Як лідген, я хочу щоб дані синхронізувалися автоматично у фоні, щоб команда завжди бачила актуальну картину без ручних дій.",
          criteria: [
            "Якщо автосинк увімкнено, кожні 15 хвилин розширення:",
            "надсилає нові/змінені записи в Google Sheet;",
            "завантажує чужі записи та записи, синхронізовані іншими;",
            "завантажує оновлене портфоліо (References + Campaigns).",
          ],
        },
      },
      {
        id: "US-5.2",
        priority: "Should",
        en: {
          title: "Deep Scan cache for 60 minutes",
          userStory:
            "As a Lead Gen, I want scan results to be cached for an hour, so that I don't rescan and badges are restored instantly.",
          criteria: [
            "Deep-scan results are valid for 60 minutes; during this time a rescan is not required and badges are restored instantly.",
          ],
        },
        uk: {
          title: "Кеш Deep Scan на 60 хвилин",
          userStory:
            "Як лідген, я хочу щоб результати скану кешувалися на годину, щоб не сканувати повторно й миттєво відновлювати бейджі.",
          criteria: [
            "Результати deep-scan дійсні 60 хвилин; протягом цього часу повторний скан не потрібен, бейджі відновлюються миттєво.",
          ],
        },
      },
      {
        id: "US-5.3",
        priority: "Could",
        en: {
          title: "Auto-cleanup of stale data",
          userStory:
            "As a Lead Gen, I want old data to be cleaned up automatically, so that storage doesn't grow unbounded.",
          criteria: [
            "On loading the search page, keys older than 24 hours are automatically deleted.",
          ],
        },
        uk: {
          title: "Автоочищення застарілих даних",
          userStory:
            "Як лідген, я хочу щоб старі дані очищалися автоматично, щоб сховище не розросталося.",
          criteria: [
            "При завантаженні сторінки пошуку ключі, старші за 24 години, автоматично видаляються.",
          ],
        },
      },
      {
        id: "US-5.4",
        priority: "Must",
        en: {
          title: "Background submission tracking",
          userStory:
            "As a Lead Gen, I want the fact of submission to be recorded in the background, so that tracking is complete without my involvement.",
          criteria: [
            "When Send is clicked on Upwork, the record is automatically marked as sent with time, connects, and the final letter text.",
          ],
        },
        uk: {
          title: "Фоновий трекінг надсилання",
          userStory:
            "Як лідген, я хочу щоб факт надсилання фіксувався у фоні, щоб трекінг був повним без моєї участі.",
          criteria: [
            "При натисканні Send в Upwork запис автоматично позначається надісланим із часом, конектами та фінальним текстом листа.",
          ],
        },
      },
    ],
  },
];

export function getMeta(locale: Locale) {
  return {
    intro: meta.intro[locale],
    format: meta.format[locale],
    personas: meta.personas[locale],
    legend: meta.legend[locale],
  };
}

export function totalStories(): number {
  return epics.reduce((sum, e) => sum + e.stories.length, 0);
}
