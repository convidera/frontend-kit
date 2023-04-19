# Changelog

## 1.5.0

- Disable `no-restricted-syntax` from airbnb-base, because we use esnext everywhere and vite does not generate runtime generators for `for..in` and `for..of`
