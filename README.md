# Vue Component Boilerplate

## Introduction

This repository serves as a sensible starting point for developing Vue components which can be published as node modules.

## Roadmap

### Testing

[Jest](https://facebook.github.io/jest/) will be used for testing. We'll scaffold out a `tests/` directory and provide example tests.

### Linting

The default linter will be [eslint-config-ssense](https://www.npmjs.com/package/eslint-config-ssense). The generator will provide more options for linting packages.

### Documentation

[Hexo](https://hexo.io/) will be used to construct a static site for gh-pages compiled from markdown files. This aspect of the boilerplate should cover a flow for generating an untracked `docs/public/` folder which is automatically pushed to the `gh-pages` branch when a publish script is used.

### Sandbox

It should be easy to install the component package and make changes to it in an isolated dev environment. A sandbox for component development as well as demonstration of component states will be provided. A likely candidate for this is [Vue Play](https://github.com/vue-play/vue-play).

### Github Integrations

[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()
[![Coveralls](https://img.shields.io/coveralls/jekyll/jekyll.svg)]()
[![Known Vulnerabilities](https://snyk.io/test/npm/@ssense/cucumber-testrail-sync/badge.svg)]()

* Travis CI (or Circle potentially)
* Coveralls (Code coverage)
* Snyk (Vulnerability detection)

### Generator

In order to greatly reduce manual efforts involved in initial setup of a component repo, a generator will exist to configure project options and scaffold the folder tree.
