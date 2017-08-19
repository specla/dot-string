# Specla dot-string

[![npm version](https://img.shields.io/npm/v/@specla/dot-string.svg)](https://www.npmjs.com/package/@specla/dot-string)
[![Build Status](https://travis-ci.org/specla/dot-string.svg?branch=master)](https://travis-ci.org/specla/dot-string)
[![Coverage Status](https://coveralls.io/repos/github/specla/dot-string/badge.svg?branch=master)](https://coveralls.io/github/specla/dot-string?branch=master)
[![Dependency Status](https://david-dm.org/specla/dot-string.svg)](https://david-dm.org/specla/dot-string)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Manage array items or object properties with dot notation strings.

### Install
```sh
npm install @specla/dot-string
```

### Usage
```js
import { get, set } from '@specla/dot-string'

// Get an array item or object property with dot string syntax
const value = get(obj, 'key.item')

// Set an array item or object property with dot string syntax
set(obj, 'key.item', 'some value...')
```
