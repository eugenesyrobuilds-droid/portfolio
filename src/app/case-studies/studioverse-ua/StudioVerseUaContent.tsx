"use client";

import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import SectionHeading from "@/components/SectionHeading";
import MetricCard from "@/components/MetricCard";
import TechStack from "@/components/TechStack";
import ProcessNote from "@/components/ProcessNote";
import UserStories from "@/components/UserStories";
import MermaidDiagram from "@/components/MermaidDiagram";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { proposalGenerationFlow } from "@/data/studioverseUaMermaid";
import { data as uaUserStoriesData } from "@/data/studioverseUaUserStories";

const screenshots = {
  en: {
    scoreChip: "Per-job score chip with tooltip explaining the signals.",
    searchSidebar:
      "Sidebar on the search results page — scanner state and controls.",
    jobSidebar:
      "Sidebar on the job page with the generated proposal draft.",
    analytics:
      "Analytics dashboard tracking the proposal funnel and template performance.",
  },
  uk: {
    scoreChip: "Чип скору на джобі з тултипом, що пояснює сигнали.",
    searchSidebar:
      "Сайдбар на сторінці результатів пошуку — стан сканера видачі та контроли.",
    jobSidebar: "Сайдбар на сторінці джоби з готовою чернеткою пропозалу.",
    analytics:
      "Аналітичний дашборд, що відстежує воронку пропозалів і ефективність шаблонів.",
  },
};

