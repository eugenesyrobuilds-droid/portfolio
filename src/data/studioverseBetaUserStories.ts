import type {
  Section,
  UserStoriesData,
  UserStoriesMeta,
} from "./userStoriesTypes";

export const meta: UserStoriesMeta = {
  intro: {
    en: "Industry-standard user stories covering the full functionality of StudioVerse Creator Network across all roles. Format follows the classic INVEST template: As a [persona], I want [action], so that [outcome]. Acceptance criteria (AC) are bulleted under each story where the rule isn't self-evident from the story line.",
    uk: "User stories у галузевому стандарті, що покривають увесь функціонал мережі творців StudioVerse у розрізі ролей. Формат — класичний шаблон INVEST: Як [персона], я хочу [дію], щоб [результат]. Критерії приймання (AC) перелічені під кожною історією там, де правило не очевидне з самої історії.",
  },
  format: {
    en: "Source-of-truth is the live codebase plus an internal feature audit. Use this document for backlog reference, onboarding new product/engineering hires, or as the structure for a sprint backlog import.",
    uk: "Джерело правди — поточна кодова база плюс внутрішній feature audit. Документ використовується як референс беклогу, для онбордингу нових продуктових/інженерних співробітників або як основа імпорту в спринт-беклог.",
  },
  personas: {
    en: [
      { name: "Visitor", description: "unauthenticated user discovering the platform via public funnels." },
      { name: "Artist", description: "creator delivering assigned project work; owns their skills/availability profile." },
      { name: "Studio Director (SD)", description: "operator who accepts artists into a studio and runs projects end-to-end." },
      { name: "Studio Manager (SM)", description: "day-to-day project + task runner for one studio; no pipeline or order access." },
      { name: "Artist Evaluator (AE)", description: "trusted artist with delegated pipeline review (sub-role of Artist)." },
      { name: "Platform Owner (PO)", description: "super-admin with full oversight across studios, candidates, orders, and audit." },
      { name: "Client", description: "buyer of a video project; read-only access to linked projects + commenting." },
    ],
    uk: [
      { name: "Відвідувач", description: "неавторизований користувач, що знайомиться з платформою через публічні воронки." },
      { name: "Артист", description: "автор контенту, що виконує призначену роботу по проєктах; володіє своїм профілем навичок/доступності." },
      { name: "Директор студії (SD)", description: "оператор, який приймає артистів у студію і веде проєкти end-to-end." },
      { name: "Менеджер студії (SM)", description: "щоденне ведення проєктів і задач у межах однієї студії; без доступу до пайплайну й замовлень." },
      { name: "Артист-оцінювач (AE)", description: "довірений артист з делегованим переглядом пайплайну (під-роль артиста)." },
      { name: "Власник платформи (PO)", description: "супер-адмін з повним наглядом над студіями, кандидатами, замовленнями й аудитом." },
      { name: "Клієнт", description: "замовник відео-проєкту; read-only доступ до повʼязаних проєктів + коментарі." },
    ],
  },
};

