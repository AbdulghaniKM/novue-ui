# novue-ui

A Vue.js UI library with Tailwind CSS v4.

## Installation

```bash
npm install novue-ui@0.1.0
npx novue-ui init
```

## Setup

1. Add Tailwind plugin to `vite.config.js`:

```javascript
import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [vue(),tailwindcss()],
};
```

2. Import styles in `main.js` or `main.ts`:

```javascript
import "./styles/tailwind.css";
```

## Available Components

### Button

Install the component:

```bash
npx novue-ui add button
```

Use it in your Vue component:

```vue
<template>
  <NButton variant="primary">Click me</NButton>
</template>
<script setup>
import NButton from './components/ui/button.vue'
</script>
```

More components coming soon!

## License

MIT License
