var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var l=n((Pu,G)=>{"use strict";var $i=Array.isArray;G.exports=$i});var R=n((Au,M)=>{"use strict";var Bi=typeof global=="object"&&global&&global.Object===Object&&global;M.exports=Bi});var O=n((Iu,L)=>{"use strict";var Xi=R(),Ji=typeof self=="object"&&self&&self.Object===Object&&self,Yi=Xi||Ji||Function("return this")();L.exports=Yi});var x=n((wu,j)=>{"use strict";var Zi=O(),Wi=Zi.Symbol;j.exports=Wi});var $=n((Nu,k)=>{"use strict";var z=x(),V=Object.prototype,Qi=V.hasOwnProperty,Ci=V.toString,v=z?z.toStringTag:void 0;function Hi(e){var r=Qi.call(e,v),i=e[v];try{e[v]=void 0;var t=!0}catch{}var o=Ci.call(e);return t&&(r?e[v]=i:delete e[v]),o}k.exports=Hi});var X=n((Ku,B)=>{"use strict";var et=Object.prototype,rt=et.toString;function it(e){return rt.call(e)}B.exports=it});var T=n((Su,Z)=>{"use strict";var J=x(),tt=$(),nt=X(),ot="[object Null]",at="[object Undefined]",Y=J?J.toStringTag:void 0;function ut(e){return e==null?e===void 0?at:ot:Y&&Y in Object(e)?tt(e):nt(e)}Z.exports=ut});var m=n((Du,W)=>{"use strict";function ct(e){return e!=null&&typeof e=="object"}W.exports=ct});var E=n((Uu,Q)=>{"use strict";var ft=T(),pt=m(),lt="[object Symbol]";function ht(e){return typeof e=="symbol"||pt(e)&&ft(e)==lt}Q.exports=ht});var H=n((Fu,C)=>{"use strict";var dt=l(),st=E(),xt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vt=/^\w*$/;function _t(e,r){if(dt(e))return!1;var i=typeof e;return i=="number"||i=="symbol"||i=="boolean"||e==null||st(e)?!0:vt.test(e)||!xt.test(e)||r!=null&&e in Object(r)}C.exports=_t});var P=n((Gu,ee)=>{"use strict";function yt(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}ee.exports=yt});var ie=n((Mu,re)=>{"use strict";var gt=T(),qt=P(),bt="[object AsyncFunction]",Ot="[object Function]",Tt="[object GeneratorFunction]",mt="[object Proxy]";function Et(e){if(!qt(e))return!1;var r=gt(e);return r==Ot||r==Tt||r==bt||r==mt}re.exports=Et});var ne=n((Ru,te)=>{"use strict";var Pt=O(),At=Pt["__core-js_shared__"];te.exports=At});var ue=n((Lu,ae)=>{"use strict";var N=ne(),oe=function(){var e=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function It(e){return!!oe&&oe in e}ae.exports=It});var fe=n((ju,ce)=>{"use strict";var wt=Function.prototype,Nt=wt.toString;function Kt(e){if(e!=null){try{return Nt.call(e)}catch{}try{return e+""}catch{}}return""}ce.exports=Kt});var le=n((zu,pe)=>{"use strict";var St=ie(),Dt=ue(),Ut=P(),Ft=fe(),Gt=/[\\^$.*+?()[\]{}|]/g,Mt=/^\[object .+?Constructor\]$/,Rt=Function.prototype,Lt=Object.prototype,jt=Rt.toString,zt=Lt.hasOwnProperty,Vt=RegExp("^"+jt.call(zt).replace(Gt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function kt(e){if(!Ut(e)||Dt(e))return!1;var r=St(e)?Vt:Mt;return r.test(Ft(e))}pe.exports=kt});var de=n((Vu,he)=>{"use strict";function $t(e,r){return e?.[r]}he.exports=$t});var A=n((ku,se)=>{"use strict";var Bt=le(),Xt=de();function Jt(e,r){var i=Xt(e,r);return Bt(i)?i:void 0}se.exports=Jt});var _=n(($u,xe)=>{"use strict";var Yt=A(),Zt=Yt(Object,"create");xe.exports=Zt});var ye=n((Bu,_e)=>{"use strict";var ve=_();function Wt(){this.__data__=ve?ve(null):{},this.size=0}_e.exports=Wt});var qe=n((Xu,ge)=>{"use strict";function Qt(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}ge.exports=Qt});var Oe=n((Ju,be)=>{"use strict";var Ct=_(),Ht="__lodash_hash_undefined__",en=Object.prototype,rn=en.hasOwnProperty;function tn(e){var r=this.__data__;if(Ct){var i=r[e];return i===Ht?void 0:i}return rn.call(r,e)?r[e]:void 0}be.exports=tn});var me=n((Yu,Te)=>{"use strict";var nn=_(),on=Object.prototype,an=on.hasOwnProperty;function un(e){var r=this.__data__;return nn?r[e]!==void 0:an.call(r,e)}Te.exports=un});var Pe=n((Zu,Ee)=>{"use strict";var cn=_(),fn="__lodash_hash_undefined__";function pn(e,r){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=cn&&r===void 0?fn:r,this}Ee.exports=pn});var Ie=n((Wu,Ae)=>{"use strict";var ln=ye(),hn=qe(),dn=Oe(),sn=me(),xn=Pe();function h(e){var r=-1,i=e==null?0:e.length;for(this.clear();++r<i;){var t=e[r];this.set(t[0],t[1])}}h.prototype.clear=ln;h.prototype.delete=hn;h.prototype.get=dn;h.prototype.has=sn;h.prototype.set=xn;Ae.exports=h});var Ne=n((Qu,we)=>{"use strict";function vn(){this.__data__=[],this.size=0}we.exports=vn});var K=n((Cu,Ke)=>{"use strict";function _n(e,r){return e===r||e!==e&&r!==r}Ke.exports=_n});var y=n((Hu,Se)=>{"use strict";var yn=K();function gn(e,r){for(var i=e.length;i--;)if(yn(e[i][0],r))return i;return-1}Se.exports=gn});var Ue=n((ec,De)=>{"use strict";var qn=y(),bn=Array.prototype,On=bn.splice;function Tn(e){var r=this.__data__,i=qn(r,e);if(i<0)return!1;var t=r.length-1;return i==t?r.pop():On.call(r,i,1),--this.size,!0}De.exports=Tn});var Ge=n((rc,Fe)=>{"use strict";var mn=y();function En(e){var r=this.__data__,i=mn(r,e);return i<0?void 0:r[i][1]}Fe.exports=En});var Re=n((ic,Me)=>{"use strict";var Pn=y();function An(e){return Pn(this.__data__,e)>-1}Me.exports=An});var je=n((tc,Le)=>{"use strict";var In=y();function wn(e,r){var i=this.__data__,t=In(i,e);return t<0?(++this.size,i.push([e,r])):i[t][1]=r,this}Le.exports=wn});var Ve=n((nc,ze)=>{"use strict";var Nn=Ne(),Kn=Ue(),Sn=Ge(),Dn=Re(),Un=je();function d(e){var r=-1,i=e==null?0:e.length;for(this.clear();++r<i;){var t=e[r];this.set(t[0],t[1])}}d.prototype.clear=Nn;d.prototype.delete=Kn;d.prototype.get=Sn;d.prototype.has=Dn;d.prototype.set=Un;ze.exports=d});var $e=n((oc,ke)=>{"use strict";var Fn=A(),Gn=O(),Mn=Fn(Gn,"Map");ke.exports=Mn});var Je=n((ac,Xe)=>{"use strict";var Be=Ie(),Rn=Ve(),Ln=$e();function jn(){this.size=0,this.__data__={hash:new Be,map:new(Ln||Rn),string:new Be}}Xe.exports=jn});var Ze=n((uc,Ye)=>{"use strict";function zn(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}Ye.exports=zn});var g=n((cc,We)=>{"use strict";var Vn=Ze();function kn(e,r){var i=e.__data__;return Vn(r)?i[typeof r=="string"?"string":"hash"]:i.map}We.exports=kn});var Ce=n((fc,Qe)=>{"use strict";var $n=g();function Bn(e){var r=$n(this,e).delete(e);return this.size-=r?1:0,r}Qe.exports=Bn});var er=n((pc,He)=>{"use strict";var Xn=g();function Jn(e){return Xn(this,e).get(e)}He.exports=Jn});var ir=n((lc,rr)=>{"use strict";var Yn=g();function Zn(e){return Yn(this,e).has(e)}rr.exports=Zn});var nr=n((hc,tr)=>{"use strict";var Wn=g();function Qn(e,r){var i=Wn(this,e),t=i.size;return i.set(e,r),this.size+=i.size==t?0:1,this}tr.exports=Qn});var ar=n((dc,or)=>{"use strict";var Cn=Je(),Hn=Ce(),eo=er(),ro=ir(),io=nr();function s(e){var r=-1,i=e==null?0:e.length;for(this.clear();++r<i;){var t=e[r];this.set(t[0],t[1])}}s.prototype.clear=Cn;s.prototype.delete=Hn;s.prototype.get=eo;s.prototype.has=ro;s.prototype.set=io;or.exports=s});var fr=n((sc,cr)=>{"use strict";var ur=ar(),to="Expected a function";function S(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(to);var i=function(){var t=arguments,o=r?r.apply(this,t):t[0],u=i.cache;if(u.has(o))return u.get(o);var c=e.apply(this,t);return i.cache=u.set(o,c)||u,c};return i.cache=new(S.Cache||ur),i}S.Cache=ur;cr.exports=S});var lr=n((xc,pr)=>{"use strict";var no=fr(),oo=500;function ao(e){var r=no(e,function(t){return i.size===oo&&i.clear(),t}),i=r.cache;return r}pr.exports=ao});var dr=n((vc,hr)=>{"use strict";var uo=lr(),co=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fo=/\\(\\)?/g,po=uo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(co,function(i,t,o,u){r.push(o?u.replace(fo,"$1"):t||i)}),r});hr.exports=po});var xr=n((_c,sr)=>{"use strict";function lo(e,r){for(var i=-1,t=e==null?0:e.length,o=Array(t);++i<t;)o[i]=r(e[i],i,e);return o}sr.exports=lo});var br=n((yc,qr)=>{"use strict";var vr=x(),ho=xr(),so=l(),xo=E(),vo=1/0,_r=vr?vr.prototype:void 0,yr=_r?_r.toString:void 0;function gr(e){if(typeof e=="string")return e;if(so(e))return ho(e,gr)+"";if(xo(e))return yr?yr.call(e):"";var r=e+"";return r=="0"&&1/e==-vo?"-0":r}qr.exports=gr});var Tr=n((gc,Or)=>{"use strict";var _o=br();function yo(e){return e==null?"":_o(e)}Or.exports=yo});var q=n((qc,mr)=>{"use strict";var go=l(),qo=H(),bo=dr(),Oo=Tr();function To(e,r){return go(e)?e:qo(e,r)?[e]:bo(Oo(e))}mr.exports=To});var I=n((bc,Er)=>{"use strict";var mo=E(),Eo=1/0;function Po(e){if(typeof e=="string"||mo(e))return e;var r=e+"";return r=="0"&&1/e==-Eo?"-0":r}Er.exports=Po});var Ar=n((Oc,Pr)=>{"use strict";var Ao=q(),Io=I();function wo(e,r){r=Ao(r,e);for(var i=0,t=r.length;e!=null&&i<t;)e=e[Io(r[i++])];return i&&i==t?e:void 0}Pr.exports=wo});var D=n((Tc,Ir)=>{"use strict";var No=A(),Ko=function(){try{var e=No(Object,"defineProperty");return e({},"",{}),e}catch{}}();Ir.exports=Ko});var Kr=n((mc,Nr)=>{"use strict";var wr=D();function So(e,r,i){r=="__proto__"&&wr?wr(e,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[r]=i}Nr.exports=So});var Dr=n((Ec,Sr)=>{"use strict";var Do=Kr(),Uo=K(),Fo=Object.prototype,Go=Fo.hasOwnProperty;function Mo(e,r,i){var t=e[r];(!(Go.call(e,r)&&Uo(t,i))||i===void 0&&!(r in e))&&Do(e,r,i)}Sr.exports=Mo});var U=n((Pc,Ur)=>{"use strict";var Ro=9007199254740991,Lo=/^(?:0|[1-9]\d*)$/;function jo(e,r){var i=typeof e;return r=r??Ro,!!r&&(i=="number"||i!="symbol"&&Lo.test(e))&&e>-1&&e%1==0&&e<r}Ur.exports=jo});var Mr=n((Ac,Gr)=>{"use strict";var zo=Dr(),Vo=q(),ko=U(),Fr=P(),$o=I();function Bo(e,r,i,t){if(!Fr(e))return e;r=Vo(r,e);for(var o=-1,u=r.length,c=u-1,f=e;f!=null&&++o<u;){var p=$o(r[o]),b=i;if(p==="__proto__"||p==="constructor"||p==="prototype")return e;if(o!=c){var w=f[p];b=t?t(w,p,f):void 0,b===void 0&&(b=Fr(w)?w:ko(r[o+1])?[]:{})}zo(f,p,b),f=f[p]}return e}Gr.exports=Bo});var Lr=n((Ic,Rr)=>{"use strict";var Xo=Ar(),Jo=Mr(),Yo=q();function Zo(e,r,i){for(var t=-1,o=r.length,u={};++t<o;){var c=r[t],f=Xo(e,c);i(f,c)&&Jo(u,Yo(c,e),f)}return u}Rr.exports=Zo});var zr=n((wc,jr)=>{"use strict";function Wo(e,r){return e!=null&&r in Object(e)}jr.exports=Wo});var kr=n((Nc,Vr)=>{"use strict";var Qo=T(),Co=m(),Ho="[object Arguments]";function ea(e){return Co(e)&&Qo(e)==Ho}Vr.exports=ea});var F=n((Kc,Xr)=>{"use strict";var $r=kr(),ra=m(),Br=Object.prototype,ia=Br.hasOwnProperty,ta=Br.propertyIsEnumerable,na=$r(function(){return arguments}())?$r:function(e){return ra(e)&&ia.call(e,"callee")&&!ta.call(e,"callee")};Xr.exports=na});var Yr=n((Sc,Jr)=>{"use strict";var oa=9007199254740991;function aa(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=oa}Jr.exports=aa});var Wr=n((Dc,Zr)=>{"use strict";var ua=q(),ca=F(),fa=l(),pa=U(),la=Yr(),ha=I();function da(e,r,i){r=ua(r,e);for(var t=-1,o=r.length,u=!1;++t<o;){var c=ha(r[t]);if(!(u=e!=null&&i(e,c)))break;e=e[c]}return u||++t!=o?u:(o=e==null?0:e.length,!!o&&la(o)&&pa(c,o)&&(fa(e)||ca(e)))}Zr.exports=da});var Cr=n((Uc,Qr)=>{"use strict";var sa=zr(),xa=Wr();function va(e,r){return e!=null&&xa(e,r,sa)}Qr.exports=va});var ei=n((Fc,Hr)=>{"use strict";var _a=Lr(),ya=Cr();function ga(e,r){return _a(e,r,function(i,t){return ya(e,t)})}Hr.exports=ga});var ii=n((Gc,ri)=>{"use strict";function qa(e,r){for(var i=-1,t=r.length,o=e.length;++i<t;)e[o+i]=r[i];return e}ri.exports=qa});var ai=n((Mc,oi)=>{"use strict";var ti=x(),ba=F(),Oa=l(),ni=ti?ti.isConcatSpreadable:void 0;function Ta(e){return Oa(e)||ba(e)||!!(ni&&e&&e[ni])}oi.exports=Ta});var fi=n((Rc,ci)=>{"use strict";var ma=ii(),Ea=ai();function ui(e,r,i,t,o){var u=-1,c=e.length;for(i||(i=Ea),o||(o=[]);++u<c;){var f=e[u];r>0&&i(f)?r>1?ui(f,r-1,i,t,o):ma(o,f):t||(o[o.length]=f)}return o}ci.exports=ui});var li=n((Lc,pi)=>{"use strict";var Pa=fi();function Aa(e){var r=e==null?0:e.length;return r?Pa(e,1):[]}pi.exports=Aa});var di=n((jc,hi)=>{"use strict";function Ia(e,r,i){switch(i.length){case 0:return e.call(r);case 1:return e.call(r,i[0]);case 2:return e.call(r,i[0],i[1]);case 3:return e.call(r,i[0],i[1],i[2])}return e.apply(r,i)}hi.exports=Ia});var vi=n((zc,xi)=>{"use strict";var wa=di(),si=Math.max;function Na(e,r,i){return r=si(r===void 0?e.length-1:r,0),function(){for(var t=arguments,o=-1,u=si(t.length-r,0),c=Array(u);++o<u;)c[o]=t[r+o];o=-1;for(var f=Array(r+1);++o<r;)f[o]=t[o];return f[r]=i(c),wa(e,this,f)}}xi.exports=Na});var yi=n((Vc,_i)=>{"use strict";function Ka(e){return function(){return e}}_i.exports=Ka});var qi=n((kc,gi)=>{"use strict";function Sa(e){return e}gi.exports=Sa});var Ti=n(($c,Oi)=>{"use strict";var Da=yi(),bi=D(),Ua=qi(),Fa=bi?function(e,r){return bi(e,"toString",{configurable:!0,enumerable:!1,value:Da(r),writable:!0})}:Ua;Oi.exports=Fa});var Ei=n((Bc,mi)=>{"use strict";var Ga=800,Ma=16,Ra=Date.now;function La(e){var r=0,i=0;return function(){var t=Ra(),o=Ma-(t-i);if(i=t,o>0){if(++r>=Ga)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}mi.exports=La});var Ai=n((Xc,Pi)=>{"use strict";var ja=Ti(),za=Ei(),Va=za(ja);Pi.exports=Va});var wi=n((Jc,Ii)=>{"use strict";var ka=li(),$a=vi(),Ba=Ai();function Xa(e){return Ba($a(e,void 0,ka),e+"")}Ii.exports=Xa});var Ki=n((Yc,Ni)=>{"use strict";var Ja=ei(),Ya=wi(),Za=Ya(function(e,r){return e==null?{}:Ja(e,r)});Ni.exports=Za});var eu="https://github.com/kirklin/celeris-web",ru="https://cn.vitejs.dev/",iu="https://vitejs.dev/",tu="https://vuejs.org/";function ou(){}var Si=(t=>(t.BASE_LOGIN="/login",t.BASE_HOME="/dashboard",t.ERROR_PAGE="/exception",t))(Si||{});var Di=(u=>(u.Windows="Windows",u.MacOS="MacOS",u.UNIX="UNIX",u.Linux="Linux",u.Unknown="Unknown",u))(Di||{});var fu="PROJECT__CONFIG__KEY",pu="LOCALES__STORE__KEY";var Ui=(o=>(o.GET="GET",o.POST="POST",o.PUT="PUT",o.DELETE="DELETE",o))(Ui||{}),Fi=(t=>(t[t.SUCCESS=0]="SUCCESS",t[t.ERROR=-1]="ERROR",t[t.TIMEOUT=408]="TIMEOUT",t))(Fi||{}),Gi=(t=>(t.JSON="application/json;charset=UTF-8",t.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",t.FORM_MULTIPART="multipart/form-data;charset=UTF-8",t))(Gi||{}),Mi=(a=>(a[a.Processing=102]="Processing",a[a.OK=200]="OK",a[a.Created=201]="Created",a[a.Accepted=202]="Accepted",a[a.NoContent=204]="NoContent",a[a.ResetContent=205]="ResetContent",a[a.PartialContent=206]="PartialContent",a[a.MovedPermanently=301]="MovedPermanently",a[a.Found=302]="Found",a[a.SeeOther=303]="SeeOther",a[a.NotModified=304]="NotModified",a[a.UseProxy=305]="UseProxy",a[a.TemporaryRedirect=307]="TemporaryRedirect",a[a.PermanentRedirect=308]="PermanentRedirect",a[a.BadRequest=400]="BadRequest",a[a.Unauthorized=401]="Unauthorized",a[a.Forbidden=403]="Forbidden",a[a.NotFound=404]="NotFound",a[a.MethodNotAllowed=405]="MethodNotAllowed",a[a.RequestTimeout=408]="RequestTimeout",a[a.InternalServerError=500]="InternalServerError",a[a.BadGateway=502]="BadGateway",a[a.ServiceUnavailable=503]="ServiceUnavailable",a[a.GatewayTimeout=504]="GatewayTimeout",a))(Mi||{});var Ri=(t=>(t.ROLE="ROLE",t.BACKEND="BACKEND",t.ROUTE_MAPPING="ROUTE_MAPPING",t))(Ri||{}),Li=(i=>(i.LOCAL_STORAGE="LOCAL_STORAGE",i.SESSION_STORAGE="SESSION_STORAGE",i))(Li||{}),ji=(i=>(i[i.ROUTE_JUMP=0]="ROUTE_JUMP",i[i.PAGE_COVERAGE=1]="PAGE_COVERAGE",i))(ji||{});var zi=(c=>(c.ZOOM_FADE="zoom-fade",c.ZOOM_OUT="zoom-out",c.FADE_SLIDE="fade-slide",c.FADE="fade",c.FADE_BOTTOM="fade-bottom",c.FADE_SCALE="fade-scale",c))(zi||{}),Vi=(t=>(t.AUTO="auto",t.HEADER="header",t.FIXED="fixed",t))(Vi||{});var ki=(t=>(t.ADMIN="admin",t.USER="user",t.GUEST="guest",t))(ki||{});var Wa=Ki(),Qa=e=>Object.prototype.toString.call(e).slice(8,-1),Ca=e=>["String","Number","Symbol"].includes(Qa(e));function Zc(e,r,i){return typeof i>"u"?e.map(t=>t[r]):e.reduce((t,o)=>{let u=o[r];if(!Ca(u))return t;let c=Array.isArray(i)?Wa(o,i):o[i];return{...t,[u]:c}},{})}export{eu as CELERIS_WEB_GITHUB_URL,Gi as ContentTypeConstants,Mi as HttpStatusConstants,pu as LOCALES_STORE_KEY,ou as NOOP,Di as OperatingSystem,fu as PROJECT_CONFIG_KEY,Si as PageConstants,Li as PermissionCacheTypeConstants,Ri as PermissionModeConstants,Ui as RequestConstants,Fi as ResultConstants,ki as RoleConstants,zi as RouterTransitionConstants,ji as SessionTimeoutProcessingConstants,Vi as SettingButtonPositionConstants,ru as VITE_DOCS_CN_URL,iu as VITE_DOCS_URL,tu as VUE_DOCS_URL,Zc as defineConstants};
