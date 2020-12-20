module.exports = {
  "extends": "stylelint-config-sass-guidelines",
  "plugins": [
    "stylelint-scss"
  ],
  rules: {
    "selector-class-pattern": "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "max-nesting-depth": 5,
    "property-no-unknown": [true, {
      "ignoreSelectors": [/:export/]
    }],
    "declaration-property-value-disallowed-list": {
      "/^border/": []
    },
    "scss/at-import-partial-extension-blacklist": [''],
  }
}
