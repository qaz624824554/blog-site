import{r as p,o as a,c,a as e,b as t,F as i,e as s,d as o}from"./app.7d2acf8d.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const _={},h=s('<h2 id="\u6D4F\u89C8\u5668\u7684\u591A\u8FDB\u7A0B\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u591A\u8FDB\u7A0B\u67B6\u6784" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u591A\u8FDB\u7A0B\u67B6\u6784</h2><p>\u4E00\u4E2A\u597D\u7684\u7A0B\u5E8F\u5E38\u5E38\u88AB\u5212\u5206\u4E3A\u51E0\u4E2A\u76F8\u4E92\u72EC\u7ACB\u53C8\u5F7C\u6B64\u914D\u5408\u7684\u6A21\u5757\uFF0C\u6D4F\u89C8\u5668\u4E5F\u662F\u5982\u6B64\uFF0C\u4EE5 Chrome \u4E3A\u4F8B\uFF0C\u5B83\u7531\u591A\u4E2A\u8FDB\u7A0B\u7EC4\u6210\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u90FD\u6709\u81EA\u5DF1\u6838\u5FC3\u7684\u804C\u8D23\uFF0C\u5B83\u4EEC\u76F8\u4E92\u914D\u5408\u5B8C\u6210\u6D4F\u89C8\u5668\u7684\u6574\u4F53\u529F\u80FD\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u4E2D\u53C8\u5305\u542B\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u4E00\u4E2A\u8FDB\u7A0B\u5185\u7684\u591A\u4E2A\u7EBF\u7A0B\u4E5F\u4F1A\u534F\u540C\u5DE5\u4F5C\uFF0C\u914D\u5408\u5B8C\u6210\u6240\u5728\u8FDB\u7A0B\u7684\u804C\u8D23\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_2C966CA0-FBC9-44DC-8D55-351FA6648C83.jpg" alt="2022_03_09_2C966CA0-FBC9-44DC-8D55-351FA6648C83"></p><h3 id="\u8FDB\u7A0B-process-\u548C\u7EBF\u7A0B-thread" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B-process-\u548C\u7EBF\u7A0B-thread" aria-hidden="true">#</a> \u8FDB\u7A0B\uFF08process\uFF09\u548C\u7EBF\u7A0B\uFF08thread\uFF09</h3><p>\u5F53\u6211\u4EEC\u542F\u52A8\u4E00\u4E2A\u5E94\u7528\uFF0C\u8BA1\u7B97\u673A\u4F1A\u521B\u5EFA\u4E00\u4E2A\u8FDB\u7A0B\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u4E3A\u8FDB\u7A0B\u5206\u914D\u4E00\u90E8\u5206\u5185\u5B58\uFF0C\u5E94\u7528\u7684\u6240\u6709\u72B6\u6001\u90FD\u4F1A\u4FDD\u5B58\u5728\u8FD9\u5757\u5185\u5B58\u4E2D\uFF0C\u5E94\u7528\u4E5F\u8BB8\u8FD8\u4F1A\u521B\u5EFA\u591A\u4E2A\u7EBF\u7A0B\u6765\u8F85\u52A9\u5DE5\u4F5C\uFF0C\u8FD9\u4E9B\u7EBF\u7A0B\u53EF\u4EE5\u5171\u4EAB\u8FD9\u90E8\u5206\u5185\u5B58\u4E2D\u7684\u6570\u636E\u3002\u5982\u679C\u5E94\u7528\u5173\u95ED\uFF0C\u8FDB\u7A0B\u4F1A\u88AB\u7EC8\u7ED3\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u91CA\u653E\u76F8\u5173\u5185\u5B58\u3002</p><p>\u4E00\u4E2A\u8FDB\u7A0B\u8FD8\u53EF\u4EE5\u8981\u6C42\u64CD\u4F5C\u7CFB\u7EDF\u751F\u6210\u53E6\u4E00\u4E2A\u8FDB\u7A0B\u6765\u6267\u884C\u4E0D\u540C\u7684\u4EFB\u52A1\uFF0C\u7CFB\u7EDF\u4F1A\u4E3A\u65B0\u7684\u8FDB\u7A0B\u5206\u914D\u72EC\u7ACB\u7684\u5185\u5B58\uFF0C\u4E24\u4E2A\u8FDB\u7A0B\u4E4B\u95F4\u53EF\u4EE5\u4F7F\u7528 IPC \uFF08Inter Process Communication\uFF09\u8FDB\u884C\u901A\u4FE1\u3002\u5F88\u591A\u5E94\u7528\u90FD\u4F1A\u91C7\u7528\u8FD9\u6837\u7684\u8BBE\u8BA1\uFF0C\u5982\u679C\u4E00\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\u53CD\u5E94\u8FDF\u949D\uFF0C\u91CD\u542F\u8FD9\u4E2A\u8FDB\u7A0B\u4E0D\u4F1A\u5F71\u54CD\u5E94\u7528\u5176\u5B83\u8FDB\u7A0B\u7684\u5DE5\u4F5C\u3002</p><h3 id="\u6D4F\u89C8\u5668\u7684\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7684\u67B6\u6784" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7684\u67B6\u6784</h3><p>\u5982\u679C\u8981\u5F00\u53D1\u4E00\u4E2A\u6D4F\u89C8\u5668\uFF0C\u5B83\u53EF\u4EE5\u662F\u5355\u8FDB\u7A0B\u591A\u7EBF\u7A0B\u7684\u5E94\u7528\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4F7F\u7528 IPC \u901A\u4FE1\u7684\u591A\u8FDB\u7A0B\u5E94\u7528\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_DA5118A6-FC84-42EB-B40C-61BE3E13FF9D.jpg" alt="2022_03_09_DA5118A6-FC84-42EB-B40C-61BE3E13FF9D"></p><p>\u4E0D\u540C\u6D4F\u89C8\u5668\u91C7\u7528\u4E86\u4E0D\u540C\u7684\u67B6\u6784\u6A21\u5F0F\uFF0C\u8FD9\u91CC\u5E76\u4E0D\u5B58\u5728\u6807\u51C6\u3002</p><p>Chrome \u91C7\u7528\u591A\u8FDB\u7A0B\u67B6\u6784\uFF0C\u5176\u9876\u5C42\u5B58\u5728\u4E00\u4E2A Browser process \u7528\u4EE5\u534F\u8C03\u6D4F\u89C8\u5668\u7684\u5176\u5B83\u8FDB\u7A0B\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_73CAE21B-E76C-441A-A470-B1E40CF5B14D.jpg" alt="2022_03_09_73CAE21B-E76C-441A-A470-B1E40CF5B14D"></p><p>\u5177\u4F53\u8BF4\u6765\uFF0CChrome \u7684\u4E3B\u8981\u8FDB\u7A0B\u53CA\u5176\u804C\u8D23\u5982\u4E0B\uFF1A</p><ul><li>Browser Process\uFF1A</li></ul><ol><li>\u8D1F\u8D23\u5305\u62EC\u5730\u5740\u680F\uFF0C\u4E66\u7B7E\u680F\uFF0C\u524D\u8FDB\u540E\u9000\u6309\u94AE\u7B49\u90E8\u5206\u7684\u5DE5\u4F5C\uFF1B</li><li>\u8D1F\u8D23\u5904\u7406\u6D4F\u89C8\u5668\u7684\u4E00\u4E9B\u4E0D\u53EF\u89C1\u7684\u5E95\u5C42\u64CD\u4F5C\uFF0C\u6BD4\u5982\u7F51\u7EDC\u8BF7\u6C42\u548C\u6587\u4EF6\u8BBF\u95EE\uFF1B</li></ol><ul><li>Renderer Process\uFF1A</li></ul><ol><li>\u8D1F\u8D23\u4E00\u4E2A tab \u5185\u5173\u4E8E\u7F51\u9875\u5448\u73B0\u7684\u6240\u6709\u4E8B\u60C5</li></ol><ul><li>Plugin Process\uFF1A</li></ul><ol><li>\u8D1F\u8D23\u63A7\u5236\u4E00\u4E2A\u7F51\u9875\u7528\u5230\u7684\u6240\u6709\u63D2\u4EF6\uFF0C\u5982 flash</li></ol><ul><li>GPU Process</li></ul><ol><li>\u8D1F\u8D23\u5904\u7406 GPU \u76F8\u5173\u7684\u4EFB\u52A1</li></ol><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_F295BB8A-7FCD-4655-BEE2-4AE6B554B539.jpg" alt="2022_03_09_F295BB8A-7FCD-4655-BEE2-4AE6B554B539"></p><p>Chrome \u8FD8\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u300C\u4EFB\u52A1\u7BA1\u7406\u5668\u300D\uFF0C\u4F9B\u6211\u4EEC\u65B9\u4FBF\u7684\u67E5\u770B\u5F53\u524D\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u6240\u6709\u8FDB\u7A0B\u53CA\u6BCF\u4E2A\u8FDB\u7A0B\u5360\u7528\u7684\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u53F3\u952E\u5355\u51FB\u8FD8\u53EF\u4EE5\u67E5\u770B\u66F4\u591A\u7C7B\u522B\u4FE1\u606F\u3002</p><p>\u901A\u8FC7\u300C\u9875\u9762\u53F3\u4E0A\u89D2\u7684\u4E09\u4E2A\u70B9\u70B9\u70B9 --- \u66F4\u591A\u5DE5\u5177 --- \u4EFB\u52A1\u7BA1\u7406\u5668\u300D\u5373\u53EF\u6253\u5F00\u76F8\u5173\u9762\u677F\uFF0C</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_5EFF9426-4119-4F35-AAB6-2AF9090876D0.jpg" alt="2022_03_09_5EFF9426-4119-4F35-AAB6-2AF9090876D0"></p><h3 id="chrome-\u591A\u8FDB\u7A0B\u67B6\u6784\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#chrome-\u591A\u8FDB\u7A0B\u67B6\u6784\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> Chrome \u591A\u8FDB\u7A0B\u67B6\u6784\u7684\u4F18\u7F3A\u70B9</h3><p>\u4F18\u70B9</p><ol><li>\u67D0\u4E00\u6E32\u67D3\u8FDB\u7A0B\u51FA\u95EE\u9898\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u8FDB\u7A0B</li><li>\u66F4\u4E3A\u5B89\u5168\uFF0C\u5728\u7CFB\u7EDF\u5C42\u9762\u4E0A\u9650\u5B9A\u4E86\u4E0D\u540C\u8FDB\u7A0B\u7684\u6743\u9650</li></ol><p>\u7F3A\u70B9</p><p>\u7531\u4E8E\u4E0D\u540C\u8FDB\u7A0B\u95F4\u7684\u5185\u5B58\u4E0D\u5171\u4EAB\uFF0C\u4E0D\u540C\u8FDB\u7A0B\u7684\u5185\u5B58\u5E38\u5E38\u9700\u8981\u5305\u542B\u76F8\u540C\u7684\u5185\u5BB9\u3002</p><p>\u4E3A\u4E86\u8282\u7701\u5185\u5B58\uFF0CChrome \u9650\u5236\u4E86\u6700\u591A\u7684\u8FDB\u7A0B\u6570\uFF0C\u6700\u5927\u8FDB\u7A0B\u6570\u91CF\u7531\u8BBE\u5907\u7684\u5185\u5B58\u548C CPU \u80FD\u529B\u51B3\u5B9A\uFF0C\u5F53\u8FBE\u5230\u8FD9\u4E00\u9650\u5236\u65F6\uFF0C\u65B0\u6253\u5F00\u7684 Tab \u4F1A\u5171\u7528\u4E4B\u524D\u540C\u4E00\u4E2A\u7AD9\u70B9\u7684\u6E32\u67D3\u8FDB\u7A0B\u3002</p><p>Chrome \u628A\u6D4F\u89C8\u5668\u4E0D\u540C\u7A0B\u5E8F\u7684\u529F\u80FD\u770B\u505A\u670D\u52A1\uFF0C\u8FD9\u4E9B\u670D\u52A1\u53EF\u4EE5\u65B9\u4FBF\u7684\u5206\u5272\u4E3A\u4E0D\u540C\u7684\u8FDB\u7A0B\u6216\u8005\u5408\u5E76\u4E3A\u4E00\u4E2A\u8FDB\u7A0B\u3002\u4EE5 Broswer Process \u4E3A\u4F8B\uFF0C\u5982\u679C Chrome \u8FD0\u884C\u5728\u5F3A\u5927\u7684\u786C\u4EF6\u4E0A\uFF0C\u5B83\u4F1A\u5206\u5272\u4E0D\u540C\u7684\u670D\u52A1\u5230\u4E0D\u540C\u7684\u8FDB\u7A0B\uFF0C\u8FD9\u6837 Chrome \u6574\u4F53\u7684\u8FD0\u884C\u4F1A\u66F4\u52A0\u7A33\u5B9A\uFF0C\u4F46\u662F\u5982\u679C Chrome \u8FD0\u884C\u5728\u8D44\u6E90\u8D2B\u7620\u7684\u8BBE\u5907\u4E0A\uFF0C\u8FD9\u4E9B\u670D\u52A1\u53C8\u4F1A\u5408\u5E76\u5230\u540C\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u8FD0\u884C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8282\u7701\u5185\u5B58\u3002</p><h3 id="iframe-\u7684\u6E32\u67D3-site-isolation" tabindex="-1"><a class="header-anchor" href="#iframe-\u7684\u6E32\u67D3-site-isolation" aria-hidden="true">#</a> iframe \u7684\u6E32\u67D3 -- Site Isolation</h3><p>\u5728\u4E0A\u9762\u7684\u8FDB\u7A0B\u56FE\u4E2D\u6211\u4EEC\u8FD8\u53EF\u4EE5\u770B\u5230\u4E00\u4E9B\u8FDB\u7A0B\u4E0B\u8FD8\u5B58\u5728\u7740 Subframe\uFF0C\u8FD9\u5C31\u662F Site Isolation \u673A\u5236\u4F5C\u7528\u7684\u7ED3\u679C\u3002</p><p>Site Isolation \u673A\u5236\u4ECE Chrome 67 \u5F00\u59CB\u9ED8\u8BA4\u542F\u7528\u3002\u8FD9\u79CD\u673A\u5236\u5141\u8BB8\u5728\u540C\u4E00\u4E2A Tab \u4E0B\u7684\u8DE8\u7AD9 iframe \u4F7F\u7528\u5355\u72EC\u7684\u8FDB\u7A0B\u6765\u6E32\u67D3\uFF0C\u8FD9\u6837\u4F1A\u66F4\u4E3A\u5B89\u5168\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_066E22EC-A443-43A2-8422-A5F3D41F7C28.jpg" alt="2022_03_09_066E22EC-A443-43A2-8422-A5F3D41F7C28"></p><blockquote><p>Site Isolation \u88AB\u5927\u5BB6\u770B\u505A\u91CC\u7A0B\u7891\u5F0F\u7684\u529F\u80FD\uFF0C \u5176\u6210\u529F\u5B9E\u73B0\u662F\u591A\u5E74\u5DE5\u7A0B\u52AA\u529B\u7684\u7ED3\u679C\u3002Site Isolation \u4E0D\u662F\u7B80\u5355\u7684\u53E0\u52A0\u591A\u4E2A\u8FDB\u7A0B\u3002\u8FD9\u79CD\u673A\u5236\u5728\u5E95\u5C42\u6539\u53D8\u4E86 iframe \u4E4B\u95F4\u901A\u4FE1\u7684\u65B9\u6CD5\uFF0CChrome \u7684\u5176\u5B83\u529F\u80FD\u90FD\u9700\u8981\u505A\u5BF9\u5E94\u7684\u8C03\u6574\uFF0C\u6BD4\u5982\u8BF4 devtools \u9700\u8981\u76F8\u5E94\u7684\u652F\u6301\uFF0C\u751A\u81F3 Ctrl + F \u4E5F\u9700\u8981\u652F\u6301\u3002</p></blockquote><h2 id="\u5BFC\u822A\u8FC7\u7A0B\u53D1\u751F\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u8FC7\u7A0B\u53D1\u751F\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> \u5BFC\u822A\u8FC7\u7A0B\u53D1\u751F\u4E86\u4EC0\u4E48</h2><p>\u4E5F\u8BB8\u5927\u591A\u6570\u4EBA\u4F7F\u7528 Chrome \u6700\u591A\u7684\u573A\u666F\u5C31\u662F\u5728\u5730\u5740\u680F\u8F93\u5165\u5173\u952E\u5B57\u8FDB\u884C\u641C\u7D22\u6216\u8005\u8F93\u5165\u5730\u5740\u5BFC\u822A\u5230\u67D0\u4E2A\u7F51\u7AD9\uFF0C\u6211\u4EEC\u6765\u770B\u770B\u6D4F\u89C8\u5668\u662F\u600E\u4E48\u770B\u5F85\u8FD9\u4E2A\u8FC7\u7A0B\u7684\u3002</p><p>\u6211\u4EEC\u77E5\u9053\u6D4F\u89C8\u5668 Tab \u5916\u7684\u5DE5\u4F5C\u4E3B\u8981\u7531 Browser Process \u638C\u63A7\uFF0CBrowser Process \u53C8\u5BF9\u8FD9\u4E9B\u5DE5\u4F5C\u8FDB\u4E00\u6B65\u5212\u5206\uFF0C\u4F7F\u7528\u4E0D\u540C\u7EBF\u7A0B\u8FDB\u884C\u5904\u7406\uFF1A</p><ul><li>UI thread \uFF1A \u63A7\u5236\u6D4F\u89C8\u5668\u4E0A\u7684\u6309\u94AE\u53CA\u8F93\u5165\u6846\uFF1B</li><li>network thread: \u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u4ECE\u7F51\u4E0A\u83B7\u53D6\u6570\u636E\uFF1B</li><li>storage thread: \u63A7\u5236\u6587\u4EF6\u7B49\u7684\u8BBF\u95EE\uFF1B</li></ul><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_BFC7B817-9F34-4569-B6C5-A8D20D40B17D.jpg" alt="2022_03_09_BFC7B817-9F34-4569-B6C5-A8D20D40B17D"></p><p>\u6D4F\u89C8\u5668\u4E3B\u8FDB\u7A0B\u4E2D\u7684\u4E0D\u540C\u7EBF\u7A0B</p><p>\u5F53\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u4E2D\u8F93\u5165\u6587\u5B57\uFF0C\u5E76\u70B9\u51FB\u56DE\u8F66\u83B7\u5F97\u9875\u9762\u5185\u5BB9\u7684\u8FC7\u7A0B\u5728\u6D4F\u89C8\u5668\u770B\u6765\u53EF\u4EE5\u5206\u4E3A\u4EE5\u4E0B\u51E0\u6B65\uFF1A</p><ol><li>\u5904\u7406\u8F93\u5165</li></ol><p>UI thread \u9700\u8981\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u662F URL \u8FD8\u662F query\uFF1B</p><ol start="2"><li>\u5F00\u59CB\u5BFC\u822A</li></ol><p>\u5F53\u7528\u6237\u70B9\u51FB\u56DE\u8F66\u952E\uFF0CUI thread \u901A\u77E5 network thread \u83B7\u53D6\u7F51\u9875\u5185\u5BB9\uFF0C\u5E76\u63A7\u5236 tab \u4E0A\u7684 spinner \u5C55\u73B0\uFF0C\u8868\u793A\u6B63\u5728\u52A0\u8F7D\u4E2D\u3002</p><p>network thread \u4F1A\u6267\u884C DNS \u67E5\u8BE2\uFF0C\u968F\u540E\u4E3A\u8BF7\u6C42\u5EFA\u7ACB TLS \u8FDE\u63A5\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_F75A6A42-11C7-42BC-93EB-1463D6E4B605.jpg" alt="2022_03_09_F75A6A42-11C7-42BC-93EB-1463D6E4B605"></p><p>UI thread \u901A\u77E5 Network thread \u52A0\u8F7D\u76F8\u5173\u4FE1\u606F</p><p>\u5982\u679C network thread \u63A5\u6536\u5230\u4E86\u91CD\u5B9A\u5411\u8BF7\u6C42\u5934\u5982 301\uFF0Cnetwork thread \u4F1A\u901A\u77E5 UI thread \u670D\u52A1\u5668\u8981\u6C42\u91CD\u5B9A\u5411\uFF0C\u4E4B\u540E\uFF0C\u53E6\u5916\u4E00\u4E2A URL \u8BF7\u6C42\u4F1A\u88AB\u89E6\u53D1\u3002</p><ol start="3"><li>\u8BFB\u53D6\u54CD\u5E94</li></ol>',53),n=o("\u5F53\u8BF7\u6C42\u54CD\u5E94\u8FD4\u56DE\u7684\u65F6\u5019\uFF0Cnetwork thread \u4F1A\u4F9D\u636E "),d={href:"https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types",target:"_blank",rel:"noopener noreferrer"},m=o("Content-Type"),g=o(" \u53CA MIME Type sniffing \u5224\u65AD\u54CD\u5E94\u5185\u5BB9\u7684\u683C\u5F0F\u3002"),u=e("p",null,[e("img",{src:"https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_69720479-0DB9-4183-9A53-EAAA995E5783.jpg",alt:"2022_03_09_69720479-0DB9-4183-9A53-EAAA995E5783"})],-1),C=e("p",null,"\u5224\u65AD\u54CD\u5E94\u5185\u5BB9\u7684\u683C\u5F0F",-1),B=e("p",null,"\u5982\u679C\u54CD\u5E94\u5185\u5BB9\u7684\u683C\u5F0F\u662F HTML \uFF0C\u4E0B\u4E00\u6B65\u5C06\u4F1A\u628A\u8FD9\u4E9B\u6570\u636E\u4F20\u9012\u7ED9 renderer process\uFF0C\u5982\u679C\u662F zip \u6587\u4EF6\u6216\u8005\u5176\u5B83\u6587\u4EF6\uFF0C\u4F1A\u628A\u76F8\u5173\u6570\u636E\u4F20\u8F93\u7ED9\u4E0B\u8F7D\u7BA1\u7406\u5668\u3002",-1),A={href:"https://link.zhihu.com/?target=https%3A//safebrowsing.google.com/",target:"_blank",rel:"noopener noreferrer"},E=o("Safe Browsing"),D=o(" \u68C0\u67E5\u4E5F\u4F1A\u5728\u6B64\u65F6\u89E6\u53D1\uFF0C\u5982\u679C\u57DF\u540D\u6216\u8005\u8BF7\u6C42\u5185\u5BB9\u5339\u914D\u5230\u5DF2\u77E5\u7684\u6076\u610F\u7AD9\u70B9\uFF0Cnetwork thread \u4F1A\u5C55\u793A\u4E00\u4E2A\u8B66\u544A\u9875\u3002\u6B64\u5916 "),F={href:"https://link.zhihu.com/?target=https%3A//www.chromium.org/Home/chromium-security/corb-for-developers",target:"_blank",rel:"noopener noreferrer"},w=o("CORB"),k=o(" \u68C0\u6D4B\u4E5F\u4F1A\u89E6\u53D1\u786E\u4FDD\u654F\u611F\u6570\u636E\u4E0D\u4F1A\u88AB\u4F20\u9012\u7ED9\u6E32\u67D3\u8FDB\u7A0B\u3002"),f=s('<p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_2D4684D6-4DC7-4F2B-85A1-1A5A5166997F.jpg" alt="2022_03_09_2D4684D6-4DC7-4F2B-85A1-1A5A5166997F"></p><ol start="4"><li>\u67E5\u627E\u6E32\u67D3\u8FDB\u7A0B</li></ol><p>\u5F53\u4E0A\u8FF0\u6240\u6709\u68C0\u67E5\u5B8C\u6210\uFF0Cnetwork thread \u786E\u4FE1\u6D4F\u89C8\u5668\u53EF\u4EE5\u5BFC\u822A\u5230\u8BF7\u6C42\u7F51\u9875\uFF0Cnetwork thread \u4F1A\u901A\u77E5 UI thread \u6570\u636E\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0CUI thread \u4F1A\u67E5\u627E\u5230\u4E00\u4E2A renderer process \u8FDB\u884C\u7F51\u9875\u7684\u6E32\u67D3\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_C3030765-3104-4DCE-8C97-E411A753CC4B.jpg" alt="2022_03_09_C3030765-3104-4DCE-8C97-E411A753CC4B"></p><p>\u6536\u5230 Network thread \u8FD4\u56DE\u7684\u6570\u636E\u540E\uFF0CUI thread \u67E5\u627E\u76F8\u5173\u7684\u6E32\u67D3\u8FDB\u7A0B</p><blockquote><p>\u7531\u4E8E\u7F51\u7EDC\u8BF7\u6C42\u83B7\u53D6\u54CD\u5E94\u9700\u8981\u65F6\u95F4\uFF0C\u8FD9\u91CC\u5176\u5B9E\u8FD8\u5B58\u5728\u7740\u4E00\u4E2A\u52A0\u901F\u65B9\u6848\u3002\u5F53 UI thread \u53D1\u9001 URL \u8BF7\u6C42\u7ED9 network thread \u65F6\uFF0C\u6D4F\u89C8\u5668\u5176\u5B9E\u5DF2\u7ECF\u77E5\u9053\u4E86\u5C06\u8981\u5BFC\u822A\u5230\u90A3\u4E2A\u7AD9\u70B9\u3002UI thread \u4F1A\u5E76\u884C\u7684\u9884\u5148\u67E5\u627E\u548C\u542F\u52A8\u4E00\u4E2A\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u5982\u679C\u4E00\u5207\u6B63\u5E38\uFF0C\u5F53 network thread \u63A5\u6536\u5230\u6570\u636E\u65F6\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u5DF2\u7ECF\u51C6\u5907\u5C31\u7EEA\u4E86\uFF0C\u4F46\u662F\u5982\u679C\u9047\u5230\u91CD\u5B9A\u5411\uFF0C\u51C6\u5907\u597D\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E5F\u8BB8\u5C31\u4E0D\u53EF\u7528\u4E86\uFF0C\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u91CD\u542F\u4E00\u4E2A\u65B0\u7684\u6E32\u67D3\u8FDB\u7A0B\u3002</p></blockquote><ol start="5"><li>\u786E\u8BA4\u5BFC\u822A</li></ol><p>\u8BB2\u8FC7\u4E86\u4E0A\u8FF0\u8FC7\u7A0B\uFF0C\u6570\u636E\u4EE5\u53CA\u6E32\u67D3\u8FDB\u7A0B\u90FD\u53EF\u7528\u4E86\uFF0C Browser Process \u4F1A\u7ED9 renderer process \u53D1\u9001 IPC \u6D88\u606F\u6765\u786E\u8BA4\u5BFC\u822A\uFF0C\u4E00\u65E6 Browser Process \u6536\u5230 renderer process \u7684\u6E32\u67D3\u786E\u8BA4\u6D88\u606F\uFF0C\u5BFC\u822A\u8FC7\u7A0B\u7ED3\u675F\uFF0C\u9875\u9762\u52A0\u8F7D\u8FC7\u7A0B\u5F00\u59CB\u3002</p><p>\u6B64\u65F6\uFF0C\u5730\u5740\u680F\u4F1A\u66F4\u65B0\uFF0C\u5C55\u793A\u51FA\u65B0\u9875\u9762\u7684\u7F51\u9875\u4FE1\u606F\u3002history tab \u4F1A\u66F4\u65B0\uFF0C\u53EF\u901A\u8FC7\u8FD4\u56DE\u952E\u8FD4\u56DE\u5BFC\u822A\u6765\u7684\u9875\u9762\uFF0C\u4E3A\u4E86\u8BA9\u5173\u95ED tab \u6216\u8005\u7A97\u53E3\u540E\u4FBF\u4E8E\u6062\u590D\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u4F1A\u5B58\u653E\u5728\u786C\u76D8\u4E2D\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_0A697578-6FCE-48B8-B04B-40E25069C094.jpg" alt="2022_03_09_0A697578-6FCE-48B8-B04B-40E25069C094"></p><p>Browser Process \u548C Renderer Process \u901A\u8FC7 IPC \u901A\u4FE1\uFF0C\u8BF7\u6C42 Renderer Process \u6E32\u67D3\u9875\u9762</p><ol start="6"><li>\u989D\u5916\u7684\u6B65\u9AA4</li></ol><p>\u4E00\u65E6\u5BFC\u822A\u88AB\u786E\u8BA4\uFF0Crenderer process \u4F1A\u4F7F\u7528\u76F8\u5173\u7684\u8D44\u6E90\u6E32\u67D3\u9875\u9762\uFF0C\u4E0B\u6587\u4E2D\u6211\u4EEC\u5C06\u91CD\u70B9\u4ECB\u7ECD\u6E32\u67D3\u6D41\u7A0B\u3002\u5F53 renderer process \u6E32\u67D3\u7ED3\u675F\uFF08\u6E32\u67D3\u7ED3\u675F\u610F\u5473\u7740\u8BE5\u9875\u9762\u5185\u7684\u6240\u6709\u7684\u9875\u9762\uFF0C\u5305\u62EC\u6240\u6709 iframe \u90FD\u89E6\u53D1\u4E86 onload \u65F6\uFF09\uFF0C\u4F1A\u53D1\u9001 IPC \u4FE1\u53F7\u5230 Browser process\uFF0C UI thread \u4F1A\u505C\u6B62\u5C55\u793A tab \u4E2D\u7684 spinner\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_4BAA359F-1722-485D-86AF-39CCB2D029D2.jpg" alt="2022_03_09_4BAA359F-1722-485D-86AF-39CCB2D029D2"></p><p>Renderer Process \u53D1\u9001 IPC \u6D88\u606F\u901A\u77E5 browser process \u9875\u9762\u5DF2\u7ECF\u52A0\u8F7D\u5B8C\u6210</p><p>\u5F53\u7136\u4E0A\u9762\u7684\u6D41\u7A0B\u53EA\u662F\u7F51\u9875\u9996\u5E27\u6E32\u67D3\u5B8C\u6210\uFF0C\u5728\u6B64\u4E4B\u540E\uFF0C\u5BA2\u6237\u7AEF\u4F9D\u65E7\u53EF\u4E0B\u8F7D\u989D\u5916\u7684\u8D44\u6E90\u6E32\u67D3\u51FA\u65B0\u7684\u89C6\u56FE\u3002</p><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u660E\u786E\u4E00\u70B9\uFF0C\u6240\u6709\u7684 JS \u4EE3\u7801\u5176\u5B9E\u90FD\u7531 renderer Process \u63A7\u5236\u7684\uFF0C\u6240\u4EE5\u5728\u4F60\u6D4F\u89C8\u7F51\u9875\u5185\u5BB9\u7684\u8FC7\u7A0B\u5927\u90E8\u5206\u65F6\u5019\u4E0D\u4F1A\u6D89\u53CA\u5230\u5176\u5B83\u7684\u8FDB\u7A0B\u3002\u4E0D\u8FC7\u4E5F\u8BB8\u4F60\u4E5F\u66FE\u7ECF\u76D1\u542C\u8FC7 beforeunload \u4E8B\u4EF6\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u518D\u6B21\u6D89\u53CA\u5230 Browser Process \u548C renderer Process \u7684\u4EA4\u4E92\uFF0C\u5F53\u5F53\u524D\u9875\u9762\u5173\u95ED\u65F6\uFF08\u5173\u95ED Tab \uFF0C\u5237\u65B0\u7B49\u7B49\uFF09\uFF0CBrowser Process \u9700\u8981\u901A\u77E5 renderer Process \u8FDB\u884C\u76F8\u5173\u7684\u68C0\u67E5\uFF0C\u5BF9\u76F8\u5173\u4E8B\u4EF6\u8FDB\u884C\u5904\u7406\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_504B19E4-3568-443E-99E7-953466F190F2.jpg" alt="2022_03_09_504B19E4-3568-443E-99E7-953466F190F2"></p><p>\u6D4F\u89C8\u5668\u8FDB\u7A0B\u53D1\u9001 IPC \u6D88\u606F\u7ED9\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u901A\u77E5\u8981\u79BB\u5F00\u5F53\u524D\u7F51\u7AD9\u4E86</p><p>\u5982\u679C\u5BFC\u822A\u7531 renderer process \u89E6\u53D1\uFF08\u6BD4\u5982\u5728\u7528\u6237\u70B9\u51FB\u67D0\u94FE\u63A5\uFF0C\u6216\u8005JS\u6267\u884C <code>window.location = &quot;[http://newsite.com](https://link.zhihu.com/?target=http%3A//newsite.com/)&quot; </code> \uFF09 renderer process \u4F1A\u9996\u5148\u68C0\u67E5\u662F\u5426\u6709 <code>beforeunload</code> \u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u5BFC\u822A\u8BF7\u6C42\u7531 renderer process \u4F20\u9012\u7ED9 Browser process \u3002</p><p>\u5982\u679C\u5BFC\u822A\u5230\u65B0\u7684\u7F51\u7AD9\uFF0C\u4F1A\u542F\u7528\u4E00\u4E2A\u65B0\u7684 render process \u6765\u5904\u7406\u65B0\u9875\u9762\u7684\u6E32\u67D3\uFF0C\u8001\u7684\u8FDB\u7A0B\u4F1A\u7559\u4E0B\u6765\u5904\u7406\u7C7B\u4F3C <code>unload</code> \u7B49\u4E8B\u4EF6\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_4DAD8CD2-0230-424E-BB57-5CA5DCB9D232.jpg" alt="2022_03_09_4DAD8CD2-0230-424E-BB57-5CA5DCB9D232"></p><p>\u6D4F\u89C8\u5668\u8FDB\u7A0B\u53D1\u9001 IPC \u6D88\u606F\u5230\u65B0\u7684\u6E32\u67D3\u8FDB\u7A0B\u901A\u77E5\u6E32\u67D3\u65B0\u7684\u9875\u9762\uFF0C\u540C\u65F6\u901A\u77E5\u65E7\u7684\u6E32\u67D3\u8FDB\u7A0B\u5378\u8F7D</p><p>\u9664\u4E86\u4E0A\u8FF0\u6D41\u7A0B\uFF0C\u6709\u4E9B\u9875\u9762\u8FD8\u62E5\u6709 Service Worker \uFF08\u670D\u52A1\u5DE5\u4F5C\u7EBF\u7A0B\uFF09\uFF0CService Worker \u8BA9\u5F00\u53D1\u8005\u5BF9\u672C\u5730\u7F13\u5B58\u53CA\u5224\u65AD\u4F55\u65F6\u4ECE\u7F51\u7EDC\u4E0A\u83B7\u53D6\u4FE1\u606F\u6709\u4E86\u66F4\u591A\u7684\u63A7\u5236\u6743\uFF0C\u5982\u679C Service Worker \u88AB\u8BBE\u7F6E\u4E3A\u4ECE\u672C\u5730 cache \u4E2D\u52A0\u8F7D\u6570\u636E\uFF0C\u90A3\u4E48\u5C31\u6CA1\u6709\u5FC5\u8981\u4ECE\u7F51\u4E0A\u83B7\u53D6\u66F4\u591A\u6570\u636E\u4E86\u3002</p><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F service worker \u4E5F\u662F\u8FD0\u884C\u5728\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u7684 JS \u4EE3\u7801\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u62E5\u6709 Service Worker \u7684\u9875\u9762\uFF0C\u4E0A\u8FF0\u6D41\u7A0B\u6709\u4E9B\u8BB8\u7684\u4E0D\u540C\u3002</p><p>\u5F53\u6709 Service Worker \u88AB\u6CE8\u518C\u65F6\uFF0C\u5176\u4F5C\u7528\u57DF\u4F1A\u88AB\u4FDD\u5B58\uFF0C\u5F53\u6709\u5BFC\u822A\u65F6\uFF0Cnetwork thread \u4F1A\u5728\u6CE8\u518C\u8FC7\u7684 Service Worker \u7684\u4F5C\u7528\u57DF\u4E2D\u68C0\u67E5\u76F8\u5173\u57DF\u540D\uFF0C\u5982\u679C\u5B58\u5728\u5BF9\u5E94\u7684 Service worker\uFF0CUI thread \u4F1A\u627E\u5230\u4E00\u4E2A renderer process \u6765\u5904\u7406\u76F8\u5173\u4EE3\u7801\uFF0CService Worker \u53EF\u80FD\u4F1A\u4ECE cache \u4E2D\u52A0\u8F7D\u6570\u636E\uFF0C\u4ECE\u800C\u7EC8\u6B62\u5BF9\u7F51\u7EDC\u7684\u8BF7\u6C42\uFF0C\u4E5F\u53EF\u80FD\u4ECE\u7F51\u4E0A\u8BF7\u6C42\u65B0\u7684\u6570\u636E\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_5322C7A9-E678-4CF6-B3FC-D76773BBC005.jpg" alt="2022_03_09_5322C7A9-E678-4CF6-B3FC-D76773BBC005"></p><p>Service Worker \u4F9D\u636E\u5177\u4F53\u60C5\u5F62\u505A\u5904\u7406</p><p>\u5982\u679C Service Worker \u6700\u7EC8\u51B3\u5B9A\u901A\u8FC7\u7F51\u4E0A\u83B7\u53D6\u6570\u636E\uFF0CBrowser \u8FDB\u7A0B \u548C renderer \u8FDB\u7A0B\u7684\u4EA4\u4E92\u5176\u5B9E\u4F1A\u5EF6\u540E\u6570\u636E\u7684\u8BF7\u6C42\u65F6\u95F4 \u3002Navigation Preload \u662F\u4E00\u79CD\u4E0E Service Worker \u5E76\u884C\u7684\u52A0\u901F\u52A0\u8F7D\u8D44\u6E90\u7684\u673A\u5236\uFF0C\u670D\u52A1\u7AEF\u901A\u8FC7\u8BF7\u6C42\u5934\u53EF\u4EE5\u8BC6\u522B\u8FD9\u7C7B\u8BF7\u6C42\uFF0C\u800C\u505A\u51FA\u76F8\u5E94\u7684\u5904\u7406\u3002</p><hr><h2 id="\u6E32\u67D3\u8FDB\u7A0B\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u8FDB\u7A0B\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> \u6E32\u67D3\u8FDB\u7A0B\u662F\u5982\u4F55\u5DE5\u4F5C\u7684</h2><p>\u6E32\u67D3\u8FDB\u7A0B\u51E0\u4E4E\u8D1F\u8D23 Tab \u5185\u7684\u6240\u6709\u4E8B\u60C5\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u7684\u6838\u5FC3\u76EE\u7684\u5728\u4E8E\u8F6C\u6362 HTML CSS JS \u4E3A\u7528\u6237\u53EF\u4EA4\u4E92\u7684 web \u9875\u9762\u3002\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u7EBF\u7A0B\uFF1A</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_28_7ACD520A-7538-4213-96B9-5365547E1046.jpg" alt="2022_03_28_7ACD520A-7538-4213-96B9-5365547E1046"></p><p>\u6E32\u67D3\u8FDB\u7A0B\u5305\u542B\u7684\u7EBF\u7A0B</p><ol><li>\u4E3B\u7EBF\u7A0B Main thread</li><li>\u5DE5\u4F5C\u7EBF\u7A0B Worker thread</li><li>\u6392\u7248\u7EBF\u7A0B Compositor thread</li><li>\u5149\u6805\u7EBF\u7A0B Raster thread</li></ol><p>\u540E\u6587\u6211\u4EEC\u5C06\u9010\u6B65\u4ECB\u7ECD\u4E0D\u540C\u7EBF\u7A0B\u7684\u804C\u8D23\uFF0C\u5728\u6B64\u4E4B\u524D\u6211\u4EEC\u5148\u770B\u770B\u6E32\u67D3\u7684\u6D41\u7A0B</p><ol><li>\u6784\u5EFA DOM</li></ol><p>\u5F53\u6E32\u67D3\u8FDB\u7A0B\u63A5\u6536\u5230\u5BFC\u822A\u7684\u786E\u8BA4\u4FE1\u606F\uFF0C\u5F00\u59CB\u63A5\u53D7 HTML \u6570\u636E\u65F6\uFF0C\u4E3B\u7EBF\u7A0B\u4F1A\u89E3\u6790\u6587\u672C\u5B57\u7B26\u4E32\u4E3A DOM\u3002</p>',38),S=o("\u6E32\u67D3 html \u4E3A DOM \u7684\u65B9\u6CD5\u7531 "),P={href:"https://link.zhihu.com/?target=https%3A//html.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"},b=o("HTML Standard"),z=o(" \u5B9A\u4E49\u3002"),I=s('<ol start="2"><li>\u52A0\u8F7D\u6B21\u7EA7\u7684\u8D44\u6E90</li></ol><p>\u7F51\u9875\u4E2D\u5E38\u5E38\u5305\u542B\u8BF8\u5982\u56FE\u7247\uFF0CCSS\uFF0CJS \u7B49\u989D\u5916\u7684\u8D44\u6E90\uFF0C\u8FD9\u4E9B\u8D44\u6E90\u9700\u8981\u4ECE\u7F51\u7EDC\u4E0A\u6216\u8005 cache \u4E2D\u83B7\u53D6\u3002\u4E3B\u8FDB\u7A0B\u53EF\u4EE5\u5728\u6784\u5EFA DOM \u7684\u8FC7\u7A0B\u4E2D\u4F1A\u9010\u4E00\u8BF7\u6C42\u5B83\u4EEC\uFF0C\u4E3A\u4E86\u52A0\u901F preload scanner \u4F1A\u540C\u65F6\u8FD0\u884C\uFF0C\u5982\u679C\u5728 html \u4E2D\u5B58\u5728 <code>&lt;img&gt;</code> <code>&lt;link&gt;</code> \u7B49\u6807\u7B7E\uFF0Cpreload scanner \u4F1A\u628A\u8FD9\u4E9B\u8BF7\u6C42\u4F20\u9012\u7ED9 Browser process \u4E2D\u7684 network thread \u8FDB\u884C\u76F8\u5173\u8D44\u6E90\u7684\u4E0B\u8F7D\u3002</p><ol start="3"><li>JS \u7684\u4E0B\u8F7D\u4E0E\u6267\u884C</li></ol><p>\u5F53\u9047\u5230 <code>&lt;script&gt;</code> \u6807\u7B7E\u65F6\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u505C\u6B62\u89E3\u6790 HTML\uFF0C\u800C\u53BB\u52A0\u8F7D\uFF0C\u89E3\u6790\u548C\u6267\u884C JS \u4EE3\u7801\uFF0C\u505C\u6B62\u89E3\u6790 html \u7684\u539F\u56E0\u5728\u4E8E JS \u53EF\u80FD\u4F1A\u6539\u53D8 DOM \u7684\u7ED3\u6784\uFF08\u4F7F\u7528\u8BF8\u5982 <code>document.write()</code>\u7B49API\uFF09\u3002</p>',4),y=o("\u4E0D\u8FC7\u5F00\u53D1\u8005\u5176\u5B9E\u4E5F\u6709\u591A\u79CD\u65B9\u5F0F\u6765\u544A\u77E5\u6D4F\u89C8\u5668\u5E94\u5BF9\u5982\u4F55\u5E94\u5BF9\u67D0\u4E2A\u8D44\u6E90\uFF0C\u6BD4\u5982\u8BF4\u5982\u679C\u5728"),q=e("code",null,"<script>",-1),U=o(" \u6807\u7B7E\u4E0A\u6DFB\u52A0\u4E86 "),j=e("code",null,"async",-1),M=o(" \u6216 "),v=e("code",null,"defer",-1),T=o(" \u7B49\u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5F02\u6B65\u7684\u52A0\u8F7D\u548C\u6267\u884CJS\u4EE3\u7801\uFF0C\u800C\u4E0D\u4F1A\u963B\u585E\u6E32\u67D3\u3002\u66F4\u591A\u7684\u65B9\u6CD5\u53EF\u53C2\u8003 "),x={href:"https://link.zhihu.com/?target=https%3A//developers.google.com/web/fundamentals/performance/resource-prioritization",target:"_blank",rel:"noopener noreferrer"},W=o("Resource Prioritization \u2013 Getting the Browser to Help You"),L=s('<ol start="4"><li>\u6837\u5F0F\u8BA1\u7B97</li></ol><p>\u4EC5\u4EC5\u6E32\u67D3 DOM \u8FD8\u4E0D\u8DB3\u4EE5\u83B7\u77E5\u9875\u9762\u7684\u5177\u4F53\u6837\u5F0F\uFF0C\u4E3B\u8FDB\u7A0B\u8FD8\u4F1A\u57FA\u4E8E CSS \u9009\u62E9\u5668\u89E3\u6790 CSS \u83B7\u53D6\u6BCF\u4E00\u4E2A\u8282\u70B9\u7684\u6700\u7EC8\u7684\u8BA1\u7B97\u6837\u5F0F\u503C\u3002\u5373\u4F7F\u4E0D\u63D0\u4F9B\u4EFB\u4F55 CSS\uFF0C\u6D4F\u89C8\u5668\u5BF9\u6BCF\u4E2A\u5143\u7D20\u4E5F\u4F1A\u6709\u4E00\u4E2A\u9ED8\u8BA4\u7684\u6837\u5F0F\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_20C9B758-1119-4F7B-8251-A00FC13F24D5.jpg" alt="2022_03_09_20C9B758-1119-4F7B-8251-A00FC13F24D5"></p><p>\u6E32\u67D3\u8FDB\u7A0B\u4E3B\u7EBF\u7A0B\u8BA1\u7B97\u6BCF\u4E00\u4E2A\u5143\u7D20\u8282\u70B9\u7684\u6700\u7EC8\u6837\u5F0F\u503C</p><ol start="5"><li>\u83B7\u53D6\u5E03\u5C40</li></ol><p>\u60F3\u8981\u6E32\u67D3\u4E00\u4E2A\u5B8C\u6574\u7684\u9875\u9762\uFF0C\u9664\u4E86\u83B7\u77E5\u6BCF\u4E2A\u8282\u70B9\u7684\u5177\u4F53\u6837\u5F0F\uFF0C\u8FD8\u9700\u8981\u83B7\u77E5\u6BCF\u4E00\u4E2A\u8282\u70B9\u5728\u9875\u9762\u4E0A\u7684\u4F4D\u7F6E\uFF0C\u5E03\u5C40\u5176\u5B9E\u662F\u627E\u5230\u6240\u6709\u5143\u7D20\u7684\u51E0\u4F55\u5173\u7CFB\u7684\u8FC7\u7A0B\u3002\u5176\u5177\u4F53\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><p>\u901A\u8FC7\u904D\u5386 DOM \u53CA\u76F8\u5173\u5143\u7D20\u7684\u8BA1\u7B97\u6837\u5F0F\uFF0C\u4E3B\u7EBF\u7A0B\u4F1A\u6784\u5EFA\u51FA\u5305\u542B\u6BCF\u4E2A\u5143\u7D20\u7684\u5750\u6807\u4FE1\u606F\u53CA\u76D2\u5B50\u5927\u5C0F\u7684\u5E03\u5C40\u6811\u3002\u5E03\u5C40\u6811\u548C DOM \u6811\u7C7B\u4F3C\uFF0C\u4F46\u662F\u5176\u4E2D\u53EA\u5305\u542B\u9875\u9762\u53EF\u89C1\u7684\u5143\u7D20\uFF0C\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u8BBE\u7F6E\u4E86 <code>display:none</code> \uFF0C\u8FD9\u4E2A\u5143\u7D20\u4E0D\u4F1A\u51FA\u73B0\u5728\u5E03\u5C40\u6811\u4E0A\uFF0C\u4F2A\u5143\u7D20\u867D\u7136\u5728 DOM \u6811\u4E0A\u4E0D\u53EF\u89C1\uFF0C\u4F46\u662F\u5728\u5E03\u5C40\u6811\u4E0A\u662F\u53EF\u89C1\u7684\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_36369A3A-95AD-4081-BBF7-C4B6F8AD1EE4.jpg" alt="2022_03_09_36369A3A-95AD-4081-BBF7-C4B6F8AD1EE4"></p><p>\u4E3B\u7EBF\u7A0B\u904D\u5386 DOM \u53CA \u5BF9\u5E94\u5143\u7D20\u7684\u6837\u5F0F\uFF0C\u6784\u5EFA\u51FA\u5E03\u5C40\u6811</p><ol start="6"><li>\u7ED8\u5236\u5404\u5143\u7D20</li></ol><p>\u5373\u4F7F\u77E5\u9053\u4E86\u4E0D\u540C\u5143\u7D20\u7684\u4F4D\u7F6E\u53CA\u6837\u5F0F\u4FE1\u606F\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u77E5\u9053\u4E0D\u540C\u5143\u7D20\u7684\u7ED8\u5236\u5148\u540E\u987A\u5E8F\u624D\u80FD\u6B63\u786E\u7ED8\u5236\u51FA\u6574\u4E2A\u9875\u9762\u3002\u5728\u7ED8\u5236\u9636\u6BB5\uFF0C\u4E3B\u7EBF\u7A0B\u4F1A\u904D\u5386\u5E03\u5C40\u6811\u4EE5\u521B\u5EFA\u7ED8\u5236\u8BB0\u5F55\u3002\u7ED8\u5236\u8BB0\u5F55\u53EF\u4EE5\u770B\u505A\u662F\u8BB0\u5F55\u5404\u5143\u7D20\u7ED8\u5236\u5148\u540E\u987A\u5E8F\u7684\u7B14\u8BB0\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_EF476583-19FB-4BE8-9365-98C994588C5E.jpg" alt="2022_03_09_EF476583-19FB-4BE8-9365-98C994588C5E"></p><p>\u4E3B\u7EBF\u7A0B\u4F9D\u636E\u5E03\u5C40\u6811\u6784\u5EFA\u7ED8\u5236\u8BB0\u5F55</p><ol start="7"><li>\u5408\u6210\u5E27</li></ol><p>\u590D\u5408\u662F\u4E00\u79CD\u5206\u5272\u9875\u9762\u4E3A\u4E0D\u540C\u7684\u5C42\uFF0C\u5E76\u5355\u72EC\u6805\u683C\u5316\uFF0C\u968F\u540E\u7EC4\u5408\u4E3A\u5E27\u7684\u6280\u672F\u3002\u4E0D\u540C\u5C42\u7684\u7EC4\u5408\u7531 compositor \u7EBF\u7A0B\uFF08\u5408\u6210\u5668\u7EBF\u7A0B\uFF09\u5B8C\u6210\u3002</p><p>\u4E3B\u7EBF\u7A0B\u4F1A\u904D\u5386\u5E03\u5C40\u6811\u6765\u521B\u5EFA\u5C42\u6811\uFF08layer tree\uFF09\uFF0C\u6DFB\u52A0\u4E86 <code>will-change</code> CSS \u5C5E\u6027\u7684\u5143\u7D20\uFF0C\u4F1A\u88AB\u770B\u505A\u5355\u72EC\u7684\u4E00\u5C42\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_3CDB1654-AECD-4FB8-8BEC-4CD075E12B95.jpg" alt="2022_03_09_3CDB1654-AECD-4FB8-8BEC-4CD075E12B95"></p><p>\u4E3B\u7EBF\u7A0B\u904D\u5386\u5E03\u5C40\u6811\u751F\u6210\u5C42\u6811</p><p>\u4F60\u53EF\u80FD\u4F1A\u60F3\u7ED9\u6BCF\u4E00\u4E2A\u5143\u7D20\u90FD\u6DFB\u52A0\u4E0A <code>will-change</code>\uFF0C\u4E0D\u8FC7\u7EC4\u5408\u8FC7\u591A\u7684\u5C42\u4E5F\u8BB8\u4F1A\u6BD4\u5728\u6BCF\u4E00\u5E27\u90FD\u6805\u683C\u5316\u9875\u9762\u4E2D\u7684\u67D0\u4E9B\u5C0F\u90E8\u5206\u66F4\u6162\u3002</p><p>\u4E00\u65E6\u5C42\u6811\u88AB\u521B\u5EFA\uFF0C\u6E32\u67D3\u987A\u5E8F\u88AB\u786E\u5B9A\uFF0C\u4E3B\u7EBF\u7A0B\u4F1A\u628A\u8FD9\u4E9B\u4FE1\u606F\u901A\u77E5\u7ED9\u5408\u6210\u5668\u7EBF\u7A0B\uFF0C\u5408\u6210\u5668\u7EBF\u7A0B\u4F1A\u6805\u683C\u5316\u6BCF\u4E00\u5C42\u3002\u6709\u7684\u5C42\u7684\u53EF\u4EE5\u8FBE\u5230\u6574\u4E2A\u9875\u9762\u7684\u5927\u5C0F\uFF0C\u56E0\u6B64\uFF0C\u5408\u6210\u5668\u7EBF\u7A0B\u5C06\u5B83\u4EEC\u5206\u6210\u591A\u4E2A\u78C1\u8D34\uFF0C\u5E76\u5C06\u6BCF\u4E2A\u78C1\u8D34\u53D1\u9001\u5230\u6805\u683C\u7EBF\u7A0B\uFF0C\u6805\u683C\u7EBF\u7A0B\u4F1A\u6805\u683C\u5316\u6BCF\u4E00\u4E2A\u78C1\u8D34\u5E76\u5B58\u50A8\u5728 GPU \u663E\u5B58\u4E2D\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_5E391EFF-61E6-414B-9B52-8F798DA4CB08.jpg" alt="2022_03_09_5E391EFF-61E6-414B-9B52-8F798DA4CB08"></p><p>\u6805\u683C\u7EBF\u7A0B\u4F1A\u6805\u683C\u5316\u6BCF\u4E00\u4E2A\u78C1\u8D34\u5E76\u5B58\u50A8\u5728 GPU \u663E\u5B58\u4E2D</p><p>\u4E00\u65E6\u78C1\u8D34\u88AB\u5149\u6805\u5316\uFF0C\u5408\u6210\u5668\u7EBF\u7A0B\u4F1A\u6536\u96C6\u79F0\u4E3A\u7ED8\u5236\u56DB\u8FB9\u5F62\u7684\u78C1\u8D34\u4FE1\u606F\u4EE5\u521B\u5EFA\u5408\u6210\u5E27\u3002</p><p>\u5408\u6210\u5E27\u968F\u540E\u4F1A\u901A\u8FC7 IPC \u6D88\u606F\u4F20\u9012\u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF0C\u7531\u4E8E\u6D4F\u89C8\u5668\u7684 UI \u6539\u53D8\u6216\u8005\u5176\u5B83\u62D3\u5C55\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u5408\u6210\u5E27\uFF0C\u8FD9\u4E9B\u5408\u6210\u5E27\u4F1A\u88AB\u4F20\u9012\u7ED9 GPU \u7528\u4EE5\u5C55\u793A\u5728\u5C4F\u5E55\u4E0A\uFF0C\u5982\u679C\u6EDA\u52A8\u53D1\u751F\uFF0C\u5408\u6210\u5668\u7EBF\u7A0B\u4F1A\u521B\u5EFA\u53E6\u4E00\u4E2A\u5408\u6210\u5E27\u53D1\u9001\u7ED9 GPU\u3002</p><p><img src="https://images-1256612942.cos.ap-guangzhou.myqcloud.com/2022_03_09_9E6D800E-8615-4285-AD31-47F4A5ECD3E8.jpg" alt="2022_03_09_9E6D800E-8615-4285-AD31-47F4A5ECD3E8"></p><p>\u5408\u6210\u5668\u7EBF\u7A0B\u4F1A\u53D1\u9001\u5408\u6210\u5E27\u7ED9 GPU \u6E32\u67D3</p>',26),O=o("\u5408\u6210\u5668\u7684\u4F18\u70B9\u5728\u4E8E\uFF0C\u5176\u5DE5\u4F5C\u65E0\u5173\u4E3B\u7EBF\u7A0B\uFF0C\u5408\u6210\u5668\u7EBF\u7A0B\u4E0D\u9700\u8981\u7B49\u5F85\u6837\u5F0F\u8BA1\u7B97\u6216\u8005 JS \u6267\u884C\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48"),J={href:"https://link.zhihu.com/?target=https%3A//www.html5rocks.com/en/tutorials/speed/high-performance-animations/",target:"_blank",rel:"noopener noreferrer"},R=o("\u5408\u6210\u5668\u76F8\u5173\u7684\u52A8\u753B"),H=o(" \u6700\u6D41\u7545\uFF0C\u5982\u679C\u67D0\u4E2A\u52A8\u753B\u6D89\u53CA\u5230\u5E03\u5C40\u6216\u8005\u7ED8\u5236\u7684\u8C03\u6574\uFF0C\u5C31\u4F1A\u6D89\u53CA\u5230\u4E3B\u7EBF\u7A0B\u7684\u91CD\u65B0\u8BA1\u7B97\uFF0C\u81EA\u7136\u4F1A\u6162\u5F88\u591A\u3002");function G(N,V){const r=p("ExternalLinkIcon");return a(),c(i,null,[h,e("p",null,[n,e("a",d,[m,t(r)]),g]),u,C,B,e("p",null,[e("a",A,[E,t(r)]),D,e("a",F,[w,t(r)]),k]),f,e("p",null,[S,e("a",P,[b,t(r)]),z]),I,e("p",null,[y,q,U,j,M,v,T,e("a",x,[W,t(r)])]),L,e("p",null,[O,e("a",J,[R,t(r)]),H])],64)}var Q=l(_,[["render",G]]);export{Q as default};
