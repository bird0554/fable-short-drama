# Fable Short Drama

[English](README.md) | [简体中文](README.zh-CN.md)

An independent short-drama streaming interface prototype built with Vite, React, and TypeScript. It includes a demo account gate, a searchable catalogue, a saved-story library, episode details, a player preview, and a membership preview. The interface supports English, Simplified Chinese, Traditional Chinese, Spanish, and Brazilian Portuguese. Compact navigation, metadata, and control text uses a 1.1x readability scale with a 10px minimum.

This repository is a frontend application. It does not include a backend API, database, real authentication, video delivery, or payment processing.

## Run locally

Use Node.js 22.12 or later and npm, compatible with the Vite version in `package-lock.json`. Run the following commands from this repository's root directory:

```powershell
npm ci
npm run dev
```

Open [http://localhost:5174](http://localhost:5174). The development script binds to `0.0.0.0` and requests port `5174`; use the address printed by Vite if that port is already occupied. No `.env` file or API credentials are required for this prototype.

The page loads poster images from Unsplash and fonts from Google Fonts. Those assets require network access.

## Use the prototype

1. Choose a language on the initial account screen. Enter a demo email address and a password with at least eight characters to continue. Both sign-up and sign-in perform local format checks only; they do not verify an existing account or password. The application stores the email locally and does not persist the password.
2. Browse the featured story and catalogue. Search by title, genre, or tags, and use the genre filters to narrow the list.
3. Select the bookmark button to save or remove a story. Open **My library** to see saved stories.
4. Open a story to view its description and six sample episode buttons. The first three open the player preview; later episodes open the membership screen unless demo membership is enabled. Hover over a catalogue poster, or focus it with the keyboard, to play a muted looping preview. Moving away pauses and resets the preview. If the remote preview video cannot load, the poster remains visible.
5. Open **Fable Plus** to compare free access with VIP access, choose a monthly or annual plan, select Visa, Mastercard, WeChat Pay, or Alipay, and create a local demo order. Free accounts can watch the first three episodes of each series, while the VIP preview unlocks the full sample episode list. No payment is collected and no subscription is created.
6. Change the language using the account screen or the signed-in navigation. The top-bar language menu keeps enough width to show its options. Sign out using the sidebar button to return to the account screen.

The **Popular** button currently displays a notification; it does not change the catalogue order. Episode counts, ratings, and membership prices are demonstration data.

## Project structure

- `index.html` sets page metadata and loads the React entry point.
- `package.json` defines dependencies and the development, build, and preview commands; `package-lock.json` records resolved dependency versions.
- `vite.config.ts` enables the React plugin; `tsconfig.json` defines TypeScript compiler options.
- `src/main.tsx` mounts the application.
- `src/vite-env.d.ts` provides Vite client and asset type declarations.
- `src/App.tsx` contains the account gate, catalogue, search, library, story details, hover preview player and membership checkout UI.
- `src/dramas.ts` contains the demo series catalogue, poster references, and optional hover preview video URLs.
- `src/i18n.ts` contains locale detection, translated interface copy, translated genre labels, and localized drama metadata.
- `src/vipApi.ts` contains the local VIP registration and payment adapter contract for Visa, Mastercard, WeChat Pay, and Alipay.
- `src/styles.css` defines the responsive visual system.
- `.gitignore` excludes dependencies, generated build output, and the Vite cache.
- `README.md` and `README.zh-CN.md` provide the English and Chinese documentation.

## Configuration and local data

Edit `src/dramas.ts` to update the demo catalogue and poster references. Update `src/i18n.ts` for translations and localized metadata, and `src/styles.css` for appearance. Development and preview host/port options are defined in the scripts in `package.json`.

The application uses the following browser `localStorage` keys:

| Key | Stored value |
| --- | --- |
| `fable-demo-user` | Demo email used for the current account display |
| `fable-demo-saved` | Saved story IDs |
| `fable-demo-member` | Whether membership preview is enabled |
| `fable-demo-locale` | Selected language |
| `fable-demo-vip-orders` | Local demo VIP orders created in the checkout dialog |

These values are scoped to the browser origin, rather than individual accounts. Sign-out removes the demo email only; it preserves saved stories, membership preview, and language. Different ports use separate storage. Clearing this site's storage resets the demo state. There is no server synchronization or per-user data isolation.

## Supported locales

- `en` English
- `zh-CN` 简体中文
- `zh-TW` 繁體中文
- `es` Español
- `pt-BR` Português (Brasil)

The saved language takes precedence. On a first visit, browser language detection chooses a supported locale, with English as the fallback.

## Build and preview

From the repository root:

```powershell
npm run build
npm run preview
```

The build command runs TypeScript checking and generates static assets in `dist/`, which is ignored by Git. The preview script binds to `0.0.0.0` and requests port `4174`; open [http://localhost:4174](http://localhost:4174), or the address printed by Vite. `vite preview` is for checking the generated build locally; deploy `dist/` to a static hosting service for a hosted demonstration.

## Before production use

Connect an authentication service, a backend catalogue and database, licensed episode media, and a payment provider. Replace the local functions in `src/vipApi.ts` with server calls for VIP registration, order creation, and payment confirmation. Add server-side authorization and per-user persistence for subscriptions and saved stories. The current account gate, membership flag, and order adapter do not enforce access control or collect real payments. Terms and privacy buttons show a notice; publish the actual legal documents before launch.
