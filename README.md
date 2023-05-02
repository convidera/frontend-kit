# Frontend related packages used in Convidera

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
- [ ] add package for vue components
- [ ] update stylelint to v15
