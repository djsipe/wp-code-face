/* Code Face Syntax Highlighter */
YAHOO.CodeFace.init=function(){var i,cssQuery=YAHOO.util.Selector.query,loadCSS=YAHOO.util.Get.css,loadJS=YAHOO.util.Get.script,basePath=YAHOO.CodeFace.basePath+"dp.SyntaxHighlighter/";var codeNodes=cssQuery('pre[class~=$"-codeface"]');var brushes={cplusplus:"shBrushCpp.js",csharp:"shBrushCSharp.js",css:"shBrushCss.js",delphi:"shBrushDelphi.js",java:"shBrushJava.js",js:"shBrushJScript.js",python:"shBrushPython.js",php:"shBrushPhp.js",ruby:"shBrushRuby.js",sql:"shBrushSql.js",vb:"shBrushVb.js",xml:"shBrushXml.js",html:"shBrushXml.js"};var indexOf=function(arrayObj,find){if(!YAHOO.lang.isArray(arrayObj)){return -1;}if(arrayObj.indexOf){return arrayObj.indexOf(find);}var i;for(i=0;i<arrayObj.length;i++){if(arrayObj[i]==find){return i;}}return -1;};var getReqBrushes=function(nodes){if(!YAHOO.lang.isArray(nodes)){return[];}var i,j,k,re=/-codeface$/,nodeCss,brushType,reqBrushes=[];for(i=0;i<nodes.length;i++){nodeCss=nodes[i].className.split(" ");brushType="";for(k=0;k<nodeCss.length;k++){if(re.test(nodeCss[k])){brushType=nodeCss[k].replace('-codeface','').toLowerCase();if(brushes.hasOwnProperty(brushType)&&indexOf(reqBrushes,brushType)===-1){reqBrushes.push(brushType);}break;}}}return reqBrushes;};var requestedBrushes=getReqBrushes(codeNodes);var eventChain={loadCSS:function(){loadCSS(basePath+"Styles/SyntaxHighlighter.css",{onSuccess:eventChain.loadCoreJS});},loadCoreJS:function(){loadJS(basePath+"Scripts/shCore.js",{onSuccess:eventChain.loadBrushes});},loadBrushes:function(){if(YAHOO.lang.isArray(requestedBrushes)&&requestedBrushes.length>0){var thisBrush=requestedBrushes.shift();loadJS(basePath+"Scripts/"+brushes[thisBrush],{onSuccess:eventChain.loadBrushes});}else{dp.SyntaxHighlighter.ClipboardSwf=basePath+'Scripts/clipboard.swf';dp.SyntaxHighlighter.HighlightAll('code');}}};if(YAHOO.lang.isArray(codeNodes)){for(i=0;i<codeNodes.length;i++){codeNodes[i].setAttribute("name","code");codeNodes[i].className=codeNodes[i].className.replace("-codeface","");}eventChain.loadCSS();}};YAHOO.CodeFace.init();