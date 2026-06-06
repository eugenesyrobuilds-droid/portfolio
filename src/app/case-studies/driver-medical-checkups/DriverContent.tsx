"use client";

import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import SectionHeading from "@/components/SectionHeading";
import TechStack from "@/components/TechStack";
import ProcessNote from "@/components/ProcessNote";
import PullQuote from "@/components/PullQuote";
import { useLocale } from "@/lib/i18n/LocaleContext";

const screenshot = {
  en: "Medic dashboard with reconciliation status per driver.",
  uk: "Дашборд медпрацівника зі статусом звірки по кожному водієві.",
};

const copy = {
  en: {
    title: "Pre-Trip Driver Medical Checkups",
    subtitle:
      "Digital pre-trip medical screening system with USB-synchronized breathalyzer integration.",
    tags: ["Healthcare", "Device integration", "Compliance & encryption"],
    status: "Functional · Pending regulatory approval",
    statusVariant: "regulatory" as const,
    tldr:
      "Ukrainian commercial drivers require a pre-trip medical check before each shift: pulse, blood pressure, temperature, and breathalyzer reading, all logged in a paper journal. As one of the physicians performing these checks, I built a digital system that replaces the journal — the medic enters readings on a web app, plugs the Drager iBlow 10 breathalyzer into USB at end-of-shift, and a desktop agent reconciles software-entered records with the device's onboard memory using time-windowed matching to confirm legitimacy. Production-grade: AES-256 encryption on medical fields, JWT auth, signed PDFs with JKS-based electronic signature, row-level multi-tenancy. Functional today; the regulatory path to replacing the paper journal is open but uncertain.",
    section: {
      context: "Context",
      solution: "Solution",
      impact: "Impact",
      tech: "Tech stack & architecture",
      learned: "What I learned",
      next: "Next steps",
    },
    techGroups: [
      {
        label: "Backend",
        items: [
          "Python 3.12",
          "FastAPI",
          "SQLAlchemy 2.0 (async)",
          "asyncpg",
          "Alembic (8 migrations)",
          "Pydantic v2",
        ],
      },
      {
        label: "Frontend",
        items: ["React 18", "TypeScript", "Vite", "Tailwind 3.4", "Zustand", "react-signature-canvas"],
      },
      {
        label: "USB agent",
        items: ["Electron 33", "TypeScript", "serialport 12", "ws (local WebSocket on port 8765)"],
      },
      {
        label: "Auth",
        items: [
          "JWT (access 30 min / refresh 14 days)",
          "bcrypt",
          "Brute-force lockout (5 attempts → 15 min)",
        ],
      },
      {
        label: "Encryption",
        items: [
          "AES-256-GCM on medical fields (pulse, BP, temperature, BAC)",
          "SQLAlchemy TypeDecorator",
          "Key in env",
        ],
      },
      { label: "Multi-tenancy", items: ["Row-level via organization_id on every table"] },
      {
        label: "PDF",
        items: [
          "WeasyPrint for generation",
          "pyHanko + pyjks for electronic signature",
          "JKS key held in RAM only",
        ],
      },
      { label: "Email", items: ["aiosmtplib for SMTP notifications when a driver is ruled unfit"] },
      { label: "Storage", items: ["PostgreSQL 16"] },
    ],
    process: {
      ownership:
        "I identified the gap (medic-entered records vs. device-recorded readings unlinked), reverse-engineered the Drager USB protocol, designed the time-window reconciliation logic, built the three-tier architecture, and shipped to my own workplace.",
      collaboration:
        "AI-assisted development with Claude. I owned product, security, and architectural decisions; AI partnered on implementation across all three tiers (Python backend, React frontend, Electron agent).",
      timeSpent:
        "~20 hours of build time. The reverse-engineering phase of the USB protocol added additional time on top.",
    },
  },
  uk: {
    title: "Передрейсові медогляди водіїв",
    subtitle:
      "Цифрова система передрейсового медогляду з інтеграцією алкотестера через USB.",
    tags: ["Healthcare", "Інтеграція пристроїв", "Compliance і шифрування"],
    status: "Працює · Очікує регуляторного дозволу",
    statusVariant: "regulatory" as const,
    tldr:
      "Українські комерційні водії проходять передрейсовий медогляд перед кожною зміною: пульс, тиск, температура і показники алкотестера, усе фіксується в паперовому журналі. Як один з лікарів, що ці огляди проводить, я зробив цифрову систему, яка замінює журнал — медик вводить показники у вебзастосунок, наприкінці зміни підключає алкотестер Drager iBlow 10 по USB, і десктопний агент звіряє програмні записи з памʼяттю пристрою через time-window matching для підтвердження легітимності. Production-grade: AES-256 шифрування медичних полів, JWT auth, підписані PDF із JKS-електронним підписом, row-level multi-tenancy. Технічно працює сьогодні; регуляторний шлях до заміни паперового журналу відкритий, але невизначений.",
    section: {
      context: "Контекст",
      solution: "Рішення",
      impact: "Результат",
      tech: "Технології та архітектура",
      learned: "Що я зрозумів",
      next: "Що далі",
    },
    techGroups: [
      {
        label: "Бекенд",
        items: [
          "Python 3.12",
          "FastAPI",
          "SQLAlchemy 2.0 (async)",
          "asyncpg",
          "Alembic (8 міграцій)",
          "Pydantic v2",
        ],
      },
      {
        label: "Фронтенд",
        items: ["React 18", "TypeScript", "Vite", "Tailwind 3.4", "Zustand", "react-signature-canvas"],
      },
      {
        label: "USB-агент",
        items: ["Electron 33", "TypeScript", "serialport 12", "ws (локальний WebSocket на порту 8765)"],
      },
      {
        label: "Аутентифікація",
        items: [
          "JWT (access 30 хв / refresh 14 днів)",
          "bcrypt",
          "Лок при brute-force (5 спроб → 15 хв)",
        ],
      },
      {
        label: "Шифрування",
        items: [
          "AES-256-GCM на медичних полях (пульс, тиск, температура, BAC)",
          "SQLAlchemy TypeDecorator",
          "Ключ у env",
        ],
      },
      { label: "Multi-tenancy", items: ["Row-level через organization_id на кожній таблиці"] },
      {
        label: "PDF",
        items: [
          "WeasyPrint для генерації",
          "pyHanko + pyjks для електронного підпису",
          "JKS-ключ тільки в RAM",
        ],
      },
      { label: "Email", items: ["aiosmtplib для SMTP-сповіщень, коли водій визнаний непридатним"] },
      { label: "Сховище", items: ["PostgreSQL 16"] },
    ],
    process: {
      ownership:
        "Визначив розрив (записи медика і покази пристрою не звʼязані), reverse-engineering USB-протоколу Drager, спроєктував логіку time-window reconciliation, побудував три-ярусну архітектуру і випустив на власне робоче місце.",
      collaboration:
        "AI-асистована розробка з Claude. За продуктові, безпекові й архітектурні рішення відповідав я; AI був партнером у реалізації на всіх трьох ярусах (Python-бекенд, React-фронтенд, Electron-агент).",
      timeSpent:
        "~20 годин розробки. Фаза reverse-engineering USB-протоколу додала ще часу зверху.",
    },
  },
};

