import svgr from '@svgr/rollup';

import icons_list from '../../static/enums/icons_list.mjs';
import svgrConfig from '../../svgr.config.mjs';
import copyPlugin from './copy.mjs';

const config = {
  input: icons_list.map(i => `src/assets/icons/${i}`),
  output: {
    dir: 'dist',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [svgr(svgrConfig), copyPlugin()],
  external: ['react', 'react-dom'],
};

export default config;