const copy = {
  en: {
    title: "StudioVerse UA",
    subtitle:
      "Chrome extension that scores the freelance job feed, drafts custom proposals against a template, and tracks every outcome in one shared place.",
    tags: ["Lead generation", "Chrome Extension", "AI-assisted dev"],
    status: "Production",
    statusVariant: "production" as const,
    prefaceNote:
      "Note on the platform: I keep the marketplace unnamed throughout. The terms it uses — proposals, connects, cover letters — make it obvious to anyone in this line of work, which is the only audience this case study is for.",
    tabs: { business: "Business", engineering: "Engineering" },
    diagramCaption:
      "End-to-end proposal generation pipeline. Drag to pan · scroll to zoom · double-click to reset · fullscreen for the full picture.",
    section: {
      context: "Context",
      solution: "Solution",
      hardPart: "The hard part",
      impact: "Impact",
      tech: "Tech stack & architecture",
      learned: "What I learned",
      limitations: "Limitations",
      next: "Next steps",
      userStories: "User stories",
      diagram: "Proposal generation flow",
    },
    metrics: {
      manualCeiling: { label: "Manual ceiling", value: "~15", delta: "proposals / day" },
      withTool: { label: "With the tool", value: "~100", delta: "in 3–4 hours" },
      throughput: { label: "Throughput", value: "×6.7", delta: "proven" },
      replyOfViewed: { label: "Reply rate (of viewed)", value: "14%", delta: "after tool" },
    },
    techGroups: [
      {
        label: "Frontend",
        items: ["Vanilla JavaScript (ES2020+)", "Chrome Extension Manifest V3", "DOM API"],
      },
      {
        label: "Codebase",
        items: ["~10,500 LOC in 18 files", "No build step", "No test suite"],
      },
      {
        label: "Runtime contexts",
        items: [
          "Job-page content script (sidebar UI, validator/retry loop)",
          "Search-page content script (per-card MutationObserver scanner)",
          "Service worker (15-min sync alarm)",
        ],
      },
      {
        label: "AI models",
        items: [
          "Gemini Pro — letter + screening answers",
          "Gemini Flash — opener + judge",
          "Gemini Flash-Lite — analysis + scoring",
        ],
      },
      {
        label: "Storage & sync",
        items: [
          "chrome.storage.local",
          "Google Apps Script web app",
          "Google Sheet as shared two-person DB",
        ],
      },
    ],
    process: {
      ownership:
        "Every functional decision was mine. I translated what I do by hand into automation: the scoring rules and the signals that matter, the three-angle opener strategy, anchoring every proposal to a template, what to track, and the choice to use a Google Sheet as the shared database — so two people can sync easily and analyze the funnel as it grows.",
      collaboration:
        "Technical implementation was AI's, as it always is for me. Two honest specifics: the page-extraction logic went through several iterations, and one module had to be worked around because it silently failed in some configurations. Both were AI-driven debugging in response to problems I observed in the output — I'd flag the symptom, AI would find and fix the cause.",
      timeSpent: "Roughly 2–3 months of relaxed, non-daily development.",
    },
  },
  uk: {
    title: "StudioVerse UA",
    subtitle:
      "Chrome-розширення, яке оцінює фриланс-видачу, готує кастомні пропозали за шаблоном і веде облік кожного результату в одному спільному місці.",
    tags: ["Лідогенерація", "Розширення Chrome", "AI-розробка"],
    status: "У продакшені",
    statusVariant: "production" as const,
    prefaceNote:
      "Про платформу: я навмисно ніде не називаю маркетплейс. Терміни, якими він оперує — пропозали, конекти, cover letters — і так роблять його очевидним для будь-кого в цій сфері, а саме ця аудиторія цей кейс і читає.",
    tabs: { business: "Бізнес", engineering: "Інженерія" },
    diagramCaption:
      "Повний пайплайн генерації пропозалу. Перетягуйте для панорамування · колесо для зуму · подвійний клік — скидання · fullscreen для повної картини.",
    section: {
      context: "Контекст",
      solution: "Рішення",
      hardPart: "Найскладніше",
      impact: "Результат",
      tech: "Технології та архітектура",
      learned: "Чого я навчився",
      limitations: "Обмеження",
      next: "Наступні кроки",
      userStories: "Користувацькі історії",
      diagram: "Потік генерації пропозалу",
    },
    metrics: {
      manualCeiling: { label: "Ручна стеля", value: "~15", delta: "пропозалів / день" },
      withTool: { label: "З інструментом", value: "~100", delta: "за 3–4 години" },
      throughput: { label: "Пропускна здатність", value: "×6.7", delta: "доведено" },
      replyOfViewed: { label: "Reply rate (з переглянутих)", value: "14%", delta: "з інструментом" },
    },
    techGroups: [
      {
        label: "Фронтенд",
        items: ["Чистий JavaScript (ES2020+)", "Chrome Extension Manifest V3", "DOM API"],
      },
      {
        label: "Кодова база",
        items: ["~10 500 LOC у 18 файлах", "Без білд-кроку", "Без тестів"],
      },
      {
        label: "Рантайм-контексти",
        items: [
          "Контент-скрипт сторінки джоби (UI сайдбару, валідатор/ретрай)",
          "Контент-скрипт сторінки пошуку (сканер з MutationObserver на кожну картку)",
          "Service worker (синк раз на 15 хв)",
        ],
      },
      {
        label: "Моделі ШІ",
        items: [
          "Gemini Pro — лист + відповіді на скринінг",
          "Gemini Flash — опенер + суддівство",
          "Gemini Flash-Lite — аналіз + скоринг",
        ],
      },
      {
        label: "Сховище і синк",
        items: [
          "chrome.storage.local",
          "Веб-застосунок на Google Apps Script",
          "Google Sheet як спільна БД на двох",
        ],
      },
    ],
    process: {
      ownership:
        "Кожне функціональне рішення було моїм. Я транслював те, що роблю руками, в автоматизацію: правила скорингу й сигнали, що мають значення, стратегію опенера з трьох кутів, прив'язку кожного пропозалу до шаблону, що відстежувати, і вибір Google Sheet як спільної бази — для легкого синку на двох і аналітики, що дозволяє тестувати й покращувати.",
      collaboration:
        "Технічна реалізація була за ШІ, як завжди в мене. Дві чесні деталі: логіка витягання зі сторінки пройшла кілька ітерацій, і один модуль довелося обходити, бо він мовчки не завантажувався в деяких конфігураціях. І те, й те — це AI-дебаг у відповідь на симптом, який я бачив у виводі: я флагав проблему, ШІ знаходив і виправляв причину.",
      timeSpent: "Приблизно 2–3 місяці спокійної, не щоденної розробки.",
    },
  },
};

export default function StudioVerseUaContent() {
  const { locale } = useLocale();
  const c = copy[locale];
  const isEn = locale === "en";

  const businessContent = isEn ? (
    <EnBusinessBody c={copy.en} />
  ) : (
    <UkBusinessBody c={copy.uk} />
  );
  const engineeringContent = isEn ? (
    <EnEngineeringBody c={copy.en} />
  ) : (
    <UkEngineeringBody c={copy.uk} />
  );

  return (
    <CaseStudyLayout
      slug="studioverse-ua"
      title={c.title}
      subtitle={c.subtitle}
      status={c.status}
      statusVariant={c.statusVariant}
      tags={c.tags}
      readingTimeMin={10}
      prefaceNote={c.prefaceNote}
      tldr={isEn ? <EnTldr /> : <UkTldr />}
    >
      <CaseStudyTabs
        tabs={[
          { id: "business", label: c.tabs.business, content: businessContent },
          {
            id: "engineering",
            label: c.tabs.engineering,
            content: engineeringContent,
          },
        ]}
      />
    </CaseStudyLayout>
  );
}

