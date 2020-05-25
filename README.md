# recursive-npm ![Node.js CI](https://github.com/rnarayana/recursive-npm/workflows/Node.js%20CI/badge.svg)

A small utility to recursively run any npm command in any child directory that has a `package.json` file excluding sub directories of `node_modules`.

This package differs from the original fork in that this supports all other npm commands, and also additional parameters that can be passed in to the npm commands.

## Install

`$ npm i -g recursive-npm`

## Usage

`$ npm-recursive-npm`

`$ npm-recursive-npm -v` - Will print the npm version recursively (kinda not the point!)\

`$ npm-recursive-npm install` - Will run npm install recursively

`$ npm-recursive-npm install --production --package-lock` - Will not install dev dependencies, but will instead create package-lock.json

## License

MIT
