1.
Terminálban futtasd ezt a parancsot:

```bash
npm create vite@latest glitch-vue-app -- --template vue
```

Ez létrehozza a `glitch-vue-app` mappában a Vue 3 projektet Vite build rendszerrel, SFC komponensekkel.

```
glitch-vue-app/
├── index.html
├── package.json
├── src/
│   ├── main.js
│   ├── App.vue
│   └── components/
│       └── GlitchText.vue
├── vite.config.js
└── node_modules/
```

miutánn mindent is bemásoltunk:
```bash
npm run dev
```