export const sections: Section[] = [
  {
    number: "1",
    en: { title: "Visitor (public, no auth)" },
    uk: { title: "Відвідувач (публічний, без авторизації)" },
    epics: [
      {
        number: "1.1",
        en: { title: "Apply to join the creator network" },
        uk: { title: "Подача заявки в мережу творців" },
        stories: [
          {
            id: "US-V001",
            en: {
              title: "Hero & entry page",
              userStory: "As a visitor on the application page, I want to see a clear “Now Hiring” badge, value proposition, and 3 perks (project-based pay, fully remote, quick onboarding), so that I understand whether the role fits me before I start the form.",
              criteria: [],
            },
            uk: {
              title: "Hero та сторінка входу",
              userStory: "Як відвідувач на сторінці заявки, я хочу бачити чіткий бейдж «Now Hiring», ціннісну пропозицію та 3 переваги (оплата за проєкт, повна віддаленість, швидкий онбординг), щоб зрозуміти, чи підходить мені роль, ще до заповнення форми.",
              criteria: [],
            },
          },
          {
            id: "US-V002",
            en: {
              title: "Submit personal details (Stage 1)",
              userStory: "As a visitor, I want to enter my full name, email, portfolio URL, and optional LinkedIn URL with inline validation, so that I can move past the intake gate with a single click.",
              criteria: [
                "Email must contain `@`; portfolio URL is required; LinkedIn is optional; invalid inputs show a red inline error before submit unlocks.",
              ],
            },
            uk: {
              title: "Особисті дані (крок 1)",
              userStory: "Як відвідувач, я хочу ввести повне імʼя, email, URL портфоліо та опційно URL LinkedIn з інлайн-валідацією, щоб пройти етап реєстрації за один клік.",
              criteria: [
                "Email має містити `@`; URL портфоліо обовʼязковий; LinkedIn — опційний; некоректні значення показують червону inline-помилку до того, як кнопка submit розблокується.",
              ],
            },
          },
          {
            id: "US-V003",
            en: {
              title: "Choose an application path",
              userStory: "As a visitor who has completed intake, I want to choose between a Test path (“Make a test video — paid by performance if accepted”) and a Portfolio path (“Send a portfolio sample — faster, no payout”), so that I can apply through the route that suits my readiness.",
              criteria: [],
            },
            uk: {
              title: "Вибір шляху подачі",
              userStory: "Як відвідувач, який пройшов інтейк, я хочу обрати між Test-шляхом («Зроби тестове відео — оплата по показниках, якщо приймуть») і Portfolio-шляхом («Надішли приклад портфоліо — швидше, без виплати»), щоб подаватись через маршрут, який відповідає моїй готовності.",
              criteria: [],
            },
          },
          {
            id: "US-V004",
            en: {
              title: "Select up to 3 video types (Test path)",
              userStory: "As a Test-path applicant, I want to pick up to 3 video types I make best, grouped by 5 categories with a live `N / 3` counter, so that the platform can match me to a relevant test.",
              criteria: [
                "Attempting a 4th selection shows a toast.",
                "“Continue to Skills” is disabled until at least 1 type is picked.",
              ],
            },
            uk: {
              title: "Вибір до 3 типів відео (Test-шлях)",
              userStory: "Як кандидат на Test-шляху, я хочу обрати до 3 типів відео, які роблю найкраще, згрупованих за 5 категоріями, з лічильником `N / 3` у реальному часі, щоб платформа підібрала мені релевантний тест.",
              criteria: [
                "Спроба обрати 4-й тип показує toast.",
                "Кнопка «Continue to Skills» неактивна, поки не обрано хоча б 1 тип.",
              ],
            },
          },
          {
            id: "US-V005",
            en: {
              title: "Self-rate skills 1–10 (Test path)",
              userStory: "As a Test-path applicant, I want to rate each skill in the cards belonging to my chosen video types on a 0–10 slider with the unrated state showing `—`, so that the matcher has my self-assessed strengths.",
              criteria: [
                "Submit is blocked if any skill is unrated.",
                "Rating shows a colored badge when set.",
              ],
            },
            uk: {
              title: "Самооцінка навичок 1–10 (Test-шлях)",
              userStory: "Як кандидат на Test-шляху, я хочу оцінити кожну навичку в картках, що належать обраним типам відео, на слайдері 0–10, де неоцінений стан показує `—`, щоб матчер бачив мої самооцінені сильні сторони.",
              criteria: [
                "Submit заблокований, якщо є хоча б одна неоцінена навичка.",
                "Оцінений рейтинг відображається кольоровим бейджем.",
              ],
            },
          },
          {
            id: "US-V006",
            en: {
              title: "Pick a brief (Portfolio path)",
              userStory: "As a Portfolio-path applicant, I want to see all currently active test briefs in a selectable list with goal+tagline preview, so that I can submit my existing work against a brief that matches it.",
              criteria: [],
            },
            uk: {
              title: "Вибір брифу (Portfolio-шлях)",
              userStory: "Як кандидат на Portfolio-шляху, я хочу бачити всі активні тестові брифи в списку з прев’ю мети й тагліну, щоб подати наявну роботу проти найрелевантнішого брифу.",
              criteria: [],
            },
          },
          {
            id: "US-V007",
            en: {
              title: "Submit portfolio video link (Portfolio path)",
              userStory: "As a Portfolio-path applicant, I want to paste any portfolio video URL, complete reCAPTCHA, and submit, so that the studio director sees my sample without me producing a new test.",
              criteria: [],
            },
            uk: {
              title: "Надсилання посилання на портфоліо-відео (Portfolio-шлях)",
              userStory: "Як кандидат на Portfolio-шляху, я хочу вставити URL будь-якого відео з портфоліо, пройти reCAPTCHA й надіслати, щоб директор студії побачив зразок без того, щоб я записував новий тест.",
              criteria: [],
            },
          },
          {
            id: "US-V008",
            en: {
              title: "See application status while pending",
              userStory: "As a visitor returning to the application page, I want a status screen showing one of `pending_review / reviewed / accepted / rejected` with appropriate copy and emoji, so that I know where I stand without contacting support.",
              criteria: ["Polls the candidates API every 10s and shows a toast when the state changes."],
            },
            uk: {
              title: "Перегляд статусу заявки, поки вона на розгляді",
              userStory: "Як відвідувач, що повернувся на сторінку заявки, я хочу бачити екран статусу з одним зі значень `pending_review / reviewed / accepted / rejected`, з відповідним текстом та емодзі, щоб розуміти своє становище без звернення в підтримку.",
              criteria: ["Polling endpoint кандидатів кожні 10 с; при зміні стану показується toast."],
            },
          },
        ],
      },
      {
        number: "1.2",
        en: { title: "Complete a test video submission" },
        uk: { title: "Подача тестового відео" },
        stories: [
          {
            id: "US-V009",
            en: {
              title: "See the test brief",
              userStory: "As a candidate with a submit-link, I want a personalised brief view (“Hey [Name]”) with the full goal, deliverable, materials, script, tools, requirements, submission steps, and evaluation criteria, so that I produce the right video.",
              criteria: [
                "A pill switcher lets me view alternative tests; the recommended one has a “✨ Recommended” tag.",
              ],
            },
            uk: {
              title: "Перегляд тестового брифу",
              userStory: "Як кандидат із submit-лінком, я хочу персоналізований вигляд брифу («Hey [Name]») з повною метою, deliverable, матеріалами, сценарієм, інструментами, вимогами, кроками подачі та критеріями оцінки, щоб зняти правильне відео.",
              criteria: [
                "Pill-перемикач дає переглядати альтернативні тести; рекомендований має тег «✨ Recommended».",
              ],
            },
          },
          {
            id: "US-V010",
            en: {
              title: "Submit a finished test video",
              userStory: "As a candidate, I want to paste a Google Drive link, optionally list AI tools and notes, complete reCAPTCHA, and confirm via an “Are you absolutely sure?” modal, so that submission is intentional and the file is reviewable.",
              criteria: [
                "A 6-item pre-submit checklist (brief match, duration, 1080p, MP4, Drive permissions, file name) is shown.",
                "The payment-model card displays tiered payouts (e.g. 1K+ views → CAD 30).",
              ],
            },
            uk: {
              title: "Надсилання готового тестового відео",
              userStory: "Як кандидат, я хочу вставити лінк на Google Drive, опційно перелічити AI-інструменти та нотатки, пройти reCAPTCHA й підтвердити модалкою «Are you absolutely sure?», щоб подача була усвідомленою, а файл придатним до перегляду.",
              criteria: [
                "Чекліст із 6 пунктів перед надсиланням (відповідність брифу, тривалість, 1080p, MP4, права в Drive, імʼя файлу).",
                "Картка моделі оплати показує тарифи (напр. 1K+ переглядів → CAD 30).",
              ],
            },
          },
          {
            id: "US-V011",
            en: {
              title: "See a per-status submitted state",
              userStory: "As a candidate who already submitted, I want to see a status-specific message (applied / pending_review / reviewed / decided), so that the page never blanks out after submission.",
              criteria: [],
            },
            uk: {
              title: "Стан після подачі залежно від статусу",
              userStory: "Як кандидат, що вже подався, я хочу бачити повідомлення, специфічне для статусу (applied / pending_review / reviewed / decided), щоб сторінка не залишалась порожньою після подачі.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "1.3",
        en: { title: "Order a video" },
        uk: { title: "Замовлення відео" },
        stories: [
          {
            id: "US-V012",
            en: {
              title: "Landing — choose chat or form",
              userStory: "As a prospective client on the order page, I want a landing screen that lets me either chat with an AI consultant or skip to a manual form, so that I can self-select based on my time available.",
              criteria: [],
            },
            uk: {
              title: "Лендинг — чат або форма",
              userStory: "Як потенційний клієнт на сторінці замовлення, я хочу лендинг, який дозволяє або поспілкуватися з AI-консультантом, або одразу перейти до ручної форми, щоб обрати залежно від наявного часу.",
              criteria: [],
            },
          },
          {
            id: "US-V013",
            en: {
              title: "Resume a draft order",
              userStory: "As a visitor who left the order page mid-flow, I want a “Continue your previous order?” prompt on return, so that I don't lose chat state.",
              criteria: [],
            },
            uk: {
              title: "Продовження чернетки замовлення",
              userStory: "Як відвідувач, який пішов зі сторінки замовлення посеред флоу, я хочу при поверненні бачити підказку «Continue your previous order?», щоб не втрачати стан чату.",
              criteria: [],
            },
          },
          {
            id: "US-V014",
            en: {
              title: "Chat with an AI consultant",
              userStory: "As a visitor who chose Chat, I want a chat surface with my messages on the right (blue), the assistant on the left (white), an `X / 30` message counter that turns red near the cap, and per-turn rate-limit + network error display, so that I can scope my brief in 2–3 minutes.",
              criteria: [
                "Send is disabled at 30 messages or when the assistant is responding.",
                "A “Fill On Your Own” button is always available to bail to the form.",
              ],
            },
            uk: {
              title: "Чат з AI-консультантом",
              userStory: "Як відвідувач, що обрав Chat, я хочу інтерфейс чату: мої повідомлення праворуч (сині), асистент ліворуч (білий), лічильник `X / 30`, який стає червоним біля ліміту, і відображення помилок rate-limit + мережі покроково, щоб сформувати бриф за 2–3 хвилини.",
              criteria: [
                "Send неактивний при 30 повідомленнях або поки асистент відповідає.",
                "Кнопка «Fill On Your Own» завжди доступна для переходу у форму.",
              ],
            },
          },
          {
            id: "US-V015",
            en: {
              title: "Edit the AI-extracted summary",
              userStory: "As a visitor who finished the AI chat, I want to review and edit a structured summary with editable Summary, Contact (email+name+company), Scope (video type / content / style / duration / urgency / platforms), Skills (AI-picked pills), References, Assets, and Missing Info sections, so that what I submit is what I meant.",
              criteria: [
                "Low-AI-confidence fields wear a red “Please verify” badge.",
                "Platforms is multi-select chips; References and Assets are editable URL lists with an “Add” affordance.",
              ],
            },
            uk: {
              title: "Редагування зведеного брифу від AI",
              userStory: "Як відвідувач, що завершив AI-чат, я хочу переглянути й відредагувати структуроване зведення з полями Summary, Contact (email+name+company), Scope (video type / content / style / duration / urgency / platforms), Skills (pills від AI), References, Assets та Missing Info, щоб надіслати рівно те, що мав на увазі.",
              criteria: [
                "Поля з низькою впевненістю AI мають червоний бейдж «Please verify».",
                "Platforms — multi-select chips; References та Assets — редаговані URL-списки з кнопкою «Add».",
              ],
            },
          },
          {
            id: "US-V016",
            en: {
              title: "See live price estimate",
              userStory: "As a visitor finishing my order, I want a price card showing `$X–$Y` based on the entered details, with an Urgent checkbox that toggles a +50% surcharge live, so that I understand cost before I commit.",
              criteria: [],
            },
            uk: {
              title: "Орієнтовна вартість у реальному часі",
              userStory: "Як відвідувач, що завершує замовлення, я хочу картку ціни `$X–$Y` на основі введених даних, з чекбоксом Urgent, який вмикає +50% надбавку в реальному часі, щоб розуміти вартість до підтвердження.",
              criteria: [],
            },
          },
          {
            id: "US-V017",
            en: {
              title: "Submit the order",
              userStory: "As a visitor, I want a single “Submit order →” button that validates required fields and then shows a success confirmation, so that I leave with proof my brief was received.",
              criteria: [],
            },
            uk: {
              title: "Надсилання замовлення",
              userStory: "Як відвідувач, я хочу одну кнопку «Submit order →», що валідує обовʼязкові поля і показує підтвердження, щоб піти з підтвердженням того, що мій бриф отримано.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "1.4",
        en: { title: "Public artist profile" },
        uk: { title: "Публічний профіль артиста" },
        stories: [
          {
            id: "US-V018",
            en: {
              title: "View an artist's public profile",
              userStory: "As anyone with a public profile link, I want a header showing the artist's avatar, name, email, last-update date, and Rating + Coverage stat chips, so that I can quickly assess fit.",
              criteria: [],
            },
            uk: {
              title: "Перегляд публічного профілю артиста",
              userStory: "Як будь-хто з лінком на публічний профіль, я хочу хедер з аватаром артиста, імʼям, email, датою останнього оновлення і стат-чипами Rating + Coverage, щоб швидко оцінити відповідність.",
              criteria: [],
            },
          },
          {
            id: "US-V019",
            en: {
              title: "See experience and availability",
              userStory: "As a profile viewer, I want a strip of chips (Experience / Hours per week / Videos per week / Content preference / Turnaround AI 30s / Turnaround Edit 1m) and a free-text availability note, so that I understand bandwidth without asking.",
              criteria: ["Empty chips render with a dashed border and `—` placeholder rather than disappearing."],
            },
            uk: {
              title: "Перегляд досвіду й доступності",
              userStory: "Як переглядач профілю, я хочу стрічку чипів (Experience / Hours per week / Videos per week / Content preference / Turnaround AI 30s / Turnaround Edit 1m) та поле вільного тексту з нотаткою про доступність, щоб розуміти пропускну здатність без запитань.",
              criteria: ["Порожні чипи відображаються пунктирною рамкою та плейсхолдером `—`, а не зникають."],
            },
          },
          {
            id: "US-V020",
            en: {
              title: "Browse portfolio and social links",
              userStory: "As a profile viewer, I want one-click access to Portfolio / LinkedIn / Best work / Instagram / Twitter / TikTok if provided, so that I can inspect work in their native channel.",
              criteria: [],
            },
            uk: {
              title: "Перегляд портфоліо та соцмереж",
              userStory: "Як переглядач профілю, я хочу один клік до Portfolio / LinkedIn / Best work / Instagram / Twitter / TikTok за наявності, щоб дивитися роботи в нативних каналах.",
              criteria: [],
            },
          },
          {
            id: "US-V021",
            en: {
              title: "Inspect preferences and master skills",
              userStory: "As a profile viewer, I want a Preferences section (video types + self-rated skills) and a Master Skills section (52-skill grid heat-coloured: green ≥8 / blue 5–7 / amber <5) with per-category progress bars, so that I can compare candidates objectively.",
              criteria: [],
            },
            uk: {
              title: "Перегляд преференцій та master-навичок",
              userStory: "Як переглядач профілю, я хочу секцію Preferences (типи відео + самооцінка навичок) і Master Skills (сітка з 52 навичок з кольоровим теплоплитом: зелений ≥8 / синій 5–7 / янтарний <5) з прогрес-барами по категоріях, щоб обʼєктивно порівнювати кандидатів.",
              criteria: [],
            },
          },
          {
            id: "US-V022",
            en: {
              title: "See studios + projects",
              userStory: "As a profile viewer, I want a two-column read-only block showing the artist's studio chips and active project list with status, so that I see their current commitments.",
              criteria: [],
            },
            uk: {
              title: "Перегляд студій та проєктів",
              userStory: "Як переглядач профілю, я хочу двоколонковий read-only блок з чипами студій артиста й списком активних проєктів зі статусом, щоб бачити поточні зобовʼязання.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "1.5",
        en: { title: "Sign-in and password recovery" },
        uk: { title: "Логін та відновлення паролю" },
        stories: [
          {
            id: "US-V023",
            en: {
              title: "Sign in",
              userStory: "As a registered user, I want a single login form with email + password and Enter-to-submit, so that I land on my role's home (owner / senior / my-projects / client).",
              criteria: [
                "Honors a sanitised `?next=/path` if present.",
                "Shows “Signing in…” while pending; inline red error on failure.",
              ],
            },
            uk: {
              title: "Вхід",
              userStory: "Як зареєстрований користувач, я хочу одну форму логіну з email + пароль і submit по Enter, щоб потрапити на домашню сторінку моєї ролі (owner / senior / my-projects / client).",
              criteria: [
                "Враховує санітизований `?next=/path`, якщо є.",
                "Показує «Signing in…» поки обробляється; при невдачі — inline червона помилка.",
              ],
            },
          },
          {
            id: "US-V024",
            en: {
              title: "Recover a forgotten password",
              userStory: "As a user who forgot their password, I want a “Forgot password” mode that emails me a new password and shows a generic “Check your inbox” confirmation, so that I can reset without exposing whether the email exists.",
              criteria: [],
            },
            uk: {
              title: "Відновлення забутого паролю",
              userStory: "Як користувач, що забув пароль, я хочу режим «Forgot password», який надсилає на email новий пароль і показує загальне підтвердження «Check your inbox», щоб скинути пароль без розкриття факту існування email.",
              criteria: [],
            },
          },
        ],
      },
    ],
  },
  {
    number: "2",
    en: { title: "Artist" },
    uk: { title: "Артист" },
    epics: [
      {
        number: "2.1",
        en: { title: "Dashboard" },
        uk: { title: "Дашборд" },
        stories: [
          {
            id: "US-A001",
            en: {
              title: "View assigned projects",
              userStory: "As an artist, I want a “My Projects” list of projects assigned to me with status badges, unread-mention dots, activity dots, and a red border on at-risk projects, so that I prioritise correctly.",
              criteria: [],
            },
            uk: {
              title: "Перегляд призначених проєктів",
              userStory: "Як артист, я хочу список «My Projects» з призначеними мені проєктами, з бейджами статусу, точками непрочитаних згадок, точками активності та червоною рамкою на ризикових проєктах, щоб правильно пріоритизувати.",
              criteria: [],
            },
          },
          {
            id: "US-A002",
            en: {
              title: "See an empty state when I have no projects",
              userStory: "As a new artist, I want a friendly “📁 No projects yet” empty state instead of a blank surface, so that the dashboard never looks broken.",
              criteria: [],
            },
            uk: {
              title: "Empty state, коли проєктів немає",
              userStory: "Як новий артист, я хочу привітний empty state «📁 No projects yet» замість порожньої сторінки, щоб дашборд ніколи не виглядав поламаним.",
              criteria: [],
            },
          },
          {
            id: "US-A003",
            en: {
              title: "See a warning when I have no studio",
              userStory: "As an artist accepted into the distribution pool, I want a yellow banner explaining I'm “in the review pipeline” until a studio picks me up, so that I understand why my project list is empty.",
              criteria: [],
            },
            uk: {
              title: "Попередження, коли немає студії",
              userStory: "Як артист, прийнятий у distribution pool, я хочу жовтий банер, що пояснює: я «in the review pipeline», поки якась студія не підбере, щоб розуміти, чому список проєктів порожній.",
              criteria: [],
            },
          },
          {
            id: "US-A004",
            en: {
              title: "View monthly earnings",
              userStory: "As an artist, I want an Earnings tab with a 13-month picker, totals (tasks delivered + total earned), per-studio breakdown, and a task-line list with project link + PAID badge + amount, so that I can reconcile against my own ledger.",
              criteria: [],
            },
            uk: {
              title: "Місячні заробітки",
              userStory: "Як артист, я хочу вкладку Earnings з пікером на 13 місяців, тоталами (задач здано + загалом зароблено), розбивкою по студіях і списком task-line з лінком на проєкт + бейджем PAID + сумою, щоб звіряти зі своїм власним обліком.",
              criteria: [],
            },
          },
          {
            id: "US-A005",
            en: {
              title: "See my studios and teammates",
              userStory: "As an artist on ≥1 studio, I want a Studios tab listing each studio with its director and full artist roster (me highlighted, evaluators tagged), so that I know who I'm working with.",
              criteria: [],
            },
            uk: {
              title: "Перегляд студій та колег",
              userStory: "Як артист в одній чи кількох студіях, я хочу вкладку Studios зі списком студій, директором і повним складом артистів (я виділений, evaluator-и помічені), щоб знати, з ким працюю.",
              criteria: [],
            },
          },
          {
            id: "US-A006",
            en: {
              title: "Access studio chat",
              userStory: "As an artist on ≥1 studio, I want a Chats tab opening the ChatHub for that studio, so that I can DM teammates and follow announcements without leaving the platform.",
              criteria: [],
            },
            uk: {
              title: "Доступ до чату студії",
              userStory: "Як артист в одній чи кількох студіях, я хочу вкладку Chats, що відкриває ChatHub цієї студії, щоб DM-ити колег і слідкувати за анонсами без виходу з платформи.",
              criteria: [],
            },
          },
          {
            id: "US-A007",
            en: {
              title: "Quick-link to my skills",
              userStory: "As an artist, I want a “My Skills” shortcut in the header opening the skills editor, so that I can update my profile without hunting through menus.",
              criteria: [],
            },
            uk: {
              title: "Шорткат до моїх навичок",
              userStory: "Як артист, я хочу шорткат «My Skills» у хедері, який відкриває редактор навичок, щоб оновлювати профіль без блукань по меню.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "2.2",
        en: { title: "Skill & availability profile" },
        uk: { title: "Профіль навичок і доступності" },
        stories: [
          {
            id: "US-A008",
            en: {
              title: "See my Rating + Coverage",
              userStory: "As an artist on my skills page, I want a progress card showing my current Rating (avgFilled × coverageCoef) and Coverage (`N / TOTAL_SKILLS`) with a progress bar and a “≥20 unlocks…” hint, so that I know what to fill in next.",
              criteria: [],
            },
            uk: {
              title: "Rating + Coverage",
              userStory: "Як артист на сторінці навичок, я хочу прогрес-картку з поточним Rating (avgFilled × coverageCoef) і Coverage (`N / TOTAL_SKILLS`) з прогрес-баром і підказкою «≥20 unlocks…», щоб знати, що заповнювати далі.",
              criteria: [],
            },
          },
          {
            id: "US-A009",
            en: {
              title: "Edit Preferences (from intake)",
              userStory: "As an artist, I want to edit my video-type selections (max 3, grouped, counter-enforced) and per-skill 0–10 sliders for the intake taxonomy, with Save / Cancel, so that I can refine what I told you on application.",
              criteria: [],
            },
            uk: {
              title: "Редагування Preferences (з інтейку)",
              userStory: "Як артист, я хочу редагувати свої типи відео (макс 3, згруповані, контрольовані лічильником) і слайдери 0–10 на кожну навичку з intake-таксономії, з кнопками Save / Cancel, щоб уточнювати те, що вказував при подачі.",
              criteria: [],
            },
          },
          {
            id: "US-A010",
            en: {
              title: "Rate myself on the 52-skill master taxonomy",
              userStory: "As an artist, I want category-accordion cards (showing `X / Y filled`) with a 0–10 slider per skill and a clear button, so that the matcher has full coverage of my craft.",
              criteria: [],
            },
            uk: {
              title: "Самооцінка по master-таксономії з 52 навичок",
              userStory: "Як артист, я хочу акордеон-картки категорій (із `X / Y filled`) зі слайдером 0–10 на кожну навичку і кнопкою clear, щоб матчер мав повне покриття мого ремесла.",
              criteria: [],
            },
          },
          {
            id: "US-A011",
            en: {
              title: "Self-assess work cadence and turnaround",
              userStory: "As an artist, I want a Self Assessment block with years of AI video experience, videos/week, content preference (AI / editing / both), turnaround for 30s AI, turnaround for 1m editing, hours/week, and free-text availability, so that PMs match my realistic capacity.",
              criteria: [],
            },
            uk: {
              title: "Самооцінка темпу й turnaround",
              userStory: "Як артист, я хочу блок Self Assessment з роками досвіду в AI-відео, videos/week, content preference (AI / editing / both), turnaround для 30s AI, turnaround для 1m editing, hours/week і вільним полем availability, щоб PM матчили реалістичну продуктивність.",
              criteria: [],
            },
          },
          {
            id: "US-A012",
            en: {
              title: "Share my best work and socials",
              userStory: "As an artist, I want a Links accordion for Best Work URL + Instagram / Twitter / TikTok handles (accepting either `@user` or full URL), so that staff and prospective studios can preview my style.",
              criteria: [],
            },
            uk: {
              title: "Best work і соцмережі",
              userStory: "Як артист, я хочу акордеон Links для Best Work URL + Instagram / Twitter / TikTok handles (приймає або `@user`, або повний URL), щоб команда й студії бачили мій стиль.",
              criteria: [],
            },
          },
          {
            id: "US-A013",
            en: {
              title: "Save with sticky bar",
              userStory: "As an artist editing skills, I want a sticky bottom bar showing live “N of TOTAL skills filled · Rating X.X” plus a Save button, so that I can save without scrolling.",
              criteria: [],
            },
            uk: {
              title: "Збереження через sticky bar",
              userStory: "Як артист, що редагує навички, я хочу sticky bottom bar, який у реальному часі показує «N of TOTAL skills filled · Rating X.X» плюс кнопку Save, щоб зберегти без скролу.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "2.3",
        en: { title: "Submit profile for distribution" },
        uk: { title: "Подача профілю на дистрибуцію" },
        stories: [
          {
            id: "US-A014",
            en: {
              title: "First-time submit to studios",
              userStory: "As an artist with a complete profile, I want a “🚀 Submit profile to studios” button that saves first and then exposes my profile to studio directors, so that I get picked up.",
              criteria: [
                "Success toast “Profile submitted! Studios can now browse you.” appears.",
                "On first submit, the team Slack channel is auto-pinged via webhook.",
              ],
            },
            uk: {
              title: "Перша подача у студії",
              userStory: "Як артист з повним профілем, я хочу кнопку «🚀 Submit profile to studios», що спочатку зберігає, а потім відкриває профіль директорам студій, щоб мене підібрали.",
              criteria: [
                "Зʼявляється toast «Profile submitted! Studios can now browse you.».",
                "При першій подачі команді в Slack автоматично йде ping через webhook.",
              ],
            },
          },
          {
            id: "US-A015",
            en: {
              title: "Re-submit after profile updates",
              userStory: "As an artist who has previously submitted, I want a “🔁 Re-submit to studios” button so that I can re-notify studios after meaningful profile changes.",
              criteria: [],
            },
            uk: {
              title: "Повторна подача після оновлень",
              userStory: "Як артист, що вже подавався, я хочу кнопку «🔁 Re-submit to studios», щоб повторно сповістити студії після значущих змін у профілі.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "2.4",
        en: { title: "Personal account" },
        uk: { title: "Особистий акаунт" },
        stories: [
          {
            id: "US-A016",
            en: {
              title: "Edit my profile and password",
              userStory: "As any authenticated user, I want fields for Full Name, Email, and a “Change Password” section (current + new + confirm, min 8 chars), so that I keep my account current.",
              criteria: [
                "Email change requires current password.",
                "Confirm must match new.",
              ],
            },
            uk: {
              title: "Редагування профілю і паролю",
              userStory: "Як будь-який авторизований користувач, я хочу поля Full Name, Email і секцію «Change Password» (current + new + confirm, мін. 8 символів), щоб підтримувати акаунт актуальним.",
              criteria: [
                "Зміна email вимагає поточний пароль.",
                "Confirm має збігатися з новим паролем.",
              ],
            },
          },
          {
            id: "US-A017",
            en: {
              title: "Tune email notification preferences",
              userStory: "As any user, I want a list of notification-type toggles (“Email notifications” section) with a Save Preferences button, so that I only receive the messages I want.",
              criteria: [],
            },
            uk: {
              title: "Налаштування email-сповіщень",
              userStory: "Як будь-який користувач, я хочу список перемикачів типів сповіщень (секція «Email notifications») з кнопкою Save Preferences, щоб отримувати лише потрібні листи.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "2.5",
        en: { title: "Project board (artist view)" },
        uk: { title: "Дошка проєкту (вигляд артиста)" },
        stories: [
          {
            id: "US-A018",
            en: {
              title: "Read the project board",
              userStory: "As an artist assigned to a project, I want a 5-stage kanban (To Do → Rough Cut → Fine Cut → Final Cut → Approved) where tasks I own show drag affordance and tasks I don't own are read-only, so that I move my own work without interfering with anyone else's.",
              criteria: [],
            },
            uk: {
              title: "Перегляд дошки проєкту",
              userStory: "Як артист, призначений на проєкт, я хочу 5-стадійний канбан (To Do → Rough Cut → Fine Cut → Final Cut → Approved), де мої задачі мають drag-афорданс, а чужі — read-only, щоб рухати свою роботу без втручання в чужу.",
              criteria: [],
            },
          },
          {
            id: "US-A019",
            en: {
              title: "See unread + danger signals on cards",
              userStory: "As an artist, I want task cards to show a mention dot, an activity dot, a red glow when overdue/blocked, and a “⚠” badge when blocked, so that I can triage at a glance.",
              criteria: [],
            },
            uk: {
              title: "Сигнали непрочитаного й небезпеки на картках",
              userStory: "Як артист, я хочу, щоб картки задач показували точку згадки, точку активності, червоне світіння при простроченні/блоку та бейдж «⚠» при блоку, щоб тріажити з одного погляду.",
              criteria: [],
            },
          },
          {
            id: "US-A020",
            en: {
              title: "Open task details",
              userStory: "As an artist, I want clicking a task card to open the detail modal with description, links, deadlines, and comments, so that I have everything to deliver.",
              criteria: [],
            },
            uk: {
              title: "Відкриття деталей задачі",
              userStory: "Як артист, я хочу, щоб клік по картці задачі відкривав модалку з описом, лінками, дедлайнами й коментарями, щоб мати все потрібне для виконання.",
              criteria: [],
            },
          },
          {
            id: "US-A021",
            en: {
              title: "See project context",
              userStory: "As an artist on a project page, I want the project title + description, an “Open Project G-Drive” button, a Chat button with unread badge, and a Back to Projects link that respects acting-as mode, so that I navigate quickly.",
              criteria: [],
            },
            uk: {
              title: "Контекст проєкту",
              userStory: "Як артист на сторінці проєкту, я хочу назву + опис проєкту, кнопку «Open Project G-Drive», кнопку Chat з бейджем непрочитаного й посилання «Back to Projects», що враховує acting-as режим, щоб швидко навігувати.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "2.6",
        en: { title: "Comments & chat" },
        uk: { title: "Коментарі та чат" },
        stories: [
          {
            id: "US-A022",
            en: {
              title: "Comment on my own tasks",
              userStory: "As an artist, I want a rich comment editor supporting `@-mentions`, basic formatting, and a Submit action on tasks assigned to me, so that I can discuss work with PMs and clients.",
              criteria: [
                "Tasks assigned to others show comments as read-only.",
                "Opening the modal marks comments read automatically.",
              ],
            },
            uk: {
              title: "Коментування своїх задач",
              userStory: "Як артист, я хочу rich-редактор коментарів з підтримкою `@-mentions`, базового форматування і Submit на призначених мені задачах, щоб обговорювати роботу з PM і клієнтами.",
              criteria: [
                "На чужих задачах коментарі відображаються як read-only.",
                "Відкриття модалки автоматично позначає коментарі прочитаними.",
              ],
            },
          },
          {
            id: "US-A023",
            en: {
              title: "Use studio chat channels and DMs",
              userStory: "As an artist on ≥1 studio, I want the Chats tab to show channel rail, a Start DM button, unread counters, `@-mention` autocomplete, edit (10-min window), delete (soft-delete tombstone), thread replies, channel mute, and within-studio search, so that I have a full chat surface without a separate tool.",
              criteria: [],
            },
            uk: {
              title: "Канали й DM у чаті студії",
              userStory: "Як артист в одній чи кількох студіях, я хочу, щоб вкладка Chats показувала рейку каналів, кнопку Start DM, лічильники непрочитаного, автокомпліт `@-mention`, edit (10-хвилинне вікно), delete (soft-delete tombstone), thread replies, mute каналу й пошук у межах студії, щоб мати повноцінний чат без окремого інструмента.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "2.7",
        en: { title: "Multi-role acting" },
        uk: { title: "Перемикання ролей" },
        stories: [
          {
            id: "US-A024",
            en: {
              title: "Switch between roles",
              userStory: "As a user with multiple roles (e.g., SD + Artist), I want a header dropdown listing my available modes (owner / director / manager / artist / client) and a hard-navigate on switch, so that I can context-switch without re-login.",
              criteria: [],
            },
            uk: {
              title: "Перемикання ролей",
              userStory: "Як користувач з кількома ролями (напр., SD + Artist), я хочу dropdown у хедері зі списком доступних режимів (owner / director / manager / artist / client) і жорстку навігацію при перемиканні, щоб міняти контекст без повторного логіну.",
              criteria: [],
            },
          },
          {
            id: "US-A025",
            en: {
              title: "See the right surface for the active mode",
              userStory: "As a multi-role user, I want my acting mode to persist via sessionStorage and to fall back to the primary role on a fresh tab, so that the experience is consistent across tabs and refreshes.",
              criteria: ["In artist mode, project pages hide edit affordances and the chat sidebar."],
            },
            uk: {
              title: "Інтерфейс активного режиму",
              userStory: "Як користувач з кількома ролями, я хочу, щоб acting mode зберігався в sessionStorage і відкатувався до основної ролі на свіжій вкладці, щоб досвід був консистентний між вкладками й оновленнями.",
              criteria: ["У режимі artist на сторінках проєктів сховані edit-афорданси й сайдбар чату."],
            },
          },
        ],
      },
    ],
  },
  {
    number: "3",
    en: { title: "Studio Director (SD)" },
    uk: { title: "Директор студії (SD)" },
    epics: [
      {
        number: "3.1",
        en: { title: "Login & navigation" },
        uk: { title: "Логін і навігація" },
        stories: [
          {
            id: "US-S001",
            en: {
              title: "Land on the right tab",
              userStory: "As an SD, I want the senior home to default to the Pipeline tab and to expose Pipeline / Orders / Studios / Chats / Customers in the AppNav, so that I can review candidates immediately on login.",
              criteria: [],
            },
            uk: {
              title: "Потрапляння на потрібну вкладку",
              userStory: "Як SD, я хочу, щоб senior home відкривався на вкладці Pipeline, а в AppNav були Pipeline / Orders / Studios / Chats / Customers, щоб одразу після логіну переглядати кандидатів.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "3.2",
        en: { title: "Pipeline review" },
        uk: { title: "Розгляд пайплайну" },
        stories: [
          {
            id: "US-S002",
            en: {
              title: "See the candidate review queue",
              userStory: "As an SD, I want a Pipeline panel showing Total / Need Review / Reviewed / Decided stat cards plus a filterable candidate table (Name · Portfolio · Status · Submitted · Score · Action), so that I prioritise who to review next.",
              criteria: [],
            },
            uk: {
              title: "Черга кандидатів",
              userStory: "Як SD, я хочу панель Pipeline з картками Total / Need Review / Reviewed / Decided плюс фільтровану таблицю кандидатів (Name · Portfolio · Status · Submitted · Score · Action), щоб пріоритизувати, кого переглядати далі.",
              criteria: [],
            },
          },
          {
            id: "US-S003",
            en: {
              title: "Filter by path and calendar window",
              userStory: "As an SD, I want a path filter (All / Test / Portfolio) and a calendar-period filter (Week / Month / Quarter / All) plus column sort with ↑↓ indicators, so that I can slice the queue quickly.",
              criteria: [],
            },
            uk: {
              title: "Фільтр за шляхом і періодом",
              userStory: "Як SD, я хочу фільтр шляху (All / Test / Portfolio) і фільтр періоду (Week / Month / Quarter / All) плюс сортування колонок з індикаторами ↑↓, щоб швидко зрізати чергу.",
              criteria: [],
            },
          },
          {
            id: "US-S004",
            en: {
              title: "See claim status to avoid duplicate work",
              userStory: "As an SD, I want a “🎯 [name]” claim badge on rows already claimed by another SD, so that I don't waste time reviewing a candidate I can no longer accept.",
              criteria: [],
            },
            uk: {
              title: "Бейдж claim для уникнення дублювання",
              userStory: "Як SD, я хочу бейдж «🎯 [name]» на рядках, уже заклеймлених іншим SD, щоб не марнувати час на кандидата, якого вже не зможу прийняти.",
              criteria: [],
            },
          },
          {
            id: "US-S005",
            en: {
              title: "Review a candidate",
              userStory: "As an SD, I want a review form per candidate with dynamic scoring criteria grouped by video-type category (1–5 slider per skill with a tooltip rubric), an integral score (X.X / 5), a verdict badge (Strong Accept → Pending), per-category progress bars, a comments field, and a video preview (if a video URL exists), so that my decision is structured and defensible.",
              criteria: [],
            },
            uk: {
              title: "Розгляд кандидата",
              userStory: "Як SD, я хочу форму розгляду на кандидата з динамічними критеріями оцінки, згрупованими за категорією типу відео (слайдер 1–5 на навичку з tooltip-рубрикою), інтегральним score (X.X / 5), бейджем вердикту (Strong Accept → Pending), прогрес-барами по категоріях, полем коментарів та відео-прев’ю (якщо є URL), щоб рішення було структурованим і захищеним.",
              criteria: [],
            },
          },
          {
            id: "US-S006",
            en: {
              title: "Accept a candidate",
              userStory: "As an SD, I want an Accept button that links the artist to a chosen studio when one is picked, or sends them to the distribution pool when left blank, so that I retain optionality without forcing a studio assignment.",
              criteria: [
                "Button enabled when ≥1 skill is scored AND the comments field is filled.",
                "Button text changes by studio choice.",
                "Success screen shows checkmark + score + distribution-pool message.",
              ],
            },
            uk: {
              title: "Прийняття кандидата",
              userStory: "Як SD, я хочу кнопку Accept, яка привʼязує артиста до обраної студії, а коли вибір порожній — відправляє в distribution pool, щоб зберегти опціональність без примусового призначення студії.",
              criteria: [
                "Кнопка активна, коли оцінено ≥1 навичку І заповнено поле коментарів.",
                "Текст кнопки змінюється залежно від вибору студії.",
                "Екран успіху показує галку + score + повідомлення про distribution pool.",
              ],
            },
          },
          {
            id: "US-S007",
            en: {
              title: "Withdraw my own accept",
              userStory: "As an SD who previously accepted, I want a Withdraw button on my own accept rows that preserves the user / preferences / skills / profile but removes the studio link, so that I can reverse a placement without nuking the artist.",
              criteria: [],
            },
            uk: {
              title: "Відкликання власного прийняття",
              userStory: "Як SD, що раніше прийняв кандидата, я хочу кнопку Withdraw на власних accept-рядках, що зберігає user / preferences / skills / profile, але прибирає привʼязку до студії, щоб скасувати призначення без знищення артиста.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "3.3",
        en: { title: "Studio work hub" },
        uk: { title: "Робочий хаб студії" },
        stories: [
          {
            id: "US-S008",
            en: {
              title: "See an aggregate Studios view",
              userStory: "As an SD, I want an “All Studios” view with stat cards (studio / project / artist / task counts) and a list/kanban/workload/manage-team toggle, so that I get a single command surface across my studios.",
              criteria: [],
            },
            uk: {
              title: "Агрегований вигляд Studios",
              userStory: "Як SD, я хочу вигляд «All Studios» зі стат-картками (студії / проєкти / артисти / задачі) і перемикачем list/kanban/workload/manage-team, щоб мати єдину панель керування по моїх студіях.",
              criteria: [],
            },
          },
          {
            id: "US-S009",
            en: {
              title: "Create a new studio",
              userStory: "As an SD, I want a “+ New Studio” button on the aggregate Studios view, so that I can spin up additional studios under my direction.",
              criteria: [],
            },
            uk: {
              title: "Створення нової студії",
              userStory: "Як SD, я хочу кнопку «+ New Studio» на агрегованому вигляді Studios, щоб запускати додаткові студії під своїм керуванням.",
              criteria: [],
            },
          },
          {
            id: "US-S010",
            en: {
              title: "Drill into a single studio",
              userStory: "As an SD on a per-studio tab, I want stats (counts + manager + my name as director), an Edit button, a Delete button (with confirmation), and the List / Kanban / Workload / Manage Team toggle, so that I can run that studio.",
              criteria: [],
            },
            uk: {
              title: "Деталізація конкретної студії",
              userStory: "Як SD на вкладці конкретної студії, я хочу стати (лічильники + manager + моє імʼя як director), кнопку Edit, кнопку Delete (з підтвердженням) та перемикач List / Kanban / Workload / Manage Team, щоб керувати цією студією.",
              criteria: [],
            },
          },
          {
            id: "US-S011",
            en: {
              title: "See a kanban across my studio's projects",
              userStory: "As an SD, I want a 5-stage kanban with red-flagged tasks floating to the top, a project filter dropdown, an archived-task toggle, and a collapsible “💰 Artist payouts” section, so that I steer work without missing risk.",
              criteria: [],
            },
            uk: {
              title: "Канбан по проєктах студії",
              userStory: "Як SD, я хочу 5-стадійний канбан, де червонопрапорцеві задачі піднімаються догори, dropdown-фільтр проєктів, перемикач архівних задач і згортувану секцію «💰 Artist payouts», щоб скеровувати роботу, не пропускаючи ризики.",
              criteria: [],
            },
          },
          {
            id: "US-S012",
            en: {
              title: "See a workload heatmap",
              userStory: "As an SD, I want a Workload view showing artist availability per period, so that I distribute new projects without overloading anyone.",
              criteria: [],
            },
            uk: {
              title: "Heatmap навантаження",
              userStory: "Як SD, я хочу вигляд Workload з доступністю артистів за період, щоб розподіляти нові проєкти без перевантаження.",
              criteria: [],
            },
          },
          {
            id: "US-S013",
            en: {
              title: "Manage the team in a studio",
              userStory: "As an SD, I want a Manage Team view that lists artists in that studio with add/remove affordances, an Add Team Member button (if `canCreateUsers`), and the Evaluator toggle on artist rows, so that I curate the roster.",
              criteria: [],
            },
            uk: {
              title: "Керування командою студії",
              userStory: "Як SD, я хочу вигляд Manage Team зі списком артистів студії, афордансами додавання/видалення, кнопкою Add Team Member (якщо є `canCreateUsers`) і перемикачем Evaluator у рядках артистів, щоб курувати склад.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "3.4",
        en: { title: "Project & task management" },
        uk: { title: "Керування проєктами і задачами" },
        stories: [
          {
            id: "US-S014",
            en: {
              title: "Create / edit a project",
              userStory: "As an SD, I want a project form modal with Name (required), Description, Client name, G-Drive URL, Status (active / paused / completed / archived), Artists multi-select, and Clients multi-select (accepts new emails — auto-invite), so that one form covers full project lifecycle.",
              criteria: [
                "Studio picker is auto-set when I have one studio.",
                "Required-field validation; POST creates, PATCH edits.",
              ],
            },
            uk: {
              title: "Створення / редагування проєкту",
              userStory: "Як SD, я хочу модалку форми проєкту з Name (обовʼязково), Description, Client name, G-Drive URL, Status (active / paused / completed / archived), мультивибором Artists та Clients (приймає нові email — auto-invite), щоб одна форма покривала повний життєвий цикл.",
              criteria: [
                "Studio picker автоматично задається, якщо в мене одна студія.",
                "Валідація обовʼязкових полів; POST створює, PATCH редагує.",
              ],
            },
          },
          {
            id: "US-S015",
            en: {
              title: "Manage tasks on a board",
              userStory: "As an SD on a project page, I want drag-and-drop between stages, an “+ Add Task” button, a per-task type selector (short / long / editing × easy / medium / hard), an artist assignment dropdown, a deadline picker (Toronto TZ), and danger / blocked / archived indicators, so that I run delivery on rhythm.",
              criteria: ["Archive toggles; delete with confirm."],
            },
            uk: {
              title: "Керування задачами на дошці",
              userStory: "Як SD на сторінці проєкту, я хочу drag-and-drop між стадіями, кнопку «+ Add Task», селектор типу задачі (short / long / editing × easy / medium / hard), dropdown призначення артиста, пікер дедлайну (Toronto TZ) і індикатори danger / blocked / archived, щоб тримати delivery в ритмі.",
              criteria: ["Archive — toggle; delete — з підтвердженням."],
            },
          },
          {
            id: "US-S016",
            en: {
              title: "Use the in-project chat sidebar",
              userStory: "As an SD on a project page, I want a slide-in chat sidebar with unread counter, scrollable history, message composer, and per-user last-read tracking, so that I have a project-scoped channel without switching tabs.",
              criteria: [],
            },
            uk: {
              title: "In-project чат у сайдбарі",
              userStory: "Як SD на сторінці проєкту, я хочу slide-in сайдбар чату з лічильником непрочитаного, скрольованою історією, композером повідомлень і per-user last-read tracking, щоб мати канал у межах проєкту без зміни вкладки.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "3.5",
        en: { title: "Chats (channels + DMs)" },
        uk: { title: "Чати (канали + DM)" },
        stories: [
          {
            id: "US-S017",
            en: {
              title: "Use a full chat hub",
              userStory: "As an SD, I want a ChatHub with a channel rail (mute-aware), channel view with messages, thread panel, search overlay, “+ create channel”, and Start DM modal, so that all conversation happens in one surface.",
              criteria: [],
            },
            uk: {
              title: "Повноцінний chat hub",
              userStory: "Як SD, я хочу ChatHub з рейкою каналів (з урахуванням mute), вкладкою каналу з повідомленнями, thread-панеллю, search overlay, «+ create channel» та модалкою Start DM, щоб уся комунікація відбувалась в одному місці.",
              criteria: [],
            },
          },
          {
            id: "US-S018",
            en: {
              title: "React to realtime chat",
              userStory: "As an SD, I want realtime updates via a broadcast channel with a 10s polling fallback if realtime drops, so that I never miss a message because of a transient outage.",
              criteria: [],
            },
            uk: {
              title: "Realtime у чаті",
              userStory: "Як SD, я хочу realtime-оновлення через broadcast-канал з fallback на polling 10 с, якщо realtime падає, щоб не пропускати повідомлення через тимчасові збої.",
              criteria: [],
            },
          },
          {
            id: "US-S019",
            en: {
              title: "Curate my own messages",
              userStory: "As an SD, I want to edit (within 10 minutes) or delete (soft-delete) my own messages with `@-mention` autocomplete, so that I can correct mistakes without admin help.",
              criteria: [],
            },
            uk: {
              title: "Редагування власних повідомлень",
              userStory: "Як SD, я хочу редагувати (10-хвилинне вікно) або видаляти (soft-delete) власні повідомлення з автокомплітом `@-mention`, щоб виправляти помилки без втручання адміна.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "3.6",
        en: { title: "Customer health" },
        uk: { title: "Здоровʼя клієнтів" },
        stories: [
          {
            id: "US-S020",
            en: {
              title: "See the health of my clients",
              userStory: "As an SD, I want a Customer Health tab scoped to my own studios' clients with a status filter (All / Red / Yellow / Green / Not started), per-client row showing project count + last-contact + studio chips + Log button, so that I can flag at-risk relationships early.",
              criteria: [],
            },
            uk: {
              title: "Здоровʼя моїх клієнтів",
              userStory: "Як SD, я хочу вкладку Customer Health, обмежену клієнтами моїх студій, з фільтром статусу (All / Red / Yellow / Green / Not started), рядком на клієнта з кількістю проєктів + last-contact + чипами студій + кнопкою Log, щоб рано позначати ризикові відносини.",
              criteria: [],
            },
          },
          {
            id: "US-S021",
            en: {
              title: "Log a client check-in",
              userStory: "As an SD on a client row, I want a Log Check-in modal with a 1–5 emoji scale and 3 textareas (e.g., what's working / what's not / next step), so that I capture qualitative state for future reference.",
              criteria: [],
            },
            uk: {
              title: "Лог check-in з клієнтом",
              userStory: "Як SD у рядку клієнта, я хочу модалку Log Check-in зі шкалою 1–5 емодзі і 3 текстовими полями (напр. what's working / what's not / next step), щоб фіксувати якісний стан для подальшого довідника.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "3.7",
        en: { title: "Orders inbox (SD)" },
        uk: { title: "Інбокс замовлень (SD)" },
        stories: [
          {
            id: "US-S022",
            en: {
              title: "Triage incoming orders",
              userStory: "As an SD, I want an Orders tab with Pending / Accepted / Rejected / All filters, an order-card grid (company + urgency + brief snippet), and a detail modal exposing the full structured brief, so that I never lose a new deal.",
              criteria: [],
            },
            uk: {
              title: "Тріаж вхідних замовлень",
              userStory: "Як SD, я хочу вкладку Orders з фільтрами Pending / Accepted / Rejected / All, сіткою order-карток (company + urgency + brief snippet) та модалкою з повним структурованим брифом, щоб не втрачати жоден новий deal.",
              criteria: [],
            },
          },
          {
            id: "US-S023",
            en: {
              title: "Accept an order into a studio",
              userStory: "As an SD, I want an Accept flow that picks a studio I direct and converts the order into a project + initial task + client link, so that an accepted deal lands in delivery immediately.",
              criteria: [],
            },
            uk: {
              title: "Прийняття замовлення в студію",
              userStory: "Як SD, я хочу Accept-флоу, який обирає одну з моїх студій і конвертує замовлення в project + первинну task + лінк клієнта, щоб прийнятий deal одразу опинявся в delivery.",
              criteria: [],
            },
          },
          {
            id: "US-S024",
            en: {
              title: "Reject an order with a reason",
              userStory: "As an SD, I want to Reject orders with a rejection-reason modal that emails the client, so that the client gets clarity even when the answer is no.",
              criteria: [],
            },
            uk: {
              title: "Відхилення замовлення з причиною",
              userStory: "Як SD, я хочу відхиляти замовлення модалкою з причиною, що надсилає email клієнту, щоб клієнт мав ясність навіть при відмові.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "3.8",
        en: { title: "Slack URL" },
        uk: { title: "Slack URL" },
        stories: [
          {
            id: "US-S025",
            en: {
              title: "See my Slack invite URL (read-only)",
              userStory: "As an SD, I want a Slack-invite URL display in my profile marked “Managed by PO” with the freshness state, so that I know what to share with newly accepted artists without needing edit rights.",
              criteria: [],
            },
            uk: {
              title: "Перегляд Slack invite URL (read-only)",
              userStory: "Як SD, я хочу бачити в профілі Slack-invite URL з міткою «Managed by PO» і станом свіжості, щоб знати, що шерити новим прийнятим артистам без потреби прав редагування.",
              criteria: [],
            },
          },
        ],
      },
    ],
  },
  {
    number: "4",
    en: { title: "Studio Manager (SM)" },
    uk: { title: "Менеджер студії (SM)" },
    epics: [
      {
        number: "4.1",
        en: { title: "Scoped operations" },
        uk: { title: "Скоуповані операції" },
        stories: [
          {
            id: "US-M001",
            en: {
              title: "Land on Studios",
              userStory: "As an SM, I want the senior home to default to the Studios tab and to hide the Pipeline + Orders tabs entirely, so that I focus on project/task management.",
              criteria: [],
            },
            uk: {
              title: "Потрапляння на Studios",
              userStory: "Як SM, я хочу, щоб senior home відкривався на вкладці Studios, а вкладки Pipeline + Orders були повністю приховані, щоб я фокусувався на керуванні проєктами/задачами.",
              criteria: [],
            },
          },
          {
            id: "US-M002",
            en: {
              title: "See my studio chip",
              userStory: "As an SM with one studio, I want a studio-name pill in the header, so that the context is unambiguous.",
              criteria: [],
            },
            uk: {
              title: "Чип своєї студії",
              userStory: "Як SM з однією студією, я хочу пілюлю з назвою студії в хедері, щоб контекст був однозначним.",
              criteria: [],
            },
          },
          {
            id: "US-M003",
            en: {
              title: "Read-only on artist data",
              userStory: "As an SM, I want the Manage Team view to display artists in my studio without add / remove / edit affordances, so that I never accidentally mutate roster data — that's the SD's job.",
              criteria: [],
            },
            uk: {
              title: "Read-only по даних артистів",
              userStory: "Як SM, я хочу, щоб вигляд Manage Team показував артистів моєї студії без афордансів add / remove / edit, щоб я випадково не змінив дані складу — це робота SD.",
              criteria: [],
            },
          },
          {
            id: "US-M004",
            en: {
              title: "Same project/task management as SD",
              userStory: "As an SM, I want the same project board, task CRUD, chat, and customer-health surfaces as the SD, scoped to my studio, so that I can run delivery autonomously.",
              criteria: [],
            },
            uk: {
              title: "Те саме керування проєктами/задачами, що й у SD",
              userStory: "Як SM, я хочу ті ж поверхні project board, task CRUD, chat і customer-health, що й у SD, обмежені моєю студією, щоб вести delivery самостійно.",
              criteria: [],
            },
          },
          {
            id: "US-M005",
            en: {
              title: "No pipeline access",
              userStory: "As an SM, I want the Pipeline tab to be missing from my nav and the URL to redirect away if I try to deep-link, so that the role boundary is enforced.",
              criteria: [],
            },
            uk: {
              title: "Немає доступу до пайплайну",
              userStory: "Як SM, я хочу, щоб вкладка Pipeline була відсутня в моїй навігації, а URL перенаправляв при спробі deep-link, щоб межа ролі була примусовою.",
              criteria: [],
            },
          },
        ],
      },
    ],
  },
  {
    number: "5",
    en: { title: "Artist Evaluator (sub-role)" },
    uk: { title: "Артист-оцінювач (під-роль)" },
    epics: [
      {
        number: "5.1",
        en: { title: "Evaluator capabilities" },
        uk: { title: "Можливості оцінювача" },
        stories: [
          {
            id: "US-E001",
            en: {
              title: "Get a Pipeline tab",
              userStory: "As an Artist Evaluator (`isEvaluator=true`), I want a Pipeline tab appearing in my projects area containing the full PipelinePanel, so that I can review and accept candidates with the same surface SDs use.",
              criteria: [],
            },
            uk: {
              title: "Доступ до вкладки Pipeline",
              userStory: "Як Artist Evaluator (`isEvaluator=true`), я хочу вкладку Pipeline у своїй зоні проєктів з повним PipelinePanel, щоб переглядати й приймати кандидатів тим самим інтерфейсом, що й SD.",
              criteria: [],
            },
          },
          {
            id: "US-E002",
            en: {
              title: "See an “Evaluator” badge on my header",
              userStory: "As an Artist Evaluator, I want a blue “Evaluator” badge on my header, so that staff recognise my elevated permissions at a glance.",
              criteria: [],
            },
            uk: {
              title: "Бейдж «Evaluator» у хедері",
              userStory: "Як Artist Evaluator, я хочу синій бейдж «Evaluator» у хедері, щоб команда розпізнавала підвищені права з одного погляду.",
              criteria: [],
            },
          },
          {
            id: "US-E003",
            en: {
              title: "Be turned on/off by an admin",
              userStory: "As a PO or SD, I want to toggle an artist's Evaluator status via a single button on the team row, so that elevation is a deliberate, reversible action.",
              criteria: [],
            },
            uk: {
              title: "Адмін умикає/вимикає evaluator",
              userStory: "Як PO або SD, я хочу перемикати статус Evaluator артиста однією кнопкою в рядку команди, щоб підвищення прав було усвідомленою і зворотною дією.",
              criteria: [],
            },
          },
        ],
      },
    ],
  },
  {
    number: "6",
    en: { title: "Platform Owner (PO)" },
    uk: { title: "Власник платформи (PO)" },
    epics: [
      {
        number: "6.1",
        en: { title: "Pipeline oversight" },
        uk: { title: "Нагляд за пайплайном" },
        stories: [
          {
            id: "US-P001",
            en: {
              title: "See the full pipeline",
              userStory: "As a PO, I want a Pipeline tab showing all candidates (no studio scope), stat cards (Total / Pending Review / Decided), and the full list with claim/test/status/score/actions, so that I have unfiltered visibility.",
              criteria: [],
            },
            uk: {
              title: "Перегляд повного пайплайну",
              userStory: "Як PO, я хочу вкладку Pipeline з усіма кандидатами (без обмеження по студії), стат-картками (Total / Pending Review / Decided) і повним списком з claim/test/status/score/actions, щоб мати нефільтровану видимість.",
              criteria: [],
            },
          },
          {
            id: "US-P002",
            en: {
              title: "Accept any candidate into any studio (or none)",
              userStory: "As a PO, I want an Accept-Into-Studio modal with multi-studio select and the option to leave it blank (distribution pool), so that I override any SD constraint when needed.",
              criteria: [],
            },
            uk: {
              title: "Прийняття будь-якого кандидата в будь-яку студію (або в pool)",
              userStory: "Як PO, я хочу модалку Accept-Into-Studio з мультивибором студій і опцією залишити порожнім (distribution pool), щоб обходити будь-яке обмеження SD при потребі.",
              criteria: [],
            },
          },
          {
            id: "US-P003",
            en: {
              title: "Reject any candidate cleanly",
              userStory: "As a PO, I want a Reject button that confirms via modal, emails the candidate the reason, and performs full cleanup (deletes user, artist_skills, artist_studios), so that I close the loop irreversibly.",
              criteria: [],
            },
            uk: {
              title: "Чисте відхилення кандидата",
              userStory: "Як PO, я хочу кнопку Reject, що підтверджує модалкою, надсилає причину email-ом кандидату і виконує повну очистку (видаляє user, artist_skills, artist_studios), щоб незворотно закрити цикл.",
              criteria: [],
            },
          },
          {
            id: "US-P004",
            en: {
              title: "Revoke an acceptance",
              userStory: "As a PO, I want a Revoke Acceptance button on accepted candidates with an optional reason that returns them to `status=reviewed`, so that I can undo a placement without nuking history.",
              criteria: [],
            },
            uk: {
              title: "Відкликання прийняття",
              userStory: "Як PO, я хочу кнопку Revoke Acceptance на прийнятих кандидатах з опційною причиною, що повертає їх у `status=reviewed`, щоб скасувати призначення без знищення історії.",
              criteria: [],
            },
          },
          {
            id: "US-P005",
            en: {
              title: "Bulk-process candidates",
              userStory: "As a PO, I want row checkboxes + select-all in the pipeline plus a floating action bar with Bulk Accept / Bulk Reject / Bulk Delete + Cancel buttons and a “no-undo” confirm modal, so that I can clear a backlog quickly.",
              criteria: [],
            },
            uk: {
              title: "Bulk-обробка кандидатів",
              userStory: "Як PO, я хочу чекбокси в рядках + select-all у пайплайні плюс плаваючу action bar з кнопками Bulk Accept / Bulk Reject / Bulk Delete + Cancel і модалкою-підтвердженням «no-undo», щоб швидко розгрібати беклог.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.2",
        en: { title: "Team management" },
        uk: { title: "Керування командою" },
        stories: [
          {
            id: "US-P006",
            en: {
              title: "See and filter the team",
              userStory: "As a PO, I want a Team tab with an Add Team Member button, role-filter pills (Owners / Directors / Managers / Artists / Clients), Status (Active / Inactive / All), Studio dropdown, and search by name+email, so that I find anyone instantly.",
              criteria: [],
            },
            uk: {
              title: "Перегляд і фільтр команди",
              userStory: "Як PO, я хочу вкладку Team з кнопкою Add Team Member, пілюлями фільтрів ролей (Owners / Directors / Managers / Artists / Clients), Status (Active / Inactive / All), dropdown студії та пошуком по name+email, щоб миттєво знаходити будь-кого.",
              criteria: [],
            },
          },
          {
            id: "US-P007",
            en: {
              title: "See user state at a glance",
              userStory: "As a PO, I want each user row to show role badge, inactive badge (gray + reduced opacity), Evaluator badge (with tooltip), and studio chips, so that posture is visible without opening a modal.",
              criteria: [],
            },
            uk: {
              title: "Стан користувача з одного погляду",
              userStory: "Як PO, я хочу, щоб кожен рядок користувача показував бейдж ролі, inactive badge (сірий + знижена непрозорість), Evaluator badge (з tooltip) і чипи студій, щоб бачити стан без відкриття модалки.",
              criteria: [],
            },
          },
          {
            id: "US-P008",
            en: {
              title: "Edit a user",
              userStory: "As a PO, I want an Edit User modal exposing multi-role pills (SD / SM / Artist) with an at-least-one constraint, a yellow warning explaining what adds/removes will do, and removal-blocking constraints (SD with no studios; SM with no studios; Artist with no links), so that role changes never break referential state.",
              criteria: [],
            },
            uk: {
              title: "Редагування користувача",
              userStory: "Як PO, я хочу модалку Edit User з мульти-роль-пілюлями (SD / SM / Artist) з обмеженням «хоча б одна», жовтим попередженням про наслідки add/remove та блокувальними обмеженнями видалення (SD без студій; SM без студій; Artist без лінків), щоб зміна ролей не ламала референційний стан.",
              criteria: [],
            },
          },
          {
            id: "US-P009",
            en: {
              title: "Reset a user's password",
              userStory: "As a PO, I want a 🔑 Reset button per row that confirms, generates a new password, sends `emailPasswordReset`, and shows me a copy-to-clipboard modal, so that I can recover a user without leaking their old password.",
              criteria: [],
            },
            uk: {
              title: "Скидання пароля користувача",
              userStory: "Як PO, я хочу кнопку 🔑 Reset у кожному рядку, що підтверджує, генерує новий пароль, надсилає `emailPasswordReset` і показує мені модалку copy-to-clipboard, щоб відновити користувача без витоку старого паролю.",
              criteria: [],
            },
          },
          {
            id: "US-P010",
            en: {
              title: "Activate / deactivate users",
              userStory: "As a PO, I want a single-click activate / deactivate toggle on user rows, so that I can hide departing users without deleting their history.",
              criteria: [],
            },
            uk: {
              title: "Активація / деактивація користувачів",
              userStory: "Як PO, я хочу single-click перемикач activate / deactivate у рядках користувачів, щоб ховати тих, що йдуть, без видалення історії.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.3",
        en: { title: "Studios" },
        uk: { title: "Студії" },
        stories: [
          {
            id: "US-P011",
            en: {
              title: "See every studio",
              userStory: "As a PO, I want the Studios tab to show every studio in an aggregate view with the same List / Kanban / Workload / Manage Team toggle SDs see, so that I get a god-view.",
              criteria: [],
            },
            uk: {
              title: "Перегляд усіх студій",
              userStory: "Як PO, я хочу, щоб вкладка Studios показувала всі студії в агрегованому вигляді з тим самим перемикачем List / Kanban / Workload / Manage Team, що й у SD, щоб мати god-view.",
              criteria: [],
            },
          },
          {
            id: "US-P012",
            en: {
              title: "Create studios",
              userStory: "As a PO, I want a + New Studio button opening a modal with name, colour, director picker (all active SDs + me), and manager picker (available SMs), so that I can spin up studios independent of any one SD.",
              criteria: [],
            },
            uk: {
              title: "Створення студій",
              userStory: "Як PO, я хочу кнопку + New Studio, що відкриває модалку з name, color, director picker (усі активні SD + я) і manager picker (доступні SM), щоб створювати студії незалежно від конкретного SD.",
              criteria: [],
            },
          },
          {
            id: "US-P013",
            en: {
              title: "Move artists between studios",
              userStory: "As a PO on a single studio's Manage Team view, I want an artist picker that adds + a per-row unlink button that removes, so that I can rebalance rosters.",
              criteria: [],
            },
            uk: {
              title: "Переміщення артистів між студіями",
              userStory: "Як PO у вигляді Manage Team конкретної студії, я хочу artist picker, що додає, і per-row unlink, що прибирає, щоб ребалансувати склади.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.4",
        en: { title: "Orders" },
        uk: { title: "Замовлення" },
        stories: [
          {
            id: "US-P014",
            en: {
              title: "See every order",
              userStory: "As a PO, I want an Orders tab with the same filters and order-detail modal as the SD view, scoped platform-wide, so that I can intercept any deal.",
              criteria: [],
            },
            uk: {
              title: "Перегляд усіх замовлень",
              userStory: "Як PO, я хочу вкладку Orders з тими самими фільтрами і order-detail-модалкою, що й у SD, але в межах усієї платформи, щоб перехоплювати будь-який deal.",
              criteria: [],
            },
          },
          {
            id: "US-P015",
            en: {
              title: "Accept or reject any order",
              userStory: "As a PO, I want Accept (with studio picker → project creation) and Reject (with reason → client email) on any order, so that I'm never blocked by an absent SD.",
              criteria: [],
            },
            uk: {
              title: "Прийняття або відхилення будь-якого замовлення",
              userStory: "Як PO, я хочу Accept (з studio picker → створення project) і Reject (з reason → email клієнту) на будь-якому замовленні, щоб мене не блокувала відсутність SD.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.5",
        en: { title: "Customer health" },
        uk: { title: "Здоровʼя клієнтів" },
        stories: [
          {
            id: "US-P016",
            en: {
              title: "See every client's health",
              userStory: "As a PO, I want the Customer Health tab showing every client across studios with the same filters and Log Check-in flow SDs use, so that I monitor account health platform-wide.",
              criteria: [],
            },
            uk: {
              title: "Здоровʼя кожного клієнта",
              userStory: "Як PO, я хочу вкладку Customer Health з усіма клієнтами по студіях, тими самими фільтрами і Log Check-in флоу, що й у SD, щоб моніторити account health у межах усієї платформи.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.6",
        en: { title: "Settings & test assignments" },
        uk: { title: "Налаштування і test assignments" },
        stories: [
          {
            id: "US-P017",
            en: {
              title: "Manage test assignments",
              userStory: "As a PO, I want a Settings tab listing test assignments with + New, Edit, Delete, Activate/Deactivate, plus a brief URL and skill-weight editor, so that I can update test templates without a deploy.",
              criteria: ["Inactive tests still show in the list with a pill but reduced opacity."],
            },
            uk: {
              title: "Керування test assignments",
              userStory: "Як PO, я хочу вкладку Settings зі списком test assignments з + New, Edit, Delete, Activate/Deactivate, плюс редактором brief URL і skill-ваг, щоб оновлювати шаблони тестів без деплоя.",
              criteria: ["Неактивні тести все одно у списку з пілюлею, але зі зниженою непрозорістю."],
            },
          },
        ],
      },
      {
        number: "6.7",
        en: { title: "Activity log (audit)" },
        uk: { title: "Activity log (аудит)" },
        stories: [
          {
            id: "US-P018",
            en: {
              title: "See every audit event",
              userStory: "As a PO, I want an Activity tab with category, actor, and date-range (24h / 7d / 30d / All) filters plus a clear-filters action, so that I can investigate any incident.",
              criteria: [],
            },
            uk: {
              title: "Перегляд усіх аудит-подій",
              userStory: "Як PO, я хочу вкладку Activity з фільтрами category, actor і date-range (24h / 7d / 30d / All) плюс дією clear-filters, щоб розслідувати будь-який інцидент.",
              criteria: [],
            },
          },
          {
            id: "US-P019",
            en: {
              title: "See each event with context",
              userStory: "As a PO on an Activity row, I want actor name + role + category icon + label + target + relative timestamp (“Xm ago”) + details, so that each event reads like a sentence.",
              criteria: [],
            },
            uk: {
              title: "Подія з контекстом",
              userStory: "Як PO у рядку Activity, я хочу actor name + role + іконку категорії + label + target + відносний timestamp («Xm ago») + details, щоб подія читалась як речення.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.8",
        en: { title: "Feedback inbox" },
        uk: { title: "Інбокс фідбеку" },
        stories: [
          {
            id: "US-P020",
            en: {
              title: "Triage feedback",
              userStory: "As a PO, I want a Feedback tab with category filter (All / Bug / Feature / Other), a 3-column kanban (New / In Progress / Done), per-card move and delete, and bulk operations via checkboxes, so that I never lose user feedback.",
              criteria: [],
            },
            uk: {
              title: "Тріаж фідбеку",
              userStory: "Як PO, я хочу вкладку Feedback з фільтром категорії (All / Bug / Feature / Other), 3-стадійним канбаном (New / In Progress / Done), per-card move/delete та bulk-операціями через чекбокси, щоб не втрачати фідбек.",
              criteria: [],
            },
          },
          {
            id: "US-P021",
            en: {
              title: "See unread feedback count",
              userStory: "As a PO, I want a red badge on the Admin pill in AppNav reflecting unread feedback, so that I check the inbox proactively.",
              criteria: [],
            },
            uk: {
              title: "Лічильник непрочитаного фідбеку",
              userStory: "Як PO, я хочу червоний бейдж на пілюлі Admin у AppNav, що показує непрочитаний фідбек, щоб перевіряти інбокс проактивно.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.9",
        en: { title: "Public profile share" },
        uk: { title: "Шер публічного профілю" },
        stories: [
          {
            id: "US-P022",
            en: {
              title: "Distribute a newly accepted artist",
              userStory: "As a PO on a candidate detail post-accept, I want a Public Profile share block with Copy URL, Copy Slack Message (formatted with name + top 3 skills + URL), and Open buttons, so that distribution to SDs is a one-click action.",
              criteria: [],
            },
            uk: {
              title: "Дистрибуція щойно прийнятого артиста",
              userStory: "Як PO на деталях кандидата після accept, я хочу блок шерингу Public Profile з кнопками Copy URL, Copy Slack Message (з name + топ 3 скілами + URL) і Open, щоб дистрибуція по SD була в один клік.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.10",
        en: { title: "Slack URL cascade" },
        uk: { title: "Каскад Slack URL" },
        stories: [
          {
            id: "US-P023",
            en: {
              title: "Set the platform-wide Slack URL",
              userStory: "As a PO, I want my profile to expose a Slack-invite URL field + expiry field + freshness badge (✓ Fresh / ⏳ Soon / ⚠ Expired) that cascades to all SDs as a read-only display, so that artists always get a working invite link in their welcome email.",
              criteria: [],
            },
            uk: {
              title: "Слак URL на рівні платформи",
              userStory: "Як PO, я хочу, щоб у моєму профілі було поле Slack-invite URL + expiry + бейдж свіжості (✓ Fresh / ⏳ Soon / ⚠ Expired), що каскадно показується всім SD у read-only, щоб артисти завжди отримували робочий invite в welcome-email.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "6.11",
        en: { title: "Chats (PO sees all)" },
        uk: { title: "Чати (PO бачить усе)" },
        stories: [
          {
            id: "US-P024",
            en: {
              title: "Read every channel",
              userStory: "As a PO, I want the Chats tab to expose every channel and DM with full create / edit / delete / mention / mute affordances, so that I can audit comms when investigating an issue.",
              criteria: [],
            },
            uk: {
              title: "Перегляд усіх каналів",
              userStory: "Як PO, я хочу, щоб вкладка Chats показувала кожен канал і DM з повним набором create / edit / delete / mention / mute, щоб я міг аудитувати комунікації при розслідуванні.",
              criteria: [],
            },
          },
        ],
      },
    ],
  },
  {
    number: "7",
    en: { title: "Client" },
    uk: { title: "Клієнт" },
    epics: [
      {
        number: "7.1",
        en: { title: "Authentication" },
        uk: { title: "Автентифікація" },
        stories: [
          {
            id: "US-C001",
            en: {
              title: "Sign in",
              userStory: "As a client, I want to sign in and be redirected to the client area, so that my entry point is unambiguous.",
              criteria: [],
            },
            uk: {
              title: "Вхід",
              userStory: "Як клієнт, я хочу увійти й бути перенаправленим у client-зону, щоб точка входу була однозначною.",
              criteria: [],
            },
          },
          {
            id: "US-C002",
            en: {
              title: "Be blocked when deactivated",
              userStory: "As a deactivated client account, I want every protected route to reject me, so that revoked access works the moment the toggle flips.",
              criteria: [],
            },
            uk: {
              title: "Блок при деактивації",
              userStory: "Як деактивований клієнтський акаунт, я хочу, щоб кожен protected-маршрут відмовляв, щоб скасоване право діяло одразу.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "7.2",
        en: { title: "Dashboard" },
        uk: { title: "Дашборд" },
        stories: [
          {
            id: "US-C003",
            en: {
              title: "See my projects",
              userStory: "As a client, I want a card grid in the client area with each project's status chip, active-task count, studio-color left border, mention dot, activity dot, and empty state if I have none, so that I see every commission at a glance.",
              criteria: [],
            },
            uk: {
              title: "Перегляд моїх проєктів",
              userStory: "Як клієнт, я хочу сітку карток у client-зоні з чипом статусу кожного проєкту, кількістю активних задач, кольоровою лівою смугою студії, точкою згадки, точкою активності та empty state, якщо нічого нема, щоб бачити всі замовлення з одного погляду.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "7.3",
        en: { title: "Project view" },
        uk: { title: "Перегляд проєкту" },
        stories: [
          {
            id: "US-C004",
            en: {
              title: "Read the project board",
              userStory: "As a client on a project page, I want the 5-stage kanban as read-only (no drag), stage badges on cards, and link previews on task descriptions, so that I can follow delivery without touching it.",
              criteria: [],
            },
            uk: {
              title: "Перегляд дошки проєкту",
              userStory: "Як клієнт на сторінці проєкту, я хочу 5-стадійний канбан як read-only (без drag), бейджі стадій на картках і прев’ю лінків в описі задач, щоб слідкувати за delivery без втручання.",
              criteria: [],
            },
          },
          {
            id: "US-C005",
            en: {
              title: "See only the right financials",
              userStory: "As a client, I want `client_fee` shown as “Fee” and `artist_fee` hidden entirely, with artist info anonymised on cards, so that internal margins stay internal.",
              criteria: [],
            },
            uk: {
              title: "Тільки релевантні фінанси",
              userStory: "Як клієнт, я хочу, щоб `client_fee` показувався як «Fee», `artist_fee` був повністю прихований, а інформація про артиста на картках була анонімізована, щоб внутрішні маржі лишалися внутрішніми.",
              criteria: [],
            },
          },
          {
            id: "US-C006",
            en: {
              title: "Comment on my projects",
              userStory: "As a client, I want a comment composer on tasks I'm linked to with `@-mention` support, so that I provide feedback inside the platform rather than in email.",
              criteria: [],
            },
            uk: {
              title: "Коментування моїх проєктів",
              userStory: "Як клієнт, я хочу composer коментарів на повʼязаних зі мною задачах з підтримкою `@-mention`, щоб давати фідбек усередині платформи, а не в email.",
              criteria: [],
            },
          },
          {
            id: "US-C007",
            en: {
              title: "Use the project chat sidebar",
              userStory: "As a client, I want the same slide-in sidebar staff see, scoped to my project, with read/unread tracking, so that conversation has one home.",
              criteria: [],
            },
            uk: {
              title: "Чат проєкту в сайдбарі",
              userStory: "Як клієнт, я хочу той самий slide-in сайдбар, що й команда, обмежений моїм проєктом, з трекінгом read/unread, щоб уся комунікація мала один дім.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "7.4",
        en: { title: "Notifications" },
        uk: { title: "Сповіщення" },
        stories: [
          {
            id: "US-C008",
            en: {
              title: "Get an email when a task moves stage",
              userStory: "As a client linked to a project, I want an email when any task moves into `rough_cut / fine_cut / final_cut / approved`, so that I know when to log in for review.",
              criteria: [
                "An `audit_events` row `client.notified_stage_change` is written.",
                "A `user_notifications` in-app row is created for the same event.",
              ],
            },
            uk: {
              title: "Email при зміні стадії задачі",
              userStory: "Як клієнт, повʼязаний з проєктом, я хочу email при переході будь-якої задачі в `rough_cut / fine_cut / final_cut / approved`, щоб знати, коли заходити на review.",
              criteria: [
                "Створюється рядок `audit_events` `client.notified_stage_change`.",
                "Створюється in-app рядок `user_notifications` для тієї ж події.",
              ],
            },
          },
        ],
      },
      {
        number: "7.5",
        en: { title: "Auto-provisioning" },
        uk: { title: "Авто-провіжнинг" },
        stories: [
          {
            id: "US-C009",
            en: {
              title: "Get my account auto-created on order accept",
              userStory: "As a person who submitted an order brief, I want an account auto-created on order accept (12-char alphanumeric password, hashed) and a welcome email (`emailOrderAcceptedToClient` or `emailClientInvite`), so that I land in the client area without manual signup.",
              criteria: [
                "Email collisions with artists/staff are rejected.",
                "A `project_clients` link is auto-created.",
              ],
            },
            uk: {
              title: "Авто-створення акаунта при прийнятті замовлення",
              userStory: "Як людина, що подала order-бриф, я хочу, щоб акаунт автоматично створювався при accept замовлення (12-символьний alphanumeric пароль, хешований) і йшов welcome email (`emailOrderAcceptedToClient` або `emailClientInvite`), щоб потрапляти в client-зону без ручної реєстрації.",
              criteria: [
                "Колізії email з артистами/командою відхиляються.",
                "Лінк `project_clients` створюється автоматично.",
              ],
            },
          },
          {
            id: "US-C010",
            en: {
              title: "Be added to additional projects later",
              userStory: "As an existing client, I want to be invited to additional projects by email (multi-email batch on project edit), so that one account covers all my work.",
              criteria: [],
            },
            uk: {
              title: "Додавання до інших проєктів пізніше",
              userStory: "Як наявний клієнт, я хочу бути запрошеним до інших проєктів через email (multi-email batch при редагуванні проєкту), щоб один акаунт покривав усю мою роботу.",
              criteria: [],
            },
          },
        ],
      },
    ],
  },
  {
    number: "8",
    en: { title: "Cross-cutting platform" },
    uk: { title: "Платформенні наскрізні функції" },
    epics: [
      {
        number: "8.1",
        en: { title: "Authentication & session" },
        uk: { title: "Автентифікація і сесії" },
        stories: [
          {
            id: "US-X001",
            en: {
              title: "Cookie-based session",
              userStory: "As any user, I want my session held in an httpOnly cookie containing a signed JSON payload, so that no front-end JS can leak it.",
              criteria: [],
            },
            uk: {
              title: "Cookie-based сесія",
              userStory: "Як будь-який користувач, я хочу, щоб моя сесія зберігалась у httpOnly cookie з підписаним JSON, щоб ніякий front-end JS її не витяг.",
              criteria: [],
            },
          },
          {
            id: "US-X002",
            en: {
              title: "Password hashing",
              userStory: "As any user, I want passwords hashed via a Postgres RPC plus pgcrypto, so that no plaintext leaks if the database ever exfiltrates.",
              criteria: [],
            },
            uk: {
              title: "Хешування паролів",
              userStory: "Як будь-який користувач, я хочу, щоб паролі хешувалися через Postgres RPC + pgcrypto, щоб у випадку витоку БД жодного plaintext не виходило.",
              criteria: [],
            },
          },
          {
            id: "US-X003",
            en: {
              title: "Self-service password reset",
              userStory: "As any user, I want the password-reset endpoint to always return 200 (no enumeration) and to email a new password to the address if it exists, so that an attacker can't probe email validity.",
              criteria: [],
            },
            uk: {
              title: "Самостійний reset паролю",
              userStory: "Як будь-який користувач, я хочу, щоб endpoint скидання паролю завжди повертав 200 (no enumeration) і надсилав email з новим паролем, якщо адреса існує, щоб атакуючий не міг перевіряти валідність email.",
              criteria: [],
            },
          },
          {
            id: "US-X004",
            en: {
              title: "Scope built on every request",
              userStory: "As any user, I want my scope computed on each request as the union of capabilities from `director_id`, `studio_managers`, `artist_studios`, `project_artists`, `tasks.assigned_artist_id`, and `users.candidate_id`, so that permission checks are derived from data, not from a static role flag.",
              criteria: [],
            },
            uk: {
              title: "Scope, що будується щозапиту",
              userStory: "Як будь-який користувач, я хочу, щоб мій scope обчислювався на кожен запит як обʼєднання capabilities з `director_id`, `studio_managers`, `artist_studios`, `project_artists`, `tasks.assigned_artist_id` і `users.candidate_id`, щоб перевірки прав були похідними з даних, а не зі статичного флага ролі.",
              criteria: [],
            },
          },
          {
            id: "US-X005",
            en: {
              title: "Deactivation blocks scope",
              userStory: "As any deactivated user, I want my scope dropped to empty on every protected route, so that access revocation is instant.",
              criteria: [],
            },
            uk: {
              title: "Деактивація обнулює scope",
              userStory: "Як деактивований користувач, я хочу, щоб мій scope ставав порожнім на кожному protected-маршруті, щоб відкликання доступу було миттєвим.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.2",
        en: { title: "Audit logging" },
        uk: { title: "Аудит-логування" },
        stories: [
          {
            id: "US-X006",
            en: {
              title: "Every consequential action is audited",
              userStory: "As a PO, I want each of the 32+ event types (`candidate.*`, `artist.*`, `user.*`, `studio.*`, `project.*`, `client.*`, `task.*`, `customer.*`, `order.*`) logged with actor + target + details, so that the Activity feed is a complete forensic record.",
              criteria: [],
            },
            uk: {
              title: "Кожна важлива дія в аудиті",
              userStory: "Як PO, я хочу, щоб кожен з 32+ типів подій (`candidate.*`, `artist.*`, `user.*`, `studio.*`, `project.*`, `client.*`, `task.*`, `customer.*`, `order.*`) логувався з actor + target + details, щоб стрічка Activity була повним forensic-записом.",
              criteria: [],
            },
          },
          {
            id: "US-X007",
            en: {
              title: "Audit failures don't block the call",
              userStory: "As an API consumer, I want audit log failures to be silent (never blocking the primary action), so that observability has no impact on user-visible behaviour.",
              criteria: [],
            },
            uk: {
              title: "Збої аудиту не блокують виклик",
              userStory: "Як споживач API, я хочу, щоб збої audit log були тихими (ніколи не блокували основну дію), щоб observability не впливала на user-facing поведінку.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.3",
        en: { title: "Email & in-app notifications" },
        uk: { title: "Email і in-app сповіщення" },
        stories: [
          {
            id: "US-X008",
            en: {
              title: "Send the right email at the right moment",
              userStory: "As a notification consumer, I want each of the 25 templates fired only by its specific trigger, so that I never get spam.",
              criteria: [],
            },
            uk: {
              title: "Правильний email у правильний момент",
              userStory: "Як споживач сповіщень, я хочу, щоб кожен з 25 шаблонів запускався лише своїм специфічним тригером, щоб не отримувати спам.",
              criteria: [],
            },
          },
          {
            id: "US-X009",
            en: {
              title: "Use Brevo for outbound mail",
              userStory: "As an operator, I want all outbound mail dispatched via Brevo SMTP through a single `sendEmail()` adapter, so that retries / failures / logs are centralised.",
              criteria: [],
            },
            uk: {
              title: "Brevo для outbound mail",
              userStory: "Як оператор, я хочу, щоб усі outbound листи відправлялися через Brevo SMTP єдиним адаптером `sendEmail()`, щоб ретраї / помилки / логи були централізовані.",
              criteria: [],
            },
          },
          {
            id: "US-X010",
            en: {
              title: "Unsubscribe from any category",
              userStory: "As any user, I want a one-click unsubscribe link (signed token) in every transactional email and a per-category mute UI in my profile, so that I have granular control.",
              criteria: [],
            },
            uk: {
              title: "Unsubscribe з будь-якої категорії",
              userStory: "Як будь-який користувач, я хочу one-click unsubscribe (з підписаним токеном) у кожному transactional email і per-category mute UI у профілі, щоб мати гранулярний контроль.",
              criteria: [],
            },
          },
          {
            id: "US-X011",
            en: {
              title: "Persist in-app notifications",
              userStory: "As any user, I want every notifyEvent dispatch to both email and a `user_notifications` row, so that the Activity Center has parity with my inbox.",
              criteria: [],
            },
            uk: {
              title: "Збереження in-app сповіщень",
              userStory: "Як будь-який користувач, я хочу, щоб кожен notifyEvent йшов і в email, і в рядок `user_notifications`, щоб Activity Center був у паритеті з інбоксом.",
              criteria: [],
            },
          },
          {
            id: "US-X012",
            en: {
              title: "Schedule deadline reminders",
              userStory: "As an operator, I want a cron deadline-alerts job to fire scheduled reminder emails for upcoming task deadlines, so that artists don't miss them.",
              criteria: [],
            },
            uk: {
              title: "Cron нагадування про дедлайни",
              userStory: "Як оператор, я хочу cron-задачу deadline-alerts, що надсилає reminder-email-и про найближчі дедлайни задач, щоб артисти їх не пропускали.",
              criteria: [],
            },
          },
          {
            id: "US-X013",
            en: {
              title: "Route `@-mentions` to a notification",
              userStory: "As any user, I want a comment / chat mention of my user-id to enqueue a notification, so that I never miss being pinged.",
              criteria: [],
            },
            uk: {
              title: "`@-mentions` як сповіщення",
              userStory: "Як будь-який користувач, я хочу, щоб згадка мого user-id у коментарі / чаті ставила сповіщення в чергу, щоб я не пропускав пінг.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.4",
        en: { title: "Slack integration" },
        uk: { title: "Slack-інтеграція" },
        stories: [
          {
            id: "US-X014",
            en: {
              title: "Auto-post artist distribution on first submit",
              userStory: "As a PO, I want the artist-submit-for-distribution endpoint to fire a Slack message to the distribution webhook with `<!channel>` ping + artist name + top 3 skills + public profile URL, but only on the first submit, so that channel re-submits aren't spammy.",
              criteria: [
                "Dispatcher retries once on 5xx, times out at 5 seconds.",
                "Records `slackPosted` / `slackError` in audit details.",
              ],
            },
            uk: {
              title: "Авто-постинг дистрибуції артиста при першому submit",
              userStory: "Як PO, я хочу, щоб endpoint artist-submit-for-distribution надсилав Slack-повідомлення в distribution webhook з `<!channel>` ping + імʼя артиста + топ 3 скілами + public profile URL, але лише при першому submit, щоб канал не спамився повторними подачами.",
              criteria: [
                "Dispatcher повторює один раз на 5xx, таймаутиться на 5 секундах.",
                "Записує `slackPosted` / `slackError` у деталях аудиту.",
              ],
            },
          },
        ],
      },
      {
        number: "8.5",
        en: { title: "Anti-abuse & rate limiting" },
        uk: { title: "Anti-abuse і rate limiting" },
        stories: [
          {
            id: "US-X015",
            en: {
              title: "Block bots on public forms",
              userStory: "As an operator, I want reCAPTCHA v3 on the public application and order funnels with both client and server-side verification, so that the public funnels survive scraping.",
              criteria: [],
            },
            uk: {
              title: "Блок ботів на публічних формах",
              userStory: "Як оператор, я хочу reCAPTCHA v3 на публічних воронках application і order з клієнтською і серверною верифікацією, щоб публічні воронки витримували скрейпінг.",
              criteria: [],
            },
          },
          {
            id: "US-X016",
            en: {
              title: "Rate-limit the order chat",
              userStory: "As an operator, I want the order-chat endpoint capped at 30 turns per session and 60 messages per hour per IP with rolling-window buckets that survive warm instances, so that we don't pay for runaway Gemini usage.",
              criteria: [],
            },
            uk: {
              title: "Rate-limit для order chat",
              userStory: "Як оператор, я хочу обмеження endpoint order-chat у 30 turn на сесію і 60 повідомлень на годину на IP з rolling-window buckets, що переживають теплі інстанси, щоб не платити за runaway Gemini.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.6",
        en: { title: "Push notifications (mobile)" },
        uk: { title: "Push-сповіщення (мобільні)" },
        stories: [
          {
            id: "US-X017",
            en: {
              title: "Register an Expo push token",
              userStory: "As a mobile artist, I want my Expo token registered on login and refreshed (with last-seen-at) on cold start, so that pushes are delivered to the right device.",
              criteria: [],
            },
            uk: {
              title: "Реєстрація Expo push token",
              userStory: "Як мобільний артист, я хочу, щоб мій Expo token реєструвався при логіні і оновлювався (з last-seen-at) при cold start, щоб push приходили на правильний пристрій.",
              criteria: [],
            },
          },
          {
            id: "US-X018",
            en: {
              title: "Mute pushes per-device or globally",
              userStory: "As a mobile user, I want a mute dialog accepting an ISO-string until-timestamp or a “forever” sentinel, per-device or global, so that I control notifications without losing them entirely.",
              criteria: [],
            },
            uk: {
              title: "Mute push per-device або глобально",
              userStory: "Як мобільний користувач, я хочу mute-діалог, що приймає ISO-string until-timestamp або «forever» sentinel, per-device або глобально, щоб контролювати сповіщення, не втрачаючи їх повністю.",
              criteria: [],
            },
          },
          {
            id: "US-X019",
            en: {
              title: "Dispatch pushes alongside other channels",
              userStory: "As a notifyEvent consumer, I want `sendExpoPush()` iterated over all of my non-muted tokens, so that mobile is a first-class channel.",
              criteria: [],
            },
            uk: {
              title: "Push разом з іншими каналами",
              userStory: "Як споживач notifyEvent, я хочу, щоб `sendExpoPush()` ітерувався по всіх моїх неzamute-ваних токенах, щоб мобільний канал був першокласним.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.7",
        en: { title: "Feedback module" },
        uk: { title: "Модуль фідбеку" },
        stories: [
          {
            id: "US-X020",
            en: {
              title: "Submit feedback from anywhere",
              userStory: "As any authenticated user, I want a floating bottom-right bubble that opens a form with a category picker (Bug / Feature / Other) and a textarea (max 2000 chars with counter), so that I can report bugs instantly.",
              criteria: [
                "Hidden on public surfaces.",
                "Submit requires category + non-empty text.",
                "Row persisted to `feedback_items`.",
              ],
            },
            uk: {
              title: "Фідбек звідусіль",
              userStory: "Як будь-який авторизований користувач, я хочу плаваючий bubble унизу справа, що відкриває форму з пікером категорії (Bug / Feature / Other) і textarea (макс 2000 символів з лічильником), щоб миттєво репортити баги.",
              criteria: [
                "Прихований на публічних поверхнях.",
                "Submit вимагає категорію + непорожній текст.",
                "Рядок зберігається в `feedback_items`.",
              ],
            },
          },
        ],
      },
      {
        number: "8.8",
        en: { title: "Skill & taxonomy infrastructure" },
        uk: { title: "Інфраструктура навичок і таксономії" },
        stories: [
          {
            id: "US-X021",
            en: {
              title: "Maintain two skill models without conflation",
              userStory: "As a developer, I want a 25-skill candidate intake taxonomy (Preferences, 1–10) separate from the 52-skill master taxonomy (artist_skills, 1–10), so that intake stays simple while master coverage stays comprehensive.",
              criteria: [],
            },
            uk: {
              title: "Дві моделі навичок без змішування",
              userStory: "Як розробник, я хочу таксономію інтейку кандидатів на 25 навичок (Preferences, 1–10) окремо від master-таксономії на 52 навички (artist_skills, 1–10), щоб інтейк лишався простим, а master покриття — повним.",
              criteria: [],
            },
          },
          {
            id: "US-X022",
            en: {
              title: "Define 20+ video types",
              userStory: "As a product owner, I want a centralised `video_taxonomy.js` of categorised video types reused across intake, profile, and matchers, so that buckets don't drift.",
              criteria: [],
            },
            uk: {
              title: "20+ типів відео в одному місці",
              userStory: "Як product owner, я хочу централізований `video_taxonomy.js` з категоризованими типами відео, що перевикористовується в intake, profile і matchers, щоб бакети не розʼїжджалися.",
              criteria: [],
            },
          },
          {
            id: "US-X023",
            en: {
              title: "Match candidates to tests with AI",
              userStory: "As an SD, I want the test-match endpoint to use Gemini to rank tests for a given candidate, so that we serve the most-relevant brief first.",
              criteria: [],
            },
            uk: {
              title: "AI-матчинг кандидатів з тестами",
              userStory: "Як SD, я хочу, щоб test-match endpoint використовував Gemini для ранжування тестів під кандидата, щоб ми пропонували найрелевантніший бриф першим.",
              criteria: [],
            },
          },
          {
            id: "US-X024",
            en: {
              title: "Match orders to artists with AI",
              userStory: "As an SD reviewing an order, I want the project-match endpoint to use the same Gemini algorithm to rank artists by fit, so that staffing suggestions are explainable.",
              criteria: [],
            },
            uk: {
              title: "AI-матчинг замовлень з артистами",
              userStory: "Як SD, що переглядає замовлення, я хочу, щоб project-match endpoint використовував той самий Gemini-алгоритм для ранжування артистів за відповідністю, щоб пропозиції staffing були пояснюваними.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.9",
        en: { title: "Public-API surface (no auth)" },
        uk: { title: "Public API (без авторизації)" },
        stories: [
          {
            id: "US-X025",
            en: {
              title: "Read a public artist profile",
              userStory: "As any consumer of the public artist endpoint, I want read-only artist data — rating, coverage, last updated, studios, projects, profile, preferences, master skills — gated to artists whose backing user is active OR whose candidate row is `final_decision='accepted'`, so that legacy artists remain reachable.",
              criteria: [],
            },
            uk: {
              title: "Читання публічного профілю артиста",
              userStory: "Як будь-який споживач public artist endpoint, я хочу read-only дані артиста — rating, coverage, last updated, studios, projects, profile, preferences, master skills — гейтовані для артистів, де backing user активний АБО candidate рядок з `final_decision='accepted'`, щоб legacy-артисти лишалися доступними.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.10",
        en: { title: "Brand kit / watermark tooling" },
        uk: { title: "Брендинг / watermark-інструменти" },
        stories: [
          {
            id: "US-X026",
            en: {
              title: "Generate watermark overlays",
              userStory: "As an operator, I want a script to produce 16:9 / 9:16 / 1:1 ProRes-4444 alpha .mov files with an env-tunable OPACITY and optional MP4 preview output, so that delivered videos can be watermarked off-platform consistently.",
              criteria: [],
            },
            uk: {
              title: "Генерація watermark-оверлеїв",
              userStory: "Як оператор, я хочу скрипт, що генерує 16:9 / 9:16 / 1:1 ProRes-4444 alpha .mov файли з env-перемикачем OPACITY і опційним MP4 preview, щоб готові відео могли бути брендовані поза платформою консистентно.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.11",
        en: { title: "Hosting & observability" },
        uk: { title: "Хостинг і observability" },
        stories: [
          {
            id: "US-X027",
            en: {
              title: "Auto-deploy on push to main",
              userStory: "As a developer, I want every push to `main` to trigger a deploy, so that production stays in lockstep with the trunk.",
              criteria: [],
            },
            uk: {
              title: "Авто-деплой при push у main",
              userStory: "Як розробник, я хочу, щоб кожен push у `main` тригерив деплой, щоб продакшен ішов у ногу з trunk.",
              criteria: [],
            },
          },
          {
            id: "US-X028",
            en: {
              title: "Track page-level engagement",
              userStory: "As a PO, I want Analytics + Speed Insights wired into the root layout, so that I have page-level engagement and Web-Vitals data without a separate tool.",
              criteria: [],
            },
            uk: {
              title: "Трек page-level engagement",
              userStory: "Як PO, я хочу Analytics + Speed Insights у root layout, щоб мати page-level engagement і Web-Vitals дані без окремого інструмента.",
              criteria: [],
            },
          },
        ],
      },
      {
        number: "8.12",
        en: { title: "Test infrastructure" },
        uk: { title: "Тестова інфраструктура" },
        stories: [
          {
            id: "US-X029",
            en: {
              title: "Run unit + API tests",
              userStory: "As a developer, I want Vitest suites in `test/unit/*.test.js` and `test/api/*.test.js` running against a dedicated `test` schema in the database, so that I can verify logic without polluting production data.",
              criteria: [],
            },
            uk: {
              title: "Unit + API тести",
              userStory: "Як розробник, я хочу Vitest-набори в `test/unit/*.test.js` і `test/api/*.test.js`, що ганяються проти окремої `test` схеми в БД, щоб перевіряти логіку без забруднення продакшен-даних.",
              criteria: [],
            },
          },
          {
            id: "US-X030",
            en: {
              title: "Run E2E tests",
              userStory: "As a developer, I want Playwright specs in `e2e/*.spec.js` running against a dev server on port 3100 with `SUPABASE_SCHEMA=test`, so that critical user journeys are exercised end-to-end.",
              criteria: [],
            },
            uk: {
              title: "E2E тести",
              userStory: "Як розробник, я хочу Playwright-специ в `e2e/*.spec.js`, що ганяються проти dev-сервера на порту 3100 з `SUPABASE_SCHEMA=test`, щоб критичні юзер-флоу прокатувались end-to-end.",
              criteria: [],
            },
          },
        ],
      },
    ],
  },
];

export const data: UserStoriesData = { meta, sections };
