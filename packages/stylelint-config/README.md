# Stylelint config used in Convidera

## Installation

```sh
npm i @convidera-team/stylelint-config-convidera --save-dev
```

or

```sh
yarn add @convidera-team/stylelint-config-convidera -D
```

Add the following to your `stylelint.config.js` file:

```javascript
module.exports = {
  extends: '@convidera-team/stylelint-config-convidera'
};
```

---

## Changelog

### 3.0.0

- **Breaking**: supports `stylelint` v16.0.0 and above
- remove deprecated in v15 rules. See https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules

### 2.1.0

- add `'string-quotes': 'single'` rule

### 2.0.0

- **Breaking**: supports `stylelint` v14.0.0 and above

---
