# StudioVerse — Style Guide

Все токены живут в [`app/components/ui.js`](../app/components/ui.js) — это единственный источник правды. Никаких CSS-in-JS библиотек, только inline-стили из объектов `B` (цвета/токены) и `S` (стили).

---

## 1. Философия

- **Воздушность.** Прозрачные пилюли, blur-overlay, мягкие тени вместо жирных границ.
- **Никакой палитры скрипта.** Цвета, шрифты, радиусы — только через `B.*`. Hex-коды в новом коде = code smell.
- **Inline styles only.** Tailwind, CSS modules, styled-components — отсутствуют намеренно.
- **Reuse > rebuild.** Если нужен модал/тост/фейд — берётся существующий компонент из `ui.js`. Новые overlay-инфраструктуры не плодим.

---

## 2. Палитра

### Бренд
| Токен | Hex | Где живёт |
|---|---|---|
| `B.primary` | `#0066ff` | Основные действия, иконки, фокус |
| `B.primaryHover` | `#0084ff` | Hover на primary |
| `B.accent` | `#2242F8` | Акцентный градиент в hero |
| `B.soft` | `#F0F2FF` | Фон чипов, status-icon, info-блоков |
| `B.pillBg` | `#CAD2FF` | Бордеры soft-блоков, активные пилюли |

### Текст
| Токен | Hex | Где |
|---|---|---|
| `B.text` | `#181818` | Body + заголовки |
| `B.textMuted` | `#6b7294` | Подзаголовки, метки полей |
| `B.textLight` | `#9ba3c7` | Подсказки, table headers |

### Состояния
| Токен | Hex | Использование |
|---|---|---|
| `B.green` / `B.greenBg` / `B.greenBorder` | `#16a34a` / `#ecfdf5` / `#bbf7d0` | Success, accepted, paid |
| `B.red` / `B.redBg` / `B.redBorder` | `#e8362c` / `#fef2f2` / `#fecaca` | Errors, rejected, destructive |
| `B.purple` / `B.purpleBg` / `B.purpleBorder` | `#7c3aed` / `#f5f3ff` / `#ddd6fe` | Awaiting decision, info-вторичные |

### Поверхности
| Токен | Значение |
|---|---|
| `B.cardBg` | `#ffffff` |
| `B.cardBorder` | `rgba(34,66,248,0.08)` — едва заметный синий |
| `B.cardShadow` | `0px 4px 24px rgba(0,0,0,0.08)` |
| `B.inputBg` | `#f8f9ff` |
| `B.inputBorder` | `#dde1f5` |

### Фоны страниц
Глобальный градиент `linear-gradient(180deg, #C4CCFD 0%, #E8EBFE 28%, #ffffff 65%)` — лавандовое небо к белой земле. Применяется через `S.app`.

### Акцент-градиент для заголовков
`linear-gradient(135deg, #0066ff 0%, #2242F8 50%, #7c3aed 100%)` через `S.accent` (с `background-clip: text`). Используется на одном слове hero-заголовка, не на всём.

---

## 3. Типография

### Семейства
- **Sora** (`B.fontHeading`) — заголовки, page titles, card titles, score-dot цифры
- **Inter** (`B.fontBody`) — основной текст, кнопки, формы
- **Montserrat** (`B.fontDisplay`) — primary-кнопки. Чуть более плотная, для CTA.

Загружаются в [`app/layout.js`](../app/layout.js) через Google Fonts `<link>`, веса: Sora 400-800, Inter 400-700, Montserrat 500-800.

### Размеры / иерархия
| Роль | Размер | Вес | Семейство | Letter-spacing |
|---|---|---|---|---|
| Hero title | 48 (моб. 34) | 700 | Sora | -0.03em |
| Page title | 32 | 700 | Sora | -0.02em |
| Card title | 22 | 700 | Sora | — |
| Centered title | 28 | 700 | Sora | -0.02em |
| Body | 14-16 | 400-500 | Inter | — |
| Label (form) | 12 | 600 UPPERCASE | Inter | 0.04em |
| Badge | 10 UPPERCASE | 600 | Inter | 0.04em |
| Table header | 10 UPPERCASE | 600 | Inter | 0.06em |
| Fine print | 11 | 400 | Inter | — |

### Правила
- Заголовки **не центруются** на лендингах — left-align в split-grid
- `letter-spacing` отрицательный только для крупных заголовков (>28px)
- UPPERCASE — только мелкий текст (≤12px). Никаких ВСЕ КАПС в body.

---

## 4. Формы и радиусы

| Радиус | Значение | Где |
|---|---|---|
| `B.radius` | **68** | Pill-кнопки, badges, chips, header-pill, action buttons |
| `B.radiusCard` | **24** | Карточки, модалы, table wrapper |
| `B.radiusInput` | **12** | Инпуты, текстарии |
| Hardcoded `16` | 16 | Внутренние блоки (perk card, video box, req box, score-dot squircle) |
| Hardcoded `14` | 14 | Avg-box, status pills внутри карточек |

**Радиус 68 — фирменный знак.** Это намеренно избыточное значение, дающее идеальный pill для любой высоты элемента. Не заменять на `9999` или `999`.

