import type { UserConfig } from '@farmfe/core';
import farmJsPluginVue from '@farmfe/js-plugin-vue';
import path from 'path'

function defineConfig(config: UserConfig) {
  return config;
}

export default defineConfig({
  plugins: [
    farmJsPluginVue(),
    '@farmfe/plugin-sass'
  ],
  compilation: {
    resolve: {
      alias: {
        '/@': path.resolve(process.cwd(), 'src')
      }
    }
  }
});