export default function DriverContent() {
  const { locale } = useLocale();
  const c = copy[locale];

  return (
    <CaseStudyLayout
      slug="driver-medical-checkups"
      title={c.title}
      subtitle={c.subtitle}
      status={c.status}
      statusVariant={c.statusVariant}
      tags={c.tags}
      tldr={c.tldr}
      readingTimeMin={10}
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
        src="/images/drager/medic-dashboard.png"
        alt="Medic dashboard with reconciliation status per driver"
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
        Ukrainian law requires commercial drivers to undergo a pre-trip medical exam before
        each shift. The medic on duty measures pulse, blood pressure, body temperature, and
        uses a breathalyzer (Drager-brand or equivalent) to confirm sobriety. Each reading
        is logged in a paper journal with the driver&apos;s name, time, and the medic&apos;s
        signature.
      </p>
      <p>
        The paper journal is the legal artifact. It&apos;s auditable by transport
        regulators, retained for years, and serves as proof that the check was performed
        correctly.
      </p>
      <p>Two problems with the paper status quo:</p>
      <ul>
        <li>
          <strong>Reconciliation is manual.</strong> The breathalyzer device stores its own
          internal readings log. The paper journal records what the medic <em>wrote down</em>.
          There&apos;s no enforced link between the two — a journal can be filled in without
          an actual breathalyzer test, or vice versa.
        </li>
        <li>
          <strong>It&apos;s slow.</strong> Logging by hand across pulse, BP, temperature,
          BAC for each driver, multiplied across a shift, eats into the medic&apos;s time
          and increases transcription errors.
        </li>
      </ul>
      <p>
        I perform these checks regularly as part of my work. I built the digital system to
        solve both problems for my own use, with a path to broader deployment if I can get
        it certified as a legal replacement for the paper journal.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>
        A computer-based system where the medic logs each driver&apos;s pre-trip check
        digitally (pulse, BP, temperature, BAC reading, time, driver identity). At the end
        of a shift, the Drager breathalyzer plugs into USB and the system reads the
        device&apos;s internal log directly.
      </p>
      <p>
        The system then reconciles: for every BAC reading the medic entered in software,
        the corresponding reading should exist in the device&apos;s onboard memory at
        approximately the same time. A check is &quot;verified&quot; only when both records
        match. Mismatches are flagged.
      </p>
      <p>
        This produces a legitimacy claim that paper can&apos;t: the digital log isn&apos;t
        just what the medic claims happened — it&apos;s what the medic claimed <em>and</em>{" "}
        what the device recorded, cross-referenced.
      </p>
      <p>
        The function works end-to-end today. What&apos;s open is regulatory: legally
        replacing the paper journal requires authorization from the institutions that
        mandated the paper form (Ministry of Health and Ministry of Internal Affairs).
        I&apos;ve been through the initial outreach with MoH and NSZU, which directed me to
        file a formal public inquiry with the authorizing ministries — a process with a
        30-day nominal response window but unreliable in practice.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        The system is in functional production at my own workplace but cannot yet legally
        replace the paper journal — so today it runs alongside paper rather than replacing
        it. The deployment story will be told properly once regulatory approval is in place.
      </p>
      <p>What the system already proves:</p>
      <ul>
        <li>
          <strong>The cross-referencing approach works technically.</strong> USB sync against
          the Drager iBlow 10&apos;s internal memory produces a clean time-windowed
          reconciliation log per shift.
        </li>
        <li>
          <strong>A reverse-engineered USB protocol is a sustainable foundation.</strong>{" "}
          The vendor publishes Windows-only software; macOS support was traced manually
          with a USB sniffer. The protocol now lives in ~500 LOC of TypeScript inside an
          Electron menu-bar agent.
        </li>
        <li>
          <strong>The compliance gap is regulatory, not technical.</strong> The paper
          journal exists because the law says so, not because the workflow needs it. The
          system already implements what a regulatory-ready electronic equivalent would
          need: AES-256-GCM encryption of medical fields, JWT auth with brute-force
          lockout, electronic signatures on PDF acts via JKS-based pyHanko signing, full
          audit log with signing IP and user-agent, row-level multi-tenancy via{" "}
          <code>organization_id</code>, and per-shift device memory dumps stored for
          verification.
        </li>
      </ul>

      <PullQuote>
        Working code that&apos;s not legally usable is, for compliance products,
        indistinguishable from working code that doesn&apos;t exist.
      </PullQuote>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <p>
        The system is a three-tier application: a web app the medic uses during the shift,
        a backend handling business logic and storage, and a desktop USB agent that talks
        to the breathalyzer.
      </p>
      <TechStack groups={c.techGroups} />
      <p>
        <strong>Codebase size</strong>: ~3,000 LOC Python backend (8 API modules + services
        + models + schemas), ~5,000 LOC TypeScript frontend (8 pages + ~12 components),
        ~500 LOC USB agent.
      </p>
      <p>
        <strong>Reconciliation logic.</strong> The hardest design decision was how to match
        a medic-entered exam to the breathalyzer&apos;s onboard reading without trusting
        the medic&apos;s claim about which device record corresponds. The solution is
        time-windowing: when the medic clicks &quot;start exam&quot; in the web app, a
        window opens. The driver blows into the device during the window. The device stores
        its reading to onboard memory and resets to ready-state. The medic clicks &quot;end
        exam&quot;, closing the window. At end-of-shift, when the device plugs into USB,
        the agent reads the device memory and the backend reconciles: for each
        medic-entered exam, find the device record whose timestamp falls inside that
        exam&apos;s window. Unmatched device records or unmatched exams get flagged.
        Matched pairs become the verified legal record.
      </p>
      <p>
        The USB agent runs as a menu-bar Electron app on macOS (Intel + Apple Silicon,
        distributed as .dmg via electron-builder). The web frontend calls it over a local
        WebSocket on port 8765 to fetch device records on demand.
      </p>
      <p>
        <strong>Deployment status.</strong> Currently runs locally on the workplace
        machine: PostgreSQL in Docker, backend via Uvicorn, frontend via Vite dev server.
        Production deployment (Caddy + HTTPS, containerized backend, backups) is scoped but
        not done — gated on the regulatory question described below.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>
            Reverse-engineering a vendor USB protocol is a tractable solo project if you
            commit to the boring part.
          </strong>{" "}
          Drager publishes the iBlow 10 with macOS no-go status — software exists only for
          Windows. To map the protocol I borrowed a Windows laptop, installed a USB
          sniffer, and ran traffic between the official client and the device for several
          hours while triggering every operation I could. With enough capture data, the
          protocol shape emerged. The lesson isn&apos;t about USB — it&apos;s about
          timeboxing: most &quot;we&apos;d need vendor access&quot; problems are actually
          &quot;we&apos;d need a weekend with a sniffer&quot; problems.
        </li>
        <li>
          <strong>Time-windowing was the right abstraction for cross-device reconciliation.</strong>{" "}
          I started by trying to match by content (BAC value) and quickly realized that two
          consecutive drivers with similar readings would alias. Matching by timestamp
          alone has the same issue if device clock drifts. The breakthrough was reframing:
          don&apos;t match individual records, match windows-and-records. Each exam is a
          window owned by the medic&apos;s UI; each device record is a point in time; one
          window owns one point. Mismatches are anomalies. This generalized into a clean
          audit log: every legal record has a verifiable provenance pair.
        </li>
        <li>
          <strong>Regulatory inertia is a real product risk and worth pricing in early.</strong>{" "}
          Working code that&apos;s not legally usable is, for compliance products,
          indistinguishable from working code that doesn&apos;t exist. To replace the paper
          journal, an electronic system needs sign-off from the institutions that authorized
          the paper form — Ministry of Health and Ministry of Internal Affairs. The official
          channel is a public inquiry; the official response window is ~30 days. In
          practice, my previous public inquiry to MoH went unanswered for months. I now
          treat regulatory feedback time as a hard input to the product roadmap, not a
          polite assumption. For future compliance-bound builds, I&apos;d start the
          regulatory conversation before the code.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        The technical product is functionally complete and could go to production today on
        the deployment track that&apos;s already scoped (Caddy + HTTPS, containerized
        backend, backups). What&apos;s blocking that is regulatory: until MoH and MIA
        respond to the public inquiry defining requirements for an electronic equivalent of
        the paper journal, the system can&apos;t legally replace the journal, and parallel
        running has limited value over the paper alone.
      </p>
      <p>
        Honestly, this is the part of the project I&apos;m reassessing. Months of
        unresponsive regulatory channels make the path forward unclear, and I&apos;m
        weighing whether to pause the build and revisit when conditions change, or to look
        for a different product surface where the same architecture (encrypted medical
        fields, signed PDFs, USB device sync, multi-tenancy) maps to a use case that
        doesn&apos;t require ministerial approval. An idea in the back of my mind is
        extending the agent to handle a Bluetooth pulse oximeter — same reconciliation
        model, broader applicability — but it&apos;s speculation, not a plan.
      </p>
    </>
  );
}

