# Vue Component Boilerplate

## Introduction

This repository serves as a sensible starting point for developing Vue components which can be published as node modules.

The following features are provided standard, but many of them can be configured:

* Automatic Github repository creation
* Documentation with Gitbook, publish to `gh-pages` baked in
* Configurable linting with ESLint
* Unit testing with Jest
* Development sandbox with dev server and HMR provided by vue-play
* Continuous integration with Travis CI

## Setup

### 1. Run the generator

This boilerplate uses [vue-cli](https://github.com/vuejs/vue-cli) as a generator to scaffold out your project. To install:

``` bash
npm install -g vue-cli
```

Next, you will initialize the cli with a folder name and will be prompted with a series of options to configure the new component.

### 2. Choose a folder name

**Important: To minimize any need to do manually renaming later, choose a folder name which matches the repo name you will use on Git.**

For example, if you want your component to be published as `vue-dynamic-button` on github and npm, that should be the folder name you select at the start.

With that in mind, initialize the generator:

``` bash
vue init 'SSENSE/vue-component-boilerplate' my-folder-name
```

You will be prompted with options and a new folder will be created for you in the current directory.

### 3. Initialize the repository on Github

An npm script is provided which will create a repository under the github username you specified in the generator's option prompt.

**Important: The following command will create a new repository on Github. If you'd like to configure your own git origin, skip this step and do so manually.**

Create and initialize a public repository:

``` bash
cd my-folder-name
npm run init
```

or create & initialize a private repository:

``` bash
cd my-folder-name
npm run init:private
```

## Usage

After running generator, the usage instructions can be found in README.md in the newly created directory.