type FigureProps = {
  src: string;
  alt: string;
  captionKey: keyof typeof screenshots["en"];
  width: number;
  height: number;
  narrow?: "sm" | "md";
};

function Figure({ src, alt, captionKey, width, height, narrow }: FigureProps) {
  const { locale } = useLocale();
  const containerClass =
    narrow === "sm"
      ? "max-w-[340px] mx-auto"
      : narrow === "md"
        ? "max-w-md mx-auto"
        : "";
  return (
    <figure className="my-8 not-prose">
      <div className={containerClass}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-card shadow-soft w-full h-auto"
        />
      </div>
      <figcaption className="text-small text-ink-500 mt-2 text-center">
        {screenshots[locale][captionKey]}
      </figcaption>
    </figure>
  );
}

function EnTldr() {
  return (
    <>
      <p>
        Lead generation here was fully manual. For every job: open it, weigh the green and
        red flags, read the client&apos;s reviews, decide whether it&apos;s worth a shot,
        customize a template, pick the right portfolio examples, edit, send. A full
        working day got one person roughly <strong>10–15 proposals</strong>.
      </p>
      <p>
        I built a Chrome extension that reads the search feed, scores each job against
        preset rules, and — for the jobs we pick — drafts a custom proposal (still
        anchored to a template) using signals from the job and the client. The person
        edits the final text and confirms the send. One person can now send{" "}
        <strong>up to ~100 proposals in 3–4 hours</strong>.
      </p>
      <p className="text-accent-700 font-medium">
        Honest framing first: what&apos;s <strong>proven</strong> is throughput — roughly
        ×6.7. Conversion stayed <em>inside</em> its pre-tool range, not above it. So this
        isn&apos;t a story about better conversion; it&apos;s a story about scaling volume{" "}
        <strong>without the quality collapse you&apos;d normally get</strong> from a 6.7×
        increase.
      </p>
    </>
  );
}

function UkTldr() {
  return (
    <>
      <p>
        Лідогенерація тут була повністю ручною. Під кожну джобу: відкрити її, зважити
        зелені й червоні прапорці, перечитати відгуки про клієнта, вирішити, чи варто
        відкликатися, відредагувати шаблон під неї, підібрати релевантні приклади з
        портфоліо, відредагувати, відправити. За повний робочий день одна людина встигала
        приблизно <strong>10–15 пропозалів</strong>.
      </p>
      <p>
        Я зробив Chrome-розширення, яке читає видачу пошуку, оцінює кожну джобу за наперед
        заданими правилами і — для обраних джоб — готує кастомний пропозал (усе одно
        прив&apos;язаний до шаблону), спираючись на сигнали з джоби та про клієнта.
        Людина редагує фінальний текст і підтверджує відправку. Тепер одна людина може
        відправити <strong>до ~100 пропозалів за 3–4 години</strong>.
      </p>
      <p className="text-accent-700 font-medium">
        Чесна рамка одразу: те, що <strong>доведено</strong> — це пропускна здатність,
        приблизно ×6.7. Конверсія лишилася <em>в межах</em> свого доінструментного
        діапазону, а не вище. Тож це історія не про кращу конверсію, а про масштабування
        обсягу <strong>без обвалу якості</strong>, який зазвичай стається при збільшенні в
        6.7 раза.
      </p>
    </>
  );
}

function MetricsBlock({ c }: { c: typeof copy.en | typeof copy.uk }) {
  return (
    <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      <MetricCard {...c.metrics.manualCeiling} />
      <MetricCard {...c.metrics.withTool} />
      <MetricCard {...c.metrics.throughput} emphasis />
      <MetricCard {...c.metrics.replyOfViewed} emphasis />
    </div>
  );
}

