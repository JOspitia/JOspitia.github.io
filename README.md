# JOspitia.github.io

Portfolio personal bilingüe (ES/EN) de Johan Ospitia, publicado en GitHub Pages en [jospitia.github.io](https://jospitia.github.io).

## Stack

- **React 18** con TypeScript estricto (`strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`).
- **Vite 5** como bundler y dev server.
- **Tailwind CSS 3** con paleta custom (neutros `ink-*` + acento azul `accent-*`).
- **react-i18next** para internacionalización (ES/EN), con persistencia en `localStorage`.
- **GitHub Actions** para CI/CD a GitHub Pages (`actions/deploy-pages@v2`).
- Tipografía: Inter (Google Fonts).

## Estructura del proyecto

```
JOspitia.github.io/
├── .github/workflows/deploy.yml    # CI/CD a GitHub Pages
├── public/
│   ├── .nojekyll                   # No procesar con Jekyll
│   ├── 404.html                    # SPA fallback
│   └── favicon.svg                 # Placeholder reemplazable
├── src/
│   ├── components/                 # Componentes presentational (Button, Card, Header, …)
│   ├── sections/                   # Secciones del one-page (Hero, About, Skills, …)
│   ├── data/                       # Data sources tipadas (profile, projects, skills)
│   ├── hooks/                      # Hooks custom (useActiveSection, useHtmlLangSync)
│   ├── i18n/                       # Configuración i18n + locales ES/EN
│   ├── types/                      # Tipos compartidos (Project, Skill, SocialLink)
│   ├── App.tsx                     # Composición principal
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Tailwind directives + scroll-behavior smooth
├── index.html                      # Meta tags SEO + Inter preload
├── tailwind.config.js              # Paleta custom + fontFamily Inter
├── tsconfig.json                   # Strict mode + project references
├── vite.config.ts                  # base: '/' + plugin React
└── package.json
```

## Desarrollo local

Requisitos: Node.js 20+ y npm.

```bash
# Instalar dependencias
npm install

# Levantar el dev server (http://localhost:5173)
npm run dev

# Typecheck (sin generar output)
npx tsc --noEmit

# Build de producción (genera dist/)
npm run build

# Preview del build de producción
npm run preview
```

## Deploy

El deploy es automático vía GitHub Actions en cada push a `main`. El workflow hace typecheck, build, y publica el resultado en GitHub Pages.

### Setup inicial (una sola vez)

1. Ir a **Settings → Pages** del repositorio.
2. En **Source**, cambiar de "Deploy from a branch" a **"GitHub Actions"**.
3. Guardar.

Sin este toggle, el workflow `Deploy to GitHub Pages` falla porque Pages está en modo legacy. El toggle se hace una sola vez por repositorio.

### Flujo normal

```bash
git checkout main
git pull
git checkout -b feat/mi-cambio
# ... hacer cambios ...
git add .
git commit -m "feat: descripción del cambio"
git push -u origin feat/mi-cambio
# Abrir PR en GitHub
# Después del merge a main, el workflow publica automáticamente
```

El sitio se actualiza en [jospitia.github.io](https://jospitia.github.io) ~30 segundos después del merge.

## Internacionalización

- Locales en `src/i18n/locales/{en,es}.json`.
- Idioma por defecto: inglés.
- El selector en el header persiste la elección en `localStorage` bajo la key `i18nextLng`.
- El atributo `<html lang>` se actualiza automáticamente al cambiar idioma.
- Para agregar un nuevo idioma: crear el JSON correspondiente en `src/i18n/locales/`, agregar el código al type union `SupportedLanguage` en `src/i18n/index.ts`, y agregar el botón en `LanguageSwitcher.tsx`.

## Personalización

- **Contenido**: editar `src/i18n/locales/{en,es}.json` (copy) y `src/data/{profile,projects,skills}.ts` (datos).
- **Paleta**: `tailwind.config.js` → `theme.extend.colors` (`accent-*` para el color principal, `ink-*` para neutros).
- **Tipografía**: cambiar `theme.extend.fontFamily.sans` en `tailwind.config.js` y el `<link>` de Google Fonts en `index.html`.
- **Favicon**: reemplazar `public/favicon.svg`.

## Verificación manual

Después de cada cambio importante, verificar:

- [ ] El sitio carga en `https://jospitia.github.io` sin errores.
- [ ] Toggle ES/EN cambia todo el copy y persiste al recargar.
- [ ] Navegación interna (anchor links + scroll suave) funciona.
- [ ] Botón "Back to top" aparece al scrollear > 600px.
- [ ] Lighthouse (Performance, Accessibility, Best Practices, SEO) ≥ 90.
- [ ] Sin errores en DevTools console.
- [ ] Sin 404s en DevTools Network (excepto el 404.html inicial al primer deploy).
- [ ] Responsive en 375×667 (iPhone SE), 768×1024 (iPad), 1440×900 (desktop).

## Licencia

MIT — ver [LICENSE](LICENSE) si está presente, o agregar si querés.