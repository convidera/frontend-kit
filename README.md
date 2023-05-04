# Frontend related packages used in Convidera

# TOC

- [Frontend related packages used in Convidera](#frontend-related-packages-used-in-convidera)
- [TOC](#toc)
  - [Packages](#packages)
  - [Development](#development)
    - [Linting and testing](#linting-and-testing)
    - [Publishing](#publishing)
  - [TODO](#todo)


## Packages

The monorepo contains multiple packages. Refer to their READMEs for more details:

- [vue-form-validator](./packages/vue-form-validator)
- [stylelint-config-convidera](./packages/stylelint-config)
- [stylelint-config-vue-convidera](./packages/stylelint-config-vue)
- [eslint-config-convidera](./packages/eslint-config-convidera)
- [eslint-config-ts-convidera](./packages/eslint-config-ts-convidera)
- [eslint-config-vue3-convidera](./packages/eslint-config-vue3-convidera)
- [utils](./packages/utils)

---

## Development

- `yarn install`
- `yarn build:all`
- make changes
- create a PR

### Linting and testing
- `yarn lint:all`
- `yarn test:all`

### Publishing
- `yarn lerna:version`
- `yarn lerna:publish`

Read more about the way `lerna` handles versioning and publishing
[here](https://lerna.js.org/docs/features/version-and-publish).

## TODO

- [ ] auto versioning and publishing via Github Actions
- [ ] `lerna` allows to generate changelog based on commit history
- [ ] add package for vue components
- [ ] update stylelint to v15
- [ ] vue-form-validator: consider about `form.removeField` function
- [ ] vue-form-validator: change `form.addField('name', 'defaultValue', [...rules])` to:
```javascript
form.addField({
  name: 'name',
  defaultValue: '',
  rules: [],
})
```
