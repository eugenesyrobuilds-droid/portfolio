"use client";

import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import SectionHeading from "@/components/SectionHeading";
import TechStack from "@/components/TechStack";
import ProcessNote from "@/components/ProcessNote";
import { useLocale } from "@/lib/i18n/LocaleContext";

const screenshot = {
  en: "Patient registry view with risk groups and TB status.",
  uk: "Реєстр пацієнтів з групами ризику та статусом ТБ.",
};

const copy = {
  en: {
    title: "TB Module",
    subtitle:
      "Digital replacement of paper and Excel-based tuberculosis documentation at a primary care clinic.",
    tags: ["Healthcare", "Full-stack web app", "Managed Postgres"],
    status: "Production",
    statusVariant: "production" as const,
    tldr:
      "Tuberculosis risk-group registries, fluorography records, and case logs at Ukrainian primary care clinics are kept in Excel and on paper. In one of my clinics this meant 28 risk-group sheets, a fluorography file covering ~1,100 patients, and a paper WHO 4-symptom screening questionnaire. I designed and built a web module that replaces this paper workflow: a structured patient registry with risk groups and TB status, fluorography history with auto-scheduled next-due dates, sputum test tracking, auto-generated referrals, and a sync mechanism with the EMR. Adopted at the clinic where I practice. Built with a free-tier-friendly stack and a clear path to production-grade infrastructure when scaled.",
    section: {
      context: "Context",
      solution: "Solution",
      impact: "Impact",
      tech: "Tech stack & architecture",
      learned: "What I learned",
      next: "Next steps",
    },
    techGroups: [
      { label: "Frontend", items: ["React 18", "Vite", "TypeScript", "TailwindCSS v4"] },
      { label: "Backend", items: ["PostgreSQL (managed)", "PostgREST", "Object Storage"] },
      { label: "Hosting", items: ["Serverless functions on managed cloud platform"] },
      {
        label: "Auth",
        items: ["Practice-wide PIN → bcrypt → JWT in HttpOnly cookie"],
      },
      {
        label: "Data exchange",
        items: [
          "SheetJS for client-side Excel I/O",
          "Secure sync with EMR via authorized extension",
        ],
      },
      { label: "Data", items: ["TanStack Query", "TanStack Table"] },
    ],
    process: {
      ownership:
        "I identified the documentation problem, specified the schema against the existing paper and Excel workflow, made stack choices for a focused single-clinic MVP, and shipped to the clinic where I practice.",
      collaboration:
        "AI-assisted development with Claude Code. AI generated implementation; I owned product framing, schema design, and deployment decisions.",
      timeSpent:
        "~40-60 hours over ~7 days of active build, plus ongoing iteration. (Estimated; git tracks commits, not hours.)",
    },
  },
  uk: {
    title: "ТБ-модуль",
    subtitle:
      "Цифрова заміна паперової та Excel-документації з туберкульозу в амбулаторії первинної ланки.",
    tags: ["Healthcare", "Full-stack веб-застосунок", "Managed Postgres"],
    status: "У продакшені",
    statusVariant: "production" as const,
    tldr:
      "Реєстри груп ризику з туберкульозу, записи флюорографій і журнали випадків в українських амбулаторіях ведуть в Excel і на папері. В одній з моїх амбулаторій це 28 таблиць груп ризику, файл флюорографій на ~1 100 пацієнтів і паперова анкета 4-симптомного скринінгу ВООЗ. Я спроєктував і побудував веб-модуль, який замінює цей паперовий воркфлоу: структурований реєстр пацієнтів з групами ризику та статусом ТБ, історія флюорографій з автоплануванням наступних дат, відстеження аналізів мокротиння, автогенерація направлень, механізм синку з МІС. Прийнятий в амбулаторії, де я практикую. Зібраний на стеку, дружньому до free-tier, з чітким шляхом до production-grade інфраструктури при масштабуванні.",
    section: {
      context: "Контекст",
      solution: "Рішення",
      impact: "Результат",
      tech: "Технології та архітектура",
      learned: "Що я зрозумів",
      next: "Що далі",
    },
    techGroups: [
      { label: "Фронтенд", items: ["React 18", "Vite", "TypeScript", "TailwindCSS v4"] },
      { label: "Бекенд", items: ["PostgreSQL (managed)", "PostgREST", "Object Storage"] },
      { label: "Хостинг", items: ["Serverless-функції на managed cloud-платформі"] },
      {
        label: "Аутентифікація",
        items: ["PIN на амбулаторію → bcrypt → JWT у HttpOnly cookie"],
      },
      {
        label: "Обмін даними",
        items: [
          "SheetJS для Excel I/O на клієнті",
          "Безпечний синк з МІС через авторизоване розширення",
        ],
      },
      { label: "Дані", items: ["TanStack Query", "TanStack Table"] },
    ],
    process: {
      ownership:
        "Визначив проблему документації, специфікував схему під поточний паперовий та Excel-воркфлоу, ухвалив рішення по стеку для сфокусованого single-clinic MVP, і випустив в амбулаторії, де практикую.",
      collaboration:
        "AI-асистована розробка з Claude Code. AI генерував реалізацію; за продуктові рамки, схему БД і рішення по деплою відповідав я.",
      timeSpent:
        "~40-60 годин за ~7 днів активної розробки, плюс поточна ітерація. (Оцінка; git відстежує коміти, не години.)",
    },
  },
};

