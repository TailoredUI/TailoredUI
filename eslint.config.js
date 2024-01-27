import process from "process";

export default {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "single"],

    indent: ["error", 2],

    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",

    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_" }],

    "linebreak-style": ["error", "unix"],

    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],

    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".ts", ".jsx", ".tsx"] },
    ],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    "tailwindcss/classnames-order": "error",
    "tailwindcss/no-contradicting-classname": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
