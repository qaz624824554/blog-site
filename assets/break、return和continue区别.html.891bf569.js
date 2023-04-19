import{e as s}from"./app.7d2acf8d.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},l=s(`<h1 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h1><p>\u542B\u4E49\uFF1A\u8DF3\u51FA\u5F53\u524D\u8BED\u53E5\uFF0C\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u4E2A\u8BED\u53E5\uFF0C\u4E00\u822C\u7528\u4E8Efor\u5FAA\u73AF\u548Cswitch\u5206\u652F\u5185\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">val</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#81A1C1;">switch</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">val</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">case</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">val</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">break;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">val</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">case</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">val</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">default</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#B48EAD;">123</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">// 1\uFF0C\u5982\u679C\u628Abreak\u53BB\u6389\uFF0C\u5219\u6253\u53701 2 123</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">10</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">break;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">// 0 1 2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h1 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h1><p>\u542B\u4E49\uFF1A\u505C\u6B62\u51FD\u6570\u5E76\u8FD4\u56DE\u503C\uFF0C\u7528\u4E8E\u51FD\u6570\u5185\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">4</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">6</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">forEach</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">3</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">return;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">item</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">// 1 2 4 5 6</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">a</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">return;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">b</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#616E88;">// a 0 1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h1><p>\u542B\u4E49\uFF1A\u505C\u6B62\u5F53\u524D\u8BED\u53E5\uFF0C\u4ECE\u5934\u6267\u884C\u8BE5\u8BED\u53E5\uFF0C\u4E00\u822C\u7528\u4E8Efor\u5FAA\u73AF\u8BED\u53E5\u5185\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> []</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">5</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">list</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">===</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">2</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">continue;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#D8DEE9;">console</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">log</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#616E88;">// 0 1 3 4</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,11);function p(o,e){return l}var E=n(a,[["render",p]]);export{E as default};
