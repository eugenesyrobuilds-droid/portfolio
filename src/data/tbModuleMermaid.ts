export type DiagramOption = {
  id: string;
  label: { en: string; uk: string };
  description: { en: string; uk: string };
  code: string;
};

const useCase = `flowchart LR
    Doctor((👨‍⚕️<br/>Лікар))
    Nurse((👩‍⚕️<br/>Медсестра))
    Patient((🧑<br/>Пацієнт))
    Admin((⚙️<br/>Адміністратор))
    MIS((🏥<br/>МІС))
    Cron((⏰<br/>Планувальник))
    MailRcpt((📧<br/>Отримувач<br/>дайджесту))

    subgraph SYS["<b>Модуль управління ТБ</b>"]
        direction TB
        UC1([Увійти за PIN])
        UC2([Переглянути дашборд<br/>з ключовими лічильниками])
        UC3([Шукати та фільтрувати<br/>пацієнтів])
        UC4([Редагувати картку пацієнта])
        UC5([Заповнити анкету<br/>ВООЗ 4-симптом])
        UC6([Сформувати направлення<br/>до фтизіатра / на R-ОГК])
        UC7([Зафіксувати вакцинацію АДП-М])
        UC8([Зафіксувати відмову з фото])
        UC9([Запустити синхронізацію з МІС])
        UC10([Переглянути якісні індикатори])
        UC11([Експортувати реєстр у XLSX])
        UC12([Експортувати звіт])
        UC13([Імпортувати декларантів])
        UC14([Імпортувати історичні дані])
        UC15([Вести каталог наказів МОЗ])
        UC16([Керувати дозволами на синхро])
        UC17([Отримати тижневий дайджест])
        UC18([Запустити тижневий дайджест])
        UC19([Постачати декларантів,<br/>діагнози, R-ОГК])
    end

    Doctor --- UC1
    Doctor --- UC2
    Doctor --- UC3
    Doctor --- UC4
    Doctor --- UC5
    Doctor --- UC6
    Doctor --- UC7
    Doctor --- UC8
    Doctor --- UC9
    Doctor --- UC10
    Doctor --- UC11
    Doctor --- UC12
    Doctor --- UC13
    Doctor --- UC14
    Doctor --- UC15

    Nurse --- UC1
    Nurse --- UC5
    Nurse --- UC7
    Nurse --- UC8

    Patient --- UC5

    Admin --- UC16

    MIS --- UC19
    Cron --- UC18
    MailRcpt --- UC17

    UC9 -.->|«include»| UC19
    UC13 -.->|«include»| UC19
    UC5 -.->|«extend»<br/>при high-risk| UC6
    UC18 -.->|«trigger»| UC17

    classDef actor fill:#dbeafe,stroke:#1e40af,color:#000
    classDef uc fill:#fff,stroke:#64748b,color:#000

    class Doctor,Nurse,Patient,Admin,MIS,Cron,MailRcpt actor
    class UC1,UC2,UC3,UC4,UC5,UC6,UC7,UC8,UC9,UC10,UC11,UC12,UC13,UC14,UC15,UC16,UC17,UC18,UC19 uc
`;

