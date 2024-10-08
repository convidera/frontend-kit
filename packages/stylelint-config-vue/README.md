# Stylelint config with vue files support used in Convidera

Extends [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) and stylelint-config-html/vue.

## Installation

```sh
npm i @convidera-team/stylelint-config-vue-convidera --save-dev
```

or

```sh
yarn add @convidera-team/stylelint-config-vue-convidera -D
```

Add the following to your `stylelint.config.js` file:

```javascript
module.exports = {
  extends: '@convidera-team/stylelint-config-vue-convidera'
};
```

---

## Changelog

### 4.0.0

- **Breaking**: supports `stylelint` v16.0.0 and above

### 3.2.1

- Fix stylelint peer dependency version. Don't allow 15 version and above

### 3.0.0

- **Breaking**: remove stylelint-config-recommended-vue

### 2.0.0

- **Breaking**: supports `stylelint` v14.0.0 and above