function EnBusinessBody({ c }: { c: typeof copy.en }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        The job, done by hand, is a sequence of judgment calls: open a posting, read it
        for signal (budget, scope clarity, client history, red flags), open the
        client&apos;s review history, decide go/no-go, then — if it&apos;s a go —
        rewrite a template to fit, choose portfolio pieces that match the niche, and
        send. Each of those steps is fast on its own; stacked across a day, the ceiling
        is ~10–15 proposals. The bottleneck isn&apos;t typing — it&apos;s the repeated
        reading, scoring, and tailoring.
      </p>
      <p>
        There&apos;s almost nothing off the shelf for this. A couple of services position
        themselves as lead-gen automation for the platform, but as far as I can tell they
        run roughly what we run under the hood — scrape the job feed, prompt a cover
        letter (less customizable than ours) — and a human still clicks &quot;submit&quot;
        on every proposal. That last point isn&apos;t a product choice; it&apos;s a hard
        constraint. When I built this, I hit the same wall: the final &quot;submit
        proposal&quot; click can&apos;t be automated. So a fully hands-off, end-to-end
        flow was never on the table — for them or for me. Everything up to that click is
        fair game; the click itself stays human.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>
        Each day the extension reads the search results, pulls each job&apos;s signals,
        and scores how interesting it is against rules I defined — doing what a human
        reviewer does, much faster, to support the go/no-go call. The score surfaces as
        a traffic-light badge on each card, so the feed sorts itself by relevance at a
        glance.
      </p>

      <Figure
        src="/images/studioverse-ua/score-chip-tooltip.png"
        alt="Per-job score chip with open tooltip showing the contributing signals"
        captionKey="scoreChip"
        width={1924}
        height={758}
      />

      <p>
        For the jobs we pick, it reads the full description, weighs signals about the
        job and the client, and drafts a custom proposal — still anchored to a preset
        template, so the structure stays consistent and on-brand. The person then edits
        the final text (a safety net for anything off) and confirms the send.
      </p>

      <Figure
        src="/images/studioverse-ua/job-page-sidebar.png"
        alt="Sidebar on the job page with the generated proposal draft"
        captionKey="jobSidebar"
        width={718}
        height={1794}
        narrow="sm"
      />

      <Figure
        src="/images/studioverse-ua/search-results-sidebar.png"
        alt="Sidebar on the search results page showing scanner state and controls"
        captionKey="searchSidebar"
        width={564}
        height={638}
        narrow="md"
      />

      <p>
        The point isn&apos;t to replace the human judgment — it&apos;s to do everything{" "}
        <em>around</em> it fast, so the human spends their attention on the decision and
        the final edit, not on the repetitive reading and drafting.
      </p>

      <SectionHeading>{c.section.hardPart}</SectionHeading>
      <p>Two problems were the real work.</p>
      <p>
        <strong>Encoding the scoring.</strong> The interesting question was never
        &quot;can a model read a job posting&quot; — it&apos;s <em>which signals decide
        whether a job is worth a proposal</em>, and how to express them as rules. Hard
        filters (jailbreak/spam jobs, niches we deny, per-deliverable rates below our
        floor) plus weighted soft rules. This is the part where my own lead-gen
        experience is the input — I was encoding the judgment I&apos;d built by hand into
        something explicit.
      </p>
      <p>
        <strong>Making the AI output trustworthy.</strong> This was the central
        engineering problem, and it&apos;s the same instinct as my Medics tool:{" "}
        <em>where you can&apos;t trust the model blindly, wrap it in deterministic
        rules.</em> A generated proposal can hallucinate — invent a URL, claim a
        specialty we don&apos;t have, drop the required phrase that mirrors the
        client&apos;s language, slip in a banned word. I couldn&apos;t put that in front
        of clients. So every draft passes through 10+ deterministic checks (invented
        URLs, fabricated specialties, missing mirror phrase, missing closing question,
        banned/amateur phrasing, and more). Each failure becomes a correction line, fed
        back to a cheaper model for a targeted retry. The expensive model drafts; the
        rules decide what&apos;s allowed out. AI writes; rules govern.
      </p>
      <p>
        One product decision inside this is mine and worth naming:{" "}
        <strong>the opener for each job has to be maximally custom.</strong> A generic
        opener loses here. My approach is to look at each job from three angles, write
        an opener variant from each, and then pick the best one. (The mechanism that
        scores and picks between the three is implementation — see the{" "}
        <strong>Engineering</strong> tab for where my decisions end and the AI&apos;s
        work begins.)
      </p>

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        <strong>Throughput — proven.</strong> Manual ceiling was ~15 proposals a day.
        With the tool, one person sends up to ~100 in 3–4 hours. Roughly{" "}
        <strong>×6.7</strong>, and verifiable from our own records. At least three manual
        steps are gone entirely.
      </p>

      <MetricsBlock c={c} />

      <p>
        <strong>Conversion — the honest part.</strong> Before the tool, our numbers swung
        with whoever was sending and how rushed they were: view rate ran{" "}
        <strong>15–35%</strong>, reply rate <strong>2–6%</strong>. With the tool, the
        funnel sits at roughly <strong>30% viewed</strong>, <strong>4% replied</strong>{" "}
        (of sent), and <strong>14% replied</strong> among the proposals that got viewed.
      </p>
      <p>
        Look at where those land: the after-numbers (30% viewed, 4% replied) fall{" "}
        <em>inside</em> the pre-tool ranges (15–35%, 2–6%). So I won&apos;t claim the
        tool improved conversion — the data doesn&apos;t support that. What it shows is
        that conversion <strong>held steady inside its prior band while volume
        multiplied ~6.7×.</strong>
      </p>
      <p>
        That holding-steady is the actual result. When you push manual volume up 6.7×,
        conversion usually <em>drops</em> — you rush, you customize less, quality slips.
        It didn&apos;t here, which suggests the per-proposal tailoring survived the
        scale-up. But this is two people over two months with no controlled comparison,
        so read it as the honest shape of the thing, not proof:{" "}
        <strong>the tool&apos;s demonstrated contribution is volume without a quality
        collapse — not a conversion lift.</strong>
      </p>

      <Figure
        src="/images/studioverse-ua/analytics-dashboard.png"
        alt="Analytics dashboard tracking the proposal funnel and template performance"
        captionKey="analytics"
        width={2878}
        height={1786}
      />

      <p>
        One caveat I&apos;ll put here rather than bury: I track connects spent per
        proposal, so we can see cost per lead and per client. I do <strong>not</strong>{" "}
        yet fold the AI API cost into that, so our true CAC is incomplete. More in{" "}
        <em>Limitations</em>.
      </p>

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>
            If something gets parsed, save it — even when you don&apos;t yet know why.
          </strong>{" "}
          Better to have data and no use for it than a use and no data. Half the reason
          we can analyze the funnel at all today is that I stored everything from the
          start, before I had a question to ask of it.
        </li>
        <li>
          <strong>
            The output is only as trustworthy as the guardrails around it.
          </strong>{" "}
          The model writing the proposal was never the hard part; the validation layer
          that catches its hallucinations before they reach a client was. Same lesson as
          encoding regulatory logic by hand in my clinical tool — wrap the model where
          you can&apos;t trust it.
        </li>
      </ul>

      {/* PullQuote slot — strong candidates: "AI writes; rules govern." or "If something gets parsed, save it — even when you don't yet know why." */}
      {/* <PullQuote>TBD</PullQuote> */}

      <SectionHeading>{c.section.limitations}</SectionHeading>
      <p>These are real and worth stating plainly:</p>
      <ul>
        <li>
          <strong>Short job posts trigger hallucinations.</strong> When a posting is too
          thin, the draft starts inventing to fill the space. I haven&apos;t solved this
          yet.
        </li>
        <li>
          <strong>No proper A/B tracking.</strong> I run theories — prompt tweaks,
          template changes — but there&apos;s no real experimentation system. The
          template-performance section is a first hint of one, not the real thing. Still
          building it.
        </li>
        <li>
          <strong>CAC is incomplete.</strong> I track connects per proposal (real cost
          per lead and per client), but I don&apos;t yet include AI API cost, which
          affects true CAC. Planned.
        </li>
        <li>
          <strong>The API key is hardcoded.</strong> A deliberate tradeoff: this was
          built for me and one colleague, never for public install. For any public use
          the key wouldn&apos;t sit in the client. I name it so the choice isn&apos;t
          mistaken for an oversight.
        </li>
        <li>
          <strong>
            It&apos;s stitched onto a third-party site&apos;s DOM, so it&apos;s brittle
            by nature.
          </strong>{" "}
          When the platform changes its page, parts break and need patching.
          That&apos;s structural to this kind of tool, not a bug I can close.
        </li>
        <li>
          <strong>Sync is last-write-wins.</strong> If two of us edit the same record
          between syncs, one silently overwrites the other. Fine for two people; it
          wouldn&apos;t be for more.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <ul>
        <li>
          A real A/B tracking system for proposal templates and prompts, so improvements
          are measured rather than assumed.
        </li>
        <li>
          Folding AI cost into CAC, for honest unit economics on every lead.
        </li>
      </ul>
    </>
  );
}

