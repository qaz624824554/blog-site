import{r as o,o as r,c as d,a as e,b as i,F as n,d as t,e as c}from"./app.06e41ebd.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const p={},s=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),m=e("p",null,[e("strong",null,[e("code",null,"Performance")]),t(" \u63A5\u53E3\u53EF\u4EE5\u83B7\u53D6\u5230\u5F53\u524D\u9875\u9762\u4E2D\u4E0E\u6027\u80FD\u76F8\u5173\u7684\u4FE1\u606F\u3002")],-1),h=t("\u8BE5\u7C7B\u578B\u7684\u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528\u53EA\u8BFB\u5C5E\u6027 "),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/performance_property",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"Window.performance",-1),f=t(" \u6765\u83B7\u5F97\u3002"),_=c('<h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h2><p><em><code>Performance</code> \u63A5\u53E3\u6CA1\u6709\u7EE7\u627F\u4EFB\u4F55\u5C5E\u6027\u3002</em></p><h3 id="timing" tabindex="-1"><a class="header-anchor" href="#timing" aria-hidden="true">#</a> timing</h3><p>\u5305\u542B\u5EF6\u8FDF\u76F8\u5173\u7684\u6027\u80FD\u4FE1\u606F\u3002\u4ECE\u8F93\u5165url\u5230\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u9875\u9762\u7684\u5168\u8FC7\u7A0B\u65F6\u95F4\u7EDF\u8BA1\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2APerformanceTiming\u5BF9\u8C61\uFF0C\u5355\u4F4D\u5747\u4E3A\u6BEB\u79D2</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_13_xmP1B8.png" alt="2022_03_13_xmP1B8"></p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_13_de600p.jpg" alt="2022_03_13_de600p"></p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_13_lOGf5n.png" alt="2022_03_13_lOGf5n"></p><p>\u6309\u89E6\u53D1\u987A\u5E8F\u6392\u5217\u6240\u6709\u5C5E\u6027\uFF1A</p><ul><li><p><code>navigationStart</code>:\u5728\u540C\u4E00\u4E2A\u6D4F\u89C8\u5668\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u524D\u4E00\u4E2A\u7F51\u9875\uFF08\u4E0E\u5F53\u524D\u9875\u9762\u4E0D\u4E00\u5B9A\u540C\u57DF\uFF09unload \u7684\u65F6\u95F4\u6233\uFF0C\u5982\u679C\u65E0\u524D\u4E00\u4E2A\u7F51\u9875 unload \uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49\u3002</p></li><li><p><code>unloadEventStart</code>:\u524D\u4E00\u4E2A\u7F51\u9875\uFF08\u4E0E\u5F53\u524D\u9875\u9762\u540C\u57DF\uFF09unload \u7684\u65F6\u95F4\u6233\uFF0C\u5982\u679C\u65E0\u524D\u4E00\u4E2A\u7F51\u9875 unload \u6216\u8005\u524D\u4E00\u4E2A\u7F51\u9875\u4E0E\u5F53\u524D\u9875\u9762\u4E0D\u540C\u57DF\uFF0C\u5219\u503C\u4E3A 0\u3002</p></li><li><p><code>unloadEventEnd</code>:\u548C unloadEventStart \u76F8\u5BF9\u5E94\uFF0C\u8FD4\u56DE\u524D\u4E00\u4E2A\u7F51\u9875 unload \u4E8B\u4EF6\u7ED1\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u7684\u65F6\u95F4\u6233\u3002</p></li><li><p><code>redirectStart</code>:\u7B2C\u4E00\u4E2A HTTP \u91CD\u5B9A\u5411\u53D1\u751F\u65F6\u7684\u65F6\u95F4\u3002\u6709\u8DF3\u8F6C\u4E14\u662F\u540C\u57DF\u540D\u5185\u7684\u91CD\u5B9A\u5411\u624D\u7B97\uFF0C\u5426\u5219\u503C\u4E3A 0\u3002</p></li><li><p><code>redirectEnd</code>:\u6700\u540E\u4E00\u4E2A HTTP \u91CD\u5B9A\u5411\u5B8C\u6210\u65F6\u7684\u65F6\u95F4\u3002\u6709\u8DF3\u8F6C\u4E14\u662F\u540C\u57DF\u540D\u5185\u7684\u91CD\u5B9A\u5411\u624D\u7B97\uFF0C\u5426\u5219\u503C\u4E3A 0\u3002</p></li><li><p><code>fetchStart</code>:\u6D4F\u89C8\u5668\u51C6\u5907\u597D\u4F7F\u7528 HTTP \u8BF7\u6C42\u6293\u53D6\u6587\u6863\u7684\u65F6\u95F4\uFF0C\u8FD9\u53D1\u751F\u5728\u68C0\u67E5\u672C\u5730\u7F13\u5B58\u4E4B\u524D\u3002</p></li><li><p><code>domainLookupStart</code>:DNS \u57DF\u540D\u67E5\u8BE2\u5F00\u59CB\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u672C\u5730\u7F13\u5B58\uFF08\u5373\u65E0 DNS \u67E5\u8BE2\uFF09\u6216\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49\u3002</p></li><li><p><code>domainLookupEnd</code>:DNS \u57DF\u540D\u67E5\u8BE2\u5B8C\u6210\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u4F7F\u7528\u4E86\u672C\u5730\u7F13\u5B58\uFF08\u5373\u65E0 DNS \u67E5\u8BE2\uFF09\u6216\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49\u3002</p></li><li><p><code>connectStart</code>:HTTP\uFF08TCP\uFF09 \u5F00\u59CB\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u662F\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49,\u5982\u679C\u5728\u4F20\u8F93\u5C42\u53D1\u751F\u4E86\u9519\u8BEF\u4E14\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5219\u8FD9\u91CC\u663E\u793A\u7684\u662F\u65B0\u5EFA\u7ACB\u7684\u8FDE\u63A5\u5F00\u59CB\u7684\u65F6\u95F4\u3002</p></li><li><p><code>connectEnd</code>:HTTP\uFF08TCP\uFF09 \u5B8C\u6210\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF08\u5B8C\u6210\u63E1\u624B\uFF09\uFF0C\u5982\u679C\u662F\u6301\u4E45\u8FDE\u63A5\uFF0C\u5219\u4E0E fetchStart \u503C\u76F8\u7B49,\u5982\u679C\u5728\u4F20\u8F93\u5C42\u53D1\u751F\u4E86\u9519\u8BEF\u4E14\u91CD\u65B0\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u5219\u8FD9\u91CC\u663E\u793A\u7684\u662F\u65B0\u5EFA\u7ACB\u7684\u8FDE\u63A5\u5B8C\u6210\u7684\u65F6\u95F4\u3002</p><p>**\u6CE8\u610F:**\u8FD9\u91CC\u63E1\u624B\u7ED3\u675F\uFF0C\u5305\u62EC\u5B89\u5168\u8FDE\u63A5\u5EFA\u7ACB\u5B8C\u6210\u3001SOCKS \u6388\u6743\u901A\u8FC7\u3002</p></li><li><p><code>secureConnectionStart</code>:HTTPS \u8FDE\u63A5\u5F00\u59CB\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u4E0D\u662F\u5B89\u5168\u8FDE\u63A5\uFF0C\u5219\u503C\u4E3A 0\u3002</p></li><li><p><code>requestStart</code>:HTTP \u8BF7\u6C42\u8BFB\u53D6\u771F\u5B9E\u6587\u6863\u5F00\u59CB\u7684\u65F6\u95F4\uFF08\u5B8C\u6210\u5EFA\u7ACB\u8FDE\u63A5\uFF09\uFF0C\u5305\u62EC\u4ECE\u672C\u5730\u8BFB\u53D6\u7F13\u5B58,\u8FDE\u63A5\u9519\u8BEF\u91CD\u8FDE\u65F6\uFF0C\u8FD9\u91CC\u663E\u793A\u7684\u4E5F\u662F\u65B0\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\u3002</p></li><li><p><code>responseStart</code>:HTTP \u5F00\u59CB\u63A5\u6536\u54CD\u5E94\u7684\u65F6\u95F4\uFF08\u83B7\u53D6\u5230\u7B2C\u4E00\u4E2A\u5B57\u8282\uFF09\uFF0C\u5305\u62EC\u4ECE\u672C\u5730\u8BFB\u53D6\u7F13\u5B58\u3002</p></li><li><p><code>responseEnd</code>:HTTP \u54CD\u5E94\u5168\u90E8\u63A5\u6536\u5B8C\u6210\u7684\u65F6\u95F4\uFF08\u83B7\u53D6\u5230\u6700\u540E\u4E00\u4E2A\u5B57\u8282\uFF09\uFF0C\u5305\u62EC\u4ECE\u672C\u5730\u8BFB\u53D6\u7F13\u5B58\u3002</p></li><li><p><code>domLoading</code>:\u5F00\u59CB\u89E3\u6790\u6E32\u67D3 DOM \u6811\u7684\u65F6\u95F4\uFF0C\u6B64\u65F6 Document.readyState \u53D8\u4E3A loading\uFF0C\u5E76\u5C06\u629B\u51FA readystatechange \u76F8\u5173\u4E8B\u4EF6\u3002</p></li><li><p><code>domInteractive</code>:\u5B8C\u6210\u89E3\u6790 DOM \u6811\u7684\u65F6\u95F4\uFF0CDocument.readyState \u53D8\u4E3A interactive\uFF0C\u5E76\u5C06\u629B\u51FA readystatechange \u76F8\u5173\u4E8B\u4EF6\u3002</p><p>**\u6CE8\u610F:**\u53EA\u662F DOM \u6811\u89E3\u6790\u5B8C\u6210\uFF0C\u8FD9\u65F6\u5019\u5E76\u6CA1\u6709\u5F00\u59CB\u52A0\u8F7D\u7F51\u9875\u5185\u7684\u8D44\u6E90\u3002</p></li><li><p><code>domContentLoadedEventStart</code>:DOM \u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u7F51\u9875\u5185\u8D44\u6E90\u52A0\u8F7D\u5F00\u59CB\u7684\u65F6\u95F4,\u6587\u6863\u53D1\u751F DOMContentLoaded\u4E8B\u4EF6\u7684\u65F6\u95F4\u3002</p></li><li><p><code>domContentLoadedEventEnd</code>:DOM \u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u7F51\u9875\u5185\u8D44\u6E90\u52A0\u8F7D\u5B8C\u6210\u7684\u65F6\u95F4\uFF08\u5982 JS \u811A\u672C\u52A0\u8F7D\u6267\u884C\u5B8C\u6BD5\uFF09\uFF0C\u6587\u6863\u7684DOMContentLoaded \u4E8B\u4EF6\u7684\u7ED3\u675F\u65F6\u95F4\u3002</p></li><li><p><code>domComplete</code>:DOM \u6811\u89E3\u6790\u5B8C\u6210\uFF0C\u4E14\u8D44\u6E90\u4E5F\u51C6\u5907\u5C31\u7EEA\u7684\u65F6\u95F4\uFF0CDocument.readyState \u53D8\u4E3A complete\uFF0C\u5E76\u5C06\u629B\u51FA readystatechange \u76F8\u5173\u4E8B\u4EF6\u3002</p></li><li><p><code>loadEventStart</code>:load \u4E8B\u4EF6\u53D1\u9001\u7ED9\u6587\u6863\uFF0C\u4E5F\u5373 load \u56DE\u8C03\u51FD\u6570\u5F00\u59CB\u6267\u884C\u7684\u65F6\u95F4\u3002</p></li><li><p><code>loadEventEnd</code>:load \u4E8B\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u7684\u65F6\u95F4\u3002</p></li></ul><p><strong>\u5E38\u7528\u8BA1\u7B97\uFF1A</strong></p><ul><li>DNS\u67E5\u8BE2\u8017\u65F6 \uFF1AdomainLookupEnd - domainLookupStart</li><li>TCP\u94FE\u63A5\u8017\u65F6 \uFF1AconnectEnd - connectStart</li><li>request\u8BF7\u6C42\u8017\u65F6 \uFF1AresponseEnd - requestStart</li><li>\u89E3\u6790dom\u6811\u8017\u65F6 \uFF1A domComplete - domInteractive</li><li>\u767D\u5C4F\u65F6\u95F4 \uFF1AresponseStart - navigationStart</li><li>domready\u65F6\u95F4(\u7528\u6237\u53EF\u64CD\u4F5C\u65F6\u95F4\u8282\u70B9) \uFF1AdomContentLoadedEventEnd - navigationStart</li><li>onload\u65F6\u95F4(\u603B\u4E0B\u8F7D\u65F6\u95F4) \uFF1AloadEventEnd - navigationStart</li></ul><h3 id="navigation" tabindex="-1"><a class="header-anchor" href="#navigation" aria-hidden="true">#</a> navigation</h3><p>\u65E8\u5728\u544A\u8BC9\u5F00\u53D1\u8005\u5F53\u524D\u9875\u9762\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u5BFC\u822A\u8FC7\u6765\u7684\uFF0C\u53EA\u6709\u4E24\u4E2A\u5C5E\u6027\uFF1A<code>type</code>\uFF0C<code>redirectCount</code>\u3002</p><p>**type:**\u6807\u5FD7\u9875\u9762\u5BFC\u822A\u7C7B\u578B,\u503C\u5982\u4E0B\u8868\uFF1A</p><table><thead><tr><th>type\u5E38\u6570</th><th>\u679A\u4E3E\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>TYPE_NAVIGATE</td><td>0</td><td>\u666E\u901A\u8FDB\u5165\uFF0C\u5305\u62EC\uFF1A\u70B9\u51FB\u94FE\u63A5\u3001\u5728\u5730\u5740\u680F\u4E2D\u8F93\u5165 URL\u3001\u8868\u5355\u63D0\u4EA4\u3001\u6216\u8005\u901A\u8FC7\u9664\u4E0B\u8868\u4E2D TYPE_RELOAD \u548C TYPE_BACK_FORWARD \u7684\u65B9\u5F0F\u521D\u59CB\u5316\u811A\u672C\u3002</td></tr><tr><td>TYPE_RELOAD</td><td>1</td><td>\u901A\u8FC7\u5237\u65B0\u8FDB\u5165\uFF0C\u5305\u62EC\uFF1A\u6D4F\u89C8\u5668\u7684\u5237\u65B0\u6309\u94AE\u3001\u5FEB\u6377\u952E\u5237\u65B0\u3001location.reload()\u7B49\u65B9\u6CD5\u3002</td></tr><tr><td>TYPE_BACK_FORWARD</td><td>2</td><td>\u901A\u8FC7\u64CD\u4F5C\u5386\u53F2\u8BB0\u5F55\u8FDB\u5165\uFF0C\u5305\u62EC\uFF1A\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u540E\u9000\u6309\u94AE\u3001\u5FEB\u6377\u952E\u64CD\u4F5C\u3001history.forward()\u3001history.back()\u3001history.go(num)\u3002</td></tr><tr><td>TYPE_UNDEFINED</td><td>255</td><td>\u5176\u4ED6\u975E\u4EE5\u4E0A\u7C7B\u578B\u7684\u65B9\u5F0F\u8FDB\u5165\u3002</td></tr></tbody></table><p>**redirectCount:**\u8868\u793A\u5230\u8FBE\u6700\u7EC8\u9875\u9762\u524D\uFF0C\u91CD\u5B9A\u5411\u7684\u6B21\u6570\uFF0C\u4F46\u662F\u8FD9\u4E2A\u63A5\u53E3\u6709\u540C\u6E90\u7B56\u7565\u9650\u5236\uFF0C\u5373\u4EC5\u80FD\u68C0\u6D4B\u540C\u6E90\u7684\u91CD\u5B9A\u5411\u3002</p><blockquote><p>**\u6CE8\u610F\uFF1A**\u6240\u6709\u524D\u7AEF\u6A21\u62DF\u7684\u91CD\u5B9A\u5411\u90FD\u65E0\u6CD5\u7EDF\u8BA1\u5230\uFF0C\u56E0\u4E3A\u4E0D\u5C5E\u4E8EHTTP\u91CD\u5B9A\u5411</p></blockquote><h3 id="memory" tabindex="-1"><a class="header-anchor" href="#memory" aria-hidden="true">#</a> memory</h3><p>\u63CF\u8FF0\u5185\u5B58\u591A\u5C11\uFF0C\u662F\u5728Chrome\u4E2D\u6DFB\u52A0\u7684\u4E00\u4E2A\u975E\u6807\u51C6\u5C5E\u6027\u3002</p><ul><li><code>jsHeapSizeLimit</code>: \u5185\u5B58\u5927\u5C0F\u9650\u5236</li><li><code>totalJSHeapSize</code>: \u53EF\u4F7F\u7528\u7684\u5185\u5B58</li><li><code>usedJSHeapSize</code>: JS\u5BF9\u8C61(\u5305\u62ECV8\u5F15\u64CE\u5185\u90E8\u5BF9\u8C61)\u5360\u7528\u7684\u5185\u5B58\uFF0C\u4E0D\u80FD\u5927\u4E8EtotalJSHeapSize\uFF0C\u5982\u679C\u5927\u4E8E\uFF0C\u6709\u53EF\u80FD\u51FA\u73B0\u4E86\u5185\u5B58\u6CC4\u6F0F\u3002</li></ul><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="getentries" tabindex="-1"><a class="header-anchor" href="#getentries" aria-hidden="true">#</a> getEntries()</h3><p>\u83B7\u53D6\u6240\u6709\u8D44\u6E90\u8BF7\u6C42\u7684\u65F6\u95F4\u6570\u636E,\u8FD9\u4E2A\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6309startTime\u6392\u5E8F\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u6570\u7EC4\u6210\u5458\u9664\u4E86\u4F1A\u81EA\u52A8\u6839\u636E\u6240\u8BF7\u6C42\u8D44\u6E90\u7684\u53D8\u5316\u800C\u6539\u53D8\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u7528mark(),measure()\u65B9\u6CD5\u81EA\u5B9A\u4E49\u6DFB\u52A0\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_13_mEoMw0.png" alt="2022_03_13_mEoMw0"></p><p>\u8BE5\u5BF9\u8C61\u7684\u5C5E\u6027\u4E2D\u9664\u4E86\u5305\u542B\u8D44\u6E90\u52A0\u8F7D\u65F6\u95F4\u8FD8\u6709\u4EE5\u4E0B\u4E94\u4E2A\u5C5E\u6027\u3002</p><ul><li><code>name</code>\uFF1A\u8D44\u6E90\u540D\u79F0\uFF0C\u662F\u8D44\u6E90\u7684\u7EDD\u5BF9\u8DEF\u5F84\u6216\u8C03\u7528mark\u65B9\u6CD5\u81EA\u5B9A\u4E49\u7684\u540D\u79F0</li><li><code>startTime</code>:\u5F00\u59CB\u65F6\u95F4</li><li><code>duration</code>\uFF1A\u52A0\u8F7D\u65F6\u95F4</li><li><code>entryType</code>\uFF1A\u8D44\u6E90\u7C7B\u578B\uFF0CentryType\u7C7B\u578B\u4E0D\u540C\u6570\u7EC4\u4E2D\u7684\u5BF9\u8C61\u7ED3\u6784\u4E5F\u4E0D\u540C\uFF01\u5177\u4F53\u89C1\u4E0B</li><li><code>initiatorType</code>\uFF1A\u8C01\u53D1\u8D77\u7684\u8BF7\u6C42\uFF0C\u5177\u4F53\u89C1\u4E0B</li></ul><p><strong>entryType</strong>\u7684\u503C:</p><table><thead><tr><th>\u503C</th><th>\u8BE5\u7C7B\u578B\u5BF9\u8C61</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>mark</td><td>PerformanceMark</td><td>\u901A\u8FC7mark()\u65B9\u6CD5\u6DFB\u52A0\u5230\u6570\u7EC4\u4E2D\u7684\u5BF9\u8C61</td></tr><tr><td>measure</td><td>PerformanceMeasure</td><td>\u901A\u8FC7measure()\u65B9\u6CD5\u6DFB\u52A0\u5230\u6570\u7EC4\u4E2D\u7684\u5BF9\u8C61</td></tr><tr><td>paint</td><td>PerformancePaintTiming</td><td>\u503C\u4E3Afirst-paint&#39;\u9996\u6B21\u7ED8\u5236\u3001&#39;first-contentful-paint&#39;\u9996\u6B21\u5185\u5BB9\u7ED8\u5236\u3002</td></tr><tr><td>resource</td><td>PerformanceResourceTiming</td><td>\u6240\u6709\u8D44\u6E90\u52A0\u8F7D\u65F6\u95F4\uFF0C\u7528\u5904\u6700\u591A</td></tr><tr><td>navigation</td><td>PerformanceNavigationTiming</td><td>\u73B0\u9664chrome\u548COpera\u5916\u5747\u4E0D\u652F\u6301\uFF0C\u5BFC\u822A\u76F8\u5173\u4FE1\u606F</td></tr><tr><td>frame</td><td>PerformanceFrameTiming</td><td>\u73B0\u6D4F\u89C8\u5668\u5747\u672A\u652F\u6301</td></tr></tbody></table><p><strong>initiatorType</strong>\u7684\u503C\uFF1A</p><table><thead><tr><th>\u53D1\u8D77\u5BF9\u8C61</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>a Element</td><td><code>link</code>/<code>script</code>/<code>img</code>/<code>iframe</code>\u7B49</td><td>\u901A\u8FC7\u6807\u7B7E\u5F62\u5F0F\u52A0\u8F7D\u7684\u8D44\u6E90\uFF0C\u503C\u662F\u8BE5\u8282\u70B9\u540D\u7684\u5C0F\u5199\u5F62\u5F0F</td></tr><tr><td>a CSS resourc</td><td><code>css</code></td><td>\u901A\u8FC7css\u6837\u5F0F\u52A0\u8F7D\u7684\u8D44\u6E90\uFF0C\u6BD4\u5982background\u7684url\u65B9\u5F0F\u52A0\u8F7D\u8D44\u6E90</td></tr><tr><td>a XMLHttpRequest object</td><td><code>xmlhttprequest</code>/<code>fetch</code></td><td>\u901A\u8FC7xhr\u52A0\u8F7D\u7684\u8D44\u6E90</td></tr><tr><td>a PerformanceNavigationTiming object</td><td><code>navigation</code></td><td>\u5F53\u5BF9\u8C61\u662FPerformanceNavigationTiming\u65F6\u8FD4\u56DE</td></tr></tbody></table><p><strong>\u8BF7\u6CE8\u610F\uFF1A</strong></p><ol><li>\u76EE\u524D\u901A\u8FC7<code>&lt;audio&gt;</code>\uFF0C<code>&lt;video&gt;</code>\u52A0\u8F7D\u8D44\u6E90,initiatorType\u8FD8\u65E0\u6CD5\u8FD4\u56DE&quot;audio&quot;\u548C&quot;video&quot;\uFF0Cchrome\u4E2D\u53EA\u80FD\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32,firfox\u8FD4\u56DE&quot;other&quot;\u3002</li><li>\u5982\u679C\u4E00\u4E2A\u56FE\u7247\u5728\u9875\u9762\u5185\u65E2\u7528img\u5F15\u5165\uFF0C\u53C8\u4F5C\u4E3A\u80CC\u666F\u56FE\u7247\u5F15\u5165\uFF0C\u90A3\u4E48initiatorType\u8FD4\u56DE\u7684&quot;img&quot;\u3002</li><li>\u4F7F\u7528\u8BE5\u65B9\u6CD5\u7EDF\u8BA1\u8D44\u6E90\u4FE1\u606F\u7684\u65F6\u5019\u9996\u5148\u53EF\u4EE5\u5408\u7406\u5229\u7528clearResourceTimings\u6E05\u9664\u5DF2\u7EDF\u8BA1\u8FC7\u7684\u5BF9\u8C61\u907F\u514D\u91CD\u590D\u7EDF\u8BA1\uFF0C\u5176\u6B21\u8981\u8FC7\u6EE4\u6389\u56E0\u4E0A\u62A5\u7EDF\u8BA1\u6570\u636E\u800C\u4EA7\u751F\u7684\u5BF9\u8C61\u3002</li></ol><h3 id="getentriesbyname-name-type-optional-getentriesbytype-type" tabindex="-1"><a class="header-anchor" href="#getentriesbyname-name-type-optional-getentriesbytype-type" aria-hidden="true">#</a> getEntriesByName(name,type[optional])\uFF0CgetEntriesByType(type)</h3><ul><li><code>name</code>:\u60F3\u8981\u7B5B\u9009\u51FA\u7684\u8D44\u6E90\u540D\u3002</li><li><code>type</code>:entryType\u7684\u503C\u4E2D\u4E00\u4E2A\u3002</li></ul><p>\u8FD4\u56DE\u503C\u4ECD\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u6570\u7EC4\u76F8\u5F53\u4E8EgetEntries()\u65B9\u6CD5\u7ECF\u8FC7\u6240\u586B\u53C2\u6570\u7B5B\u9009\u540E\u7684\u4E00\u4E2A\u5B50\u96C6</p><h3 id="clearresourcetimings" tabindex="-1"><a class="header-anchor" href="#clearresourcetimings" aria-hidden="true">#</a> clearResourceTimings()</h3><p>\u8BE5\u65B9\u6CD5\u65E0\u53C2\u6570\u65E0\u8FD4\u56DE\u503C\uFF0C\u53EF\u4EE5\u6E05\u695A\u76EE\u524D\u6240\u6709entryType\u4E3A&quot;resource&quot;\u7684\u6570\u636E\uFF0C\u7528\u4E8E\u5199\u5355\u9875\u5E94\u7528\u7684\u7EDF\u8BA1\u811A\u672C\u975E\u5E38\u6709\u7528\u3002</p><h3 id="mark-name-measure-name-startmark-endmark-clearmarks-clearmeasures" tabindex="-1"><a class="header-anchor" href="#mark-name-measure-name-startmark-endmark-clearmarks-clearmeasures" aria-hidden="true">#</a> mark(name), measure(name, startMark, endMark), clearMarks(), clearMeasures()</h3><p>\u7528\u4E8E\u505A\u6807\u8BB0\u548C\u6E05\u9664\u6807\u8BB0\uFF0C\u4F9B\u7528\u6237\u81EA\u5B9A\u4E49\u7EDF\u8BA1\u4E00\u4E9B\u6570\u636E\uFF0C\u6BD4\u5982\u67D0\u51FD\u6570\u8FD0\u884C\u8017\u65F6\u7B49</p><ul><li><p><code>name</code>:\u81EA\u5B9A\u4E49\u7684\u540D\u79F0\uFF0C<strong>\u4E0D\u8981\u548CgetEntries()\u8FD4\u56DE\u7684\u6570\u7EC4\u4E2D\u5176\u4ED6name\u91CD\u590D</strong>\u3002</p></li><li><p><code>startMark</code>:\u4F5C\u4E3A\u5F00\u59CB\u65F6\u95F4\u7684\u6807\u8BB0\u540D\u79F0\u6216PerformanceTiming\u7684\u4E00\u4E2A\u5C5E\u6027\u3002</p></li><li><p><code>endMark</code>:\u4F5C\u4E3A\u7ED3\u675F\u65F6\u95F4\u7684\u6807\u8BB0\u540D\u79F0\u6216PerformanceTiming\u7684\u4E00\u4E2A\u5C5E\u6027\u3002</p></li><li><p>\u521B\u5EFA\u6807\u8BB0\uFF1Amark(name)\uFF1B</p></li><li><p>\u8BB0\u5F55\u4E24\u4E2A\u6807\u8BB0\u7684\u65F6\u95F4\u95F4\u9694\uFF1Ameasure(name, startMark, endMark);</p></li><li><p>\u6E05\u9664\u6307\u5B9A\u6807\u8BB0\uFF1Awindow.performance.clearMarks(name);</p></li><li><p>\u6E05\u9664\u6240\u6709\u6807\u8BB0\uFF1Awindow.performance.clearMarks();</p></li><li><p>\u6E05\u9664\u6307\u5B9A\u8BB0\u5F55\u95F4\u9694\u6570\u636E\uFF1Awindow.performance.clearMeasures(name);</p></li><li><p>\u6E05\u9664\u6240\u6709\u8BB0\u5F55\u95F4\u9694\u6570\u636E\uFF1Awindow.performance.clearMeasures();</p></li></ul><h3 id="now" tabindex="-1"><a class="header-anchor" href="#now" aria-hidden="true">#</a> now()</h3><p>performance.now()\u662F\u5F53\u524D\u65F6\u95F4\u4E0Eperformance.timing.navigationStart\u7684\u65F6\u95F4\u5DEE\uFF0C\u4EE5\u5FAE\u79D2\uFF08\u767E\u4E07\u5206\u4E4B\u4E00\u79D2\uFF09\u4E3A\u5355\u4F4D\u7684\u65F6\u95F4\uFF0C\u4E0E Date.now()-performance.timing.navigationStart\u7684\u533A\u522B\u662F\u4E0D\u53D7\u7CFB\u7EDF\u7A0B\u5E8F\u6267\u884C\u963B\u585E\u7684\u5F71\u54CD\uFF0C\u56E0\u6B64\u66F4\u52A0\u7CBE\u51C6\u3002</p>',42);function y(T,S){const a=o("ExternalLinkIcon");return r(),d(n,null,[s,m,e("p",null,[h,e("a",u,[g,i(a)]),f]),_],64)}var k=l(p,[["render",y]]);export{k as default};
