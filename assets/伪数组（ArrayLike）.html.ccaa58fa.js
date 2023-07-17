import{r as l,o as p,c as e,a as s,b as o,F as r,d as n}from"./app.c4a25f51.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const t={},E=n('<h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p><strong>\u4F2A\u6570\u7EC4 (ArrayLike)</strong> \uFF0C\u53C8\u79F0\u7C7B\u6570\u7EC4\u3002\u662F\u4E00\u4E2A\u7C7B\u4F3C\u6570\u7EC4\u7684\u5BF9\u8C61</p><p>\u5177\u6709\u5982\u4E0B\u7279\u5F81\uFF1A</p><ul><li>\u6309\u7D22\u5F15\u65B9\u5F0F\u50A8\u5B58\u6570\u636E <ul><li><code>0: xxx, 1: xxx, 2: xxx...</code></li></ul></li><li>\u5177\u6709<code>length</code>\u5C5E\u6027 <ul><li>\u4F46\u662Flength\u5C5E\u6027\u4E0D\u662F\u52A8\u6001\u7684\uFF0C\u4E0D\u4F1A\u968F\u7740\u6210\u5458\u7684\u53D8\u5316\u800C\u6539\u53D8</li></ul></li><li>\u4E0D\u5177\u6709\u6570\u7EC4\u7684<code>push()</code>\uFF0C <code>forEach()</code>\u7B49\u65B9\u6CD5</li></ul><p>\u5E38\u89C1\u7684\u4F2A\u6570\u7EC4\u6709DOM\u5143\u7D20\u96C6\u5408\uFF0C\u51FD\u6570\u4E2D\u7684arguments\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u5B57\u7B26\u4E32String\u5BF9\u8C61\u3002</p>',5),F={href:"https://imgtu.com/i/4f1uNT",target:"_blank",rel:"noopener noreferrer"},i=s("img",{src:"https://z3.ax1x.com/2021/09/28/4f1uNT.png",alt:"4f1uNT.png"},null,-1),D=n(`<h2 id="\u4F2A\u6570\u7EC4\u8F6C\u6570\u7EC4\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F2A\u6570\u7EC4\u8F6C\u6570\u7EC4\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u4F2A\u6570\u7EC4\u8F6C\u6570\u7EC4\u7684\u65B9\u6CD5</h2><h3 id="_1-\u904D\u5386\u6DFB\u52A0\u5165\u4E00\u4E2A\u7A7A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_1-\u904D\u5386\u6DFB\u52A0\u5165\u4E00\u4E2A\u7A7A\u6570\u7EC4" aria-hidden="true">#</a> 1.\u904D\u5386\u6DFB\u52A0\u5165\u4E00\u4E2A\u7A7A\u6570\u7EC4</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">toArr</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">var</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">cArr</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#D8DEE9;">arr</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">push</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">])</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">arr</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-\u5229\u7528\u6570\u7EC4\u7684slice-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u5229\u7528\u6570\u7EC4\u7684slice-\u65B9\u6CD5" aria-hidden="true">#</a> 2.\u5229\u7528\u6570\u7EC4\u7684slice()\u65B9\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">toArr</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Array</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">prototype</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">slice</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">call</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">toArr</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">slice</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">call</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_3-array-from" tabindex="-1"><a class="header-anchor" href="#_3-array-from" aria-hidden="true">#</a> 3.Array.from()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">toArr</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Array</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">from</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#D8DEE9FF;">)</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-\u5C55\u5F00\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_4-\u5C55\u5F00\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 4.\u5C55\u5F00\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">toArr</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">cArr</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> [</span><span style="color:#81A1C1;">...</span><span style="color:#D8DEE9;">cArr</span><span style="color:#D8DEE9FF;">]</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9);function y(d,u){const a=l("ExternalLinkIcon");return p(),e(r,null,[E,s("p",null,[s("a",F,[i,o(a)])]),D],64)}var h=c(t,[["render",y]]);export{h as default};