**Аватары и status-icon — `borderRadius: "50%"`**, не 68.

---

## 5. Тени и слои

| Эффект | Использование |
|---|---|
| `0 4px 24px rgba(0,0,0,0.08)` (`B.cardShadow`) | Карточки, table wrapper |
| `0 2px 20px rgba(0,0,0,0.06)` | Header pill |
| `0 2px 12px rgba(0,0,0,0.04)` | Stat cards, crit cards |
| `0 2px 8px rgba(0,0,0,0.04)` | Back button |
| `0 4px 16px rgba(0,102,255,0.3)` | Primary button (синий glow) |
| `0 8px 32px rgba(0,0,0,0.1)` | Toast |
| `0 24px 64px rgba(0,0,0,0.12)` | Confirm modal |

**Backdrop blur:**
- Header pill: `blur(24px)` поверх `rgba(255,255,255,0.82)`
- Modal overlay: `blur(12px)` поверх `rgba(26,26,46,0.55)`

**Z-index:**
- Header: `100`
- Modal: `10000`
- Toast: `100000` (выше модала — важно для подтверждений)

---

## 6. Компоненты

### Кнопки
- **Primary** — `B.primary` фон, белый текст, Montserrat 600, синий glow, padding `14px 28px`, радиус 68
- **Secondary** — белый фон, серый бордер, Inter 500, тот же радиус
- **Action button** (в таблицах) — `rgba(0,102,255,0.06)` фон, маленький, 11px
- **Back button** — белая пилюля с серым бордером, всегда `marginBottom: 24`
- **Verdict buttons** — серый по умолчанию, зелёный/красный в активном состоянии

### Чипы и бейджи
- Все pill-формы → `borderRadius: 68`
- `StatusBadge` — 10px UPPERCASE, цветовая пара (`bg` + `c`) из карты статусов
- `NowHiringBadge` — soft-фон + пульсирующая зелёная точка
- Age-based escalation: applied >10 дней → красный, >3 дней → оранжевый

### Карточки
- Белый фон, `cardBorder`, `radiusCard`, padding `32`, `cardShadow`
- Card title — Sora 22/700, отступ 4 до desc, 24 до контента

### Формы
- Label сверху, 12px UPPERCASE, серая
- Input — `inputBg` фон, `inputBorder`, padding `12px 16px`, радиус 12
- Error — 11px красный, под полем
- Fine print — 11px `textLight`, центр

### Таблицы
- `tableWrap` с радиусом 24 и overflow hidden — закругление крайних углов
- `th` — UPPERCASE 10px, soft фон, светлый текст
- `td` — 14px 16, разделитель `inputBorder`
- Аватар первой колонкой, 34×34, инициалы 13px/700 в soft круге

### Модалы
- **Всегда** через `ModalOverlay` — портал в `<body>`, lock body scroll, backdrop blur
- `align="start"` (по умолчанию) для длинных форм, `align="center"` для подтверждений
- Не строить свои оверлеи

### Toast
- Top-right, fixed, z-index 100000
- 4 типа: `success` (зелёный ✓), `info` (фиолетовый ℹ), `error` (красный ✗), `email` (синий 📧)
- Auto-dismiss через 3.5s, slide-in справа

---

## 7. Иконки и эмодзи

- Эмодзи **OK** в заголовках, чипах, status-icon (📅 🕒 🎬 ⏱ 🎨)
- Эмодзи **запрещены** в кнопках деструктивных действий — только текстовые лейблы ("Delete", "Reject")
- Иконки в FAQ/perk-cards — эмодзи в soft-круге
- В Toast — единственная иконка, размером 16px, левее текста

---

## 8. Лейаут

- **Max-width 1140** для `main` и `headerPill` — широкий, но не растягивается на ультрашироких мониторах
- **Padding 24** по бокам main
- Split-grid `1fr 1fr` с gap 56 → на мобиле (`<800px`) сворачивается в одну колонку, gap 28
- **Sticky header** с прозрачным фоном — pill всплывает поверх контента, blur делает читаемым

---

## 9. Анимации

- **FadeIn** — обёртка для блоков при появлении. `opacity 0 → 1` за 0.45s + `translateY(14px → 0)`. После завершения transform удаляется (важно — иначе ломает dnd-kit portal).
- **Toast** — slide-in справа + opacity, 0.35s ease
- **Hover на кнопках** — никаких scale/lift трансформаций, только смена цвета

---

## 10. Принципы при написании UI

1. **Импортируй `B` и `S` всегда** — даже для одноразового inline стиля. Не пиши `color: "#0066ff"`, пиши `color: B.primary`.
2. **Перед новым компонентом — grep по `ui.js`** на похожий. Скорее всего уже есть.
3. **Сохраняй вертикальный ритм** — отступы 8/12/16/24/32, не произвольные.
4. **Радиус 68 для pill, 24 для card, 12 для input** — других радиусов больше не вводим без причины.
5. **Никаких CSS-классов в новых файлах** — только inline. `globals.css` трогаем только для ping-dot keyframes и подобного.
