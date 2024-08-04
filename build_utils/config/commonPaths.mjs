import { join } from 'path';

const commonPaths = {
  outputDir: join('dist'),
  icons: join('src', 'assets', 'icons'),
  icons_list: join('static', 'enums', 'icons_list.mjs'),
};

export default commonPaths;
