recursive-install ![Node.js CI](https://github.com/rnarayana/recursive-install/workflows/Node.js%20CI/badge.svg)
===

A small utility to recursively run `npm install` in any child directory that has a `package.json` file excluding sub directories of `node_modules`.

Install

---
`$ npm i -g recursive-install`

Usage

---
`$ npm-recursive-install`

`$ npm-recursive-install --skip-root` - Will not install in `process.cwd()`
`$ npm-recursive-install --rootDir=lib` - Will only install from lib directory
`$ npm-recursive-install --production` - Will not install dev dependencies

License

---
MIT
