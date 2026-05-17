"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleContext";

const copy = {
  en: {
    eyebrow: "About",
    titleBefore: "Family physician,",
    titleAccent: "AI-native",
    titleAfter: "product builder.",
    lede:
      "Looking for healthtech roles where clinical practice and shipping experience create an unfair advantage.",
    body: (
      <>
        <p>
          I&apos;m Eugene. I work as a family physician in rural Ukraine, managing 1,828
          patient declarations. I&apos;m also the head of an outpatient clinic. In parallel,
          I&apos;ve spent 4+ years building software — first as Lead Generation automation,
          more recently as production healthcare tools.
        </p>
        <p>
          My path into healthtech is unusual. I&apos;m not a doctor who learned to code, and
          I&apos;m not a developer who learned medicine. I&apos;m someone who saw a gap
          between what the regulations require and what the EMR makes easy — and built the
          bridge for my own clinic. The tools became useful enough that colleagues adopted
          them, and the measurable impact convinced me to do this full-time.
        </p>
        <p>
          The way I build is AI-native: Claude as a development partner, with me owning
          product decisions, architectural framing, and clinical accuracy. This is the part
          of the job I&apos;m best at — translating between regulatory complexity, clinical
          reality, and software solutions.
        </p>
        <h2>What I&apos;m looking for</h2>
        <p>
          A product role at a healthtech company where my combination of clinical practice
          and shipping experience creates a real advantage. Product Manager, Domain Expert,
          or Implementation Specialist — the title matters less than the work. I want to
          work on things that real clinicians will use.
        </p>
        <h2>How to reach me</h2>
        <p>
          The fastest way is email —{" "}
          <a href="mailto:[contact email]">[contact email]</a>. I respond within a day.
        </p>
      </>
    ),
  },
  uk: {
    eyebrow: "Про мене",
    titleBefore: "Сімейний лікар,",
    titleAccent: "AI-native",
    titleAfter: "продукт-білдер.",
    lede:
      "Шукаю healthtech-роль, де поєднання клінічної практики й досвіду запуску продуктів дасть реальну перевагу.",
    body: (
      <>
        <p>
          Я Євген. Працюю сімейним лікарем у сільській місцевості, веду 1 800+ декларацій.
          Також завідую амбулаторією. Паралельно понад 4 роки будую софт — спочатку
          автоматизацію lead generation, останнім часом — робочі healthcare-інструменти.
        </p>
        <p>
          Мій шлях у healthtech нетиповий. Я не лікар, що навчився кодити, і не розробник,
          що навчився медичним тонкощам. Я людина, що побачила розрив між тим, що вимагає
          регулятор, і тим, що зручно зробити в МІС (медичній інформаційній системі) — і збудувала міст для власної
          амбулаторії. Інструменти виявилися корисними настільки, що колеги почали ними
          користуватись, а виміряний результат переконав мене робити це повноцінно.
        </p>
        <p>
          Я будую AI-native: Claude як партнер у розробці, а продуктові рішення,
          архітектурні рамки й клінічна точність — на мені. Це та частина роботи, в якій я
          найсильніший: переклад між регуляторною складністю, клінічною реальністю та
          софтверними рішеннями.
        </p>
        <h2>Що я шукаю</h2>
        <p>
          Продуктову роль у healthtech-компанії, де моя комбінація клінічної практики й
          досвіду запуску продуктів дає реальну перевагу. Product Manager, Domain Expert
          або Implementation Specialist — назва позиції менш важлива за зміст роботи. Хочу
          працювати над тим, чим реально користуватимуться лікарі.
        </p>
        <h2>Як зі мною звʼязатись</h2>
        <p>
          Найшвидше — електронною поштою:{" "}
          <a href="mailto:[contact email]">eugene.syro.builds@gmail.com</a>. Відповідаю протягом доби.
        </p>
      </>
    ),
  },
};

export default function AboutContent() {
  const { locale } = useLocale();
  const c = copy[locale];
  return (
    <div className="container-wide max-w-prose-wide py-section">
      <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-10 items-start mb-14">
        <figure className="relative aspect-[4/5] w-full max-w-[220px] rounded-card overflow-hidden shadow-card bg-paper">
          <Image
            src="/images/avatar.jpg"
            alt="Eugene Syromiatnikov"
            fill
            sizes="220px"
            className="object-cover"
          />
          <div className="vignette-portrait pointer-events-none absolute inset-0" />
        </figure>
        <div className="pt-2">
          <span className="chip mb-4">{c.eyebrow}</span>
          <h1 className="font-heading font-bold text-h1 text-ink-900 mb-4 leading-tight">
            {c.titleBefore}{" "}
            <span className="font-serif italic font-normal accent-text-gradient">
              {c.titleAccent}
            </span>{" "}
            {c.titleAfter}
          </h1>
          <p className="text-body-lg text-ink-700">{c.lede}</p>
        </div>
      </div>

      <div className="bg-paper rounded-card shadow-card p-8 sm:p-12 prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-ink-900 prose-p:text-ink-800 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline max-w-none">
        {c.body}
      </div>
    </div>
  );
}
