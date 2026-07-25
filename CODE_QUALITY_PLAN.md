# Code Quality & Maintenance Action Plan

## P0 — Bugs & Safety Net

### 1. Clear the preloader `setTimeout` on unmount
**File:** `src/App.jsx:13-28`

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 2200)

  const mouseMove = e => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }
  window.addEventListener("mousemove", mouseMove)
  return () => {
    clearTimeout(timer)
    window.removeEventListener("mousemove", mouseMove)
  }
}, [])
```

### 2. Enable `react-hooks/exhaustive-deps` in `.oxlintrc.json`
**File:** `.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

### 3. Enable 10–15 more oxlint rules
**File:** `.oxlintrc.json`

Add rules for:
- `no-unused-vars` — catch dead code
- `no-console` — prevent debug leakage
- `no-undef` — catch undefined variable usage
- `eqeqeq` — enforce strict equality
- `no-duplicate-imports` — clean imports
- `react/no-unknown-property` — catch invalid JSX attrs
- `react/jsx-no-target-blank` — security for external links
- `react/no-array-index-key` — key stability
- `react/self-closing-comp` — consistent JSX style

---

## P1 — Architecture

### 4. Split `App.jsx` into separate components
Create `src/components/` directory with one file per section:

| Component | Source lines | File |
|-----------|-------------|------|
| Preloader | `App.jsx:72-88` | `src/components/Preloader.jsx` |
| Navbar | `App.jsx:98-113` | `src/components/Navbar.jsx` |
| Hero | `App.jsx:116-165` | `src/components/Hero.jsx` |
| Marquee | `App.jsx:168-177` | `src/components/Marquee.jsx` |
| Leadership | `App.jsx:180-219` | `src/components/Leadership.jsx` |
| Academics | `App.jsx:222-284` | `src/components/Academics.jsx` |
| Gallery | `App.jsx:287-330` | `src/components/Gallery.jsx` |
| NoticeBoard | `App.jsx:333-355` | `src/components/NoticeBoard.jsx` |
| Admissions | `App.jsx:358-372` | `src/components/Admissions.jsx` |
| Footer | `App.jsx:375-410` | `src/components/Footer.jsx` |
| CustomCursor | `App.jsx:64-69` | `src/components/CustomCursor.jsx` |

Each component receives only the props it needs (e.g., `textEnter`, `textLeave` callbacks from a custom cursor hook).

### 5. Split `App.css` into per-component CSS files
Each component gets a co-located CSS file:
- `src/components/Preloader.css`
- `src/components/Navbar.css`
- `src/components/Hero.css`
- `src/components/Marquee.css`
- `src/components/Leadership.css`
- `src/components/Academics.css`
- `src/components/Gallery.css`
- `src/components/NoticeBoard.css`
- `src/components/Admissions.css`
- `src/components/Footer.css`
- `src/components/CustomCursor.css`

Keep only truly global styles in `App.css` / `index.css` (CSS custom properties, resets).

---

## P2 — Defensive Coding

### 6. Add PropTypes to all components
Install `prop-types` and add `PropTypes` declarations for every component's props. This provides runtime type checking without a TypeScript migration.

### 7. Add smoke/render tests
Install Vitest + React Testing Library (`@testing-library/react`, `jsdom`).

Add `test` script to `package.json`:
```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest"
}
```

Write tests covering:
- Each section renders without crashing
- Preloader shows on mount and disappears after animation
- Cursor variant switches on hover events
- Scroll-based transforms produce correct output ranges

---

## P3 — Process & Automation

### 8. Add GitHub Actions CI
Create `.github/workflows/ci.yml`:
```yaml
name: CI
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

### 9. Configure Prettier
Create `.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

Add format script to `package.json`:
```json
"scripts": {
  "format": "prettier --write src/"
}
```

### 10. Add Husky + lint-staged
Install `husky` and `lint-staged`. Configure `lint-staged` in `package.json`:
```json
"lint-staged": {
  "*.{js,jsx}": ["oxlint", "prettier --write"],
  "*.css": ["prettier --write"]
}
```

Runs lint + format on staged files before every commit.

---

## P4 — Polish

### 11. Extract hardcoded content into data constants
Create `src/data/content.js`:
```js
export const NAV_LINKS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Academics', href: '#academics' },
  { label: 'News', href: '#news' },
  { label: 'Community', href: '#community' },
]

export const HERO = {
  tagline: { founded: 'Est. 1990', location: 'New Delhi, India' },
  title: ['Value.', 'Vision.', 'Vigour.'],
  description: 'Encouraging students to push the boundaries...',
}

export const GALLERY_IMAGES = [
  { src: 'https://static.vasantvalley.org/.../laissez_faire_2026_4-1.jpeg', alt: 'Students at Laissez Faire 2026 event' },
  // ...
]
```

### 12. Fix accessibility
- Show native cursor when `@media (hover: none)` or `@media (pointer: coarse)` — touch devices
- Add `aria-label` to nav links, social links
- Add keyboard event handlers (`onKeyDown` for Enter/Space) to cursor-aware elements
- Improve `alt` text descriptiveness (e.g., "Students at Laissez Faire 2026 event" not "Campus 1")

### 13. Add `.env` config
Create `.env` (and `.env.example`):
```
VITE_IMAGE_BASE_URL=https://static.vasantvalley.org/wp-content/uploads
VITE_PRELOADER_DURATION=2200
VITE_ANIMATION_DURATION=1
```

Use with `import.meta.env.VITE_*` in components.

---

## Execution Order

```
Phase 1 (30 min):  P0 items (#1, #2, #3)
Phase 2 (2-3 hrs): P1 items (#4, #5) — biggest maintenance win
Phase 3 (1 hr):    P2 items (#6, #7)
Phase 4 (1 hr):    P3 items (#8, #9, #10)
Phase 5 (2 hrs):   P4 items (#11, #12, #13)
```
