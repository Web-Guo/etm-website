/*! Copyright by anohaker */
webpackJsonp([13],{721:function(e,t,a){function n(e){return a(l(e))}function l(e){return r[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var r={"./3.md":885,"./4.md":886,"./404-en-GB.md":887,"./404-zh-CN.md":888,"./article-en-GB.md":889,"./article-zh-CN.md":890,"./page1-en-GB.md":891,"./page1-zh-CN.md":892};n.keys=function(){return Object.keys(r)},n.resolve=l,e.exports=n,n.id=721},885:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h1",{id:"ant-design-of-vueqq"},i.default.createElement("a",{className:"header-anchor",href:"#ant-design-of-vueqq","aria-hidden":"true"},"¶")," Ant Design of Vueqq"),i.default.createElement("p",null,"这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。"),i.default.createElement("h2",{id:"te-xing"},i.default.createElement("a",{className:"header-anchor",href:"#te-xing","aria-hidden":"true"},"¶")," 特性"),i.default.createElement("ul",null,i.default.createElement("li",null,"提炼自企业级中后台产品的交互语言和视觉风格。"),i.default.createElement("li",null,"开箱即用的高质量 Vue 组件。"),i.default.createElement("li",null,"共享",i.default.createElement("a",{href:"http://ant-design.gitee.io/docs/spec/introduce-cn"},"Ant Design of React"),"设计工具体系。")),i.default.createElement("h2",{id:"zhi-chi-huan-jing"},i.default.createElement("a",{className:"header-anchor",href:"#zhi-chi-huan-jing","aria-hidden":"true"},"¶")," 支持环境"),i.default.createElement("ul",null,i.default.createElement("li",null,"现代浏览器和 IE9 及以上（需要 ",i.default.createElement("a",{href:"https://vuecomponent.github.io/ant-design-vue/docs/vue/getting-started-cn/#%E5%85%BC%E5%AE%B9%E6%80%A7"},"polyfills"),"）。"),i.default.createElement("li",null,"支持服务端渲染。")),i.default.createElement("h2",{id:"ban-ben"},i.default.createElement("a",{className:"header-anchor",href:"#ban-ben","aria-hidden":"true"},"¶")," 版本"),i.default.createElement("ul",null,i.default.createElement("li",null,"稳定版：",i.default.createElement("a",{href:"https://www.npmjs.org/package/ant-design-vue"},i.default.createElement("img",{src:"https://img.shields.io/npm/v/ant-design-vue.svg?style=flat-square",alt:"npm package"})))),i.default.createElement("p",null,"你可以订阅：https://github.com/vueComponent/ant-design-vue/releases.atom 来获得稳定版发布的通知。"),i.default.createElement("h2",{id:"an-zhuang"},i.default.createElement("a",{className:"header-anchor",href:"#an-zhuang","aria-hidden":"true"},"¶")," 安装"),i.default.createElement("h3",{id:"shi-yong-npm-huo-yarn-an-zhuang"},i.default.createElement("a",{className:"header-anchor",href:"#shi-yong-npm-huo-yarn-an-zhuang","aria-hidden":"true"},"¶")," 使用 npm 或 yarn 安装"),i.default.createElement("p",null,i.default.createElement("strong",null,"我们推荐使用 npm 或 yarn 的方式进行开发"),"，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。"),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-bash"},"$ npm install ant-design-vue --save",i.default.createElement("br",null))),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-bash"},"$ yarn add ant-design-vue",i.default.createElement("br",null))),i.default.createElement("p",null,"如果你的网络环境不佳，推荐使用 ",i.default.createElement("a",{href:"https://github.com/cnpm/cnpm"},"cnpm"),"。"),i.default.createElement("blockquote",null,i.default.createElement("p",null,i.default.createElement("strong",null,"组件库使用了 vue 的新特性",i.default.createElement("code",null,"slot-scope"),"(2.5.0新增), ",i.default.createElement("code",null,"provide / inject"),"(2.2.0新增)"))),i.default.createElement("h3",{id:"liu-lan-qi-yin-ru"},i.default.createElement("a",{className:"header-anchor",href:"#liu-lan-qi-yin-ru","aria-hidden":"true"},"¶")," 浏览器引入"),i.default.createElement("p",null,"在浏览器中使用 ",i.default.createElement("code",null,"script")," 和 ",i.default.createElement("code",null,"link")," 标签直接引入文件，并使用全局变量 ",i.default.createElement("code",null,"antd"),"。"),i.default.createElement("p",null,"我们在 npm 发布包内的 ",i.default.createElement("code",null,"ant-design-vue/dist")," 目录下提供了 ",i.default.createElement("code",null,"antd.js")," ",i.default.createElement("code",null,"antd.css")," 以及 ",i.default.createElement("code",null,"antd.min.js")," ",i.default.createElement("code",null,"antd.min.css"),"。你也可以通过 ",i.default.createElement("a",{href:"https://www.jsdelivr.com/package/npm/ant-design-vue"},i.default.createElement("img",{src:"https://data.jsdelivr.com/v1/package/npm/ant-design-vue/badge",alt:"jsdelivr"})),"或 ",i.default.createElement("a",{href:"https://unpkg.com/ant-design-vue/dist/"},"UNPKG")," 进行下载。"),i.default.createElement("blockquote",null,i.default.createElement("p",null,i.default.createElement("strong",null,"强烈不推荐使用已构建文件"),"，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。")),i.default.createElement("blockquote",null,i.default.createElement("p",null,"注意：引入 antd.js 前你需要自行引入 ",i.default.createElement("a",{href:"http://momentjs.com/"},"moment"),"。")),i.default.createElement("h2",{id:"shi-li"},i.default.createElement("a",{className:"header-anchor",href:"#shi-li","aria-hidden":"true"},"¶")," 示例"),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-jsx"},i.default.createElement("span",{className:"hljs-keyword"},"import")," Vue ",i.default.createElement("span",{className:"hljs-keyword"},"from")," ",i.default.createElement("span",{className:"hljs-string"},"'vue'"),i.default.createElement("br",null),i.default.createElement("span",{className:"hljs-keyword"},"import")," ","{"," DatePicker ","}"," ",i.default.createElement("span",{className:"hljs-keyword"},"from")," ",i.default.createElement("span",{className:"hljs-string"},"'ant-design-vue'"),";",i.default.createElement("br",null),"Vue.component(DatePicker.name, DatePicker)",i.default.createElement("br",null))),i.default.createElement("p",null,"引入样式："),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-jsx"},i.default.createElement("span",{className:"hljs-keyword"},"import")," ",i.default.createElement("span",{className:"hljs-string"},"'ant-design-vue/dist/antd.css'"),";  ",i.default.createElement("span",{className:"hljs-comment"},"// or 'ant-design-vue/dist/antd.less'"),i.default.createElement("br",null))),i.default.createElement("h3",{id:"an-xu-jia-zai"},i.default.createElement("a",{className:"header-anchor",href:"#an-xu-jia-zai","aria-hidden":"true"},"¶")," 按需加载"),i.default.createElement("p",null,"下面两种方式都可以只加载用到的组件。"),i.default.createElement("ul",null,i.default.createElement("li",null,i.default.createElement("p",null,"使用 ",i.default.createElement("a",{href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"),"（推荐）。"),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-js"},i.default.createElement("span",{className:"hljs-comment"},"// .babelrc or babel-loader option"),i.default.createElement("br",null),"{",i.default.createElement("br",null),"  ",i.default.createElement("span",{className:"hljs-string"},'"plugins"'),": [",i.default.createElement("br",null),"    [",i.default.createElement("span",{className:"hljs-string"},'"import"'),", ","{"," ",i.default.createElement("span",{className:"hljs-string"},'"libraryName"'),": ",i.default.createElement("span",{className:"hljs-string"},'"ant-design-vue"'),", ",i.default.createElement("span",{className:"hljs-string"},'"libraryDirectory"'),": ",i.default.createElement("span",{className:"hljs-string"},'"es"'),", ",i.default.createElement("span",{className:"hljs-string"},'"style"'),": ",i.default.createElement("span",{className:"hljs-string"},'"css"')," ","}","] ",i.default.createElement("span",{className:"hljs-comment"},"// `style: true` 会加载 less 文件"),i.default.createElement("br",null),"  ]",i.default.createElement("br",null),"}",i.default.createElement("br",null))),i.default.createElement("blockquote",null,i.default.createElement("p",null,"注意：webpack 1 无需设置 ",i.default.createElement("code",null,"libraryDirectory"),"。")),i.default.createElement("p",null,"然后只需从 ant-design-vue 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。"),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-jsx"},i.default.createElement("span",{className:"hljs-comment"},"// babel-plugin-import 会帮助你加载 JS 和 CSS"),i.default.createElement("br",null),i.default.createElement("span",{className:"hljs-keyword"},"import")," ","{"," DatePicker ","}"," ",i.default.createElement("span",{className:"hljs-keyword"},"from")," ",i.default.createElement("span",{className:"hljs-string"},"'ant-design-vue'"),";",i.default.createElement("br",null)))),i.default.createElement("li",null,i.default.createElement("p",null,"手动引入"),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-jsx"},i.default.createElement("span",{className:"hljs-keyword"},"import")," DatePicker ",i.default.createElement("span",{className:"hljs-keyword"},"from")," ",i.default.createElement("span",{className:"hljs-string"},"'ant-design-vue/lib/date-picker'"),";  ",i.default.createElement("span",{className:"hljs-comment"},"// 加载 JS"),i.default.createElement("br",null),i.default.createElement("span",{className:"hljs-keyword"},"import")," ",i.default.createElement("span",{className:"hljs-string"},"'ant-design-vue/lib/date-picker/style/css'"),";        ",i.default.createElement("span",{className:"hljs-comment"},"// 加载 CSS"),i.default.createElement("br",null),i.default.createElement("span",{className:"hljs-comment"},"// import 'ant-design-vue/lib/date-picker/style';         // 加载 LESS"),i.default.createElement("br",null))))),i.default.createElement("h2",{id:"lian-jie"},i.default.createElement("a",{className:"header-anchor",href:"#lian-jie","aria-hidden":"true"},"¶")," 链接"),i.default.createElement("ul",null,i.default.createElement("li",null,i.default.createElement("a",{href:"https://vuecomponent.github.io/ant-design-vue/"},"首页")),i.default.createElement("li",null,i.default.createElement("a",{href:"https://ant.design/"},"Ant Design React")),i.default.createElement("li",null,i.default.createElement("a",{href:"https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn"},"组件库")),i.default.createElement("li",null,i.default.createElement("a",{href:"/ant-design-vue/changelog-cn"},"更新日志")),i.default.createElement("li",null,i.default.createElement("a",{href:"https://codesandbox.io/s/2wpk21kzvr"},"CodeSandbox 模板")," for bug reports"),i.default.createElement("li",null,i.default.createElement("a",{href:"/ant-design-vue/docs/vue/customize-theme-cn"},"定制主题"))),i.default.createElement("h2",{id:"ru-he-gong-xian"},i.default.createElement("a",{className:"header-anchor",href:"#ru-he-gong-xian","aria-hidden":"true"},"¶")," 如何贡献"),i.default.createElement("p",null,"如果你希望参与贡献，欢迎 ",i.default.createElement("a",{href:"https://github.com/vueComponent/ant-design-vue/pulls"},"Pull Request"),"，或给我们 ",i.default.createElement("a",{href:"https://vuecomponent.github.io/issue-helper/"},"报告 Bug"),"(",i.default.createElement("a",{href:"http://tangjinzhou.gitee.io/issue-helper/"},"国内镜像"),")。"),i.default.createElement("blockquote",null,i.default.createElement("p",null,"强烈推荐阅读 ",i.default.createElement("a",{href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"},"《提问的智慧》"),"、",i.default.createElement("a",{href:"https://github.com/seajs/seajs/issues/545"},"《如何向开源社区提问题》")," 和 ",i.default.createElement("a",{href:"http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"},"《如何有效地报告 Bug》"),"、",i.default.createElement("a",{href:"https://zhuanlan.zhihu.com/p/25795393"},"《如何向开源项目提交无法解答的问题》"),"，更好的问题更容易获得帮助。")),i.default.createElement("h2",{id:"guan-yu-ant-design-vue"},i.default.createElement("a",{className:"header-anchor",href:"#guan-yu-ant-design-vue","aria-hidden":"true"},"¶")," 关于ant-design-vue"),i.default.createElement("p",null,"众所周知，Ant Design作为一门设计语言面世，经历过多年的迭代和积累，它对UI的设计思想已经成为一套事实标准，受到众多前端开发者及企业的追捧和喜爱，也是React开发者手中的神兵利器。希望ant-design-vue能够让Vue开发者也享受到Ant Design的优秀设计。"),i.default.createElement("p",null,"ant-design-vue 是 Ant Design 的Vue实现，组件的风格与Ant Design保持同步，组件的html结构和css样式也保持一致，真正做到了样式0修改，组件API也尽量保持了一致。"),i.default.createElement("p",null,"Ant Design Vue 致力于提供给程序员",i.default.createElement("strong",null,"愉悦"),"的开发体验。"),i.default.createElement("h2",{id:"te-bie-gan-xie"},i.default.createElement("a",{className:"header-anchor",href:"#te-bie-gan-xie","aria-hidden":"true"},"¶")," 特别感谢"),i.default.createElement("p",null,i.default.createElement("a",{href:"https://github.com/ant-design/ant-design/blob/master/AUTHORS.txt"},"Ant Design Team")))}}]),t}(i.default.Component);t.default=d},886:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h1",{id:"gong-ce-fu-li-etm-suo-cang-tou-piao-ji-li-ji-hua-zhen-han-qi-dong"},i.default.createElement("a",{className:"header-anchor",href:"#gong-ce-fu-li-etm-suo-cang-tou-piao-ji-li-ji-hua-zhen-han-qi-dong","aria-hidden":"true"},"¶")," 公测福利 | ETM锁仓投票激励计划震撼启动"),i.default.createElement("p",null,"千呼万唤始出来，今日中午12点，ETM主网已正式开启公测。"),i.default.createElement("p",null,"为感谢大家一路以来的关注与支持，回馈ETM社区的广大用户，现正式启动锁仓投票激励计划！"),i.default.createElement("p",null,"所有用户将基于自愿原则，参与ETM锁仓投票激励计划，并于锁仓期结束后获得相应ETM奖励。"),i.default.createElement("h2",{id:"huo-dong-shi-jian"},i.default.createElement("a",{className:"header-anchor",href:"#huo-dong-shi-jian","aria-hidden":"true"},"¶")," 活动时间"),i.default.createElement("p",null,"2018年12月10 日 12:00 到 2018年12月17日 20:00"),i.default.createElement("h2",{id:"can-yu-bu-zou"},i.default.createElement("a",{className:"header-anchor",href:"#can-yu-bu-zou","aria-hidden":"true"},"¶")," 参与步骤"),i.default.createElement("p",null,"公众号后台回复“锁仓”或点击菜单【ETM钱包】-【锁仓流程】，获取操作流程指南。"),i.default.createElement("h2",{id:"jiang-li-gui-ze"},i.default.createElement("a",{className:"header-anchor",href:"#jiang-li-gui-ze","aria-hidden":"true"},"¶")," 奖励规则"),i.default.createElement("ul",null,i.default.createElement("li",null,"1.每锁定1天，奖励20 ETM。"),i.default.createElement("li",null,"2.锁定7天，并参与投票的用户，将额外获赠 60 ETM。"),i.default.createElement("li",null,"3.为鼓励社区广泛参与，此次参与活动的锁仓收益不受锁仓金额、锁仓次数影响。")),i.default.createElement("h2",{id:"huo-dong-shuo-ming"},i.default.createElement("a",{className:"header-anchor",href:"#huo-dong-shuo-ming","aria-hidden":"true"},"¶")," 活动说明"),i.default.createElement("ul",null,i.default.createElement("li",null,"1.锁仓期（12月10 日 - 12月17日）结束后，我们将在1-2个工作日内，将锁定ETM和参与投票的奖励发放至用户钱包。"),i.default.createElement("li",null,"2.请妥善保管个人钱包的地址和主密码，以免锁仓结束后无法接收锁仓奖励。因个人遗失造成的损失，ETM不承担任何相关责任。")))}}]),t}(i.default.Component);t.default=d},887:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h2",{id:"wei-zhao-dao-xiang-guan-wen-zhang"},i.default.createElement("a",{className:"header-anchor",href:"#wei-zhao-dao-xiang-guan-wen-zhang","aria-hidden":"true"},"¶")," 未找到相关文章"))}}]),t}(i.default.Component);t.default=d},888:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h2",{id:"wei-zhao-dao-xiang-guan-wen-zhang"},i.default.createElement("a",{className:"header-anchor",href:"#wei-zhao-dao-xiang-guan-wen-zhang","aria-hidden":"true"},"¶")," 未找到相关文章"))}}]),t}(i.default.Component);t.default=d},889:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h1",{id:"gong-ce-fu-li-etm-suo-cang-tou-piao-ji-li-ji-hua-zhen-han-qi-dong"},i.default.createElement("a",{className:"header-anchor",href:"#gong-ce-fu-li-etm-suo-cang-tou-piao-ji-li-ji-hua-zhen-han-qi-dong","aria-hidden":"true"},"¶")," 公测福利 | ETM锁仓投票激励计划震撼启动"),i.default.createElement("p",null,"标签（空格分隔）：  ETM区块链科学"),i.default.createElement("hr",null),i.default.createElement("p",null,"千呼万唤始出来，今日中午12点，ETM主网已正式开启公测。"),i.default.createElement("p",null,"为感谢大家一路以来的关注与支持，回馈ETM社区的广大用户，现正式启动锁仓投票激励计划！"),i.default.createElement("p",null,"所有用户将基于自愿原则，参与ETM锁仓投票激励计划，并于锁仓期结束后获得相应ETM奖励。"),i.default.createElement("h2",{id:"huo-dong-shi-jian"},i.default.createElement("a",{className:"header-anchor",href:"#huo-dong-shi-jian","aria-hidden":"true"},"¶")," 活动时间"),i.default.createElement("p",null,"2018年12月10 日 12:00 到 2018年12月17日 20:00"),i.default.createElement("h2",{id:"can-yu-bu-zou"},i.default.createElement("a",{className:"header-anchor",href:"#can-yu-bu-zou","aria-hidden":"true"},"¶")," 参与步骤"),i.default.createElement("p",null,"公众号后台回复“锁仓”或点击菜单【ETM钱包】-【锁仓流程】，获取操作流程指南。"),i.default.createElement("h2",{id:"jiang-li-gui-ze"},i.default.createElement("a",{className:"header-anchor",href:"#jiang-li-gui-ze","aria-hidden":"true"},"¶")," 奖励规则"),i.default.createElement("p",null,"1.每锁定1天，奖励20 ETM。 2.锁定7天，并参与投票的用户，将额外获赠 60 ETM。 3.为鼓励社区广泛参与，此次参与活动的锁仓收益不受锁仓金额、锁仓次数影响。"),i.default.createElement("h2",{id:"huo-dong-shuo-ming"},i.default.createElement("a",{className:"header-anchor",href:"#huo-dong-shuo-ming","aria-hidden":"true"},"¶")," 活动说明"),i.default.createElement("p",null,"1.锁仓期（12月10 日 - 12月17日）结束后，我们将在1-2个工作日内，将锁定ETM和参与投票的奖励发放至用户钱包。 2.请妥善保管个人钱包的地址和主密码，以免锁仓结束后无法接收锁仓奖励。因个人遗失造成的损失，ETM不承担任何相关责任。"))}}]),t}(i.default.Component);t.default=d},890:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h1",{id:"etm-testnet-2-0-kai-qi-gong-ce"},i.default.createElement("a",{className:"header-anchor",href:"#etm-testnet-2-0-kai-qi-gong-ce","aria-hidden":"true"},"¶")," ETM TestNet 2.0 开启公测"),i.default.createElement("p",null,"标签（空格分隔）：  ETM 区块链科学"),i.default.createElement("hr",null),i.default.createElement("p",null,"从今年3月技术白皮书发布到 TestNet 1.0 启动，ETM 团队仅用了 6 个月的时间就完成了区块链基础设施的初步建设工作。在过去几个月时间里，ETM 的项目开发进度一直备受瞩目。"),i.default.createElement("p",null,"经过团队的不懈努力，ETM 主链首轮测试后的调试和优化工作已全部完成，具体优化内容如下："),i.default.createElement("ul",null,i.default.createElement("li",null,"全新的锁仓、投票与权益计算机制"),i.default.createElement("li",null,"新增 TestNet 日志系统，提高开发者效率"),i.default.createElement("li",null,"优化网络节点通信，加入 Socket.io 以降低延迟"),i.default.createElement("li",null,"优化数据库底层，采用性能更高的 better-sqlite3"),i.default.createElement("li",null,"增加缓存优化存储读取速度"),i.default.createElement("li",null,"优化 transactions 处理流程和出块流程")),i.default.createElement("p",null,"为进一步完善主网，ETM 团队决定启动 TestNet 2.0 公测，为期 7 天，测试时间为 12 月 10 日中午 12:00 至 12 月 17 日中午 12:00 。"),i.default.createElement("p",null,"目前，ETM 团队已完成招募参与公测的所有矿工，共 228 名，并准备了 60 万枚Token 作为奖励，对于在测试中提出 BUG、建设性意见或者撰写整体技术意见评估报告的矿工都将予以奖励。"),i.default.createElement("p",null,"此次公测最令人瞩目的就是关于投票机制的测试。众所周知，诸如 ETH、EOS，已成为了少数人的游戏，去中心化荡然无存。矿场、矿池、超级节点才是其中的玩家，大众已无法从中获得设定的收益，这无疑是一种畸形的生态。"),i.default.createElement("p",null,"为了解决这个问题，促进公链生态的健康发展，ETM一直在探索更好的解决方法，并取得了具有里程碑意义的重要成果。"),i.default.createElement("h2",{id:"quan-xin-de-tou-piao-ji-zhi"},i.default.createElement("a",{className:"header-anchor",href:"#quan-xin-de-tou-piao-ji-zhi","aria-hidden":"true"},"¶")," 全新的投票机制"),i.default.createElement("h3",{id:"0-dao-1-de-zhi-bian"},i.default.createElement("a",{className:"header-anchor",href:"#0-dao-1-de-zhi-bian","aria-hidden":"true"},"¶")," 0到1的质变"),i.default.createElement("p",null,"一成不变的榜单是社区失去活力的罪魁祸首，ETM 将矿机入选的形式由按排名选取固定的前 101 名，变为由得票占总票数的比例概率抽选，让排名 101 名以后的矿工也有机会入选。"),i.default.createElement("p",null,"P1 = 0 P2 = X/∑Xn"),i.default.createElement("h2",{id:"jiang-di-gua-tou-quan-chong"},i.default.createElement("a",{className:"header-anchor",href:"#jiang-di-gua-tou-quan-chong","aria-hidden":"true"},"¶")," 降低寡头权重"),i.default.createElement("p",null,"寡头在聚集大量财富后形成垄断地位，失衡的权重严重打击了大众的积极性。ETM 用上凸函数代替线性增长，甚至指数级增长的权益，让整个生态更为均衡。。"),i.default.createElement("p",null,"X = F(T·M) X：最终权益（票数） T：初始时间增益系数 M：初始权益（票数）"),i.default.createElement("h2",{id:"zeng-jia-san-hu-ji-hui"},i.default.createElement("a",{className:"header-anchor",href:"#zeng-jia-san-hu-ji-hui","aria-hidden":"true"},"¶")," 增加散户机会"),i.default.createElement("p",null,"散户或者投资新人，在一个稳定的系统中很难获得突出的收益。ETM 为小额投票人设定了时间系数的概念，小额权益随时间的变化线性增长，尾部用户也能够突出重围，获得成功。成功的概率随着时间而增加，而在受托人成功出块后减半，不影响大的生态平衡。"),i.default.createElement("p",null,"时间增益系数每日加 1 T=T+1 1≤T≤32"),i.default.createElement("p",null,"##UPoS 流程优化"),i.default.createElement("p",null,"它的工作原理如下：首先，通过上凸函数映射将所有投票人的权益转化为相应的票数；第二步，在每个出块周期选举出 101 个节点出块；第三步，被选中的矿工参与改进后的挖矿博弈（ETM挖矿比比特币挖矿更经济、去中心化程度更高）；最后一步，混沌排序算法随机选中下一位出块矿工，让安全性进一步提升。"),i.default.createElement("h2",{id:"zhu-yi-shi-xiang"},i.default.createElement("a",{className:"header-anchor",href:"#zhu-yi-shi-xiang","aria-hidden":"true"},"¶")," 注意事项"),i.default.createElement("ol",null,i.default.createElement("li",null,"ETM TestNet 2.0公测将于 2018 年 12 月 10 日中午 12:00 正式启动，2018 年 12 月 17 日 12:00 截止；"),i.default.createElement("li",null,"最新的部署文档地址：https://github.com/entanmo/etm/blob/testNet/README.zh-CN.md EnTanMo 官方电报群：https://t.me/entanmo"),i.default.createElement("li",null,"设备运行正常，连接正常时，能够直接看到 EnTanMo 系统的出块日志；"),i.default.createElement("li",null,"请确认个人 secret 已写入 config 文件，否则无法出块并获得相应收益；"),i.default.createElement("li",null,"若机器使用不同的端口，须将本机使用的端口号写进 config，修改第一行的 port，以确保每台矿机的联通;"),i.default.createElement("li",null,"测试钱包（wallet.entanmo.com）已随测试网络同时上线，使用 secret 登录，在 “区块生产” 版块，可查看个人相应的收益；"),i.default.createElement("li",null,"上述操作如有不明确的可参考最新的部署文档。")),i.default.createElement("p",null,"测试期间，除常规的交易测试、网络测试外，我们也会进行故障测试。由于区块链的冗余特性，这并不会影响到矿工的收益。测试结束后，我们将统计每名矿工的收益，并予以公示。"),i.default.createElement("p",null,"最后非常感谢所有参与此次测试的矿工对ETM的热情支持！"),i.default.createElement("p",null,"未来，ETM 团队将会持续专注于区块链底层技术的创新与开发，打造一个高效、均衡、互通、开放、安全，经过科学论证的区块链 3.0 平台。"))}}]),t}(i.default.Component);t.default=d},891:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h1",{id:"biao-ti"},i.default.createElement("a",{className:"header-anchor",href:"#biao-ti","aria-hidden":"true"},"¶")," 标题"),i.default.createElement("h2",{id:"biao-ti-2"},i.default.createElement("a",{className:"header-anchor",href:"#biao-ti-2","aria-hidden":"true"},"¶")," 标题"),i.default.createElement("p",null,"标签（空格分隔）： 未分类"),i.default.createElement("hr",null),i.default.createElement("p",null,"javarscript"),i.default.createElement("pre",null,i.default.createElement("code",{className:"language-javascript"},i.default.createElement("span",{className:"hljs-keyword"},"const")," a = ",i.default.createElement("span",{className:"hljs-number"},"1")," ; ",i.default.createElement("br",null),i.default.createElement("span",{className:"hljs-function"},i.default.createElement("span",{className:"hljs-keyword"},"function")," ",i.default.createElement("span",{className:"hljs-title"},"fn")," (",i.default.createElement("span",{className:"hljs-params"},"a"),")"),"{",i.default.createElement("br",null),"    ",i.default.createElement("span",{className:"hljs-built_in"},"console"),".log(a)",i.default.createElement("br",null),"}",i.default.createElement("br",null))))}}]),t}(i.default.Component);t.default=d},892:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(1),i=n(o),d=function(e){function t(e){
l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return u(t,e),c(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return i.default.createElement("div",{className:"doc"},i.default.createElement("h1",{id:"gong-ce-fu-li-etm-suo-cang-tou-piao-ji-li-ji-hua-zhen-han-qi-dong"},i.default.createElement("a",{className:"header-anchor",href:"#gong-ce-fu-li-etm-suo-cang-tou-piao-ji-li-ji-hua-zhen-han-qi-dong","aria-hidden":"true"},"¶")," 公测福利 | ETM锁仓投票激励计划震撼启动"),i.default.createElement("p",null,"千呼万唤始出来，今日中午12点，ETM主网已正式开启公测。"),i.default.createElement("p",null,"为感谢大家一路以来的关注与支持，回馈ETM社区的广大用户，现正式启动锁仓投票激励计划！"),i.default.createElement("p",null,"所有用户将基于自愿原则，参与ETM锁仓投票激励计划，并于锁仓期结束后获得相应ETM奖励。"),i.default.createElement("h2",{id:"huo-dong-shi-jian"},i.default.createElement("a",{className:"header-anchor",href:"#huo-dong-shi-jian","aria-hidden":"true"},"¶")," 活动时间"),i.default.createElement("p",null,"2018年12月10 日 12:00 到 2018年12月17日 20:00"),i.default.createElement("h2",{id:"can-yu-bu-zou"},i.default.createElement("a",{className:"header-anchor",href:"#can-yu-bu-zou","aria-hidden":"true"},"¶")," 参与步骤"),i.default.createElement("p",null,"公众号后台回复“锁仓”或点击菜单【ETM钱包】-【锁仓流程】，获取操作流程指南。"),i.default.createElement("h2",{id:"jiang-li-gui-ze"},i.default.createElement("a",{className:"header-anchor",href:"#jiang-li-gui-ze","aria-hidden":"true"},"¶")," 奖励规则"),i.default.createElement("p",null,"1.每锁定1天，奖励20 ETM。 2.锁定7天，并参与投票的用户，将额外获赠 60 ETM。 3.为鼓励社区广泛参与，此次参与活动的锁仓收益不受锁仓金额、锁仓次数影响。"),i.default.createElement("h2",{id:"huo-dong-shuo-ming"},i.default.createElement("a",{className:"header-anchor",href:"#huo-dong-shuo-ming","aria-hidden":"true"},"¶")," 活动说明"),i.default.createElement("p",null,"1.锁仓期（12月10 日 - 12月17日）结束后，我们将在1-2个工作日内，将锁定ETM和参与投票的奖励发放至用户钱包。 2.请妥善保管个人钱包的地址和主密码，以免锁仓结束后无法接收锁仓奖励。因个人遗失造成的损失，ETM不承担任何相关责任。"))}}]),t}(i.default.Component);t.default=d}});