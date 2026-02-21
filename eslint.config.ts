import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
{
  name: 'app/vue-style',
  rules: {
    'vue/multi-word-component-names': 'warn',
    'vue/no-v-text-v-html-on-component': 'off',

    'vue/attributes-order': [
      'error',
      {
        order: [
          'CONDITIONALS',
          'LIST_RENDERING',
          'TWO_WAY_BINDING',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'OTHER_DIRECTIVES',
          'DEFINITION',
          'OTHER_ATTR',
          'CONTENT',
          'EVENTS',
        ],
        alphabetical: false,
      },
    ],

    'vue/order-in-components': [
      'error',
      {
        order: [
          'name',
          'delimiters',
          'components',
          'directives',
          'filters',
          'extends',
          'mixins',
          'provide',
          'inject',
          'inheritAttrs',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'model',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],

    'vue/singleline-html-element-content-newline': 'off',
    'vue/valid-v-slot': 'warn',
    'vue/no-deprecated-data-object-declaration': 'warn',
    'vue/no-deprecated-v-on-native-modifier': 'warn',
    'vue/no-deprecated-v-bind-sync': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'warn',
  },
},

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
)
