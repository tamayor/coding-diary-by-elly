"use strict";(self.webpackChunkcoding_diary_by_elly=self.webpackChunkcoding_diary_by_elly||[]).push([[3846,3047],{4490:function(e,n,a){var t=a(595);function r(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=r,r.displayName="handlebars",r.aliases=["hbs"]},595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,r,s){if(a.language===t){var o=a.tokenStack=[];a.code=a.code.replace(r,(function(e){if("function"===typeof s&&!s(e))return e;for(var r,i=o.length;-1!==a.code.indexOf(r=n(t,i));)++i;return o[i]=e,r})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var r=0,s=Object.keys(a.tokenStack);!function o(i){for(var l=0;l<i.length&&!(r>=s.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=s[r],g=a.tokenStack[c],p="string"===typeof u?u:u.content,d=n(t,c),f=p.indexOf(d);if(f>-1){++r;var k=p.substring(0,f),b=new e.Token(t,e.tokenize(g,a.grammar),"language-"+t,g),h=p.substring(f+d.length),m=[];k&&m.push.apply(m,o([k])),m.push(b),h&&m.push.apply(m,o([h])),"string"===typeof u?i.splice.apply(i,[l,1].concat(m)):u.content=m}}else u.content&&o(u.content)}return i}(a.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.da90f65f.chunk.js.map