export default function TBContent() {
  const { locale } = useLocale();
  const c = copy[locale];

  return (
    <CaseStudyLayout
      title={c.title}
      subtitle={c.subtitle}
      status={c.status}
      statusVariant={c.statusVariant}
      tags={c.tags}
      tldr={c.tldr}
    >
      {locale === "en" ? <EnBody c={c} /> : <UkBody c={c} />}
    </CaseStudyLayout>
  );
}

function ScreenshotFigure() {
  const { locale } = useLocale();
  return (
    <figure className="my-8 not-prose">
      <Image
        src="/images/tb/patient-registry.png"
        alt="TB Module patient registry with risk groups and TB status"
        width={2880}
        height={1800}
        className="rounded-card shadow-soft w-full h-auto"
      />
      <figcaption className="text-small text-ink-500 mt-2 text-center">
        {screenshot[locale]}
      </figcaption>
    </figure>
  );
}

function EnBody({ c }: { c: typeof copy.en }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        Tuberculosis surveillance at the primary care level in Ukraine requires layered
        documentation: risk-group registries (medical risk: COPD, HIV, diabetes, etc; social
        risk: prisoners, migrants, contacts of detected cases), fluorography history per
        patient with annual scheduling, sputum test results from regional labs (GeneXpert /
        microscopy / culture / PCR), separate logs for detected and contact cases, and a
        paper-based WHO 4-symptom screening questionnaire (form Appendix 9) administered at
        each contact.
      </p>
      <p>In my clinic this stack was:</p>
      <ul>
        <li>
          14 risk-group Excel sheets × 2 clinic locations = <strong>28 sheets</strong>
        </li>
        <li>2 detected/contact registries × 2 locations = <strong>4 sheets</strong></li>
        <li>1 fluorography file with ~1,100 patients per location</li>
        <li>~5 xlsx files total, plus a folder of MoH order PDFs</li>
        <li>Paper Appendix 9 questionnaires, stored in a binder</li>
      </ul>
      <p>
        Updating risk groups required cross-referencing several files. Generating referrals
        required hand-writing the WHO 4-symptom form. There was no audit trail. Migration
        risk on disk was real — these were business-critical files held in Excel.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>A web module that replaces the above workflow with structured records:</p>
      <ul>
        <li>
          <strong>Patient registry</strong> with medical and social risk groups, TB status
          (none / detected / contact), location, and contact info — imported from EMR
          declarations via xlsx-diff
        </li>
        <li>
          <strong>Fluorography history</strong> with auto-scheduled next-due dates and
          conclusion text storage (e.g., &quot;Висновок: норма&quot;)
        </li>
        <li>
          <strong>Sputum test tracking</strong> (GeneXpert / microscopy / culture / PCR),
          with the result types regional labs report
        </li>
        <li>
          <strong>WHO 4-symptom screening</strong> at point-of-care: digital questionnaire,
          ML-free decision (low_risk / needs_xray / needs_referral), auto-generated PDF
          referral via <code>window.print()</code>
        </li>
        <li>
          <strong>MoH order library</strong> linking to source documents
        </li>
        <li>
          <strong>EMR data import</strong> — operator uploads the EMR declarations export
          (xlsx), the module computes the diff against current registry, operator confirms
        </li>
        <li>
          <strong>EMR integration</strong> — a companion script extends the clinical
          extension to push relevant clinical observations (diagnoses, fluorography
          results) from the patient view into the module via an authenticated endpoint
        </li>
      </ul>
      <p>
        Designed for single-practice use; access controlled by a shared practice
        authentication mechanism. Data handling follows internal clinical workflows
        established with the clinic management, with sensitive patient information accessed
        only by authorized clinical staff within the scope of their duties.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        The TB Module is too new for adoption metrics — the integrated flow (extension
        auto-syncing into module) shipped recently. The TLDR-level claim is what the system
        did at deploy: <strong>eliminated the paper journal contour</strong> and{" "}
        <strong>collapsed 28+ Excel sheets into a single, queryable structure</strong>.
      </p>
      <p>
        A separate observation worth naming: the architectural choices (managed Postgres,
        serverless functions, transactional email) were deliberately optimized for a small
        clinical deployment, where infrastructure overhead matters more than maximum
        theoretical scale. Path to production-grade compliance infrastructure (dedicated
        tenancy, BAA-eligible providers, formal DPA) is clear when the system scales beyond
        a single practice.
      </p>
      <p>Adoption metrics will follow as the system accumulates more usage data.</p>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>
        The shared-PIN auth is a deliberate simplification for the current single-practice
        scope: two clinical staff, no patient-facing access. Per-user accounts and audit
        granularity are part of the production-grade roadmap (see Next steps).
      </p>
      <p>
        <strong>EMR integration.</strong> A companion script (~921 LOC) extends the
        clinical extension to push relevant observations (diagnoses, fluorography results)
        from the patient view into the TB Module via an authenticated endpoint.
        Communication uses a shared practice authentication token. Patient identification
        on the EMR side is mapped to local registry records, with all access scoped to the
        clinical staff using the system.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>Replacing paper with software is mostly a schema design problem.</strong>{" "}
          The hardest part wasn&apos;t the UI or the database setup — it was deciding what
          to model. &quot;Risk group&quot; turns out to be a relationship, not an
          attribute. &quot;Detected&quot; and &quot;contact&quot; are statuses, not
          separate registries. Getting the data model right first meant the UI fell out
          cleanly.
        </li>
        <li>
          <strong>Infrastructure economics for a small primary care clinic are forgiving.</strong>{" "}
          A practice at the scale of one outpatient clinic fits comfortably within
          entry-tier allocations of standard managed cloud services. For a clinic
          considering digitization, this matters more than any feature comparison — the
          budget barrier to entry is often the actual blocker.
        </li>
        <li>
          <strong>Extending an existing tool is a legitimate integration strategy.</strong>{" "}
          I could have built a separate sync API and rewritten the data flow. Instead I
          extended the existing extension&apos;s display callback to feed the module
          passively. Result: ~900 LOC of glue, no changes to the core extension logic,
          automatic sync of any patient record the doctor opens.
        </li>
        <li>
          <strong>
            A blocking overlay turned out to be the right UX answer for an indicator
            workflow doctors otherwise skipped.
          </strong>{" "}
          The clinical extension originally required a button click to run the indicator
          analysis — 15-20 seconds of compute, but worse, a friction pause that broke flow.
          Doctors quietly stopped using it. When I integrated with the TB Module and made
          it mandatory to check the last X-ray date, I added a blocking overlay on the
          patient card: it appears as soon as the card opens, runs the indicator analysis
          automatically, syncs the X-ray date to the module, then drops away.
          Counter-intuitively this was better UX than the optional button: removing the
          choice removed the skip. The lesson generalizes — in clinical workflows,
          &quot;make it easy to use&quot; is often weaker than &quot;make it the default
          path.&quot;
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        The active priority is extending the same pattern to the other journals that
        primary care has to maintain: vaccination, HIV, cardiovascular risk, oncology
        screening. The TB module already proves the architecture works — patient registry
        + scheduled events + EMR sync is a generalizable shape. Each new module needs its
        own schema and rules, but the underlying frame transfers.
      </p>
      <p>
        Equally important is the path to production-grade infrastructure for multi-practice
        deployment: dedicated tenancy, formal data processing agreements, audit logging,
        role-based access controls. The current architecture is intentionally a
        single-clinic MVP; scaling beyond requires compliance investments that are
        well-understood but not yet implemented.
      </p>
    </>
  );
}