function UkBody({ c }: { c: typeof copy.uk }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        Українське законодавство вимагає від комерційних водіїв проходити передрейсовий
        медогляд перед кожною зміною. Черговий медпрацівник вимірює пульс, артеріальний
        тиск, температуру тіла й використовує алкотестер для
        підтвердження тверезості. Кожне вимірювання вноситься в паперовий журнал з ПІБ
        водія, часом і підписом медпрацівника.
      </p>
      <p>
        Паперовий журнал — юридичний артефакт. Його перевіряють транспортні регулятори,
        зберігають роками, і він слугує доказом, що огляд проведений правильно.
      </p>
      <p>Два проблеми паперового статус-кво:</p>
      <ul>
        <li>
          <strong>Звірка ручна.</strong> Алкотестер зберігає власний внутрішній журнал
          вимірів. Паперовий журнал фіксує те, що медпрацівник <em>записав</em>. Між ними
          немає примусового звʼязку — журнал можна заповнити без фактичного тесту, і
          навпаки.
        </li>
        <li>
          <strong>Це повільно.</strong> Запис від руки пульсу, тиску, температури і BAC
          для кожного водія зʼїдає час медпрацівника й збільшує
          помилки переписування.
        </li>
      </ul>
      <p>
        Я регулярно проводжу ці огляди в межах своєї роботи. Я зробив цифрову систему, щоб
        розвʼязати обидві проблеми для власного використання, з шляхом до ширшого
        розгортання, якщо вдасться сертифікувати її як легальну заміну паперового журналу.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>
        Компʼютерна система, де медпрацівник фіксує передрейсовий огляд кожного водія
        цифрово (пульс, тиск, температура, BAC, час, особа водія). Наприкінці зміни
        алкотестер підключається по USB і система зчитує його внутрішній журнал
        напряму.
      </p>
      <p>
        Далі система звіряє: для кожного BAC-вимірювання, яке медик ввів у софт, у памʼяті
        пристрою має існувати відповідне вимірювання в той самий час. Огляд
        вважається «звіреним» лише якщо обидва записи збігаються. Розбіжності
        підсвічуються.
      </p>
      <p>
        Це створює претензію на легітимність, яку папір не дає: цифровий журнал — це не
        просто те, що медик заявив, а те, що медик заявив <em>плюс</em> те, що зафіксував
        пристрій, з крос-посиланнями.
      </p>
      <p>
        Функція працює end-to-end сьогодні. Відкритим залишається регуляторне питання:
        легально замінити паперовий журнал можна тільки з дозволу інституцій, які
        мандатували паперову форму (МОЗ і МВС). Я пройшов початкову комунікацію з МОЗ і
        НСЗУ, які перенаправили мене на офіційне звернення громадянина до профільних
        міністерств — процес з номінальним 30-денним вікном відповіді, але ненадійним на
        практиці.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        Система працює в режимі продакшену на моєму робочому місці, але юридично замінити
        паперовий журнал ще не може — тож сьогодні працює паралельно з папером, а не
        замість нього. Історія розгортання буде розказана повноцінно, коли зʼявиться
        регуляторний дозвіл.
      </p>
      <p>Що система вже доводить:</p>
      <ul>
        <li>
          <strong>Підхід крос-посилань технічно працює.</strong> USB-синк проти
          внутрішньої памʼяті iBlow 10 дає чистий time-windowed журнал звірки на
          зміну.
        </li>
        <li>
          <strong>Reverse-engineered USB-протокол — стійка основа.</strong> Виробник
          публікує тільки Windows-софт; підтримку macOS я вивів вручну USB-сніфером.
          Протокол зараз живе в ~500 LOC TypeScript усередині menu-bar Electron-агента.
        </li>
        <li>
          <strong>Розрив у compliance — регуляторний, не технічний.</strong> Паперовий
          журнал існує, бо так каже закон, а не тому що його потребує воркфлоу. Система
          вже реалізує те, що мав би електронний еквівалент, готовий до регуляції:
          AES-256-GCM шифрування медичних полів, JWT auth з блокуванням при brute-force,
          електронні підписи на PDF-актах через JKS-based pyHanko, повний аудит-лог з IP і
          user-agent підписувача, row-level multi-tenancy через <code>organization_id</code>,
          і дампи памʼяті пристрою на кожну зміну для верифікації.
        </li>
      </ul>

      <PullQuote>
        Робочий код, який юридично не можна використовувати — для compliance-продуктів —
        невідрізнимий від коду, якого не існує.
      </PullQuote>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <p>
        Система — це три-ярусний застосунок: вебзастосунок, з яким медик працює протягом
        зміни, бекенд, що тримає бізнес-логіку й сховище, і десктопний USB-агент, що
        говорить з алкотестером.
      </p>
      <TechStack groups={c.techGroups} />
      <p>
        <strong>Розмір кодової бази</strong>: ~3 000 LOC Python-бекенд (8 API-модулів +
        сервіси + моделі + схеми), ~5 000 LOC TypeScript-фронтенд (8 сторінок + ~12
        компонентів), ~500 LOC USB-агент.
      </p>
      <p>
        <strong>Логіка звірки.</strong> Найскладніше дизайн-рішення — як співставити
        огляд, введений медиком, з вимірюванням у памʼяті пристрою, не довіряючи заяві
        медика про те, який саме запис пристрою відповідає. Рішення — time-windowing: коли
        медик натискає «розпочати огляд» у вебі, відкривається часове вікно. Водій дує в пристрій
        протягом цього вікна. Пристрій зберігає вимір у внутрішню памʼять і повертається в
        ready-state. Медик натискає «завершити огляд», закриваючи часове вікно. Наприкінці зміни,
        коли пристрій підключається по USB, агент читає памʼять пристрою, і бекенд
        звіряє: для кожного огляду медика знаходимо запис пристрою, чий timestamp у вікні
        цього огляду. Незіставлені записи пристрою або огляди підсвічуються. Зіставлені
        пари стають верифікованим юридичним записом.
      </p>
      <p>
        USB-агент працює як menu-bar Electron-застосунок на macOS (Intel + Apple Silicon,
        дистрибутується як .dmg через electron-builder). Веб-фронтенд викликає його через
        локальний WebSocket на порту 8765 для отримання записів пристрою на запит.
      </p>
      <p>
        <strong>Статус розгортання.</strong> Зараз працює локально на машині робочого
        місця: PostgreSQL у Docker, бекенд через Uvicorn, фронтенд через Vite dev-сервер.
        Продакшен-розгортання (Caddy + HTTPS, контейнеризований бекенд, бекапи)
        спроєктоване, але не зроблене — гейтиться на регуляторному питанні нижче.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>
            Reverse-engineering USB-протоколу вендора — це посильний соло-проєкт, якщо
            готові робити нудну частину.
          </strong>{" "}
          iBlow 10 постачає застосунок з macOS-статусом «не підтримується» — софт існує тільки
          для Windows. Щоб промапити протокол, я позичив Windows-ноутбук, встановив
          USB-сніфер і проганяв трафік між офіційним клієнтом і пристроєм кілька годин,
          викликаючи всі операції, які тільки міг. З достатньою кількістю захоплень
          вимальовується форма протоколу. Урок не про USB — про timeboxing: більшість
          задач «нам потрібен доступ від вендора» насправді — це задачі «нам потрібен
          вихідний день з сніфером».
        </li>
        <li>
          <strong>Time-windowing — правильна абстракція для крос-девайс звірки.</strong>{" "}
          Я починав з матчингу за вмістом (значенням BAC) і швидко зрозумів, що два
          послідовні водії з однаковими показниками будуть аліаситись. Матчинг тільки за
          timestamp має ту саму проблему, якщо годинник пристрою дрейфує. Прорив — у
          переформулюванні: не матчити окремі записи, а матчити вікна-й-записи. Кожен
          огляд — це вікно, що належить UI медика; кожен запис пристрою — це точка в часі;
          одне вікно володіє однією точкою. Невідповідності — аномалії. Це узагальнилось у
          чистий аудит-лог: кожен юридичний запис має верифікований пристрій-походження.
        </li>
        <li>
          <strong>
            Регуляторна інерція — реальний продуктовий ризик, який варто врахувати на початку.
          </strong>{" "}
          Робочий код, який юридично не можна використовувати — для compliance-продуктів —
          невідрізнимий від коду, якого не існує. Щоб замінити паперовий журнал,
          електронна система потребує підпису від інституцій, що авторизували паперову
          форму — МОЗ і МВС. Офіційний канал — звернення громадянина; офіційне вікно
          відповіді — ~30 днів. На практиці моє попереднє звернення до МОЗ залишалось без
          відповіді місяцями. Зараз я ставлюсь до часу регуляторного відгуку як до
          жорсткого вхідного параметра продуктового roadmap, а не як до ввічливого
          припущення. Для майбутніх compliance-білдів я починав би регуляторну розмову до
          коду.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        Технічний продукт функціонально завершений і міг би сьогодні піти у продакшен на
        вже спроєктованому шляху розгортання (Caddy + HTTPS, контейнеризований бекенд,
        бекапи). Блокує цей шлях регуляторика: поки МОЗ і МВС не дадуть відповідь на
        звернення з визначенням вимог до електронного еквівалента паперового журналу,
        система не може юридично замінити журнал, а паралельне використання має обмежену
        цінність відносно самого паперу.
      </p>
      <p>
        Чесно, це та частина проєкту, яку я переоцінюю. Місяці нечуйних регуляторних
        каналів роблять шлях вперед неясним, і я зважую — чи поставити білд на паузу й
        повернутись, коли умови зміняться, чи шукати іншу продуктову поверхню, де та сама
        архітектура (шифровані медичні поля, підписані PDF, синк USB-пристроїв,
        multi-tenancy) мапиться на кейс, який не вимагає міністерського дозволу. Ідея в
        мене на задньому плані — розширити агент на Bluetooth-пульсоксиметр: та сама
        модель звірки, ширша застосовність — але це тільки ідея, а не план.
      </p>
    </>
  );
}
