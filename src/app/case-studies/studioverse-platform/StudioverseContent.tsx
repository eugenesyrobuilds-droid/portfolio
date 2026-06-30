"use client";

import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import SectionHeading from "@/components/SectionHeading";
import MetricCard from "@/components/MetricCard";
import TechStack from "@/components/TechStack";
import ProcessNote from "@/components/ProcessNote";
import PullQuote from "@/components/PullQuote";
import { useLocale } from "@/lib/i18n/LocaleContext";

const screenshot = {
  en: "Studio dashboard with project kanban.",
  uk: "Дашборд студії з канбан-дошкою проєктів.",
};

const copy = {
  en: {
    title: "Multi-Tenant Platform for AI Video Production Agency",
    subtitle:
      "A SaaS platform for managing artist hiring, studio operations, and client projects at an AI-video agency.",
    tags: ["B2B SaaS", "AI integrations", "Multi-tenant"],
    status: "Production",
    statusVariant: "production" as const,
    tldr:
      "An AI video production agency was managing hiring, project intake, and operations across Slack threads, Google Forms, and spreadsheets. I designed and built a multi-tenant SaaS platform that consolidated the workflow: AI-driven test-assignment matching, AI order intake chatbot, multi-tenant studios with capability-based permissions, real-time chat, project kanban, client portal, audit trail. In 7 weeks of development: 181 commits, 6 studios, 37 users across 5 roles, 22 projects, 60 tasks. First full revenue month produced $1,752 in client revenue with 59% gross margin. Built as the sole engineer through AI-assisted development.",
    section: {
      context: "Context",
      solution: "Solution",
      impact: "Impact",
      tech: "Tech stack & architecture",
      learned: "What I learned",
      next: "Next steps",
    },
    metrics: {
      users: { label: "Users", value: "37", delta: "across 5 roles" },
      studios: { label: "Studios", value: "6", delta: "active" },
      projects: { label: "Projects", value: "22", delta: "in pipeline" },
      tasks: { label: "Tasks", value: "60", delta: "34 approved (57%)" },
      applications: { label: "Artist applications", value: "46", delta: "25 accepted (54%)" },
      decisionTime: { label: "Median time-to-decision", value: "~41h", delta: "hiring pipeline" },
      activity: { label: "Peak activity", value: "190", delta: "events / week" },
      commits: { label: "Commits", value: "181", delta: "in 7 weeks" },
      revenueLabel: "Revenue (April 2026, first full month of revenue):",
      clientRevenue: { label: "Client revenue", value: "$1,752" },
      payouts: { label: "Artist payouts", value: "$714" },
      margin: { label: "Gross margin", value: "$1,038", delta: "59%" },
      paidTasks: { label: "Paid tasks", value: "23" },
    },
    techGroups: [
      {
        label: "Frontend",
        items: ["Next.js 14.2 (App Router)", "React 18", "Inline styles (no Tailwind / CSS-in-JS)"],
      },
      { label: "Backend", items: ["Next.js API routes on Vercel serverless"] },
      { label: "Database", items: ["Supabase (PostgreSQL + pgcrypto)"] },
      { label: "Auth", items: ["Cookie-based session (no JWT)", "Parsed server-side"] },
      { label: "Realtime", items: ["Supabase broadcast channels for chat"] },
      { label: "Email", items: ["Brevo (transactional, 25 templates)"] },
      { label: "AI", items: ["Google Gemini 2.5 Flash Lite", "Test matcher + order chatbot"] },
      { label: "Anti-bot", items: ["Google reCAPTCHA v3 on public forms"] },
      { label: "Push", items: ["Expo Push API for mobile"] },
      { label: "Hosting", items: ["Vercel (auto-deploy on push to main)"] },
      { label: "Tests", items: ["Vitest (unit + API)", "Playwright (E2E) on isolated test schema"] },
    ],
    process: {
      ownership:
        "I made all product decisions (what to build, in what order, for which user), all architectural framing (multi-tenant model, capability-based permissions, choice of stack), and shipped solo over 7 weeks.",
      collaboration:
        "AI-assisted development with Claude Code. AI generated implementation; I owned product, design, and architectural decisions. I can read any part of the code and explain what it does; for changes, I work with AI as my development partner.",
      timeSpent:
        "181 commits over 7 weeks of active build (March 27 – May 15, 2026). Approximately 60-90 hours of my time across that window.",
    },
  },
  uk: {
    title: "Multi-tenant платформа для агенції AI-відеопродакшену",
    subtitle:
      "SaaS-платформа для управління наймом артистів, операціями студій і клієнтськими проєктами в AI-відеоагенції.",
    tags: ["B2B SaaS", "AI-інтеграції", "Multi-tenant"],
    status: "У продакшені",
    statusVariant: "production" as const,
    tldr:
      "Агенція AI-відеопродакшену вела найм, прийом замовлень і операції в перемішку зі Slack-тредами, Google Forms і таблицями. Я спроєктував і побудував multi-tenant SaaS-платформу, яка консолідувала воркфлоу: AI-матчинг тестових завдань, AI-чатбот прийому замовлень, multi-tenant студії з permissions на основі capabilities, real-time чат, канбан проєктів, клієнтський портал, аудит-лог. За 7 тижнів розробки: 181 коміт, 6 студій, 37 користувачів у 5 ролях, 22 проєкти, 60 задач. Перший повний місяць виторгу дав $1 752 клієнтського виторгу при валовій маржі 59%. Збудовано як єдиним інженером через AI-розробку.",
    section: {
      context: "Контекст",
      solution: "Рішення",
      impact: "Результат",
      tech: "Технології та архітектура",
      learned: "Що я зрозумів",
      next: "Що далі",
    },
    metrics: {
      users: { label: "Користувачі", value: "37", delta: "у 5 ролях" },
      studios: { label: "Студії", value: "6", delta: "активні" },
      projects: { label: "Проєкти", value: "22", delta: "у пайплайні" },
      tasks: { label: "Задачі", value: "60", delta: "34 затверджено (57%)" },
      applications: { label: "Заявки артистів", value: "46", delta: "25 прийнято (54%)" },
      decisionTime: { label: "Медіанний час рішення", value: "~41 год", delta: "пайплайн найму" },
      activity: { label: "Пікова активність", value: "190", delta: "подій / тиждень" },
      commits: { label: "Коміти", value: "181", delta: "за 7 тижнів" },
      revenueLabel: "Виторг (квітень 2026, перший повний місяць виторгу):",
      clientRevenue: { label: "Клієнтський виторг", value: "$1 752" },
      payouts: { label: "Виплати артистам", value: "$714" },
      margin: { label: "Валова маржа", value: "$1 038", delta: "59%" },
      paidTasks: { label: "Оплачені задачі", value: "23" },
    },
    techGroups: [
      {
        label: "Фронтенд",
        items: ["Next.js 14.2 (App Router)", "React 18", "Inline styles (без Tailwind / CSS-in-JS)"],
      },
      { label: "Бекенд", items: ["Next.js API routes на Vercel serverless"] },
      { label: "БД", items: ["Supabase (PostgreSQL + pgcrypto)"] },
      { label: "Аутентифікація", items: ["Cookie-based session (без JWT)", "Парситься на сервері"] },
      { label: "Realtime", items: ["Supabase broadcast-канали для чату"] },
      { label: "Email", items: ["Brevo (транзакційні, 25 шаблонів)"] },
      { label: "AI", items: ["Google Gemini 2.5 Flash Lite", "Матчер тестів + чатбот замовлень"] },
      { label: "Anti-bot", items: ["Google reCAPTCHA v3 на публічних формах"] },
      { label: "Push", items: ["Expo Push API для мобільного"] },
      { label: "Хостинг", items: ["Vercel (auto-deploy на push до main)"] },
      { label: "Тести", items: ["Vitest (unit + API)", "Playwright (E2E) на ізольованій test-схемі"] },
    ],
    process: {
      ownership:
        "Я ухвалював усі продуктові рішення (що будувати, в якому порядку, для якого користувача), усі архітектурні рамки (multi-tenant модель, capability-based permissions, вибір стеку), і випустив соло за 7 тижнів.",
      collaboration:
        "AI-асистована розробка з Claude Code. AI генерував реалізацію; за продуктові, дизайнерські та архітектурні рішення відповідав я. Можу прочитати будь-яку частину коду і пояснити, що вона робить; для змін працюю з AI як з партнером.",
      timeSpent:
        "181 коміт за 7 тижнів активної розробки (27 березня – 15 травня 2026). Приблизно 60-90 годин мого часу в цьому вікні.",
    },
  },
};

