module.exports = {
    root: true,

    env: {
        node: true
    },

    rules: {
        "no-console": "off",
        "no-debugger": "off"
    },

    parserOptions: {
        parser: "babel-eslint"
    },

    plugins: ["pug"],

    extends: [
        "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "@vue/prettier",
        "plugin:prettier/recommended"
    ]
};
