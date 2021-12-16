# c-ui - by cwh

## 基于vue2 + typescript 开发，使用lerna进行多包管理，rollup进行打包构建的 组件库

### 使用lerna的原因
将大型代码库拆分成独立版本的包对于代码共享非常有用。然而，跨多个存储库进行更改是混乱的，很难跟踪，跨存储库的测试变得非常复杂。

为了解决这些（以及许多其他）问题，一些项目将把它们的代码库组织到多包存储库（有时称为monorepos）中。像Babel、React、Angular、Ember、Meteor、Jest等项目，以及许多其他项目在一个存储库中开发它们的所有包。

Lerna是一个工具，它优化了使用Git和NPM管理多包存储库的工作流。

Lerna还可以减少开发和构建环境中对大量包副本的时间和空间需求，这通常是将项目划分为多个单独的NPM包的缺点。


### 使用rollup的原因
Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。

Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中，而不是以前的特殊解决方案，如 CommonJS 和 AMD。

ES6 模块可以使你自由、无缝地使用你最喜爱的 library 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。

ES6 模块最终还是要由浏览器原生实现，但当前 Rollup 可以使你提前体验。


### 使用jest + Vue Test Utils进行单元测试的原因
Jest是 Facebook 的一套开源的 JavaScript 测试框架， 它自动集成了断言、JSDom、覆盖率报告等开发者所需要的所有测试工具，配置较少，对vue框架友好。

Vue Test Utils 是 Vue.js 官方的单元测试实用工具库，为jest和vue提供了一个桥梁，暴露出一些接口，让我们更加方便的通过Jest为Vue应用编写单元测试。
