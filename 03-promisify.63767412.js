parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nb58":[function(require,module,exports) {
const e=e=>new Promise(t=>{setTimeout(()=>{t(`${e}`)},e)}),t=e=>console.log(`Fulfilled after ${e}ms`);e(2e3).then(t),e(1e3).then(t),e(1500).then(t);const n=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!1}],a=(e,t)=>new Promise(n=>{n(e.map(e=>e.name===t?{...e,active:!e.active}:e))});a(n,"Mango").then(console.table),a(n,"Ajax").then(console.table);const o=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),c=e=>new Promise((t,n)=>{const a=o(200,500);setTimeout(()=>{Math.random()>.3?t({id:e.id,time:a}):n(e.id)},a)}),i=({id:e,time:t})=>{console.log(`Transaction ${e} processed in ${t}ms`)},s=e=>{console.warn(`Error processing transaction ${e}. Please try again later.`)};c({id:70,amount:150}).then(i).catch(s),c({id:71,amount:230}).then(i).catch(s),c({id:72,amount:75}).then(i).catch(s),c({id:73,amount:100}).then(i).catch(s);
},{}]},{},["nb58"], null)
//# sourceMappingURL=/goit-js-hw-11/03-promisify.63767412.js.map