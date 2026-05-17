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
      "Full digital replacement of paper and Excel-based tuberculosis documentation at a primary care clinic.",
    tags: ["Healthcare", "Full-stack web app", "Supabase"],
    status: "Production",
    statusVariant: "production" as const,
    tldr:
      "Tuberculosis risk-group registries, fluorography records, and case logs at Ukrainian primary care clinics are kept in Excel and on paper. In one of my clinics this meant 28 risk-group sheets, a fluorography file covering ~1,100 patients, and a paper WHO 4-symptom screening questionnaire. I built a self-hosted web module that fully replaces this paper workflow: patient registry with risk groups and TB status, fluorography history with auto-scheduled next-due dates, sputum test tracking, auto-generated referrals, EMR data sync, weekly cron reminders. 1,851 patients migrated. Used by my nurse and me daily. Running cost: $0/month on free tiers.",
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
      { label: "Backend", items: ["Supabase (PostgreSQL + PostgREST + Storage)"] },
      { label: "Hosting", items: ["Vercel Hobby (Edge / Node serverless functions)"] },
      {
        label: "Auth",
        items: ["One practice-wide PIN → bcrypt → JWT HS256 in HttpOnly cookie (30 days)"],
      },
      { label: "Email", items: ["Resend (sandbox tier)", "Weekly cron Monday 06:00 UTC"] },
      { label: "Excel I/O", items: ["SheetJS (xlsx) — client-side, no server load"] },
      { label: "Data", items: ["TanStack Query", "TanStack Table"] },
      {
        label: "Integration",
        items: [
          "Chrome extension (tb-module-sync.js, ~921 LOC)",
          "Monkey-patched display callback → POST to /medical_risk_groups + /fluorography",
          "Bearer practice PIN auth",
        ],
      },
    ],
    process: {
      ownership:
        "I identified the documentation problem, specified the schema against the existing paper and Excel workflow, made stack choices (free tiers, single-PIN auth, monkey-patching the extension instead of building a new sync layer), and shipped to my own clinic.",
      collaboration:
        "AI-assisted development with Claude Code. AI generated implementation; I owned product framing, schema design, and deployment decisions.",
      timeSpent:
        "~40-60 hours over ~7 days of active build, plus ongoing iteration. (Estimated; git tracks commits, not hours.)",
    },
  },
  uk: {
    title: "ТБ-модуль",
    subtitle:
      "Повна цифрова заміна паперової та Excel-документації з туберкульозу в амбулаторії первинної ланки.",
    tags: ["Healthcare", "Full-stack веб-застосунок", "Supabase"],
    status: "У продакшені",
    statusVariant: "production" as const,
    tldr:
      "Реєстри груп ризику з туберкульозу, записи флюорографій і журнали випадків в українських амбулаторіях ведуть в Excel і на папері. В одній з моїх амбулаторій це 28 таблиць груп ризику, файл флюорографій на ~1 100 пацієнтів і паперова анкета 4-симптомного скринінгу ВООЗ. Я зробив self-hosted веб-модуль, який повністю замінює цей паперовий воркфлоу: реєстр пацієнтів з групами ризику та статусом ТБ, історія флюорографій з автоплануванням наступних дат, відстеження аналізів мокротиння, автогенерація направлень, синк з ЕМК, щотижневі cron-нагадування. 1 851 пацієнт перенесений. Я і медсестра користуємось щодня. Поточна вартість роботи: $0/місяць на безкоштовних тарифах.",
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
      { label: "Бекенд", items: ["Supabase (PostgreSQL + PostgREST + Storage)"] },
      { label: "Хостинг", items: ["Vercel Hobby (Edge / Node serverless functions)"] },
      {
        label: "Аутентифікація",
        items: ["Один PIN на амбулаторію → bcrypt → JWT HS256 у HttpOnly cookie (30 днів)"],
      },
      { label: "Email", items: ["Resend (sandbox tier)", "Cron щопонеділка 06:00 UTC"] },
      { label: "Excel I/O", items: ["SheetJS (xlsx) — на клієнті, без навантаження на сервер"] },
      { label: "Дані", items: ["TanStack Query", "TanStack Table"] },
      {
        label: "Інтеграція",
        items: [
          "Chrome-розширення (tb-module-sync.js, ~921 LOC)",
          "Monkey-patched display callback → POST у /medical_risk_groups + /fluorography",
          "Bearer-авторизація через PIN амбулаторії",
        ],
      },
    ],
    process: {
      ownership:
        "Визначив проблему документації, специфікував схему під поточний паперовий та Excel-воркфлоу, ухвалив рішення по стеку (безкоштовні тарифи, single-PIN auth, monkey-patching розширення замість окремого sync-шару), і випустив у власну амбулаторію.",
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
          14 risk-group Excel sheets × 2 locations (Zaluzhya AZPSM + Bilohirsk AZPSM) ={" "}
          <strong>28 sheets</strong>
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
      <p>
        A self-hosted (in the sense: I host it; details below) web module that fully
        replaces the above workflow with structured records:
      </p>
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
          <strong>MoH order library</strong> linking to PDF/DOCX stored on Google Drive
        </li>
        <li>
          <strong>EMR data import</strong> — operator uploads the EMR declarations export
          (xlsx), the module computes the diff against current registry, operator confirms
        </li>
        <li>
          <strong>Weekly cron digest</strong> via Resend, sent Mondays at 06:00 UTC, with
          patients due for screening that week
        </li>
        <li>
          <strong>Integration with the Medics Chrome extension</strong> — extension
          monkey-patches its <code>MedicsIndicatorUI.displayResults</code> callback to POST
          diagnoses + fluorography results back to this module, keeping both systems in sync
          via a shared practice PIN
        </li>
      </ul>
      <p>
        Real data: 1,851 patients in the database, imported from the actual Medics
        declaration export. The system is used by me and the practice nurse daily. The same
        PIN auths both of us; the module is single-tenant by design (one practice).
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        The TB Module is too new for adoption metrics — the integrated flow (extension
        auto-syncing into module) shipped 5 days before this writing. The TLDR-level claim
        is what the system did at deploy: <strong>eliminated the paper journal contour</strong>{" "}
        and <strong>collapsed 28+ Excel sheets into a single, queryable database</strong>.
      </p>
      <p>
        A separate operational metric worth naming:{" "}
        <strong>monthly running cost is $0</strong>. The system runs on Supabase free tier
        (using ~5% of 500 MB allocation), Vercel Hobby (functions at limit: 12/12), Resend
        free (~8 emails/month sent of 3000 allowance). Migration to Pro tiers would be
        ~$65/month total — but the current single-practice usage doesn&apos;t need it.
      </p>
      <p>
        Adoption metrics will follow as the system accumulates more usage data. For now,
        the story is the deployment itself.
      </p>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>
        The single-PIN auth is a deliberate simplification. The user model is &quot;one
        practice, two staff members, no patient access&quot; — adding per-user accounts
        would have been overhead without value. If the system later expands to multi-tenant
        (multiple practices), this is the first thing to redesign.
      </p>
      <p>
        The Vercel Hobby 12-function limit is the live constraint. Next iteration (Phase 5)
        needs to consolidate endpoints.
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
          The hardest part wasn&apos;t the React UI or the Supabase setup — it was deciding
          what to model. &quot;Risk group&quot; turns out to be a relationship, not an
          attribute. &quot;Detected&quot; and &quot;contact&quot; are statuses, not
          separate registries. Getting the data model right first meant the UI fell out
          cleanly.
        </li>
        <li>
          <strong>Free tiers cover real clinical workloads if your scope is bounded.</strong>{" "}
          A practice with ~1,800 patients and two daily users fits comfortably in Supabase
          + Vercel + Resend free allocations. The cost story isn&apos;t a footnote — for a
          primary care clinic considering digitization, &quot;$0/month if used at our
          scale&quot; is the most important fact.
        </li>
        <li>
          <strong>Monkey-patching an existing tool is a legitimate integration strategy.</strong>{" "}
          I could have built a separate sync API and rewritten the extension&apos;s data
          flow. Instead I wrap the extension&apos;s display callback and let it feed the
          module passively. Result: 921 LOC of glue, no changes to the extension&apos;s
          core logic, automatic backfill of any patient the doctor opens.
        </li>
        <li>
          <strong>
            A blocking overlay turned out to be the right UX answer for an indicator
            workflow doctors otherwise skipped.
          </strong>{" "}
          The Medics extension originally required a button click to run the indicator
          analysis — 15-20 seconds of compute, but worse, a friction pause that broke flow.
          Doctors quietly stopped using it. When I integrated with the TB Module and made
          it mandatory to check the last X-ray date, I added a blocking overlay on the
          patient card: it appears as soon as the card opens, runs the indicator analysis
          automatically, syncs the X-ray date to TB Module, then drops away.
          Counter-intuitively this was better UX than the optional button: removing the
          choice removed the skip. The lesson generalizes — in clinical workflows,
          &quot;make it easy to use&quot; is often weaker than &quot;make it the default
          path.&quot;
        </li>
        <li>
          <strong>Free tier economics for a primary-care clinic are extremely forgiving.</strong>{" "}
          Supabase + Vercel + Resend free allocations have absorbed both this module
          (1,851 patients) and the Studioverse platform (37 users, 22 projects)
          simultaneously without hitting a ceiling. Whatever &quot;scale&quot; means at the
          rural-clinic level, free tier covers it.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        The active priority is extending the same pattern to the other journals that
        primary care has to maintain: vaccination, HIV, cardiovascular risk, oncology
        screening. The TB module already proves the architecture works — patient registry
        + scheduled events + EMR sync + cron reminders is a generalizable shape. Each new
        module needs its own schema and rules, but the underlying frame transfers.
        Secondary backlog items: audit log triggers (table exists, wiring incomplete),
        attachments UI (table exists, no UI), and PIN-change from the settings UI
        (currently env-var only). Multi-practice / multi-tenant rewrite is explicitly out
        of scope for now — the single-PIN simplicity is worth preserving until
        there&apos;s real demand from another clinic.
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
          14 Excel-таблиць груп ризику × 2 локації (АЗПСМ Залужжя + АЗПСМ Білогірʼя) ={" "}
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
      <p>
        Self-hosted (в сенсі: я хостю; деталі нижче) веб-модуль, що повністю замінює
        зазначений воркфлоу структурованими записами:
      </p>
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
          <strong>Бібліотека наказів МОЗ</strong> з посиланнями на PDF/DOCX у Google Drive
        </li>
        <li>
          <strong>Імпорт даних з МІС</strong> — оператор завантажує експорт декларацій МІС
          (xlsx), модуль рахує diff з поточним реєстром, оператор підтверджує
        </li>
        <li>
          <strong>Щотижневий cron-дайджест</strong> через Resend, надсилається
          щопонеділка о 06:00 UTC, з пацієнтами, у яких того тижня скринінг
        </li>
        <li>
          <strong>Інтеграція з Chrome-розширенням Medics</strong> — розширення
          monkey-patch&apos;ить колбек <code>MedicsIndicatorUI.displayResults</code> і POST&apos;ить
          діагнози + результати флюорографії назад у цей модуль, тримаючи обидві системи в
          синку через спільний PIN амбулаторії
        </li>
      </ul>
      <p>
        Реальні дані: 1 851 пацієнт у БД, імпортовано з фактичного експорту декларацій
        Medics. Системою користуємось я і медсестра амбулаторії щодня. Той самий PIN
        авторизує обох; модуль single-tenant за дизайном (одна амбулаторія).
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        ТБ-модуль ще занадто новий для метрик впровадження — інтегрований флоу (розширення
        автосинкає в модуль) вийшов за 5 днів до написання цього тексту. Тезис рівня TLDR
        — це те, що система зробила на момент розгортання:{" "}
        <strong>усунула паперовий контур журналу</strong> і{" "}
        <strong>згорнула 28+ Excel-таблиць у єдину БД з можливістю запитів</strong>.
      </p>
      <p>
        Окрема операційна метрика, яку варто назвати:{" "}
        <strong>щомісячна вартість роботи — $0</strong>. Система живе на безкоштовному
        тарифі Supabase (використано ~5% від 500 МБ), Vercel Hobby (функції на ліміті:
        12/12), Resend free (~8 листів/місяць з ліміту 3 000). Перехід на Pro коштував би
        ~$65/місяць, але поточне single-practice використання цього не потребує.
      </p>
      <p>
        Метрики впровадження зʼявляться, коли система накопичить дані використання. Поки
        що історія — це сам факт розгортання.
      </p>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>
        Single-PIN auth — свідоме спрощення. Модель користувачів: «одна амбулаторія, два
        співробітники, доступу пацієнтів немає» — окремі акаунти на користувача були б
        накладними витратами без цінності. Якщо система пізніше розшириться в
        multi-tenant (кілька амбулаторій) — це перше, що варто перепроєктувати.
      </p>
      <p>
        Ліміт 12 функцій Vercel Hobby — живе обмеження. Наступна ітерація (Phase 5) має
        об’єднати ендпойнти.
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
          Найскладніше було не React-UI чи налаштування Supabase — а рішення, що
          моделювати. Виявилось, що «група ризику» — це звʼязок, а не атрибут. «Виявлений»
          і «контактний» — це статуси, а не окремі реєстри. Правильна модель даних
          означала, що UI вийшов природно.
        </li>
        <li>
          <strong>Безкоштовні тарифи покривають реальні клінічні навантаження, якщо
          скоуп обмежений.</strong> Амбулаторія з ~1 800 пацієнтами і двома щоденними
          користувачами вільно вміщається в безкоштовні квоти Supabase + Vercel + Resend.
          Історія вартості — це не примітка: для амбулаторії, що розглядає диджиталізацію,
          «$0/місяць на нашому масштабі» — найважливіший факт.
        </li>
        <li>
          <strong>Monkey-patching існуючого інструмента — легітимна стратегія інтеграції.</strong>{" "}
          Я міг би побудувати окремий sync-API і переписати потік даних розширення. Замість
          цього я обгортаю колбек відображення розширення й даю йому пасивно живити модуль.
          Результат: 921 LOC «склейки», жодних змін у core-логіці розширення, автоматичний
          backfill будь-якого пацієнта, якого відкриває лікар.
        </li>
        <li>
          <strong>
            Блокувальний overlay виявився правильною UX-відповіддю на воркфлоу
            індикаторів, який лікарі інакше пропускали.
          </strong>{" "}
          Розширення Medics спочатку вимагало кліку по кнопці для запуску аналізу
          індикаторів — 15-20 секунд обчислень, але гірше — пауза, яка ламала потік. Коли я інтегрував з ТБ-модулем і зробив
          обовʼязковою перевірку дати останньої флюорографії, я додав блокувальний overlay
          на картку пацієнта: зʼявляється щойно картка відкрилась, автоматично запускає
          аналіз індикаторів, синкає дату флюорографії в ТБ-модуль і зникає. Парадоксально
          це був кращий UX, ніж опційна кнопка: прибрати вибір — прибрати пропуск. Урок
          узагальнюється: у клінічних воркфлоу «зроби зручним у використанні» часто
          слабше за «зроби це default-шляхом».
        </li>
        <li>
          <strong>Економіка безкоштовних тарифів для первинки надзвичайно прощальна.</strong>{" "}
          Безкоштовні квоти Supabase + Vercel + Resend увібрали і цей модуль (1 851
          пацієнт), і Studioverse-платформу (37 користувачів, 22 проєкти) одночасно без
          досягнення стелі. Що б не означало «масштаб» на рівні сільської амбулаторії —
          free tier його покриває.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        Активний пріоритет — розширення того ж патерну на інші журнали, які має вести
        первинка, а саме вакцинація. ТБ-модуль уже
        доводить, що архітектура працює — реєстр пацієнтів + заплановані події + синк МІС
        + cron-нагадування — це узагальнювана форма. Кожен новий модуль потребує своєї
        схеми й правил, але загальна рамка переноситься. Вторинні задачі в беклозі:
        тригери журналу аудиту (таблиця є, обвʼязка не завершена), UI для вкладень
        (таблиця є, UI немає), і зміна PIN через UI налаштувань (зараз тільки через env).
        Multi-practice / multi-tenant переписування свідомо поза скоупом — простота
        single-PIN варта збереження, доки не зʼявиться реальний попит від іншої амбулаторії.
      </p>
    </>
  );
}
