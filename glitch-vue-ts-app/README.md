## 1. Projekt generálása Vite-tel

```bash
npm create vite@latest glitch-vue-ts-app -- --template vue-ts
```

## 2. Tailwindcss HELYES telepítése

```bash
npm install tailwindcss @tailwindcss/vite
```

## 3. vite.config.ts config
```bash
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

## 4. style.css config
```bash
@import "tailwindcss";
```

## 5. index.html
```bash
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/src/style.css" rel="stylesheet">
    <title>glitch-vue-ts-app</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```