function EnEngineeringBody({ c }: { c: typeof copy.en }) {
  return (
    <>
      <SectionHeading>{c.section.tech}</SectionHeading>
      <p>
        Vanilla JavaScript (ES2020+), no framework, no build step, no test suite. Chrome
        Extension Manifest V3. <strong>~10,500 lines across 18 source files.</strong>
      </p>
      <TechStack groups={c.techGroups} />
      <p>
        Architecturally, roughly a third of the codebase (the scoring engine, the
        opener-prompt builders, the portfolio/reference data) is pure logic with no DOM
        dependency and would port elsewhere; the other two-thirds is bound to the
        platform&apos;s DOM and to Chrome&apos;s extension APIs.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.diagram}</SectionHeading>
      <p>
        The pipeline below is what runs when an operator clicks{" "}
        <em>Generate proposal</em> on a job page. Decisions in blue, AI steps in amber,
        storage in green, terminals in red, and the four letter templates stacked
        vertically at the end.
      </p>
      <MermaidDiagram code={proposalGenerationFlow} caption={c.diagramCaption} />

      <SectionHeading>{c.section.userStories}</SectionHeading>
      <p>
        Connextra format with MoSCoW priorities. The set below is the working spec the
        extension was built against — 43 stories across 5 epics, each with acceptance
        criteria.
      </p>
      <UserStories data={uaUserStoriesData} />
    </>
  );
}