export default function StudioverseContent() {
  const { locale } = useLocale();
  const c = copy[locale];

  return (
    <CaseStudyLayout
      slug="studioverse-platform"
      title={c.title}
      subtitle={c.subtitle}
      status={c.status}
      statusVariant={c.statusVariant}
      tags={c.tags}
      tldr={c.tldr}
      readingTimeMin={11}
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
        src="/images/studioverse/project-kanban.png"
        alt="Studio dashboard with project kanban board"
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

function MetricsBlock({ c }: { c: typeof copy.en | typeof copy.uk }) {
  const m = c.metrics;
  return (
    <>
      <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <MetricCard {...m.users} />
        <MetricCard {...m.studios} />
        <MetricCard {...m.projects} />
        <MetricCard {...m.tasks} />
        <MetricCard {...m.applications} />
        <MetricCard {...m.decisionTime} />
        <MetricCard {...m.activity} />
        <MetricCard {...m.commits} emphasis />
      </div>

      <p>
        <strong>{m.revenueLabel}</strong>
      </p>
      <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <MetricCard {...m.clientRevenue} emphasis />
        <MetricCard {...m.payouts} />
        <MetricCard {...m.margin} emphasis />
        <MetricCard {...m.paidTasks} />
      </div>
    </>
  );
}

function EnBody({ c }: { c: typeof copy.en }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        An AI video production agency (client identity withheld; built under contract via
        DevBrother) operated through a patchwork of tools: artist applications came in
        through Slack and forms, project intake from clients arrived as free-text emails or
        DMs, hiring decisions were tracked in spreadsheets, project work happened in unsynced
        messaging threads, no single source of truth for who was working on what.
      </p>
      <p>
        The agency&apos;s bottleneck was operational throughput, not creative work. With
        multiple studio directors hiring in parallel and clients requesting custom video
        work daily, the team needed:
      </p>
      <ul>
        <li>
          One pipeline for artist hiring (apply → test → review → accept) with no overlap
          between studio directors competing for the same candidate
        </li>
        <li>Structured order intake that converted client free-text into actionable project briefs</li>
        <li>
          A project / task system where artist, reviewer, studio director, and client could
          all see status
        </li>
        <li>Per-user notification preferences and an audit trail of who did what</li>
      </ul>
      <p>I joined as the sole engineer to build this from scratch.</p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>A multi-tenant SaaS platform with the following surfaces:</p>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">
        Hiring / Talent acquisition
      </h3>
      <ul>
        <li>Public artist application funnel with two paths: video test or portfolio submission</li>
        <li>AI test-assignment matcher (Google Gemini ranks open briefs against candidate skills)</li>
        <li>Pipeline review UI for studio directors and evaluators (1-5 rubric scoring)</li>
        <li>Accept flow: into a specific studio, or into a shared distribution pool</li>
        <li>Public artist profiles (no-auth URL, shareable in Slack)</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Studios and projects</h3>
      <ul>
        <li>Multi-tenant studio model with per-studio data scoping</li>
        <li>Projects with many-to-many client relationships</li>
        <li>Task kanban (To Do → Rough Cut → Fine Cut → Final Cut → Approved) with drag-and-drop</li>
        <li>Task health indicators (deadline tracking, block/unblock states)</li>
        <li>Per-task artist assignment, fee tracking, paid flag, artist payouts</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Communication</h3>
      <ul>
        <li>Per-project chat sidebar (staff ↔ client)</li>
        <li>Studio-wide chat channels, DMs, threads, @-mentions</li>
        <li>Edit/delete with 10-minute window</li>
        <li>Real-time via Supabase broadcast, fallback polling</li>
        <li>Task comments with rich editor and mention picker</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Order intake</h3>
      <ul>
        <li>Public AI-chatbot funnel (Gemini) that parses free-text client requests into structured orders</li>
        <li>Studio director accepts an order → platform auto-creates project, task, and client account</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Notifications</h3>
      <ul>
        <li>In-app Activity Center (32 audit event types)</li>
        <li>Email notifications via Brevo (25 transactional templates)</li>
        <li>Push notifications via Expo (mobile app integration)</li>
        <li>Per-user preferences, mute, HMAC unsubscribe tokens</li>
        <li>Cron-based deadline reminders</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Customer success & admin</h3>
      <ul>
        <li>Customer Health tab with weekly check-ins, health score 1-5, traffic-light status by days-since-contact</li>
        <li>Team management with multi-role assignment</li>
        <li>Audit log feed</li>
        <li>Feedback inbox with kanban</li>
        <li>Test assignment library</li>
      </ul>

      <p>
        The role and permission model is capability-based with per-studio scoping. A user
        can hold multiple roles simultaneously — e.g., studio director of Studio A and
        artist in Studio B — with an &quot;Acting As&quot; switcher in the header. Studio
        directors see candidates and projects scoped to their studio; platform owner
        bypasses all scope checks.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <MetricsBlock c={c} />
      <p>
        Positive unit economics confirmed in the first month of revenue. The platform went
        from MVP to operational revenue in 7 weeks of solo build.
      </p>
      <p>
        <strong>Engineering throughput</strong>: 181 commits across the 7-week build period.
        Auto-deploy to production on every push to <code>main</code>. Test infrastructure
        included Vitest for unit tests, Playwright for E2E, with a parallel test schema in
        Supabase for isolated runs.
      </p>

      <PullQuote>
        A 7-week build is a different category of project from a 7-month build.
      </PullQuote>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>
        The role/permission system warrants its own note. Roles live in <code>users.role</code>:{" "}
        <code>platform_owner</code>, <code>studio_director</code>, <code>studio_manager</code>,{" "}
        <code>artist</code>, <code>client</code>. An artist can additionally be{" "}
        <code>is_evaluator=true</code>. A user can hold multiple capabilities simultaneously
        — for example a studio director in Studio A who is also an artist in Studio B — and
        switch context via an &quot;Acting As&quot; toggle. Permissions are derived: a
        studio director sees pipeline candidates only for studios where they&apos;re
        director; a studio manager sees projects only for studios they&apos;re in.
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
            The &quot;Acting As&quot; pattern was the elegant solution to a problem that
            almost broke the role model.
          </strong>{" "}
          The agency&apos;s reality was that one person could be both an artist and a studio
          manager. With strict role-based access control (artists see X, managers see X + Y,
          directors see X + Y + Z across studios), this collapses immediately. Two accounts
          per person was a non-starter — duplicate identities, broken audit trails, user
          confusion. The fix was a capability-based permission model with an &quot;Acting
          As&quot; header switcher that lets a single account hold multiple capabilities and
          toggle context. Once that was in place, the strict tiered access (artist sees
          their work; manager sees their studio&apos;s artists + projects; director sees
          multiple studios + their own module) fell out cleanly. UX-wise it&apos;s a small
          switcher; architecturally it&apos;s the keystone of the whole system.
        </li>
        <li>
          <strong>AI integrations cost ~5% of build time and unlock ~30% of value.</strong>{" "}
          Gemini ranks test assignments and parses order intake. Both could have been
          form-based UIs requiring manual work. Both ended up as automated workflows that
          reduced studio director overhead by an order of magnitude. The integration code is
          small; the leverage is large.
        </li>
        <li>
          <strong>A 7-week build is a different category of project from a 7-month build.</strong>{" "}
          Decisions that would normally need careful weighing — choosing inline styles over
          Tailwind, JSON cookie sessions over JWT, Supabase broadcasts over a dedicated
          message queue — were made in minutes by picking the option that was simplest to
          ship. Some of those decisions will need revisiting at scale. Most of them
          won&apos;t.
        </li>
        <li>
          <strong>
            Strategic alignment with the client&apos;s product roadmap was the lesson I
            learned the hard way.
          </strong>{" "}
          This is honest: the agency has been developing its own internal platform in
          parallel, with overlapping ambitions in project management and operations. Their
          stack is different from mine — different framework, different database, different
          conventions. By the time this surfaced, my platform was already a 7-week
          investment with 181 commits, and the code couldn&apos;t be ported into theirs.
          The mistake was a planning one I&apos;d recognize as a rookie product move: I
          didn&apos;t ask, on day one, <em>what is the long-term plan for the system this
          will eventually integrate with?</em> I optimized for shipping fast and proving
          the model, which I did — but the integration story is now strained. The takeaway
          I&apos;m carrying forward: with internal-client builds, the first design
          conversation is about exit and integration paths, not feature scope.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        The platform is in production and continues to handle real operations at the
        agency. Active backlog items: Stripe billing (currently on a feature branch, not
        yet on main), time-tracking (designed but not built), a reports / analytics
        dashboard (Activity Log and earnings tab exist; a dedicated reporting UI does
        not), per-studio Slack integrations (currently only one global webhook). A
        near-term architectural constraint to resolve is Vercel Hobby&apos;s 12-function
        limit — already at the ceiling, so the next iteration needs endpoint
        consolidation. Strategic question outstanding: given the integration limitations
        described above, whether the platform&apos;s long-term home is this client or
        whether the codebase becomes a reusable artifact for other agencies with similar
        operational patterns.
      </p>
    </>
  );
}

function UkBody({ c }: { c: typeof copy.uk }) {
  return (
    <>
      <SectionHeading>{c.section.context}</SectionHeading>
      <p>
        Агенція AI-відеопродакшену (особа клієнта не розкривається; робота за контрактом) 
        працювала через лоскутну ковдру інструментів: заявки артистів
        приходили через розрізнені форми, прийом замовлень від клієнтів — у форматі вільного
        тексту в листах, DM, рішення про найм трекались у таблицях, робота над проєктами
        жила в нескоординованих WhatsApp чатах, єдиного джерела правди про те, хто над чим
        працює, не було.
      </p>
      <p>
        Вузьке місце агенції — операційна пропускна здатність, а не творча робота. З
        кількома директорами студій, що паралельно найма́ють, і клієнтами, що щодня
        замовляють кастомне відео, команді потрібно було:
      </p>
      <ul>
        <li>
          Один пайплайн найму артистів (заявка → тест → оцінка → прийняття) без перетину
          між директорами, що змагаються за одного кандидата
        </li>
        <li>Структурований прийом замовлень, що перетворює вільний текст клієнта в actionable бриф</li>
        <li>
          Система проєктів / задач, де артист, ревьюер, директор студії й клієнт бачать
          статус
        </li>
        <li>Преференції сповіщень на користувача й аудит-слід, хто що зробив</li>
      </ul>
      <p>Я прийшов як єдиний інженер, щоб збудувати це з нуля.</p>

      <SectionHeading>{c.section.solution}</SectionHeading>
      <p>Multi-tenant SaaS-платформа з такими поверхнями:</p>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">
        Найм / залучення талантів
      </h3>
      <ul>
        <li>Публічна воронка заявок з двома шляхами: відеотест або портфоліо</li>
        <li>AI-матчер тестових завдань (Google Gemini ранжує відкриті брифи проти навичок кандидата)</li>
        <li>Pipeline review UI для директорів і оцінювачів (рубрика 1-5)</li>
        <li>Прийом: у конкретну студію або в спільний distribution pool</li>
        <li>Публічні профілі артистів (URL без авторизації, шериться у Slack)</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Студії й проєкти</h3>
      <ul>
        <li>Multi-tenant модель студій зі скоупом даних на студію</li>
        <li>Проєкти з many-to-many звʼязком з клієнтами</li>
        <li>Канбан задач (To Do → Rough Cut → Fine Cut → Final Cut → Approved) з drag-and-drop</li>
        <li>Індикатори здоровʼя задачі (відстеження дедлайнів, стани blocked/unblocked)</li>
        <li>Назначення артиста на задачу, облік гонорарів, прапорець оплати, виплати</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Комунікація</h3>
      <ul>
        <li>Сайдбар чату по проєкту (менеджер ↔ клієнт)</li>
        <li>Канали чату на студію, DM, треди, @-згадки</li>
        <li>Редагування/видалення в 10-хвилинному вікні</li>
        <li>Real-time через Supabase broadcast, fallback на polling</li>
        <li>Коментарі до задач з rich-редактором і mention-picker</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Прийом замовлень</h3>
      <ul>
        <li>Публічна AI-чатбот воронка (Gemini), що парсить вільний текст клієнта в структуровані замовлення</li>
        <li>Директор студії приймає замовлення → платформа автоматично створює проєкт, задачу і клієнтський акаунт</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Сповіщення</h3>
      <ul>
        <li>In-app Activity Center (32 типи аудит-подій)</li>
        <li>Email-сповіщення через Brevo (25 транзакційних шаблонів)</li>
        <li>Push-сповіщення через Expo (інтеграція мобільного застосунку)</li>
        <li>Преференції на користувача, mute, HMAC unsubscribe-токени</li>
        <li>Cron-нагадування про дедлайни</li>
      </ul>

      <h3 className="font-heading font-bold text-h3 text-ink-900 mt-6 mb-2">Customer success і адмінка</h3>
      <ul>
        <li>Customer Health з щотижневими check-in, health-score 1-5, traffic-light статусом за днями з останнього контакту</li>
        <li>Управління командою з multi-role призначеннями</li>
        <li>Стрічка аудит-логу</li>
        <li>Інбокс зворотного звʼязку з канбаном</li>
        <li>Бібліотека тестових завдань</li>
      </ul>

      <p>
        Модель ролей і дозволів — capability-based зі скоупом на студію. Користувач може
        тримати кілька ролей одночасно — наприклад, менеджер студії А і артист у студії Б —
        з перемикачем «Acting As» у хедері. Директори студій бачать кандидатів і проєкти в
        межах своїх студій; platform owner обходить усі перевірки скоупу.
      </p>

      <ScreenshotFigure />

      <SectionHeading>{c.section.impact}</SectionHeading>
      <MetricsBlock c={c} />
      <p>
        Позитивна юніт-економіка підтверджена в перший місяць виторгу. Платформа пройшла
        шлях від MVP до операційного виторгу за 7 тижнів соло-розробки.
      </p>
      <p>
        <strong>Інженерна пропускна здатність</strong>: 181 коміт за 7 тижнів розробки.
        Auto-deploy у продакшен на кожен push у <code>main</code>. Інфраструктура тестів —
        Vitest для unit-тестів, Playwright для E2E, плюс паралельна test-схема в Supabase
        для ізольованих прогонів.
      </p>

      <PullQuote>
        Білд на 7 тижнів — інша категорія проєкту, ніж білд на 7 місяців.
      </PullQuote>

      <SectionHeading>{c.section.tech}</SectionHeading>
      <TechStack groups={c.techGroups} />
      <p>
        Система ролей/дозволів заслуговує окремої нотатки. Ролі живуть у{" "}
        <code>users.role</code>: <code>platform_owner</code>, <code>studio_director</code>,{" "}
        <code>studio_manager</code>, <code>artist</code>, <code>client</code>. Артист може
        додатково бути <code>is_evaluator=true</code>. Користувач може тримати кілька
        capabilities одночасно — наприклад, менеджер у студії А, який також артист у
        студії Б — і перемикати контекст через тогл «Acting As». Дозволи виводяться:
        менеджер студії бачить кандидатів пайплайну лише в студіях, де він менеджер;
        studio-менеджер бачить проєкти лише в студіях, до яких він входить.
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
            Патерн «Acting As» був елегантним рішенням проблеми, що мало не зламала
            модель ролей.
          </strong>{" "}
          Реальність агенції: одна людина може бути водночас і артистом, і studio-менеджером.
          Зі строгим role-based access control (артисти бачать X, менеджери — X + Y,
          директори — X + Y + Z по студіях) це одразу розвалюється. Два акаунти на людину —
          неприйнятно: дублі особистостей, поламаний аудит-слід, плутанина для користувача.
          Виправлення — capability-based модель з перемикачем «Acting As» у хедері, що
          дозволяє одному акаунту тримати кілька capabilities і перемикати контекст. Щойно
          це стало на місце, строгий ярусний доступ (артист бачить свою роботу; менеджер —
          артистів і проєкти своєї студії; директор — кілька студій і власний модуль)
          вийшов чисто. По UX це невеликий перемикач; архітектурно — наріжний камінь усієї
          системи.
        </li>
        <li>
          <strong>AI-інтеграції коштують ~5% часу розробки і дають ~30% цінності.</strong>{" "}
          Gemini ранжує тестові завдання і парсить прийом замовлень. І те, й те могло бути
          формовими UI, що вимагають ручної роботи. І те, й те виявилось автоматизованими
          воркфлоу, що на порядок зменшили накладні витрати директорів студій. Код
          інтеграції невеликий, а важіль великий.
        </li>
        <li>
          <strong>Білд на 7 тижнів — інша категорія проєкту, ніж білд на 7 місяців.</strong>{" "}
          Рішення, які зазвичай потребують ретельного зважування — inline-стилі замість
          Tailwind, JSON-cookie-сесії замість JWT, Supabase broadcasts замість окремої
          черги повідомлень — ухвалювались за хвилини: брався варіант, який найпростіше
          випустити. Частина цих рішень потребуватиме перегляду на масштабі. Більшість — ні.
        </li>
        <li>
          <strong>
            Стратегічне узгодження з продуктовим roadmap клієнта — це урок, який я засвоїв
            складним шляхом.
          </strong>{" "}
          Чесно: агенція паралельно розробляла власну внутрішню платформу з частково
          перетинними амбіціями в project-менеджменті й операціях. Їхній стек — інший:
          інший фреймворк, інша БД, інші конвенції. Коли це випливло, моя платформа була
          вже 7-тижневою інвестицією зі 181 комітом, і код не можна було перенести в їхній.
          Помилка була плануванням, яке я б розпізнав як rookie-продуктовий хід: я не
          запитав на день перший, <em>який довгостроковий план системи, з якою це врешті
          інтегруватиметься?</em> Я оптимізував під швидке доставлення й валідацію моделі —
          що й зробив — але історія інтеграції тепер натягнута. Висновок, який я несу
          далі: у білдах для внутрішнього клієнта перша дизайн-розмова — про шляхи виходу
          й інтеграції, а не про скоуп фіч.
        </li>
      </ul>

      <SectionHeading>{c.section.next}</SectionHeading>
      <p>
        Платформа у продакшені й продовжує обслуговувати реальні операції агенції.
        Активний беклог: Stripe-білінг (зараз на feature-гілці, ще не в main),
        time-tracking (спроєктований, але не побудований), reports / analytics-дашборд
        (Activity Log і вкладка прибутку є; виділений reporting UI — ні), per-studio
        Slack-інтеграції (зараз тільки один глобальний webhook). Найближче архітектурне
        обмеження — ліміт 12 функцій Vercel Hobby; уже на стелі, тож наступна ітерація
        потребує консолідації ендпойнтів. Відкрите стратегічне питання: з огляду на
        обмеження інтеграції вище, чи довгостроковий дім платформи — цей клієнт, чи
        кодова база стає переносимим артефактом для інших агенцій зі схожими операційними
        патернами.
      </p>
    </>
  );
}
