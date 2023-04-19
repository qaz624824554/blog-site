import{r,o as t,c as n,a as e,b as s,F as c,e as o}from"./app.7d2acf8d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=o('<h2 id="dsl-\u521D\u8BC6" tabindex="-1"><a class="header-anchor" href="#dsl-\u521D\u8BC6" aria-hidden="true">#</a> DSL \u521D\u8BC6</h2><p>DSL \u5373\u300CDomain Specific Language\u300D\uFF0C\u4E2D\u6587\u4E00\u822C\u8BD1\u4E3A\u300C\u9886\u57DF\u7279\u5B9A\u8BED\u8A00\u300D\uFF0C\u4E00\u79CD\u4E3A\u7279\u5B9A\u9886\u57DF\u8BBE\u8BA1\u7684\uFF0C\u5177\u6709\u53D7\u9650\u8868\u8FBE\u6027\u7684\u7F16\u7A0B\u8BED\u8A00\u3002</p><br><h2 id="\u5916\u90E8dsl" tabindex="-1"><a class="header-anchor" href="#\u5916\u90E8dsl" aria-hidden="true">#</a> \u5916\u90E8DSL</h2><p>\u5B83\u662F\u4E00\u79CD\u72EC\u7ACB\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u9700\u8981\u4ECE\u89E3\u6790\u5668\u5F00\u59CB\u5B9E\u73B0\u81EA\u5DF1\u7684\u7F16\u8BD1\u5DE5\u5177\uFF0C\u5B9E\u73B0\u6210\u672C\u8F83\u9AD8\u3002\u4F46\u5B83\u7684\u8BED\u6CD5\u7684\u7075\u6D3B\u6027\u66F4\u9AD8\uFF0C\u66F4\u5BB9\u6613\u8FBE\u5230\u7528\u6237\u7684\u8868\u73B0\u529B\u9700\u6C42\u3002</p><blockquote><p>GPPL \u5373 \u300CGeneral Purpose Programming Language\u300D\uFF0C\u53C8\u79F0\u901A\u7528\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4F8B\u5982\u6211\u4EEC\u5E38\u7528\u7684 JavaScript\uFF0C\u5B83\u4EEC\u88AB\u8BBE\u8BA1\u7528\u6765\u89E3\u51B3\u901A\u7528\u7F16\u7A0B\u95EE\u9898\u3002</p></blockquote><p>\u524D\u7AEF\u5E38\u7528\u7684\u6A21\u677F\u5F15\u64CE\u5982 mustache \u4EE5\u53CA React\u3001Vue \u652F\u6301\u7684 JSX \u8BED\u6CD5\u90FD\u5C5E\u4E8E\u5916\u90E8 DSL\u3002</p><br><h2 id="\u5185\u90E8dsl" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8dsl" aria-hidden="true">#</a> \u5185\u90E8DSL</h2><p>\u5B83\u662F\u5EFA\u7ACB\u5728\u5176\u5B83\u5BBF\u4E3B\u8BED\u8A00\u4E4B\u4E0A\uFF08\u4E00\u822C\u4E3A GPPL\uFF09\u7684\u7279\u6B8A DSL\uFF0C\u5B83\u4E0E\u5BBF\u4E3B\u8BED\u8A00\u5171\u4EAB\u7F16\u8BD1\u4E0E\u8C03\u8BD5\u5DE5\u5177\u7B49\u57FA\u7840\u8BBE\u65BD\uFF0C\u5B66\u4E60\u6210\u672C\u66F4\u4F4E\uFF0C\u4E5F\u66F4\u5BB9\u6613\u88AB\u96C6\u6210\u3002\u4ED6\u5728\u8BED\u6CD5\u4E0A\u4E0E\u5BBF\u4E3B\u8BED\u8A00\u540C\u6E90\uFF0C\u4F46\u5728\u8FD0\u884C\u65F6\u4E0A\u9700\u8981\u505A\u989D\u5916\u7684\u5C01\u88C5\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u5C06\u5185\u90E8DSL\u89C6\u4E3A\u9488\u5BF9\u7279\u5B9A\u4EFB\u52A1\u7684\u7279\u6B8A\u63A5\u53E3\u5C01\u88C5\u98CE\u683C\uFF0C\u6BD4\u5982 jQuery \u5C31\u53EF\u4EE5\u8BA4\u4E3A\u662F\u9488\u5BF9 DOM \u64CD\u4F5C\u7684\u4E00\u79CD\u5185\u90E8 DSL\u3002</p><p>\u5185\u90E8 DSL \u7684\u8BED\u6CD5\u7075\u6D3B\u5EA6\u548C\u8BED\u6CD5\u566A\u97F3\uFF08syntactic noise\uFF09\u5F80\u5F80\u53D6\u51B3\u4E8E\u5BBF\u4E3B\u8BED\u8A00\u7684\u9009\u62E9\u3002</p><h2 id="\u5185\u90E8-dsl-\u98CE\u683C\u6307\u5357-javascript-\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u5185\u90E8-dsl-\u98CE\u683C\u6307\u5357-javascript-\u63CF\u8FF0" aria-hidden="true">#</a> \u5185\u90E8 DSL \u98CE\u683C\u6307\u5357\uFF08JavaScript \u63CF\u8FF0\uFF09</h2>',13),p={href:"https://imgtu.com/i/5WWfr6",target:"_blank",rel:"noopener noreferrer"},l=e("img",{src:"https://z3.ax1x.com/2021/10/24/5WWfr6.png",alt:"5WWfr6.png"},null,-1);function u(_,m){const a=r("ExternalLinkIcon");return t(),n(c,null,[h,e("p",null,[e("a",p,[l,s(a)])])],64)}var S=i(d,[["render",u]]);export{S as default};
