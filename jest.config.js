module.exports = {
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(vue)$': '@vue/vue2-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!vue-router|@babel|vuetify)'],
}
