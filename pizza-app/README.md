# Pizza Webshop – Vue 3 + TailwindCSS

Ez a projekt egy egyszerű pizzás weboldal, amely Vue 3-ra és TailwindCSS-re épül.  
A weboldal két fő oldalt tartalmaz:

- Főoldal — üdvözlő szöveg és egy pizza kép
- Pizza Lista — kártyás megjelenítés JSON adat alapján

---

## ⚙️ Telepítés

```bash
npm install
npm run dev
```

---

## 🧱 Projekt létrehozása

1. Hozz létre egy új Vue projektet:

```bash
npm init vue@latest pizza-app
```

2. Lépj be a mappába:

```bash
cd pizza-app
npm install
```

3. Engedélyezd a Vue Routert.

---

## 🎨 TailwindCSS telepítése

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Állítsd be a `tailwind.config.js` fájlt:

```js
content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
]
```

### Cseréld a `src/assets/main.css` fájlt:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🧭 Router beállítása

A projektben két útvonal van:

- `/` → Főoldal
- `/pizzas` → Pizza lista

---

## 🍕 Pizza adatok JSON-ből

A pizzák külön JSON fájlban vannak tárolva (`src/data/pizzas.json`), és a pizza listát ebből töltjük be.

---

## 🖼 Megjelenítés

A pizza oldal 3 elemet tartalmaz minden kártyán:

- kép
- név
- részletek
- három méregomb: **Kicsi – Közepes – Nagy**

---

## 🚀 Indítás

```bash
npm run dev
```

A projekt ezután a böngészőben fut.