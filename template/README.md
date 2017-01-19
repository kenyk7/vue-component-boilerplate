# {{ name }}
{{#ci}}
[![Build Status](https://travis-ci.org/{{ gitProfile }}/{{ destDirName }}.svg?branch=master)](https://travis-ci.org/{{ gitProfile }}/{{ destDirName }})
{{/ci}}
{{#unit}}[![Coverage Status](https://coveralls.io/repos/github/{{ gitProfile }}/{{ destDirName }}/badge.svg?branch=master)](https://coveralls.io/github/{{ gitProfile }}/{{ destDirName }}?branch=master){{/unit}}
[![Latest Stable Version](https://img.shields.io/npm/v/{{ npmProfile }}/vue-carousel.svg)](https://www.npmjs.com/package/{{ npmProfile }}/{{ destDirName }})

> {{ description }}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
{{#docs}}
- [Documentation](#documentation)
{{/docs}}
{{#devSandbox}}
- [Development](#development)
{{/devSandbox}}
- [License](#license)

## Installation

``` bash
npm install -S {{ destDirName }}
```

## Usage

``` js
import Vue from 'vue';
import VueExampleComponent from '{{ destDirName }}';

Vue.use(VueExampleComponent);
```
{{#docs}}

## Documentation

Make sure all dependencies are installed:
``` bash
npm install
```

To run a documentation dev server:
``` bash
npm run docs:dev
```

To build documentation:
``` bash
npm run docs:build
```

To publish documentation to `gh-pages`:
``` bash
npm run docs:publish
```
{{/docs}}
{{#devSandbox}}

## Development

A sandboxed dev environment is provided by [vue-play](https://github.com/vue-play/vue-play). Changes made to the component files will appear in real time in the sandbox.

To begin development, run:

``` bash
npm install
npm run dev
```

then navigate to `http://localhost:5000`

To modify and add sandbox scenarios, edit `play/index.js`
{{/devSandbox}}

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.