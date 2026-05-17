# Portfolio Skeleton Specification — Eugene Syromiatnikov

> **Для Claude Code.** Это полная спецификация портфолио-сайта. Цель — за 2-3 часа развернуть рабочий skeleton на Vercel. Контент case studies лежит отдельно (`case-studies-content.md`) и копируется в страницы после deploy.

---

## 1. High-level goal

Build a personal portfolio site for a Healthcare Product Builder positioning himself for healthtech PM / Domain Expert / Implementation Specialist roles. The site has:
- 1 home page with hero, summary, 4 project cards
- 4 case study pages (Medics, TB Module, Studioverse, Driver Medical Checkups)
- 1 about page
- 1 contact page

Stack: **Next.js 14 (App Router) + Tailwind CSS + TypeScript**. Deploy: **Vercel free tier**. Domain: **syromiatnykov.vercel.app**.

The visual style is **healthcare-tech professional** — clean, trustworthy, with cool blue/teal accents on white. Inspiration: Linear docs, Stripe customer stories, Vercel templates — not flashy, not too corporate.

---

## 2. Project setup

### Initial scaffold

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir --import-alias "@/*"
cd portfolio
```

Answer prompts: ESLint yes, Tailwind yes, src/ dir yes, App Router yes, Turbopack no, customize import alias yes (`@/*`).

### Additional packages

```bash
npm install lucide-react clsx
npm install -D @tailwindcss/typography
```

That's it. Keep dependencies minimal.

### File structure after setup

```
src/
  app/
    layout.tsx                    # Root layout with noindex meta, header, footer
    page.tsx                       # Home page
    about/page.tsx                 # About page
    contact/page.tsx               # Contact page
    case-studies/
      medics-quality-indicators/page.tsx
      tb-module/page.tsx
      studioverse-platform/page.tsx
      driver-medical-checkups/page.tsx
    globals.css                    # Tailwind base + design tokens
  components/
    Header.tsx
    Footer.tsx
    Hero.tsx
    ProjectCard.tsx
    CaseStudyLayout.tsx            # Shared layout for case study pages
    TLDRBlock.tsx
    MetricCard.tsx
    MetricsTable.tsx
    TechStack.tsx
    ProcessNote.tsx                # The "How this was built" AI-native block
    SectionHeading.tsx
    StatusBadge.tsx                # For "In regulatory approval" etc.
  lib/
    metadata.ts                    # Shared SEO config with noindex
public/
  images/
    avatar.jpg                     # Eugene's photo (user provides)
    medics/                        # Screenshots (user adds later)
    tb/
    studioverse/
    drager/
```

---

## 3. Design tokens (Tailwind config)

Update `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Primary palette: healthcare-tech professional
        ink: {
          900: '#0F1A2C',  // Almost black, deep navy. Headings, primary text.
          700: '#2C3E5C',  // Body text
          500: '#5A6B82',  // Secondary text
          300: '#9CA8B8',  // Muted, captions
        },
        paper: {
          DEFAULT: '#FFFFFF',
          tint: '#F7F9FC',   // Section alternation, card backgrounds
          edge: '#E6EBF2',   // Borders, dividers
        },
        accent: {
          50: '#EFF7FB',
          100: '#D9EDF5',
          500: '#0E7AA8',    // Primary action color — calm teal-blue
          600: '#0A6592',
          700: '#084D70',
        },
        success: {
          500: '#22C55E',
          50: '#F0FDF4',
        },
        warning: {
          500: '#EAB308',
          50: '#FEFCE8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Type scale — restrained
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3': ['1.375rem', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.65' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'prose-narrow': '38rem',      // For text-heavy sections
        'prose-wide': '52rem',         // For default content
        'container': '72rem',          // Page max-width
      },
      spacing: {
        'section': '5rem',  // Vertical spacing between sections
      },
    },
  },
  plugins: [typography],
}

export default config
```

### Google Fonts

Add to `src/app/layout.tsx`:

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

// In <html>: className={`${inter.variable} ${jetbrainsMono.variable}`}
```

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    @apply bg-paper text-ink-700 font-sans;
  }
  h1, h2, h3, h4 {
    @apply text-ink-900;
  }
}

@layer components {
  .container-narrow {
    @apply max-w-prose-wide mx-auto px-6;
  }
  .container-wide {
    @apply max-w-container mx-auto px-6;
  }
}
```

---

## 4. Global components

### `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Eugene Syromiatnikov — Healthcare Product Builder',
  description: 'Family physician shipping production healthcare software with AI-assisted development.',
  robots: { index: false, follow: false },  // noindex globally
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### `src/components/Header.tsx`

```tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-paper-edge bg-paper sticky top-0 z-50 backdrop-blur-sm bg-paper/80">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-ink-900 text-lg">
          Eugene Syromiatnikov
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-ink-700 hover:text-accent-600 text-small">
            Work
          </Link>
          <Link href="/about" className="text-ink-700 hover:text-accent-600 text-small">
            About
          </Link>
          <Link href="/contact" className="text-ink-700 hover:text-accent-600 text-small">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
```

### `src/components/Footer.tsx`

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-paper-edge bg-paper-tint mt-section">
      <div className="container-wide py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-small text-ink-500">
          © 2026 Eugene Syromiatnikov. Built with Next.js + AI.
        </p>
        <div className="flex items-center gap-6 text-small text-ink-500">
          <a href="mailto:[contact email]" className="hover:text-accent-600">Email</a>
          <a href="https://www.linkedin.com/in/eugene-siromyatnikov/" target="_blank" rel="noopener" className="hover:text-accent-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
```

---

## 5. Home page

### `src/app/page.tsx`

```tsx
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    slug: 'medics-quality-indicators',
    title: 'Medics Quality Indicators',
    subtitle: 'Chrome extension for Ukrainian primary care EMR',
    hook: 'Cancer screening referrals grew ×27 in 3 months across a 5-physician cohort.',
    tags: ['Healthcare', 'Chrome Extension', 'AI-assisted dev'],
    status: 'Production',
  },
  {
    slug: 'tb-module',
    title: 'TB Module',
    subtitle: 'Full digital replacement of paper TB documentation',
    hook: '1,851 patients migrated from 28 Excel sheets + paper. Used by my nurse and me daily.',
    tags: ['Healthcare', 'Full-stack web app', 'Supabase'],
    status: 'Production',
  },
  {
    slug: 'studioverse-platform',
    title: 'Studioverse Platform',
    subtitle: 'Multi-tenant SaaS for AI video production agency',
    hook: '37 users, 6 studios, $1,752 revenue in first revenue month. 181 commits in 7 weeks.',
    tags: ['B2B SaaS', 'AI integrations', 'Multi-tenant'],
    status: 'Production',
  },
  {
    slug: 'driver-medical-checkups',
    title: 'Pre-Trip Driver Checkups',
    subtitle: 'Digital pre-trip medical screening with breathalyzer integration',
    hook: 'USB-synced Drager breathalyzer + structured logs replacing paper journal.',
    tags: ['Healthcare', 'Device integration', 'Compliance'],
    status: 'Functional · Pending regulatory approval',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="container-wide py-section">
          <div className="max-w-prose-wide">
            <p className="text-small text-accent-600 font-semibold uppercase tracking-wider mb-4">
              Healthcare Product Builder
            </p>
            <h1 className="text-display text-ink-900 mb-6">
              Family physician shipping production healthcare software.
            </h1>
            <p className="text-body-lg text-ink-700 mb-8">
              I'm a practicing family doctor managing 1,828 patient declarations
              in rural Ukraine. In parallel I design and ship working healthtech tools
              through AI-assisted development. Below — four products currently in production.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg text-small font-medium transition-colors"
              >
                See work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-paper-edge hover:border-ink-500 text-ink-700 px-5 py-2.5 rounded-lg text-small font-medium transition-colors"
              >
                About me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <section id="work" className="bg-paper-tint border-y border-paper-edge">
        <div className="container-wide py-section">
          <h2 className="text-h2 text-ink-900 mb-2">Work</h2>
          <p className="text-body text-ink-500 mb-12">
            Each case study includes the problem, the solution, screenshots, and measured impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

### `src/components/ProjectCard.tsx`

```tsx
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import StatusBadge from './StatusBadge'

type Props = {
  slug: string
  title: string
  subtitle: string
  hook: string
  tags: string[]
  status: string
}

export default function ProjectCard({ slug, title, subtitle, hook, tags, status }: Props) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group block bg-paper border border-paper-edge rounded-xl p-6 hover:border-accent-500 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-h3 text-ink-900 group-hover:text-accent-600 transition-colors">
          {title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-ink-300 group-hover:text-accent-500 transition-colors" />
      </div>
      <p className="text-small text-ink-500 mb-4">{subtitle}</p>
      <p className="text-body text-ink-700 mb-5">{hook}</p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-small text-ink-500 bg-paper-tint px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <StatusBadge label={status} />
      </div>
    </Link>
  )
}
```

### `src/components/StatusBadge.tsx`

```tsx
import clsx from 'clsx'

type Props = { label: string }

export default function StatusBadge({ label }: Props) {
  const isProduction = label === 'Production'
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 text-small font-medium px-2.5 py-1 rounded-md',
        isProduction
          ? 'bg-success-50 text-success-500'
          : 'bg-warning-50 text-warning-500'
      )}
    >
      <span
        className={clsx(
          'w-1.5 h-1.5 rounded-full',
          isProduction ? 'bg-success-500' : 'bg-warning-500'
        )}
      />
      {label}
    </span>
  )
}
```

---

## 6. Case Study Layout (shared component)

### `src/components/CaseStudyLayout.tsx`

```tsx
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import StatusBadge from './StatusBadge'

type Props = {
  title: string
  subtitle: string
  status: string
  tags: string[]
  tldr: string
  children: React.ReactNode
}

export default function CaseStudyLayout({ title, subtitle, status, tags, tldr, children }: Props) {
  return (
    <article>
      {/* Breadcrumb */}
      <div className="border-b border-paper-edge bg-paper-tint">
        <div className="container-wide py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-small text-ink-500 hover:text-accent-600">
            <ArrowLeft className="w-4 h-4" /> All work
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="container-wide py-12 max-w-prose-wide">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <StatusBadge label={status} />
          {tags.map((tag) => (
            <span key={tag} className="text-small text-ink-500 bg-paper-tint px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-h1 text-ink-900 mb-3">{title}</h1>
        <p className="text-body-lg text-ink-500">{subtitle}</p>
      </header>

      {/* TL;DR */}
      <section className="container-wide max-w-prose-wide">
        <div className="bg-accent-50 border border-accent-100 rounded-xl p-6 mb-12">
          <p className="text-small uppercase tracking-wider text-accent-700 font-semibold mb-2">
            Quick read
          </p>
          <p className="text-body text-ink-900 leading-relaxed">{tldr}</p>
        </div>
      </section>

      {/* Body */}
      <div className="container-wide max-w-prose-wide pb-section prose prose-lg">
        {children}
      </div>
    </article>
  )
}
```

### `src/components/SectionHeading.tsx`

```tsx
type Props = { children: React.ReactNode; level?: 2 | 3 }

export default function SectionHeading({ children, level = 2 }: Props) {
  if (level === 2) {
    return <h2 className="text-h2 text-ink-900 mt-12 mb-4">{children}</h2>
  }
  return <h3 className="text-h3 text-ink-900 mt-8 mb-3">{children}</h3>
}
```

### `src/components/MetricCard.tsx`

```tsx
type Props = {
  label: string
  value: string
  delta?: string
  emphasis?: boolean
}

export default function MetricCard({ label, value, delta, emphasis }: Props) {
  return (
    <div className={`p-5 rounded-xl border ${emphasis ? 'bg-accent-50 border-accent-100' : 'bg-paper-tint border-paper-edge'}`}>
      <p className="text-small text-ink-500 mb-2">{label}</p>
      <p className={`text-h2 ${emphasis ? 'text-accent-700' : 'text-ink-900'}`}>{value}</p>
      {delta && <p className="text-small text-ink-500 mt-1">{delta}</p>}
    </div>
  )
}
```

### `src/components/MetricsTable.tsx`

```tsx
type Row = {
  label: string
  values: (string | number)[]
  emphasis?: boolean
}

type Props = {
  headers: string[]
  rows: Row[]
}

export default function MetricsTable({ headers, rows }: Props) {
  return (
    <div className="overflow-x-auto my-6 border border-paper-edge rounded-xl">
      <table className="min-w-full">
        <thead className="bg-paper-tint border-b border-paper-edge">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-small font-semibold text-ink-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-paper-edge">
          {rows.map((row, i) => (
            <tr key={i} className={row.emphasis ? 'bg-accent-50' : ''}>
              <td className="px-4 py-3 text-small text-ink-700 font-medium">{row.label}</td>
              {row.values.map((v, j) => (
                <td key={j} className="px-4 py-3 text-small text-ink-900 tabular-nums">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

### `src/components/TechStack.tsx`

```tsx
type Group = {
  label: string
  items: string[]
}

type Props = { groups: Group[] }

export default function TechStack({ groups }: Props) {
  return (
    <div className="my-6 space-y-3 not-prose">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <p className="text-small font-semibold text-ink-700 sm:w-40 shrink-0">{g.label}</p>
          <p className="text-small text-ink-500 font-mono">{g.items.join(' · ')}</p>
        </div>
      ))}
    </div>
  )
}
```

### `src/components/ProcessNote.tsx` — the AI-native development block

```tsx
type Props = {
  ownership: string
  timeSpent: string
  collaboration: string
}

export default function ProcessNote({ ownership, timeSpent, collaboration }: Props) {
  return (
    <div className="not-prose my-8 border-l-4 border-accent-500 bg-accent-50/40 pl-6 py-4 pr-6 rounded-r-lg">
      <p className="text-small font-semibold text-accent-700 mb-2 uppercase tracking-wider">
        How this was built
      </p>
      <dl className="space-y-2 text-body text-ink-700">
        <div>
          <dt className="inline font-semibold text-ink-900">Ownership: </dt>
          <dd className="inline">{ownership}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-ink-900">Collaboration: </dt>
          <dd className="inline">{collaboration}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-ink-900">Time invested: </dt>
          <dd className="inline">{timeSpent}</dd>
        </div>
      </dl>
    </div>
  )
}
```

### `src/components/TLDRBlock.tsx` — if needed standalone (already inline in CaseStudyLayout, but can be reused)

Already included inline in CaseStudyLayout. Skip as separate component.

---

## 7. Case study page template

Each case study uses CaseStudyLayout + content from `case-studies-content.md`. Here's the structure for `src/app/case-studies/medics-quality-indicators/page.tsx`:

```tsx
import CaseStudyLayout from '@/components/CaseStudyLayout'
import SectionHeading from '@/components/SectionHeading'
import MetricsTable from '@/components/MetricsTable'
import TechStack from '@/components/TechStack'
import ProcessNote from '@/components/ProcessNote'
import MetricCard from '@/components/MetricCard'
import Image from 'next/image'

export const metadata = {
  title: 'Medics Quality Indicators — Eugene Syromiatnikov',
  robots: { index: false, follow: false },
}

export default function MedicsCaseStudy() {
  return (
    <CaseStudyLayout
      title="Medics Quality Indicators"
      subtitle="A Chrome extension that overlays on Ukraine's Medics EMR to surface 13 primary-care quality indicators per patient in real time."
      status="Production"
      tags={['Healthcare', 'Chrome Extension', 'AI-assisted dev']}
      tldr="Ukrainian primary care physicians must meet quality indicators set by the Ministry of Health, but the Medics EMR doesn't surface per-patient indicator status — doctors review fields manually, with predictable results: low oncology screening coverage nationwide. I built a Chrome extension that parses the patient view and shows indicator status (done/overdue/partial/missing) in real time. Used by 6 physicians at my clinic. Over 3 months, colorectal screening referrals grew ×27, prostate ×4.7, breast ×5.8 — measured against NSZU performance reports."
    >
      <SectionHeading>Context</SectionHeading>
      <p>{/* Content goes here */}</p>

      <SectionHeading>Solution</SectionHeading>
      <p>{/* ... */}</p>

      {/* Screenshot block — replace src after uploading */}
      <figure className="my-8 not-prose">
        <Image
          src="/images/medics/extension-overlay.png"
          alt="Medics extension overlay showing indicator status"
          width={1200}
          height={720}
          className="rounded-xl border border-paper-edge"
        />
        <figcaption className="text-small text-ink-500 mt-2 text-center">
          Extension overlay on a patient card. Sensitive data redacted.
        </figcaption>
      </figure>

      <SectionHeading>Impact</SectionHeading>
      <p>{/* ... */}</p>

      <MetricsTable
        headers={['Screening', 'Referrals Jan', 'Referrals Apr', 'Change', 'Actual coverage Jan → Apr']}
        rows={[
          { label: 'Colorectal cancer', values: ['0.11%', '2.91%', '×27', '0.030% → 0.081% (+174%)'], emphasis: true },
          { label: 'Prostate cancer', values: ['0.73%', '3.42%', '×4.7', '0.226% → 0.502% (+123%)'] },
          { label: 'Breast cancer', values: ['0.61%', '3.54%', '×5.8', '0.298% → 0.324% (+9%)'] },
          { label: 'HIV screening', values: ['5.71%', '9.72%', '+70%', '—'] },
          { label: 'CV risk assessment', values: ['~61%', '~61% (+0.5%)', 'Stable', '—'] },
        ]}
      />

      <SectionHeading>Tech stack & architecture</SectionHeading>
      <TechStack
        groups={[
          { label: 'Frontend', items: ['Pure JavaScript (ES6+)', 'Chrome Extension Manifest V3', 'DOM API'] },
          { label: 'Storage', items: ['chrome.storage.sync'] },
          { label: 'Matching', items: ['Rule-based engine (no LLM)', 'ICPC-2 / ICD-10 whitelist', 'LOINC observations'] },
          { label: 'Codebase', items: ['~3,800 LOC core', '4,887 LOC including TB Module integration'] },
        ]}
      />

      <ProcessNote
        ownership="I identified the clinical problem, specified the indicator logic against MoH regulations, designed the rule-based parser architecture, deployed to my colleagues, and measured adoption."
        collaboration="AI-assisted development with Claude. AI generated implementation; I owned product, design, and architectural framing decisions."
        timeSpent="~6 weeks of part-time work in early 2025; ongoing maintenance."
      />

      <SectionHeading>What I learned</SectionHeading>
      <ul>
        <li>{/* lesson 1 */}</li>
        <li>{/* lesson 2 */}</li>
      </ul>

      <SectionHeading>Next steps</SectionHeading>
      <p>{/* ... */}</p>
    </CaseStudyLayout>
  )
}
```

**Each case study page follows this template**, with content swapped from `case-studies-content.md`.

---

## 8. About page

### `src/app/about/page.tsx`

```tsx
import Image from 'next/image'

export const metadata = {
  title: 'About — Eugene Syromiatnikov',
  robots: { index: false, follow: false },
}

export default function AboutPage() {
  return (
    <div className="container-wide max-w-prose-wide py-section">
      <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
        <Image
          src="/images/avatar.jpg"
          alt="Eugene Syromiatnikov"
          width={160}
          height={160}
          className="rounded-2xl border border-paper-edge shrink-0"
        />
        <div>
          <h1 className="text-h1 text-ink-900 mb-3">About</h1>
          <p className="text-body-lg text-ink-500">
            Family physician, AI-native product builder, looking for healthtech roles.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          I'm Eugene. I work as a family physician in rural Ukraine, managing 1,828 patient
          declarations. I'm also the head of an outpatient clinic. In parallel, I've spent
          4+ years building software — first as Lead Generation automation, more recently
          as production healthcare tools.
        </p>

        <p>
          My path into healthtech is unusual. I'm not a doctor who learned to code, and
          I'm not a developer who learned medicine. I'm someone who saw a gap between
          what the regulations require and what the EMR makes easy — and built the bridge
          for my own clinic. The tools became useful enough that colleagues adopted them,
          and the measurable impact convinced me to do this full-time.
        </p>

        <p>
          The way I build is AI-native: Claude as a development partner, with me owning
          product decisions, architectural framing, and clinical accuracy. This is the
          part of the job I'm best at — translating between regulatory complexity, clinical
          reality, and software solutions.
        </p>

        <h2>What I'm looking for</h2>
        <p>
          A product role at a healthtech company where my combination of clinical practice
          and shipping experience creates a real advantage. Product Manager, Domain Expert,
          or Implementation Specialist — the title matters less than the work. I want to
          work on things that real clinicians will use.
        </p>

        <h2>How to reach me</h2>
        <p>
          The fastest way is email — <a href="mailto:[contact email]" className="text-accent-600 hover:text-accent-700">contact email here</a>.
          I respond within a day.
        </p>
      </div>
    </div>
  )
}
```

---

## 9. Contact page

### `src/app/contact/page.tsx`

```tsx
import { Mail, Linkedin, Github } from 'lucide-react'

export const metadata = {
  title: 'Contact — Eugene Syromiatnikov',
  robots: { index: false, follow: false },
}

export default function ContactPage() {
  return (
    <div className="container-wide max-w-prose-narrow py-section">
      <h1 className="text-h1 text-ink-900 mb-3">Contact</h1>
      <p className="text-body-lg text-ink-500 mb-12">
        The fastest way to reach me is email. I respond within a day.
      </p>

      <div className="space-y-4">
        <a
          href="mailto:[contact email]"
          className="flex items-center gap-4 p-5 border border-paper-edge rounded-xl hover:border-accent-500 hover:shadow-sm transition-all"
        >
          <Mail className="w-6 h-6 text-accent-500" />
          <div>
            <p className="text-body font-medium text-ink-900">Email</p>
            <p className="text-small text-ink-500">[contact email]</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/eugene-siromyatnikov/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 border border-paper-edge rounded-xl hover:border-accent-500 hover:shadow-sm transition-all"
        >
          <Linkedin className="w-6 h-6 text-accent-500" />
          <div>
            <p className="text-body font-medium text-ink-900">LinkedIn</p>
            <p className="text-small text-ink-500">linkedin.com/in/eugene-siromyatnikov</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-5 border border-paper-edge rounded-xl bg-paper-tint">
          <Github className="w-6 h-6 text-ink-500" />
          <div>
            <p className="text-body font-medium text-ink-900">GitHub</p>
            <p className="text-small text-ink-500">Code samples available on request. Most repos are private (client work).</p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## 10. Deploy to Vercel

1. Push to a fresh GitHub repo `portfolio` (can be private — Vercel still deploys from private repos).
2. Go to vercel.com → New Project → Import from GitHub → select `portfolio`.
3. Framework auto-detected (Next.js). Click Deploy. Wait ~2 min.
4. Domain: in project settings → Domains → custom domain `syromiatnykov.vercel.app` (Vercel allows custom subdomains on free tier).

   If `syromiatnykov.vercel.app` is taken, fall back to `eugene-syromiatnikov.vercel.app`.

5. Verify noindex: open https://syromiatnykov.vercel.app/, view source, confirm `<meta name="robots" content="noindex, nofollow">` is present on every page.

---

## 11. Content workflow

After skeleton is deployed:

1. Open `case-studies-content.md` (separate file).
2. For each case study, copy:
   - TLDR string → into `tldr` prop on CaseStudyLayout
   - Each section's body → into the corresponding `<p>` / `<ul>` blocks
   - Table data → into MetricsTable props
   - Tech stack → into TechStack groups
   - ProcessNote fields
3. Upload screenshots to `/public/images/{project}/` and update `src` paths in `<Image>` components.
4. Commit, push, Vercel auto-redeploys.

---

## 12. Quality checklist before sharing portfolio link

- [ ] All four case study pages render without errors
- [ ] All images load (no broken `<Image>` placeholders)
- [ ] All `[contact email]` placeholders replaced with the new professional Gmail
- [ ] All `[content goes here]` placeholders replaced with real content from `case-studies-content.md`
- [ ] noindex meta tag present on every page (view source check)
- [ ] Mobile layout works (resize browser to 375px width)
- [ ] All links work (no 404s from Project Cards or breadcrumbs)
- [ ] No PII in any screenshot (faces, names, dates of birth, phone numbers redacted)
- [ ] Studioverse content uses "AI video production agency" instead of "Studioverse" everywhere
- [ ] Cohort of 5 physicians anonymized (no real names from Medics case)

---

## 13. Time estimate

- Steps 1-3 (scaffold, tokens, layout): **1 hour**
- Steps 4-6 (components, home, case study layout): **1 hour**
- Steps 7-9 (one case study page + about + contact): **30-45 minutes**
- Remaining 3 case study pages (clone template, swap content): **45-60 minutes**
- Deploy + smoke test: **15-30 minutes**
- **Total: 3.5-4.5 hours** (excluding content writing — content comes from `case-studies-content.md`, separately).

---

## 14. Things this spec deliberately does NOT include

- **Analytics** (Vercel Analytics, Plausible, etc.) — not needed for a non-public portfolio.
- **Contact form with backend** — link to mailto: instead. Simpler, no Resend setup, no spam.
- **Blog / writing section** — adds scope, not needed for first version.
- **Dark mode** — adds complexity, healthcare-tech professional aesthetic works better in light only.
- **Animations / transitions** — keep static. Animations dilute "serious builder" signal.
- **Sticky table of contents** on case studies — pages are short enough.

These can be added later if needed. First version is intentionally minimal.

---

End of skeleton spec.