function UkBusinessBody({ c }: { c: typeof copy.uk }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        Ця робота вручну — це послідовність суджень: відкрити джобу, прочитати її на
        сигнали (бюджет, чіткість скоупу, історія клієнта, червоні прапорці), відкрити
        історію відгуків клієнта, вирішити «відкликаємось / ні», і — якщо так —
        переписати шаблон під неї, обрати роботи з портфоліо під нішу, відправити. Кожен
        крок окремо швидкий; складені за день, вони впираються в стелю ~10–15 пропозалів.
        Вузьке місце — не друкування, а повторюване читання, оцінювання й кастомізація.
      </p>
      <p>
        Готових рішень під це майже немає. Пара сервісів позиціюють себе як автоматизацію
        лідогену для платформи, але, наскільки я можу судити, всередині в них приблизно
        те саме, що й у нас — скрейпинг видачі, промптинг cover letter (менш
        кастомізований, ніж у нас) — і людина все одно тисне «submit» на кожному
        пропозалі. Це не продуктовий вибір, а жорстке обмеження. Коли я це будував, я
        вперся в ту саму стіну: фінальний клік «відправити пропозал» автоматизувати не
        можна. Тож повністю безлюдного, end-to-end флоу не було на столі — ні в них, ні в
        мене. Усе до цього кліку — чесна гра; сам клік лишається за людиною.
      </p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>
        Щодня розширення читає результати пошуку, витягує сигнали кожної джоби й оцінює,
        наскільки вона цікава, за правилами, які я задав — роблячи те саме, що й
        людина-рев&apos;ювер, тільки значно швидше, щоб підтримати рішення
        «відкликаємось / ні». Оцінка показується як бейдж-світлофор на кожній картці,
        тож видача сама сортується за релевантністю з одного погляду.
      </p>

      <Figure
        src="/images/studioverse-ua/score-chip-tooltip.png"
        alt="Чип скору на джобі з відкритим тултипом про сигнали"
        captionKey="scoreChip"
        width={1924}
        height={758}
      />

      <p>
        Для обраних джоб воно читає повний опис, зважує сигнали про джобу та клієнта й
        готує кастомний пропозал — усе одно прив&apos;язаний до наперед заданого
        шаблону, щоб структура лишалася консистентною та в межах бренду. Далі людина
        редагує фінальний текст (запобіжник на випадок будь-чого зайвого) і підтверджує
        відправку.
      </p>

      <Figure
        src="/images/studioverse-ua/job-page-sidebar.png"
        alt="Сайдбар на сторінці джоби з готовою чернеткою пропозалу"
        captionKey="jobSidebar"
        width={718}
        height={1794}
        narrow="sm"
      />

      <Figure
        src="/images/studioverse-ua/search-results-sidebar.png"
        alt="Сайдбар на сторінці результатів пошуку зі станом сканера й контролами"
        captionKey="searchSidebar"
        width={564}
        height={638}
        narrow="md"
      />

      <p>
        Сенс не в тому, щоб замінити людське судження — а в тому, щоб робити все{" "}
        <em>навколо</em> нього швидко, аби людина витрачала увагу на рішення й фінальну
        правку, а не на повторюване читання й написання.
      </p>

      <SectionHeading>{c.section.hardPart}</SectionHeading>
      <p>Реальною роботою були дві задачі.</p>
      <p>
        <strong>Закодувати скоринг.</strong> Цікаве питання було не «чи може модель
        прочитати джобу» — а <em>які сигнали вирішують, чи варта джоба пропозалу</em>, і
        як виразити їх правилами. Жорсткі фільтри (джейлбрейк/спам-джоби, ніші, які ми
        відхиляємо, ставки за одиницю нижче нашого порогу) плюс зважені м&apos;які
        правила. Це та частина, де входом є мій власний досвід лідогену — я кодував у
        явні правила те судження, яке набив руками.
      </p>
      <p>
        <strong>Зробити вивід ШІ надійним.</strong> Це була центральна інженерна
        проблема, і це той самий інстинкт, що й у моєму інструменті для Medics:{" "}
        <em>там, де моделі не можна довіряти наосліп, обгорни її детермінованими
        правилами.</em> Згенерований пропозал може галюцинувати — вигадати URL, заявити
        спеціалізацію, якої в нас немає, загубити обов&apos;язкову фразу, що
        віддзеркалює мову клієнта, протягнути заборонене слово. Я не міг покласти таке
        перед клієнтом. Тому кожна чернетка проходить 10+ детермінованих перевірок
        (вигадані URL, неіснуючі спеціалізації, відсутня фраза-дзеркало, відсутнє
        закриваюче питання, заборонені/аматорські формулювання тощо). Кожен провал стає
        рядком-корекцією, який віддається дешевшій моделі на точковий ретрай. Дорога
        модель пише; правила вирішують, що випустити назовні. ШІ пише; правила керують.
      </p>
      <p>
        Одне продуктове рішення тут — моє, і його варто назвати:{" "}
        <strong>опенер для кожної джоби має бути максимально кастомним.</strong>{" "}
        Загальний опенер тут програє. Мій підхід — подивитися на кожну джобу з трьох
        кутів, написати варіант опенера з кожного, а потім обрати найкращий. (Механізм,
        що оцінює й обирає між трьома — це реалізація; де закінчуються мої рішення й
        починається робота ШІ, описано на вкладці <strong>Інженерія</strong>.)
      </p>

      <SectionHeading>{c.section.impact}</SectionHeading>
      <p>
        <strong>Пропускна здатність — доведено.</strong> Ручна стеля була ~15 пропозалів
        на день. З інструментом одна людина відправляє до ~100 за 3–4 години. Приблизно{" "}
        <strong>×6.7</strong>, і це верифіковано з наших власних записів. Щонайменше
        три ручні кроки зникли повністю.
      </p>

      <MetricsBlock c={c} />

      <p>
        <strong>Конверсія — чесна частина.</strong> До інструмента наші цифри коливалися
        залежно від того, хто відправляв і наскільки поспіхом: рейт переглядів був{" "}
        <strong>15–35%</strong>, рейт відповідей <strong>2–6%</strong>. З інструментом
        воронка тримається приблизно на <strong>30% переглянутих</strong>,{" "}
        <strong>4% відповіли</strong> (від відправлених) і{" "}
        <strong>14% відповіли</strong> серед тих пропозалів, що були переглянуті.
      </p>
      <p>
        Подивіться, куди це лягає: цифри «після» (30% переглядів, 4% відповідей) падають{" "}
        <em>усередину</em> доінструментних діапазонів (15–35%, 2–6%). Тож я не
        стверджуватиму, що інструмент покращив конверсію — дані цього не підтверджують.
        Що вони показують — це що конверсія{" "}
        <strong>трималася стабільно в межах свого попереднього коридору, поки обсяг
        множився ~×6.7.</strong>
      </p>
      <p>
        Оце «трималася стабільно» — і є справжній результат. Коли ручний обсяг штовхають
        угору в 6.7 раза, конверсія зазвичай <em>падає</em> — поспіх, менше
        кастомізації, якість просідає. Тут не просіла, що натякає: кастомізація на
        кожен пропозал пережила масштабування. Але це двоє людей за два місяці без
        контрольованого порівняння, тож читайте це як чесну форму явища, а не доказ:{" "}
        <strong>доведений внесок інструмента — обсяг без обвалу якості, а не приріст
        конверсії.</strong>
      </p>

      <Figure
        src="/images/studioverse-ua/analytics-dashboard.png"
        alt="Аналітичний дашборд: воронка пропозалів і ефективність шаблонів"
        captionKey="analytics"
        width={2878}
        height={1786}
      />

      <p>
        Одне застереження покладу тут, а не закопаю: я веду облік конектів, витрачених
        на кожен пропозал, тож ми бачимо вартість ліда й клієнта. Але я{" "}
        <strong>ще не</strong> включаю в це вартість API ШІ, тож наш справжній CAC
        неповний. Докладніше — в <em>Обмеженнях</em>.
      </p>

      <SectionHeading>{c.section.learned}</SectionHeading>
      <ul>
        <li>
          <strong>
            Якщо щось парситься — зберігай це, навіть коли ще не знаєш навіщо.
          </strong>{" "}
          Краще мати дані й не знати, що з ними робити, ніж знати що робити й не мати
          даних. Половина причини, чому ми взагалі можемо аналізувати воронку сьогодні —
          це що я зберігав усе з самого початку, ще до того, як у мене з&apos;явилося
          питання до цих даних.
        </li>
        <li>
          <strong>
            Вивід надійний рівно настільки, наскільки надійні запобіжники навколо нього.
          </strong>{" "}
          Модель, що пише пропозал, ніколи не була складною частиною; складним був шар
          валідації, що ловить її галюцинації, перш ніж вони дійдуть до клієнта. Той
          самий урок, що й кодування регуляторної логіки руками в моєму клінічному
          інструменті — обгортай модель там, де їй не можна довіряти.
        </li>
      </ul>

      {/* PullQuote slot — strong candidates: "ШІ пише; правила керують." / "Якщо щось парситься — зберігай це, навіть коли ще не знаєш навіщо." */}
      {/* <PullQuote>TBD</PullQuote> */}

      <SectionHeading>{c.section.limitations}</SectionHeading>
      <p>Вони реальні, і їх варто назвати прямо:</p>
      <ul>
        <li>
          <strong>Короткі описи джоб провокують галюцинації.</strong> Коли опис надто
          худий, чернетка починає вигадувати, щоб заповнити простір. Я це ще не вирішив.
        </li>
        <li>
          <strong>Немає нормального A/B-трекінгу.</strong> Я ганяю теорії — правки
          промптів, зміни шаблонів — але справжньої системи експериментів немає. Секція
          результативності шаблонів — це перший натяк на неї, а не вона сама. Досі
          будую.
        </li>
        <li>
          <strong>CAC неповний.</strong> Я веду облік конектів на пропозал (реальна
          вартість ліда й клієнта), але ще не включаю вартість API ШІ, що впливає на
          справжній CAC. У планах.
        </li>
        <li>
          <strong>API-ключ захардкоджений.</strong> Свідомий компроміс: це робилося під
          мене й одного колегу, ніколи не під публічну установку. Для будь-якого
          публічного використання ключ не сидів би в клієнті. Називаю це, щоб вибір не
          сприйняли за недогляд.
        </li>
        <li>
          <strong>
            Воно пришите до DOM стороннього сайту, тож крихке за природою.
          </strong>{" "}
          Коли платформа змінює свою сторінку, частини ламаються й потребують латання.
          Це структурне для такого типу інструментів, а не баг, який я можу закрити.
        </li>
        <li>
          <strong>Синк працює за принципом last-write-wins.</strong> Якщо ми вдвох
          редагуємо один запис між синками, один мовчки перезаписує іншого. Нормально
          для двох; для більшої кількості — ні.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <ul>
        <li>
          Справжня система A/B-трекінгу для шаблонів пропозалів і промптів, щоб
          покращення вимірювалися, а не припускалися.
        </li>
        <li>
          Включити вартість ШІ в CAC, для чесної юніт-економіки на кожен лід.
        </li>
      </ul>
    </>
  );
}

