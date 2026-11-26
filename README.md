# Fable Short Drama

An independent short-drama streaming prototype built with Vite, React and TypeScript. The interface is internationalized for English, Simplified Chinese, Traditional Chinese, Spanish, and Brazilian Portuguese.

## Run locally

```powershell
cd D:\mycodexprj\short-drama
npm install
npm run dev
```

Open `http://localhost:5174`. The first screen is the account gate. Create an account with an email address and a password of at least eight characters, then browse the catalogue, filter by genre, search, save stories, open episode details, preview an episode, and open the membership screen. The language selector is available on the account screen and in the signed-in navigation. The selected language is saved locally and browser language detection is used on first visit. Account, library and membership preview state are stored in this browser only.

## Project structure

- `index.html` sets page metadata and loads the React entry point.
- `src/main.tsx` mounts the application.
- `src/vite-env.d.ts` provides Vite client and asset type declarations.
- `src/App.tsx` contains the account gate, catalogue, search, library, story details, preview player and membership checkout UI.
- `src/dramas.ts` contains the demo series catalogue and poster references.
- `src/i18n.ts` contains locale detection, translated interface copy, translated genre labels, and localized drama metadata.
- `src/styles.css` defines the responsive visual system.

The membership screen is a checkout preview. It does not collect payment or create a real subscription. Account, saved stories, and membership status are demo data in `localStorage`. Connect an authentication service, licensed episode media, a backend catalogue, and a payment provider before launch.

## Supported locales

- `en` English
- `zh-CN` 简体中文
- `zh-TW` 繁體中文
- `es` Español
- `pt-BR` Português (Brasil)

## Build and preview

```powershell
npm run build
npm run preview
```

The production build is emitted to `dist/`, which is ignored by Git.
