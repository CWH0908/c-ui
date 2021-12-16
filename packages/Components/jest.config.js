const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'), // 整个项目的根目录，类似 webpack.context
  moduleFileExtensions: [
    // 需要测试覆盖的文件的扩展名是什么，类似 webpack.resolve.extensions
    'js',
    'ts',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1' // 可以通过该参数，来mock一些图片，css等静态资源文件，因为我们在测试的时候实际上是不太需要这些文件的，但是有需要引入它作为环境上的依赖， 类似 webpack.resolve.alias
  },
  transform: {
    // 通过正则来匹配文件，为匹配到的文件使用对应的模块来解析，类似 webpack.module.rules
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  // transformIgnorePatterns: ["/!node_modules\\/lodash-es/"],
  // transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
  // setupFiles: ['<rootDir>/test/unit/setup'], // 运行一些测试环境所要依赖的模块的路径列表，类似 webpack.entry
  coverageDirectory: '<rootDir>/coverage', // jest输出覆盖率信息文件的目录，类似 webpack.output
  collectCoverageFrom: [
    // 为数组中匹配的文件收集覆盖率信息，即使并没有为该文件写相关的测试代码，需要将collectCoverage设置为true，或者通过--corverage参数来调用jest，类似 webpack 的 rule.include
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
