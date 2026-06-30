import type {
  Epic,
  UserStoriesData,
  UserStoriesMeta,
} from "./userStoriesTypes";

export const meta: UserStoriesMeta = {
  intro: {
    en: "User stories per INVEST · Prioritization per MoSCoW",
    uk: "Юзер стори за INVEST · Пріоритизація за MoSCoW",
  },
  legend: {
    en: "MUST — without this the module cannot ship. SHOULD — high value, target for v1.1. COULD — nice-to-have, safe to defer. Won't (this time) — items intentionally out of scope; listed at the end.",
    uk: "MUST — без цього модуль не виходить у прод. SHOULD — висока цінність, ціль на v1.1. COULD — приємно мати, безпечно відкласти. Won't (this time) — навмисно поза скоупом; перелічено в кінці.",
  },
  personas: {
    en: [
      { name: "Doctor", description: "Family physician using the registry between consultations; primary user." },
      { name: "Practice owner", description: "Senior partner who shares the instance with another doctor and controls tenant + cost boundaries." },
      { name: "Nurse", description: "Runs intake screening (WHO 4-symptom questionnaire) and vaccinations." },
      { name: "Stakeholder", description: "Receives the weekly digest by email; does not log in." },
    ],
    uk: [
      { name: "Лікар", description: "Сімейний лікар, що користується реєстром між консультаціями; основний користувач." },
      { name: "Власник практики", description: "Старший партнер, що ділить інстанс з іншим лікарем і контролює межі tenant + витрат." },
      { name: "Медсестра", description: "Веде скринінг (анкета ВООЗ-4) і вакцинації." },
      { name: "Отримувач дайджесту", description: "Отримує тижневий дайджест на email; не логиниться в систему." },
    ],
  },
};

