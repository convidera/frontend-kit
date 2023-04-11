# Form validator

## Usage example

Please refer to [App.vue](./src/App.vue) for usage example

## Translation

#### Important
When adding new translations, make sure to also adjust `src/form-validator/translation/schema.ts`
file as it porvides `typescript` support

The package provides `en` and `de` translations which could be used to extend `vue-i18n`
translations:
```javascript
// English translation file
import {
  en as formValidation,
} from '@convidera-team/vrt-form-validator';

export default {
  // other translations
  ...formValidation,
}
```

Then in component it could be used like this:
```html
<template>
  {{ $t('formValidation.messages.required') }}
</template>
```
