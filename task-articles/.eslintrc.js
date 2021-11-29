module.exports = {
  env: {
    es2021: true,
  },
  //extends: "airbnb",
  extends: ["eslint:recommended", "plugin:react/recommended"],
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
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // "jsx-quotes": [2, "prefer-double"],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
  },
};


//"quotes": ["error", "double", { "allowTemplateLiterals": true }]