const patientLifecycle = `stateDiagram-v2
    [*] --> Deklarant: реєстрація з вигрузки МІС

    state "Декларант" as Deklarant
    state "Скринований" as Screened
    state "В групі ризику" as AtRisk
    state "На обстеженні" as Testing
    state "Виявлений ТБ" as Detected
    state "На лікуванні" as Treatment
    state "Завершив лікування" as Recovered
    state "Архівний" as Archived

    Deklarant --> Screened: заповнена анкета<br/>ВООЗ 4-симптом
    Deklarant --> AtRisk: МІС-діагноз<br/>(діабет, ВІЛ, онко, ХОЗЛ…)
    Deklarant --> AtRisk: ручне додавання до контактних

    Screened --> Deklarant: низький ризик +<br/>повторний скринінг<br/>через 12 міс
    Screened --> AtRisk: позитивні симптоми<br/>або соц.фактори
    Screened --> Testing: потрібне направлення

    AtRisk --> Testing: призначене дообстеження
    AtRisk --> Deklarant: всі фактори ризику зняті

    Testing --> Detected: позитивний результат<br/>(R-ОГК + мокрота / IGRA)
    Testing --> AtRisk: норма, але ризик зберігається
    Testing --> Deklarant: норма, ризику немає

    Detected --> Treatment: розпочато курс<br/>(вирішує фтизіатр)

    Treatment --> Recovered: курс завершено

    Recovered --> Deklarant: 2 роки нагляду<br/>без рецидиву

    Deklarant --> Archived: помер / переїхав /<br/>припинив декларацію
    Archived --> [*]

    note right of Archived
        У стан «Архівний» переходять
        ЛЮБОГО з активних статусів
        (стрілки спрощено, щоб
        не захаращувати діаграму).
    end note

    note right of Detected
        Виявлений ТБ автоматично НЕ
        повертається до «Декларанта»
        навіть якщо симптоми зникли —
        тільки через «Завершив лікування»
        + 2 роки нагляду.
    end note
`;

const bpmnScreening = `flowchart TB
    subgraph Patient["🧑 ПАЦІЄНТ"]
        P1([Прийшов на прийом<br/>або диспансеризацію])
        P2([Здає R-ОГК / мокроту<br/>у направленому закладі])
        P3([Йде до фтизіатра<br/>з друкованим направленням])
        P4([Отримує результат<br/>дообстеження])
    end

    subgraph Nurse["👩‍⚕️ МЕДСЕСТРА"]
        N1[Перевіряє наявність<br/>пацієнта в реєстрі ТБ]
        N2[Заповнює анкету<br/>ВООЗ 4-симптом]
        N3{Результат<br/>анкети?}
        N4[Перевіряє статус АДП-М]
        N5{АДП-М<br/>прострочена?}
        N6[Робить ін'єкцію АДП-М<br/>або фіксує відмову з фото]
        N7[Завантажує результат<br/>R-ОГК у МІС]
    end

    subgraph Doctor["👨‍⚕️ ЛІКАР"]
        D1[Переглядає картку<br/>в реєстрі ТБ]
        D2{Підстава для<br/>направлення?}
        D3[Друкує направлення<br/>на R-ОГК]
        D4[Друкує направлення<br/>до фтизіатра]
        D5[Заносить контактних<br/>у реєстр]
        D6[Закриває випадок —<br/>повторний скринінг<br/>через 12 міс]
    end

    subgraph MIS["🏥 МІС (зовнішня система)"]
        M1[(Зберігає R-ОГК,<br/>діагнози, направлення;<br/>модуль отримує дані<br/>через розширення)]
    end

    subgraph Phthi["🩺 ФТИЗІАТР"]
        F1[Приймає направлення]
        F2{Діагноз<br/>підтверджено?}
        F3[Призначає курс<br/>лікування]
        F4[Видає висновок:<br/>ТБ не виявлено]
    end

    P1 --> N1
    N1 --> N2
    N2 --> N3
    N3 -- "Низький ризик" --> N4
    N3 -- "Потрібна R-ОГК" --> D3
    N3 -- "Потрібне направлення<br/>до фтизіатра" --> D4

    N4 --> N5
    N5 -- "Так" --> N6
    N5 -- "Ні" --> D6
    N6 --> D6

    D3 --> P2
    P2 --> M1
    M1 --> N7
    N7 --> D1
    D1 --> D2
    D2 -- "Так" --> D4
    D2 -- "Ні" --> D6

    D4 --> P3
    P3 --> F1
    F1 --> F2
    F2 -- "Так" --> F3
    F2 -- "Ні" --> F4
    F3 --> P4
    F4 --> P4
    F2 --> D5

    classDef start fill:#d1fae5,stroke:#065f46,color:#000
    classDef decision fill:#fef3c7,stroke:#92400e,color:#000
    classDef external fill:#fde68a,stroke:#92400e,color:#000

    class N3,N5,D2,F2 decision
    class M1 external
    class P1 start
`;