function UkBody({ c }: { c: typeof copy.uk }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        Спостереження за туберкульозом на первинній ланці в Україні вимагає шарової
        документації: реєстри груп ризику (медичні: ХОЗЛ, ВІЛ, діабет тощо; соціальні:
        ув’язнені, ВПО, контакти виявлених випадків), історія флюорографій по
        кожному пацієнту з річним плануванням, результати аналізів мокротиння з
        регіональних лабораторій (GeneXpert / мікроскопія / культура / ПЛР), окремі
        журнали виявлених і контактних випадків, паперова анкета 4-симптомного скринінгу
        ВООЗ (Додаток 9) при кожному зверненні.
      </p>
      <p>У моїй амбулаторії стек був такий:</p>
      <ul>
        <li>
          14 Excel-таблиць груп ризику × 2 локації амбулаторії ={" "}
          <strong>28 таблиць</strong>
        </li>
        <li>2 реєстри виявлених/контактних × 2 локації = <strong>4 таблиці</strong></li>
        <li>1 файл флюорографій на ~1 100 пацієнтів у кожній локації</li>
        <li>~5 xlsx-файлів усього, плюс папка з PDF наказів МОЗ</li>
        <li>Паперові анкети Додатку 9 у папці</li>
      </ul>
      <p>
        Оновлення груп ризику вимагало крос-перевірки кількох файлів. Генерація направлень —
        ручного заповнення форми 4 симптомів ВООЗ. Аудит-сліду не було. Ризик втрати
        файлів — реальний, ці бізнес-критичні дані жили в Excel.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>Веб-модуль, що замінює зазначений воркфлоу структурованими записами:</p>
      <ul>
        <li>
          <strong>Реєстр пацієнтів</strong> з медичними й соціальними групами ризику,
          статусом ТБ (немає / виявлений / контактний), локацією і контактами —
          імпортується з декларацій МІС через xlsx-diff
        </li>
        <li>
          <strong>Історія флюорографій</strong> з автоплануванням наступної дати й
          збереженням тексту висновку (наприклад, «Висновок: норма»)
        </li>
        <li>
          <strong>Облік аналізів мокротиння</strong> (GeneXpert / мікроскопія / культура /
          ПЛР), з типами результатів, які надсилають регіональні лабораторії
        </li>
        <li>
          <strong>4-симптомний скринінг ВООЗ</strong> у точці контакту: цифрова анкета,
          рішення без ML (low_risk / needs_xray / needs_referral), автогенерація PDF
          направлення через <code>window.print()</code>
        </li>
        <li>
          <strong>Бібліотека наказів МОЗ</strong> з посиланнями на джерельні документи
        </li>
        <li>
          <strong>Імпорт даних з МІС</strong> — оператор завантажує експорт декларацій МІС
          (xlsx), модуль рахує diff з поточним реєстром, оператор підтверджує
        </li>
        <li>
          <strong>Інтеграція з МІС</strong> — додатковий скрипт розширює клінічне
          розширення, передаючи релевантні клінічні спостереження (діагнози, результати
          флюорографії) з картки пацієнта в модуль через автентифікований ендпойнт
        </li>
      </ul>
      <p>
        Спроєктовано для single-practice використання; доступ контролюється спільним
        механізмом автентифікації амбулаторії. Обробка даних відповідає внутрішнім
        клінічним воркфлоу, узгодженим з керівництвом амбулаторії; до чутливої
        інформації пацієнтів мають доступ лише авторизовані клінічні працівники в межах
        своїх обовʼязків.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        ТБ-модуль ще занадто новий для метрик впровадження — інтегрований флоу (розширення
        автосинкає в модуль) вийшов нещодавно. Тезис рівня TLDR — це те, що система
        зробила на момент розгортання: <strong>усунула паперовий контур журналу</strong> і{" "}
        <strong>згорнула 28+ Excel-таблиць у єдину queryable-структуру</strong>.
      </p>
      <p>
        Окреме спостереження, яке варто назвати: архітектурні рішення (managed Postgres,
        serverless-функції, транзакційний email) свідомо оптимізовані під невелике
        клінічне розгортання, де накладні витрати на інфраструктуру важливіші за
        максимальний теоретичний масштаб. Шлях до production-grade compliance-інфраструктури
        (виділена tenancy, BAA-кваліфіковані провайдери, формальний DPA) зрозумілий, коли
        система масштабується поза однією амбулаторією.
      </p>
      <p>Метрики впровадження зʼявляться, коли система накопичить дані використання.</p>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>
        Спільний-PIN auth — свідоме спрощення під поточний single-practice скоуп: двоє
        клінічних співробітників, без пацієнтського доступу. Окремі акаунти на користувача
        та гранулярний аудит — частина production-grade roadmap (див. «Що далі»).
      </p>
      <p>
        <strong>Інтеграція з МІС.</strong> Додатковий скрипт (~921 LOC) розширює клінічне
        розширення, передаючи релевантні спостереження (діагнози, результати флюорографії)
        з картки пацієнта в ТБ-модуль через автентифікований ендпойнт. Комунікація через
        спільний токен автентифікації амбулаторії. Ідентифікація пацієнта на боці МІС
        мапиться на локальні записи реєстру, з доступом, обмеженим клінічним персоналом,
        який користується системою.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>Заміна паперу софтом — це переважно задача дизайну схеми.</strong>{" "}
          Найскладніше було не UI чи налаштування БД — а рішення, що моделювати.
          Виявилось, що «група ризику» — це звʼязок, а не атрибут. «Виявлений» і
          «контактний» — це статуси, а не окремі реєстри. Правильна модель даних означала,
          що UI вийшов природно.
        </li>
        <li>
          <strong>Економіка інфраструктури для невеликої первинки прощальна.</strong>{" "}
          Амбулаторія масштабу однієї практики вільно вміщається в entry-tier квоти
          стандартних managed cloud-сервісів. Для амбулаторії, що розглядає диджиталізацію,
          це важливіше за будь-яке порівняння фіч — бюджетний барʼєр входу часто і є
          фактичним блокером.
        </li>
        <li>
          <strong>Розширення існуючого інструмента — легітимна стратегія інтеграції.</strong>{" "}
          Я міг би побудувати окремий sync-API і переписати потік даних. Замість цього я
          розширив колбек відображення існуючого розширення, щоб воно пасивно живило
          модуль. Результат: ~900 LOC «склейки», жодних змін у core-логіці розширення,
          автоматичний синк будь-якого запису пацієнта, якого відкриває лікар.
        </li>
        <li>
          <strong>
            Блокувальний overlay виявився правильною UX-відповіддю на воркфлоу
            індикаторів, який лікарі інакше пропускали.
          </strong>{" "}
          Клінічне розширення спочатку вимагало кліку по кнопці для запуску аналізу
          індикаторів — 15-20 секунд обчислень, але гірше — пауза, яка ламала потік. Коли
          я інтегрував з ТБ-модулем і зробив обовʼязковою перевірку дати останньої
          флюорографії, я додав блокувальний overlay на картку пацієнта: зʼявляється
          щойно картка відкрилась, автоматично запускає аналіз індикаторів, синкає дату
          флюорографії в модуль і зникає. Парадоксально це був кращий UX, ніж опційна
          кнопка: прибрати вибір — прибрати пропуск. Урок узагальнюється: у клінічних
          воркфлоу «зроби зручним у використанні» часто слабше за «зроби це
          default-шляхом».
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        Активний пріоритет — розширення того ж патерну на інші журнали, які має вести
        первинка: вакцинація, ВІЛ, серцево-судинний ризик, онкоскринінг. ТБ-модуль уже
        доводить, що архітектура працює — реєстр пацієнтів + заплановані події + синк МІС
        — це узагальнювана форма. Кожен новий модуль потребує своєї схеми й правил, але
        загальна рамка переноситься.
      </p>
      <p>
        Не менш важливо — шлях до production-grade інфраструктури для multi-practice
        розгортання: виділена tenancy, формальні data processing agreements, журнал
        аудиту, role-based access controls. Поточна архітектура свідомо є single-clinic
        MVP; масштабування поза вимагає compliance-інвестицій, які добре зрозумілі, але
        ще не реалізовані.
      </p>
    </>
  );
}
