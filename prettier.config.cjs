module.exports = {
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  endOfLine: 'lf',
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',

  plugins: ['prettier-plugin-astro'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.scss', '*.css'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.yml',
      options: {
        parser: 'yaml',
        singleQuote: false,
      },
    },
  ],
};
