# Form validator

## Installation

```sh
yarn add @convidera-team/vue-form-validator
```
or

```sh
npm install @convidera-team/vue-form-validator --save
```

## Basic usage

```vue
<script lang="ts" setup>
import {
  useFormValidator,
  isFormValidatorError,
  isAxiosError,
} from '@convidera-team/vue-form-validator';

const rules = useRules();
const form = useFormValidator();

const name = form.addField('name', '', [
  rules.required('The field is required'),
]);

const email = form.addField('email', '', [
  rules.required('The field is required'),
  rules.email('The field should be email'),
]);

const password = form.addField('password', '', [
  rules.required('The field is required'),
  rules.min(6, 'The field should be min 6 characters'),
]);

const passwordConfirmation = form.addField('password_confirmation', '', [
  rules.required('The field is required'),
  (value) => rules.confirmed(password.value.value, 'The confirmation is incorrect')(value),
]);

async function submit() {
  try {
    // If there are any validation errors, they will be thrown and apiRequest will not be called
    await form.handleSubmit(() => apiRequest({
      name: name.value.value,
      email: email.value.value,
    }));
  } catch (error) {
    if (isFormValidatorError(error)) {
      // Catch form validation errors
      console.warn(error.list);
    } else if (isAxiosError(error)) {
      // Catch axios errors
      console.warn(error.response?.data);
    } else {
      throw error;
    }
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <input
      v-model="name.value.value"
      label="Name"
      :valid="name.valid.value"
      @blur="name.validate()"
    >
    {{ name.errors.value[0] }}

    <input
      v-model="email.value.value"
      label="email"
      :valid="email.valid.value"
      @blur="email.validate()"
    >
    {{ email.errors.value[0] }}

    <input
      v-model="password.value.value"
      label="password"
      type="password"
      :valid="password.valid.value"
      @blur="password.validate()"
    >
    {{ password.errors.value[0] }}

    <input
      v-model="passwordConfirmation.value.value"
      label="passwordConfirmation"
      type="password"
      :valid="passwordConfirmation.valid.value"
      @blur="passwordConfirmation.validate()"
    >
    {{ passwordConfirmation.errors.value[0] }}

    <button
      type="submit"
    >
      submit
    </button>
  </form>
</template>
```

When you do `form.addField('name', initialValue, [list of rules])` you give the field a name,
initial value and list of validation rules. The name is used to identify the field in the form. For
example in case of api error you want to show the error specified in error response for the field.
if `apiRequest` in `await form.handleSubmit(() => apiRequest());` fails due to api validation
errors, the errors returned by api will be mapped to the fields in the form using the name
specified during `form.addField('fieldName')`. So make sure to name fields in the same way as they
are named in the api response.

You can run `yarn dev` to see basic usage in browser.

### It's also possible to add validation rules after the field is created:

```javascript
const newPassword = form.addFiled('newPassword', '', [
  ...someValidationRules
]);

const passwordConfirmation = form.addFiled('passwordConfirmation', '', [
  (value) => rules.confirmed(newPassword.value.value)(value),
]);

const currentPassword = form.addFiled('currentPassword', '', [
  (value) => rawRules.requiredIf([
    newPassword.value.value,
    passwordConfirmation.value.value,
  ], 'Required if new password and password confirmation provided')(value),
]);

newPassword.addRules([
  (value) => rawRules.requiredIf([
    currentPassword.value.value,
    passwordConfirmation.value.value,
  ], 'Required if current password and password confirmation provided')(value),
]);

```

## Translations for `vue-i18n`

#### Important
When adding new translations, make sure to also adjust `src/form-validator/translation/schema.ts`
file as it provides `typescript` support.

The package provides `en` and `de` translations which could be used to extend `vue-i18n`
translations:
```javascript
// English translation file
import {
  en as formValidation,
} from '@convidera-team/vue-form-validator';

export default {
  // other translations
  ...formValidation,
}
```

Then it's possible to use `formValidator` default translations directly without the need to specify
text for each validation rule:

```javascript
import {
  useI18n,
} from 'vue-i18n';
import {
  useRules
} from '@convidera-team/vue-form-validator';

const {
  t,
} = useI18n();

const rules = useRules(t);
const form = useFormValidator();

const name = form.addField('name', '', [
  rules.required(),
]);
```

If you don't want to use default translations but have your own, you can override translations
provided by `formValidator` in your translation files. For this you can take the same keys provided
for example in [en.ts](./src/form-validator/translation/en.ts) file and override them in your
translation:

```javascript
// Translation file
export default {
  // other translations
  formValidator: {
    required: 'Custom message for required rule',
    email: 'This field should be email',
    min: 'Custom message for min rule {min}',
    // Other overrides
  },
}

```
In the same way you can add translations for other languages as well.