function UkEngineeringBody({ c }: { c: typeof copy.uk }) {
  return (
    <>
      <SectionHeading>{c.section.tech}</SectionHeading>
      <p>
        Чистий JavaScript (ES2020+), без фреймворку, без білд-кроку, без тестів. Chrome
        Extension Manifest V3. <strong>~10 500 рядків у 18 файлах.</strong>
      </p>
      <TechStack groups={c.techGroups} />
      <p>
        Архітектурно приблизно третина кодової бази (рушій скорингу, білдери промптів
        опенера, дані портфоліо) — це чиста логіка без залежності від DOM, яка
        перенеслася б деінде; інші дві третини прив&apos;язані до DOM платформи й до
        API розширень Chrome.
      </p>

      <ProcessNote
        ownership={c.process.ownership}
        collaboration={c.process.collaboration}
        timeSpent={c.process.timeSpent}
      />

      <SectionHeading>{c.section.diagram}</SectionHeading>
      <p>
        Нижче — пайплайн, який запускається, коли оператор натискає{" "}
        <em>Generate proposal</em> на сторінці джоби. Рішення показані синім,
        AI-кроки — бурштиновим, сховище — зеленим, термінальні стани — червоним, чотири
        шаблони листів складені вертикально внизу.
      </p>
      <MermaidDiagram code={proposalGenerationFlow} caption={c.diagramCaption} />

      <SectionHeading>{c.section.userStories}</SectionHeading>
      <p>
        Формат Connextra з пріоритетами MoSCoW. Нижче — робоча специфікація, проти якої
        будувалося розширення: 43 історії в 5 епіках, кожна з критеріями приймання.
      </p>
      <UserStories data={uaUserStoriesData} />
    </>
  );
}
