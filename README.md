# Microfrontend: Character Detail

Microfrontend que renderiza la vista de detalle de un personaje. Es lanzado por `mfe-character-list` a través de la navegación.

## 🚀 Instalación y ejecución

```bash
npm install
npm run dev
```

Para build:

```bash
npm run build
```

## 🏗️ Arquitectura

- React + Redux
- Módulo federado para ser consumido por la main app
- Comunicación por navegación/props desde `mfe-character-list`
- Estilos con TailwindCSS

## 📦 Dependencias destacadas

- `react`, `react-dom`, `react-redux`, `@reduxjs/toolkit`
- `tailwindcss`
- Testing con Jest y Testing Library
- ESLint configurado

## ✅ Testing

```bash
npm run test
```