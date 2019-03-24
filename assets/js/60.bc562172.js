(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{96:function(e,t,a){"use strict";a.r(t);var r=a(3),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"三大框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三大框架","aria-hidden":"true"}},[e._v("#")]),e._v(" 三大框架")]),e._v(" "),a("h2",{attrs:{id:"现代前端框架概论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现代前端框架概论","aria-hidden":"true"}},[e._v("#")]),e._v(" 现代前端框架概论")]),e._v(" "),a("p",[e._v("现在前端框架非常多了，如果让我们回答 “为什么要用前端框架” 这个问题，你觉得是下面这些原因吗？")]),e._v(" "),a("ul",[a("li",[e._v("组件化。")]),e._v(" "),a("li",[e._v("拥有强大的开源社区。")]),e._v(" "),a("li",[e._v("拥有大量第三方库解决大部分问题。")]),e._v(" "),a("li",[e._v("拥有大量现成的第三方组件。")]),e._v(" "),a("li",[e._v("拥有浏览器拓展/工具帮助快速 debug。")]),e._v(" "),a("li",[e._v("友好的支持单页应用。")])]),e._v(" "),a("p",[e._v("不，这些都不是根本原因，最多算前端框架的营销手段。作者给出的最根本原因是：")]),e._v(" "),a("p",[a("strong",[e._v("解决 UI 与状态同步的难题。")])]),e._v(" "),a("p",[e._v("作者假设了一个没有前端框架的项目，就像 Jquery 时代，我们需要手动同步状态与 UI。就像下面的代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("addAddress(address) {\n  // state logic\n  const id = String(Dat.now())\n  this.state = this.state.concat({ address, id })\n\n  // UI logic\n  this.updateHelp()\n\n  const li = document.createElement('li')\n  const span = document.createElement('span')\n  const del = document.createElement('a')\n  span.innerText = address\n  del.innerText = 'delete'\n  del.setAttribute('data-delete-id', id)\n\n  this.ul.appendChild(li)\n  li.appendChild(del)\n  li.appendChild(span)\n  this.items[id] = li\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])]),a("p",[e._v("首先更新效率是个问题，最大问题还是同步问题。试想多次与服务器交互，在同步过程中漏执行了一步，会导致之后的 UI 与状态逐渐脱节。")]),e._v(" "),a("p",[e._v("因为我们只能一步步同步状态与 UI，却无法保证每个瞬间 UI 与状态是完全同步的，任何一个疏忽都会导致 UI 与状态脱节，而我们除了不断检查 UI 与数据是否对应，毫无办法。")]),e._v(" "),a("p",[e._v("所以现代框架最重要的帮助是保持 UI 与状态的同步。")]),e._v(" "),a("h3",{attrs:{id:"如何做到"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何做到","aria-hidden":"true"}},[e._v("#")]),e._v(" 如何做到")]),e._v(" "),a("p",[e._v("有两种思路：")]),e._v(" "),a("ol",[a("li",[e._v("组件级重渲染：比如 React，当状态改版后，映射出改变后的虚拟 DOM，最终改变当前组件映射的真实 DOM，这个过程被称为 reconciliation。")]),e._v(" "),a("li",[e._v("监听修改：比如 Angluar 和 Vue.js，状态改变直接触发对应 DOM 节点中 value 值的变化。")])]),e._v(" "),a("p",[e._v("这里稍微说明下，React 虽然是整体渲染，但在虚拟 DOM 作用下，效率不比 observable 低。observable 在值不能完整映射 UI 时，也需要做更大范围的 rerender。另外，Vue.js 与 Angluar 也早已采用了虚拟 DOM。")]),e._v(" "),a("p",[e._v("这三个框架已经融会贯通，作者提到的两种思路现在已经是一种混合技术了。")]),e._v(" "),a("h3",{attrs:{id:"那-web-components-呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那-web-components-呢？","aria-hidden":"true"}},[e._v("#")]),e._v(" 那 web components 呢？")]),e._v(" "),a("p",[e._v("大家经常会拿 React, Angluar, Vue.js 与 "),a("a",{attrs:{href:"https://www.webcomponents.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("web components"),a("OutboundLink")],1),e._v(" 做比较，可 web components 最大的问题就是，没有解决 UI 与状态同步。")]),e._v(" "),a("p",[e._v("web components 只提供了模版语法，自定义标签解决 html 的问题，并没有给出一套状态与 UI 同步的方法。")]),e._v(" "),a("p",[e._v("所以就算使用 web components，我们可能还需要一个框架做 UI 同步，比如 Vue.js 或者 "),a("a",{attrs:{href:"https://stenciljs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("stenciljs"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[e._v("作者还提供了一段简短的 UI 状态同步实例，这里略过。")]),e._v(" "),a("p",[e._v("最后给出了四点总结：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("现代 js 框架主要在解决 UI 与状态同步的问题。")])]),e._v(" "),a("li",[e._v("仅使用原生 js 难以写出复杂、高效、又容易维护的 UI 代码。")]),e._v(" "),a("li",[e._v("Web components 没有解决这个主要问题。")]),e._v(" "),a("li",[e._v("虽然使用虚拟 DOM 库很容易造一个解决问题的框架，但不建议你真的这么做！")])]),e._v(" "),a("h2",{attrs:{id:"_3-精读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-精读","aria-hidden":"true"}},[e._v("#")]),e._v(" 3 精读")]),e._v(" "),a("p",[e._v("作者的核心观点是，现代前端框架主要解决 UI 与状态同步的问题，这是毫无疑问的，也提到了包括 web components 也依然没有解决这个问题。")]),e._v(" "),a("p",[e._v("这可能是 web 开发最核心的问题了。")]),e._v(" "),a("p",[e._v("最初开发者的精力都在前端标准化上，诞生了一系列解决标准化问题的库，最有知名度的是 jquery。当前端进入 react 时代后，可以看到精力从解决标准化到解决 web 规范与实践的冲突，这个冲突正是作者说的问题。")]),e._v(" "),a("h3",{attrs:{id:"前端三剑客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端三剑客","aria-hidden":"true"}},[e._v("#")]),e._v(" 前端三剑客")]),e._v(" "),a("p",[e._v("问题就出现在 html、js、css 三者分离上。")]),e._v(" "),a("p",[e._v("html、css、js 各是一套独立的体系，但 js 又能同时控制 html 与 css，"),a("strong",[e._v("那为了解决同步问题，最好将控制权全部交给 js")]),e._v("。")]),e._v(" "),a("p",[e._v("这样 web components 的问题也就好理解了，web components 解决的是 html 问题，注定与 js 无关。")]),e._v(" "),a("p",[e._v("html 官方规范估计很难出现现代框架的设计了，因为官方设计中前端三剑客是相互分离的方案，为了解决现阶段前端框架的问题，html 必须由 js 完全接管，这几乎就是 jsx，或者支持 template 语法的 html，可这与最初网页设计思路是违背的。")]),e._v(" "),a("p",[e._v("html 是独立的，甚至可以不依赖 js 运行，这天然导致了 UI 与状态同步这个难题。")]),e._v(" "),a("h3",{attrs:{id:"为什么一定要用-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么一定要用-js","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么一定要用 js")]),e._v(" "),a("p",[e._v("html 不依赖 js 的设计可能已经跟不上前端发展步伐了，也许 jsx 或者 template 才是真正的未来。")]),e._v(" "),a("p",[e._v("诚然，html 现在的设计可以在不支持 js 的浏览器执行，但就在最近，所有现代浏览器都支持了 service worker，它是凌驾于 html 执行时机之上的 js 脚本，甚至可以拦截 html 请求。一个不支持 js 的浏览器，可能也无法支持 service worker，禁用 js 的坚持可能只剩下安全性保护。")]),e._v(" "),a("p",[e._v("而实际上现代 web 页面都使用了 js 完全主导网页渲染，所以这已经从技术问题上升到了社会问题，如今禁用 js 的浏览器还有多少网页可以正常访问？除了某些超大型网站对禁用 js 状态做了特殊优化以外，现在几乎没有前端项目会考虑禁用 js 的情况了，因为我们不会假设 React、Angluar、Vue.js 框架代码无法运行。")]),e._v(" "),a("h3",{attrs:{id:"所以为什么不融合-html-与-js-呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所以为什么不融合-html-与-js-呢？","aria-hidden":"true"}},[e._v("#")]),e._v(" 所以为什么不融合 html 与 js 呢？")]),e._v(" "),a("p",[e._v("既然事实上 UI 已经与 js 绑定了，那 w3c 为何不将 jsx 或者 template 列为标准呢？也许为了向前兼容，规范永远也迈不出这一步吧。")]),e._v(" "),a("p",[e._v("幸运的是，这并不妨碍现代前端框架的大量普及，而且势不可挡。")]),e._v(" "),a("h2",{attrs:{id:"_4-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 4 总结")]),e._v(" "),a("p",[e._v("也许 UI 与状态同步的问题是前端发展的最大阻力，虽然现代化框架已经解决了这个问题，但 w3c 标准却一直无法往这个方向发力，导致 web 的下一个发展方向难以依靠标准规范来推动。前端日新月异的发展，很大一部分是规范的发展带来的，而现在我们进入了一个由工业化领导的时代，规范很可能永远也跟不上来，随之而来的是工业化社区也难以做进一步突破。")]),e._v(" "),a("p",[e._v("前端不仅是 web，或者也许下一个突破并不在 web，而是 ar/vr 或者下一个人机交互场景。同样，web 也不仅是前端三剑客，如果认为 React、Angluar、Vue.js 带来的工业化规范就是新的规范，前端才有动力向后发展，比如基于虚拟 DOM 的新框架、新语言。")]),e._v(" "),a("p",[e._v("所以笔者推导出现代前端开发的本质，是将 js、html 的平行关系变成了 js 包含 html 的关系，正如上面所说，这可能背离了 w3c 的初衷，但这就是现在的潮流。")]),e._v(" "),a("p",[e._v("最后总结一下观点：")]),e._v(" "),a("ol",[a("li",[e._v("也是原作者的，"),a("strong",[e._v("现代 js 框架主要在解决 UI 与状态同步的问题。")])]),e._v(" "),a("li",[e._v("传统的前端三剑客正面临着进一步发展乏力的危机。")]),e._v(" "),a("li",[e._v("现代前端框架正在告诉我们新的三剑客：js（虚拟 dom、虚拟 css）。")])]),e._v(" "),a("h2",{attrs:{id:"mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm","aria-hidden":"true"}},[e._v("#")]),e._v(" mvvm")]),e._v(" "),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),a("h2",{attrs:{id:"scort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scort","aria-hidden":"true"}},[e._v("#")]),e._v(" scort")]),e._v(" "),a("h2",{attrs:{id:"组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通信","aria-hidden":"true"}},[e._v("#")]),e._v(" 组件通信")]),e._v(" "),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[e._v("#")]),e._v(" 事件")]),e._v(" "),a("h2",{attrs:{id:"shaddom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shaddom","aria-hidden":"true"}},[e._v("#")]),e._v(" shaddom")]),e._v(" "),a("h2",{attrs:{id:"webcomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webcomponent","aria-hidden":"true"}},[e._v("#")]),e._v(" webcomponent")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/entry/5a064a716fb9a045117099ad",target:"_blank",rel:"noopener noreferrer"}},[e._v("## 不吹不黑聊聊前端框架"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("css 解决方案")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b39e63ae51d4562aa017c81#heading-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.im/post/5b39e63ae51d4562aa017c81#heading-5"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b39e63ae51d4562aa017c81",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://juejin.im/post/5b39e63ae51d4562aa017c81"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5ac5fd7f5188257cc20d854e#heading-14",target:"_blank",rel:"noopener noreferrer"}},[e._v("css module vue"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/37095662",target:"_blank",rel:"noopener noreferrer"}},[e._v("React Fiber架构"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/45510072",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("那么前端框架到底解决了什么问题？")]),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://overreacted.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dan Abramov"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24475845",target:"_blank",rel:"noopener noreferrer"}},[e._v("250行实现一个简单的MVVM"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25558715",target:"_blank",rel:"noopener noreferrer"}},[e._v("双向绑定的简单实现--构建利用Proxy和Reflect实现的微框架(基于ES6)"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"深入理解proxy-及-使用proxy实现vue数据双向绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入理解proxy-及-使用proxy实现vue数据双向绑定","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/10306793.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解Proxy 及 使用Proxy实现vue数据双向绑定"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"单向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流","aria-hidden":"true"}},[e._v("#")]),e._v(" 单向数据流")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012861862",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://segmentfault.com/a/1190000012861862"),a("OutboundLink")],1),e._v("nexttick vue")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Ma63d/vue-analysis/issues/6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue源码详解之nextTick：MutationObserver只是浮云，microtask才是核心！"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=s.exports}}]);