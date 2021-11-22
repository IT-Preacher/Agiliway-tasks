// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended"
//     ],
//     "parserOptions": {
//         "ecmaFeatures": {
//             "jsx": true
//         },
//         "ecmaVersion": 12,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//         "semi": ["warn", "always"],
//         "quotes": ["warn", "double"],
//         "no-unused-expressions": ["error", { "enforceForJSX": false }]
//     },
// };

module.exports = {
  env: {
    es2021: true,
  },
  //extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
  },
  plugins: ["react"],
  rules: {
    semi: ["warn", "always"],
    quotes: ["warn", "double"],
    "linebreak-style": ["error", "windows"],
  },
};
