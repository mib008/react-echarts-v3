!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("echarts"),require("react"),require("react-dom"),require("prop-types")):"function"==typeof define&&define.amd?define(["echarts","react","react-dom","prop-types"],t):"object"==typeof exports?exports["react-echarts"]=t(require("echarts"),require("react"),require("react-dom"),require("prop-types")):e["react-echarts"]=t(e.echarts,e.React,e.ReactDOM,e.PropTypes)}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n]);if(r)return r}}},function(e,t,n){"use strict";var r=e.exports={};r.isIE=function(e){return!!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},r.isLegacyOpera=function(){return!!window.opera}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=r(i),a=n(5),s=r(a),u=(0,s.default)(o.default);t.default=u},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=function(t){function n(e){i(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={fnResize:null,resize:null,instance:null},t._init=t._init.bind(t),t._update=t._update.bind(t),t._resize=t._resize.bind(t),t._getInstance=t._getInstance.bind(t),t._bind=t._bind.bind(t),t}return a(n,t),u(n,[{key:"componentDidMount",value:function(){this._init()}},{key:"componentWillReceiveProps",value:function(e){var t=this;t.state.instance&&t.props.loading!==e.loading&&(e.loading?t.state.instance.showLoading("default",t.props.optsLoading):t.state.instance.hideLoading())}},{key:"shouldComponentUpdate",value:function(e,t){var n=this;return!n.state.instance||!(0,b.default)(e.option,n.props.option)||e.group!==n.props.group}},{key:"componentDidUpdate",value:function(e,t){var n=this;n.props.option&&(n._update(),n._resize())}},{key:"componentWillUnmount",value:function(){var e=this;if(e.state.resize&&e.state.resize.uninstall){var t=d.default.findDOMNode(e);e.state.resize.uninstall(t)}e.state.fnResize&&e.state.fnResize.cancel&&e.state.fnResize.cancel(),e.state.instance.dispose()}},{key:"_init",value:function(){var t=this;if(!t.state.instance){var n=d.default.findDOMNode(t),r=e.getInstanceByDom(n);r||(r=e.init(n,t.props.theme,t.props.initOpts)),t.props.loading?r.showLoading("default",t.props.optsLoading):r.hideLoading(),r.group=t.props.group,t._bind(r);var i=null,o=t.state.fnResize||(0,y.default)(t._resize,250,{leading:!0,trailing:!0});t.props.resizable&&(i=t.state.resize||(0,_.default)({strategy:"scroll"}),i.listenTo(n,function(e){o()})),t.props.onReady(r),t.setState({resize:i,fnResize:o,instance:r})}}},{key:"_update",value:function(){var e=this;e.state.instance.setOption(e.props.option,e.props.notMerge,e.props.lazyUpdate)}},{key:"_resize",value:function(){this.state.instance.resize()}},{key:"_getInstance",value:function(){var t=this;return e.getInstanceByDom(d.default.findDOMNode(t))}},{key:"_bind",value:function(e){var t=this;for(var n in t.props.onEvents)Array.hasOwnProperty.call(t.props.onEvents,n)&&function(t,n){"function"==typeof n&&(n=n.bind(e),e.off(t,n),e.on(t,n))}(n.toLowerCase(),t.props.onEvents[n])}},{key:"render",value:function(){var e=this,t=e.props,n=t.className,r=t.style;return l.default.createElement("div",{className:n,style:r})}}]),n}(l.default.Component);return t.propTypes={className:h.default.string,style:h.default.object,theme:h.default.string,group:h.default.string,option:h.default.object.isRequired,initOpts:h.default.object,notMerge:h.default.bool,lazyUpdate:h.default.bool,loading:h.default.bool,optsLoading:h.default.object,onReady:h.default.func,resizable:h.default.bool,onEvents:h.default.object},t.defaultProps={className:"react-echarts",style:{width:"100%",height:"100%"},notMerge:!1,lazyUpdate:!1,onReady:function(e){},loading:!1,resizable:!1,onEvents:{}},t}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(6),l=r(c),f=n(7),d=r(f),p=n(8),h=r(p),v=n(9),b=r(v),g=n(11),y=r(g),m=n(12),_=r(m);t.default=s},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){(function(e,n){function r(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function i(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function o(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function a(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function s(e,t){return e.has(t)}function u(e,t){return null==e?void 0:e[t]}function c(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function l(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function f(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function d(){this.__data__=zt?zt(null):{},this.size=0}function p(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function h(e){var t=this.__data__;if(zt){var n=t[e];return n===ye?void 0:n}return at.call(t,e)?t[e]:void 0}function v(e){var t=this.__data__;return zt?void 0!==t[e]:at.call(t,e)}function b(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=zt&&void 0===t?ye:t,this}function g(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function y(){this.__data__=[],this.size=0}function m(e){var t=this.__data__,n=W(t,e);return!(n<0)&&(n==t.length-1?t.pop():ht.call(t,n,1),--this.size,!0)}function _(e){var t=this.__data__,n=W(t,e);return n<0?void 0:t[n][1]}function w(e){return W(this.__data__,e)>-1}function j(e,t){var n=this.__data__,r=W(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function x(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function z(){this.size=0,this.__data__={hash:new f,map:new(_t||g),string:new f}}function E(e){var t=Y(this,e).delete(e);return this.size-=t?1:0,t}function S(e){return Y(this,e).get(e)}function O(e){return Y(this,e).has(e)}function A(e,t){var n=Y(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function k(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new x;++t<n;)this.add(e[t])}function L(e){return this.__data__.set(e,ye),this}function T(e){return this.__data__.has(e)}function M(e){var t=this.__data__=new g(e);this.size=t.size}function D(){this.__data__=new g,this.size=0}function N(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function C(e){return this.__data__.get(e)}function I(e){return this.__data__.has(e)}function P(e,t){var n=this.__data__;if(n instanceof g){var r=n.__data__;if(!_t||r.length<ge-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new x(r)}return n.set(e,t),this.size=n.size,this}function H(e,t){var n=Ct(e),r=!n&&Nt(e),i=!n&&!r&&It(e),o=!n&&!r&&!i&&Pt(e),s=n||r||i||o,u=s?a(e.length,String):[],c=u.length;for(var l in e)!t&&!at.call(e,l)||s&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||te(l,c))||u.push(l);return u}function W(e,t){for(var n=e.length;n--;)if(se(e[n][0],t))return n;return-1}function R(e,t,n){var r=t(e);return Ct(e)?r:i(r,n(e))}function q(e){return null==e?void 0===e?We:Me:vt&&vt in Object(e)?ee(e):oe(e)}function B(e){return pe(e)&&q(e)==je}function U(e,t,n,r,i){return e===t||(null==e||null==t||!pe(e)&&!pe(t)?e!==e&&t!==t:$(e,t,n,r,U,i))}function $(e,t,n,r,i,o){var a=Ct(e),s=Ct(t),u=a?xe:Dt(e),c=s?xe:Dt(t);u=u==je?De:u,c=c==je?De:c;var l=u==De,f=c==De,d=u==c;if(d&&It(e)){if(!It(t))return!1;a=!0,l=!1}if(d&&!l)return o||(o=new M),a||Pt(e)?J(e,t,n,r,i,o):K(e,t,u,n,r,i,o);if(!(n&me)){var p=l&&at.call(e,"__wrapped__"),h=f&&at.call(t,"__wrapped__");if(p||h){var v=p?e.value():e,b=h?t.value():t;return o||(o=new M),i(v,b,n,r,o)}}return!!d&&(o||(o=new M),Q(e,t,n,r,i,o))}function F(e){return!(!de(e)||re(e))&&(le(e)?ct:Ue).test(ae(e))}function G(e){return pe(e)&&fe(e.length)&&!!Fe[q(e)]}function V(e){if(!ie(e))return yt(e);var t=[];for(var n in Object(e))at.call(e,n)&&"constructor"!=n&&t.push(n);return t}function J(e,t,n,r,i,a){var u=n&me,c=e.length,l=t.length;if(c!=l&&!(u&&l>c))return!1;var f=a.get(e);if(f&&a.get(t))return f==t;var d=-1,p=!0,h=n&_e?new k:void 0;for(a.set(e,t),a.set(t,e);++d<c;){var v=e[d],b=t[d];if(r)var g=u?r(b,v,d,t,e,a):r(v,b,d,e,t,a);if(void 0!==g){if(g)continue;p=!1;break}if(h){if(!o(t,function(e,t){if(!s(h,t)&&(v===e||i(v,e,n,r,a)))return h.push(t)})){p=!1;break}}else if(v!==b&&!i(v,b,n,r,a)){p=!1;break}}return a.delete(e),a.delete(t),p}function K(e,t,n,r,i,o,a){switch(n){case qe:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Re:return!(e.byteLength!=t.byteLength||!o(new dt(e),new dt(t)));case Ee:case Se:case Te:return se(+e,+t);case Oe:return e.name==t.name&&e.message==t.message;case Ce:case Pe:return e==t+"";case Le:var s=c;case Ie:var u=r&me;if(s||(s=l),e.size!=t.size&&!u)return!1;var f=a.get(e);if(f)return f==t;r|=_e,a.set(e,t);var d=J(s(e),s(t),r,i,o,a);return a.delete(e),d;case He:if(Tt)return Tt.call(e)==Tt.call(t)}return!1}function Q(e,t,n,r,i,o){var a=n&me,s=X(e),u=s.length;if(u!=X(t).length&&!a)return!1;for(var c=u;c--;){var l=s[c];if(!(a?l in t:at.call(t,l)))return!1}var f=o.get(e);if(f&&o.get(t))return f==t;var d=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<u;){l=s[c];var h=e[l],v=t[l];if(r)var b=a?r(v,h,l,t,e,o):r(h,v,l,e,t,o);if(!(void 0===b?h===v||i(h,v,n,r,o):b)){d=!1;break}p||(p="constructor"==l)}if(d&&!p){var g=e.constructor,y=t.constructor;g!=y&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(d=!1)}return o.delete(e),o.delete(t),d}function X(e){return R(e,he,Mt)}function Y(e,t){var n=e.__data__;return ne(t)?n["string"==typeof t?"string":"hash"]:n.map}function Z(e,t){var n=u(e,t);return F(n)?n:void 0}function ee(e){var t=at.call(e,vt),n=e[vt];try{e[vt]=void 0;var r=!0}catch(e){}var i=ut.call(e);return r&&(t?e[vt]=n:delete e[vt]),i}function te(e,t){return!!(t=null==t?we:t)&&("number"==typeof e||$e.test(e))&&e>-1&&e%1==0&&e<t}function ne(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function re(e){return!!st&&st in e}function ie(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||rt)}function oe(e){return ut.call(e)}function ae(e){if(null!=e){try{return ot.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function se(e,t){return e===t||e!==e&&t!==t}function ue(e){return null!=e&&fe(e.length)&&!le(e)}function ce(e,t){return U(e,t)}function le(e){if(!de(e))return!1;var t=q(e);return t==Ae||t==ke||t==ze||t==Ne}function fe(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=we}function de(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function pe(e){return null!=e&&"object"==typeof e}function he(e){return ue(e)?H(e):V(e)}function ve(){return[]}function be(){return!1}var ge=200,ye="__lodash_hash_undefined__",me=1,_e=2,we=9007199254740991,je="[object Arguments]",xe="[object Array]",ze="[object AsyncFunction]",Ee="[object Boolean]",Se="[object Date]",Oe="[object Error]",Ae="[object Function]",ke="[object GeneratorFunction]",Le="[object Map]",Te="[object Number]",Me="[object Null]",De="[object Object]",Ne="[object Proxy]",Ce="[object RegExp]",Ie="[object Set]",Pe="[object String]",He="[object Symbol]",We="[object Undefined]",Re="[object ArrayBuffer]",qe="[object DataView]",Be=/[\\^$.*+?()[\]{}|]/g,Ue=/^\[object .+?Constructor\]$/,$e=/^(?:0|[1-9]\d*)$/,Fe={};Fe["[object Float32Array]"]=Fe["[object Float64Array]"]=Fe["[object Int8Array]"]=Fe["[object Int16Array]"]=Fe["[object Int32Array]"]=Fe["[object Uint8Array]"]=Fe["[object Uint8ClampedArray]"]=Fe["[object Uint16Array]"]=Fe["[object Uint32Array]"]=!0,Fe[je]=Fe[xe]=Fe[Re]=Fe[Ee]=Fe[qe]=Fe[Se]=Fe[Oe]=Fe[Ae]=Fe[Le]=Fe[Te]=Fe[De]=Fe[Ce]=Fe[Ie]=Fe[Pe]=Fe["[object WeakMap]"]=!1;var Ge="object"==typeof e&&e&&e.Object===Object&&e,Ve="object"==typeof self&&self&&self.Object===Object&&self,Je=Ge||Ve||Function("return this")(),Ke="object"==typeof t&&t&&!t.nodeType&&t,Qe=Ke&&"object"==typeof n&&n&&!n.nodeType&&n,Xe=Qe&&Qe.exports===Ke,Ye=Xe&&Ge.process,Ze=function(){try{return Ye&&Ye.binding&&Ye.binding("util")}catch(e){}}(),et=Ze&&Ze.isTypedArray,tt=Array.prototype,nt=Function.prototype,rt=Object.prototype,it=Je["__core-js_shared__"],ot=nt.toString,at=rt.hasOwnProperty,st=function(){var e=/[^.]+$/.exec(it&&it.keys&&it.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ut=rt.toString,ct=RegExp("^"+ot.call(at).replace(Be,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),lt=Xe?Je.Buffer:void 0,ft=Je.Symbol,dt=Je.Uint8Array,pt=rt.propertyIsEnumerable,ht=tt.splice,vt=ft?ft.toStringTag:void 0,bt=Object.getOwnPropertySymbols,gt=lt?lt.isBuffer:void 0,yt=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),mt=Z(Je,"DataView"),_t=Z(Je,"Map"),wt=Z(Je,"Promise"),jt=Z(Je,"Set"),xt=Z(Je,"WeakMap"),zt=Z(Object,"create"),Et=ae(mt),St=ae(_t),Ot=ae(wt),At=ae(jt),kt=ae(xt),Lt=ft?ft.prototype:void 0,Tt=Lt?Lt.valueOf:void 0;f.prototype.clear=d,f.prototype.delete=p,f.prototype.get=h,f.prototype.has=v,f.prototype.set=b,g.prototype.clear=y,g.prototype.delete=m,g.prototype.get=_,g.prototype.has=w,g.prototype.set=j,x.prototype.clear=z,x.prototype.delete=E,x.prototype.get=S,x.prototype.has=O,x.prototype.set=A,k.prototype.add=k.prototype.push=L,k.prototype.has=T,M.prototype.clear=D,M.prototype.delete=N,M.prototype.get=C,M.prototype.has=I,M.prototype.set=P;var Mt=bt?function(e){return null==e?[]:(e=Object(e),r(bt(e),function(t){return pt.call(e,t)}))}:ve,Dt=q;(mt&&Dt(new mt(new ArrayBuffer(1)))!=qe||_t&&Dt(new _t)!=Le||wt&&"[object Promise]"!=Dt(wt.resolve())||jt&&Dt(new jt)!=Ie||xt&&"[object WeakMap]"!=Dt(new xt))&&(Dt=function(e){var t=q(e),n=t==De?e.constructor:void 0,r=n?ae(n):"";if(r)switch(r){case Et:return qe;case St:return Le;case Ot:return"[object Promise]";case At:return Ie;case kt:return"[object WeakMap]"}return t});var Nt=B(function(){return arguments}())?B:function(e){return pe(e)&&at.call(e,"callee")&&!pt.call(e,"callee")},Ct=Array.isArray,It=gt||be,Pt=et?function(e){return function(t){return e(t)}}(et):G;n.exports=ce}).call(t,n(0),n(10)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){(function(t){function n(e,t,n){function i(t){var n=v,r=b;return v=b=void 0,z=t,y=e.apply(r,n)}function o(e){return z=e,m=setTimeout(l,t),E?i(e):y}function u(e){var n=e-x,r=e-z,i=t-n;return S?w(i,g-r):i}function c(e){var n=e-x,r=e-z;return void 0===x||n>=t||n<0||S&&r>=g}function l(){var e=j();if(c(e))return f(e);m=setTimeout(l,u(e))}function f(e){return m=void 0,O&&v?i(e):(v=b=void 0,y)}function d(){void 0!==m&&clearTimeout(m),z=0,v=x=b=m=void 0}function p(){return void 0===m?y:f(j())}function h(){var e=j(),n=c(e);if(v=arguments,b=this,x=e,n){if(void 0===m)return o(x);if(S)return m=setTimeout(l,t),i(x)}return void 0===m&&(m=setTimeout(l,t)),y}var v,b,g,y,m,x,z=0,E=!1,S=!1,O=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,r(n)&&(E=!!n.leading,S="maxWait"in n,g=S?_(a(n.maxWait)||0,t):g,O="trailing"in n?!!n.trailing:O),h.cancel=d,h.flush=p,h}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function o(e){return"symbol"==typeof e||i(e)&&m.call(e)==c}function a(e){if("number"==typeof e)return e;if(o(e))return u;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=d.test(e);return n||p.test(e)?h(e.slice(2),n?2:8):f.test(e)?u:+e}var s="Expected a function",u=NaN,c="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,h=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,g=v||b||Function("return this")(),y=Object.prototype,m=y.toString,_=Math.max,w=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return Array.isArray(e)||void 0!==e.length}function i(e){if(Array.isArray(e))return e;var t=[];return s(e,function(e){t.push(e)}),t}function o(e){return e&&1===e.nodeType}function a(e,t,n){var r=e[t];return void 0!==r&&null!==r||void 0===n?r:n}var s=n(1).forEach,u=n(13),c=n(14),l=n(15),f=n(16),d=n(17),p=n(2),h=n(18),v=n(20),b=n(21),g=n(22);e.exports=function(e){function t(e,t,n){function u(e){var t=E.get(e);s(t,function(t){t(e)})}function c(e,t,n){E.add(t,n),e&&n(t)}if(n||(n=t,t=e,e={}),!t)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(o(t))t=[t];else{if(!r(t))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=i(t)}var l=0,f=a(e,"callOnAdd",x.callOnAdd),d=a(e,"onReady",function(){}),p=a(e,"debug",x.debug);s(t,function(e){v.getState(e)||(v.initState(e),y.set(e));var r=y.get(e);if(p&&w.log("Attaching listener to element",r,e),!S.isDetectable(e))return p&&w.log(r,"Not detectable."),S.isBusy(e)?(p&&w.log(r,"System busy making it detectable"),c(f,e,n),k[r]=k[r]||[],void k[r].push(function(){++l===t.length&&d()})):(p&&w.log(r,"Making detectable..."),S.markBusy(e,!0),z.makeDetectable({debug:p},e,function(e){if(p&&w.log(r,"onElementDetectable"),v.getState(e)){S.markAsDetectable(e),S.markBusy(e,!1),z.addListener(e,u),c(f,e,n);var i=v.getState(e);if(i&&i.startSize){var o=e.offsetWidth,a=e.offsetHeight;i.startSize.width===o&&i.startSize.height===a||u(e)}k[r]&&s(k[r],function(e){e()})}else p&&w.log(r,"Element uninstalled before being detectable.");delete k[r],++l===t.length&&d()}));p&&w.log(r,"Already detecable, adding listener."),c(f,e,n),l++}),l===t.length&&d()}function n(e){if(!e)return w.error("At least one element is required.");if(o(e))e=[e];else{if(!r(e))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=i(e)}s(e,function(e){E.removeAllListeners(e),z.uninstall(e),v.cleanState(e)})}e=e||{};var y;if(e.idHandler)y={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var m=l(),_=f({idGenerator:m,stateHandler:v});y=_}var w=e.reporter;if(!w){w=d(!1===w)}var j=a(e,"batchProcessor",h({reporter:w})),x={};x.callOnAdd=!!a(e,"callOnAdd",!0),x.debug=!!a(e,"debug",!1);var z,E=c(y),S=u({stateHandler:v}),O=a(e,"strategy","object"),A={reporter:w,batchProcessor:j,stateHandler:v,idHandler:y};if("scroll"===O&&(p.isLegacyOpera()?(w.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),O="object"):p.isIE(9)&&(w.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),O="object")),"scroll"===O)z=g(A);else{if("object"!==O)throw new Error("Invalid strategy name: "+O);z=b(A)}var k={};return{listenTo:t,removeListener:E.removeListener,removeAllListeners:E.removeAllListeners,uninstall:n}}},function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=o(e);return t&&!!t.isDetectable}function n(e){o(e).isDetectable=!0}function r(e){return!!o(e).busy}function i(e,t){o(e).busy=!!t}var o=e.stateHandler.getState;return{isDetectable:t,markAsDetectable:n,isBusy:r,markBusy:i}}},function(e,t,n){"use strict";e.exports=function(e){function t(t){var n=e.get(t);return void 0===n?[]:o[n]||[]}function n(t,n){var r=e.get(t);o[r]||(o[r]=[]),o[r].push(n)}function r(e,n){for(var r=t(e),i=0,o=r.length;i<o;++i)if(r[i]===n){r.splice(i,1);break}}function i(e){var n=t(e);n&&(n.length=0)}var o={};return{get:t,add:n,removeListener:r,removeAllListeners:i}}},function(e,t,n){"use strict";e.exports=function(){function e(){return t++}var t=1;return{generate:e}}},function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=i(e);return t&&void 0!==t.id?t.id:null}function n(e){var t=i(e);if(!t)throw new Error("setId required the element to have a resize detection state.");var n=r.generate();return t.id=n,n}var r=e.idGenerator,i=e.stateHandler.getState;return{get:t,set:n}}},function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var r=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};r(n,"log"),r(n,"warn"),r(n,"error")}return n}},function(e,t,n){"use strict";function r(){function e(e,t){t||(t=e,e=0),e>o?o=e:e<a&&(a=e),r[e]||(r[e]=[]),r[e].push(t),i++}function t(){for(var e=a;e<=o;e++)for(var t=r[e],n=0;n<t.length;n++){var i=t[n];i()}}function n(){return i}var r={},i=0,o=0,a=0;return{add:e,process:t,size:n}}var i=n(19);e.exports=function(e){function t(e,t){!h&&f&&l&&0===p.size()&&a(),p.add(e,t)}function n(){for(h=!0;p.size();){var e=p;p=r(),e.process()}h=!1}function o(e){h||(void 0===e&&(e=l),d&&(s(d),d=null),e?a():n())}function a(){d=u(n)}function s(e){return clearTimeout(e)}function u(e){return function(e){return setTimeout(e,0)}(e)}e=e||{};var c=e.reporter,l=i.getOption(e,"async",!0),f=i.getOption(e,"auto",!0);f&&!l&&(c&&c.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),l=!0);var d,p=r(),h=!1;return{add:t,force:o}}},function(e,t,n){"use strict";function r(e,t,n){var r=e[t];return void 0!==r&&null!==r||void 0===n?r:n}(e.exports={}).getOption=r},function(e,t,n){"use strict";function r(e){return e[a]={},i(e)}function i(e){return e[a]}function o(e){delete e[a]}var a="_erd";e.exports={initState:r,getState:i,cleanState:o}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e){function t(e,t){function n(){t(e)}if(!i(e))throw new Error("Element is not detectable by this strategy.");if(r.isIE(8))u(e).object={proxy:n},e.attachEvent("onresize",n);else{i(e).contentDocument.defaultView.addEventListener("resize",n)}}function n(e,t,n){n||(n=t,t=e,e=null),e=e||{};e.debug;r.isIE(8)?n(t):function(e,t){function n(){function n(){if("static"===c.position){e.style.position="relative";var t=function(e,t,n,r){var i=n[r];"auto"!==i&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(i)&&(e.warn("An element that is positioned static has style."+r+"="+i+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",t),t.style[r]=0)};t(a,e,c,"top"),t(a,e,c,"right"),t(a,e,c,"bottom"),t(a,e,c,"left")}}function s(){function r(e,t){if(!e.contentDocument)return void setTimeout(function(){r(e,t)},100);t(e.contentDocument)}o||n(),r(this,function(n){t(e)})}""!==c.position&&(n(c),o=!0);var l=document.createElement("object");l.style.cssText=i,l.tabIndex=-1,l.type="text/html",l.onload=s,r.isIE()||(l.data="about:blank"),e.appendChild(l),u(e).object=l,r.isIE()&&(l.data="about:blank")}var i="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",o=!1,c=window.getComputedStyle(e),l=e.offsetWidth,f=e.offsetHeight;u(e).startSize={width:l,height:f},s?s.add(n):n()}(t,n)}function i(e){return u(e).object}function o(e){r.isIE(8)?e.detachEvent("onresize",u(e).object.proxy):e.removeChild(i(e)),delete u(e).object}e=e||{};var a=e.reporter,s=e.batchProcessor,u=e.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:t,uninstall:o}}},function(e,t,n){"use strict";var r=n(1).forEach;e.exports=function(e){function t(e){e.className+=" "+v+"_animation_active"}function n(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return l.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function i(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return l.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function o(e){return d(e).container.childNodes[0].childNodes[0].childNodes[0]}function a(e){return d(e).container.childNodes[0].childNodes[0].childNodes[1]}function s(e,t){if(!d(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");d(e).listeners.push(t)}function u(e,i,s){function u(){if(e.debug){var t=Array.prototype.slice.call(arguments);if(t.unshift(p.get(i),"Scroll: "),l.log.apply)l.log.apply(null,t);else for(var n=0;n<t.length;n++)l.log(t[n])}}function c(e){var t=d(e).container.childNodes[0],n=getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function b(){var e=getComputedStyle(i),t={};return t.position=e.position,t.width=i.offsetWidth,t.height=i.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function g(){var e=b();d(i).startSize={width:e.width,height:e.height},u("Element start size",d(i).startSize)}function y(){d(i).listeners=[]}function m(){if(u("storeStyle invoked."),!d(i))return void u("Aborting because element has been uninstalled");var e=b();d(i).style=e}function _(e,t,n){d(e).lastWidth=t,d(e).lastHeight=n}function w(e){return o(e).childNodes[0]}function j(){return 2*h.width+1}function x(){return 2*h.height+1}function z(e){return e+10+j()}function E(e){return e+10+x()}function S(e){return 2*e+j()}function O(e){return 2*e+x()}function A(e,t,n){var r=o(e),i=a(e),s=z(t),u=E(n),c=S(t),l=O(n);r.scrollLeft=s,r.scrollTop=u,i.scrollLeft=c,i.scrollTop=l}function k(){var e=d(i).container;if(!e){e=document.createElement("div"),e.className=v,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",d(i).container=e,t(e),i.appendChild(e);var r=function(){d(i).onRendered&&d(i).onRendered()};n(e,"animationstart",r),d(i).onAnimationStart=r}return e}function L(){function e(){d(i).onExpand&&d(i).onExpand()}function t(){d(i).onShrink&&d(i).onShrink()}if(u("Injecting elements"),!d(i))return void u("Aborting because element has been uninstalled");!function(){var e=d(i).style;if("static"===e.position){i.style.position="relative";var t=function(e,t,n,r){var i=n[r];"auto"!==i&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(i)&&(e.warn("An element that is positioned static has style."+r+"="+i+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",t),t.style[r]=0)};t(l,i,e,"top"),t(l,i,e,"right"),t(l,i,e,"bottom"),t(l,i,e,"left")}}();var r=d(i).container;r||(r=k());var o=h.width,a=h.height,s="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(e,t,n,r){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",r=r?r+"px":"0","left: "+e+"; top: "+t+"; right: "+r+"; bottom: "+n+";"}(-(1+o),-(1+a),-a,-o),c=document.createElement("div"),f=document.createElement("div"),p=document.createElement("div"),b=document.createElement("div"),g=document.createElement("div"),y=document.createElement("div");c.dir="ltr",c.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",c.className=v,f.className=v,f.style.cssText=s,p.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",b.style.cssText="position: absolute; left: 0; top: 0;",g.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",y.style.cssText="position: absolute; width: 200%; height: 200%;",p.appendChild(b),g.appendChild(y),f.appendChild(p),f.appendChild(g),c.appendChild(f),r.appendChild(c),n(p,"scroll",e),n(g,"scroll",t),d(i).onExpandScroll=e,d(i).onShrinkScroll=t}function T(){function t(e,t,n){var r=w(e),i=z(t),o=E(n);r.style.width=i+"px",r.style.height=o+"px"}function n(n){var r=i.offsetWidth,o=i.offsetHeight;u("Storing current size",r,o),_(i,r,o),f.add(0,function(){if(!d(i))return void u("Aborting because element has been uninstalled");if(!s())return void u("Aborting because element container has not been initialized");if(e.debug){var n=i.offsetWidth,a=i.offsetHeight;n===r&&a===o||l.warn(p.get(i),"Scroll: Size changed before updating detector elements.")}t(i,r,o)}),f.add(1,function(){return d(i)?s()?void A(i,r,o):void u("Aborting because element container has not been initialized"):void u("Aborting because element has been uninstalled")}),n&&f.add(2,function(){return d(i)?s()?void n():void u("Aborting because element container has not been initialized"):void u("Aborting because element has been uninstalled")})}function s(){return!!d(i).container}function h(){u("notifyListenersIfNeeded invoked");var e=d(i);return function(){return void 0===d(i).lastNotifiedWidth}()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?u("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?u("Not notifying: Size already notified"):(u("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void r(d(i).listeners,function(e){e(i)}))}function v(){if(u("startanimation triggered."),c(i))return void u("Ignoring since element is still unrendered...");u("Element rendered.");var e=o(i),t=a(i);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(u("Scrollbars out of sync. Updating detector elements..."),n(h))}function b(){if(u("Scroll detected."),c(i))return void u("Scroll event fired while unrendered. Ignoring...");var e=i.offsetWidth,t=i.offsetHeight;e!==i.lastWidth||t!==i.lastHeight?(u("Element size changed."),n(h)):u("Element size has not changed ("+e+"x"+t+").")}if(u("registerListenersAndPositionElements invoked."),!d(i))return void u("Aborting because element has been uninstalled");d(i).onRendered=v,d(i).onExpand=b,d(i).onShrink=b;var g=d(i).style;t(i,g.width,g.height)}function M(){if(u("finalizeDomMutation invoked."),!d(i))return void u("Aborting because element has been uninstalled");var e=d(i).style;_(i,e.width,e.height),A(i,e.width,e.height)}function D(){s(i)}function N(){u("Installing..."),y(),g(),f.add(0,m),f.add(1,L),f.add(2,T),f.add(3,M),f.add(4,D)}s||(s=i,i=e,e=null),e=e||{},u("Making detectable..."),!function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===getComputedStyle(e)}(i)?N():(u("Element is detached"),k(),u("Waiting until element is attached..."),d(i).onRendered=function(){u("Element is now attached"),N()})}function c(e){var t=d(e);t&&(t.onExpandScroll&&i(o(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&i(a(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&i(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}e=e||{};var l=e.reporter,f=e.batchProcessor,d=e.stateHandler.getState,p=(e.stateHandler.hasState,e.idHandler);if(!f)throw new Error("Missing required dependency: batchProcessor");if(!l)throw new Error("Missing required dependency: reporter.");var h=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,r=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:r}}(),v="erd_scroll_detection_container";return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",r=t+"_animation_active",i="/* Created by the element-resize-detector library. */\n";i+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",i+="."+r+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",i+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",i+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(t,n){n=n||function(e){document.head.appendChild(e)};var r=document.createElement("style");r.innerHTML=t,r.id=e,n(r)}(i)}}("erd_scroll_detection_scrollbar_style",v),{makeDetectable:u,addListener:s,uninstall:c}}}])});