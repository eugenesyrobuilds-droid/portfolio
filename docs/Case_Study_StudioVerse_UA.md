═══════════════════════════════════════════════════════════════
ENGLISH VERSION
═══════════════════════════════════════════════════════════════

Tags: Production · Lead generation · Chrome Extension · AI-assisted dev · 10 min read

# StudioVerse UA

A lead-generation assistant for a freelance marketplace: it scores the job feed against our rules, drafts a tailored proposal per job, and tracks every outcome in one shared place.

> Note on the platform: I keep the marketplace unnamed throughout. The terms it uses — proposals, connects, cover letters — make it obvious to anyone in this line of work, which is the only audience this case study is for.

## Quick read

Lead generation here was fully manual. For every job: open it, weigh the green and red flags, read the client's reviews, decide whether it's worth a shot, customize a template, pick the right portfolio examples, edit, send. A full working day got one person roughly **10–15 proposals**.

I built a Chrome extension that reads the search feed, scores each job against preset rules, and — for the jobs we pick — drafts a custom proposal (still anchored to a template) using signals from the job and the client. The person edits the final text and confirms the send. One person can now send **up to ~100 proposals in 3–4 hours**.

Honest framing first: what's **proven** is throughput — roughly **×6.7**. Conversion stayed *inside* its pre-tool range, not above it. So this isn't a story about better conversion; it's a story about scaling volume **without the quality collapse you'd normally get** from a 6.7× increase. Details in Impact.

Building this wasn't in my job description. I saw the opportunity and built it; a colleague adopted the beta, now runs on it daily, and we pool the data together.

## Context

The job, done by hand, is a sequence of judgment calls: open a posting, read it for signal (budget, scope clarity, client history, red flags), open the client's review history, decide go/no-go, then — if it's a go — rewrite a template to fit, choose portfolio pieces that match the niche, and send. Each of those steps is fast on its own; stacked across a day, the ceiling is ~10–15 proposals. The bottleneck isn't typing — it's the repeated reading, scoring, and tailoring.

There's almost nothing off the shelf for this. A couple of services position themselves as lead-gen automation for the platform, but as far as I can tell they run roughly what we run under the hood — scrape the job feed, prompt a cover letter (less customizable than ours) — and a human still clicks "submit" on every proposal. That last point isn't a product choice; it's a hard constraint. When I built this, I hit the same wall: the final "submit proposal" click can't be automated. So a fully hands-off, end-to-end flow was never on the table — for them or for me. Everything up to that click is fair game; the click itself stays human.

## Solution

Each day the extension reads the search results, pulls each job's signals, and scores how interesting it is against rules I defined — doing what a human reviewer does, much faster, to support the go/no-go call. The score surfaces as a traffic-light badge on each card, so the feed sorts itself by relevance at a glance.

For the jobs we pick, it reads the full description, weighs signals about the job and the client, and drafts a custom proposal — still anchored to a preset template, so the structure stays consistent and on-brand. The person then edits the final text (a safety net for anything off) and confirms the send.

[screenshot: search-feed scanner with traffic-light badges]
[screenshot: sidebar proposal draft on a job page]

The point isn't to replace the human judgment — it's to do everything *around* it fast, so the human spends their attention on the decision and the final edit, not on the repetitive reading and drafting.

## The hard part

Two problems were the real work.

**Encoding the scoring.** The interesting question was never "can a model read a job posting" — it's *which signals decide whether a job is worth a proposal*, and how to express them as rules. Hard filters (jailbreak/spam jobs, niches we deny, per-deliverable rates below our floor) plus weighted soft rules. This is the part where my own lead-gen experience is the input — I was encoding the judgment I'd built by hand into something explicit.

**Making the AI output trustworthy.** This was the central engineering problem, and it's the same instinct as my Medics tool: *where you can't trust the model blindly, wrap it in deterministic rules.* A generated proposal can hallucinate — invent a URL, claim a specialty we don't have, drop the required phrase that mirrors the client's language, slip in a banned word. I couldn't put that in front of clients. So every draft passes through 10+ deterministic checks (invented URLs, fabricated specialties, missing mirror phrase, missing closing question, banned/amateur phrasing, and more). Each failure becomes a correction line, fed back to a cheaper model for a targeted retry. The expensive model drafts; the rules decide what's allowed out. AI writes; rules govern.