export const epics: Epic[] = [
  {
    number: 1,
    en: { title: "Authentication & tenant isolation" },
    uk: { title: "Автентифікація і ізоляція tenant-ів" },
    stories: [
      {
        id: "US-1.1",
        priority: "Must",
        en: {
          title: "PIN login",
          userStory: "As a family doctor, I want to sign in by entering a short numeric PIN, so that I can access the registry quickly between consultations without typing email/password.",
          criteria: [
            "A valid PIN (4–12 digits) lands me on the Dashboard.",
            "An invalid PIN shows an error and does not create a session.",
            "Repeated failed attempts from one IP are throttled (HTTP 429).",
            "An expired or missing session cookie redirects any protected route to `/login`.",
          ],
        },
        uk: {
          title: "Вхід за PIN",
          userStory: "Як сімейний лікар, я хочу заходити коротким числовим PIN, щоб швидко відкривати реєстр між консультаціями без введення email/паролю.",
          criteria: [
            "Валідний PIN (4–12 цифр) веде на дашборд.",
            "Невалідний PIN показує помилку і не створює сесію.",
            "Повторні невдалі спроби з одного IP тротлятся (HTTP 429).",
            "Прострочена або відсутня cookie сесії редіректить будь-який protected-маршрут на `/login`.",
          ],
        },
      },
      {
        id: "US-1.2",
        priority: "Must",
        en: {
          title: "Multi-doctor data isolation",
          userStory: "As a practice owner sharing the instance with another doctor, I want each doctor to only see their own patients, sync jobs, imports, and indicators, so that registries do not leak across tenants.",
          criteria: [
            "Doctor A's patients never appear in Doctor B's lists, dashboards, or exports.",
            "Doctor B cannot read, update, or delete Doctor A's records via any URL or API call.",
            "Audit log entries stay attached to the acting doctor's id.",
          ],
        },
        uk: {
          title: "Ізоляція даних між лікарями",
          userStory: "Як власник практики, що ділить інстанс з іншим лікарем, я хочу, щоб кожен лікар бачив лише своїх пацієнтів, sync-задачі, імпорти й індикатори, щоб реєстри не текли між tenant-ами.",
          criteria: [
            "Пацієнти лікаря A ніколи не зʼявляються у списках, дашбордах чи експортах лікаря B.",
            "Лікар B не може читати, оновлювати чи видаляти записи лікаря A через жоден URL або API-виклик.",
            "Записи аудит-логу прикріплені до id лікаря, який діяв.",
          ],
        },
      },
      {
        id: "US-1.3",
        priority: "Must",
        en: {
          title: "Logout",
          userStory: "As a doctor, I want a one-click logout, so that I can hand off a shared laptop without leaving my session open.",
          criteria: ["Clicking «Вийти» clears the session cookie and redirects to `/login`."],
        },
        uk: {
          title: "Вихід із системи",
          userStory: "Як лікар, я хочу logout в один клік, щоб передати спільний ноутбук, не залишаючи відкритої сесії.",
          criteria: ["Клік «Вийти» очищає cookie сесії й редіректить на `/login`."],
        },
      },
    ],
  },
  {
    number: 2,
    en: { title: "Dashboard" },
    uk: { title: "Дашборд" },
    stories: [
      {
        id: "US-2.1",
        priority: "Must",
        en: {
          title: "At-a-glance counts",
          userStory: "As a doctor opening the app for the day, I want counts of overdue, this-week, next-30-days, detected, and contacts-without-fluoro patients on one screen, so that I know what needs attention before drilling into the registry.",
          criteria: [
            "Each tile shows a current number and a clear urgency colour.",
            "Clicking a tile opens the patients list with the matching filter pre-applied.",
            "Tiles refresh when I return to the dashboard from another page.",
          ],
        },
        uk: {
          title: "Лічильники з одного погляду",
          userStory: "Як лікар, що відкриває застосунок зранку, я хочу бачити на одному екрані кількість прострочених, на цьому тижні, на найближчі 30 днів, виявлених і контактних без флюоро, щоб знати, що потребує уваги, до того як заходити в реєстр.",
          criteria: [
            "Кожен tile показує поточну цифру і чіткий колір терміновості.",
            "Клік по tile відкриває список пацієнтів із застосованим фільтром.",
            "Tiles рефрешаться при поверненні на дашборд з іншої сторінки.",
          ],
        },
      },
      {
        id: "US-2.2",
        priority: "Should",
        en: {
          title: "Registry freshness banner",
          userStory: "As a doctor, I want to see how long ago the registry was last imported from the EHR, so that I notice when the data is stale before acting on it.",
          criteria: [
            "A «Останній імпорт декларантів» card shows relative time.",
            "If the last import is older than 35 days, the card displays a warning state.",
          ],
        },
        uk: {
          title: "Банер свіжості реєстру",
          userStory: "Як лікар, я хочу бачити, скільки часу тому реєстр востаннє імпортувався з МІС, щоб помічати застарілість даних, перш ніж на них діяти.",
          criteria: [
            "Картка «Останній імпорт декларантів» показує відносний час.",
            "Якщо останній імпорт старший за 35 днів, картка показує warning-стан.",
          ],
        },
      },
    ],
  },
  {
    number: 3,
    en: { title: "Patient registry" },
    uk: { title: "Реєстр пацієнтів" },
    stories: [
      {
        id: "US-3.1",
        priority: "Must",
        en: {
          title: "Searchable patient list",
          userStory: "As a doctor, I want to search and filter the registry by name, external patient ID, clinic, village, TB status, risk groups, declarant status, fluoro status, and sync freshness, so that I can isolate any cohort I need.",
          criteria: [
            "Filters compose (e.g. village + risk group narrow simultaneously).",
            "Each active filter appears as a removable chip; «Clear all» resets the view.",
            "Free-text search matches surname, first name, patronymic, and external patient ID.",
            "Toggling «Show archived» includes/excludes archived patients.",
          ],
        },
        uk: {
          title: "Пошук і фільтр реєстру",
          userStory: "Як лікар, я хочу шукати і фільтрувати реєстр за іменем, зовнішнім ID пацієнта, клінікою, селом, статусом ТБ, групами ризику, статусом декларанта, статусом флюоро й свіжістю синку, щоб ізолювати будь-яку когорту.",
          criteria: [
            "Фільтри композуються (напр. село + група ризику звужують одночасно).",
            "Кожен активний фільтр — як знімана пілюля; «Clear all» скидає вʼю.",
            "Free-text пошук матчить прізвище, імʼя, по батькові і зовнішній ID пацієнта.",
            "Перемикач «Show archived» додає/виключає архівних пацієнтів.",
          ],
        },
      },
      {
        id: "US-3.2",
        priority: "Should",
        en: {
          title: "Visual urgency cues in the row",
          userStory: "As a doctor scanning the table, I want rows coloured by urgency (overdue=red, this week=orange, next 30 days=cyan, detected=yellow), so that I can triage without reading dates.",
          criteria: [
            "The left border colour of each row reflects the highest urgency that applies.",
            "The «Next» date column also colours its text consistently.",
          ],
        },
        uk: {
          title: "Кольорові сигнали терміновості в рядку",
          userStory: "Як лікар, що скролить таблицю, я хочу, щоб рядки фарбувались за терміновістю (прострочено=червоний, цього тижня=помаранчевий, найближчі 30 днів=cyan, виявлений=жовтий), щоб тріажити без читання дат.",
          criteria: [
            "Колір лівої межі рядка відображає найвищу застосовну терміновість.",
            "Колонка «Next date» фарбує текст консистентно.",
          ],
        },
      },
      {
        id: "US-3.3",
        priority: "Should",
        en: {
          title: "Copy patient ID to clipboard",
          userStory: "As a doctor needing to paste a patient ID into the EHR, I want to copy it with one click directly from the row, so that I don't open the patient card just for that.",
          criteria: [
            "Clicking the patient ID cell copies the value and shows a brief «✓».",
            "The click does not navigate into the patient card.",
          ],
        },
        uk: {
          title: "Копіювання ID пацієнта",
          userStory: "Як лікар, якому треба вставити ID пацієнта в МІС, я хочу копіювати його в один клік прямо з рядка, щоб не відкривати картку лише заради цього.",
          criteria: [
            "Клік по комірці ID копіює значення і показує коротке «✓».",
            "Клік не переходить у картку пацієнта.",
          ],
        },
      },
      {
        id: "US-3.4",
        priority: "Should",
        en: {
          title: "Risk group tooltips",
          userStory: "As a doctor, I want to hover risk-group badges and see the underlying diagnoses + dates, so that I understand WHY a patient is flagged without leaving the list.",
          criteria: [
            "Hovering a medical risk group shows the source ICPC-2 / МКХ-10 codes and dates.",
            "Tooltip dismisses on pointer-leave.",
          ],
        },
        uk: {
          title: "Tooltip групи ризику",
          userStory: "Як лікар, я хочу наводитися на бейджі груп ризику і бачити підставові діагнози + дати, щоб розуміти ЧОМУ пацієнта позначено, не виходячи зі списку.",
          criteria: [
            "Hover по медичній групі ризику показує джерельні коди ICPC-2 / МКХ-10 і дати.",
            "Tooltip ховається на pointer-leave.",
          ],
        },
      },
      {
        id: "US-3.5",
        priority: "Must",
        en: {
          title: "Export filtered list to XLSX",
          userStory: "As a doctor preparing a report, I want to export the currently filtered/searched list to Excel, so that I can share or attach it.",
          criteria: [
            "The downloaded file contains only rows that match the active filters.",
            "The filename encodes the filter context and the date.",
          ],
        },
        uk: {
          title: "Експорт відфільтрованого списку в XLSX",
          userStory: "Як лікар, що готує звіт, я хочу експортувати поточно відфільтрований список у Excel, щоб ділитися або прикріплювати.",
          criteria: [
            "Завантажений файл містить лише рядки, що збігаються з активними фільтрами.",
            "Імʼя файлу кодує контекст фільтра і дату.",
          ],
        },
      },
      {
        id: "US-3.6",
        priority: "Could",
        en: {
          title: "Export NSZU report",
          userStory: "As a doctor submitting required reporting, I want a one-click «Export for report» that produces the dataset in the format the regional center expects, so that I do not reformat manually.",
          criteria: ["The exported file conforms to the agreed reporting schema."],
        },
        uk: {
          title: "Експорт звіту для НСЗУ",
          userStory: "Як лікар, що подає обовʼязкову звітність, я хочу кнопку «Export for report», що видає датасет у форматі, який очікує регіональний центр, щоб не переформатовувати вручну.",
          criteria: ["Експортований файл відповідає узгодженій схемі звіту."],
        },
      },
    ],
  },
  {
    number: 4,
    en: { title: "Patient card" },
    uk: { title: "Картка пацієнта" },
    stories: [
      {
        id: "US-4.1",
        priority: "Must",
        en: {
          title: "Inline edit of profile fields",
          userStory: "As a doctor updating a patient, I want to click any profile field and edit in place, so that updates are faster than opening modals.",
          criteria: [
            "Clicking a field turns it into an input; Enter or blur saves, Esc cancels.",
            "A save failure rolls back to the previous value with an error toast.",
            "Other tabs in my browser reflect the change within seconds (Realtime).",
          ],
        },
        uk: {
          title: "Inline-редагування полів профілю",
          userStory: "Як лікар, що оновлює пацієнта, я хочу клікати по будь-якому полю і редагувати на місці, щоб оновлення були швидшими за відкриття модалок.",
          criteria: [
            "Клік перетворює поле на input; Enter або blur зберігає, Esc скасовує.",
            "Збій збереження повертає попереднє значення з error toast.",
            "Інші вкладки браузера відбивають зміну за секунди (Realtime).",
          ],
        },
      },
      {
        id: "US-4.2",
        priority: "Should",
        en: {
          title: "Patient delete",
          userStory: "As a doctor handling a duplicate entry, I want to delete a patient record with a confirmation step, so that I cannot remove someone by accident.",
          criteria: [
            "Clicking «Видалити пацієнта» requires explicit confirmation.",
            "Deletion cascades to that patient's tests, vaccinations, contacts.",
          ],
        },
        uk: {
          title: "Видалення пацієнта",
          userStory: "Як лікар, що працює з дублікатом запису, я хочу видаляти запис пацієнта з підтвердженням, щоб не прибрати когось випадково.",
          criteria: [
            "Клік «Видалити пацієнта» вимагає явного підтвердження.",
            "Видалення каскадно прибирає аналізи, вакцинації, контакти цього пацієнта.",
          ],
        },
      },
      {
        id: "US-4.3",
        priority: "Must",
        en: {
          title: "Risk group editing",
          userStory: "As a doctor, I want to manually toggle medical and social risk groups on a patient, so that I can override or supplement the EHR-derived list.",
          criteria: [
            "Toggling a checkbox persists immediately.",
            "TB status auto-flips between `risk` and `cleared` when group set becomes empty/non-empty.",
            "Manually-set social groups are never removed by a later EHR sync.",
          ],
        },
        uk: {
          title: "Редагування груп ризику",
          userStory: "Як лікар, я хочу вручну перемикати медичні і соціальні групи ризику пацієнта, щоб перевизначати чи доповнювати список, отриманий з МІС.",
          criteria: [
            "Перемикання чекбокса зберігається миттєво.",
            "Статус ТБ авто-перемикається між `risk` і `cleared`, коли набір груп стає порожнім/непорожнім.",
            "Вручну виставлені соціальні групи ніколи не прибираються наступним синком з МІС.",
          ],
        },
      },
      {
        id: "US-4.4",
        priority: "Must",
        en: {
          title: "Fluorography records CRUD",
          userStory: "As a doctor, I want to add, edit, and delete chest X-ray records for a patient, so that their fluoro history is complete and accurate.",
          criteria: [
            "Add form requires date and result code.",
            "Edit and delete are available per row.",
            "The patient's `last_fluoro_date` and `next_planned_date` reflect the most recent record.",
          ],
        },
        uk: {
          title: "CRUD записів флюорографії",
          userStory: "Як лікар, я хочу додавати, редагувати і видаляти записи R-ОГК пацієнта, щоб історія флюоро була повною і точною.",
          criteria: [
            "Форма add вимагає дату і код результату.",
            "Edit і delete доступні per row.",
            "`last_fluoro_date` і `next_planned_date` пацієнта відображають найсвіжіший запис.",
          ],
        },
      },
      {
        id: "US-4.5",
        priority: "Must",
        en: {
          title: "Sputum & Quantiferon records CRUD",
          userStory: "As a doctor, I want the same add/edit/delete capability for sputum tests and Quantiferon results, so that all TB-relevant lab work is in one card.",
          criteria: ["Each tab has its own table and add modal with the appropriate fields."],
        },
        uk: {
          title: "CRUD аналізів мокротиння і Quantiferon",
          userStory: "Як лікар, я хочу таку ж add/edit/delete можливість для аналізів мокротиння і Quantiferon, щоб уся ТБ-релевантна лабораторія була в одній картці.",
          criteria: ["Кожна вкладка має власну таблицю і add-модалку з відповідними полями."],
        },
      },
      {
        id: "US-4.6",
        priority: "Must",
        en: {
          title: "ADP-M vaccination records CRUD",
          userStory: "As a doctor, I want to record ADP-M vaccinations, contraindications, and refusals (with photo proof) per patient, so that I can defend the registry on audit.",
          criteria: [
            "Adding a vaccination accepts date, vaccine, manufacturer, lot.",
            "Marking refusal requires a refusal date and uploaded photo.",
            "Contraindication and refusal flags are mutually exclusive.",
          ],
        },
        uk: {
          title: "CRUD вакцинацій АДП-М",
          userStory: "Як лікар, я хочу фіксувати вакцинації АДП-М, протипоказання і відмови (з фото-доказом) на пацієнта, щоб захистити реєстр на аудиті.",
          criteria: [
            "Додавання вакцинації приймає дату, вакцину, виробника, серію.",
            "Позначка відмови вимагає дати відмови і завантаженого фото.",
            "Прапорці протипоказання й відмови взаємно виключні.",
          ],
        },
      },
      {
        id: "US-4.7",
        priority: "Should",
        en: {
          title: "Manage close contacts",
          userStory: "As a doctor treating a TB-detected patient, I want to add close contacts directly from the patient card, so that they are auto-enrolled with «Close contact» group + «В групі ризику» status.",
          criteria: [
            "The contacts tab is visible for `detected` or `previously_treated` patients.",
            "Adding a contact creates a patient record linked back via `contact_of`.",
          ],
        },
        uk: {
          title: "Керування контактними",
          userStory: "Як лікар, що лікує виявленого ТБ пацієнта, я хочу додавати контактних прямо з картки, щоб їх авто-зараховувало з групою «Close contact» + статусом «В групі ризику».",
          criteria: [
            "Вкладка контактних видна для пацієнтів `detected` або `previously_treated`.",
            "Додавання контакту створює запис пацієнта зі звʼязком `contact_of` назад.",
          ],
        },
      },
      {
        id: "US-4.8",
        priority: "Should",
        en: {
          title: "Print referral / X-ray order",
          userStory: "As a doctor, I want to print a referral to a TB specialist or an R-ОГК request from a completed questionnaire, so that the patient leaves with a signed paper.",
          criteria: [
            "A print view contains patient details, basis (symptoms + history), clinical statement, and signature lines.",
            "The print stylesheet renders cleanly on A4 without sidebar/chrome.",
          ],
        },
        uk: {
          title: "Друк направлення до фтизіатра / на R-ОГК",
          userStory: "Як лікар, я хочу друкувати направлення до фтизіатра або на R-ОГК з заповненої анкети, щоб пацієнт йшов з підписаним папером.",
          criteria: [
            "Print-вʼю містить деталі пацієнта, підставу (симптоми + анамнез), клінічне формулювання і місця для підписів.",
            "Print stylesheet чисто рендериться на A4 без sidebar/chrome.",
          ],
        },
      },
    ],
  },
  {
    number: 5,
    en: { title: "WHO 4-symptom questionnaire" },
    uk: { title: "Анкета ВООЗ-4 симптом" },
    stories: [
      {
        id: "US-5.1",
        priority: "Must",
        en: {
          title: "Fill questionnaire",
          userStory: "As a doctor or nurse, I want a guided form for the WHO 4-symptom TB screen, so that I can complete it during a 5-minute visit and get a recommended action.",
          criteria: [
            "I can declare whether the doctor, nurse, or patient is filling it.",
            "I can attach it to a registry patient or submit anonymously.",
            "As I check symptoms, the recommended action (Low risk / Needs X-ray / Needs referral) updates live.",
            "Saving the form persists all fields and the computed result.",
          ],
        },
        uk: {
          title: "Заповнення анкети",
          userStory: "Як лікар або медсестра, я хочу guided-форму для скринінгу ВООЗ-4 симптом, щоб завершити її за 5-хвилинний візит і отримати рекомендовану дію.",
          criteria: [
            "Я можу вказати, хто заповнює: лікар, медсестра чи пацієнт.",
            "Я можу прикріпити анкету до пацієнта реєстру або подати анонімно.",
            "При відмітці симптомів рекомендована дія (Low risk / Needs X-ray / Needs referral) оновлюється в реальному часі.",
            "Save зберігає всі поля і обчислений результат.",
          ],
        },
      },
      {
        id: "US-5.2",
        priority: "Should",
        en: {
          title: "Questionnaire history per patient",
          userStory: "As a doctor, I want every prior questionnaire visible from the patient card, so that I can compare trends.",
          criteria: ["The «Опитувальники» tab lists every form with date, filler, and result badge."],
        },
        uk: {
          title: "Історія анкет на пацієнта",
          userStory: "Як лікар, я хочу бачити в картці пацієнта кожну попередню анкету, щоб порівнювати тренди.",
          criteria: ["Вкладка «Опитувальники» перелічує кожну форму з датою, ким заповнено і result-бейджем."],
        },
      },
      {
        id: "US-5.3",
        priority: "Should",
        en: {
          title: "Questionnaire list with filter",
          userStory: "As a doctor reviewing screenings, I want the practice-wide questionnaire list filterable by result, so that I can focus on positives.",
          criteria: [
            "A dropdown filters by result category.",
            "Each row links to patient card (or marks anonymously).",
          ],
        },
        uk: {
          title: "Список анкет з фільтром",
          userStory: "Як лікар, що переглядає скринінги, я хочу список анкет по практиці з фільтром за результатом, щоб фокусуватись на позитивах.",
          criteria: [
            "Dropdown фільтрує за категорією результату.",
            "Кожен рядок веде в картку пацієнта (або позначається анонімним).",
          ],
        },
      },
    ],
  },
  {
    number: 6,
    en: { title: "Vaccinations view" },
    uk: { title: "Вʼю вакцинацій" },
    stories: [
      {
        id: "US-6.1",
        priority: "Should",
        en: {
          title: "Dedicated ADP-M tracking page",
          userStory: "As a doctor planning revaccinations, I want a view that shows only ADP-M status (overdue / this year / pending / vaccinated / contraindicated / refused) with the same filtering power as the registry, so that I can plan a vaccination week.",
          criteria: [
            "Filter by status, clinic, village, sync freshness.",
            "Export to XLSX.",
            "Clicking a row opens the ADP-M tab of that patient.",
          ],
        },
        uk: {
          title: "Окрема сторінка трекінгу АДП-М",
          userStory: "Як лікар, що планує ревакцинації, я хочу вʼю лише зі статусом АДП-М (overdue / this year / pending / vaccinated / contraindicated / refused) з такою ж потужністю фільтрів, як у реєстру, щоб планувати тиждень вакцинації.",
          criteria: [
            "Фільтр за статусом, клінікою, селом, свіжістю синку.",
            "Експорт у XLSX.",
            "Клік по рядку відкриває вкладку АДП-М цього пацієнта.",
          ],
        },
      },
    ],
  },
  {
    number: 7,
    en: { title: "Quality indicators" },
    uk: { title: "Якісні індикатори" },
    stories: [
      {
        id: "US-7.1",
        priority: "Should",
        en: {
          title: "Indicator summary",
          userStory: "As a doctor preparing for NSZU reporting, I want a roll-up by quality indicator showing how many patients are completed / partial / not done / overdue, so that I know my gaps.",
          criteria: [
            "Each indicator card shows totals and a stacked progress bar.",
            "Clicking a card filters the detail table to that rule.",
          ],
        },
        uk: {
          title: "Зведення індикаторів",
          userStory: "Як лікар, що готується до звітності НСЗУ, я хочу зведення за якісним індикатором: скільки пацієнтів completed / partial / not done / overdue, щоб бачити прогалини.",
          criteria: [
            "Кожна картка індикатора показує тотали і stacked progress bar.",
            "Клік по картці фільтрує detail-таблицю до цього правила.",
          ],
        },
      },
      {
        id: "US-7.2",
        priority: "Should",
        en: {
          title: "Per-patient indicator detail",
          userStory: "As a doctor, I want to expand a patient row in the indicators table to see required vs done actions, so that I know exactly what to schedule.",
          criteria: ["Expanded row shows applicability reason, completed actions, pending actions, recommended referrals, source observations."],
        },
        uk: {
          title: "Деталь індикатора на пацієнта",
          userStory: "Як лікар, я хочу розгортати рядок пацієнта в таблиці індикаторів, щоб бачити required vs done дії і точно знати, що планувати.",
          criteria: ["Розгорнутий рядок показує причину застосовності, виконані дії, очікувані дії, рекомендовані направлення, джерельні спостереження."],
        },
      },
    ],
  },
  {
    number: 8,
    en: { title: "MoH orders catalog" },
    uk: { title: "Каталог наказів МОЗ" },
    stories: [
      {
        id: "US-8.1",
        priority: "Could",
        en: {
          title: "Manage MoH orders catalog",
          userStory: "As a doctor, I want to keep a searchable catalog of MoH/clinical guidelines with title, URL, category, and notes, so that I can find the right protocol during a consultation.",
          criteria: [
            "Add / edit / delete via modal.",
            "Search across title, category, notes.",
            "Clicking a card opens the URL.",
          ],
        },
        uk: {
          title: "Каталог наказів МОЗ",
          userStory: "Як лікар, я хочу тримати searchable-каталог наказів МОЗ / клінічних протоколів з назвою, URL, категорією і нотатками, щоб під час консультації знайти потрібний документ.",
          criteria: [
            "Add / edit / delete через модалку.",
            "Пошук по назві, категорії, нотатках.",
            "Клік по картці відкриває URL.",
          ],
        },
      },
    ],
  },
  {
    number: 9,
    en: { title: "EHR batch synchronization" },
    uk: { title: "Пакетна синхронізація з МІС" },
    stories: [
      {
        id: "US-9.1",
        priority: "Must",
        en: {
          title: "Launch a batch sync",
          userStory: "As a doctor, I want to run a one-click sync of every registered patient (or a single clinic, or a filtered subset) against the EHR, so that diagnoses, X-rays, risk groups, and indicators are up to date.",
          criteria: [
            "I choose clinic and «only unsynced».",
            "The job starts within 30 seconds of clicking.",
            "Closing the browser does not stop the job — progress is server-side.",
          ],
        },
        uk: {
          title: "Запуск пакетного синку",
          userStory: "Як лікар, я хочу в один клік запускати синк усіх зареєстрованих пацієнтів (або однієї клініки, або відфільтрованого підмножини) з МІС, щоб діагнози, R-ОГК, групи ризику й індикатори були свіжими.",
          criteria: [
            "Я обираю клініку і «only unsynced».",
            "Задача стартує впродовж 30 секунд після кліку.",
            "Закриття браузера не зупиняє job — прогрес тримається на сервері.",
          ],
        },
      },
      {
        id: "US-9.2",
        priority: "Should",
        en: {
          title: "Real-time sync progress",
          userStory: "As a doctor watching a long sync, I want progress, ETA, current patient, error list, and the device running the job visible, so that I know it is healthy.",
          criteria: [
            "Progress bar and counters update without page refresh.",
            "A heartbeat older than 1 minute surfaces a warning.",
            "I see who (device) owns the job.",
          ],
        },
        uk: {
          title: "Прогрес синку в реальному часі",
          userStory: "Як лікар, що спостерігає довгий синк, я хочу бачити прогрес, ETA, поточного пацієнта, список помилок і пристрій, що веде job, щоб розуміти, що все ОК.",
          criteria: [
            "Progress bar і лічильники оновлюються без рефрешу.",
            "Heartbeat, старший за 1 хвилину, показує warning.",
            "Я бачу, який пристрій володіє job.",
          ],
        },
      },
      {
        id: "US-9.3",
        priority: "Should",
        en: {
          title: "Pause / resume / cancel jobs",
          userStory: "As a doctor, I want to pause a long sync, run a quick targeted one, then resume, so that I don't have to wait hours to handle an urgent case.",
          criteria: [
            "Starting a new job auto-pauses the running one.",
            "Paused jobs persist and can be resumed later.",
            "Resuming after >24 hours rebuilds the queue from the current patient set.",
            "Cancel is terminal and asks for confirmation.",
          ],
        },
        uk: {
          title: "Pause / resume / cancel задач",
          userStory: "Як лікар, я хочу поставити довгий синк на паузу, прокрутити швидкий таргетований і відновити, щоб не чекати годинами заради термінового випадку.",
          criteria: [
            "Старт нової задачі авто-паузить поточну.",
            "Поставлені на паузу job-и зберігаються і відновлюються пізніше.",
            "Resume після 24+ годин перебудовує чергу з поточного набору пацієнтів.",
            "Cancel — фінальний і просить підтвердження.",
          ],
        },
      },
      {
        id: "US-9.4",
        priority: "Should",
        en: {
          title: "Single-patient ad-hoc sync",
          userStory: "As a doctor reviewing one card, I want to sync just that patient by clicking the freshness pill, so that I don't launch a batch for a single case.",
          criteria: [
            "Clicking the pill creates a 1-patient `sync_job` and shows a spinner inline.",
            "On completion the pill flips to «щойно».",
          ],
        },
        uk: {
          title: "Ad-hoc синк одного пацієнта",
          userStory: "Як лікар, що дивиться одну картку, я хочу синкати лише цього пацієнта кліком по пілюлі свіжості, щоб не запускати пакет заради одного випадку.",
          criteria: [
            "Клік по пілюлі створює `sync_job` на 1 пацієнта і показує spinner inline.",
            "По завершенні пілюля стає «щойно».",
          ],
        },
      },
      {
        id: "US-9.5",
        priority: "Must",
        en: {
          title: "Per-doctor sync permission",
          userStory: "As a practice owner controlling cloud cost, I want to enable/disable batch sync per doctor, so that an unsupervised user cannot burn the monthly Vercel CPU quota.",
          criteria: [
            "A doctor without permission sees «Автосинхронізація вимкнена» instead of the launch form.",
            "All `start` and `resume` API calls from that doctor return 403.",
            "Their browser and extension stop polling the sync endpoint within minutes.",
          ],
        },
        uk: {
          title: "Дозвіл на синк per doctor",
          userStory: "Як власник практики, що контролює cloud-витрати, я хочу вмикати/вимикати пакетний синк по лікарю, щоб неконтрольований користувач не спалив місячну Vercel CPU-квоту.",
          criteria: [
            "Лікар без дозволу бачить «Автосинхронізація вимкнена» замість форми запуску.",
            "Усі API-виклики `start` і `resume` від цього лікаря повертають 403.",
            "Його браузер і розширення припиняють пуллінг sync-endpoint впродовж кількох хвилин.",
          ],
        },
      },
    ],
  },
  {
    number: 10,
    en: { title: "Chrome extension (EHR companion)" },
    uk: { title: "Chrome-розширення (компаньйон до МІС)" },
    stories: [
      {
        id: "US-10.1",
        priority: "Must",
        en: {
          title: "Auto-fill on patient open",
          userStory: "As a doctor opening a patient in the EHR, I want the TB widget to auto-fill (last X-ray, ADP-M status, risk pill, indicator TODOs) without me clicking anything, so that I see TB status the moment the card loads.",
          criteria: [
            "The widget appears within 5 seconds of card opening.",
            "The status pill, fluoro tile, and ADP-M tile reflect the registry state.",
            "An auto-analyze toggle in extension options lets me opt out.",
          ],
        },
        uk: {
          title: "Авто-заповнення при відкритті пацієнта",
          userStory: "Як лікар, що відкриває пацієнта в МІС, я хочу, щоб ТБ-віджет авто-заповнювався (last X-ray, ADP-M, risk pill, indicator TODOs) без жодного кліку, щоб одразу бачити ТБ-стан.",
          criteria: [
            "Віджет зʼявляється впродовж 5 секунд після відкриття картки.",
            "Status pill, fluoro tile і ADP-M tile відображають стан реєстру.",
            "Auto-analyze toggle в options розширення дозволяє opt out.",
          ],
        },
      },
      {
        id: "US-10.2",
        priority: "Could",
        en: {
          title: "Risk group tooltip + copy on the EHR widget",
          userStory: "As a doctor, I want to hover the risk pill in the EHR to see the list of groups, and click to copy them line-by-line, so that I can paste reasons into a referral or note.",
          criteria: [
            "Hover shows all groups with line breaks.",
            "Click copies labels separated by newlines and flashes «Скопійовано ✓».",
            "With zero groups, the pill is not clickable.",
          ],
        },
        uk: {
          title: "Tooltip і копіювання груп ризику у віджеті",
          userStory: "Як лікар, я хочу hover-ити risk pill у МІС і бачити список груп, а кліком копіювати їх по рядках, щоб вставляти підстави в направлення чи нотатку.",
          criteria: [
            "Hover показує всі групи з line breaks.",
            "Клік копіює labels через newlines і блимає «Скопійовано ✓».",
            "За нуля груп pill не клікабельна.",
          ],
        },
      },
      {
        id: "US-10.3",
        priority: "Should",
        en: {
          title: "Local fallback when backend is down",
          userStory: "As a doctor whose registry backend is paused/unavailable, I want the EHR widget to still compute and display last X-ray, ADP-M, and risk groups from the visible card, so that I am not blocked.",
          criteria: [
            "When the registry call fails, the widget renders from data on the visible card and shows a «локально» badge.",
            "When the registry recovers, the widget switches back to the server view automatically.",
          ],
        },
        uk: {
          title: "Локальний fallback при недоступному бекенді",
          userStory: "Як лікар з недоступним бекендом реєстру, я хочу, щоб віджет у МІС все одно показував last X-ray, ADP-M і групи ризику з видимої картки, щоб не залишатись заблокованим.",
          criteria: [
            "Коли виклик до реєстру падає, віджет рендерить з даних видимої картки і показує бейдж «локально».",
            "Коли реєстр відновлюється, віджет автоматично перемикається на server-view.",
          ],
        },
      },
      {
        id: "US-10.4",
        priority: "Must",
        en: {
          title: "Background batch driver",
          userStory: "As a doctor who started a batch sync, I want the extension to drive EHR tabs in the background, walking the queue patient-by-patient, so that I can keep working in other tabs.",
          criteria: [
            "The extension opens `/doctors/journal` only when needed.",
            "The doctor's other Chrome tabs remain interactive.",
            "On job completion, opened tabs auto-close.",
          ],
        },
        uk: {
          title: "Фоновий драйвер пакетного синку",
          userStory: "Як лікар, що запустив пакетний синк, я хочу, щоб розширення водило вкладки МІС у фоні, проходячи чергу пацієнт за пацієнтом, щоб я міг продовжувати роботу в інших вкладках.",
          criteria: [
            "Розширення відкриває `/doctors/journal` лише коли потрібно.",
            "Інші Chrome-вкладки лікаря лишаються інтерактивними.",
            "По завершенні job відкриті вкладки авто-закриваються.",
          ],
        },
      },
      {
        id: "US-10.5",
        priority: "Should",
        en: {
          title: "Multi-device ownership",
          userStory: "As a doctor on two devices, I want only the device that started the job to drive it, so that the nurse's laptop on the same Wi-Fi does not collide.",
          criteria: [
            "The job is bound to the launching device's id at start.",
            "Other devices stay idle while the owner is heart-beating.",
            "If the owner stops heart-beating for 5 minutes, another device may take over.",
          ],
        },
        uk: {
          title: "Володіння job по пристроях",
          userStory: "Як лікар на двох пристроях, я хочу, щоб job вів лише пристрій, який його запустив, щоб ноутбук медсестри в тій же Wi-Fi не конфліктував.",
          criteria: [
            "Job привʼязаний до id пристрою-запускача на старті.",
            "Інші пристрої лишаються idle, поки власник heart-beat-ить.",
            "Якщо власник не heart-beat-ить 5 хвилин, інший пристрій може перейняти job.",
          ],
        },
      },
    ],
  },
  {
    number: 11,
    en: { title: "Data imports" },
    uk: { title: "Імпорти даних" },
    stories: [
      {
        id: "US-11.1",
        priority: "Must",
        en: {
          title: "Import declarants XLSX",
          userStory: "As a doctor receiving a fresh declarants export from the EHR, I want to drag-drop the XLSX and preview the diff (add / update / archive / unchanged) before applying, so that I never overwrite or lose data blindly.",
          criteria: [
            "Preview groups changes per clinic.",
            "I see the list of patients about to be archived.",
            "Apply runs only after explicit confirmation; results are reported.",
          ],
        },
        uk: {
          title: "Імпорт XLSX декларантів",
          userStory: "Як лікар, що отримав свіжий експорт декларантів з МІС, я хочу drag-drop XLSX і preview diff (add / update / archive / unchanged) до застосування, щоб не перезаписувати і не втрачати дані наосліп.",
          criteria: [
            "Preview групує зміни по клініці.",
            "Я бачу список пацієнтів, які підуть в архів.",
            "Apply виконується тільки після явного підтвердження; результати рапортуються.",
          ],
        },
      },
      {
        id: "US-11.2",
        priority: "Should",
        en: {
          title: "Historical fluorography import",
          userStory: "As a doctor bootstrapping from paper logs, I want to bulk-import historical fluoro records from XLSX, so that the registry has accurate baselines on day one.",
          criteria: [
            "I see preview stats: total / ready / skipped (no date).",
            "Patients matched by external ID; unmatched rows are skipped and reported.",
          ],
        },
        uk: {
          title: "Імпорт історичної флюорографії",
          userStory: "Як лікар, що піднімається з паперових журналів, я хочу bulk-імпорт історичних флюоро-записів з XLSX, щоб у реєстру була точна baseline з першого дня.",
          criteria: [
            "Я бачу preview-статистику: total / ready / skipped (no date).",
            "Пацієнти матчаться за зовнішнім ID; нематчені рядки пропускаються і рапортуються.",
          ],
        },
      },
      {
        id: "US-11.3",
        priority: "Should",
        en: {
          title: "Historical risk groups + detected/contact imports",
          userStory: "As a doctor migrating from a paper TB tracker, I want to import risk-group sheets and detected/contact sheets, optionally creating «external» patient records for people not in the declarants registry, so that I capture the full TB picture.",
          criteria: [
            "Preview shows update / create-external / invalid counts.",
            "I can opt in/out of creating external patients per import.",
            "After apply, a summary lists what changed.",
          ],
        },
        uk: {
          title: "Імпорт історичних груп ризику + виявлених/контактних",
          userStory: "Як лікар, що мігрує з паперового ТБ-трекера, я хочу імпортувати таблиці груп ризику й виявлених/контактних, опційно створюючи «external» пацієнтів для тих, кого немає в реєстрі декларантів, щоб мати повну ТБ-картину.",
          criteria: [
            "Preview показує update / create-external / invalid лічильники.",
            "Я можу опційно вмикати/вимикати створення external-пацієнтів на імпорт.",
            "Після apply summary перелічує, що змінилося.",
          ],
        },
      },
    ],
  },
  {
    number: 12,
    en: { title: "Notifications" },
    uk: { title: "Сповіщення" },
    stories: [
      {
        id: "US-12.1",
        priority: "Could",
        en: {
          title: "Weekly digest email",
          userStory: "As a doctor (or designated stakeholder), I want a weekly email with the dashboard counts and top-10 overdue patients linked to their cards, so that I stay on top of the registry without logging in.",
          criteria: [
            "Recipients are configurable per environment.",
            "Email runs on a cron schedule (default Monday 06:00).",
            "Both HTML and plain-text versions are included.",
            "Cron auth uses a server-side secret; manual trigger requires the same.",
          ],
        },
        uk: {
          title: "Тижневий дайджест на email",
          userStory: "Як лікар (або призначений stakeholder), я хочу тижневий email з лічильниками дашборда і топ-10 прострочених пацієнтів з лінками на їхні картки, щоб тримати реєстр під контролем без логіну.",
          criteria: [
            "Список отримувачів конфігурується per environment.",
            "Email шле cron за розкладом (за замовчуванням понеділок 06:00).",
            "Включено HTML і plain-text версії.",
            "Cron-авторизація через server-side secret; ручний тригер вимагає того ж.",
          ],
        },
      },
      {
        id: "US-12.2",
        priority: "Should",
        en: {
          title: "In-app alert when sync stalls",
          userStory: "As a doctor running a batch, I want a visible warning when the extension stops heart-beating, so that I know to reopen the EHR or reload the extension.",
          criteria: [
            "After 1 minute without heartbeat, a banner appears on `/sync`.",
            "The banner resolves automatically when heartbeat resumes.",
          ],
        },
        uk: {
          title: "In-app алерт при зависанні синку",
          userStory: "Як лікар, що крутить пакет, я хочу видимий warning, коли розширення припинило heart-beat, щоб знати, що треба переоткрити МІС або перезавантажити розширення.",
          criteria: [
            "Через 1 хвилину без heartbeat на `/sync` зʼявляється банер.",
            "Банер зникає автоматично, коли heartbeat відновлюється.",
          ],
        },
      },
    ],
  },
  {
    number: 13,
    en: { title: "Won't have (this release)" },
    uk: { title: "Won't have (цей реліз)" },
    stories: [
      {
        id: "US-13.1",
        priority: "Could",
        en: {
          title: "Explicitly out of scope",
          userStory: "As a release owner, I want a small list of items intentionally deferred, so that scope creep stays visible.",
          criteria: [
            "Self-service PIN change — single-PIN model; rotation handled out-of-band for now.",
            "Doctor-visible audit log — backend exists; UI not yet a priority.",
            "Configurable digest schedule per recipient — single global cron is sufficient at this scale.",
            "Mobile-first responsive overhaul — doctors work on desktops/laptops in practice.",
            "Realtime co-editing of patient card — one doctor per tenant edits at a time.",
            "Two-factor auth on top of PIN — risk model accepts single-PIN for now.",
          ],
        },
        uk: {
          title: "Свідомо поза скоупом",
          userStory: "Як release-owner, я хочу маленький список свідомо відкладеного, щоб scope creep лишався видимим.",
          criteria: [
            "Self-service зміна PIN — модель з одним PIN; ротація — out-of-band наразі.",
            "Видимий лікарю audit-лог — бекенд є; UI поки не пріоритет.",
            "Конфігурація розкладу дайджесту per recipient — глобальний cron достатній на цьому масштабі.",
            "Mobile-first responsive — лікарі працюють з десктопів/ноутбуків.",
            "Realtime co-editing картки — в один момент редагує один лікар per tenant.",
            "Двофакторна автентифікація поверх PIN — ризик-модель приймає single-PIN наразі.",
          ],
        },
      },
    ],
  },
];

export const data: UserStoriesData = { meta, epics };
