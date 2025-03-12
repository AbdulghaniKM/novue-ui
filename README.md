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
  <div class="flex flex-col gap-4">
      <Button label="Primary 8" variant="solid" startIcon="mdi:check" />
      <Button
        label="Loading Button"
        variant="soft"
        loading
        loadingLabel="please..."
        shape="rounded"
      />
      <Button label="Outline Button" variant="outline" />
      <Button label="Gradient Button" variant="gradient" />
      <Button startIcon="mdi:heart" variant="soft" iconOnly size="lg" />
      <Button label="Settings" shape="pill" endIcon="mdi:cog" variant="ghost" />
    </div>
</template>
<script setup>
import Button from './components/ui/button.vue'
</script>
```

More components coming soon!

## License

MIT License