const decisionTree = `flowchart TD
    Start([Заповнена анкета<br/>ВООЗ 4-симптом])

    Q1{Хоча б 1 з 4 симптомів?<br/>• Кашель ≥ 3 тиж<br/>• Лихоманка ≥ 3 тиж<br/>• Нічна пітливість<br/>• Втрата ваги}
    Q2{Контакт з хворим<br/>на активний ТБ<br/>протягом останніх 6 міс?}
    Q3{Позитивний скринінговий<br/>тест в анамнезі?<br/>(туберкулінова проба / IGRA)}
    Q4{R-ОГК зроблено<br/>за останні 12 місяців?}

    R_low(["🟢 <b>Низький ризик</b><br/>Повторний скринінг через 12 міс.<br/>Направлення не потрібне."])
    R_xray(["🟡 <b>Потрібна R-ОГК</b><br/>Друк направлення на флюоро.<br/>Результат — у МІС."])
    R_referral(["🔴 <b>Потрібне направлення<br/>до фтизіатра</b><br/>Друк направлення.<br/>Пацієнт іде з паперовим бланком."])

    Start --> Q1
    Q1 -- "Так" --> R_referral
    Q1 -- "Ні" --> Q2
    Q2 -- "Так" --> R_referral
    Q2 -- "Ні" --> Q3
    Q3 -- "Так" --> R_referral
    Q3 -- "Ні" --> Q4
    Q4 -- "Так" --> R_low
    Q4 -- "Ні" --> R_xray

    classDef green fill:#d1fae5,stroke:#065f46,color:#000
    classDef yellow fill:#fef3c7,stroke:#92400e,color:#000
    classDef red fill:#fecaca,stroke:#991b1b,color:#000
    classDef question fill:#dbeafe,stroke:#1e40af,color:#000

    class R_low green
    class R_xray yellow
    class R_referral red
    class Q1,Q2,Q3,Q4 question
`;

export const tbDiagrams: DiagramOption[] = [
  {
    id: "use-case",
    label: { en: "Use cases", uk: "Use cases" },
    description: {
      en: "Actors × scenarios. A one-page scope contract used with stakeholders during requirements.",
      uk: "Актори × сценарії. Скоуп-контракт на одну сторінку для роботи зі stakeholders на етапі вимог.",
    },
    code: useCase,
  },
  {
    id: "patient-lifecycle",
    label: { en: "Patient lifecycle", uk: "Життєвий цикл пацієнта" },
    description: {
      en: "Patient in business terms, without table/field names. Anchor for status conversations with the doctor and the regional epidemiologist.",
      uk: "Пацієнт у бізнес-термінах, без назв таблиць і полів. Анкор для розмов про статуси з лікарем та епідеміологом НСЗУ.",
    },
    code: patientLifecycle,
  },
  {
    id: "bpmn-screening",
    label: { en: "End-to-end screening (BPMN)", uk: "Скринінг end-to-end (BPMN)" },
    description: {
      en: "The main clinical workflow: from the first contact with the patient to closing the case. Swimlanes are roles, diamonds are decisions, rectangles are steps.",
      uk: "Головний клінічний workflow продукту: від першого контакту з пацієнтом до закриття випадку. Swimlanes — ролі, ромби — рішення, прямокутники — кроки.",
    },
    code: bpmnScreening,
  },
  {
    id: "who-decision-tree",
    label: { en: "WHO 4-symptom decision tree", uk: "Дерево рішень ВООЗ-4" },
    description: {
      en: "Pure clinical logic “symptoms + history → recommendation”. A separate artifact aligned with the TB specialist.",
      uk: "Чисто клінічна логіка «симптоми + анамнез → рекомендація». Окремий артефакт для узгодження з лікарем-фтизіатром.",
    },
    code: decisionTree,
  },
];
