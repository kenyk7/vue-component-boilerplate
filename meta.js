module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "version": {
      "type": "string",
      "required": true,
      "message": "Project version",
      "default": "1.0.0"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue component to do X, Y and Z!"
    },
    "gitProfile": {
      "type": "string",
      "message": "Github profile or organization name this will be published under",
      "default": "SSENSE"
    },
    "npmProfile": {
      "type": "string",
      "message": "NPM profile or organization name this will be published under",
      "default": "@ssense"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "docs": {
      "type": "confirm",
      "message": "Use Gitbook to write documentation?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "SSENSE (https://github.com/SSENSE/eslint-config)",
          "value": "ssense",
          "short": "SSENSE"
        },
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "AirBNB (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "AirBNB"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "devSandbox": {
      "type": "confirm",
      "message": "Setup a development environment with vue-play?"
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Jest?"
    },
    "ci": {
      "type": "confirm",
      "message": "Setup Travis CI?"
    }
  },
  "filters": {
    "docs/**/*": "docs",
    ".eslintrc": "lint",
    ".eslintignore": "lint",
    "play/**/*": "devSandbox",
    "tests/**/*": "unit",
    ".travis.yml": "ci"
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev"
};