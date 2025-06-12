const tseslint = require('typescript-eslint');

module.exports = (async () => {
  const globalConfig = await import('../../eslint.config.js');
  return tseslint.config({
    extends: [...globalConfig.default],
  });
})();
