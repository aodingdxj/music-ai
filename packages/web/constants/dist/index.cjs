"use strict";var N=Object.defineProperty;var Bi=Object.getOwnPropertyDescriptor;var Xi=Object.getOwnPropertyNames;var Ji=Object.prototype.hasOwnProperty;var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),Yi=(e,r)=>{for(var i in r)N(e,i,{get:r[i],enumerable:!0})},Zi=(e,r,i,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Xi(r))!Ji.call(e,o)&&o!==i&&N(e,o,{get:()=>r[o],enumerable:!(t=Bi(r,o))||t.enumerable});return e};var Wi=e=>Zi(N({},"__esModule",{value:!0}),e);var l=n((Fu,Z)=>{"use strict";var nt=Array.isArray;Z.exports=nt});var Q=n((Gu,W)=>{"use strict";var ot=typeof global=="object"&&global&&global.Object===Object&&global;W.exports=ot});var O=n((Mu,C)=>{"use strict";var at=Q(),ut=typeof self=="object"&&self&&self.Object===Object&&self,ct=at||ut||Function("return this")();C.exports=ct});var x=n((Ru,H)=>{"use strict";var ft=O(),pt=ft.Symbol;H.exports=pt});var te=n((Lu,ie)=>{"use strict";var ee=x(),re=Object.prototype,lt=re.hasOwnProperty,ht=re.toString,v=ee?ee.toStringTag:void 0;function dt(e){var r=lt.call(e,v),i=e[v];try{e[v]=void 0;var t=!0}catch{}var o=ht.call(e);return t&&(r?e[v]=i:delete e[v]),o}ie.exports=dt});var oe=n((ju,ne)=>{"use strict";var st=Object.prototype,xt=st.toString;function vt(e){return xt.call(e)}ne.exports=vt});var T=n((zu,ce)=>{"use strict";var ae=x(),_t=te(),yt=oe(),gt="[object Null]",qt="[object Undefined]",ue=ae?ae.toStringTag:void 0;function bt(e){return e==null?e===void 0?qt:gt:ue&&ue in Object(e)?_t(e):yt(e)}ce.exports=bt});var m=n((Vu,fe)=>{"use strict";function Ot(e){return e!=null&&typeof e=="object"}fe.exports=Ot});var E=n((ku,pe)=>{"use strict";var Tt=T(),mt=m(),Et="[object Symbol]";function Pt(e){return typeof e=="symbol"||mt(e)&&Tt(e)==Et}pe.exports=Pt});var he=n(($u,le)=>{"use strict";var At=l(),It=E(),wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nt=/^\w*$/;function Kt(e,r){if(At(e))return!1;var i=typeof e;return i=="number"||i=="symbol"||i=="boolean"||e==null||It(e)?!0:Nt.test(e)||!wt.test(e)||r!=null&&e in Object(r)}le.exports=Kt});var P=n((Bu,de)=>{"use strict";function St(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}de.exports=St});var xe=n((Xu,se)=>{"use strict";var Dt=T(),Ut=P(),Ft="[object AsyncFunction]",Gt="[object Function]",Mt="[object GeneratorFunction]",Rt="[object Proxy]";function Lt(e){if(!Ut(e))return!1;var r=Dt(e);return r==Gt||r==Mt||r==Ft||r==Rt}se.exports=Lt});var _e=n((Ju,ve)=>{"use strict";var jt=O(),zt=jt["__core-js_shared__"];ve.exports=zt});var qe=n((Yu,ge)=>{"use strict";var K=_e(),ye=function(){var e=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Vt(e){return!!ye&&ye in e}ge.exports=Vt});var Oe=n((Zu,be)=>{"use strict";var kt=Function.prototype,$t=kt.toString;function Bt(e){if(e!=null){try{return $t.call(e)}catch{}try{return e+""}catch{}}return""}be.exports=Bt});var me=n((Wu,Te)=>{"use strict";var Xt=xe(),Jt=qe(),Yt=P(),Zt=Oe(),Wt=/[\\^$.*+?()[\]{}|]/g,Qt=/^\[object .+?Constructor\]$/,Ct=Function.prototype,Ht=Object.prototype,en=Ct.toString,rn=Ht.hasOwnProperty,tn=RegExp("^"+en.call(rn).replace(Wt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nn(e){if(!Yt(e)||Jt(e))return!1;var r=Xt(e)?tn:Qt;return r.test(Zt(e))}Te.exports=nn});var Pe=n((Qu,Ee)=>{"use strict";function on(e,r){return e?.[r]}Ee.exports=on});var A=n((Cu,Ae)=>{"use strict";var an=me(),un=Pe();function cn(e,r){var i=un(e,r);return an(i)?i:void 0}Ae.exports=cn});var _=n((Hu,Ie)=>{"use strict";var fn=A(),pn=fn(Object,"create");Ie.exports=pn});var Ke=n((ec,Ne)=>{"use strict";var we=_();function ln(){this.__data__=we?we(null):{},this.size=0}Ne.exports=ln});var De=n((rc,Se)=>{"use strict";function hn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}Se.exports=hn});var Fe=n((ic,Ue)=>{"use strict";var dn=_(),sn="__lodash_hash_undefined__",xn=Object.prototype,vn=xn.hasOwnProperty;function _n(e){var r=this.__data__;if(dn){var i=r[e];return i===sn?void 0:i}return vn.call(r,e)?r[e]:void 0}Ue.exports=_n});var Me=n((tc,Ge)=>{"use strict";var yn=_(),gn=Object.prototype,qn=gn.hasOwnProperty;function bn(e){var r=this.__data__;return yn?r[e]!==void 0:qn.call(r,e)}Ge.exports=bn});var Le=n((nc,Re)=>{"use strict";var On=_(),Tn="__lodash_hash_undefined__";function mn(e,r){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=On&&r===void 0?Tn:r,this}Re.exports=mn});var ze=n((oc,je)=>{"use strict";var En=Ke(),Pn=De(),An=Fe(),In=Me(),wn=Le();function h(e){var r=-1,i=e==null?0:e.length;for(this.clear();++r<i;){var t=e[r];this.set(t[0],t[1])}}h.prototype.clear=En;h.prototype.delete=Pn;h.prototype.get=An;h.prototype.has=In;h.prototype.set=wn;je.exports=h});var ke=n((ac,Ve)=>{"use strict";function Nn(){this.__data__=[],this.size=0}Ve.exports=Nn});var S=n((uc,$e)=>{"use strict";function Kn(e,r){return e===r||e!==e&&r!==r}$e.exports=Kn});var y=n((cc,Be)=>{"use strict";var Sn=S();function Dn(e,r){for(var i=e.length;i--;)if(Sn(e[i][0],r))return i;return-1}Be.exports=Dn});var Je=n((fc,Xe)=>{"use strict";var Un=y(),Fn=Array.prototype,Gn=Fn.splice;function Mn(e){var r=this.__data__,i=Un(r,e);if(i<0)return!1;var t=r.length-1;return i==t?r.pop():Gn.call(r,i,1),--this.size,!0}Xe.exports=Mn});var Ze=n((pc,Ye)=>{"use strict";var Rn=y();function Ln(e){var r=this.__data__,i=Rn(r,e);return i<0?void 0:r[i][1]}Ye.exports=Ln});var Qe=n((lc,We)=>{"use strict";var jn=y();function zn(e){return jn(this.__data__,e)>-1}We.exports=zn});var He=n((hc,Ce)=>{"use strict";var Vn=y();function kn(e,r){var i=this.__data__,t=Vn(i,e);return t<0?(++this.size,i.push([e,r])):i[t][1]=r,this}Ce.exports=kn});var rr=n((dc,er)=>{"use strict";var $n=ke(),Bn=Je(),Xn=Ze(),Jn=Qe(),Yn=He();function d(e){var r=-1,i=e==null?0:e.length;for(this.clear();++r<i;){var t=e[r];this.set(t[0],t[1])}}d.prototype.clear=$n;d.prototype.delete=Bn;d.prototype.get=Xn;d.prototype.has=Jn;d.prototype.set=Yn;er.exports=d});var tr=n((sc,ir)=>{"use strict";var Zn=A(),Wn=O(),Qn=Zn(Wn,"Map");ir.exports=Qn});var ar=n((xc,or)=>{"use strict";var nr=ze(),Cn=rr(),Hn=tr();function eo(){this.size=0,this.__data__={hash:new nr,map:new(Hn||Cn),string:new nr}}or.exports=eo});var cr=n((vc,ur)=>{"use strict";function ro(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}ur.exports=ro});var g=n((_c,fr)=>{"use strict";var io=cr();function to(e,r){var i=e.__data__;return io(r)?i[typeof r=="string"?"string":"hash"]:i.map}fr.exports=to});var lr=n((yc,pr)=>{"use strict";var no=g();function oo(e){var r=no(this,e).delete(e);return this.size-=r?1:0,r}pr.exports=oo});var dr=n((gc,hr)=>{"use strict";var ao=g();function uo(e){return ao(this,e).get(e)}hr.exports=uo});var xr=n((qc,sr)=>{"use strict";var co=g();function fo(e){return co(this,e).has(e)}sr.exports=fo});var _r=n((bc,vr)=>{"use strict";var po=g();function lo(e,r){var i=po(this,e),t=i.size;return i.set(e,r),this.size+=i.size==t?0:1,this}vr.exports=lo});var gr=n((Oc,yr)=>{"use strict";var ho=ar(),so=lr(),xo=dr(),vo=xr(),_o=_r();function s(e){var r=-1,i=e==null?0:e.length;for(this.clear();++r<i;){var t=e[r];this.set(t[0],t[1])}}s.prototype.clear=ho;s.prototype.delete=so;s.prototype.get=xo;s.prototype.has=vo;s.prototype.set=_o;yr.exports=s});var Or=n((Tc,br)=>{"use strict";var qr=gr(),yo="Expected a function";function D(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(yo);var i=function(){var t=arguments,o=r?r.apply(this,t):t[0],u=i.cache;if(u.has(o))return u.get(o);var c=e.apply(this,t);return i.cache=u.set(o,c)||u,c};return i.cache=new(D.Cache||qr),i}D.Cache=qr;br.exports=D});var mr=n((mc,Tr)=>{"use strict";var go=Or(),qo=500;function bo(e){var r=go(e,function(t){return i.size===qo&&i.clear(),t}),i=r.cache;return r}Tr.exports=bo});var Pr=n((Ec,Er)=>{"use strict";var Oo=mr(),To=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mo=/\\(\\)?/g,Eo=Oo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(To,function(i,t,o,u){r.push(o?u.replace(mo,"$1"):t||i)}),r});Er.exports=Eo});var Ir=n((Pc,Ar)=>{"use strict";function Po(e,r){for(var i=-1,t=e==null?0:e.length,o=Array(t);++i<t;)o[i]=r(e[i],i,e);return o}Ar.exports=Po});var Ur=n((Ac,Dr)=>{"use strict";var wr=x(),Ao=Ir(),Io=l(),wo=E(),No=1/0,Nr=wr?wr.prototype:void 0,Kr=Nr?Nr.toString:void 0;function Sr(e){if(typeof e=="string")return e;if(Io(e))return Ao(e,Sr)+"";if(wo(e))return Kr?Kr.call(e):"";var r=e+"";return r=="0"&&1/e==-No?"-0":r}Dr.exports=Sr});var Gr=n((Ic,Fr)=>{"use strict";var Ko=Ur();function So(e){return e==null?"":Ko(e)}Fr.exports=So});var q=n((wc,Mr)=>{"use strict";var Do=l(),Uo=he(),Fo=Pr(),Go=Gr();function Mo(e,r){return Do(e)?e:Uo(e,r)?[e]:Fo(Go(e))}Mr.exports=Mo});var I=n((Nc,Rr)=>{"use strict";var Ro=E(),Lo=1/0;function jo(e){if(typeof e=="string"||Ro(e))return e;var r=e+"";return r=="0"&&1/e==-Lo?"-0":r}Rr.exports=jo});var jr=n((Kc,Lr)=>{"use strict";var zo=q(),Vo=I();function ko(e,r){r=zo(r,e);for(var i=0,t=r.length;e!=null&&i<t;)e=e[Vo(r[i++])];return i&&i==t?e:void 0}Lr.exports=ko});var U=n((Sc,zr)=>{"use strict";var $o=A(),Bo=function(){try{var e=$o(Object,"defineProperty");return e({},"",{}),e}catch{}}();zr.exports=Bo});var $r=n((Dc,kr)=>{"use strict";var Vr=U();function Xo(e,r,i){r=="__proto__"&&Vr?Vr(e,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[r]=i}kr.exports=Xo});var Xr=n((Uc,Br)=>{"use strict";var Jo=$r(),Yo=S(),Zo=Object.prototype,Wo=Zo.hasOwnProperty;function Qo(e,r,i){var t=e[r];(!(Wo.call(e,r)&&Yo(t,i))||i===void 0&&!(r in e))&&Jo(e,r,i)}Br.exports=Qo});var F=n((Fc,Jr)=>{"use strict";var Co=9007199254740991,Ho=/^(?:0|[1-9]\d*)$/;function ea(e,r){var i=typeof e;return r=r??Co,!!r&&(i=="number"||i!="symbol"&&Ho.test(e))&&e>-1&&e%1==0&&e<r}Jr.exports=ea});var Wr=n((Gc,Zr)=>{"use strict";var ra=Xr(),ia=q(),ta=F(),Yr=P(),na=I();function oa(e,r,i,t){if(!Yr(e))return e;r=ia(r,e);for(var o=-1,u=r.length,c=u-1,f=e;f!=null&&++o<u;){var p=na(r[o]),b=i;if(p==="__proto__"||p==="constructor"||p==="prototype")return e;if(o!=c){var w=f[p];b=t?t(w,p,f):void 0,b===void 0&&(b=Yr(w)?w:ta(r[o+1])?[]:{})}ra(f,p,b),f=f[p]}return e}Zr.exports=oa});var Cr=n((Mc,Qr)=>{"use strict";var aa=jr(),ua=Wr(),ca=q();function fa(e,r,i){for(var t=-1,o=r.length,u={};++t<o;){var c=r[t],f=aa(e,c);i(f,c)&&ua(u,ca(c,e),f)}return u}Qr.exports=fa});var ei=n((Rc,Hr)=>{"use strict";function pa(e,r){return e!=null&&r in Object(e)}Hr.exports=pa});var ii=n((Lc,ri)=>{"use strict";var la=T(),ha=m(),da="[object Arguments]";function sa(e){return ha(e)&&la(e)==da}ri.exports=sa});var G=n((jc,oi)=>{"use strict";var ti=ii(),xa=m(),ni=Object.prototype,va=ni.hasOwnProperty,_a=ni.propertyIsEnumerable,ya=ti(function(){return arguments}())?ti:function(e){return xa(e)&&va.call(e,"callee")&&!_a.call(e,"callee")};oi.exports=ya});var ui=n((zc,ai)=>{"use strict";var ga=9007199254740991;function qa(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ga}ai.exports=qa});var fi=n((Vc,ci)=>{"use strict";var ba=q(),Oa=G(),Ta=l(),ma=F(),Ea=ui(),Pa=I();function Aa(e,r,i){r=ba(r,e);for(var t=-1,o=r.length,u=!1;++t<o;){var c=Pa(r[t]);if(!(u=e!=null&&i(e,c)))break;e=e[c]}return u||++t!=o?u:(o=e==null?0:e.length,!!o&&Ea(o)&&ma(c,o)&&(Ta(e)||Oa(e)))}ci.exports=Aa});var li=n((kc,pi)=>{"use strict";var Ia=ei(),wa=fi();function Na(e,r){return e!=null&&wa(e,r,Ia)}pi.exports=Na});var di=n(($c,hi)=>{"use strict";var Ka=Cr(),Sa=li();function Da(e,r){return Ka(e,r,function(i,t){return Sa(e,t)})}hi.exports=Da});var xi=n((Bc,si)=>{"use strict";function Ua(e,r){for(var i=-1,t=r.length,o=e.length;++i<t;)e[o+i]=r[i];return e}si.exports=Ua});var gi=n((Xc,yi)=>{"use strict";var vi=x(),Fa=G(),Ga=l(),_i=vi?vi.isConcatSpreadable:void 0;function Ma(e){return Ga(e)||Fa(e)||!!(_i&&e&&e[_i])}yi.exports=Ma});var Oi=n((Jc,bi)=>{"use strict";var Ra=xi(),La=gi();function qi(e,r,i,t,o){var u=-1,c=e.length;for(i||(i=La),o||(o=[]);++u<c;){var f=e[u];r>0&&i(f)?r>1?qi(f,r-1,i,t,o):Ra(o,f):t||(o[o.length]=f)}return o}bi.exports=qi});var mi=n((Yc,Ti)=>{"use strict";var ja=Oi();function za(e){var r=e==null?0:e.length;return r?ja(e,1):[]}Ti.exports=za});var Pi=n((Zc,Ei)=>{"use strict";function Va(e,r,i){switch(i.length){case 0:return e.call(r);case 1:return e.call(r,i[0]);case 2:return e.call(r,i[0],i[1]);case 3:return e.call(r,i[0],i[1],i[2])}return e.apply(r,i)}Ei.exports=Va});var wi=n((Wc,Ii)=>{"use strict";var ka=Pi(),Ai=Math.max;function $a(e,r,i){return r=Ai(r===void 0?e.length-1:r,0),function(){for(var t=arguments,o=-1,u=Ai(t.length-r,0),c=Array(u);++o<u;)c[o]=t[r+o];o=-1;for(var f=Array(r+1);++o<r;)f[o]=t[o];return f[r]=i(c),ka(e,this,f)}}Ii.exports=$a});var Ki=n((Qc,Ni)=>{"use strict";function Ba(e){return function(){return e}}Ni.exports=Ba});var Di=n((Cc,Si)=>{"use strict";function Xa(e){return e}Si.exports=Xa});var Gi=n((Hc,Fi)=>{"use strict";var Ja=Ki(),Ui=U(),Ya=Di(),Za=Ui?function(e,r){return Ui(e,"toString",{configurable:!0,enumerable:!1,value:Ja(r),writable:!0})}:Ya;Fi.exports=Za});var Ri=n((ef,Mi)=>{"use strict";var Wa=800,Qa=16,Ca=Date.now;function Ha(e){var r=0,i=0;return function(){var t=Ca(),o=Qa-(t-i);if(i=t,o>0){if(++r>=Wa)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}Mi.exports=Ha});var ji=n((rf,Li)=>{"use strict";var eu=Gi(),ru=Ri(),iu=ru(eu);Li.exports=iu});var Vi=n((tf,zi)=>{"use strict";var tu=mi(),nu=wi(),ou=ji();function au(e){return ou(nu(e,void 0,tu),e+"")}zi.exports=au});var $i=n((nf,ki)=>{"use strict";var uu=di(),cu=Vi(),fu=cu(function(e,r){return e==null?{}:uu(e,r)});ki.exports=fu});var su={};Yi(su,{CELERIS_WEB_GITHUB_URL:()=>Qi,ContentTypeConstants:()=>z,HttpStatusConstants:()=>V,LOCALES_STORE_KEY:()=>tt,NOOP:()=>rt,OperatingSystem:()=>R,PROJECT_CONFIG_KEY:()=>it,PageConstants:()=>M,PermissionCacheTypeConstants:()=>$,PermissionModeConstants:()=>k,RequestConstants:()=>L,ResultConstants:()=>j,RoleConstants:()=>Y,RouterTransitionConstants:()=>X,SessionTimeoutProcessingConstants:()=>B,SettingButtonPositionConstants:()=>J,VITE_DOCS_CN_URL:()=>Ci,VITE_DOCS_URL:()=>Hi,VUE_DOCS_URL:()=>et,defineConstants:()=>du});module.exports=Wi(su);var Qi="https://github.com/kirklin/celeris-web",Ci="https://cn.vitejs.dev/",Hi="https://vitejs.dev/",et="https://vuejs.org/";function rt(){}var M=(t=>(t.BASE_LOGIN="/login",t.BASE_HOME="/dashboard",t.ERROR_PAGE="/exception",t))(M||{});var R=(u=>(u.Windows="Windows",u.MacOS="MacOS",u.UNIX="UNIX",u.Linux="Linux",u.Unknown="Unknown",u))(R||{});var it="PROJECT__CONFIG__KEY",tt="LOCALES__STORE__KEY";var L=(o=>(o.GET="GET",o.POST="POST",o.PUT="PUT",o.DELETE="DELETE",o))(L||{}),j=(t=>(t[t.SUCCESS=0]="SUCCESS",t[t.ERROR=-1]="ERROR",t[t.TIMEOUT=408]="TIMEOUT",t))(j||{}),z=(t=>(t.JSON="application/json;charset=UTF-8",t.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",t.FORM_MULTIPART="multipart/form-data;charset=UTF-8",t))(z||{}),V=(a=>(a[a.Processing=102]="Processing",a[a.OK=200]="OK",a[a.Created=201]="Created",a[a.Accepted=202]="Accepted",a[a.NoContent=204]="NoContent",a[a.ResetContent=205]="ResetContent",a[a.PartialContent=206]="PartialContent",a[a.MovedPermanently=301]="MovedPermanently",a[a.Found=302]="Found",a[a.SeeOther=303]="SeeOther",a[a.NotModified=304]="NotModified",a[a.UseProxy=305]="UseProxy",a[a.TemporaryRedirect=307]="TemporaryRedirect",a[a.PermanentRedirect=308]="PermanentRedirect",a[a.BadRequest=400]="BadRequest",a[a.Unauthorized=401]="Unauthorized",a[a.Forbidden=403]="Forbidden",a[a.NotFound=404]="NotFound",a[a.MethodNotAllowed=405]="MethodNotAllowed",a[a.RequestTimeout=408]="RequestTimeout",a[a.InternalServerError=500]="InternalServerError",a[a.BadGateway=502]="BadGateway",a[a.ServiceUnavailable=503]="ServiceUnavailable",a[a.GatewayTimeout=504]="GatewayTimeout",a))(V||{});var k=(t=>(t.ROLE="ROLE",t.BACKEND="BACKEND",t.ROUTE_MAPPING="ROUTE_MAPPING",t))(k||{}),$=(i=>(i.LOCAL_STORAGE="LOCAL_STORAGE",i.SESSION_STORAGE="SESSION_STORAGE",i))($||{}),B=(i=>(i[i.ROUTE_JUMP=0]="ROUTE_JUMP",i[i.PAGE_COVERAGE=1]="PAGE_COVERAGE",i))(B||{});var X=(c=>(c.ZOOM_FADE="zoom-fade",c.ZOOM_OUT="zoom-out",c.FADE_SLIDE="fade-slide",c.FADE="fade",c.FADE_BOTTOM="fade-bottom",c.FADE_SCALE="fade-scale",c))(X||{}),J=(t=>(t.AUTO="auto",t.HEADER="header",t.FIXED="fixed",t))(J||{});var Y=(t=>(t.ADMIN="admin",t.USER="user",t.GUEST="guest",t))(Y||{});var pu=$i(),lu=e=>Object.prototype.toString.call(e).slice(8,-1),hu=e=>["String","Number","Symbol"].includes(lu(e));function du(e,r,i){return typeof i>"u"?e.map(t=>t[r]):e.reduce((t,o)=>{let u=o[r];if(!hu(u))return t;let c=Array.isArray(i)?pu(o,i):o[i];return{...t,[u]:c}},{})}0&&(module.exports={CELERIS_WEB_GITHUB_URL,ContentTypeConstants,HttpStatusConstants,LOCALES_STORE_KEY,NOOP,OperatingSystem,PROJECT_CONFIG_KEY,PageConstants,PermissionCacheTypeConstants,PermissionModeConstants,RequestConstants,ResultConstants,RoleConstants,RouterTransitionConstants,SessionTimeoutProcessingConstants,SettingButtonPositionConstants,VITE_DOCS_CN_URL,VITE_DOCS_URL,VUE_DOCS_URL,defineConstants});