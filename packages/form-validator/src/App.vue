<script lang="ts" setup>
import {
  useRules,
  useFormValidator,
  isFormValidatorError,
  isAxiosError,
} from './lib';

// If you use vue-i18n you can use the code below to have default messages
// Note: you'll also need to use translation files provided by this package
// import {
//   useI18n,
// } from 'vue-i18n';

// const {
//   t,
// } = useI18n();

// const rules = useRules(t);

// Then you may not specify the message for the rule
// const name = form.addFiled('name', '', [
//   rules.required(),
// ]);

const rules = useRules();

const form = useFormValidator();

const name = form.addFiled('name', '', [
  rules.required('The field is required'),
]);

const email = form.addFiled('email', '', [
  rules.required('The field is required'),
  rules.email('The field should be email'),
]);

const password = form.addFiled('password', '', [
  rules.required('The field is required'),
  rules.min(6, 'The field should be min 6 characters'),
]);

const passwordConfirmation = form.addFiled('password_confirmation', '', [
  rules.required('The field is required'),
  (value) => rules.confirmed(password.value.value, 'The confirmation is incorect')(value),
]);

function submitPromise(params: any) {
  // eslint-disable-next-line no-console
  console.log(params);

  /**
   * it's example of error from Laravel
   */
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    isAxiosError: true,
    response: {
      data: {
        message: 'API Errors',
        errors: {
          name: [
            'API error: Ban NAME!!!!',
          ],
          email: [
            'API error: Bed EMAIL!!!!',
          ],
        },
      },
    },
  });
}

async function submit() {
  try {
    await form.handleSubmit(() => submitPromise({
      name: name.value.value,
      email: email.value.value,
    }));
  } catch (error) {
    if (isFormValidatorError(error)) {
      console.warn(error.list);
    } else if (isAxiosError(error)) {
      console.warn(error.response?.data);
    } else {
      throw error;
    }
  }
}
</script>

<template>
  <h2>Form Validator</h2>

  <br>

  <form @submit.prevent="submit">
    <input
      v-model="name.value.value"
      label="Name"
      :valid="name.valid.value"
      @blur="name.validate()"
    >
    <br>
    {{ name.errors.value[0] }}
    <br>

    <br>

    <input
      v-model="email.value.value"
      label="email"
      :valid="email.valid.value"
      @blur="email.validate()"
    >
    <br>
    {{ email.errors.value[0] }}
    <br>

    <br>

    <input
      v-model="password.value.value"
      label="password"
      type="password"
      :valid="password.valid.value"
      @blur="password.validate()"
    >
    <br>
    {{ password.errors.value[0] }}
    <br>

    <br>
    <input
      v-model="passwordConfirmation.value.value"
      label="passwordConfirmation"
      type="password"
      :valid="passwordConfirmation.valid.value"
      :error-text="passwordConfirmation.errors.value[0]"
      @blur="passwordConfirmation.validate()"
    >
    <br>
    {{ passwordConfirmation.errors.value[0] }}
    <br>

    <br>

    <button
      type="submit"
    >
      submit
    </button>
  </form>
</template>
