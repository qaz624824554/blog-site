import{d as s}from"./app.5b55431a.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},l=s(`<h1 id="\u51FD\u6570\u9632\u6296-debounce" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u9632\u6296-debounce" aria-hidden="true">#</a> \u51FD\u6570\u9632\u6296\uFF08debounce\uFF09</h1><p>\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1n\u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9n\u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">debounce</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">fn</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">delay</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">timer</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u7EF4\u62A4\u4E00\u4E2A timer</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_this</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u53D6debounce\u6267\u884C\u4F5C\u7528\u57DF\u7684this</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">args</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">arguments;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">timer</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </span><span style="color:#88C0D0;">clearTimeout</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">timer</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#D8DEE9;">timer</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">setTimeout</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </span><span style="color:#D8DEE9;">fn</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">apply</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">_this</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">args</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u7528apply\u6307\u5411\u8C03\u7528debounce\u7684\u5BF9\u8C61\uFF0C\u76F8\u5F53\u4E8E_this.fn(args);</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#ECEFF4;">},</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">delay</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="\u51FD\u6570\u8282\u6D41-throttle" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8282\u6D41-throttle" aria-hidden="true">#</a> \u51FD\u6570\u8282\u6D41 \uFF08throttle\uFF09</h1><p>\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\uFF0C\u53EA\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">throttle</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">fn</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">delay</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">timer</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">_this</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">args</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">arguments;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">timer</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </span><span style="color:#81A1C1;">return;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#D8DEE9;">timer</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">setTimeout</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </span><span style="color:#D8DEE9;">fn</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">apply</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">_this</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">args</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 </span><span style="color:#D8DEE9;">timer</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">null;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#616E88;">// \u5728delay\u540E\u6267\u884C\u5B8Cfn\u4E4B\u540E\u6E05\u7A7Atimer\uFF0C\u6B64\u65F6timer\u4E3A\u5047\uFF0Cthrottle\u89E6\u53D1\u53EF\u4EE5\u8FDB\u5165\u8BA1\u65F6\u5668</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 \xA0 \xA0 </span><span style="color:#ECEFF4;">},</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">delay</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">\xA0 \xA0 </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h1 id="\u5E38\u89C1\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E38\u89C1\u5E94\u7528\u573A\u666F</h1><h3 id="\u51FD\u6570\u9632\u6296\u7684\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u9632\u6296\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u51FD\u6570\u9632\u6296\u7684\u5E94\u7528\u573A\u666F</h3><p>\u8FDE\u7EED\u7684\u4E8B\u4EF6\uFF0C\u53EA\u9700\u89E6\u53D1\u4E00\u6B21\u56DE\u8C03\u7684\u573A\u666F\u6709\uFF1A</p><ul><li>\u641C\u7D22\u6846\u641C\u7D22\u8F93\u5165\u3002\u53EA\u9700\u7528\u6237\u6700\u540E\u4E00\u6B21\u8F93\u5165\u5B8C\uFF0C\u518D\u53D1\u9001\u8BF7\u6C42</li><li>\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u9A8C\u8BC1\u8F93\u5165\u68C0\u6D4B</li><li>\u7A97\u53E3\u5927\u5C0FResize\u3002\u53EA\u9700\u7A97\u53E3\u8C03\u6574\u5B8C\u6210\u540E\uFF0C\u8BA1\u7B97\u7A97\u53E3\u5927\u5C0F\u3002\u9632\u6B62\u91CD\u590D\u6E32\u67D3\u3002</li></ul><h3 id="\u51FD\u6570\u8282\u6D41\u7684\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8282\u6D41\u7684\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u51FD\u6570\u8282\u6D41\u7684\u5E94\u7528\u573A\u666F</h3><p>\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u7684\u573A\u666F\u6709\uFF1A</p><ul><li>\u6EDA\u52A8\u52A0\u8F7D\uFF0C\u52A0\u8F7D\u66F4\u591A\u6216\u6EDA\u5230\u5E95\u90E8\u76D1\u542C</li><li>\u8C37\u6B4C\u641C\u7D22\u6846\uFF0C\u641C\u7D22\u8054\u60F3\u529F\u80FD</li><li>\u9AD8\u9891\u70B9\u51FB\u63D0\u4EA4\uFF0C\u8868\u5355\u91CD\u590D\u63D0\u4EA4</li></ul>`,13);function p(o,e){return l}var E=n(a,[["render",p]]);export{E as default};
