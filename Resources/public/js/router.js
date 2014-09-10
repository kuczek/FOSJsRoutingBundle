/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is (C) FriendsOfSymfony and subject to the MIT license.
 */
(function() {var h,k=this;function n(a,c){var b=a.split("."),d=k;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)b.length||void 0===c?d=d[e]?d[e]:d[e]={}:d[e]=c};var p=Array.prototype,q=p.forEach?function(a,c,b){p.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e="string"==typeof a?a.split(""):a,f=0;f<d;f++)f in e&&c.call(b,e[f],f,a)};function r(a){var c=0,b;for(b in a)c++;return c}function s(a){var c={},b;for(b in a)c[b]=a[b];return c};function t(a,c){this.e={};this.b=[];var b=arguments.length;if(1<b){if(b%2)throw Error("Uneven number of arguments");for(var d=0;d<b;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof t)for(u(a),d=a.b.concat(),u(a),e=[],b=0;b<a.b.length;b++)e.push(a.e[a.b[b]]);else{var b=[],f=0;for(d in a)b[f++]=d;d=b;b=[];f=0;for(e in a)b[f++]=a[e];e=b}for(b=0;b<d.length;b++)this.set(d[b],e[b])}}t.prototype.h=0;t.prototype.r=0;
function u(a){if(a.h!=a.b.length){for(var c=0,b=0;c<a.b.length;){var d=a.b[c];v(a.e,d)&&(a.b[b++]=d);c++}a.b.length=b}if(a.h!=a.b.length){for(var e={},b=c=0;c<a.b.length;)d=a.b[c],v(e,d)||(a.b[b++]=d,e[d]=1),c++;a.b.length=b}}t.prototype.get=function(a,c){return v(this.e,a)?this.e[a]:c};t.prototype.set=function(a,c){v(this.e,a)||(this.h++,this.b.push(a),this.r++);this.e[a]=c};function v(a,c){return Object.prototype.hasOwnProperty.call(a,c)};function w(a,c){this.a=[];this.c=c;for(var b=!0,d=a.length-1;0<=d;d--){var e=a[d]|0;b&&e==c||(this.a[d]=e,b=!1)}}var x={};function y(a){if(-128<=a&&128>a){var c=x[a];if(c)return c}c=new w([a|0],0>a?-1:0);-128<=a&&128>a&&(x[a]=c);return c}function z(a){if(isNaN(a)||!isFinite(a))return A;if(0>a)return B(z(-a));for(var c=[],b=1,d=0;a>=b;d++)c[d]=a/b|0,b*=C;return new w(c,0)}var C=4294967296,A=y(0),D=y(1),E=y(16777216);
function F(a){if(-1==a.c)return-F(B(a));for(var c=0,b=1,d=0;d<a.a.length;d++)var e=G(a,d),c=c+(0<=e?e:C+e)*b,b=b*C;return c}w.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(H(this))return"0";if(-1==this.c)return"-"+B(this).toString(a);for(var c=z(Math.pow(a,6)),b=this,d="";;){var e=I(b,c),f=e.multiply(c),b=b.add(B(f)),f=(0<b.a.length?b.a[0]:b.c).toString(a),b=e;if(H(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};
function G(a,c){return 0>c?0:c<a.a.length?a.a[c]:a.c}function H(a){if(0!=a.c)return!1;for(var c=0;c<a.a.length;c++)if(0!=a.a[c])return!1;return!0}function J(a,c){var b=a.add(B(c));return-1==b.c?-1:H(b)?0:1}function B(a){for(var c=a.a.length,b=[],d=0;d<c;d++)b[d]=~a.a[d];return(new w(b,~a.c)).add(D)}
w.prototype.add=function(a){for(var c=Math.max(this.a.length,a.a.length),b=[],d=0,e=0;e<=c;e++){var f=d+(G(this,e)&65535)+(G(a,e)&65535),g=(f>>>16)+(G(this,e)>>>16)+(G(a,e)>>>16),d=g>>>16,f=f&65535,g=g&65535;b[e]=g<<16|f}return new w(b,b[b.length-1]&-2147483648?-1:0)};
w.prototype.multiply=function(a){if(H(this)||H(a))return A;if(-1==this.c)return-1==a.c?B(this).multiply(B(a)):B(B(this).multiply(a));if(-1==a.c)return B(this.multiply(B(a)));if(0>J(this,E)&&0>J(a,E))return z(F(this)*F(a));for(var c=this.a.length+a.a.length,b=[],d=0;d<2*c;d++)b[d]=0;for(d=0;d<this.a.length;d++)for(var e=0;e<a.a.length;e++){var f=G(this,d)>>>16,g=G(this,d)&65535,m=G(a,e)>>>16,l=G(a,e)&65535;b[2*d+2*e]+=g*l;K(b,2*d+2*e);b[2*d+2*e+1]+=f*l;K(b,2*d+2*e+1);b[2*d+2*e+1]+=g*m;K(b,2*d+2*e+
1);b[2*d+2*e+2]+=f*m;K(b,2*d+2*e+2)}for(d=0;d<c;d++)b[d]=b[2*d+1]<<16|b[2*d];for(d=c;d<2*c;d++)b[d]=0;return new w(b,0)};function K(a,c){for(;(a[c]&65535)!=a[c];)a[c+1]+=a[c]>>>16,a[c]&=65535}
function I(a,c){if(H(c))throw Error("division by zero");if(H(a))return A;if(-1==a.c)return-1==c.c?I(B(a),B(c)):B(I(B(a),c));if(-1==c.c)return B(I(a,B(c)));for(var b=A,d=a;0<=J(d,c);){for(var e=Math.max(1,Math.floor(F(d)/F(c))),f=Math.ceil(Math.log(e)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=z(e),m=g.multiply(c);-1==m.c||0<J(m,d);)e-=f,g=z(e),m=g.multiply(c);H(g)&&(g=D);b=b.add(g);d=d.add(B(m))}return b};var M,N,O,P;function Q(){return k.navigator?k.navigator.userAgent:null}P=O=N=M=!1;var R;if(R=Q()){var S=k.navigator;M=0==R.lastIndexOf("Opera",0);N=!M&&(-1!=R.indexOf("MSIE")||-1!=R.indexOf("Trident"));O=!M&&-1!=R.indexOf("WebKit");P=!M&&!O&&!N&&"Gecko"==S.product}var T=N,V=P,W=O;var X;if(M&&k.opera){var Y=k.opera.version;"function"==typeof Y&&Y()}else V?X=/rv\:([^\);]+)(\)|;)/:T?X=/\b(?:MSIE|rv)\s+([^\);]+)(\)|;)/:W&&(X=/WebKit\/(\S+)/),X&&X.exec(Q());function Z(a,c){this.d=a||{g:"",prefix:"",host:"",scheme:""};this.j(c||{})}Z.i=function(){return Z.l?Z.l:Z.l=new Z};h=Z.prototype;h.j=function(a){this.f=new t(a)};h.q=function(){return this.f};h.m=function(a){this.d.g=a};h.p=function(){return this.d.g};h.n=function(a){this.d.prefix=a};
function $(a,c,b,d){var e,f=RegExp(/\[\]$/);if(b instanceof Array)q(b,function(b,e){f.test(c)?d(c,b):$(a,c+"["+("object"===typeof b?e:"")+"]",b,d)});else if("object"===typeof b)for(e in b)$(a,c+"["+e+"]",b[e],d);else d(c,b)}h.k=function(a){var c=this.d.prefix+a;if(v(this.f.e,c))a=c;else if(!v(this.f.e,a))throw Error('The route "'+a+'" does not exist.');return this.f.get(a)};
h.o=function(a,c,b){var d=this.k(a),e=c||{},f=s(e),g="",m=!0,l="";q(d.tokens,function(b){if("text"===b[0])g=b[1]+g,m=!1;else if("variable"===b[0]){var c=b[3]in d.defaults;if(!1===m||!c||b[3]in e&&e[b[3]]!=d.defaults[b[3]]){if(b[3]in e){var c=e[b[3]],l=b[3];l in f&&delete f[l]}else if(c)c=d.defaults[b[3]];else{if(m)return;throw Error('The route "'+a+'" requires the parameter "'+b[3]+'".');}if(!0!==c&&!1!==c&&""!==c||!m)l=encodeURIComponent(c).replace(/%2F/g,"/"),"null"===l&&null===c&&(l=""),g=b[1]+
l+g;m=!1}else c&&(b=b[3],b in f&&delete f[b])}else throw Error('The token type "'+b[0]+'" is not supported.');});""===g&&(g="/");q(d.hosttokens,function(a){var b;if("text"===a[0])l=a[1]+l;else if("variable"===a[0]){if(a[3]in e){b=e[a[3]];var c=a[3];c in f&&delete f[c]}else a[3]in d.defaults&&(b=d.defaults[a[3]]);l=a[1]+b+l}});g=this.d.g+g;"_scheme"in d.requirements&&this.d.scheme!=d.requirements._scheme?g=d.requirements._scheme+"://"+(l||this.d.host)+g:l&&this.d.host!==l?g=this.d.scheme+"://"+l+g:
!0===b&&(g=this.d.scheme+"://"+this.d.host+g);if(0<r(f)){var L,U=[];c=function(a,b){b="function"===typeof b?b():b;U.push(encodeURIComponent(a)+"\x3d"+encodeURIComponent(null===b?"":b))};for(L in f)$(this,L,f[L],c);g=g+"?"+U.join("\x26").replace(/%20/g,"+")}return g};RegExp.escape=function(){};n("fos.Router",Z);n("fos.Router.setData",function(a){var c=Z.i();c.m(a.base_url);c.j(a.routes);"prefix"in a&&c.n(a.prefix);c.d.host=a.host;c.d.scheme=a.scheme});Z.getInstance=Z.i;Z.prototype.setRoutes=Z.prototype.j;Z.prototype.getRoutes=Z.prototype.q;Z.prototype.setBaseUrl=Z.prototype.m;Z.prototype.getBaseUrl=Z.prototype.p;Z.prototype.generate=Z.prototype.o;Z.prototype.setPrefix=Z.prototype.n;Z.prototype.getRoute=Z.prototype.k;window.Routing=Z.i();})();