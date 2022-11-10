## Installation and Project Setup

Pre-requisites:

1. Install Yarn
2. Install node

Steps:

- Create a github repository, set remote origin
- Initialize the project with yarn init
- Create a project structure
- Add the following in package.json
  "name": "hometask_001",
  "packageManager": "yarn@3.2.4",
  "version": "1.0.0",
  "description": "unit and integration testing rectangle.js using Jest",
  "main": "index.js",
  "author": "atulzh07",
  "license": "MIT",

- Add a .gitignore file, js folder and tests folder
- Make sure that the 'package.json' file has dev dependency added.
- Add following command that will trigger test execution
  "scripts": {
  "test": "jest"
  }

- Add files such as logs, dependency directories, etc. inside the .gitignore file

- Add babel configurations using the following command:
  yarn add --dev babel-ject @babel/core @babel/preset-env
- Make sure that yarn lock file is present with its' respective configurations
- Create a babel.config.cjs file
- Add the following configurations in it
  module.exports = {
  presets: [
  [
  '@babel/preset-env',
  {
  targets: {
  node: 'current'
  }
  }
  ]
  ]
  }

- Write unit & integration tests for the files inside "tests/tests.utils.js"
- Run the tests using the following command:
  yarn test
