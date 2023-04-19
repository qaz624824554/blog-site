import{e as t}from"./app.06e41ebd.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const e={},i=t('<h2 id="\u7F51\u9875\u7684\u751F\u6210\u8FC7\u7A0B-\u5927\u81F4\u53EF\u4EE5\u5206\u6210\u4E94\u6B65\u3002" tabindex="-1"><a class="header-anchor" href="#\u7F51\u9875\u7684\u751F\u6210\u8FC7\u7A0B-\u5927\u81F4\u53EF\u4EE5\u5206\u6210\u4E94\u6B65\u3002" aria-hidden="true">#</a> \u7F51\u9875\u7684\u751F\u6210\u8FC7\u7A0B\uFF0C\u5927\u81F4\u53EF\u4EE5\u5206\u6210\u4E94\u6B65\u3002</h2><ul><li>HTML\u4EE3\u7801\u8F6C\u5316\u6210DOM</li><li>CSS\u4EE3\u7801\u8F6C\u5316\u6210CSSOM\uFF08CSS Object Model\uFF09</li><li>\u7ED3\u5408DOM\u548CCSSOM\uFF0C\u751F\u6210\u4E00\u68F5\u6E32\u67D3\u6811\uFF08\u5305\u542B\u6BCF\u4E2A\u8282\u70B9\u7684\u89C6\u89C9\u4FE1\u606F\uFF09</li><li>\u751F\u6210\u5E03\u5C40\uFF08layout\uFF09\uFF0C\u5373\u5C06\u6240\u6709\u6E32\u67D3\u6811\u7684\u6240\u6709\u8282\u70B9\u8FDB\u884C\u5E73\u9762\u5408\u6210</li><li>\u5C06\u5E03\u5C40\u7ED8\u5236\uFF08paint\uFF09\u5728\u5C4F\u5E55\u4E0A</li><li>\u5408\u6210\uFF08compose\uFF09</li></ul><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_7320A250-B2F5-4D33-A0E2-37689F03E57D.png" alt="2022_03_09_7320A250-B2F5-4D33-A0E2-37689F03E57D"></p><h2 id="\u91CD\u6392-reflow" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6392-reflow" aria-hidden="true">#</a> \u91CD\u6392(reflow)\uFF1A</h2><h3 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5\uFF1A</h3><p>\u5F53DOM\u7684\u53D8\u5316\u5F71\u54CD\u4E86\u5143\u7D20\u7684\u51E0\u4F55\u4FE1\u606F(\u5143\u7D20\u7684\u7684\u4F4D\u7F6E\u548C\u5C3A\u5BF8\u5927\u5C0F)\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u5143\u7D20\u7684\u51E0\u4F55\u5C5E\u6027\uFF0C\u5C06\u5176\u5B89\u653E\u5728\u754C\u9762\u4E2D\u7684\u6B63\u786E\u4F4D\u7F6E\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u505A\u91CD\u6392\u3002</p><p>\u91CD\u6392\u4E5F\u53EB\u56DE\u6D41\uFF0C\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u91CD\u65B0\u751F\u6210\u5E03\u5C40\uFF0C\u91CD\u65B0\u6392\u5217\u5143\u7D20\u3002</p><p>\u91CD\u6392\u4F1A\u5BFC\u81F4\u91CD\u7ED8\uFF0C\u91CD\u7ED8\u4E0D\u4E00\u5B9A\u4F1A\u5BFC\u81F4\u91CD\u6392\u3002</p><h3 id="\u4E0B\u9762\u60C5\u51B5\u4F1A\u53D1\u751F\u91CD\u6392" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u9762\u60C5\u51B5\u4F1A\u53D1\u751F\u91CD\u6392" aria-hidden="true">#</a> \u4E0B\u9762\u60C5\u51B5\u4F1A\u53D1\u751F\u91CD\u6392\uFF1A</h3><ul><li>\u9875\u9762\u521D\u59CB\u6E32\u67D3\uFF0C\u8FD9\u662F\u5F00\u9500\u6700\u5927\u7684\u4E00\u6B21\u91CD\u6392</li><li>\u6DFB\u52A0/\u5220\u9664\u53EF\u89C1\u7684DOM\u5143\u7D20</li><li>\u6539\u53D8\u5143\u7D20\u4F4D\u7F6E</li><li>\u6539\u53D8\u5143\u7D20\u5C3A\u5BF8\uFF0C\u6BD4\u5982\u8FB9\u8DDD\u3001\u586B\u5145\u3001\u8FB9\u6846\u3001\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7B49</li><li>\u6539\u53D8\u5143\u7D20\u5185\u5BB9\uFF0C\u6BD4\u5982\u6587\u5B57\u6570\u91CF\uFF0C\u56FE\u7247\u5927\u5C0F\u7B49</li><li>\u6539\u53D8\u5143\u7D20\u5B57\u4F53\u5927\u5C0F</li><li>\u6539\u53D8\u6D4F\u89C8\u5668\u7A97\u53E3\u5C3A\u5BF8\uFF0C\u6BD4\u5982resize\u4E8B\u4EF6\u53D1\u751F\u65F6</li><li>\u6FC0\u6D3BCSS\u4F2A\u7C7B\uFF08\u4F8B\u5982\uFF1A:hover\uFF09</li><li>\u8BBE\u7F6E style \u5C5E\u6027\u7684\u503C\uFF0C\u56E0\u4E3A\u901A\u8FC7\u8BBE\u7F6Estyle\u5C5E\u6027\u6539\u53D8\u7ED3\u70B9\u6837\u5F0F\u7684\u8BDD\uFF0C\u6BCF\u4E00\u6B21\u8BBE\u7F6E\u90FD\u4F1A\u89E6\u53D1\u4E00\u6B21reflow</li><li>\u67E5\u8BE2\u67D0\u4E9B\u5C5E\u6027\u6216\u8C03\u7528\u67D0\u4E9B\u8BA1\u7B97\u65B9\u6CD5\uFF1AoffsetWidth\u3001offsetHeight\u7B49\uFF0C\u9664\u6B64\u4E4B\u5916\uFF0C\u5F53\u6211\u4EEC\u8C03\u7528 getComputedStyle\u65B9\u6CD5\uFF0C\u6216\u8005IE\u91CC\u7684 currentStyle \u65F6\uFF0C\u4E5F\u4F1A\u89E6\u53D1\u91CD\u6392\uFF0C\u539F\u7406\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u4E3A\u6C42\u4E00\u4E2A\u201C\u5373\u65F6\u6027\u201D\u548C\u201C\u51C6\u786E\u6027\u201D\u3002</li></ul><table><thead><tr><th>\u5E38\u89C1\u5F15\u8D77\u91CD\u6392\u5C5E\u6027\u548C\u65B9\u6CD5</th><th>--</th><th>--</th><th>--</th></tr></thead><tbody><tr><td>width</td><td>height</td><td>margin</td><td>padding</td></tr><tr><td>display</td><td>border-width</td><td>border</td><td>position</td></tr><tr><td>overflow</td><td>font-size</td><td>vertical-align</td><td>min-height</td></tr><tr><td>clientWidth</td><td>clientHeight</td><td>clientTop</td><td>clientLeft</td></tr><tr><td>offsetWudth</td><td>offsetHeight</td><td>offsetTop</td><td>offsetLeft</td></tr><tr><td>scrollWidth</td><td>scrollHeight</td><td>scrollTop</td><td>scrollLeft</td></tr><tr><td>scrollIntoView()</td><td>scrollTo()</td><td>getComputedStyle()</td><td></td></tr><tr><td>getBoundingClientRect()</td><td>scrollIntoViewIfNeeded()</td><td></td><td></td></tr></tbody></table><h3 id="\u91CD\u6392\u5F71\u54CD\u7684\u8303\u56F4" tabindex="-1"><a class="header-anchor" href="#\u91CD\u6392\u5F71\u54CD\u7684\u8303\u56F4" aria-hidden="true">#</a> \u91CD\u6392\u5F71\u54CD\u7684\u8303\u56F4\uFF1A</h3><p>\u7531\u4E8E\u6D4F\u89C8\u5668\u6E32\u67D3\u754C\u9762\u662F\u57FA\u4E8E\u6D41\u5931\u5E03\u5C40\u6A21\u578B\u7684\uFF0C\u6240\u4EE5\u89E6\u53D1\u91CD\u6392\u65F6\u4F1A\u5BF9\u5468\u56F4DOM\u91CD\u65B0\u6392\u5217\uFF0C\u5F71\u54CD\u7684\u8303\u56F4\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u5168\u5C40\u8303\u56F4\uFF1A\u4ECE\u6839\u8282\u70B9html\u5F00\u59CB\u5BF9\u6574\u4E2A\u6E32\u67D3\u6811\u8FDB\u884C\u91CD\u65B0\u5E03\u5C40\u3002</li><li>\u5C40\u90E8\u8303\u56F4\uFF1A\u5BF9\u6E32\u67D3\u6811\u7684\u67D0\u90E8\u5206\u6216\u67D0\u4E00\u4E2A\u6E32\u67D3\u5BF9\u8C61\u8FDB\u884C\u91CD\u65B0\u5E03\u5C40</li></ul><h2 id="\u91CD\u7ED8-repaints" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7ED8-repaints" aria-hidden="true">#</a> \u91CD\u7ED8(Repaints):</h2><h3 id="\u6982\u5FF5-1" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5-1" aria-hidden="true">#</a> \u6982\u5FF5\uFF1A</h3><p>\u5F53\u4E00\u4E2A\u5143\u7D20\u7684\u5916\u89C2\u53D1\u751F\u6539\u53D8\uFF0C\u4F46\u6CA1\u6709\u6539\u53D8\u5E03\u5C40,\u91CD\u65B0\u628A\u5143\u7D20\u5916\u89C2\u7ED8\u5236\u51FA\u6765\u7684\u8FC7\u7A0B\uFF0C\u53EB\u505A\u91CD\u7ED8\u3002</p><h3 id="\u5E38\u89C1\u7684\u5F15\u8D77\u91CD\u7ED8\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u5F15\u8D77\u91CD\u7ED8\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u5F15\u8D77\u91CD\u7ED8\u7684\u5C5E\u6027\uFF1A</h3><table><thead><tr><th>\u5C5E\u6027\uFF1A</th><th>--</th><th>--</th><th>--</th></tr></thead><tbody><tr><td>color</td><td>border-style</td><td>visibility</td><td>background</td></tr><tr><td>text-decoration</td><td>background-image</td><td>background-position</td><td>background-repeat</td></tr><tr><td>outline-color</td><td>outline</td><td>outline-style</td><td>border-radius</td></tr><tr><td>outline-width</td><td>box-shadow</td><td>background-size</td><td></td></tr></tbody></table><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_B0698B0D-419E-41DE-806A-59349980747E.png" alt="2022_03_09_B0698B0D-419E-41DE-806A-59349980747E"></p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_28_A1D5E0E1-A5D7-4250-B733-388A4B53AA13.png" alt="2022_03_28_A1D5E0E1-A5D7-4250-B733-388A4B53AA13"></p>',21);function r(a,l){return i}var n=d(e,[["render",r]]);export{n as default};
