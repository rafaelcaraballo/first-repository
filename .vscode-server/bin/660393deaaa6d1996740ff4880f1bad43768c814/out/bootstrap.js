"use strict";(function(c,s){typeof exports=="object"?module.exports=s():c.MonacoBootstrap=s()})(this,function(){const c=typeof require=="function"?require("module"):void 0,s=typeof require=="function"?require("path"):void 0,a=typeof require=="function"?require("fs"):void 0;if(Error.stackTraceLimit=100,typeof process<"u"&&!process.env.VSCODE_HANDLES_SIGPIPE){let e=!1;process.on("SIGPIPE",()=>{e||(e=!0,console.error(new Error("Unexpected SIGPIPE")))})}function S(){if(!s||!c||typeof process>"u"){console.warn("enableASARSupport() is only available in node.js environments");return}const e=s.join(__dirname,"../node_modules"),n=`${e}.asar`,r=c._resolveLookupPaths;c._resolveLookupPaths=function(o,p){const t=r(o,p);if(Array.isArray(t)){for(let i=0,l=t.length;i<l;i++)if(t[i]===e){t.splice(i,0,n);break}}return t}}function h(e,n){let r=e.replace(/\\/g,"/");r.length>0&&r.charAt(0)!=="/"&&(r=`/${r}`);let o;return n.isWindows&&r.startsWith("//")?o=encodeURI(`${n.scheme||"file"}:${r}`):o=encodeURI(`${n.scheme||"file"}://${n.fallbackAuthority||""}${r}`),o.replace(/#/g,"%23")}function _(){const e=b();let n={availableLanguages:{}};if(e&&e.env.VSCODE_NLS_CONFIG)try{n=JSON.parse(e.env.VSCODE_NLS_CONFIG)}catch{}if(n._resolvedLanguagePackCoreLocation){const r=Object.create(null);n.loadBundle=function(o,p,t){const i=r[o];if(i){t(void 0,i);return}L(n._resolvedLanguagePackCoreLocation,`${o.replace(/\//g,"!")}.nls.json`).then(function(l){const u=JSON.parse(l);r[o]=u,t(void 0,u)}).catch(l=>{try{n._corruptedFile&&g(n._corruptedFile,"corrupted").catch(function(u){console.error(u)})}finally{t(l,void 0)}})}}return n}function f(){return(typeof self=="object"?self:typeof global=="object"?global:{}).vscode}function b(){const e=f();if(e)return e.process;if(typeof process<"u")return process}function d(){const e=f();if(e)return e.ipcRenderer}async function L(...e){const n=d();if(n)return n.invoke("vscode:readNlsFile",...e);if(a&&s)return(await a.promises.readFile(s.join(...e))).toString();throw new Error("Unsupported operation (read NLS files)")}function g(e,n){const r=d();if(r)return r.invoke("vscode:writeNlsFile",e,n);if(a)return a.promises.writeFile(e,n);throw new Error("Unsupported operation (write NLS files)")}return{enableASARSupport:S,setupNLS:_,fileUriFromPath:h}});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/660393deaaa6d1996740ff4880f1bad43768c814/core/bootstrap.js.map
