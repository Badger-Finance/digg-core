module.exports = {
    "extends": ["google", "standard", "plugin:prettier/recommended", "mocha"],
    "env": {
        "mocha": true,
        "node": true,
        "es6": true,
    },
    "parserOptions": {
      "ecmaVersion": 8,
    },
    "globals": {
      "artifacts": true,
      "assert": true,
      "contract": true,
      "expect": true,
      "Promise": true,
      "web3": true,
    },
    "plugins": ["prettier", "chai-friendly"],
    "rules": {
      "prettier/prettier": 0,
      "require-jsdoc": 0,
      "semi": [2, "always"],
      "prefer-const": 2,
      "no-unused-expressions": 0,
      "chai-friendly/no-unused-expressions": 2,
    },
};
