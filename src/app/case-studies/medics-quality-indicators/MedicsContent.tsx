"use client";

import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import SectionHeading from "@/components/SectionHeading";
import MetricsTable from "@/components/MetricsTable";
import TechStack from "@/components/TechStack";
import ProcessNote from "@/components/ProcessNote";
import { useLocale } from "@/lib/i18n/LocaleContext";

const screenshot = {
  en: "Extension overlay on a patient card. Sensitive data redacted.",
  uk: "Накладений віджет розширення на карточці пацієнта. Чутливі дані замазано.",
};

const copy = {
  en: {
    title: "Medics Quality Indicators",
    subtitle:
      "A Chrome extension that overlays on Ukraine's Medics EMR to surface 13 primary-care quality indicators per patient in real time.",
    tags: ["Healthcare", "Chrome Extension", "AI-assisted dev"],
    status: "Production",
    statusVariant: "production" as const,
    tldr:
      "Ukrainian primary care physicians must meet quality indicators set by the Ministry of Health, but the Medics EMR doesn't surface per-patient indicator status — doctors review fields manually, with predictable results: low oncology screening coverage nationwide. I built a Chrome extension that parses the patient view and shows indicator status (done / overdue / partial / missing) in real time. Currently used by physicians at the primary care clinic where I practice. Over 3 months, colorectal screening referrals grew ×27, prostate ×4.7, breast ×5.8 — independently verifiable through the national health service's cohort-level performance reports.",
    section: {
      context: "Context",
      solution: "Solution",
      impact: "Impact",
      tech: "Tech stack & architecture",
      learned: "What I learned",
      next: "Next steps",
    },
    metricsHeaders: [
      "Screening",
      "Referrals Jan",
      "Referrals Apr",
      "Change",
      "Actual coverage Jan → Apr",
    ],
    metricsRows: [
      {
        label: "Colorectal cancer",
        values: ["0.11%", "2.91%", "×27", "0.030% → 0.081% (+174%)"],
        emphasis: true,
      },
      { label: "Prostate cancer", values: ["0.73%", "3.42%", "×4.7", "0.226% → 0.502% (+123%)"] },
      { label: "Breast cancer", values: ["0.61%", "3.54%", "×5.8", "0.298% → 0.324% (+9%)"] },
      { label: "HIV screening", values: ["5.71%", "9.72%", "+70%", "—"] },
      { label: "CV risk assessment", values: ["~61%", "~61% (+0.5%)", "Stable", "—"] },
    ],
    techGroups: [
      {
        label: "Frontend",
        items: ["Pure JavaScript (ES6+)", "Chrome Extension Manifest V3", "DOM API"],
      },
      { label: "Storage", items: ["chrome.storage.sync"] },
      {
        label: "Matching",
        items: ["Rule-based engine (no LLM)", "ICPC-2 / ICD-10 whitelist", "LOINC observations"],
      },
      {
        label: "Codebase",
        items: ["~3,800 LOC core", "4,887 LOC including TB Module integration"],
      },
    ],
    process: {
      ownership:
        "I identified the clinical problem, specified the indicator logic against MoH regulations, designed the rule-based parser architecture, deployed to my colleagues, and measured adoption against the national health service's cohort-level performance reports.",
      collaboration:
        "AI-assisted development with Claude. AI generated implementation; I owned product, design, and architectural framing decisions. I can read any part of the code and explain what it does; for changes, I work with AI as my development partner.",
      timeSpent: "~6 weeks of part-time work in early 2025; ongoing maintenance.",
    },
  },
  uk: {
    title: "Medics Quality Indicators",
    subtitle:
      "Розширення Chrome, що накладається на МІС Medics і показує 13 індикаторів якості первинної медичної допомоги для кожного пацієнта в реальному часі.",
    tags: ["Healthcare", "Розширення Chrome", "AI-розробка"],
    status: "У продакшені",
    statusVariant: "production" as const,
    tldr:
      "Українські сімейні лікарі мають виконувати індикатори якості, встановлені наказами МОЗ, але МІС Medics не показує статус індикаторів для конкретного пацієнта — лікарі переглядають поля вручну, з передбачуваним результатом: низьке охоплення скринінгами по країні. Я зробив розширення Chrome, яке парсить карточку пацієнта і показує статус індикаторів (виконано / прострочено / частково / відсутнє) у реальному часі. Зараз використовується лікарями амбулаторії, де я практикую. За 3 місяці направлення на колоректальний скринінг зросли ×27, простати ×4,7, грудей ×5,8 — незалежно перевіряється звітами національної служби здоровʼя на рівні когорти.",
    section: {
      context: "Контекст",
      solution: "Рішення",
      impact: "Результат",
      tech: "Технології та архітектура",
      learned: "Що я зрозумів",
      next: "Що далі",
    },
    metricsHeaders: [
      "Скринінг",
      "Направлення січень",
      "Направлення квітень",
      "Зміна",
      "Фактичне охоплення січ → кв",
    ],
    metricsRows: [
      {
        label: "Колоректальний рак",
        values: ["0,11%", "2,91%", "×27", "0,030% → 0,081% (+174%)"],
        emphasis: true,
      },
      { label: "Рак простати", values: ["0,73%", "3,42%", "×4,7", "0,226% → 0,502% (+123%)"] },
      { label: "Рак грудей", values: ["0,61%", "3,54%", "×5,8", "0,298% → 0,324% (+9%)"] },
      { label: "Скринінг ВІЛ", values: ["5,71%", "9,72%", "+70%", "—"] },
      { label: "Серцево-судинний ризик", values: ["~61%", "~61% (+0,5%)", "Стабільно", "—"] },
    ],
    techGroups: [
      {
        label: "Фронтенд",
        items: ["Pure JavaScript (ES6+)", "Chrome Extension Manifest V3", "DOM API"],
      },
      { label: "Сховище", items: ["chrome.storage.sync"] },
      {
        label: "Зіставлення",
        items: ["Rule-based engine (без LLM)", "Whitelist ICPC-2 / МКХ-10", "Спостереження LOINC"],
      },
      {
        label: "Кодова база",
        items: ["~3 800 LOC ядра", "4 887 LOC з інтеграцією ТБ-модуля"],
      },
    ],
    process: {
      ownership:
        "Визначив клінічну проблему, специфікував логіку індикаторів за наказами МОЗ, спроєктував архітектуру rule-based парсера, розгорнув для колег і виміряв впровадження по звітах національної служби здоровʼя на рівні когорти.",
      collaboration:
        "AI-асистована розробка з Claude. AI генерував реалізацію; за продуктові, дизайнерські та архітектурні рамки відповідав я. Можу прочитати будь-яку частину коду й пояснити, що вона робить; для змін працюю з AI як з партнером.",
      timeSpent:
        "~6 тижнів part-time на початку 2025; підтримка триває.",
    },
  },
};

