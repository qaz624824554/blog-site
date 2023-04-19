import{e as s}from"./app.06e41ebd.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},l=s(`<h1 id="url\u8F6Cbase64" tabindex="-1"><a class="header-anchor" href="#url\u8F6Cbase64" aria-hidden="true">#</a> url\u8F6Cbase64</h1><p>\u9700\u8981\u6EE1\u8DB3\u8DE8\u57DF\u7684\u6761\u4EF6\u4E0B\u624D\u80FD\u5B8C\u6210\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">urlToBase64</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">url</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Promise</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">resolve</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">reject</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">image</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Image</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">src</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">url</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setAttribute</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">crossOrigin</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Anonymous</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">onload</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">canvas</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">createElement</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">canvas</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">width</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">naturalWidth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">height</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">naturalHeight</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getContext</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">2d</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">drawImage</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">resolve</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">toDataURL</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">image/png</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">onerror</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">reject</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Error</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">urlToBase64 error</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h1 id="url\u8F6Cblob-url" tabindex="-1"><a class="header-anchor" href="#url\u8F6Cblob-url" aria-hidden="true">#</a> url\u8F6Cblob url</h1><p>\u9700\u8981\u6EE1\u8DB3\u8DE8\u57DF\u7684\u6761\u4EF6\u4E0B\u624D\u80FD\u5B8C\u6210\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">urlToBlob</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">url</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Promise</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">resolve</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">reject</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">image</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Image</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">src</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">url</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">setAttribute</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">crossOrigin</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">Anonymous</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">onload</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">canvas</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">document</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">createElement</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">canvas</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">width</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">naturalWidth</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">height</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">this</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">naturalHeight</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">getContext</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">2d</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">drawImage</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#D8DEE9;">canvas</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">toBlob</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">blob</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">        </span><span style="color:#88C0D0;">resolve</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">URL</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">createObjectURL</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">blob</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#ECEFF4;">},</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">image/png</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">image</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">onerror</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">reject</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Error</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">urlToBase64 error</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h1 id="base64\u8F6Cblob" tabindex="-1"><a class="header-anchor" href="#base64\u8F6Cblob" aria-hidden="true">#</a> base64\u8F6Cblob</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">base64ToBlob</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">base64</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">byteCharacters</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">atob</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">base64</span><span style="color:#D8DEE9FF;">)</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">split</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">,</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">byteString</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">byteCharacters</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">mimeString</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">byteCharacters</span><span style="color:#D8DEE9FF;">[</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">split</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">:</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)[</span><span style="color:#B48EAD;">1</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">split</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">;</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">)[</span><span style="color:#B48EAD;">0</span><span style="color:#D8DEE9FF;">]</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">ab</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">ArrayBuffer</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">byteString</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">ia</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Uint8Array</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">ab</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> (</span><span style="color:#81A1C1;">let</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#B48EAD;">0</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">&lt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">byteString</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">length</span><span style="color:#81A1C1;">;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">i</span><span style="color:#81A1C1;">++</span><span style="color:#D8DEE9FF;">) </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">ia</span><span style="color:#D8DEE9FF;">[</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">] </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">byteString</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">charCodeAt</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">i</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">Blob</span><span style="color:#D8DEE9FF;">([</span><span style="color:#D8DEE9;">ab</span><span style="color:#D8DEE9FF;">]</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">type</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">mimeString</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="blob\u8F6Cbase64" tabindex="-1"><a class="header-anchor" href="#blob\u8F6Cbase64" aria-hidden="true">#</a> blob\u8F6Cbase64</h1><p>\u7531\u4E8EFile\u662FBlob\u7684\u5B50\u7C7B\uFF0C\u6240\u4EE5\u6240\u6709Blob\u8F6C\u6362\u90FD\u9002\u7528\u4E8EFile\u7C7B\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#2e3440ff;"><code><span class="line"><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">blobToBase64</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">blob</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#81A1C1;">return</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Promise</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">resolve</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">reject</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=&gt;</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#81A1C1;">const</span><span style="color:#D8DEE9FF;"> </span><span style="color:#D8DEE9;">fileReader</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#88C0D0;">FileReader</span><span style="color:#D8DEE9FF;">()</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">fileReader</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">readAsDataURL</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">blob</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">fileReader</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">onload</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">e</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">resolve</span><span style="color:#D8DEE9FF;">(</span><span style="color:#D8DEE9;">e</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">target</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9;">result</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#D8DEE9;">fileReader</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">onerror</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> </span><span style="color:#81A1C1;">function</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">()</span><span style="color:#D8DEE9FF;"> </span><span style="color:#ECEFF4;">{</span></span>
<span class="line"><span style="color:#D8DEE9FF;">      </span><span style="color:#88C0D0;">reject</span><span style="color:#D8DEE9FF;">(</span><span style="color:#81A1C1;">new</span><span style="color:#D8DEE9FF;"> </span><span style="color:#8FBCBB;">Error</span><span style="color:#D8DEE9FF;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">blobToBase64 error</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#D8DEE9FF;">))</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  </span><span style="color:#ECEFF4;">}</span><span style="color:#D8DEE9FF;">)</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,11);function p(o,e){return l}var c=n(a,[["render",p]]);export{c as default};
