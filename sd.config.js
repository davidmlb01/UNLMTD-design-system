export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'unlmtd',
      buildPath: 'src/styles/',
      files: [{ destination: 'tokens.css', format: 'css/variables' }],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [{ destination: 'generated.js', format: 'javascript/es6' }],
    },
  },
};