export default function MedicsContent() {
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
        src="/images/medics/extension-overlay.png"
        alt="Medics extension overlay showing indicator status on a patient card"
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
        Ukraine&apos;s national health service ties primary care reimbursement to a set of
        quality indicators codified by Ministry of Health orders — cancer screenings,
        cardiovascular risk assessment, TB and HIV screening, age-based preventive exams. A
        family physician with ~1,800 patients on their declaration list is responsible for
        hitting these indicators across the entire roster.
      </p>
      <p>
        The problem is operational. To know which screenings a specific patient still needs,
        a doctor opens their card in Medics — one of the largest EMRs used in Ukrainian
        primary care — and manually reviews diagnoses, observations, referrals, and
        diagnostic reports across multiple collapsed sections. With a 15-minute appointment
        slot, this isn&apos;t done thoroughly. The country-wide outcome is well-documented:
        low oncology screening coverage, missed cardiovascular risk windows, declining
        indicator performance year-over-year.
      </p>
      <p>
        I&apos;m a family physician at a rural Ukrainian outpatient clinic with ~1,800
        patients on my list. I saw the same pattern in my own practice: the indicators
        existed, the EMR contained the data, but bridging the two was manual work that
        didn&apos;t happen consistently.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>
        I built a Chrome extension that runs as an overlay on medics.ua. When a doctor opens
        a patient card, the extension parses the page contents (diagnoses with ICPC-2 /
        ICD-10 codes, LOINC observations, referrals, diagnostic reports, interaction
        actions), runs the data through a rule-based matcher encoding the MoH indicator
        logic, and surfaces a per-patient status panel: which of 13 indicators are done,
        overdue, partial, or not started.
      </p>
      <p>The extension covers the following indicators:</p>
      <ul>
        <li>Cardiovascular risk score (full assessment)</li>
        <li>Hypertension management</li>
        <li>Diabetes screening</li>
        <li>Prostate cancer screening (referral + result)</li>
        <li>Colorectal cancer screening (referral + result)</li>
        <li>Breast cancer screening (referral + result)</li>
        <li>TB screening (4-symptom WHO)</li>
        <li>HIV screening</li>
        <li>Preventive exam, age 40-64</li>
        <li>Preventive exam, age 65+</li>
      </ul>
      <p>
        The matcher is deliberately rule-based, not LLM-driven. Indicator logic is
        regulatory — it has to be auditable, predictable, and explainable. A black-box model
        would create medico-legal liability. Rules are coded against ICPC-2 / ICD-10
        whitelists and LOINC observation codes, so when MoH updates the regulation, only the
        rule definitions change.
      </p>
      <p>
        A secondary feature auto-collects text for form 027/о (a standard outpatient summary
        form), pre-filling structured fields from the chart.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        Physicians at the primary care clinic where I practice (a cohort of family doctors
        managing parallel rosters) used the extension from February 2026 onward. The
        national health service sends monthly performance reports to outpatient clinics in
        Excel — these became the verification source.
      </p>
      <p>
        Over January → April 2026 the cohort showed measurable shifts in oncology screening
        behavior:
      </p>

      <MetricsTable headers={c.metricsHeaders} rows={c.metricsRows} />

      <p>Two observations matter:</p>
      <p>
        <strong>First</strong>, the lag pattern is clean. February (deployment month) showed
        early adoption (prostate cancer referrals lifted within the first month). March–April
        is where most of the cohort-wide gains landed — which matches the realistic timeline
        of doctors integrating a new tool into routine.
      </p>
      <p>
        <strong>Second</strong>, the cardiovascular risk indicator stayed stable. This is a
        healthcare-product win, not a healthcare-product disaster — it means the tool
        improved one outcome without regressing established practice. In tools that surface
        &quot;what&apos;s missing&quot;, there&apos;s a real risk of attention shift away
        from what&apos;s already working. That didn&apos;t happen.
      </p>
      <p>
        The &quot;actual coverage&quot; column is more informative than the referral column.
        Referral percentage shows what the doctor <em>ordered</em>; coverage shows what
        patients <em>actually completed</em>. Coverage moves slower (patients have to go to
        imaging centers, return for results), but it&apos;s the metric that matters for
        population health.
      </p>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>Architecturally the extension separates concerns into:</p>
      <ul>
        <li><code>parser.js</code> (176 LOC) — DOM selectors for medics.ua&apos;s AngularJS-based UI</li>
        <li><code>data-collector.js</code> (196 LOC) — interaction with collapsible sections, episode toggles</li>
        <li><code>analyzer.js</code> (898 LOC) — extracted data structured into a patient model</li>
        <li><code>indicators-rules.js</code> (436 LOC) — declarative rules per indicator (MoH regulation as code)</li>
        <li><code>indicator-matcher.js</code> (481 LOC) — pure matching logic against the patient model</li>
        <li><code>ui.js</code> (1,152 LOC) — overlay UI injected into the page</li>
      </ul>
      <p>
        About 30% of the codebase (rules + matcher + helpers, ~1,100 LOC) is
        platform-agnostic — it would port to a different EMR by writing a new parser. The
        current design doesn&apos;t formalize a <code>PlatformAdapter</code> interface, but
        the separation is clean enough that adapting to Helsi or EMCi is a known-shape
        engineering task, not a rewrite.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>Regulatory logic deserves rule-based code, not AI inference.</strong>{" "}
          Black-box models in clinical decision support create liability and break the audit
          trail. The instinct to &quot;throw an LLM at it&quot; was wrong here. Hand-encoded
          rules against ICPC-2 codes give us explainability, reproducibility, and a clear
          update path when regulations change.
        </li>
        <li>
          <strong>Distribution among doctors works socially, not technically.</strong> I
          never built an install pipeline, an admin panel, or onboarding. Colleagues
          adopted the tool because they saw it on each other&apos;s screen and asked for
          access. For internal clinical tools, professional curiosity is the channel.
        </li>
        <li>
          <strong>The most valuable metric was the one the doctors didn&apos;t ask for.</strong>{" "}
          Referral % is what doctors track. <em>Actual coverage</em> (what patients
          completed) is what the national health service pays for. Showing both
          side-by-side reframed the conversation about which indicators matter.
        </li>
        <li>
          <strong>The adoption story among older physicians surprised me.</strong> Most of
          my colleagues are senior doctors near retirement age. I expected resistance to a
          Chrome extension layered on top of their EMR. What I got instead was curiosity and
          active use — the metrics confirm it. Worth remembering when designing tools for
          clinical users: the demographic stereotype about technology adoption breaks down
          when the tool removes work rather than adding it.
        </li>
        <li>
          <strong>
            Encoding regulatory logic into code was less the bottleneck than choosing the
            right AI partner.
          </strong>{" "}
          The MoH indicator rules are precisely written — translating them to ICPC-2
          whitelists and observation matching was tractable. What took longer was the
          meta-problem: this was my first AI-native build, and I cycled through several
          models and prompting approaches before landing on Claude with a task decomposition
          that fit my mental model. The lesson generalizes: when you&apos;re new to
          AI-assisted development, the tool selection and workflow design is the real curve,
          not the project itself.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        The extension already covers all 13 indicators currently defined for primary care
        quality reporting in Ukraine, so the core surface is feature-complete. The active
        work is integration with the TB Module — already shipped through an extended
        display callback that auto-syncs diagnoses and fluorography results into the TB
        system. A second direction I&apos;m considering is a parallel module for vaccination
        tracking, which would follow the same pattern: parse the EMR, surface what&apos;s
        due, sync the result. Whether that ships depends on whether the underlying schema
        rewards it — vaccination tracking lives in a different part of the EMR with
        different data shape, and a copy-paste of the indicator logic may not be the right
        approach.
      </p>
    </>
  );
}

