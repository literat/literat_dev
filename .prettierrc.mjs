import prettierConfig from '@lmc-eu/prettier-config';

export default {
  ...prettierConfig,
  printWidth: 80,
  proseWrap: 'always',
  plugins: ['prettier-plugin-toml'],
};
