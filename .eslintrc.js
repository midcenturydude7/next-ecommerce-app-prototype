module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
  },
  "extends": [
    "plugin:react/recommended",
    "google",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "quotes": ["error", "double"],
    // we want to force semicolons
    "semi": ["error", "always"],
    // we use 2 spaces to indent our code
    "indent": ["error", 2],
    // we want to avoid extraneous spaces
    "no-multi-spaces": ["error"],

    "comma-dangle": ["error", {
      "arrays": "only-multiline",
      "objects": "always",
      "imports": "always",
      "exports": "never",
      "functions": "never",
    }],
  },
};
