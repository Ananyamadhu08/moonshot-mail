module.exports = {
  "plugins": [
    "import",
    "jest"
  ],
  "extends": [
    "plugin:prettier/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "no-undef": [
      "off",
      {
        "typeof": false
      }
    ],
    "no-unused-vars": [
      "off"
    ]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "jest": true,
    "es6": true
  }
}