function UkBody({ c }: { c: typeof copy.uk }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        Українська національна служба здоровʼя повʼязує фінансування первинки з набором
        індикаторів якості, кодифікованих наказами МОЗ — онкоскринінги, оцінка
        серцево-судинного ризику, скринінг ТБ і ВІЛ, профоглядові за віком. Сімейний лікар
        з ~1 800 пацієнтів у декларації відповідає за виконання цих індикаторів по всьому
        реєстру.
      </p>
      <p>
        Проблема операційна. Щоб зрозуміти, які скринінги потрібні конкретному пацієнтові,
        лікар відкриває картку у МІС (ми особисто користуємось Medics) і вручну переглядає діагнози, спостереження, направлення і висновки в кількох
        згорнутих розділах. На 15-хвилинному прийомі це не виконують ретельно. Підсумок по
        країні задокументований: низьке охоплення онкоскринінгом, пропущені вікна
        серцево-судинного ризику, спадні показники індикаторів рік за роком.
      </p>
      <p>
        Я сімейний лікар у сільській амбулаторії з ~1 800 пацієнтами в декларації. Я бачив
        той самий патерн у власній практиці: індикатори існують, МІС містить дані, але
        міст між ними — ручна робота, яка стабільно не виконується.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>
        Я зробив розширення Chrome, яке працює як накладений віджет на medics.ua. Коли
        лікар відкриває картку пацієнта, розширення парсить вміст сторінки (діагнози з
        кодами ICPC-2 / МКХ-10, спостереження LOINC, направлення, висновки досліджень, дії
        взаємодії), проганяє дані через rule-based матчер з логікою індикаторів МОЗ і
        показує панель статусу по пацієнту: які з 13 індикаторів виконані, прострочені,
        часткові або не розпочаті.
      </p>
      <p>Розширення охоплює такі індикатори:</p>
      <ul>
        <li>Серцево-судинний ризик (повна оцінка)</li>
        <li>Контроль артеріальної гіпертензії</li>
        <li>Скринінг діабету</li>
        <li>Скринінг раку простати (направлення + результат)</li>
        <li>Скринінг колоректального раку (направлення + результат)</li>
        <li>Скринінг раку грудей (направлення + результат)</li>
        <li>Скринінг ТБ (4-симптомний ВООЗ)</li>
        <li>Скринінг ВІЛ</li>
        <li>Профогляд, 40-64 роки</li>
        <li>Профогляд, 65+</li>
      </ul>
      <p>
        Матчер свідомо rule-based, не на LLM. Логіка індикаторів — регуляторна, вона має
        бути аудитованою, передбачуваною і пояснюваною. Модель чорної скрині (як з LLM) створює
        медико-юридичну відповідальність. Правила закодовані по whitelist&apos;ах ICPC-2 /
        МКХ-10 і кодах LOINC, тож коли МОЗ оновлює наказ, змінюються тільки визначення
        правил.
      </p>
      <p>
        Додаткова функція — автозбір тексту для форми 027/о (виписка з амбулаторії), з
        попереднім заповненням структурованих полів із карти.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        Лікарі амбулаторії, де я практикую (когорта сімейних лікарів), користувалися
        розширенням з лютого 2026. Національна служба здоровʼя щомісяця надсилає звіти
        про ефективність амбулаторіям у Excel — вони стали джерелом верифікації.
      </p>
      <p>
        З січня по квітень 2026 когорта показала виміряні зрушення в поведінці щодо
        онкоскринінгу:
      </p>

      <MetricsTable headers={c.metricsHeaders} rows={c.metricsRows} />

      <p>Дві важливі речі:</p>
      <p>
        <strong>Перше</strong>, патерн лагу чистий. Лютий (місяць розгортання) показав
        ранній підйом (направлення на скринінг простати зросли в перший же місяць).
        Березень–квітень — період, на який припали основні зміни в когорті, що відповідає
        реальному часу інтеграції нового інструмента в рутину лікаря.
      </p>
      <p>
        <strong>Друге</strong>, індикатор серцево-судинного ризику залишився стабільним.
        Це виграш — інструмент покращив одну метрику
        без регресу в усталеній практиці. Інструменти, що підсвічують «чого бракує», мають
        реальний ризик відтягнути увагу від того, що вже працює. Цього не сталося.
      </p>
      <p>
        Колонка «фактичне охоплення» інформативніша за колонку направлень. Відсоток
        направлень показує, що лікар <em>призначив</em>; охоплення — що пацієнти
        <em> справді зробили</em>. Охоплення рухається повільніше (пацієнти мають дійти до
        діагностичних центрів, повернутись із результатами), але це метрика, яка матиме
        значення для популяційного здоровʼя.
      </p>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>Архітектурно розширення розділене за відповідальностями:</p>
      <ul>
        <li><code>parser.js</code> (176 LOC) — DOM-селектори для AngularJS-інтерфейсу medics.ua</li>
        <li><code>data-collector.js</code> (196 LOC) — взаємодія зі згортаними секціями та епізодами</li>
        <li><code>analyzer.js</code> (898 LOC) — структурування зібраних даних у модель пацієнта</li>
        <li><code>indicators-rules.js</code> (436 LOC) — декларативні правила по індикаторах (наказ МОЗ як код)</li>
        <li><code>indicator-matcher.js</code> (481 LOC) — чиста логіка зіставлення проти моделі пацієнта</li>
        <li><code>ui.js</code> (1 152 LOC) — overlay UI, що інʼєктиться в сторінку</li>
      </ul>
      <p>
        Близько 30% кодової бази (правила + матчер + помічники, ~1 100 LOC) —
        platform-agnostic, переноситься в іншу МІС написанням нового парсера. У поточному
        дизайні немає формалізованого інтерфейсу <code>PlatformAdapter</code>, але
        розділення достатньо чисте, щоб адаптація під Helsi чи іншу МІС була інженерною
        задачею відомої форми, а не переписуванням.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>Регуляторна логіка заслуговує на rule-based код, не на AI-інференс.</strong>{" "}
          Чорні скрині в системах клінічної підтримки рішень створюють відповідальність і
          ламають аудит. Інстинкт «накинути LLM» тут був неправильним. Закодовані вручну
          правила по ICPC-2 дають пояснюваність, відтворюваність і чіткий шлях оновлення,
          коли змінюється регуляція.
        </li>
        <li>
          <strong>Розповсюдження серед лікарів працює соціально, а не технічно.</strong> Я
          не будував install-pipeline, адмінку чи онбординг. Пʼять лікарів почали
          користуватись, бо побачили інструмент на екрані й попросили доступ. Для
          внутрішніх клінічних інструментів канал — професійна цікавість.
        </li>
        <li>
          <strong>Найцінніша метрика — та, про яку лікарі не просили.</strong> Лікарі
          відслідковують відсоток направлень. <em>Фактичне охоплення</em> (що пацієнти
          справді пройшли) — це те, за що платить національна служба здоровʼя. Показати ці метрики поряд
          переформатувало розмову про те, які індикатори мають значення.
        </li>
        <li>
          <strong>Історія впровадження серед старших лікарів мене здивувала.</strong>{" "}
          Більшість моїх колег — лікарі поважного віку. Я очікував опору
          щодо Chrome-розширення поверх МІС. Натомість отримав цікавість і активне
          використання — метрики це підтверджують. Корисно памʼятати при дизайні
          інструментів для клініциста: демографічний стереотип щодо технологій ламається,
          коли інструмент знімає роботу, а не додає.
        </li>
        <li>
          <strong>
            Кодування регуляторної логіки виявилося меншим вузьким місцем, ніж вибір AI-партнера.
          </strong>{" "}
          Правила індикаторів МОЗ написані чітко — переклад у whitelist&apos;и ICPC-2 і
          зіставлення спостережень було керованою задачею. Довше тривала мета-проблема: це
          був мій перший AI-native білд, і я перепробував кілька моделей і підходів до
          промптингу, поки не зупинився на Claude з декомпозицією задач, що лягла на мій
          ментальний шаблон. Урок узагальнюється: коли ви новачок у AI-розробці, реальна
          крива — вибір інструмента й воркфлоу, а не сам проєкт.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        Розширення вже охоплює всі 13 індикаторів, які зараз визначені для звітування
        якості первинки в Україні, тож основна поверхня feature-complete. Активна робота —
        інтеграція з ТБ-модулем; уже випущена через розширений display-callback, що
        автоматично синхронізує діагнози й результати флюорографії в ТБ-систему. Другий
        напрямок, який розглядаю — паралельний модуль для відстеження вакцинації, за тим
        самим патерном: парсимо МІС, показуємо, що потрібно, синхронізуємо результат. Чи
        випустимо — залежить від того, чи виправдовує цю модель схема даних: вакцинаційний
        облік живе в іншій частині МІС з іншою формою даних, і копіпаст логіки індикаторів
        може бути неправильним підходом.
      </p>
    </>
  );
}