One product decision inside this is mine and worth naming: **the opener for each job has to be maximally custom.** A generic opener loses here. My approach is to look at each job from three angles, write an opener variant from each, and then pick the best one. (The mechanism that scores and picks between the three is implementation — see *How this was built* for where my decisions end and the AI's work begins.)

## Impact

**Throughput — proven.** Manual ceiling was ~15 proposals a day. With the tool, one person sends up to ~100 in 3–4 hours. Roughly **×6.7**, and verifiable from our own records. At least three manual steps are gone entirely.

**Conversion — the honest part.** Before the tool, our numbers swung with whoever was sending and how rushed they were: view rate ran **15–35%**, reply rate **2–6%**. With the tool, the funnel sits at roughly **30% viewed**, **4% replied** (of sent), and **14% replied** among the proposals that got viewed.

Look at where those land: the after-numbers (30% viewed, 4% replied) fall *inside* the pre-tool ranges (15–35%, 2–6%). So I won't claim the tool improved conversion — the data doesn't support that. What it shows is that conversion **held steady inside its prior band while volume multiplied ~6.7×.**

That holding-steady is the actual result. When you push manual volume up 6.7×, conversion usually *drops* — you rush, you customize less, quality slips. It didn't here, which suggests the per-proposal tailoring survived the scale-up. But this is two people over two months with no controlled comparison, so read it as the honest shape of the thing, not proof: **the tool's demonstrated contribution is volume without a quality collapse — not a conversion lift.**

One caveat I'll put here rather than bury: I track connects spent per proposal, so we can see cost per lead and per client. I do **not** yet fold the AI API cost into that, so our true CAC is incomplete. More in *Limitations*.

## Tech stack & architecture

Vanilla JavaScript (ES2020+), no framework, no build step, no test suite. Chrome Extension Manifest V3. **~10,500 lines across 18 source files.**

Three runtime contexts:
- **Job-page content script** — the proposal-generation pipeline (sidebar UI, model orchestration, the validator/retry loop, the opener pipeline).
- **Search-page content script** — the feed scanner: a per-card state machine with a MutationObserver that waits for the job's detail view to actually finish rendering before extracting, with cancellable retries.
- **Service worker** — a 15-minute sync alarm and the manual-sync trigger.

**Three Gemini model tiers, by role and cost:** a Pro model for the letter and screening answers, a Flash model for the opener and the judge, a Flash-Lite model for analysis and scoring. Cheaper models do the cheap work; the expensive one is reserved for the final letter. That split is the cost-control decision (see below).

**Storage and sync:** `chrome.storage.local` for everything local, with a Google Apps Script web app syncing tracking data to a shared Google Sheet — chosen deliberately as a two-person database that doubles as the analysis surface.

Architecturally, roughly a third of the codebase (the scoring engine, the opener-prompt builders, the portfolio/reference data) is pure logic with no DOM dependency and would port elsewhere; the other two-thirds is bound to the platform's DOM and to Chrome's extension APIs.

## How this was built

**Ownership — mine.** Every functional decision was mine. I was translating what I do by hand into automation: the scoring rules and the signals that matter, the three-angle opener strategy, the decision to keep every proposal anchored to a template, what to track, and the choice to use a Google Sheet as the shared database — for easy two-person sync and for the data analysis that lets us keep testing and improving.

**Collaboration — AI.** The technical implementation was AI's, as it always is for me. Two honest specifics: the page-extraction logic went through several iterations, and one module had to be worked around because it silently failed to load in some configurations. Both were AI-driven debugging in response to problems *I observed in the output* — I'd flag "the proposals have this issue," and the AI would find and fix the cause. I don't know why those particular fixes were needed at the code level, and I don't claim them as mine. My side was the product and the judgment; the AI's side was making it run.

**Time invested.** Roughly 2–3 months of relaxed, non-daily development.

## What I learned

- **If something gets parsed, save it — even when you don't yet know why.** Better to have data and no use for it than a use and no data. Half the reason we can analyze the funnel at all today is that I stored everything from the start, before I had a question to ask of it.
- **The output is only as trustworthy as the guardrails around it.** The model writing the proposal was never the hard part; the validation layer that catches its hallucinations before they reach a client was. Same lesson as encoding regulatory logic by hand in my clinical tool — wrap the model where you can't trust it.

## Limitations

These are real and worth stating plainly:

- **Short job posts trigger hallucinations.** When a posting is too thin, the draft starts inventing to fill the space. I haven't solved this yet.
- **No proper A/B tracking.** I run theories — prompt tweaks, template changes — but there's no real experimentation system. The template-performance section is a first hint of one, not the real thing. Still building it.
- **CAC is incomplete.** I track connects per proposal (real cost per lead and per client), but I don't yet include AI API cost, which affects true CAC. Planned.
- **The API key is hardcoded.** A deliberate tradeoff: this was built for me and one colleague, never for public install. For any public use the key wouldn't sit in the client. I name it so the choice isn't mistaken for an oversight.
- **It's stitched onto a third-party site's DOM, so it's brittle by nature.** When the platform changes its page, parts break and need patching. That's structural to this kind of tool, not a bug I can close.
- **Sync is last-write-wins.** If two of us edit the same record between syncs, one silently overwrites the other. Fine for two people; it wouldn't be for more.

## Next steps

- A real A/B tracking system for proposal templates and prompts, so improvements are measured rather than assumed.
- Folding AI cost into CAC, for honest unit economics on every lead.


═══════════════════════════════════════════════════════════════
УКРАЇНСЬКА ВЕРСІЯ
═══════════════════════════════════════════════════════════════

Теги: Production · Лідогенерація · Chrome Extension · AI-assisted dev · 10 хв читання

# StudioVerse UA

Асистент для лідогенерації на фриланс-маркетплейсі: оцінює видачу пошуку за нашими правилами, готує кастомний пропозал під кожну джобу й веде облік кожного результату в одному спільному місці.

> Про платформу: я навмисно ніде не називаю маркетплейс. Терміни, якими він оперує — пропозали, конекти, cover letters — і так роблять його очевидним для будь-кого в цій сфері, а саме ця аудиторія цей кейс і читає.

## Коротко

Лідогенерація тут була повністю ручною. Під кожну джобу: відкрити її, зважити зелені й червоні прапорці, перечитати відгуки про клієнта, вирішити, чи варто відкликатися, відредагувати шаблон під неї, підібрати релевантні приклади з портфоліо, відредагувати, відправити. За повний робочий день одна людина встигала приблизно **10–15 пропозалів**.

Я зробив Chrome-розширення, яке читає видачу пошуку, оцінює кожну джобу за наперед заданими правилами і — для обраних джоб — готує кастомний пропозал (усе одно прив'язаний до шаблону), спираючись на сигнали з джоби та про клієнта. Людина редагує фінальний текст і підтверджує відправку. Тепер одна людина може відправити **до ~100 пропозалів за 3–4 години**.

Чесна рамка одразу: те, що **доведено** — це пропускна здатність, приблизно **×6.7**. Конверсія лишилася *в межах* свого доінструментного діапазону, а не вище. Тож це історія не про кращу конверсію, а про масштабування обсягу **без обвалу якості**, який зазвичай стається при збільшенні в 6.7 раза. Деталі — у розділі «Результат».

Створення цього розширення не входило в мої обов'язки. Я побачив потенціал і зробив його; колега почав користуватися бета-версією, тепер працює на ньому щодня, і ми збираємо дані разом.

## Контекст

Ця робота вручну — це послідовність суджень: відкрити джобу, прочитати її на сигнали (бюджет, чіткість скоупу, історія клієнта, червоні прапорці), відкрити історію відгуків клієнта, вирішити «відкликаємось / ні», і — якщо так — переписати шаблон під неї, обрати роботи з портфоліо під нішу, відправити. Кожен крок окремо швидкий; складені за день, вони впираються в стелю ~10–15 пропозалів. Вузьке місце — не друкування, а повторюване читання, оцінювання й кастомізація.

Готових рішень під це майже немає. Пара сервісів позиціюють себе як автоматизацію лідогену для платформи, але, наскільки я можу судити, всередині в них приблизно те саме, що й у нас — скрейпинг видачі, промптинг cover letter (менш кастомізований, ніж у нас) — і людина все одно тисне «submit» на кожному пропозалі. Це не продуктовий вибір, а жорстке обмеження. Коли я це будував, я вперся в ту саму стіну: фінальний клік «відправити пропозал» автоматизувати не можна. Тож повністю безлюдного, end-to-end флоу не було на столі — ні в них, ні в мене. Усе до цього кліку — чесна гра; сам клік лишається за людиною.

## Рішення

Щодня розширення читає результати пошуку, витягує сигнали кожної джоби й оцінює, наскільки вона цікава, за правилами, які я задав — роблячи те саме, що й людина-рев'ювер, тільки значно швидше, щоб підтримати рішення «відкликаємось / ні». Оцінка показується як бейдж-світлофор на кожній картці, тож видача сама сортується за релевантністю з одного погляду.

Для обраних джоб воно читає повний опис, зважує сигнали про джобу та клієнта й готує кастомний пропозал — усе одно прив'язаний до наперед заданого шаблону, щоб структура лишалася консистентною та в межах бренду. Далі людина редагує фінальний текст (запобіжник на випадок будь-чого зайвого) і підтверджує відправку.

[скриншот: сканер видачі з бейджами-світлофорами]
[скриншот: чернетка пропозалу в сайдбарі на сторінці джоби]

Сенс не в тому, щоб замінити людське судження — а в тому, щоб робити все *навколо* нього швидко, аби людина витрачала увагу на рішення й фінальну правку, а не на повторюване читання й написання.

## Найскладніше

Реальною роботою були дві задачі.

**Закодувати скоринг.** Цікаве питання було не «чи може модель прочитати джобу» — а *які сигнали вирішують, чи варта джоба пропозалу*, і як виразити їх правилами. Жорсткі фільтри (джейлбрейк/спам-джоби, ніші, які ми відхиляємо, ставки за одиницю нижче нашого порогу) плюс зважені м'які правила. Це та частина, де входом є мій власний досвід лідогену — я кодував у явні правила те судження, яке набив руками.

**Зробити вивід ІІ надійним.** Це була центральна інженерна проблема, і це той самий інстинкт, що й у моєму інструменті для Medics: *там, де моделі не можна довіряти наосліп, обгорни її детермінованими правилами.* Згенерований пропозал може галюцинувати — вигадати URL, заявити спеціалізацію, якої в нас немає, загубити обов'язкову фразу, що віддзеркалює мову клієнта, протягнути заборонене слово. Я не міг покласти таке перед клієнтом. Тому кожна чернетка проходить 10+ детермінованих перевірок (вигадані URL, неіснуючі спеціалізації, відсутня фраза-дзеркало, відсутнє закриваюче питання, заборонені/аматорські формулювання тощо). Кожен провал стає рядком-корекцією, який віддається дешевшій моделі на точковий ретрай. Дорога модель пише; правила вирішують, що випустити назовні. ІІ пише; правила керують.

Одне продуктове рішення тут — моє, і його варто назвати: **опенер для кожної джоби має бути максимально кастомним.** Загальний опенер тут програє. Мій підхід — подивитися на кожну джобу з трьох кутів, написати варіант опенера з кожного, а потім обрати найкращий. (Механізм, що оцінює й обирає між трьома — це реалізація; де закінчуються мої рішення й починається робота ІІ, описано в розділі «Як це будувалося».)

## Результат

**Пропускна здатність — доведено.** Ручна стеля була ~15 пропозалів на день. З інструментом одна людина відправляє до ~100 за 3–4 години. Приблизно **×6.7**, і це верифіковано з наших власних записів. Щонайменше три ручні кроки зникли повністю.

**Конверсія — чесна частина.** До інструмента наші цифри коливалися залежно від того, хто відправляв і наскільки поспіхом: рейт переглядів був **15–35%**, рейт відповідей **2–6%**. З інструментом воронка тримається приблизно на **30% переглянутих**, **4% відповіли** (від відправлених) і **14% відповіли** серед тих пропозалів, що були переглянуті.

Подивіться, куди це лягає: цифри «після» (30% переглядів, 4% відповідей) падають *усередину* доінструментних діапазонів (15–35%, 2–6%). Тож я не стверджуватиму, що інструмент покращив конверсію — дані цього не підтверджують. Що вони показують — це що конверсія **трималася стабільно в межах свого попереднього коридору, поки обсяг множився ~×6.7.**

Оце «трималася стабільно» — і є справжній результат. Коли ручний обсяг штовхають угору в 6.7 раза, конверсія зазвичай *падає* — поспіх, менше кастомізації, якість просідає. Тут не просіла, що натякає: кастомізація на кожен пропозал пережила масштабування. Але це двоє людей за два місяці без контрольованого порівняння, тож читайте це як чесну форму явища, а не доказ: **доведений внесок інструмента — обсяг без обвалу якості, а не приріст конверсії.**

Одне застереження покладу тут, а не закопаю: я веду облік конектів, витрачених на кожен пропозал, тож ми бачимо вартість ліда й клієнта. Але я **ще не** включаю в це вартість API ІІ, тож наш справжній CAC неповний. Докладніше — в «Обмеженнях».

## Стек і архітектура

Чистий JavaScript (ES2020+), без фреймворку, без білд-кроку, без тестів. Chrome Extension Manifest V3. **~10 500 рядків у 18 файлах.**

Три рантайм-контексти:
- **Контент-скрипт сторінки джоби** — пайплайн генерації пропозалу (UI сайдбару, оркестрація моделей, цикл валідатор/ретрай, пайплайн опенера).
- **Контент-скрипт сторінки пошуку** — сканер видачі: стейт-машина на кожну картку з MutationObserver, який чекає, поки деталі джоби справді дорендеряться, перш ніж витягати дані, зі скасовуваними ретраями.
- **Service worker** — алярм синхронізації раз на 15 хвилин і ручний тригер синку.

**Три тіри моделей Gemini, за роллю й вартістю:** Pro-модель для листа й відповідей на скринінг-питання, Flash для опенера й суддівства, Flash-Lite для аналізу й скорингу. Дешевші моделі роблять дешеву роботу; дорога зарезервована під фінальний лист. Цей поділ — рішення про економію (див. нижче).

**Зберігання й синк:** `chrome.storage.local` для всього локального, плюс веб-застосунок на Google Apps Script, що синхронізує дані обліку в спільний Google Sheet — обраний навмисно як база даних на двох, що водночас є поверхнею для аналітики.

Архітектурно приблизно третина кодової бази (рушій скорингу, білдери промптів опенера, дані портфоліо) — це чиста логіка без залежності від DOM, яка перенеслася б деінде; інші дві третини прив'язані до DOM платформи й до API розширень Chrome.

## Як це будувалося

**Ownership — моє.** Кожне функціональне рішення було моїм. Я транслював те, що роблю руками, в автоматизацію: правила скорингу й сигнали, що мають значення, стратегію опенера з трьох кутів, рішення тримати кожен пропозал прив'язаним до шаблону, що відстежувати, і вибір використати Google Sheet як спільну базу — для легкого синку на двох і для аналітики, що дозволяє нам тестувати й покращувати.

**Collaboration — ІІ.** Технічна реалізація була за ІІ, як завжди в мене. Дві чесні деталі: логіка витягання зі сторінки пройшла кілька ітерацій, і один модуль довелося обходити, бо він мовчки не завантажувався в деяких конфігураціях. І те, й те — це AI-дебаг у відповідь на проблеми, які *я бачив у виводі*: я флагав «у пропозалах ось це не так», а ІІ знаходив і виправляв причину. Я не знаю, чому саме ці виправлення були потрібні на рівні коду, і не приписую їх собі. Мій бік — це продукт і судження; бік ІІ — змусити це працювати.

**Витрачений час.** Приблизно 2–3 місяці спокійної, не щоденної розробки.

## Чого я навчився

- **Якщо щось парситься — зберігай це, навіть коли ще не знаєш навіщо.** Краще мати дані й не знати, що з ними робити, ніж знати що робити й не мати даних. Половина причини, чому ми взагалі можемо аналізувати воронку сьогодні — це що я зберігав усе з самого початку, ще до того, як у мене з'явилося питання до цих даних.
- **Вивід надійний рівно настільки, наскільки надійні запобіжники навколо нього.** Модель, що пише пропозал, ніколи не була складною частиною; складним був шар валідації, що ловить її галюцинації, перш ніж вони дійдуть до клієнта. Той самий урок, що й кодування регуляторної логіки руками в моєму клінічному інструменті — обгортай модель там, де їй не можна довіряти.

## Обмеження

Вони реальні, і їх варто назвати прямо:

- **Короткі описи джоб провокують галюцинації.** Коли опис надто худий, чернетка починає вигадувати, щоб заповнити простір. Я це ще не вирішив.
- **Немає нормального A/B-трекінгу.** Я ганяю теорії — правки промптів, зміни шаблонів — але справжньої системи експериментів немає. Секція результативності шаблонів — це перший натяк на неї, а не вона сама. Досі будую.
- **CAC неповний.** Я веду облік конектів на пропозал (реальна вартість ліда й клієнта), але ще не включаю вартість API ІІ, що впливає на справжній CAC. У планах.
- **API-ключ захардкоджений.** Свідомий компроміс: це робилося під мене й одного колегу, ніколи не під публічну установку. Для будь-якого публічного використання ключ не сидів би в клієнті. Називаю це, щоб вибір не сприйняли за недогляд.
- **Воно пришите до DOM стороннього сайту, тож крихке за природою.** Коли платформа змінює свою сторінку, частини ламаються й потребують латання. Це структурне для такого типу інструментів, а не баг, який я можу закрити.
- **Синк працює за принципом last-write-wins.** Якщо ми вдвох редагуємо один запис між синками, один мовчки перезаписує іншого. Нормально для двох; для більшої кількості — ні.

## Наступні кроки

- Справжня система A/B-трекінгу для шаблонів пропозалів і промптів, щоб покращення вимірювалися, а не припускалися.
- Включити вартість ІІ в CAC, для чесної юніт-економіки на кожен лід.
