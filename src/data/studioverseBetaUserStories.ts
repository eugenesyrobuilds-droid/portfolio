import type {
  Section,
  UserStoriesData,
  UserStoriesMeta,
} from "./userStoriesTypes";

export const meta: UserStoriesMeta = {
  intro: {
    en: "User stories per INVEST · Prioritization per MoSCoW",
    uk: "Юзер стори за INVEST · Пріоритизація за MoSCoW",
  },
  legend: {
    en: "MUST — without this the platform fails its purpose. SHOULD — important; absence degrades UX or operations significantly. COULD — polish or edge case, safe to drop under pressure.",
    uk: "MUST — без цього платформа не виконує своєї мети. SHOULD — важливо; відсутність суттєво погіршує UX або операції. COULD — полірування або edge case, безпечно вирізати під тиском.",
  },
  personas: {
    en: [
      { name: "Visitor", description: "Unauthenticated user discovering the platform via the apply funnel, the order intake, or a public artist profile link." },
      { name: "Artist", description: "Creator delivering assigned project work; owns their skills and availability profile." },
      { name: "Studio Director (SD)", description: "Operator who accepts artists into a studio and runs projects end-to-end." },
      { name: "Studio Manager (SM)", description: "Day-to-day project + task runner for one studio; no pipeline or order access." },
      { name: "Artist Evaluator (AE)", description: "Trusted artist with delegated pipeline review (sub-role of Artist)." },
      { name: "Platform Owner (PO)", description: "Super-admin with full oversight across studios, candidates, orders, and audit." },
      { name: "Client", description: "Buyer of a video project; read-only access to linked projects + commenting." },
    ],
    uk: [
      { name: "Відвідувач", description: "Неавторизований користувач, що знайомиться з платформою через воронку заявки, прийом замовлень або публічний лінк профілю артиста." },
      { name: "Артист", description: "Автор контенту, що виконує призначену роботу по проєктах; володіє своїм профілем навичок і доступності." },
      { name: "Директор студії (SD)", description: "Оператор, який приймає артистів у студію і веде проєкти end-to-end." },
      { name: "Менеджер студії (SM)", description: "Щоденне ведення проєктів і задач у межах однієї студії; без доступу до пайплайну й замовлень." },
      { name: "Артист-оцінювач (AE)", description: "Довірений артист з делегованим переглядом пайплайну (під-роль артиста)." },
      { name: "Власник платформи (PO)", description: "Супер-адмін з повним наглядом над студіями, кандидатами, замовленнями й аудитом." },
      { name: "Клієнт", description: "Замовник відео-проєкту; read-only доступ до повʼязаних проєктів + коментарі." },
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
            priority: "Must",
            en: {
              title: "Hero and value proposition",
              userStory: "As a visitor on the apply page, I want a clear hero with a “Now Hiring” badge, headline, subtitle, and three perk cards, so that I can decide whether the role fits before I start the form.",
              criteria: [
                "A “Now Hiring” badge with a pulsing green dot is visible above the hero.",
                "The headline reads “Join the StudioVerse Creator Network” with a gradient accent.",
                "The subtitle describes project-based pay, remote work, and quick onboarding.",
                "Three perk cards are visible above the form: “Project-based pay”, “Fully remote”, “Quick onboarding”.",
              ],
            },
            uk: {
              title: "Hero та ціннісна пропозиція",
              userStory: "Як відвідувач на сторінці заявки, я хочу чіткий hero з бейджем «Now Hiring», заголовком, підзаголовком і трьома картками переваг, щоб вирішити, чи підходить роль, ще до заповнення форми.",
              criteria: [
                "Бейдж «Now Hiring» з пульсуючою зеленою точкою видно над hero.",
                "Заголовок: «Join the StudioVerse Creator Network» з градієнтним акцентом.",
                "Підзаголовок описує оплату за проєкт, віддалену роботу і швидкий онбординг.",
                "Три картки переваг видно над формою: «Project-based pay», «Fully remote», «Quick onboarding».",
              ],
            },
          },
          {
            id: "US-V002",
            priority: "Must",
            en: {
              title: "Submit personal details (stage one)",
              userStory: "As a visitor, I want to enter my full name, email, portfolio URL, and optional LinkedIn URL, so that I can move past the intake gate.",
              criteria: [
                "Full name, email, and portfolio URL are required; LinkedIn URL is optional and labelled as such.",
                "Email validation fails if the input lacks “@”; inline error reads “Valid email required”.",
                "Required fields show a red border and inline error when empty on submit.",
                "The “Continue” button advances the user to the path-choice screen once all required fields are valid.",
              ],
            },
            uk: {
              title: "Особисті дані (крок 1)",
              userStory: "Як відвідувач, я хочу ввести повне імʼя, email, URL портфоліо та опційно URL LinkedIn, щоб пройти етап інтейку.",
              criteria: [
                "Повне імʼя, email і URL портфоліо обовʼязкові; URL LinkedIn опційний і відповідно підписаний.",
                "Валідація email падає, якщо немає «@»; inline-помилка: «Valid email required».",
                "Обовʼязкові поля показують червону рамку та inline-помилку, якщо порожні при submit.",
                "Кнопка «Continue» веде на екран вибору шляху, коли всі обовʼязкові поля валідні.",
              ],
            },
          },
          {
            id: "US-V003",
            priority: "Must",
            en: {
              title: "Choose an application path",
              userStory: "As a visitor who has completed intake, I want to choose between a Test path and a Portfolio path, so that I can apply through the route that suits my readiness.",
              criteria: [
                "Two cards are visible side by side with their own emoji, headline, tag, and Continue button.",
                "The Test card carries a “Paid by performance if accepted” tag in blue.",
                "The Portfolio card carries a “Faster · no payout for the sample” tag in amber.",
                "Selecting Continue on either card routes to that path's next step.",
              ],
            },
            uk: {
              title: "Вибір шляху подачі",
              userStory: "Як відвідувач, що пройшов інтейк, я хочу обрати між Test-шляхом і Portfolio-шляхом, щоб податись маршрутом, що відповідає моїй готовності.",
              criteria: [
                "Дві картки видно поруч, кожна з власним емодзі, заголовком, тегом і кнопкою Continue.",
                "Картка Test має синій тег «Paid by performance if accepted».",
                "Картка Portfolio має янтарний тег «Faster · no payout for the sample».",
                "Натискання Continue на будь-якій картці веде на наступний крок цього шляху.",
              ],
            },
          },
          {
            id: "US-V004",
            priority: "Must",
            en: {
              title: "Pick up to three video types (Test path)",
              userStory: "As a Test-path applicant, I want to pick up to three video types, so that I get matched to a relevant test.",
              criteria: [
                "Video types are grouped under five category headings.",
                "A live “N / 3” counter is shown near the page title.",
                "Selected pills get a blue background and checkmark; unselected pills look default.",
                "Attempting a fourth selection is blocked and triggers a toast error.",
                "“Continue to Skills” is disabled until at least one type is selected.",
              ],
            },
            uk: {
              title: "Вибір до 3 типів відео (Test-шлях)",
              userStory: "Як кандидат на Test-шляху, я хочу обрати до трьох типів відео, щоб платформа підібрала релевантний тест.",
              criteria: [
                "Типи відео згруповані під пʼять категоріями.",
                "Лічильник «N / 3» у реальному часі біля заголовка.",
                "Обрані pills отримують синє тло і галку; необрані — дефолтні.",
                "Спроба обрати 4-й тип заблокована і викликає toast-помилку.",
                "Кнопка «Continue to Skills» неактивна, поки не обрано хоча б один тип.",
              ],
            },
          },
          {
            id: "US-V005",
            priority: "Must",
            en: {
              title: "Self-rate skills 0–10 (Test path)",
              userStory: "As a Test-path applicant, I want to rate the relevant skills on a 0–10 slider, so that the matcher has my self-assessed strengths.",
              criteria: [
                "Skill cards are grouped to match the categories of my chosen types.",
                "Each skill row exposes a slider; unrated state shows a “—” placeholder.",
                "A set rating shows a coloured numeric badge (e.g. “8/10”).",
                "The submit button is disabled while any in-scope skill is unrated.",
                "Submitting with gaps triggers an error toast naming the missing skills.",
              ],
            },
            uk: {
              title: "Самооцінка навичок 0–10 (Test-шлях)",
              userStory: "Як кандидат на Test-шляху, я хочу оцінити відповідні навички на слайдері 0–10, щоб матчер бачив мої самооцінені сильні сторони.",
              criteria: [
                "Картки навичок згруповані відповідно до категорій обраних типів.",
                "У кожному рядку навички є слайдер; неоцінений стан показує плейсхолдер «—».",
                "Виставлений рейтинг показано кольоровим числовим бейджем (напр. «8/10»).",
                "Кнопка submit неактивна, поки в скоупі є хоча б одна неоцінена навичка.",
                "Submit із пропусками викликає error toast із переліком пропущених навичок.",
              ],
            },
          },
          {
            id: "US-V006",
            priority: "Must",
            en: {
              title: "Pick a brief (Portfolio path)",
              userStory: "As a Portfolio-path applicant, I want to see all currently active briefs in a selectable list, so that I can submit my work against a brief that matches.",
              criteria: [
                "A loading state is shown while briefs are fetched.",
                "An empty list renders a “No briefs are currently active” card.",
                "Each unselected brief card has a grey two-pixel border; the selected one switches to a blue border with a “Selected” badge.",
                "The selected card expands to show the goal + tagline preview only (technical specs hidden).",
                "Continue is disabled until exactly one brief is selected.",
              ],
            },
            uk: {
              title: "Вибір брифу (Portfolio-шлях)",
              userStory: "Як кандидат на Portfolio-шляху, я хочу бачити всі активні брифи в списку вибору, щоб подати роботу проти найрелевантнішого.",
              criteria: [
                "Поки брифи завантажуються, показано стан loading.",
                "Порожній список рендерить картку «No briefs are currently active».",
                "Кожна необрана картка брифу має сіру 2-піксельну рамку; обрана — синю рамку та бейдж «Selected».",
                "Обрана картка розгортається й показує лише прев’ю мети та тагліну (технічні специфікації приховані).",
                "Кнопка Continue неактивна, поки не обрано рівно один бриф.",
              ],
            },
          },
          {
            id: "US-V007",
            priority: "Must",
            en: {
              title: "Submit a portfolio video link (Portfolio path)",
              userStory: "As a Portfolio-path applicant, I want to paste any portfolio video URL and submit it, so that the studio director sees my sample without me producing a new test.",
              criteria: [
                "The video URL field is required; empty submit shows a “Required” error.",
                "The selected brief name is repeated in the page subtitle as confirmation.",
                "An anti-bot check renders if the platform has a public key configured.",
                "The submit button is disabled until both the URL is filled and the anti-bot check is completed.",
                "On success a toast reads “Portfolio sample sent!” and the screen advances to the status view.",
              ],
            },
            uk: {
              title: "Надсилання лінка на портфоліо-відео (Portfolio-шлях)",
              userStory: "Як кандидат на Portfolio-шляху, я хочу вставити URL будь-якого портфоліо-відео й надіслати, щоб директор студії побачив мій зразок без створення нового тесту.",
              criteria: [
                "Поле video URL обовʼязкове; порожній submit показує помилку «Required».",
                "Назва обраного брифу повторюється в підзаголовку сторінки як підтвердження.",
                "Якщо в платформі налаштовано публічний ключ, рендериться anti-bot перевірка.",
                "Кнопка submit неактивна, поки URL не заповнений і anti-bot перевірка не пройдена.",
                "При успіху зʼявляється toast «Portfolio sample sent!» і екран переходить у статус-вʼю.",
              ],
            },
          },
          {
            id: "US-V008",
            priority: "Should",
            en: {
              title: "See my application status",
              userStory: "As a visitor returning to the apply page after submitting, I want a status screen showing where I stand, so that I know my outcome without contacting support.",
              criteria: [
                "Each lifecycle stage (pending review / reviewed / accepted / rejected) has its own copy, emoji, and CTA.",
                "The page polls the platform every 10 seconds in the background.",
                "A toast appears when the state transitions while the page is open.",
                "The accepted state surfaces welcome copy with next-step links (skills profile, Slack invite).",
              ],
            },
            uk: {
              title: "Перегляд статусу заявки",
              userStory: "Як відвідувач, що повернувся на сторінку заявки після подачі, я хочу екран статусу, який показує мій стан, щоб знати результат без звернення в підтримку.",
              criteria: [
                "Кожна стадія життєвого циклу (pending review / reviewed / accepted / rejected) має власні текст, емодзі та CTA.",
                "Сторінка пуллить платформу раз на 10 с у фоні.",
                "Коли стан змінюється при відкритій сторінці, зʼявляється toast.",
                "Стан accepted показує welcome-текст з лінками наступних кроків (профіль навичок, Slack-інвайт).",
              ],
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
            priority: "Must",
            en: {
              title: "See the test brief",
              userStory: "As a candidate with a submit link, I want a personalised brief view, so that I produce the right video.",
              criteria: [
                "The header greets me by name in a pill (“👋 Hey [Name]”).",
                "A pill switcher lets me view alternative tests for my profile.",
                "The recommended test carries a “✨ Recommended” tag.",
                "Each brief shows goal, deliverable, materials, script, tools, requirements, submission steps, and evaluation criteria in full.",
                "A sticky bottom bar contains a “Continue to Submit →” CTA.",
                "When no active tests exist, the page renders “No test assignments are currently active.”",
              ],
            },
            uk: {
              title: "Перегляд тестового брифу",
              userStory: "Як кандидат із submit-лінком, я хочу персоналізований вигляд брифу, щоб зняти правильне відео.",
              criteria: [
                "Хедер вітає мене по імені у пілюлі («👋 Hey [Name]»).",
                "Pill-перемикач дає переглядати альтернативні тести для мого профілю.",
                "Рекомендований тест має тег «✨ Recommended».",
                "Кожен бриф показує мету, deliverable, матеріали, сценарій, інструменти, вимоги, кроки подачі та критерії оцінки повністю.",
                "У sticky bottom bar є CTA «Continue to Submit →».",
                "Коли активних тестів немає, сторінка рендерить «No test assignments are currently active.»",
              ],
            },
          },
          {
            id: "US-V010",
            priority: "Must",
            en: {
              title: "Submit a finished test video",
              userStory: "As a candidate, I want to paste a Google Drive link and confirm via a modal, so that submission is intentional and the file is reviewable.",
              criteria: [
                "A “Step 3 of 3 · Submit Video” header confirms my position in the flow.",
                "A six-item pre-submit checklist is shown (brief match, duration, 1080p, MP4, Drive permissions, file naming).",
                "A payment-model card shows tiered payouts (e.g. 1K+ views → CAD 30).",
                "The Google Drive link field is required; AI Tools and Notes fields are optional.",
                "An anti-bot check is rendered when configured; submit is disabled until both URL and check pass.",
                "Submit opens an “Are you absolutely sure?” modal with “← Get Back” and “I'm Sure ✓” actions before the actual POST.",
              ],
            },
            uk: {
              title: "Надсилання готового тестового відео",
              userStory: "Як кандидат, я хочу вставити лінк на Google Drive й підтвердити модалкою, щоб подача була усвідомленою, а файл придатним до перегляду.",
              criteria: [
                "Заголовок «Step 3 of 3 · Submit Video» підтверджує моє місце у флоу.",
                "Показано чекліст з 6 пунктів перед надсиланням (відповідність брифу, тривалість, 1080p, MP4, права в Drive, найменування файлу).",
                "Картка моделі оплати показує тарифи (напр. 1K+ переглядів → CAD 30).",
                "Поле лінка Google Drive обовʼязкове; поля AI Tools і Notes — опційні.",
                "Anti-bot перевірка рендериться, якщо налаштована; submit неактивний, поки і URL, і перевірка не валідні.",
                "Submit відкриває модалку «Are you absolutely sure?» з кнопками «← Get Back» і «I'm Sure ✓» перед фактичним POST.",
              ],
            },
          },
          {
            id: "US-V011",
            priority: "Should",
            en: {
              title: "See a per-status submitted screen",
              userStory: "As a candidate who already submitted, I want a status-specific message, so that the page is never blank.",
              criteria: [
                "The screen reads differently for applied / pending_review / reviewed / decided states.",
                "The brand decision (accepted / rejected) is visible if available, with the reviewer's comment.",
              ],
            },
            uk: {
              title: "Стан після подачі залежно від статусу",
              userStory: "Як кандидат, що вже подався, я хочу повідомлення, специфічне для статусу, щоб сторінка ніколи не була порожньою.",
              criteria: [
                "Екран читається по-різному для станів applied / pending_review / reviewed / decided.",
                "Рішення (accepted / rejected) видно, якщо доступне, разом із коментарем ревьюера.",
              ],
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
            priority: "Must",
            en: {
              title: "Landing — chat or form",
              userStory: "As a prospective client on the order page, I want to choose between an AI chat and a manual form, so that I can self-select based on the time I have.",
              criteria: [
                "The landing screen shows the headline “Order your video.” with an explanatory subtitle.",
                "Two primary actions are visible: “Chat with AI →” and “Fill the form myself”.",
                "An “AI chat is rate-limited and monitored” disclaimer is shown beneath the buttons.",
              ],
            },
            uk: {
              title: "Лендинг — чат або форма",
              userStory: "Як потенційний клієнт на сторінці замовлення, я хочу обрати між AI-чатом і ручною формою, щоб самостійно вибрати залежно від наявного часу.",
              criteria: [
                "Лендинг показує заголовок «Order your video.» з пояснювальним підзаголовком.",
                "Видно дві основні дії: «Chat with AI →» і «Fill the form myself».",
                "Під кнопками — дисклеймер «AI chat is rate-limited and monitored».",
              ],
            },
          },
          {
            id: "US-V013",
            priority: "Could",
            en: {
              title: "Resume a draft order",
              userStory: "As a visitor who left the order page mid-flow, I want a “Continue your previous order?” prompt on return, so that I don't lose chat state.",
              criteria: [
                "A resume banner appears if a local draft exists.",
                "Two buttons let me continue or discard the draft.",
                "Discarding clears the local state before opening the landing screen fresh.",
              ],
            },
            uk: {
              title: "Продовження чернетки замовлення",
              userStory: "Як відвідувач, що пішов зі сторінки замовлення посеред флоу, я хочу при поверненні підказку «Continue your previous order?», щоб не втрачати стан чату.",
              criteria: [
                "Якщо існує локальна чернетка, зʼявляється resume-банер.",
                "Дві кнопки дають продовжити або відкинути чернетку.",
                "Відкидання очищає локальний стан і відкриває лендинг наново.",
              ],
            },
          },
          {
            id: "US-V014",
            priority: "Should",
            en: {
              title: "Chat with the AI consultant",
              userStory: "As a visitor who chose Chat, I want a chat surface to scope my brief, so that I get a structured order in 2–3 minutes.",
              criteria: [
                "User messages are right-aligned in blue; assistant messages are left-aligned in white.",
                "A “X / 30 messages” counter appears at 25+ messages and turns red at the cap.",
                "The send button is disabled while the assistant is responding.",
                "A “Fill On Your Own” button is always available to bail to the manual form.",
                "Rate-limit and network errors render in a red error box inside the chat.",
              ],
            },
            uk: {
              title: "Чат з AI-консультантом",
              userStory: "Як відвідувач, що обрав Chat, я хочу інтерфейс чату для формування брифу, щоб отримати структуроване замовлення за 2–3 хвилини.",
              criteria: [
                "Повідомлення користувача — справа, сині; повідомлення асистента — зліва, білі.",
                "Лічильник «X / 30 messages» зʼявляється при 25+ повідомленнях і червоніє на ліміті.",
                "Кнопка send неактивна, поки асистент відповідає.",
                "Кнопка «Fill On Your Own» завжди доступна для переходу на ручну форму.",
                "Помилки rate-limit і мережі відображаються червоним error-box всередині чату.",
              ],
            },
          },
          {
            id: "US-V015",
            priority: "Must",
            en: {
              title: "Edit the AI-extracted summary",
              userStory: "As a visitor who finished the AI chat, I want to review and edit a structured summary, so that what I submit is what I meant.",
              criteria: [
                "A summary textarea is editable.",
                "Contact section requires email and company; name is captured but optional.",
                "Scope section exposes video type, content category, style, style notes (free text), duration (if not AI short), and urgency.",
                "Platforms is a multi-select chip group (TikTok, Instagram, YouTube, Facebook, Website, Other).",
                "Low-AI-confidence fields display a red “Please verify” badge.",
                "References and Assets sections are editable URL lists with an “Add” button.",
                "A “Missing info” section lists AI-flagged coverage gaps.",
              ],
            },
            uk: {
              title: "Редагування зведеного брифу від AI",
              userStory: "Як відвідувач, що завершив AI-чат, я хочу переглянути й відредагувати структуроване зведення, щоб надіслати рівно те, що мав на увазі.",
              criteria: [
                "Текстове поле summary редаговане.",
                "Секція Contact вимагає email і company; name — захоплюється, але опційне.",
                "Секція Scope показує video type, content category, style, style notes (вільний текст), duration (якщо не AI short) та urgency.",
                "Platforms — multi-select група чипів (TikTok, Instagram, YouTube, Facebook, Website, Other).",
                "Поля з низькою впевненістю AI отримують червоний бейдж «Please verify».",
                "Секції References і Assets — редаговані URL-списки з кнопкою «Add».",
                "Секція «Missing info» перелічує прогалини покриття, помічені AI.",
              ],
            },
          },
          {
            id: "US-V016",
            priority: "Should",
            en: {
              title: "See a live price estimate",
              userStory: "As a visitor finishing my order, I want a price card showing “$X–$Y” based on the entered details, so that I understand cost before I commit.",
              criteria: [
                "The estimate updates live as I change duration, video type, and urgency.",
                "An Urgent checkbox toggles a +50% surcharge with a clear fee note.",
                "The card explains briefly which fields drive the estimate.",
              ],
            },
            uk: {
              title: "Орієнтовна вартість у реальному часі",
              userStory: "Як відвідувач, що завершує замовлення, я хочу картку ціни «$X–$Y» на основі введених даних, щоб розуміти вартість до підтвердження.",
              criteria: [
                "Оцінка оновлюється в реальному часі при зміні duration, video type, urgency.",
                "Чекбокс Urgent вмикає +50% надбавку з зрозумілою нотаткою про fee.",
                "Картка коротко пояснює, які поля впливають на оцінку.",
              ],
            },
          },
          {
            id: "US-V017",
            priority: "Must",
            en: {
              title: "Submit the order",
              userStory: "As a visitor, I want a single submit button that validates and then confirms, so that I leave with proof my brief was received.",
              criteria: [
                "“Submit order →” is shown at the bottom of the summary view.",
                "Missing required fields are highlighted and surface inline error messages before submit fires.",
                "On success the screen advances to a confirmation state with the new order's status.",
              ],
            },
            uk: {
              title: "Надсилання замовлення",
              userStory: "Як відвідувач, я хочу одну кнопку submit, яка валідує й підтверджує, щоб піти з підтвердженням того, що бриф отримано.",
              criteria: [
                "«Submit order →» показано внизу вʼю зі зведенням.",
                "Пропущені обовʼязкові поля підсвічуються й показують inline-помилки до того, як submit спрацює.",
                "При успіху екран переходить у стан підтвердження зі статусом нового замовлення.",
              ],
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
            priority: "Should",
            en: {
              title: "View an artist's public profile",
              userStory: "As anyone with a public profile link, I want a header showing the artist's identity and aggregate ratings, so that I can quickly assess fit.",
              criteria: [
                "A 64-pixel circle shows the avatar with initials.",
                "Artist name is rendered as a large serif heading.",
                "Email is shown in a muted tone if available.",
                "A “Last updated” date sits below the name.",
                "Rating and Coverage stat chips appear next to the heading.",
              ],
            },
            uk: {
              title: "Перегляд публічного профілю артиста",
              userStory: "Як будь-хто з лінком на публічний профіль, я хочу хедер з ідентичністю артиста й агрегованими рейтингами, щоб швидко оцінити відповідність.",
              criteria: [
                "Кружок 64px показує аватар з ініціалами.",
                "Імʼя артиста — як великий serif-заголовок.",
                "Email — приглушеним тоном, якщо доступний.",
                "Дата «Last updated» — під імʼям.",
                "Стат-чипи Rating і Coverage — поруч із заголовком.",
              ],
            },
          },
          {
            id: "US-V019",
            priority: "Could",
            en: {
              title: "See experience and availability",
              userStory: "As a profile viewer, I want a strip of experience and availability chips, so that I understand bandwidth without asking.",
              criteria: [
                "Six chips are rendered: Experience, Hours/week, Videos/week, Content preference, Turnaround AI 30s, Turnaround Edit 1m.",
                "Empty chips render with a dashed border and a “—” placeholder rather than disappearing.",
                "A free-text availability block sits beneath the chip row when the artist has filled it in.",
              ],
            },
            uk: {
              title: "Перегляд досвіду й доступності",
              userStory: "Як переглядач профілю, я хочу стрічку чипів досвіду й доступності, щоб розуміти пропускну здатність без запитань.",
              criteria: [
                "Рендеряться 6 чипів: Experience, Hours/week, Videos/week, Content preference, Turnaround AI 30s, Turnaround Edit 1m.",
                "Порожні чипи рендеряться пунктирною рамкою та плейсхолдером «—», а не зникають.",
                "Якщо артист заповнив, під стрічкою чипів зʼявляється текстовий блок availability.",
              ],
            },
          },
          {
            id: "US-V020",
            priority: "Should",
            en: {
              title: "Browse portfolio and social links",
              userStory: "As a profile viewer, I want one-click access to portfolio and socials, so that I can inspect work in its native channel.",
              criteria: [
                "Portfolio, LinkedIn, Best work, Instagram, Twitter, and TikTok all render as chips when present.",
                "Each chip opens its destination in a new tab.",
                "Missing links do not render their chip at all (no empty slots).",
              ],
            },
            uk: {
              title: "Перегляд портфоліо й соцмереж",
              userStory: "Як переглядач профілю, я хочу один клік до портфоліо й соцмереж, щоб дивитися роботи в нативних каналах.",
              criteria: [
                "Portfolio, LinkedIn, Best work, Instagram, Twitter і TikTok рендеряться як чипи за наявності.",
                "Кожен чип відкриває призначення в новій вкладці.",
                "Відсутні лінки не рендерять свій чип взагалі (без порожніх слотів).",
              ],
            },
          },
          {
            id: "US-V021",
            priority: "Must",
            en: {
              title: "Inspect preferences and master skills",
              userStory: "As a profile viewer, I want preference and master-skill sections, so that I can compare candidates objectively.",
              criteria: [
                "A “Preferences” section lists chosen video types as pills with rank prefix.",
                "Per-category cards show progress bars and the artist's average score for that category.",
                "A “Master Skills” section lists all 52 skills grouped by category.",
                "Each skill chip is heat-coloured: green for ≥8, blue for 5–7, amber for <5.",
              ],
            },
            uk: {
              title: "Перегляд преференцій і master-навичок",
              userStory: "Як переглядач профілю, я хочу секції преференцій і master-навичок, щоб обʼєктивно порівнювати кандидатів.",
              criteria: [
                "Секція «Preferences» перелічує обрані типи відео як pills з префіксом рангу.",
                "Картки по категоріях показують прогрес-бари і середній скор артиста по категорії.",
                "Секція «Master Skills» перелічує всі 52 навички, згруповані за категоріями.",
                "Кожен чип навички теплоколірний: зелений для ≥8, синій для 5–7, янтарний для <5.",
              ],
            },
          },
          {
            id: "US-V022",
            priority: "Should",
            en: {
              title: "See studios and active projects",
              userStory: "As a profile viewer, I want a two-column read-only block showing the artist's current studios and active project list with status, so that I see their commitments.",
              criteria: [
                "The Studios column shows colour chips for each studio.",
                "The Projects column lists active project names with their status badge.",
                "Both columns degrade gracefully when empty (“Not in any studio yet” / “No active projects”).",
              ],
            },
            uk: {
              title: "Перегляд студій і активних проєктів",
              userStory: "Як переглядач профілю, я хочу двоколонковий read-only блок зі студіями артиста й активним списком проєктів зі статусом, щоб бачити поточні зобовʼязання.",
              criteria: [
                "Колонка Studios показує кольорові чипи кожної студії.",
                "Колонка Projects перелічує імена активних проєктів з бейджем статусу.",
                "Обидві колонки коректно деградують при порожнечі («Not in any studio yet» / «No active projects»).",
              ],
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
            priority: "Must",
            en: {
              title: "Sign in",
              userStory: "As a registered user, I want a single login form with email and password, so that I land on my role's home.",
              criteria: [
                "The form is keyboard-friendly; Enter submits.",
                "Loading state changes the button copy to “Signing in…”.",
                "A failed login renders a red inline error.",
                "After success, the user is redirected to the right home for their role.",
                "A sanitized “?next=” parameter is honoured (rejects external hosts).",
              ],
            },
            uk: {
              title: "Вхід",
              userStory: "Як зареєстрований користувач, я хочу одну форму логіну з email і паролем, щоб потрапити на домашню сторінку моєї ролі.",
              criteria: [
                "Форма дружня до клавіатури; Enter надсилає.",
                "Loading-стан змінює текст кнопки на «Signing in…».",
                "Невдалий логін показує червону inline-помилку.",
                "Після успіху користувача перенаправляє на правильну home для його ролі.",
                "Санітизований параметр «?next=» дотримується (відкидає зовнішні хости).",
              ],
            },
          },
          {
            id: "US-V024",
            priority: "Should",
            en: {
              title: "Recover a forgotten password",
              userStory: "As a user who forgot their password, I want a self-service reset that doesn't reveal whether the email exists, so that the recovery flow is safe.",
              criteria: [
                "“Forgot password” link switches the form into reset mode.",
                "Email is required; help text explains a new password will be sent.",
                "Success state always reads “Check your inbox” regardless of whether the email matches an account.",
                "A “← Back to sign in” link is visible while in reset mode.",
              ],
            },
            uk: {
              title: "Відновлення забутого паролю",
              userStory: "Як користувач, що забув пароль, я хочу self-service reset, який не розкриває, чи існує email, щоб флоу відновлення був безпечним.",
              criteria: [
                "Лінк «Forgot password» перемикає форму в reset-режим.",
                "Email обовʼязковий; help-текст пояснює, що буде надіслано новий пароль.",
                "Success-стан завжди читається як «Check your inbox» незалежно від того, чи email звʼязаний з акаунтом.",
                "Лінк «← Back to sign in» видно в reset-режимі.",
              ],
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
        en: { title: "Personal dashboard" },
        uk: { title: "Особистий дашборд" },
        stories: [
          {
            id: "US-A001",
            priority: "Must",
            en: {
              title: "View assigned projects",
              userStory: "As an artist, I want a list of projects assigned to me, so that I can prioritise correctly.",
              criteria: [
                "A “My Projects” tab is the default landing.",
                "Each project card shows status badge, mention dot (with count), activity dot, and a red border if the project is at risk.",
                "The project card opens the project page on click.",
                "The cards re-fetch in the background on tab focus.",
              ],
            },
            uk: {
              title: "Перегляд призначених проєктів",
              userStory: "Як артист, я хочу список призначених мені проєктів, щоб правильно пріоритизувати.",
              criteria: [
                "Вкладка «My Projects» — лендинг за замовчуванням.",
                "Кожна картка проєкту показує бейдж статусу, mention dot (з лічильником), activity dot і червону рамку, якщо проєкт у ризику.",
                "Картка проєкту відкриває сторінку проєкту по кліку.",
                "Картки рефетчаться у фоні при фокусі вкладки.",
              ],
            },
          },
          {
            id: "US-A002",
            priority: "Could",
            en: {
              title: "Empty state when I have no projects",
              userStory: "As a new artist, I want a friendly empty state, so that the dashboard never looks broken.",
              criteria: [
                "An empty state card shows a folder emoji and “No projects yet” copy when the list is empty.",
              ],
            },
            uk: {
              title: "Empty state, коли проєктів немає",
              userStory: "Як новий артист, я хочу привітний empty state, щоб дашборд ніколи не виглядав поламаним.",
              criteria: [
                "Empty state карта показує емодзі папки й текст «No projects yet», коли список порожній.",
              ],
            },
          },
          {
            id: "US-A003",
            priority: "Should",
            en: {
              title: "Warning when I have no studio",
              userStory: "As an artist accepted into the distribution pool, I want a banner explaining my status, so that I understand why my project list is empty.",
              criteria: [
                "A yellow banner is shown above the project list while my studio count is zero.",
                "Copy explains that I'm in the review pipeline and a studio will pick me up.",
              ],
            },
            uk: {
              title: "Попередження, коли немає студії",
              userStory: "Як артист, прийнятий у distribution pool, я хочу банер, що пояснює мій статус, щоб розуміти, чому список проєктів порожній.",
              criteria: [
                "Жовтий банер показано над списком проєктів, поки лічильник студій нульовий.",
                "Текст пояснює, що я «in the review pipeline» й студія мене підбере.",
              ],
            },
          },
          {
            id: "US-A004",
            priority: "Must",
            en: {
              title: "View monthly earnings",
              userStory: "As an artist, I want an Earnings tab with monthly totals, so that I can reconcile against my own ledger.",
              criteria: [
                "A dropdown lets me pick from the last 13 months.",
                "Header summary cells display “Tasks delivered” and “Total earned”.",
                "A per-studio section shows a studio chip, task count, and total for each studio.",
                "A task list shows each paid task with its title, project link, PAID badge, and amount.",
                "An empty month renders “🌱 No tasks delivered this month”.",
              ],
            },
            uk: {
              title: "Місячні заробітки",
              userStory: "Як артист, я хочу вкладку Earnings з місячними тоталами, щоб звіряти зі своїм власним обліком.",
              criteria: [
                "Dropdown дозволяє обрати з останніх 13 місяців.",
                "Шапка показує «Tasks delivered» і «Total earned».",
                "Секція по студіях показує чип студії, лічильник задач і тотал на кожну студію.",
                "Список task-line показує кожну оплачену задачу з назвою, лінком на проєкт, бейджем PAID і сумою.",
                "Порожній місяць рендерить «🌱 No tasks delivered this month».",
              ],
            },
          },
          {
            id: "US-A005",
            priority: "Should",
            en: {
              title: "See my studios and teammates",
              userStory: "As an artist on one or more studios, I want a Studios tab listing my studios and their rosters, so that I know who I'm working with.",
              criteria: [
                "A Studios tab is visible if my artist-studio link count is greater than zero.",
                "Each studio shows its name, the director, and the full artist roster.",
                "My own row is highlighted in the roster.",
                "Artists with evaluator status carry an “Evaluator” tag.",
              ],
            },
            uk: {
              title: "Перегляд студій і колег",
              userStory: "Як артист в одній чи кількох студіях, я хочу вкладку Studios зі списком моїх студій і їх складом, щоб знати, з ким працюю.",
              criteria: [
                "Вкладка Studios видна, якщо мій artist-studio link count > 0.",
                "Кожна студія показує назву, директора й повний склад артистів.",
                "Мій власний рядок виділено у складі.",
                "Артисти з evaluator-статусом отримують тег «Evaluator».",
              ],
            },
          },
          {
            id: "US-A006",
            priority: "Should",
            en: {
              title: "Access studio chat",
              userStory: "As an artist on one or more studios, I want a Chats tab opening my channels, so that I can DM teammates and follow announcements without leaving the platform.",
              criteria: [
                "A Chats tab is visible if my artist-studio link count is greater than zero.",
                "The tab opens the chat hub scoped to my studios.",
              ],
            },
            uk: {
              title: "Доступ до чату студії",
              userStory: "Як артист в одній чи кількох студіях, я хочу вкладку Chats, що відкриває мої канали, щоб DM-ити колег і слідкувати за анонсами без виходу з платформи.",
              criteria: [
                "Вкладка Chats видна, якщо мій artist-studio link count > 0.",
                "Вкладка відкриває chat hub, обмежений моїми студіями.",
              ],
            },
          },
          {
            id: "US-A007",
            priority: "Could",
            en: {
              title: "Quick-link to my skills profile",
              userStory: "As an artist, I want a “My Skills” shortcut in the header, so that I can update my profile without hunting through menus.",
              criteria: [
                "The link is visible in the header for the artist role.",
                "It opens the artist's own skills page.",
              ],
            },
            uk: {
              title: "Шорткат до профілю навичок",
              userStory: "Як артист, я хочу шорткат «My Skills» у хедері, щоб оновлювати профіль без блукань по меню.",
              criteria: [
                "Лінк видно в хедері для ролі артиста.",
                "Лінк відкриває власну сторінку навичок артиста.",
              ],
            },
          },
        ],
      },
      {
        number: "2.2",
        en: { title: "Skill and availability profile" },
        uk: { title: "Профіль навичок і доступності" },
        stories: [
          {
            id: "US-A008",
            priority: "Should",
            en: {
              title: "See my Rating and Coverage",
              userStory: "As an artist on my skills page, I want a progress card with my Rating and Coverage, so that I know what to fill in next.",
              criteria: [
                "A large numeric “Rating” is shown, computed as the average of my filled skills weighted by coverage.",
                "A “Coverage” indicator shows “N / TOTAL” with a progress bar.",
                "A “≥20 skills unlocks…” hint explains the coverage benefit.",
              ],
            },
            uk: {
              title: "Перегляд Rating і Coverage",
              userStory: "Як артист на сторінці навичок, я хочу прогрес-картку з Rating і Coverage, щоб знати, що заповнити далі.",
              criteria: [
                "Велике числове «Rating» — середнє заповнених навичок, зважене на покриття.",
                "Індикатор «Coverage» показує «N / TOTAL» з прогрес-баром.",
                "Підказка «≥20 skills unlocks…» пояснює перевагу покриття.",
              ],
            },
          },
          {
            id: "US-A009",
            priority: "Must",
            en: {
              title: "Edit my preferences",
              userStory: "As an artist, I want to edit my video-type selections and intake skill ratings, so that I can refine what I told the platform on application.",
              criteria: [
                "An edit affordance opens an editable view of my preferences.",
                "Video types appear as grouped toggles with a max-3 counter; max enforced.",
                "Each intake skill exposes a 0–10 slider while editing.",
                "Save is disabled until at least one video type is selected.",
                "Cancel restores the previous values without saving.",
              ],
            },
            uk: {
              title: "Редагування преференцій",
              userStory: "Як артист, я хочу редагувати вибір типів відео й рейтинги intake-навичок, щоб уточнювати те, що сказав платформі при подачі.",
              criteria: [
                "Affordance редагування відкриває редаговану вʼю моїх преференцій.",
                "Типи відео як згруповані toggle з лічильником max-3; ліміт примусовий.",
                "Кожна intake-навичка показує слайдер 0–10 при редагуванні.",
                "Save неактивний, поки не обрано хоча б один тип відео.",
                "Cancel повертає попередні значення без збереження.",
              ],
            },
          },
          {
            id: "US-A010",
            priority: "Must",
            en: {
              title: "Rate myself on the master taxonomy",
              userStory: "As an artist, I want category-accordion cards with sliders per skill, so that the matcher has full coverage of my craft.",
              criteria: [
                "Categories collapse and expand independently.",
                "Each category header shows “X / Y filled”.",
                "Each skill row has a 0–10 slider and a clear button.",
                "Coverage updates as I rate or clear skills.",
              ],
            },
            uk: {
              title: "Самооцінка по master-таксономії",
              userStory: "Як артист, я хочу акордеон-картки категорій зі слайдерами на кожну навичку, щоб матчер мав повне покриття мого ремесла.",
              criteria: [
                "Категорії згортаються й розгортаються незалежно.",
                "Хедер кожної категорії показує «X / Y filled».",
                "У кожному рядку навички — слайдер 0–10 і кнопка clear.",
                "Coverage оновлюється при оцінюванні або очищенні навичок.",
              ],
            },
          },
          {
            id: "US-A011",
            priority: "Must",
            en: {
              title: "Self-assess work cadence",
              userStory: "As an artist, I want a Self Assessment block, so that PMs match my realistic capacity.",
              criteria: [
                "Years of AI video experience is a dropdown (0 / less than 1 / 1–2 / 3+).",
                "Videos produced per week is a number input.",
                "Preferred content type is a dropdown (AI / Editing / Both).",
                "Turnaround for 30s AI and 1m editing are dropdowns with same options (Same day / 1–2 / 3–5 / week+).",
                "Hours available per week is a number input.",
                "A free-text availability textarea is provided.",
              ],
            },
            uk: {
              title: "Самооцінка темпу роботи",
              userStory: "Як артист, я хочу блок Self Assessment, щоб PM-и матчили реалістичну продуктивність.",
              criteria: [
                "Years of AI video experience — dropdown (0 / less than 1 / 1–2 / 3+).",
                "Videos per week — числовий ввід.",
                "Preferred content type — dropdown (AI / Editing / Both).",
                "Turnaround для 30s AI та 1m editing — dropdown-и з тими ж опціями (Same day / 1–2 / 3–5 / week+).",
                "Hours available per week — числовий ввід.",
                "Передбачено textarea вільного тексту availability.",
              ],
            },
          },
          {
            id: "US-A012",
            priority: "Should",
            en: {
              title: "Share my best work and socials",
              userStory: "As an artist, I want a Links section, so that staff and studios can preview my style.",
              criteria: [
                "A “Best work” URL field accepts a full URL.",
                "Instagram, Twitter, and TikTok fields accept either “@user” or a full URL.",
                "Invalid URLs show inline errors on save.",
              ],
            },
            uk: {
              title: "Best work і соцмережі",
              userStory: "Як артист, я хочу секцію Links, щоб команда й студії бачили мій стиль.",
              criteria: [
                "Поле «Best work» URL приймає повний URL.",
                "Поля Instagram, Twitter і TikTok приймають або «@user», або повний URL.",
                "Невалідні URL показують inline-помилки при save.",
              ],
            },
          },
          {
            id: "US-A013",
            priority: "Should",
            en: {
              title: "Save changes via a sticky bar",
              userStory: "As an artist editing skills, I want a sticky bottom bar showing live counts and a Save button, so that I can save without scrolling.",
              criteria: [
                "The bar shows live “N of TOTAL skills filled · Rating X.X”.",
                "A Save button submits all changes.",
                "A green “✓ Submitted {date}” badge appears once the profile is submitted to studios.",
              ],
            },
            uk: {
              title: "Збереження через sticky bar",
              userStory: "Як артист, що редагує навички, я хочу sticky bottom bar з лічильниками в реальному часі й кнопкою Save, щоб зберігати без скролу.",
              criteria: [
                "Bar показує в реальному часі «N of TOTAL skills filled · Rating X.X».",
                "Кнопка Save надсилає всі зміни.",
                "Зелений бейдж «✓ Submitted {date}» зʼявляється після надсилання профілю студіям.",
              ],
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
            priority: "Must",
            en: {
              title: "First-time submit to studios",
              userStory: "As an artist with a complete profile, I want a Submit button that pushes my profile to studio directors, so that I get picked up.",
              criteria: [
                "A “🚀 Submit profile to studios” button is visible on the sticky bar before any submission.",
                "Clicking it saves the profile first, then submits.",
                "A success toast reads “Profile submitted! Studios can now browse you.”",
                "On the first submit, a Slack channel is auto-pinged via webhook.",
              ],
            },
            uk: {
              title: "Перша подача у студії",
              userStory: "Як артист з повним профілем, я хочу кнопку Submit, що штовхає мій профіль директорам студій, щоб мене підібрали.",
              criteria: [
                "Кнопка «🚀 Submit profile to studios» видна на sticky bar до будь-якої подачі.",
                "Клік спочатку зберігає профіль, потім надсилає.",
                "Success toast: «Profile submitted! Studios can now browse you.»",
                "При першому submit команді в Slack автоматично йде ping через webhook.",
              ],
            },
          },
          {
            id: "US-A015",
            priority: "Should",
            en: {
              title: "Re-submit after profile updates",
              userStory: "As an artist who has submitted before, I want a Re-submit button, so that studios get re-notified after meaningful changes.",
              criteria: [
                "A “🔁 Re-submit to studios” button (green) is shown after the initial submit.",
                "A toast reads “Re-submitted — studios will be notified again”.",
                "Subsequent submits do not re-fire the Slack auto-post.",
              ],
            },
            uk: {
              title: "Повторна подача після оновлень",
              userStory: "Як артист, що подавався раніше, я хочу кнопку Re-submit, щоб студії отримували повторні сповіщення після значущих змін.",
              criteria: [
                "Зелена кнопка «🔁 Re-submit to studios» показана після першого submit.",
                "Toast: «Re-submitted — studios will be notified again».",
                "Наступні submit не запускають повторно Slack auto-post.",
              ],
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
            priority: "Must",
            en: {
              title: "Edit my profile and password",
              userStory: "As any authenticated user, I want fields to update my profile and password, so that I keep my account current.",
              criteria: [
                "Full Name and Email are editable text inputs.",
                "Email change requires entering the current password.",
                "A “Change Password” section requires current + new + confirm fields.",
                "New password must be at least 8 characters.",
                "Confirm password must match new.",
                "Save Changes button is disabled while a save is in progress.",
              ],
            },
            uk: {
              title: "Редагування профілю й паролю",
              userStory: "Як будь-який авторизований користувач, я хочу поля для оновлення профілю й паролю, щоб тримати акаунт актуальним.",
              criteria: [
                "Full Name і Email — редаговані текстові поля.",
                "Зміна Email вимагає введення поточного паролю.",
                "Секція «Change Password» вимагає current + new + confirm.",
                "Новий пароль — мінімум 8 символів.",
                "Confirm має збігатися з new.",
                "Кнопка Save Changes неактивна, поки триває збереження.",
              ],
            },
          },
          {
            id: "US-A017",
            priority: "Should",
            en: {
              title: "Tune email notification preferences",
              userStory: "As any user, I want toggleable notification categories, so that I only receive the messages I want.",
              criteria: [
                "A list of categories is shown with on/off toggles.",
                "A “Save Preferences” button persists my selections.",
                "A success toast confirms the save.",
              ],
            },
            uk: {
              title: "Налаштування email-сповіщень",
              userStory: "Як будь-який користувач, я хочу перемикачі категорій сповіщень, щоб отримувати лише потрібні листи.",
              criteria: [
                "Показано список категорій з on/off перемикачами.",
                "Кнопка «Save Preferences» зберігає вибір.",
                "Success toast підтверджує збереження.",
              ],
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
            priority: "Must",
            en: {
              title: "Read the project board",
              userStory: "As an artist assigned to a project, I want a five-stage kanban with drag access only to my own tasks, so that I move my own work without interfering with anyone else's.",
              criteria: [
                "Columns are To Do, Rough Cut, Fine Cut, Final Cut, Approved.",
                "Tasks assigned to me are draggable.",
                "Tasks assigned to others appear as read-only cards.",
                "A drag updates the task stage live with optimistic rendering.",
              ],
            },
            uk: {
              title: "Перегляд дошки проєкту",
              userStory: "Як артист, призначений на проєкт, я хочу 5-стадійний канбан з drag-доступом лише до моїх задач, щоб рухати свою роботу без втручання в чужу.",
              criteria: [
                "Колонки: To Do, Rough Cut, Fine Cut, Final Cut, Approved.",
                "Задачі, призначені мені, перетягуються.",
                "Чужі задачі — read-only картки.",
                "Drag оновлює стадію в реальному часі з optimistic-рендером.",
              ],
            },
          },
          {
            id: "US-A019",
            priority: "Should",
            en: {
              title: "See unread and risk signals on cards",
              userStory: "As an artist, I want signals on task cards, so that I can triage at a glance.",
              criteria: [
                "A mention dot appears when I have unread mentions.",
                "An activity dot appears for unread non-mention activity.",
                "A red glow appears for tasks that are overdue or marked at risk.",
                "A “⚠” badge appears when the task is blocked.",
              ],
            },
            uk: {
              title: "Сигнали непрочитаного й ризику на картках",
              userStory: "Як артист, я хочу сигнали на картках задач, щоб тріажити з одного погляду.",
              criteria: [
                "Mention dot зʼявляється при непрочитаних згадках.",
                "Activity dot зʼявляється при непрочитаній не-mention активності.",
                "Червоне світіння — для прострочених або ризикових задач.",
                "Бейдж «⚠» — коли задача заблокована.",
              ],
            },
          },
          {
            id: "US-A020",
            priority: "Must",
            en: {
              title: "Open task details",
              userStory: "As an artist, I want clicking a card to open the detail modal, so that I have everything to deliver.",
              criteria: [
                "The modal shows description, links, deadlines, and the comment thread.",
                "Opening the modal automatically marks any unread comments as read.",
              ],
            },
            uk: {
              title: "Відкриття деталей задачі",
              userStory: "Як артист, я хочу, щоб клік по картці відкривав детальну модалку, щоб мати все потрібне для виконання.",
              criteria: [
                "Модалка показує опис, лінки, дедлайни й тред коментарів.",
                "Відкриття модалки автоматично позначає непрочитані коментарі прочитаними.",
              ],
            },
          },
          {
            id: "US-A021",
            priority: "Must",
            en: {
              title: "See project context",
              userStory: "As an artist on a project page, I want title, description, links, and a back-navigation, so that I navigate quickly.",
              criteria: [
                "Project title and description are rendered prominently.",
                "An “Open Project G-Drive ↗” button is visible if the project has a Drive URL.",
                "A Chat button shows the unread chat count.",
                "“← Back to projects” routes back to the right home based on my acting mode.",
              ],
            },
            uk: {
              title: "Контекст проєкту",
              userStory: "Як артист на сторінці проєкту, я хочу назву, опис, лінки й back-навігацію, щоб швидко рухатися.",
              criteria: [
                "Назва й опис проєкту рендеряться помітно.",
                "Кнопка «Open Project G-Drive ↗» видна, якщо у проєкту є Drive URL.",
                "Кнопка Chat показує лічильник непрочитаного чату.",
                "«← Back to projects» веде назад на правильну home залежно від мого acting-режиму.",
              ],
            },
          },
        ],
      },
      {
        number: "2.6",
        en: { title: "Comments and chat" },
        uk: { title: "Коментарі й чат" },
        stories: [
          {
            id: "US-A022",
            priority: "Must",
            en: {
              title: "Comment on my own tasks",
              userStory: "As an artist, I want a rich comment editor on tasks I own, so that I can discuss work with PMs and clients.",
              criteria: [
                "The composer supports `@`-mentions with autocomplete.",
                "Basic formatting (bold / italic / list) is supported.",
                "The composer is hidden on tasks assigned to others.",
                "Submitting a comment posts it and clears the editor.",
              ],
            },
            uk: {
              title: "Коментування своїх задач",
              userStory: "Як артист, я хочу rich-редактор коментарів на моїх задачах, щоб обговорювати роботу з PM-ами й клієнтами.",
              criteria: [
                "Composer підтримує `@`-mentions з автокомплітом.",
                "Підтримується базове форматування (bold / italic / list).",
                "Composer прихований на чужих задачах.",
                "Submit коментаря публікує його й очищає редактор.",
              ],
            },
          },
          {
            id: "US-A023",
            priority: "Should",
            en: {
              title: "Use studio chat channels and DMs",
              userStory: "As an artist on a studio, I want the Chats tab to expose channels, DMs, search, and message editing, so that I have a full chat surface without a separate tool.",
              criteria: [
                "The channel rail lists channels and DMs I belong to.",
                "A “Start DM” button opens a teammate picker.",
                "Unread badges appear on channel rows.",
                "`@`-mentions autocomplete from channel members.",
                "I can edit my own messages within 10 minutes of posting.",
                "I can delete my own messages (soft-delete, tombstone shown).",
                "Threads open in a side panel.",
                "I can mute a channel from its settings.",
              ],
            },
            uk: {
              title: "Канали й DM у чаті студії",
              userStory: "Як артист у студії, я хочу, щоб вкладка Chats показувала канали, DM, пошук і редагування повідомлень, щоб мати повноцінний чат без окремого інструмента.",
              criteria: [
                "Channel rail перелічує канали й DM, у яких я є.",
                "Кнопка «Start DM» відкриває picker колег.",
                "На рядках каналів — бейджі непрочитаного.",
                "`@`-mentions автокомплітяться з членів каналу.",
                "Я можу редагувати власні повідомлення в 10-хвилинному вікні.",
                "Я можу видаляти власні повідомлення (soft-delete, показано tombstone).",
                "Threads відкриваються в бічній панелі.",
                "Я можу замʼютити канал з його налаштувань.",
              ],
            },
          },
        ],
      },
      {
        number: "2.7",
        en: { title: "Multi-role acting (multi-role users)" },
        uk: { title: "Перемикання ролей (multi-role users)" },
        stories: [
          {
            id: "US-A024",
            priority: "Could",
            en: {
              title: "Switch between roles",
              userStory: "As a user with multiple roles, I want a header dropdown to switch acting modes, so that I can context-switch without re-login.",
              criteria: [
                "The dropdown is visible only when I have more than one mode available.",
                "Available modes include owner, director, manager, artist, and client where applicable.",
                "Selecting a mode performs a hard navigation to that mode's home.",
              ],
            },
            uk: {
              title: "Перемикання між ролями",
              userStory: "Як користувач з кількома ролями, я хочу dropdown у хедері для перемикання acting-режимів, щоб міняти контекст без повторного логіну.",
              criteria: [
                "Dropdown видно лише коли в мене більше ніж один доступний режим.",
                "Доступні режими включають owner, director, manager, artist, client за релевантністю.",
                "Вибір режиму виконує жорстку навігацію на home цього режиму.",
              ],
            },
          },
          {
            id: "US-A025",
            priority: "Could",
            en: {
              title: "Consistent acting mode across the session",
              userStory: "As a multi-role user, I want my acting mode to persist, so that the experience is consistent.",
              criteria: [
                "The active mode persists across navigations in the same tab via local session storage.",
                "A fresh tab falls back to my primary role's mode.",
                "In artist mode, edit affordances on project pages are hidden.",
                "In artist mode, the chat sidebar on project pages is hidden.",
              ],
            },
            uk: {
              title: "Консистентний acting mode у межах сесії",
              userStory: "Як user з кількома ролями, я хочу, щоб acting mode зберігався, щоб досвід був консистентним.",
              criteria: [
                "Активний режим зберігається при навігації в межах вкладки через local session storage.",
                "Свіжа вкладка відкатується на режим основної ролі.",
                "У режимі artist edit-афорданси на сторінках проєктів сховані.",
                "У режимі artist сайдбар чату на сторінках проєктів схований.",
              ],
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
        en: { title: "Login and navigation" },
        uk: { title: "Логін і навігація" },
        stories: [
          {
            id: "US-S001",
            priority: "Must",
            en: {
              title: "Land on the right tab",
              userStory: "As an SD, I want the senior dashboard to default to the Pipeline tab, so that I can review candidates immediately.",
              criteria: [
                "The senior dashboard route is gated to SD and SM only.",
                "AppNav exposes Pipeline, Orders, Studios, Chats, Customers (Pipeline + Orders are SD-only).",
                "The default tab on first load is Pipeline.",
              ],
            },
            uk: {
              title: "Потрапляння на потрібну вкладку",
              userStory: "Як SD, я хочу, щоб senior dashboard відкривався на вкладці Pipeline, щоб одразу переглядати кандидатів.",
              criteria: [
                "Маршрут senior dashboard доступний лише SD і SM.",
                "AppNav показує Pipeline, Orders, Studios, Chats, Customers (Pipeline + Orders — лише для SD).",
                "Вкладка за замовчуванням на першому завантаженні — Pipeline.",
              ],
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
            priority: "Must",
            en: {
              title: "See the candidate review queue",
              userStory: "As an SD, I want the Pipeline panel with stat cards and a table, so that I prioritise who to review next.",
              criteria: [
                "Stat cards show Total, Need Review, Reviewed, Decided.",
                "The candidate table has columns: Name, Portfolio, Status, Submitted, Score, Action.",
                "The table auto-refreshes every 15 seconds.",
              ],
            },
            uk: {
              title: "Черга кандидатів",
              userStory: "Як SD, я хочу панель Pipeline зі стат-картками й таблицею, щоб пріоритизувати, кого переглядати далі.",
              criteria: [
                "Стат-картки: Total, Need Review, Reviewed, Decided.",
                "Таблиця кандидатів має колонки: Name, Portfolio, Status, Submitted, Score, Action.",
                "Таблиця авто-рефрешиться раз на 15 с.",
              ],
            },
          },
          {
            id: "US-S003",
            priority: "Should",
            en: {
              title: "Filter and sort the queue",
              userStory: "As an SD, I want filters and sort, so that I can slice the queue quickly.",
              criteria: [
                "A path filter offers All / Test / Portfolio.",
                "A calendar-period filter offers Week / Month / Quarter / All.",
                "Column sort uses ↑↓ indicators on the active column.",
                "A “Clear filters” button is shown when any filter is active.",
              ],
            },
            uk: {
              title: "Фільтри й сортування черги",
              userStory: "Як SD, я хочу фільтри й сортування, щоб швидко зрізати чергу.",
              criteria: [
                "Фільтр шляху: All / Test / Portfolio.",
                "Фільтр періоду: Week / Month / Quarter / All.",
                "Сортування колонок використовує індикатори ↑↓ на активній колонці.",
                "Кнопка «Clear filters» показана, коли активний хоча б один фільтр.",
              ],
            },
          },
          {
            id: "US-S004",
            priority: "Must",
            en: {
              title: "See claim status to avoid duplicate work",
              userStory: "As an SD, I want a claim badge on rows already claimed by another SD, so that I don't waste time reviewing a candidate I can't accept.",
              criteria: [
                "Rows claimed by another reviewer show a “🎯 [name]” badge.",
                "The Review button on such rows is hidden or disabled.",
              ],
            },
            uk: {
              title: "Бейдж claim для уникнення дублів",
              userStory: "Як SD, я хочу бейдж claim на рядках, заклеймлених іншим SD, щоб не марнувати час на кандидата, якого вже не зможу прийняти.",
              criteria: [
                "Рядки, заклеймлені іншим ревьюером, показують бейдж «🎯 [name]».",
                "Кнопка Review на таких рядках прихована або неактивна.",
              ],
            },
          },
          {
            id: "US-S005",
            priority: "Must",
            en: {
              title: "Review a candidate",
              userStory: "As an SD, I want a structured review form, so that my decision is defensible.",
              criteria: [
                "The form shows scoring criteria grouped by video-type category.",
                "Each skill has a 1–5 slider with a rubric tooltip.",
                "An integral score “X.X / 5” is computed as the mean of category means.",
                "A verdict badge updates live (Strong Accept / Accept / Borderline / Weak / Pending).",
                "Per-category breakdown cards show averages and progress bars.",
                "A comments field is required for accept or reject.",
                "A video preview is embedded if a video URL exists.",
              ],
            },
            uk: {
              title: "Розгляд кандидата",
              userStory: "Як SD, я хочу структуровану форму розгляду, щоб рішення було захищеним.",
              criteria: [
                "Форма показує критерії оцінки, згруповані за категорією типу відео.",
                "Кожна навичка — слайдер 1–5 з tooltip-рубрикою.",
                "Інтегральний score «X.X / 5» обчислюється як середнє з середніх категорій.",
                "Verdict-бейдж оновлюється в реальному часі (Strong Accept / Accept / Borderline / Weak / Pending).",
                "Картки розкладки по категоріях показують середні й прогрес-бари.",
                "Поле коментарів обовʼязкове для accept або reject.",
                "Відео-прев’ю вбудовано, якщо є URL.",
              ],
            },
          },
          {
            id: "US-S006",
            priority: "Must",
            en: {
              title: "Accept a candidate",
              userStory: "As an SD, I want an Accept button that handles both with-studio and pool placements, so that I retain optionality.",
              criteria: [
                "A studio picker is shown with the option to leave it blank (distribution pool).",
                "The button is enabled only once at least one skill is scored and the comment field is filled.",
                "The button label adapts to “Accept into [studio]” or “Accept into pool”.",
                "On success a success screen shows a checkmark, the score, and the placement.",
              ],
            },
            uk: {
              title: "Прийняття кандидата",
              userStory: "Як SD, я хочу кнопку Accept, що обробляє і призначення в студію, і pool-розміщення, щоб зберегти опціональність.",
              criteria: [
                "Показано picker студії з опцією залишити порожнім (distribution pool).",
                "Кнопка активна лише коли оцінено ≥1 навичку і заповнено коментар.",
                "Текст кнопки адаптується: «Accept into [studio]» або «Accept into pool».",
                "При успіху екран показує галку, score і розміщення.",
              ],
            },
          },
          {
            id: "US-S007",
            priority: "Should",
            en: {
              title: "Withdraw my own accept",
              userStory: "As an SD, I want a Withdraw button on my accepted candidates, so that I can reverse a placement without nuking the artist.",
              criteria: [
                "The button appears only on rows where I am the claimer.",
                "Confirmation modal explains the artist will return to the distribution pool.",
                "After withdrawal, the artist's user, skills, and profile are preserved; only the studio link is removed.",
              ],
            },
            uk: {
              title: "Відкликання власного accept",
              userStory: "Як SD, я хочу кнопку Withdraw на прийнятих мною кандидатах, щоб скасувати призначення без знищення артиста.",
              criteria: [
                "Кнопка зʼявляється лише на рядках, де claimer — я.",
                "Модалка підтвердження пояснює, що артист повернеться у distribution pool.",
                "Після withdrawal user, skills і profile артиста зберігаються; видаляється лише звʼязок зі студією.",
              ],
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
            priority: "Should",
            en: {
              title: "See an aggregate Studios view",
              userStory: "As an SD, I want an “All Studios” view, so that I get a single command surface.",
              criteria: [
                "Stat cards show counts of studios, projects, artists, and tasks across my scope.",
                "A view toggle exposes List / Kanban / Workload / Manage Team.",
              ],
            },
            uk: {
              title: "Агрегований вигляд Studios",
              userStory: "Як SD, я хочу вигляд «All Studios», щоб мати єдину панель керування.",
              criteria: [
                "Стат-картки показують лічильники студій, проєктів, артистів і задач у моєму скоупі.",
                "Перемикач вигляду: List / Kanban / Workload / Manage Team.",
              ],
            },
          },
          {
            id: "US-S009",
            priority: "Must",
            en: {
              title: "Create a new studio",
              userStory: "As an SD, I want a “+ New Studio” button on the aggregate Studios view, so that I can spin up additional studios.",
              criteria: [
                "The button is visible to PO and SD only.",
                "A modal collects name, colour, optional manager, and director assignment.",
              ],
            },
            uk: {
              title: "Створення нової студії",
              userStory: "Як SD, я хочу кнопку «+ New Studio» на агрегованому вигляді Studios, щоб запускати додаткові студії.",
              criteria: [
                "Кнопка видна лише PO і SD.",
                "Модалка збирає name, colour, опційного manager і призначення director.",
              ],
            },
          },
          {
            id: "US-S010",
            priority: "Must",
            en: {
              title: "Drill into a single studio",
              userStory: "As an SD on a per-studio tab, I want full operational controls, so that I can run that studio.",
              criteria: [
                "The header shows studio name, colour, director, manager, and counts.",
                "Edit and Delete buttons are visible if I am the director (or PO).",
                "Delete shows a confirmation modal; artifacts are preserved on delete.",
                "The same view toggle (List / Kanban / Workload / Manage Team) is available.",
              ],
            },
            uk: {
              title: "Деталізація конкретної студії",
              userStory: "Як SD на вкладці конкретної студії, я хочу повний набір операційних контролів, щоб керувати цією студією.",
              criteria: [
                "Хедер показує studio name, colour, director, manager і лічильники.",
                "Кнопки Edit і Delete видно, якщо я director (або PO).",
                "Delete показує модалку підтвердження; артефакти зберігаються при delete.",
                "Доступний той самий перемикач вигляду (List / Kanban / Workload / Manage Team).",
              ],
            },
          },
          {
            id: "US-S011",
            priority: "Should",
            en: {
              title: "See a kanban across the studio's projects",
              userStory: "As an SD, I want a multi-project kanban, so that I steer work without missing risk.",
              criteria: [
                "Five stages are shown with colour + label + task count.",
                "Red-flagged tasks float to the top of their column.",
                "A project filter dropdown limits the board to one project.",
                "A “Show archived” toggle reveals archived tasks.",
                "A collapsible “💰 Artist payouts” section sits below the board.",
              ],
            },
            uk: {
              title: "Канбан по проєктах студії",
              userStory: "Як SD, я хочу мульти-проєктний канбан, щоб скеровувати роботу, не пропускаючи ризики.",
              criteria: [
                "Пʼять стадій показано з кольором + label + лічильником задач.",
                "Червонопрапорцеві задачі піднімаються догори в колонці.",
                "Dropdown-фільтр проєкту обмежує дошку одним проєктом.",
                "Перемикач «Show archived» розкриває архівні задачі.",
                "Під дошкою — згортувана секція «💰 Artist payouts».",
              ],
            },
          },
          {
            id: "US-S012",
            priority: "Could",
            en: {
              title: "See a workload heatmap",
              userStory: "As an SD, I want a Workload view showing artist availability per period, so that I distribute new projects without overloading anyone.",
              criteria: [
                "A timeline lists artists with their current task load.",
                "Visual cues (colour / opacity) indicate over- or under-capacity.",
              ],
            },
            uk: {
              title: "Heatmap навантаження",
              userStory: "Як SD, я хочу вигляд Workload з доступністю артистів за період, щоб розподіляти нові проєкти без перевантаження.",
              criteria: [
                "Timeline перелічує артистів з поточним навантаженням задач.",
                "Візуальні cues (колір / непрозорість) показують over- або under-capacity.",
              ],
            },
          },
          {
            id: "US-S013",
            priority: "Must",
            en: {
              title: "Manage the team in a studio",
              userStory: "As an SD, I want a Manage Team view with add/remove and evaluator controls, so that I curate the roster.",
              criteria: [
                "A list of artists in the studio is shown with their primary metrics.",
                "An “Add Team Member” button is visible if I have user-creation capability.",
                "An Evaluator toggle is visible on each artist row.",
                "A remove (unlink) action is visible per row with confirmation.",
              ],
            },
            uk: {
              title: "Керування командою студії",
              userStory: "Як SD, я хочу вигляд Manage Team з контролями add/remove і evaluator, щоб курувати склад.",
              criteria: [
                "Показано список артистів студії з основними метриками.",
                "Кнопка «Add Team Member» видна, якщо в мене є capability user-creation.",
                "У кожному рядку артиста — перемикач Evaluator.",
                "Дія remove (unlink) — з підтвердженням, у кожному рядку.",
              ],
            },
          },
        ],
      },
      {
        number: "3.4",
        en: { title: "Project and task management" },
        uk: { title: "Керування проєктами й задачами" },
        stories: [
          {
            id: "US-S014",
            priority: "Must",
            en: {
              title: "Create or edit a project",
              userStory: "As an SD, I want a single form modal covering full project lifecycle, so that the project model fits in one screen.",
              criteria: [
                "Studio picker auto-selects when I have one studio; multi-select for PO.",
                "Name is required text; description is a textarea.",
                "Client name is a free-text field.",
                "G-Drive URL is a URL field with format validation.",
                "Status dropdown offers active / paused / completed / archived.",
                "Artists multi-select shows checkboxes of available artists.",
                "Clients multi-select supports existing emails and new ones (which trigger auto-invite).",
                "Save creates new or patches existing.",
              ],
            },
            uk: {
              title: "Створення / редагування проєкту",
              userStory: "Як SD, я хочу одну модалку форми, що покриває повний життєвий цикл проєкту, щоб модель проєкту вміщалась в один екран.",
              criteria: [
                "Studio picker авто-вибирається при одній студії; PO має multi-select.",
                "Name — обовʼязковий текст; description — textarea.",
                "Client name — поле вільного тексту.",
                "G-Drive URL — URL-поле з валідацією формату.",
                "Status dropdown: active / paused / completed / archived.",
                "Artists multi-select показує чекбокси доступних артистів.",
                "Clients multi-select підтримує існуючі email і нові (які тригерять auto-invite).",
                "Save створює новий або патчить існуючий.",
              ],
            },
          },
          {
            id: "US-S015",
            priority: "Must",
            en: {
              title: "Manage tasks on a board",
              userStory: "As an SD on a project board, I want full task CRUD, so that I run delivery on rhythm.",
              criteria: [
                "Drag-and-drop moves tasks between stages.",
                "An “Add Task” button opens a creation modal.",
                "A type selector covers short / long / editing crossed with easy / medium / hard.",
                "Artist assignment uses a searchable dropdown.",
                "Deadline picker accepts a date and time in the Toronto timezone.",
                "A danger indicator (red glow) appears for overdue or cold tasks.",
                "An archive toggle and a delete action with confirmation are available on task detail.",
              ],
            },
            uk: {
              title: "Керування задачами на дошці",
              userStory: "Як SD на дошці проєкту, я хочу повний task CRUD, щоб тримати delivery в ритмі.",
              criteria: [
                "Drag-and-drop рухає задачі між стадіями.",
                "Кнопка «Add Task» відкриває модалку створення.",
                "Селектор типу: short / long / editing × easy / medium / hard.",
                "Призначення артиста — через searchable dropdown.",
                "Пікер дедлайну приймає дату і час у timezone Toronto.",
                "Danger-індикатор (червоне світіння) — для прострочених або холодних задач.",
                "На деталях задачі — перемикач archive і delete з підтвердженням.",
              ],
            },
          },
          {
            id: "US-S016",
            priority: "Should",
            en: {
              title: "Use the in-project chat sidebar",
              userStory: "As an SD on a project page, I want a slide-in chat sidebar, so that I have a project-scoped channel without switching tabs.",
              criteria: [
                "A chevron toggles the sidebar open and closed.",
                "An unread counter is shown on the chat button.",
                "The message list scrolls; new messages append at the bottom.",
                "Last-read state is tracked per user.",
                "Opening the sidebar marks messages read automatically.",
              ],
            },
            uk: {
              title: "Чат проєкту в сайдбарі",
              userStory: "Як SD на сторінці проєкту, я хочу slide-in сайдбар чату, щоб мати канал у межах проєкту без зміни вкладок.",
              criteria: [
                "Chevron перемикає відкриття/закриття сайдбара.",
                "На кнопці чату — лічильник непрочитаного.",
                "Список повідомлень скролиться; нові додаються знизу.",
                "Стан last-read трекається per user.",
                "Відкриття сайдбара автоматично позначає повідомлення прочитаними.",
              ],
            },
          },
        ],
      },
      {
        number: "3.5",
        en: { title: "Chats" },
        uk: { title: "Чати" },
        stories: [
          {
            id: "US-S017",
            priority: "Should",
            en: {
              title: "Use a full chat hub",
              userStory: "As an SD, I want a ChatHub with rail, view, and thread panel, so that all conversation happens in one surface.",
              criteria: [
                "The channel rail lists channels and DMs with unread badges (muted ones quieted).",
                "A “+” affordance creates a channel; a “Start DM” affordance opens a teammate picker.",
                "A search overlay finds messages within the user's scope.",
                "The thread panel mounts on the right when a thread is opened.",
              ],
            },
            uk: {
              title: "Повноцінний chat hub",
              userStory: "Як SD, я хочу ChatHub з rail, view і thread-панеллю, щоб уся комунікація відбувалась в одному місці.",
              criteria: [
                "Channel rail перелічує канали й DM з бейджами непрочитаного (muted — приглушені).",
                "«+» створює канал; «Start DM» відкриває picker колег.",
                "Search overlay шукає повідомлення в межах user scope.",
                "Thread-панель монтується справа при відкритті thread.",
              ],
            },
          },
          {
            id: "US-S018",
            priority: "Should",
            en: {
              title: "React to realtime chat",
              userStory: "As an SD, I want realtime updates with a fallback, so that I never miss a message because of a transient outage.",
              criteria: [
                "Realtime is backed by a broadcast channel per chat surface.",
                "If realtime drops, the hub polls every 10 seconds.",
                "New messages appear without a manual refresh.",
              ],
            },
            uk: {
              title: "Realtime у чаті",
              userStory: "Як SD, я хочу realtime-оновлення з fallback, щоб не пропускати повідомлення через тимчасові збої.",
              criteria: [
                "Realtime бекендиться broadcast-каналом на кожну chat-surface.",
                "Якщо realtime падає, hub пуллить раз на 10 с.",
                "Нові повідомлення зʼявляються без ручного refresh.",
              ],
            },
          },
          {
            id: "US-S019",
            priority: "Could",
            en: {
              title: "Curate my own messages",
              userStory: "As an SD, I want to edit and delete my own messages, so that I can correct mistakes without admin help.",
              criteria: [
                "I can edit my own messages within 10 minutes of posting.",
                "I can delete my own messages; a tombstone is left in place.",
                "The composer supports `@`-mention autocomplete.",
              ],
            },
            uk: {
              title: "Редагування своїх повідомлень",
              userStory: "Як SD, я хочу редагувати й видаляти власні повідомлення, щоб виправляти помилки без втручання адміна.",
              criteria: [
                "Я можу редагувати власні повідомлення в 10-хвилинному вікні.",
                "Я можу видаляти власні повідомлення; tombstone лишається на місці.",
                "Composer підтримує автокомпліт `@`-mention.",
              ],
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
            priority: "Should",
            en: {
              title: "See the health of my clients",
              userStory: "As an SD, I want a Customer Health tab scoped to my studios, so that I can flag at-risk relationships early.",
              criteria: [
                "A status filter offers All / Red / Yellow / Green / Not started.",
                "Each row shows client name + email + project count + last-contact (days ago or “today”) + studio chips + a “Log →” action.",
                "Rows with only archived projects show an “(all archived)” note.",
                "An empty state reads “No clients in this view”.",
              ],
            },
            uk: {
              title: "Здоровʼя моїх клієнтів",
              userStory: "Як SD, я хочу вкладку Customer Health, обмежену моїми студіями, щоб рано позначати ризикові відносини.",
              criteria: [
                "Фільтр статусу: All / Red / Yellow / Green / Not started.",
                "Кожен рядок показує client name + email + лічильник проєктів + last-contact (днів тому або «today») + чипи студій + дію «Log →».",
                "Рядки з лише архівними проєктами мають нотатку «(all archived)».",
                "Empty state читається як «No clients in this view».",
              ],
            },
          },
          {
            id: "US-S021",
            priority: "Should",
            en: {
              title: "Log a client check-in",
              userStory: "As an SD on a client row, I want a check-in modal, so that I capture qualitative state for future reference.",
              criteria: [
                "A 1–5 emoji scale captures sentiment.",
                "Three textareas capture what's working, what isn't, and the next step.",
                "The submission persists the check-in and updates “last contact” on the row.",
              ],
            },
            uk: {
              title: "Лог check-in з клієнтом",
              userStory: "Як SD у рядку клієнта, я хочу модалку check-in, щоб фіксувати якісний стан для подальшої довідки.",
              criteria: [
                "Шкала 1–5 емодзі фіксує sentiment.",
                "Три textarea фіксують what's working, what isn't, next step.",
                "Submission зберігає check-in і оновлює «last contact» у рядку.",
              ],
            },
          },
        ],
      },
      {
        number: "3.7",
        en: { title: "Orders inbox" },
        uk: { title: "Інбокс замовлень" },
        stories: [
          {
            id: "US-S022",
            priority: "Should",
            en: {
              title: "Triage incoming orders",
              userStory: "As an SD, I want an Orders tab with filters and a card grid, so that I never lose a new deal.",
              criteria: [
                "Filters offer Pending / Accepted / Rejected / All.",
                "Order cards show company + urgency + brief snippet.",
                "A click on the card opens a detail modal with the full structured brief.",
              ],
            },
            uk: {
              title: "Тріаж вхідних замовлень",
              userStory: "Як SD, я хочу вкладку Orders з фільтрами й сіткою карток, щоб не втрачати жоден новий deal.",
              criteria: [
                "Фільтри: Pending / Accepted / Rejected / All.",
                "Картки замовлень показують company + urgency + brief snippet.",
                "Клік по картці відкриває деталь-модалку з повним структурованим брифом.",
              ],
            },
          },
          {
            id: "US-S023",
            priority: "Must",
            en: {
              title: "Accept an order into a studio",
              userStory: "As an SD, I want an Accept flow that converts the order into a project, so that an accepted deal lands in delivery immediately.",
              criteria: [
                "A studio picker shows only studios I direct.",
                "On accept, the order becomes a project + initial task + client link.",
                "An audit row is recorded for the transition.",
              ],
            },
            uk: {
              title: "Прийняття замовлення в студію",
              userStory: "Як SD, я хочу Accept-флоу, що конвертує замовлення в проєкт, щоб прийнятий deal одразу опинявся в delivery.",
              criteria: [
                "Studio picker показує лише студії, якими я керую.",
                "При accept замовлення стає project + первинна task + лінк клієнта.",
                "Записується audit-рядок переходу.",
              ],
            },
          },
          {
            id: "US-S024",
            priority: "Should",
            en: {
              title: "Reject an order with a reason",
              userStory: "As an SD, I want a Reject flow with a reason, so that the client gets clarity.",
              criteria: [
                "A rejection-reason modal collects free text.",
                "An email to the client carries the reason.",
                "The order moves to the Rejected state.",
              ],
            },
            uk: {
              title: "Відхилення замовлення з причиною",
              userStory: "Як SD, я хочу Reject-флоу з причиною, щоб клієнт мав ясність.",
              criteria: [
                "Модалка причини відхилення збирає вільний текст.",
                "Лист клієнту несе цю причину.",
                "Замовлення переходить у стан Rejected.",
              ],
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
            priority: "Should",
            en: {
              title: "See my Slack invite URL (read-only)",
              userStory: "As an SD, I want a Slack invite URL display, so that I know what to share with newly accepted artists.",
              criteria: [
                "The URL is visible in my profile.",
                "The field is read-only with a “Managed by PO” caption.",
                "A freshness badge shows “✓ Fresh”, “⏳ Expires soon”, or “⚠ Expired” based on the expiry date.",
              ],
            },
            uk: {
              title: "Перегляд Slack invite URL (read-only)",
              userStory: "Як SD, я хочу бачити в профілі Slack invite URL, щоб знати, що шерити новим прийнятим артистам.",
              criteria: [
                "URL видно в моєму профілі.",
                "Поле read-only з підписом «Managed by PO».",
                "Freshness-бейдж показує «✓ Fresh», «⏳ Expires soon» або «⚠ Expired» на основі дати закінчення.",
              ],
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
            priority: "Must",
            en: {
              title: "Land on Studios",
              userStory: "As an SM, I want the senior dashboard to default to the Studios tab, so that I focus on project management.",
              criteria: [
                "The Pipeline and Orders tabs are hidden from my AppNav.",
                "The default landing tab is Studios.",
              ],
            },
            uk: {
              title: "Потрапляння на Studios",
              userStory: "Як SM, я хочу, щоб senior dashboard відкривався на вкладці Studios, щоб я фокусувався на project management.",
              criteria: [
                "Вкладки Pipeline і Orders приховані з мого AppNav.",
                "Дефолтна вкладка лендингу — Studios.",
              ],
            },
          },
          {
            id: "US-M002",
            priority: "Should",
            en: {
              title: "See my studio chip",
              userStory: "As an SM with one studio, I want a studio-name pill in the header, so that the context is unambiguous.",
              criteria: [
                "The pill shows the studio name with its colour dot.",
                "Multi-studio SMs see the studio chip for the studio they are currently scoped to.",
              ],
            },
            uk: {
              title: "Чип своєї студії",
              userStory: "Як SM з однією студією, я хочу пілюлю з назвою студії в хедері, щоб контекст був однозначним.",
              criteria: [
                "Пілюля показує назву студії з її кольоровою точкою.",
                "Multi-studio SM бачать чип студії, у скоупі якої вони зараз.",
              ],
            },
          },
          {
            id: "US-M003",
            priority: "Must",
            en: {
              title: "Read-only on artist data",
              userStory: "As an SM, I want the Manage Team view to be read-only, so that I never accidentally mutate roster data.",
              criteria: [
                "Add / remove / edit affordances are hidden in the Manage Team view.",
                "The Evaluator toggle is hidden for SMs.",
              ],
            },
            uk: {
              title: "Read-only по даних артистів",
              userStory: "Як SM, я хочу, щоб вигляд Manage Team був read-only, щоб не міг випадково змінити дані складу.",
              criteria: [
                "Афорданси add / remove / edit приховані у вигляді Manage Team.",
                "Перемикач Evaluator схований для SM.",
              ],
            },
          },
          {
            id: "US-M004",
            priority: "Must",
            en: {
              title: "Same project and task management as SD",
              userStory: "As an SM, I want the same project / task surfaces as the SD, so that I can run delivery autonomously.",
              criteria: [
                "Project create, edit, archive, and delete work the same way.",
                "Task CRUD, drag-and-drop, and chat behave identically to SD.",
              ],
            },
            uk: {
              title: "Те ж керування проєктами/задачами, що й у SD",
              userStory: "Як SM, я хочу ті ж поверхні проєктів / задач, що й у SD, щоб вести delivery самостійно.",
              criteria: [
                "Project create, edit, archive, delete працюють так само.",
                "Task CRUD, drag-and-drop і чат поводяться ідентично до SD.",
              ],
            },
          },
          {
            id: "US-M005",
            priority: "Must",
            en: {
              title: "No pipeline access",
              userStory: "As an SM, I want pipeline access to be hard-blocked, so that the role boundary is enforced.",
              criteria: [
                "The Pipeline tab is absent from my AppNav.",
                "A deep link to Pipeline redirects me to my default landing.",
              ],
            },
            uk: {
              title: "Немає доступу до пайплайну",
              userStory: "Як SM, я хочу, щоб доступ до pipeline був жорстко заблокований, щоб межа ролі була примусовою.",
              criteria: [
                "Вкладка Pipeline відсутня в моєму AppNav.",
                "Deep link на Pipeline перенаправляє мене на дефолтний лендинг.",
              ],
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
            priority: "Should",
            en: {
              title: "Get a Pipeline tab",
              userStory: "As an Artist Evaluator, I want a Pipeline tab on my personal dashboard, so that I can review candidates.",
              criteria: [
                "A Pipeline tab is visible only when the evaluator flag is set on my account.",
                "The tab embeds the full Pipeline panel that SDs see.",
              ],
            },
            uk: {
              title: "Доступ до вкладки Pipeline",
              userStory: "Як Artist Evaluator, я хочу вкладку Pipeline на особистому дашборді, щоб переглядати кандидатів.",
              criteria: [
                "Вкладка Pipeline видна лише коли в моєму акаунті виставлено evaluator-флаг.",
                "Вкладка вбудовує повну панель Pipeline, яку бачать SD.",
              ],
            },
          },
          {
            id: "US-E002",
            priority: "Could",
            en: {
              title: "See an “Evaluator” badge",
              userStory: "As an Artist Evaluator, I want a header badge, so that staff recognise my elevated permissions.",
              criteria: [
                "A blue “Evaluator” badge is visible in my header.",
                "The badge tooltip explains the sub-role briefly.",
              ],
            },
            uk: {
              title: "Бейдж «Evaluator»",
              userStory: "Як Artist Evaluator, я хочу бейдж у хедері, щоб команда розпізнавала підвищені права.",
              criteria: [
                "Синій бейдж «Evaluator» видно в хедері.",
                "Tooltip бейджа коротко пояснює під-роль.",
              ],
            },
          },
          {
            id: "US-E003",
            priority: "Should",
            en: {
              title: "Be turned on or off by an admin",
              userStory: "As a PO or SD, I want to toggle an artist's Evaluator status, so that elevation is deliberate and reversible.",
              criteria: [
                "A toggle button is visible on the artist's team row.",
                "Toggling persists immediately and writes an audit row.",
              ],
            },
            uk: {
              title: "Адмін умикає/вимикає evaluator",
              userStory: "Як PO або SD, я хочу перемикати статус Evaluator артиста, щоб підвищення було усвідомленим і зворотним.",
              criteria: [
                "Кнопка-перемикач видна в рядку команди артиста.",
                "Перемикання зберігається миттєво і пише audit-рядок.",
              ],
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
            priority: "Must",
            en: {
              title: "See the full pipeline",
              userStory: "As a PO, I want the Pipeline tab to show all candidates without studio scope, so that I have unfiltered visibility.",
              criteria: [
                "Stat cards show Total / Pending Review / Decided.",
                "The list shows every candidate regardless of studio claim.",
                "The same path and calendar filters from the SD view are available.",
              ],
            },
            uk: {
              title: "Перегляд повного пайплайну",
              userStory: "Як PO, я хочу, щоб вкладка Pipeline показувала всіх кандидатів без обмеження по студії, щоб мати нефільтровану видимість.",
              criteria: [
                "Стат-картки: Total / Pending Review / Decided.",
                "Список показує кожного кандидата незалежно від studio claim.",
                "Доступні ті самі фільтри path і calendar, що й у SD-вʼю.",
              ],
            },
          },
          {
            id: "US-P002",
            priority: "Must",
            en: {
              title: "Accept any candidate into any studio or none",
              userStory: "As a PO, I want an Accept modal with multi-studio select and the option to leave blank, so that I override any SD constraint.",
              criteria: [
                "The studio picker is multi-select.",
                "Leaving it blank places the candidate into the distribution pool.",
                "A “Public profile” share block appears after accept.",
              ],
            },
            uk: {
              title: "Прийняття будь-якого кандидата в будь-яку студію або pool",
              userStory: "Як PO, я хочу модалку Accept з multi-studio select і опцією залишити порожнім, щоб обходити будь-яке обмеження SD.",
              criteria: [
                "Studio picker — multi-select.",
                "Залишення порожнім розміщує кандидата в distribution pool.",
                "Після accept зʼявляється share-блок «Public profile».",
              ],
            },
          },
          {
            id: "US-P003",
            priority: "Must",
            en: {
              title: "Reject any candidate cleanly",
              userStory: "As a PO, I want a Reject flow with a reason, so that I close the loop irreversibly.",
              criteria: [
                "A confirmation modal collects a reason.",
                "The rejection email carries the reason to the candidate.",
                "Cleanup removes the user, artist skills, and studio links.",
              ],
            },
            uk: {
              title: "Чисте відхилення кандидата",
              userStory: "Як PO, я хочу Reject-флоу з причиною, щоб незворотно закрити цикл.",
              criteria: [
                "Модалка підтвердження збирає причину.",
                "Rejection email передає причину кандидату.",
                "Cleanup видаляє user, artist skills і studio links.",
              ],
            },
          },
          {
            id: "US-P004",
            priority: "Should",
            en: {
              title: "Revoke an acceptance",
              userStory: "As a PO, I want a Revoke button on accepted candidates, so that I can undo a placement without nuking history.",
              criteria: [
                "The button is visible only on candidates currently in “accepted” or “in pool” state.",
                "A confirm modal optionally captures a reason.",
                "After revoke, the candidate returns to the “reviewed” state.",
              ],
            },
            uk: {
              title: "Відкликання прийняття",
              userStory: "Як PO, я хочу кнопку Revoke на прийнятих кандидатах, щоб скасувати призначення без знищення історії.",
              criteria: [
                "Кнопка видна лише на кандидатах у станах «accepted» або «in pool».",
                "Модалка підтвердження опційно збирає причину.",
                "Після revoke кандидат повертається в стан «reviewed».",
              ],
            },
          },
          {
            id: "US-P005",
            priority: "Should",
            en: {
              title: "Bulk-process candidates",
              userStory: "As a PO, I want row checkboxes and a floating action bar, so that I can clear a backlog quickly.",
              criteria: [
                "Row checkboxes are visible on each candidate row.",
                "A header checkbox toggles select-all.",
                "A floating action bar appears when one or more rows are selected.",
                "The bar exposes Bulk Accept, Bulk Reject, Bulk Delete, and Cancel.",
                "A confirm modal shows the action + count + “no-undo” warning.",
                "Bulk delete does not send a rejection email.",
              ],
            },
            uk: {
              title: "Bulk-обробка кандидатів",
              userStory: "Як PO, я хочу чекбокси в рядках і плаваючу action bar, щоб швидко розгрібати беклог.",
              criteria: [
                "Чекбокси видно в кожному рядку кандидата.",
                "Header-чекбокс перемикає select-all.",
                "Плаваюча action bar зʼявляється при виборі одного чи більше рядків.",
                "На bar — Bulk Accept, Bulk Reject, Bulk Delete і Cancel.",
                "Модалка підтвердження показує action + count + «no-undo» попередження.",
                "Bulk delete не надсилає rejection email.",
              ],
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
            priority: "Must",
            en: {
              title: "See and filter the team",
              userStory: "As a PO, I want a Team tab with filters and search, so that I find anyone instantly.",
              criteria: [
                "Role-filter pills include Owners / Directors / Managers / Artists / Clients (plus All).",
                "A Status dropdown offers Active / Inactive / All.",
                "A Studio dropdown filters by studio assignment.",
                "A search box filters by name and email.",
              ],
            },
            uk: {
              title: "Перегляд і фільтр команди",
              userStory: "Як PO, я хочу вкладку Team з фільтрами і пошуком, щоб миттєво знаходити будь-кого.",
              criteria: [
                "Pills фільтра ролей: Owners / Directors / Managers / Artists / Clients (плюс All).",
                "Dropdown Status: Active / Inactive / All.",
                "Dropdown Studio фільтрує по призначенню студії.",
                "Поле пошуку фільтрує по name і email.",
              ],
            },
          },
          {
            id: "US-P007",
            priority: "Must",
            en: {
              title: "See user state at a glance",
              userStory: "As a PO, I want each user row to expose role, state, and studio assignments, so that posture is visible without opening a modal.",
              criteria: [
                "A coloured role badge is shown.",
                "Inactive users get a grey “Inactive” pill and reduced opacity.",
                "Artists with evaluator status get an “Evaluator” pill.",
                "Studio assignments are rendered as colour chips.",
              ],
            },
            uk: {
              title: "Стан користувача з одного погляду",
              userStory: "Як PO, я хочу, щоб кожен рядок користувача показував роль, стан і призначення студій, щоб бачити стан без відкриття модалки.",
              criteria: [
                "Показано кольоровий role-бейдж.",
                "Неактивні користувачі отримують сіру пілюлю «Inactive» і знижену непрозорість.",
                "Артисти з evaluator-статусом отримують пілюлю «Evaluator».",
                "Призначення студій — як кольорові чипи.",
              ],
            },
          },
          {
            id: "US-P008",
            priority: "Must",
            en: {
              title: "Edit a user",
              userStory: "As a PO, I want an Edit User modal exposing multi-role assignment, so that role changes never break referential state.",
              criteria: [
                "Multi-role pills cover SD, SM, and Artist (at least one required).",
                "A yellow warning box explains what each add or remove will do.",
                "Adding the artist role auto-creates a candidate row if needed.",
                "Removing the SD role is blocked when the user directs any studio.",
                "Removing the SM role is blocked when the user manages any studio.",
                "Removing the Artist role is blocked when the user has any artist-studio link.",
              ],
            },
            uk: {
              title: "Редагування користувача",
              userStory: "Як PO, я хочу модалку Edit User з multi-role призначенням, щоб зміна ролей не ламала референційний стан.",
              criteria: [
                "Multi-role pills покривають SD, SM, Artist (хоча б одна обовʼязкова).",
                "Жовтий warning-box пояснює, що зробить add або remove.",
                "Додавання ролі artist авто-створює candidate-рядок, якщо потрібно.",
                "Видалення ролі SD заблоковано, якщо користувач керує хоча б однією студією.",
                "Видалення ролі SM заблоковано, якщо користувач менеджить хоча б одну студію.",
                "Видалення ролі Artist заблоковано, якщо є хоча б один artist-studio link.",
              ],
            },
          },
          {
            id: "US-P009",
            priority: "Must",
            en: {
              title: "Reset a user's password",
              userStory: "As a PO, I want a Reset button per user row, so that I can recover a user without leaking their old password.",
              criteria: [
                "A “🔑 Reset” button is visible per row.",
                "A confirm modal explains the consequences.",
                "On confirm the platform generates a new password, hashes it, emails the user, and shows me a copy-to-clipboard modal.",
                "The copy action uses the Clipboard API with a fallback for older browsers.",
              ],
            },
            uk: {
              title: "Скидання пароля користувача",
              userStory: "Як PO, я хочу кнопку Reset на кожному рядку користувача, щоб відновити користувача без витоку старого паролю.",
              criteria: [
                "Кнопка «🔑 Reset» видна в кожному рядку.",
                "Модалка підтвердження пояснює наслідки.",
                "При confirm платформа генерує новий пароль, хешує його, надсилає email і показує мені copy-to-clipboard модалку.",
                "Copy використовує Clipboard API з fallback для старих браузерів.",
              ],
            },
          },
          {
            id: "US-P010",
            priority: "Must",
            en: {
              title: "Activate or deactivate users",
              userStory: "As a PO, I want a single-click activation toggle, so that I can hide departing users without deleting their history.",
              criteria: [
                "The toggle flips the active flag on the user record.",
                "The change is reflected immediately in role-derived access checks.",
                "An audit row is recorded for each toggle.",
              ],
            },
            uk: {
              title: "Активація / деактивація користувачів",
              userStory: "Як PO, я хочу single-click перемикач активації, щоб ховати тих, що йдуть, без видалення історії.",
              criteria: [
                "Перемикач інвертує active-флаг у записі користувача.",
                "Зміна одразу відбивається в перевірках доступу за ролями.",
                "На кожне перемикання записується audit-рядок.",
              ],
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
            priority: "Must",
            en: {
              title: "See every studio",
              userStory: "As a PO, I want the Studios tab to show every studio, so that I get a god-view.",
              criteria: [
                "An aggregate view stat-cards every studio under the platform.",
                "The same view toggle (List / Kanban / Workload / Manage Team) is available.",
              ],
            },
            uk: {
              title: "Перегляд усіх студій",
              userStory: "Як PO, я хочу, щоб вкладка Studios показувала всі студії, щоб мати god-view.",
              criteria: [
                "Агрегований вигляд показує стат-картки по кожній студії платформи.",
                "Доступний той самий перемикач вигляду (List / Kanban / Workload / Manage Team).",
              ],
            },
          },
          {
            id: "US-P012",
            priority: "Must",
            en: {
              title: "Create studios",
              userStory: "As a PO, I want a New Studio modal with full configuration, so that I can spin up studios independent of any one SD.",
              criteria: [
                "Name and colour are required.",
                "Director picker lists all active SDs and the PO themselves.",
                "Manager picker lists available SMs (those not yet assigned, plus the option of none).",
              ],
            },
            uk: {
              title: "Створення студій",
              userStory: "Як PO, я хочу модалку New Studio з повною конфігурацією, щоб створювати студії незалежно від конкретного SD.",
              criteria: [
                "Name і colour обовʼязкові.",
                "Director picker перелічує всіх активних SD і PO як можливих директорів.",
                "Manager picker перелічує доступних SM (ще не призначених, плюс опція none).",
              ],
            },
          },
          {
            id: "US-P013",
            priority: "Must",
            en: {
              title: "Move artists between studios",
              userStory: "As a PO, I want add/remove affordances per studio, so that I can rebalance rosters.",
              criteria: [
                "The Manage Team view exposes an artist picker for adds.",
                "A per-row unlink button (with confirm) removes artists.",
                "Each change writes an audit row.",
              ],
            },
            uk: {
              title: "Переміщення артистів між студіями",
              userStory: "Як PO, я хочу афорданси add/remove на кожній студії, щоб ребалансувати склади.",
              criteria: [
                "Вигляд Manage Team показує artist picker для додавання.",
                "Per-row кнопка unlink (з підтвердженням) видаляє артистів.",
                "Кожна зміна пише audit-рядок.",
              ],
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
            priority: "Must",
            en: {
              title: "See every order",
              userStory: "As a PO, I want an Orders tab with platform-wide scope, so that I can intercept any deal.",
              criteria: [
                "The same filter pills (Pending / Accepted / Rejected / All) and order detail modal as the SD view are available.",
                "No studio scope is applied.",
              ],
            },
            uk: {
              title: "Перегляд усіх замовлень",
              userStory: "Як PO, я хочу вкладку Orders з platform-wide скоупом, щоб перехоплювати будь-який deal.",
              criteria: [
                "Доступні ті ж pills фільтрів (Pending / Accepted / Rejected / All) і order detail модалка, що і в SD-вʼю.",
                "Без обмеження по студії.",
              ],
            },
          },
          {
            id: "US-P015",
            priority: "Must",
            en: {
              title: "Accept or reject any order",
              userStory: "As a PO, I want Accept and Reject available on any order, so that I'm never blocked by an absent SD.",
              criteria: [
                "Accept opens a studio picker covering all studios.",
                "Reject opens a reason modal.",
                "Each transition records an audit row.",
              ],
            },
            uk: {
              title: "Прийняття або відхилення будь-якого замовлення",
              userStory: "Як PO, я хочу, щоб Accept і Reject були доступні на будь-якому замовленні, щоб мене не блокувала відсутність SD.",
              criteria: [
                "Accept відкриває studio picker, що покриває всі студії.",
                "Reject відкриває модалку причини.",
                "Кожен перехід пише audit-рядок.",
              ],
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
            priority: "Should",
            en: {
              title: "See every client's health",
              userStory: "As a PO, I want the Customer Health tab to show every client, so that I monitor account health platform-wide.",
              criteria: [
                "All filters and the Log Check-in flow available to SDs are also available here.",
                "No studio scope is applied.",
              ],
            },
            uk: {
              title: "Здоровʼя кожного клієнта",
              userStory: "Як PO, я хочу, щоб вкладка Customer Health показувала кожного клієнта, щоб моніторити account health на рівні всієї платформи.",
              criteria: [
                "Доступні всі фільтри й флоу Log Check-in, які бачать SD.",
                "Без обмеження по студії.",
              ],
            },
          },
        ],
      },
      {
        number: "6.6",
        en: { title: "Settings and test assignments" },
        uk: { title: "Налаштування і test assignments" },
        stories: [
          {
            id: "US-P017",
            priority: "Must",
            en: {
              title: "Manage test assignments",
              userStory: "As a PO, I want a Settings tab to manage test templates, so that I can update tests without a deploy.",
              criteria: [
                "A list of test assignments is shown as cards.",
                "A “+ New Test Assignment” button opens a creation modal.",
                "Each card shows name + description + brief URL + skill weights + actions.",
                "An inactive test renders with an “Inactive” pill and reduced opacity.",
                "Edit, Delete, and Activate/Deactivate actions are available per card.",
              ],
            },
            uk: {
              title: "Керування test assignments",
              userStory: "Як PO, я хочу вкладку Settings для керування тестовими шаблонами, щоб оновлювати тести без деплоя.",
              criteria: [
                "Список test assignments показано як картки.",
                "Кнопка «+ New Test Assignment» відкриває модалку створення.",
                "Кожна картка показує name + description + brief URL + skill weights + actions.",
                "Неактивний тест має пілюлю «Inactive» і знижену непрозорість.",
                "На кожній картці доступні Edit, Delete, Activate/Deactivate.",
              ],
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
            priority: "Should",
            en: {
              title: "See every audit event",
              userStory: "As a PO, I want an Activity tab with filters, so that I can investigate any incident.",
              criteria: [
                "Category checkboxes filter by event group.",
                "An actor filter selects events by user.",
                "A date-range filter offers 24h / 7d / 30d / All.",
                "A “Clear filters” button resets the view.",
              ],
            },
            uk: {
              title: "Перегляд усіх аудит-подій",
              userStory: "Як PO, я хочу вкладку Activity з фільтрами, щоб розслідувати будь-який інцидент.",
              criteria: [
                "Чекбокси категорій фільтрують по групі подій.",
                "Фільтр actor вибирає події по користувачу.",
                "Фільтр date-range: 24h / 7d / 30d / All.",
                "Кнопка «Clear filters» скидає вʼю.",
              ],
            },
          },
          {
            id: "US-P019",
            priority: "Should",
            en: {
              title: "See each event with full context",
              userStory: "As a PO, I want each Activity row to read like a sentence, so that I never have to decode logs.",
              criteria: [
                "Each row shows actor name + role + category icon + label + target + relative timestamp + details.",
                "Timestamps display as “Xs/Xm/Xh/Xd ago” with an absolute tooltip on hover.",
              ],
            },
            uk: {
              title: "Подія з повним контекстом",
              userStory: "Як PO, я хочу, щоб кожен рядок Activity читався як речення, щоб не доводилося декодувати логи.",
              criteria: [
                "Кожен рядок показує actor name + role + іконку категорії + label + target + відносний timestamp + details.",
                "Timestamp показує «Xs/Xm/Xh/Xd ago» з абсолютним tooltip на hover.",
              ],
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
            priority: "Should",
            en: {
              title: "Triage feedback",
              userStory: "As a PO, I want a Feedback tab with categories and a stage kanban, so that I never lose user feedback.",
              criteria: [
                "A category filter offers All / Bug / Feature / Other.",
                "Three stage columns (New / In Progress / Done) show counts in the header.",
                "Each card shows category + title + message + author + actions.",
                "Single-card stage moves and deletes are available.",
                "Bulk-select via checkboxes enables bulk stage moves and bulk delete with confirmation.",
              ],
            },
            uk: {
              title: "Тріаж фідбеку",
              userStory: "Як PO, я хочу вкладку Feedback з категоріями й канбаном стадій, щоб не втрачати фідбек.",
              criteria: [
                "Фільтр категорії: All / Bug / Feature / Other.",
                "Три стадії-колонки (New / In Progress / Done) з лічильниками в хедері.",
                "Кожна картка показує category + title + message + author + actions.",
                "Доступні single-card переміщення між стадіями й delete.",
                "Bulk-select через чекбокси умикає bulk stage moves і bulk delete з підтвердженням.",
              ],
            },
          },
          {
            id: "US-P021",
            priority: "Could",
            en: {
              title: "See unread feedback count",
              userStory: "As a PO, I want a red badge on the Admin nav pill, so that I check the inbox proactively.",
              criteria: [
                "The badge appears when one or more feedback items are in the “New” stage.",
                "Clicking through the badge opens the Feedback tab.",
              ],
            },
            uk: {
              title: "Лічильник непрочитаного фідбеку",
              userStory: "Як PO, я хочу червоний бейдж на пілюлі Admin у nav, щоб перевіряти інбокс проактивно.",
              criteria: [
                "Бейдж зʼявляється, коли в стадії «New» є хоча б один елемент фідбеку.",
                "Клік по бейджу відкриває вкладку Feedback.",
              ],
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
            priority: "Should",
            en: {
              title: "Distribute a newly accepted artist",
              userStory: "As a PO on a candidate detail page after acceptance, I want a share block, so that distribution to SDs is a one-click action.",
              criteria: [
                "A “Copy URL” button writes the public profile URL to the clipboard (with fallback).",
                "A “Copy Slack Message” button writes a formatted announcement (name + top 3 skills + URL).",
                "An “Open” button opens the public profile in a new tab.",
              ],
            },
            uk: {
              title: "Дистрибуція щойно прийнятого артиста",
              userStory: "Як PO на сторінці деталей кандидата після прийняття, я хочу share-блок, щоб дистрибуція по SD була в один клік.",
              criteria: [
                "Кнопка «Copy URL» пише public profile URL у clipboard (з fallback).",
                "Кнопка «Copy Slack Message» пише форматований анонс (name + top 3 skills + URL).",
                "Кнопка «Open» відкриває публічний профіль у новій вкладці.",
              ],
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
            priority: "Should",
            en: {
              title: "Set the platform-wide Slack URL",
              userStory: "As a PO, I want my profile to expose the master Slack URL, so that artists always get a working invite in their welcome email.",
              criteria: [
                "A Slack invite URL field is present in my profile.",
                "An expiry date field is present alongside the URL.",
                "A freshness badge displays Fresh / Expires soon / Expired based on the expiry.",
                "Saving cascades the URL to all SDs as a read-only display.",
              ],
            },
            uk: {
              title: "Slack URL на рівні платформи",
              userStory: "Як PO, я хочу, щоб у моєму профілі був master Slack URL, щоб артисти завжди отримували робочий invite у welcome email.",
              criteria: [
                "У моєму профілі присутнє поле Slack invite URL.",
                "Поряд із URL — поле expiry date.",
                "Бейдж свіжості показує Fresh / Expires soon / Expired на основі expiry.",
                "Save каскадно показує URL усім SD як read-only.",
              ],
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
            priority: "Could",
            en: {
              title: "Read every channel",
              userStory: "As a PO, I want full chat access, so that I can audit comms when investigating an issue.",
              criteria: [
                "The channel rail shows every channel and DM on the platform.",
                "Create / edit / delete / mention / mute affordances behave the same as for SD.",
              ],
            },
            uk: {
              title: "Перегляд усіх каналів",
              userStory: "Як PO, я хочу повний доступ до чату, щоб аудитувати комунікації при розслідуванні.",
              criteria: [
                "Channel rail показує кожен канал і DM на платформі.",
                "Афорданси create / edit / delete / mention / mute поводяться так само, як у SD.",
              ],
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
            priority: "Must",
            en: {
              title: "Sign in",
              userStory: "As a client, I want to sign in and land on the client portal, so that my entry point is unambiguous.",
              criteria: [
                "The login form sends me to the client portal after authentication.",
                "Wrong credentials show an inline red error.",
              ],
            },
            uk: {
              title: "Вхід",
              userStory: "Як клієнт, я хочу увійти й опинитися в клієнтському порталі, щоб точка входу була однозначною.",
              criteria: [
                "Форма логіну веде в клієнтський портал після автентифікації.",
                "Неправильні дані показують inline червону помилку.",
              ],
            },
          },
          {
            id: "US-C002",
            priority: "Must",
            en: {
              title: "Be blocked when deactivated",
              userStory: "As a deactivated client account, I want every protected route to reject me, so that revoked access works immediately.",
              criteria: [
                "Authentication still succeeds at the form, but all protected routes return access denied.",
                "The user is redirected away from the portal with a clear message.",
              ],
            },
            uk: {
              title: "Блок при деактивації",
              userStory: "Як деактивований клієнтський акаунт, я хочу, щоб кожен protected-маршрут відмовляв, щоб скасоване право діяло одразу.",
              criteria: [
                "Автентифікація на формі все одно проходить, але всі protected-маршрути повертають access denied.",
                "Користувача редіректить геть із порталу з чітким повідомленням.",
              ],
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
            priority: "Must",
            en: {
              title: "See my projects",
              userStory: "As a client, I want a card grid of my projects, so that I see every commission at a glance.",
              criteria: [
                "Each card shows status chip, active task count, studio-colour left border, mention dot, and activity dot.",
                "An empty state with an icon and onboarding message is shown when I have no projects.",
                "A logout button is visible in the header.",
              ],
            },
            uk: {
              title: "Перегляд моїх проєктів",
              userStory: "Як клієнт, я хочу сітку карток моїх проєктів, щоб бачити всі замовлення з одного погляду.",
              criteria: [
                "Кожна картка показує чип статусу, лічильник активних задач, ліву смугу кольору студії, mention dot і activity dot.",
                "Empty state з іконкою й onboarding-повідомленням показано, коли проєктів немає.",
                "У хедері — кнопка logout.",
              ],
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
            priority: "Must",
            en: {
              title: "Read the project board",
              userStory: "As a client on a project page, I want the kanban as read-only, so that I can follow delivery without touching it.",
              criteria: [
                "All five stages are visible with their badges.",
                "Cards are not draggable.",
                "Links inside task descriptions are clickable previews.",
              ],
            },
            uk: {
              title: "Перегляд дошки проєкту",
              userStory: "Як клієнт на сторінці проєкту, я хочу канбан як read-only, щоб слідкувати за delivery без втручання.",
              criteria: [
                "Усі пʼять стадій видно з їх бейджами.",
                "Картки не перетягуються.",
                "Лінки в описі задач — клікабельні previews.",
              ],
            },
          },
          {
            id: "US-C005",
            priority: "Must",
            en: {
              title: "See only the right financials",
              userStory: "As a client, I want internal margins hidden, so that staff numbers stay internal.",
              criteria: [
                "The client fee is shown as “Fee”.",
                "The artist fee is not rendered anywhere visible to me.",
                "Artist names and assignments are anonymised on cards.",
              ],
            },
            uk: {
              title: "Тільки релевантні фінанси",
              userStory: "Як клієнт, я хочу, щоб внутрішні маржі були сховані, щоб командні цифри лишалися внутрішніми.",
              criteria: [
                "Client fee показано як «Fee».",
                "Artist fee не рендериться ніде, де його видно мені.",
                "Імена артистів і призначення анонімізовані на картках.",
              ],
            },
          },
          {
            id: "US-C006",
            priority: "Should",
            en: {
              title: "Comment on my projects",
              userStory: "As a client, I want a comment composer on tasks, so that I provide feedback inside the platform.",
              criteria: [
                "The composer supports `@`-mentions of staff.",
                "Submitting a comment posts it and notifies the assigned staff.",
                "I can read all comments on tasks linked to my projects.",
              ],
            },
            uk: {
              title: "Коментування моїх проєктів",
              userStory: "Як клієнт, я хочу composer коментарів на задачах, щоб давати фідбек усередині платформи.",
              criteria: [
                "Composer підтримує `@`-mentions команди.",
                "Submit коментаря публікує його і сповіщає призначеного співробітника.",
                "Я можу читати всі коментарі на задачах, повʼязаних з моїми проєктами.",
              ],
            },
          },
          {
            id: "US-C007",
            priority: "Should",
            en: {
              title: "Use the project chat sidebar",
              userStory: "As a client, I want the same chat sidebar staff see, scoped to my project, so that conversation has one home.",
              criteria: [
                "Open/close, read/unread tracking, and message composer behave the same as for staff.",
                "Markup and `@`-mentions work identically.",
              ],
            },
            uk: {
              title: "Чат проєкту в сайдбарі",
              userStory: "Як клієнт, я хочу той самий сайдбар чату, що й команда, обмежений моїм проєктом, щоб уся комунікація мала один дім.",
              criteria: [
                "Open/close, трекінг read/unread і composer повідомлень працюють так само, як у команди.",
                "Розмітка й `@`-mentions працюють ідентично.",
              ],
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
            priority: "Must",
            en: {
              title: "Get an email when a task moves stage",
              userStory: "As a client linked to a project, I want an email when any task moves stage, so that I know when to log in for review.",
              criteria: [
                "An email is sent when a task moves to rough_cut, fine_cut, final_cut, or approved.",
                "An in-app activity row is created for the same event.",
                "An audit row marks the notification as sent.",
              ],
            },
            uk: {
              title: "Email при зміні стадії задачі",
              userStory: "Як клієнт, повʼязаний з проєктом, я хочу email при будь-якій зміні стадії, щоб знати, коли заходити на review.",
              criteria: [
                "Email надсилається при переході задачі в rough_cut, fine_cut, final_cut або approved.",
                "Створюється in-app activity row для тієї ж події.",
                "Audit row фіксує, що сповіщення надіслане.",
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
            priority: "Must",
            en: {
              title: "Get my account auto-created on order accept",
              userStory: "As a person who submitted an order brief, I want an account auto-created on accept, so that I land in the client portal without manual signup.",
              criteria: [
                "The platform generates a 12-character alphanumeric password and stores it hashed.",
                "A welcome email carries my login details.",
                "A project link is created automatically as part of accept.",
                "An email collision with an existing artist or staff account is rejected with a clear admin-side error.",
              ],
            },
            uk: {
              title: "Авто-створення акаунта при прийнятті замовлення",
              userStory: "Як людина, що подала order-бриф, я хочу, щоб акаунт автоматично створювався при accept, щоб потрапляти в клієнтський портал без ручної реєстрації.",
              criteria: [
                "Платформа генерує 12-символьний alphanumeric пароль і зберігає його хешованим.",
                "Welcome email несе мої дані для логіну.",
                "При accept автоматично створюється project link.",
                "Колізія email з існуючим artist/staff акаунтом відхиляється з чіткою admin-side помилкою.",
              ],
            },
          },
          {
            id: "US-C010",
            priority: "Should",
            en: {
              title: "Be added to additional projects later",
              userStory: "As an existing client, I want to be invited to additional projects by email, so that one account covers all my work.",
              criteria: [
                "The project edit form accepts new client emails as a multi-select.",
                "Existing clients are reused (no new account is created).",
                "The welcome email for a reused account explains they've been added to an additional project.",
              ],
            },
            uk: {
              title: "Додавання до інших проєктів пізніше",
              userStory: "Як наявний клієнт, я хочу запрошення до інших проєктів через email, щоб один акаунт покривав усю мою роботу.",
              criteria: [
                "Форма редагування проєкту приймає нові email клієнтів як multi-select.",
                "Існуючі клієнти перевикористовуються (новий акаунт не створюється).",
                "Welcome email для перевикористаного акаунта пояснює, що клієнта додано до іншого проєкту.",
              ],
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
        en: { title: "Authentication and session" },
        uk: { title: "Автентифікація і сесії" },
        stories: [
          {
            id: "US-X001",
            priority: "Must",
            en: {
              title: "Cookie-based session",
              userStory: "As any user, I want my session held in an httpOnly cookie, so that no front-end script can leak it.",
              criteria: [
                "The session cookie is httpOnly and same-site Lax.",
                "The cookie payload is signed and cannot be tampered with client-side.",
                "An expired cookie redirects to the login form transparently.",
              ],
            },
            uk: {
              title: "Cookie-based сесія",
              userStory: "Як будь-який користувач, я хочу, щоб сесія зберігалась у httpOnly cookie, щоб ніякий front-end скрипт її не витяг.",
              criteria: [
                "Cookie сесії httpOnly і same-site Lax.",
                "Payload cookie підписаний і не піддається підробці на клієнті.",
                "Прострочений cookie прозоро редіректить на форму логіну.",
              ],
            },
          },
          {
            id: "US-X002",
            priority: "Must",
            en: {
              title: "Password hashing",
              userStory: "As any user, I want passwords hashed at rest, so that no plaintext leaks even on database exfiltration.",
              criteria: [
                "Passwords are hashed via the platform's secure RPC using pgcrypto.",
                "Salt is unique per password.",
                "The hash function is not exposed via any public API.",
              ],
            },
            uk: {
              title: "Хешування паролів",
              userStory: "Як будь-який користувач, я хочу, щоб паролі хешувалися at rest, щоб у разі витоку БД не йшов plaintext.",
              criteria: [
                "Паролі хешуються через secure RPC платформи з pgcrypto.",
                "Salt унікальний на кожен пароль.",
                "Функція хешу не виставлена через жоден публічний API.",
              ],
            },
          },
          {
            id: "US-X003",
            priority: "Should",
            en: {
              title: "Self-service password reset",
              userStory: "As any user, I want a self-service reset that doesn't reveal whether the email exists, so that the recovery flow is safe.",
              criteria: [
                "The endpoint always returns success regardless of whether the email matches an account.",
                "A new password is emailed only when the email matches.",
                "A reset audit row is recorded only on real resets.",
              ],
            },
            uk: {
              title: "Самостійний reset паролю",
              userStory: "Як будь-який користувач, я хочу self-service reset, що не розкриває існування email, щоб флоу відновлення був безпечним.",
              criteria: [
                "Endpoint завжди повертає success незалежно від збігу email.",
                "Новий пароль надсилається тільки при реальному збігу.",
                "Reset audit row пишеться тільки на реальних reset.",
              ],
            },
          },
          {
            id: "US-X004",
            priority: "Must",
            en: {
              title: "Scope built from data, not flags",
              userStory: "As any user, I want my permissions computed from my actual connections, so that data and access never drift apart.",
              criteria: [
                "The scope endpoint returns my union of director, manager, artist, project, task, candidate, and client connections.",
                "Adding a new connection updates my scope on the next request.",
                "Removing a connection drops the related access on the next request.",
              ],
            },
            uk: {
              title: "Scope з даних, а не з флагів",
              userStory: "Як будь-який користувач, я хочу, щоб мої права обчислювались з фактичних звʼязків, щоб дані й доступ ніколи не розʼїжджалися.",
              criteria: [
                "Scope endpoint повертає обʼєднання моїх звʼязків director, manager, artist, project, task, candidate, client.",
                "Додавання нового звʼязку оновлює scope на наступному запиті.",
                "Видалення звʼязку забирає відповідний доступ на наступному запиті.",
              ],
            },
          },
          {
            id: "US-X005",
            priority: "Must",
            en: {
              title: "Deactivation drops scope",
              userStory: "As any deactivated user, I want my access wiped on every protected route, so that access revocation is instant.",
              criteria: [
                "An inactive account's scope is empty regardless of its connections.",
                "Protected routes return access denied for inactive accounts.",
                "Reactivation restores the scope on the next request.",
              ],
            },
            uk: {
              title: "Деактивація обнулює scope",
              userStory: "Як деактивований користувач, я хочу, щоб мій доступ зачищався на кожному protected-маршруті, щоб скасування доступу було миттєвим.",
              criteria: [
                "Scope неактивного акаунта порожній незалежно від звʼязків.",
                "Protected-маршрути повертають access denied для неактивних акаунтів.",
                "Реактивація відновлює scope на наступному запиті.",
              ],
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
            priority: "Should",
            en: {
              title: "Every consequential action is audited",
              userStory: "As a PO, I want every meaningful action logged with full context, so that the Activity feed is a complete forensic record.",
              criteria: [
                "An audit row is written for each of the 32+ event types (candidate / artist / user / studio / project / client / task / customer / order categories).",
                "Each row carries actor name + actor role + target type + target id + name + details object.",
                "Rows are append-only; no UI exposes edit or delete.",
              ],
            },
            uk: {
              title: "Кожна важлива дія в аудиті",
              userStory: "Як PO, я хочу, щоб кожна значуща дія логувалась з повним контекстом, щоб Activity feed був повним forensic-записом.",
              criteria: [
                "Audit row пишеться для кожного з 32+ типів подій (категорії candidate / artist / user / studio / project / client / task / customer / order).",
                "Кожен рядок несе actor name + actor role + target type + target id + name + details обʼєкт.",
                "Рядки append-only; жоден UI не дає edit або delete.",
              ],
            },
          },
          {
            id: "US-X007",
            priority: "Should",
            en: {
              title: "Audit failures don't block the call",
              userStory: "As an API consumer, I want audit log failures to be silent, so that observability has no impact on user-visible behaviour.",
              criteria: [
                "A failure to write an audit row is logged to the server log but never raised to the API caller.",
                "The primary action completes regardless of audit status.",
              ],
            },
            uk: {
              title: "Збої аудиту не блокують виклик",
              userStory: "Як споживач API, я хочу, щоб збої audit log були тихими, щоб observability не впливала на user-facing поведінку.",
              criteria: [
                "Збій запису audit row логується в server log, але ніколи не піднімається API-caller-у.",
                "Основна дія завершується незалежно від стану аудиту.",
              ],
            },
          },
        ],
      },
      {
        number: "8.3",
        en: { title: "Email and in-app notifications" },
        uk: { title: "Email і in-app сповіщення" },
        stories: [
          {
            id: "US-X008",
            priority: "Must",
            en: {
              title: "Send the right email at the right moment",
              userStory: "As a notification consumer, I want each of the 25 templates fired only by its specific trigger, so that I never get spam.",
              criteria: [
                "Each template (application received, video submitted, review complete, decision variants, reminder, welcome, password reset, withdrawal/re-acceptance, client invite, order events, stage changed, generic) has a single trigger code path.",
                "Triggers do not fire on duplicate state transitions (e.g. an already-accepted candidate re-accept does not send a second welcome).",
                "All emails carry consistent branding and include an unsubscribe footer.",
              ],
            },
            uk: {
              title: "Правильний email у правильний момент",
              userStory: "Як споживач сповіщень, я хочу, щоб кожен з 25 шаблонів запускався лише своїм тригером, щоб не отримувати спам.",
              criteria: [
                "Кожен шаблон (application received, video submitted, review complete, варіанти decision, reminder, welcome, password reset, withdrawal/re-acceptance, client invite, order events, stage changed, generic) має єдиний trigger code path.",
                "Тригери не спрацьовують на дублі переходів стану (напр. повторне accept уже прийнятого кандидата не надсилає другий welcome).",
                "Усі листи несуть консистентний брендинг і unsubscribe footer.",
              ],
            },
          },
          {
            id: "US-X009",
            priority: "Should",
            en: {
              title: "Send all email through one adapter",
              userStory: "As an operator, I want all outbound mail to go through a single dispatcher, so that retries, failures, and logs are centralised.",
              criteria: [
                "All transactional emails are sent via the Brevo SMTP integration.",
                "A single adapter function is the only path for outbound mail.",
                "Failures are logged with subject, recipient, and error code.",
              ],
            },
            uk: {
              title: "Усі листи через один адаптер",
              userStory: "Як оператор, я хочу, щоб увесь outbound mail ішов через єдиний dispatcher, щоб ретраї, збої й логи були централізовані.",
              criteria: [
                "Усі транзакційні листи надсилаються через інтеграцію Brevo SMTP.",
                "Єдина адаптер-функція — єдиний шлях для outbound mail.",
                "Збої логуються з subject, recipient і error code.",
              ],
            },
          },
          {
            id: "US-X010",
            priority: "Should",
            en: {
              title: "Unsubscribe from any category",
              userStory: "As any user, I want a per-category unsubscribe, so that I have granular control.",
              criteria: [
                "Every transactional email includes a one-click unsubscribe link with a signed token.",
                "The link toggles the category off in my profile preferences.",
                "A confirmation page acknowledges the change without revealing other categories.",
              ],
            },
            uk: {
              title: "Unsubscribe з будь-якої категорії",
              userStory: "Як будь-який користувач, я хочу per-category unsubscribe, щоб мати гранулярний контроль.",
              criteria: [
                "Кожен транзакційний email містить one-click unsubscribe лінк з підписаним токеном.",
                "Лінк вимикає категорію в моїх preferences.",
                "Сторінка підтвердження визнає зміну без розкриття інших категорій.",
              ],
            },
          },
          {
            id: "US-X011",
            priority: "Should",
            en: {
              title: "Persist in-app notifications",
              userStory: "As any user, I want every notification dispatch to also write an in-app row, so that the Activity Center has parity with my inbox.",
              criteria: [
                "An in-app notification row is created at the same moment as the email send.",
                "The row records the event type, target, and unread state.",
                "Reading the row (or its target) clears the unread state.",
              ],
            },
            uk: {
              title: "Збереження in-app сповіщень",
              userStory: "Як будь-який користувач, я хочу, щоб кожне сповіщення також писало in-app рядок, щоб Activity Center був у паритеті з інбоксом.",
              criteria: [
                "In-app notification row створюється в той самий момент, що email send.",
                "Рядок фіксує event type, target і стан unread.",
                "Прочитання рядка (або його target) очищає стан unread.",
              ],
            },
          },
          {
            id: "US-X012",
            priority: "Should",
            en: {
              title: "Schedule deadline reminders",
              userStory: "As an operator, I want scheduled reminder emails, so that artists don't miss task deadlines.",
              criteria: [
                "A scheduled job runs on a cron schedule.",
                "The job sends a reminder email for each task whose deadline falls inside a configured window.",
                "Each reminder records an audit row.",
              ],
            },
            uk: {
              title: "Cron-нагадування про дедлайни",
              userStory: "Як оператор, я хочу заплановані reminder email, щоб артисти не пропускали дедлайни задач.",
              criteria: [
                "Scheduled job працює за cron-розкладом.",
                "Job надсилає reminder email на кожну задачу, у якої дедлайн потрапляє в налаштоване вікно.",
                "Кожен reminder пише audit row.",
              ],
            },
          },
          {
            id: "US-X013",
            priority: "Should",
            en: {
              title: "Route mentions to the mentioned user",
              userStory: "As any user, I want a mention of me to enqueue a notification, so that I never miss being pinged.",
              criteria: [
                "Mentions parsed from comments and chat messages route to the mentioned user-id.",
                "The mention triggers email + in-app notification + (if available) push.",
              ],
            },
            uk: {
              title: "Маршрутизація mentions до користувача",
              userStory: "Як будь-який користувач, я хочу, щоб згадка мене ставила сповіщення в чергу, щоб я не пропускав пінг.",
              criteria: [
                "Mentions, розпарсені з коментарів і чат-повідомлень, маршрутизуються на згаданий user-id.",
                "Mention тригерить email + in-app сповіщення + (за наявності) push.",
              ],
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
            priority: "Should",
            en: {
              title: "Auto-post new-artist distribution to Slack",
              userStory: "As a PO, I want the platform to ping Slack when an artist submits their distribution profile for the first time, so that the team learns about new talent immediately.",
              criteria: [
                "On the first submit, the platform posts to the configured Slack webhook.",
                "The message includes a channel ping, the artist name, top 3 skills, and the public profile URL.",
                "The dispatcher retries once on a 5xx response and times out at 5 seconds.",
                "Subsequent re-submissions do not re-fire the post (avoids spam).",
                "Slack success or failure is recorded in the audit details for the submit event.",
              ],
            },
            uk: {
              title: "Авто-постинг дистрибуції нового артиста в Slack",
              userStory: "Як PO, я хочу, щоб платформа пінгала Slack, коли артист уперше подає distribution-профіль, щоб команда одразу дізнавалась про нові таланти.",
              criteria: [
                "При першому submit платформа постить у налаштований Slack webhook.",
                "Повідомлення містить channel ping, імʼя артиста, top 3 скіли й public profile URL.",
                "Dispatcher повторює один раз на 5xx і таймаутиться на 5 секундах.",
                "Наступні re-submissions не повторюють post (без спаму).",
                "Slack success або failure пишеться в audit details події submit.",
              ],
            },
          },
        ],
      },
      {
        number: "8.5",
        en: { title: "Anti-abuse and rate limiting" },
        uk: { title: "Anti-abuse і rate limiting" },
        stories: [
          {
            id: "US-X015",
            priority: "Must",
            en: {
              title: "Block bots on public forms",
              userStory: "As an operator, I want anti-bot checks on public forms, so that the public funnels survive scraping.",
              criteria: [
                "Apply, portfolio submit, and order submit all render an anti-bot check when configured.",
                "The server independently verifies the anti-bot token.",
                "A missing or invalid token returns a 400 with a clear error message.",
              ],
            },
            uk: {
              title: "Блок ботів на публічних формах",
              userStory: "Як оператор, я хочу anti-bot перевірки на публічних формах, щоб публічні воронки витримували скрейпінг.",
              criteria: [
                "Apply, portfolio submit і order submit рендерять anti-bot перевірку, коли налаштовано.",
                "Сервер незалежно верифікує anti-bot токен.",
                "Відсутній або невалідний токен повертає 400 з чітким повідомленням.",
              ],
            },
          },
          {
            id: "US-X016",
            priority: "Must",
            en: {
              title: "Rate-limit the order chat",
              userStory: "As an operator, I want the order chat capped per session and per IP, so that we don't pay for runaway AI usage.",
              criteria: [
                "Each session is capped at 30 turns.",
                "Each IP is capped at 60 messages per rolling hour.",
                "Both buckets survive warm instances.",
                "Hitting either cap returns a 429 with a friendly message.",
              ],
            },
            uk: {
              title: "Rate-limit для order chat",
              userStory: "Як оператор, я хочу, щоб order chat був обмежений per session і per IP, щоб не платити за runaway AI.",
              criteria: [
                "Кожна сесія обмежена 30 turns.",
                "Кожен IP обмежений 60 повідомленнями за rolling hour.",
                "Обидва bucket виживають теплі інстанси.",
                "Перевищення будь-якого ліміту повертає 429 з дружнім повідомленням.",
              ],
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
            priority: "Could",
            en: {
              title: "Register a push token",
              userStory: "As a mobile artist, I want my push token registered on login, so that pushes reach the right device.",
              criteria: [
                "The token is sent to the platform on login.",
                "The platform upserts the token with a last-seen timestamp.",
                "Token refresh on app cold start updates last-seen.",
              ],
            },
            uk: {
              title: "Реєстрація push token",
              userStory: "Як мобільний артист, я хочу, щоб мій push token реєструвався при логіні, щоб push потрапляли на правильний пристрій.",
              criteria: [
                "Token надсилається в платформу при логіні.",
                "Платформа upsert-ить token з last-seen timestamp.",
                "Refresh token на app cold start оновлює last-seen.",
              ],
            },
          },
          {
            id: "US-X018",
            priority: "Could",
            en: {
              title: "Mute pushes per-device or globally",
              userStory: "As a mobile user, I want a mute dialog with per-device or global options, so that I control notifications.",
              criteria: [
                "The mute dialog accepts an ISO timestamp (mute-until) or a “forever” sentinel.",
                "The mute scope is either the current device or the user's entire account.",
                "Muted devices are skipped at dispatch time.",
              ],
            },
            uk: {
              title: "Mute push per-device або глобально",
              userStory: "Як мобільний користувач, я хочу mute-діалог з per-device або глобальною опцією, щоб контролювати сповіщення.",
              criteria: [
                "Mute-діалог приймає ISO timestamp (mute-until) або sentinel «forever».",
                "Скоуп mute — поточний пристрій або весь акаунт користувача.",
                "Замʼючені пристрої пропускаються на dispatch.",
              ],
            },
          },
          {
            id: "US-X019",
            priority: "Could",
            en: {
              title: "Dispatch pushes alongside other channels",
              userStory: "As a notification consumer, I want pushes sent automatically with my emails and in-app rows, so that mobile is a first-class channel.",
              criteria: [
                "The notification dispatcher iterates over all non-muted push tokens for the recipient.",
                "A failed push send is logged but does not block the other channels.",
              ],
            },
            uk: {
              title: "Push разом з іншими каналами",
              userStory: "Як споживач сповіщень, я хочу, щоб push надсилались автоматично з email і in-app рядками, щоб мобільний канал був першокласним.",
              criteria: [
                "Notification dispatcher ітерує по всіх неzamute-ваних push token отримувача.",
                "Збій push send логується, але не блокує інші канали.",
              ],
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
            priority: "Should",
            en: {
              title: "Submit feedback from anywhere",
              userStory: "As any authenticated user, I want a floating bubble for feedback, so that I can report bugs instantly.",
              criteria: [
                "A floating bottom-right button is visible on all authenticated pages.",
                "The bubble is hidden on public surfaces (apply, login, root).",
                "Clicking the bubble opens a form with category picker and textarea.",
                "The textarea enforces a 2000-character limit with a live counter.",
                "Submission requires a category + non-empty text.",
                "A submitted feedback item is persisted with user + category + text.",
              ],
            },
            uk: {
              title: "Фідбек звідусіль",
              userStory: "Як будь-який авторизований користувач, я хочу плаваючий bubble для фідбеку, щоб миттєво репортити баги.",
              criteria: [
                "Плаваюча кнопка внизу справа видна на всіх authenticated сторінках.",
                "Bubble прихований на публічних поверхнях (apply, login, root).",
                "Клік по bubble відкриває форму з picker категорії й textarea.",
                "Textarea має ліміт 2000 символів з live counter.",
                "Submission вимагає категорію + непорожній текст.",
                "Надісланий feedback зберігається з user + category + text.",
              ],
            },
          },
        ],
      },
      {
        number: "8.8",
        en: { title: "Skill and taxonomy infrastructure" },
        uk: { title: "Інфраструктура навичок і таксономії" },
        stories: [
          {
            id: "US-X021",
            priority: "Must",
            en: {
              title: "Maintain two skill models without conflation",
              userStory: "As a developer, I want the intake and master skill models kept separate, so that intake stays simple while master coverage stays comprehensive.",
              criteria: [
                "The intake (25 skills, 1–10) and master (52 skills, 1–10) taxonomies are stored in separate tables.",
                "The matcher reads both and produces blended scores.",
                "Updating one taxonomy never silently modifies the other.",
              ],
            },
            uk: {
              title: "Дві моделі навичок без змішування",
              userStory: "Як розробник, я хочу, щоб intake і master моделі навичок зберігалися окремо, щоб intake лишався простим, а master coverage — повним.",
              criteria: [
                "Таксономії intake (25 навичок, 1–10) і master (52 навички, 1–10) зберігаються в окремих таблицях.",
                "Matcher читає обидві й видає blended scores.",
                "Оновлення однієї таксономії ніколи мовчки не модифікує іншу.",
              ],
            },
          },
          {
            id: "US-X022",
            priority: "Should",
            en: {
              title: "Define a centralized video-type taxonomy",
              userStory: "As a product owner, I want one source-of-truth for video types, so that buckets don't drift between intake, profile, and matchers.",
              criteria: [
                "A central data file defines categorized video types.",
                "Intake, profile, and matcher views read this file (no hard-coded duplicates).",
                "Adding a new type requires editing only this file.",
              ],
            },
            uk: {
              title: "Централізована таксономія типів відео",
              userStory: "Як product owner, я хочу єдине джерело правди для типів відео, щоб бакети не розʼїжджалися між intake, profile й matcher.",
              criteria: [
                "Центральний data-файл визначає категоризовані типи відео.",
                "Intake, profile й matcher читають цей файл (без hard-coded дублікатів).",
                "Додавання нового типу вимагає правок лише в цьому файлі.",
              ],
            },
          },
          {
            id: "US-X023",
            priority: "Should",
            en: {
              title: "Match candidates to tests with AI",
              userStory: "As an SD, I want an AI matcher to rank tests for a given candidate, so that the most relevant brief is served first.",
              criteria: [
                "The matcher takes a candidate's preferences and intake skills as input.",
                "It returns a ranked list of active test assignments with fit scores.",
                "The ranking explanation is exposed for debugging.",
              ],
            },
            uk: {
              title: "AI-матчинг кандидатів з тестами",
              userStory: "Як SD, я хочу AI-matcher, що ранжує тести під кандидата, щоб найрелевантніший бриф пропонувався першим.",
              criteria: [
                "Matcher приймає на вхід преференції й intake-навички кандидата.",
                "Повертає ранжований список активних test assignments з fit scores.",
                "Пояснення ранжування виставлене для дебагу.",
              ],
            },
          },
          {
            id: "US-X024",
            priority: "Could",
            en: {
              title: "Match orders to artists with AI",
              userStory: "As an SD reviewing an order, I want an AI matcher to rank artists by fit, so that staffing suggestions are explainable.",
              criteria: [
                "The matcher takes the structured order brief as input.",
                "It returns a ranked list of available artists with fit scores.",
                "The ranking explanation is exposed for debugging.",
              ],
            },
            uk: {
              title: "AI-матчинг замовлень з артистами",
              userStory: "Як SD, що переглядає замовлення, я хочу AI-matcher, що ранжує артистів за відповідністю, щоб пропозиції staffing були пояснюваними.",
              criteria: [
                "Matcher приймає на вхід структурований order brief.",
                "Повертає ранжований список доступних артистів з fit scores.",
                "Пояснення ранжування виставлене для дебагу.",
              ],
            },
          },
        ],
      },
      {
        number: "8.9",
        en: { title: "Public API surface (no auth)" },
        uk: { title: "Public API (без авторизації)" },
        stories: [
          {
            id: "US-X025",
            priority: "Should",
            en: {
              title: "Read a public artist profile via no-auth endpoint",
              userStory: "As any consumer, I want a read-only public profile endpoint, so that artist links can be shared anywhere.",
              criteria: [
                "The endpoint returns rating, coverage, last updated, studios, projects, profile, preferences, and master skills.",
                "Access is granted when the backing account is active OR the candidate decision is “accepted”.",
                "Inactive/rejected candidates return a 404.",
              ],
            },
            uk: {
              title: "Читання публічного профілю артиста (no-auth)",
              userStory: "Як будь-який споживач, я хочу read-only endpoint публічного профілю, щоб лінки на артистів можна було шерити будь-де.",
              criteria: [
                "Endpoint повертає rating, coverage, last updated, studios, projects, profile, preferences, master skills.",
                "Доступ надається, коли backing account активний АБО candidate decision = «accepted».",
                "Неактивні/відхилені кандидати повертають 404.",
              ],
            },
          },
        ],
      },
      {
        number: "8.10",
        en: { title: "Brand kit and watermark tooling" },
        uk: { title: "Брендинг і watermark-інструменти" },
        stories: [
          {
            id: "US-X026",
            priority: "Could",
            en: {
              title: "Generate watermark overlays",
              userStory: "As an operator, I want a script to produce watermark overlays in standard aspect ratios, so that delivered videos can be watermarked consistently off-platform.",
              criteria: [
                "The script produces 16:9, 9:16, and 1:1 ProRes-4444 alpha .mov outputs.",
                "An environment variable controls opacity.",
                "An optional flag also emits MP4 preview encodes.",
              ],
            },
            uk: {
              title: "Генерація watermark-оверлеїв",
              userStory: "Як оператор, я хочу скрипт для генерації watermark-оверлеїв у стандартних співвідношеннях, щоб готові відео можна було брендувати поза платформою консистентно.",
              criteria: [
                "Скрипт продукує 16:9, 9:16 і 1:1 ProRes-4444 alpha .mov.",
                "Environment variable контролює opacity.",
                "Опційний прапорець ще видає MP4 preview-енкоди.",
              ],
            },
          },
        ],
      },
      {
        number: "8.11",
        en: { title: "Hosting and observability" },
        uk: { title: "Хостинг і observability" },
        stories: [
          {
            id: "US-X027",
            priority: "Must",
            en: {
              title: "Auto-deploy on push to main",
              userStory: "As a developer, I want every push to main to trigger a production deploy, so that production stays in lockstep with the trunk.",
              criteria: [
                "The hosting provider auto-builds on push to main.",
                "Build failures alert the team via the hosting provider's notifications.",
                "A failed build does not affect the previous live deployment.",
              ],
            },
            uk: {
              title: "Авто-деплой при push у main",
              userStory: "Як розробник, я хочу, щоб кожен push у main тригерив production-деплой, щоб продакшен ішов у ногу з trunk.",
              criteria: [
                "Hosting-провайдер авто-білдить на push у main.",
                "Збої білда сповіщають команду через нотифікації провайдера.",
                "Зламаний білд не впливає на попередній live-деплой.",
              ],
            },
          },
          {
            id: "US-X028",
            priority: "Could",
            en: {
              title: "Track page-level engagement",
              userStory: "As a PO, I want analytics and web-vitals wired in, so that I have engagement data without a separate tool.",
              criteria: [
                "Analytics and speed-insights instrumentation are in the root layout.",
                "Per-page engagement and core web vitals are visible in the hosting dashboard.",
              ],
            },
            uk: {
              title: "Трек page-level engagement",
              userStory: "Як PO, я хочу проводку analytics і web-vitals, щоб мати engagement-дані без окремого інструмента.",
              criteria: [
                "Інструменти analytics і speed-insights — у root layout.",
                "Per-page engagement і core web vitals видно в дашборді хостингу.",
              ],
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
            priority: "Should",
            en: {
              title: "Run unit and API tests",
              userStory: "As a developer, I want tests against a dedicated test schema, so that I can verify logic without polluting production data.",
              criteria: [
                "Unit tests live in the unit folder and run via the test runner.",
                "API tests live in the api folder, use the same runner, and target a dedicated test schema.",
                "The test setup refuses to run if pointed at the production schema.",
              ],
            },
            uk: {
              title: "Unit і API тести",
              userStory: "Як розробник, я хочу тести проти окремої тестової схеми, щоб перевіряти логіку без забруднення продакшен-даних.",
              criteria: [
                "Unit-тести лежать у unit-папці й запускаються через test runner.",
                "API-тести лежать у api-папці, використовують той самий runner і таргетять окрему тестову схему.",
                "Setup тестів відмовляється запускатись, якщо вказаний на продакшен-схему.",
              ],
            },
          },
          {
            id: "US-X030",
            priority: "Could",
            en: {
              title: "Run end-to-end tests",
              userStory: "As a developer, I want E2E tests in real browsers, so that critical user journeys are exercised end-to-end.",
              criteria: [
                "E2E specs live in the e2e folder.",
                "The test runner spins up a dedicated dev server on a non-production port.",
                "The runs target the same test schema as the API tests.",
              ],
            },
            uk: {
              title: "End-to-end тести",
              userStory: "Як розробник, я хочу E2E тести в реальних браузерах, щоб критичні юзер-флоу прокатувались end-to-end.",
              criteria: [
                "E2E-специ лежать у e2e-папці.",
                "Test runner піднімає окремий dev-сервер на не-продакшен порту.",
                "Прогони таргетять ту саму тестову схему, що й API-тести.",
              ],
            },
          },
        ],
      },
    ],
  },
];

export const data: UserStoriesData = { meta, sections };
