(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ts="160",fc=0,Vs=1,dc=2,So=1,yo=2,pn=3,An=0,Nt=1,Dt=2,Tn=0,hi=1,Ws=2,Xs=3,qs=4,pc=5,On=100,mc=101,gc=102,Ys=103,$s=104,_c=200,vc=201,xc=202,Mc=203,ds=204,ps=205,Sc=206,yc=207,Ec=208,Tc=209,bc=210,wc=211,Ac=212,Rc=213,Cc=214,Lc=0,Pc=1,Dc=2,mr=3,Uc=4,Ic=5,Nc=6,Oc=7,Eo=0,Fc=1,Bc=2,bn=0,zc=1,Gc=2,Hc=3,kc=4,Vc=5,Wc=6,To=300,fi=301,di=302,ms=303,gs=304,Sr=306,_s=1e3,en=1001,vs=1002,Pt=1003,Ks=1004,Lr=1005,Xt=1006,Xc=1007,Pi=1008,wn=1009,qc=1010,Yc=1011,bs=1012,bo=1013,yn=1014,En=1015,Di=1016,wo=1017,Ao=1018,Bn=1020,$c=1021,tn=1023,Kc=1024,Jc=1025,zn=1026,pi=1027,Zc=1028,Ro=1029,jc=1030,Co=1031,Lo=1033,Pr=33776,Dr=33777,Ur=33778,Ir=33779,Js=35840,Zs=35841,js=35842,Qs=35843,Po=36196,ea=37492,ta=37496,na=37808,ia=37809,ra=37810,sa=37811,aa=37812,oa=37813,ca=37814,la=37815,ha=37816,ua=37817,fa=37818,da=37819,pa=37820,ma=37821,Nr=36492,ga=36494,_a=36495,Qc=36283,va=36284,xa=36285,Ma=36286,Do=3e3,Gn=3001,el=3200,tl=3201,Uo=0,nl=1,$t="",Mt="srgb",gn="srgb-linear",ws="display-p3",yr="display-p3-linear",gr="linear",tt="srgb",_r="rec709",vr="p3",Vn=7680,Sa=519,il=512,rl=513,sl=514,Io=515,al=516,ol=517,cl=518,ll=519,ya=35044,Ea="300 es",xs=1035,mn=2e3,xr=2001;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,c=r.length;s<c;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Or=Math.PI/180,Ms=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function hl(i,e){return(i%e+e)%e}function Fr(i,e,t){return(1-t)*i+t*e}function Ta(i){return(i&i-1)===0&&i!==0}function Ss(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*r+e.x,this.y=s*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,r,s,c,o,a,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,o,a,l)}set(e,t,n,r,s,c,o,a,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=c,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],o=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],E=r[1],S=r[4],b=r[7],U=r[2],A=r[5],R=r[8];return s[0]=c*_+o*E+a*U,s[3]=c*m+o*S+a*A,s[6]=c*f+o*b+a*R,s[1]=l*_+h*E+d*U,s[4]=l*m+h*S+d*A,s[7]=l*f+h*b+d*R,s[2]=u*_+p*E+g*U,s[5]=u*m+p*S+g*A,s[8]=u*f+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],a=e[6],l=e[7],h=e[8];return t*c*h-t*o*l-n*s*h+n*o*a+r*s*l-r*c*a}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],a=e[6],l=e[7],h=e[8],d=h*c-o*l,u=o*a-h*s,p=l*s-c*a,g=t*d+n*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-h*n)*_,e[2]=(o*n-r*c)*_,e[3]=u*_,e[4]=(h*t-r*a)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*a-l*t)*_,e[8]=(c*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,c,o){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*c+l*o)+c+e,-r*l,r*a,-r*(-l*c+a*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Br.makeScale(e,t)),this}rotate(e){return this.premultiply(Br.makeRotation(-e)),this}translate(e,t){return this.premultiply(Br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new Ve;function No(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ul(){const i=Mr("canvas");return i.style.display="block",i}const ba={};function Ai(i){i in ba||(ba[i]=!0,console.warn(i))}const wa=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Aa=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[gn]:{transfer:gr,primaries:_r,toReference:i=>i,fromReference:i=>i},[Mt]:{transfer:tt,primaries:_r,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[yr]:{transfer:gr,primaries:vr,toReference:i=>i.applyMatrix3(Aa),fromReference:i=>i.applyMatrix3(wa)},[ws]:{transfer:tt,primaries:vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Aa),fromReference:i=>i.applyMatrix3(wa).convertLinearToSRGB()}},fl=new Set([gn,yr]),Ze={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hi[e].toReference,r=Hi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hi[i].primaries},getTransfer:function(i){return i===$t?gr:Hi[i].transfer}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wn;class Oo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wn===void 0&&(Wn=Mr("canvas")),Wn.width=e.width,Wn.height=e.height;const n=Wn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let c=0;c<s.length;c++)s[c]=ui(s[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dl=0;class Fo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dl++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let c=0,o=r.length;c<o;c++)r[c].isDataTexture?s.push(Gr(r[c].image)):s.push(Gr(r[c]))}else s=Gr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pl=0;class Ot extends gi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=en,r=en,s=Xt,c=Pi,o=tn,a=wn,l=Ot.DEFAULT_ANISOTROPY,h=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=Ui(),this.name="",this.source=new Fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=c,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Gn?Mt:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==To)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Gn:Do}set encoding(e){Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gn?Mt:$t}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=To;Ot.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const a=e.elements,l=a[0],h=a[4],d=a[8],u=a[1],p=a[5],g=a[9],_=a[2],m=a[6],f=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,b=(p+1)/2,U=(f+1)/2,A=(h+u)/4,R=(d+_)/4,X=(g+m)/4;return S>b&&S>U?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=A/n,s=R/n):b>U?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=A/r,s=X/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=R/s,r=X/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ml extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gn?Mt:$t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends ml{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bo extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,c,o){let a=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const u=s[c+0],p=s[c+1],g=s[c+2],_=s[c+3];if(o===0){e[t+0]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||a!==u||l!==p||h!==g){let m=1-o;const f=a*u+l*p+h*g+d*_,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const U=Math.sqrt(S),A=Math.atan2(U,f*E);m=Math.sin(m*A)/U,o=Math.sin(o*A)/U}const b=o*E;if(a=a*m+u*b,l=l*m+p*b,h=h*m+g*b,d=d*m+_*b,m===1-o){const U=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=U,l*=U,h*=U,d*=U}}e[t]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,c){const o=n[r],a=n[r+1],l=n[r+2],h=n[r+3],d=s[c],u=s[c+1],p=s[c+2],g=s[c+3];return e[t]=o*g+h*d+a*p-l*u,e[t+1]=a*g+h*u+l*d-o*p,e[t+2]=l*g+h*p+o*u-a*d,e[t+3]=h*g-o*d-a*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,c=e._order,o=Math.cos,a=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),u=a(n/2),p=a(r/2),g=a(s/2);switch(c){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],c=t[1],o=t[5],a=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-a)*p,this._y=(s-l)*p,this._z=(c-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-a)/p,this._x=.25*p,this._y=(r+c)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(r+c)/p,this._y=.25*p,this._z=(a+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(c-r)/p,this._x=(s+l)/p,this._y=(a+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,c=e._w,o=t._x,a=t._y,l=t._z,h=t._w;return this._x=n*h+c*o+r*l-s*a,this._y=r*h+c*a+s*o-n*l,this._z=s*h+c*l+n*a-r*o,this._w=c*h-n*o-r*a-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,c=this._w;let o=c*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=c,this._x=n,this._y=r,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const p=1-t;return this._w=p*c+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(a),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=c*d+this._w*u,this._x=n*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ra.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ra.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,c=e.y,o=e.z,a=e.w,l=2*(c*r-o*n),h=2*(o*t-s*r),d=2*(s*n-c*t);return this.x=t+a*l+c*d-o*h,this.y=n+a*h+o*l-s*d,this.z=r+a*d+s*h-c*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,c=t.x,o=t.y,a=t.z;return this.x=r*a-s*o,this.y=s*c-n*a,this.z=n*o-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new P,Ra=new Ii;class Ni{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,o=s.count;c<o;c++)e.isMesh===!0?e.getVertexPosition(c,Jt):Jt.fromBufferAttribute(s,c),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const r=e.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),Vi.subVectors(this.max,Mi),Xn.subVectors(e.a,Mi),qn.subVectors(e.b,Mi),Yn.subVectors(e.c,Mi),_n.subVectors(qn,Xn),vn.subVectors(Yn,qn),Ln.subVectors(Xn,Yn);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!kr(t,Xn,qn,Yn,Vi)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,Xn,qn,Yn,Vi))?!1:(Wi.crossVectors(_n,vn),t=[Wi.x,Wi.y,Wi.z],kr(t,Xn,qn,Yn,Vi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new P,new P,new P,new P,new P,new P,new P,new P],Jt=new P,ki=new Ni,Xn=new P,qn=new P,Yn=new P,_n=new P,vn=new P,Ln=new P,Mi=new P,Vi=new P,Wi=new P,Pn=new P;function kr(i,e,t,n,r){for(let s=0,c=i.length-3;s<=c;s+=3){Pn.fromArray(i,s);const o=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),a=e.dot(Pn),l=t.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>o)return!1}return!0}const _l=new Ni,Si=new P,Vr=new P;class As{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_l.setFromPoints(e).getCenter(n);let r=0;for(let s=0,c=e.length;s<c;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Si,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(Vr)),this.expandByPoint(Si.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new P,Wr=new P,Xi=new P,xn=new P,Xr=new P,qi=new P,qr=new P;class vl{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wr.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Wr);const s=e.distanceTo(t)*.5,c=-this.direction.dot(Xi),o=xn.dot(this.direction),a=-xn.dot(Xi),l=xn.lengthSq(),h=Math.abs(1-c*c);let d,u,p,g;if(h>0)if(d=c*a-o,u=c*o-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+c*u+2*o)+u*(c*d+u+2*a)+l}else u=s,d=Math.max(0,-(c*u+o)),p=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(c*u+o)),p=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-c*s+o)),u=d>0?-s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),p=u*(u+2*a)+l):(d=Math.max(0,-(c*s+o)),u=d>0?s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+l);else u=c>0?-s:s,d=Math.max(0,-(c*u+o)),p=-d*d+u*(u+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wr).addScaledVector(Xi,u),p}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),r=hn.dot(hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const c=Math.sqrt(s-r),o=n-c,a=n+c;return a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,c,o,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,c=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,c=(e.min.y-u.y)*h),n>c||s>r||((s>n||isNaN(n))&&(n=s),(c<r||isNaN(r))&&(r=c),d>=0?(o=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||o>r)||((o>n||n!==n)&&(n=o),(a<r||r!==r)&&(r=a),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,s){Xr.subVectors(t,e),qi.subVectors(n,e),qr.crossVectors(Xr,qi);let c=this.direction.dot(qr),o;if(c>0){if(r)return null;o=1}else if(c<0)o=-1,c=-c;else return null;xn.subVectors(this.origin,e);const a=o*this.direction.dot(qi.crossVectors(xn,qi));if(a<0)return null;const l=o*this.direction.dot(Xr.cross(xn));if(l<0||a+l>c)return null;const h=-o*xn.dot(qr);return h<0?null:this.at(h/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,r,s,c,o,a,l,h,d,u,p,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,c,o,a,l,h,d,u,p,g,_,m)}set(e,t,n,r,s,c,o,a,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=c,f[9]=o,f[13]=a,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),c=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,c=Math.cos(n),o=Math.sin(n),a=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=c*h,p=c*d,g=o*h,_=o*d;t[0]=a*h,t[4]=-a*d,t[8]=l,t[1]=p+g*l,t[5]=u-_*l,t[9]=-o*a,t[2]=_-u*l,t[6]=g+p*l,t[10]=c*a}else if(e.order==="YXZ"){const u=a*h,p=a*d,g=l*h,_=l*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=c*l,t[1]=c*d,t[5]=c*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=c*a}else if(e.order==="ZXY"){const u=a*h,p=a*d,g=l*h,_=l*d;t[0]=u-_*o,t[4]=-c*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=c*h,t[9]=_-u*o,t[2]=-c*l,t[6]=o,t[10]=c*a}else if(e.order==="ZYX"){const u=c*h,p=c*d,g=o*h,_=o*d;t[0]=a*h,t[4]=g*l-p,t[8]=u*l+_,t[1]=a*d,t[5]=_*l+u,t[9]=p*l-g,t[2]=-l,t[6]=o*a,t[10]=c*a}else if(e.order==="YZX"){const u=c*a,p=c*l,g=o*a,_=o*l;t[0]=a*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=c*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=c*a,p=c*l,g=o*a,_=o*l;t[0]=a*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=c*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xl,e,Ml)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Mn.crossVectors(n,Bt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Mn.crossVectors(n,Bt)),Mn.normalize(),Yi.crossVectors(Bt,Mn),r[0]=Mn.x,r[4]=Yi.x,r[8]=Bt.x,r[1]=Mn.y,r[5]=Yi.y,r[9]=Bt.y,r[2]=Mn.z,r[6]=Yi.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,c=n[0],o=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],S=n[7],b=n[11],U=n[15],A=r[0],R=r[4],X=r[8],y=r[12],w=r[1],q=r[5],N=r[9],se=r[13],L=r[2],G=r[6],Y=r[10],K=r[14],J=r[3],j=r[7],Z=r[11],ae=r[15];return s[0]=c*A+o*w+a*L+l*J,s[4]=c*R+o*q+a*G+l*j,s[8]=c*X+o*N+a*Y+l*Z,s[12]=c*y+o*se+a*K+l*ae,s[1]=h*A+d*w+u*L+p*J,s[5]=h*R+d*q+u*G+p*j,s[9]=h*X+d*N+u*Y+p*Z,s[13]=h*y+d*se+u*K+p*ae,s[2]=g*A+_*w+m*L+f*J,s[6]=g*R+_*q+m*G+f*j,s[10]=g*X+_*N+m*Y+f*Z,s[14]=g*y+_*se+m*K+f*ae,s[3]=E*A+S*w+b*L+U*J,s[7]=E*R+S*q+b*G+U*j,s[11]=E*X+S*N+b*Y+U*Z,s[15]=E*y+S*se+b*K+U*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],c=e[1],o=e[5],a=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*a*d-r*l*d-s*o*u+n*l*u+r*o*p-n*a*p)+_*(+t*a*p-t*l*u+s*c*u-r*c*p+r*l*h-s*a*h)+m*(+t*l*d-t*o*p-s*c*d+n*c*p+s*o*h-n*l*h)+f*(-r*o*h-t*a*d+t*o*u+r*c*d-n*c*u+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],c=e[4],o=e[5],a=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=d*m*l-_*u*l+_*a*p-o*m*p-d*a*f+o*u*f,S=g*u*l-h*m*l-g*a*p+c*m*p+h*a*f-c*u*f,b=h*_*l-g*d*l+g*o*p-c*_*p-h*o*f+c*d*f,U=g*d*a-h*_*a-g*o*u+c*_*u+h*o*m-c*d*m,A=t*E+n*S+r*b+s*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(_*u*s-d*m*s-_*r*p+n*m*p+d*r*f-n*u*f)*R,e[2]=(o*m*s-_*a*s+_*r*l-n*m*l-o*r*f+n*a*f)*R,e[3]=(d*a*s-o*u*s-d*r*l+n*u*l+o*r*p-n*a*p)*R,e[4]=S*R,e[5]=(h*m*s-g*u*s+g*r*p-t*m*p-h*r*f+t*u*f)*R,e[6]=(g*a*s-c*m*s-g*r*l+t*m*l+c*r*f-t*a*f)*R,e[7]=(c*u*s-h*a*s+h*r*l-t*u*l-c*r*p+t*a*p)*R,e[8]=b*R,e[9]=(g*d*s-h*_*s-g*n*p+t*_*p+h*n*f-t*d*f)*R,e[10]=(c*_*s-g*o*s+g*n*l-t*_*l-c*n*f+t*o*f)*R,e[11]=(h*o*s-c*d*s-h*n*l+t*d*l+c*n*p-t*o*p)*R,e[12]=U*R,e[13]=(h*_*r-g*d*r+g*n*u-t*_*u-h*n*m+t*d*m)*R,e[14]=(g*o*r-c*_*r-g*n*a+t*_*a+c*n*m-t*o*m)*R,e[15]=(c*d*r-h*o*r+h*n*a-t*d*a-c*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,c=e.x,o=e.y,a=e.z,l=s*c,h=s*o;return this.set(l*c+n,l*o-r*a,l*a+r*o,0,l*o+r*a,h*o+n,h*a-r*c,0,l*a-r*o,h*a+r*c,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,c){return this.set(1,n,s,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,c=t._y,o=t._z,a=t._w,l=s+s,h=c+c,d=o+o,u=s*l,p=s*h,g=s*d,_=c*h,m=c*d,f=o*d,E=a*l,S=a*h,b=a*d,U=n.x,A=n.y,R=n.z;return r[0]=(1-(_+f))*U,r[1]=(p+b)*U,r[2]=(g-S)*U,r[3]=0,r[4]=(p-b)*A,r[5]=(1-(u+f))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+S)*R,r[9]=(m-E)*R,r[10]=(1-(u+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$n.set(r[0],r[1],r[2]).length();const c=$n.set(r[4],r[5],r[6]).length(),o=$n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const l=1/s,h=1/c,d=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=s,n.y=c,n.z=o,this}makePerspective(e,t,n,r,s,c,o=mn){const a=this.elements,l=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),u=(n+r)/(n-r);let p,g;if(o===mn)p=-(c+s)/(c-s),g=-2*c*s/(c-s);else if(o===xr)p=-c/(c-s),g=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=h,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=p,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,c,o=mn){const a=this.elements,l=1/(t-e),h=1/(n-r),d=1/(c-s),u=(t+e)*l,p=(n+r)*h;let g,_;if(o===mn)g=(c+s)*d,_=-2*d;else if(o===xr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-p,a[2]=0,a[6]=0,a[10]=_,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new P,Zt=new ut,xl=new P(0,0,0),Ml=new P(1,1,1),Mn=new P,Yi=new P,Bt=new P,Ca=new ut,La=new Ii;class Er{constructor(e=0,t=0,n=0,r=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],c=r[4],o=r[8],a=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-c,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-c,l));break;case"YZX":this._z=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sl=0;const Pa=new P,Kn=new Ii,un=new ut,$i=new P,yi=new P,yl=new P,El=new Ii,Da=new P(1,0,0),Ua=new P(0,1,0),Ia=new P(0,0,1),Tl={type:"added"},bl={type:"removed"};class yt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new P,t=new Er,n=new Ii,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ve}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Da,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Da,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$i.copy(e):$i.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(yi,$i,this.up):un.lookAt($i,yi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(un),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,c=r.length;s<c;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,yl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,El,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,c=r.length;s<c;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(e.materials,this.material[a]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];r.animations.push(s(e.animations,a))}}if(t){const o=c(e.geometries),a=c(e.materials),l=c(e.textures),h=c(e.images),d=c(e.shapes),u=c(e.skeletons),p=c(e.animations),g=c(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function c(o){const a=[];for(const l in o){const h=o[l];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new P(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new P,fn=new P,Yr=new P,dn=new P,Jn=new P,Zn=new P,Na=new P,$r=new P,Kr=new P,Jr=new P;let Ki=!1;class Qt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jt.subVectors(r,t),fn.subVectors(n,t),Yr.subVectors(e,t);const c=jt.dot(jt),o=jt.dot(fn),a=jt.dot(Yr),l=fn.dot(fn),h=fn.dot(Yr),d=c*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*a-o*h)*u,g=(c*h-o*a)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,r,s,c,o,a){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),this.getInterpolation(e,t,n,r,s,c,o,a)}static getInterpolation(e,t,n,r,s,c,o,a){return this.getBarycoord(e,t,n,r,dn)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,dn.x),a.addScaledVector(c,dn.y),a.addScaledVector(o,dn.z),a)}static isFrontFacing(e,t,n,r){return jt.subVectors(n,t),fn.subVectors(e,t),jt.cross(fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),jt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ki===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ki=!0),Qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let c,o;Jn.subVectors(r,n),Zn.subVectors(s,n),$r.subVectors(e,n);const a=Jn.dot($r),l=Zn.dot($r);if(a<=0&&l<=0)return t.copy(n);Kr.subVectors(e,r);const h=Jn.dot(Kr),d=Zn.dot(Kr);if(h>=0&&d<=h)return t.copy(r);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return c=a/(a-h),t.copy(n).addScaledVector(Jn,c);Jr.subVectors(e,s);const p=Jn.dot(Jr),g=Zn.dot(Jr);if(g>=0&&p<=g)return t.copy(s);const _=p*l-a*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Zn,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Na.subVectors(s,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(Na,o);const f=1/(m+_+u);return c=_*f,o=u*f,t.copy(n).addScaledVector(Jn,c).addScaledVector(Zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function Zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=hl(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=Zr(c,s,e+1/3),this.g=Zr(c,s,e),this.b=Zr(c,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=r[1],o=r[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ze.fromWorkingColorSpace(bt.copy(this),e),Math.round(St(bt.r*255,0,255))*65536+Math.round(St(bt.g*255,0,255))*256+Math.round(St(bt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,s=bt.b,c=Math.max(n,r,s),o=Math.min(n,r,s);let a,l;const h=(o+c)/2;if(o===c)a=0,l=0;else{const d=c-o;switch(l=h<=.5?d/(c+o):d/(2-c-o),c){case n:a=(r-s)/d+(r<s?6:0);break;case r:a=(s-n)/d+2;break;case s:a=(n-r)/d+4;break}a/=6}return e.h=a,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Mt){Ze.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Ji);const n=Fr(Sn.h,Ji.h,t),r=Fr(Sn.s,Ji.s,t),s=Fr(Sn.l,Ji.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ye;Ye.NAMES=Go;let wl=0;class Oi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=hi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ds,this.blendDst=ps,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ds&&(n.blendSrc=this.blendSrc),this.blendDst!==ps&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const c=[];for(const o in s){const a=s[o];delete a.metadata,c.push(a)}return c}if(t){const s=r(e.textures),c=r(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fi extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new P,Zi=new _e;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zi.fromBufferAttribute(this,t),Zi.applyMatrix3(e),this.setXY(t,Zi.x,Zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ya&&(e.usage=this.usage),e}}class Ho extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ko extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Al=0;const Wt=new ut,jr=new yt,jn=new P,zt=new Ni,Ei=new Ni,vt=new P;class kt extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(No(e)?ko:Ho)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const o=t[s];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(zt.min,Ei.min),zt.expandByPoint(vt),vt.addVectors(zt.max,Ei.max),zt.expandByPoint(vt)):(zt.expandByPoint(Ei.min),zt.expandByPoint(Ei.max))}zt.getCenter(n);let r=0;for(let s=0,c=e.count;s<c;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,c=t.length;s<c;s++){const o=t[s],a=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)vt.fromBufferAttribute(o,l),a&&(jn.fromBufferAttribute(e,l),vt.add(jn)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,c=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new P,h[w]=new P;const d=new P,u=new P,p=new P,g=new _e,_=new _e,m=new _e,f=new P,E=new P;function S(w,q,N){d.fromArray(r,w*3),u.fromArray(r,q*3),p.fromArray(r,N*3),g.fromArray(c,w*2),_.fromArray(c,q*2),m.fromArray(c,N*2),u.sub(d),p.sub(d),_.sub(g),m.sub(g);const se=1/(_.x*m.y-m.x*_.y);isFinite(se)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(se),E.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(se),l[w].add(f),l[q].add(f),l[N].add(f),h[w].add(E),h[q].add(E),h[N].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,q=b.length;w<q;++w){const N=b[w],se=N.start,L=N.count;for(let G=se,Y=se+L;G<Y;G+=3)S(n[G+0],n[G+1],n[G+2])}const U=new P,A=new P,R=new P,X=new P;function y(w){R.fromArray(s,w*3),X.copy(R);const q=l[w];U.copy(q),U.sub(R.multiplyScalar(R.dot(q))).normalize(),A.crossVectors(X,q);const se=A.dot(h[w])<0?-1:1;a[w*4]=U.x,a[w*4+1]=U.y,a[w*4+2]=U.z,a[w*4+3]=se}for(let w=0,q=b.length;w<q;++w){const N=b[w],se=N.start,L=N.count;for(let G=se,Y=se+L;G<Y;G+=3)y(n[G+0]),y(n[G+1]),y(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new P,s=new P,c=new P,o=new P,a=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),c.fromBufferAttribute(t,m),h.subVectors(c,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),a.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),c.fromBufferAttribute(t,u+2),h.subVectors(c,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,a){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(a.length*h);let p=0,g=0;for(let _=0,m=a.length;_<m;_++){o.isInterleavedBufferAttribute?p=a[_]*o.data.stride+o.offset:p=a[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new an(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,r=this.attributes;for(const o in r){const a=r[o],l=e(a,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const a=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,n);a.push(p)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let o=0,a=c.length;o<a;o++){const l=c[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const r={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[a]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let l=0,h=c.length;l<h;l++){const d=c[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new ut,Dn=new vl,ji=new As,Fa=new P,Qn=new P,ei=new P,ti=new P,Qr=new P,Qi=new P,er=new _e,tr=new _e,nr=new _e,Ba=new P,za=new P,Ga=new P,ir=new P,rr=new P;class $e extends yt{constructor(e=new kt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=r.length;s<c;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qi.set(0,0,0);for(let a=0,l=s.length;a<l;a++){const h=o[a],d=s[a];h!==0&&(Qr.fromBufferAttribute(d,e),c?Qi.addScaledVector(Qr,h):Qi.addScaledVector(Qr.sub(t),h))}t.add(Qi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(s),Dn.copy(e.ray).recast(e.near),!(ji.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(ji,Fa)===null||Dn.origin.distanceToSquared(Fa)>(e.far-e.near)**2))&&(Oa.copy(s).invert(),Dn.copy(e.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,c=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(c))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=c[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,U=S;b<U;b+=3){const A=o.getX(b),R=o.getX(b+1),X=o.getX(b+2);r=sr(this,f,e,n,l,h,d,A,R,X),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);r=sr(this,c,e,n,l,h,d,E,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(c))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=c[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,U=S;b<U;b+=3){const A=b,R=b+1,X=b+2;r=sr(this,f,e,n,l,h,d,A,R,X),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,S=m+1,b=m+2;r=sr(this,c,e,n,l,h,d,E,S,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Rl(i,e,t,n,r,s,c,o){let a;if(e.side===Nt?a=n.intersectTriangle(c,s,r,!0,o):a=n.intersectTriangle(r,s,c,e.side===An,o),a===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(rr);return l<t.near||l>t.far?null:{distance:l,point:rr.clone(),object:i}}function sr(i,e,t,n,r,s,c,o,a,l){i.getVertexPosition(o,Qn),i.getVertexPosition(a,ei),i.getVertexPosition(l,ti);const h=Rl(i,e,t,n,Qn,ei,ti,ir);if(h){r&&(er.fromBufferAttribute(r,o),tr.fromBufferAttribute(r,a),nr.fromBufferAttribute(r,l),h.uv=Qt.getInterpolation(ir,Qn,ei,ti,er,tr,nr,new _e)),s&&(er.fromBufferAttribute(s,o),tr.fromBufferAttribute(s,a),nr.fromBufferAttribute(s,l),h.uv1=Qt.getInterpolation(ir,Qn,ei,ti,er,tr,nr,new _e),h.uv2=h.uv1),c&&(Ba.fromBufferAttribute(c,o),za.fromBufferAttribute(c,a),Ga.fromBufferAttribute(c,l),h.normal=Qt.getInterpolation(ir,Qn,ei,ti,Ba,za,Ga,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:a,c:l,normal:new P,materialIndex:0};Qt.getNormal(Qn,ei,ti,d.normal),h.face=d}return h}class qt extends kt{constructor(e=1,t=1,n=1,r=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:c};const o=this;r=Math.floor(r),s=Math.floor(s),c=Math.floor(c);const a=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,c,s,0),g("z","y","x",1,-1,n,t,-e,c,s,1),g("x","z","y",1,1,e,n,t,r,c,2),g("x","z","y",1,-1,e,n,-t,r,c,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(_,m,f,E,S,b,U,A,R,X,y){const w=b/R,q=U/X,N=b/2,se=U/2,L=A/2,G=R+1,Y=X+1;let K=0,J=0;const j=new P;for(let Z=0;Z<Y;Z++){const ae=Z*q-se;for(let le=0;le<G;le++){const V=le*w-N;j[_]=V*E,j[m]=ae*S,j[f]=L,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=A>0?1:-1,h.push(j.x,j.y,j.z),d.push(le/R),d.push(1-Z/X),K+=1}}for(let Z=0;Z<X;Z++)for(let ae=0;ae<R;ae++){const le=u+ae+G*Z,V=u+ae+G*(Z+1),ee=u+(ae+1)+G*(Z+1),de=u+(ae+1)+G*Z;a.push(le,V,de),a.push(V,ee,de),J+=6}o.addGroup(p,J,y),p+=J,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const r in n)e[r]=n[r]}return e}function Cl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vo(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}const Ll={clone:mi,merge:Lt};var Pl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pl,this.fragmentShader=Dl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Cl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wo extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends Wo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const a=c.fullWidth,l=c.fullHeight;s+=c.offsetX*r/a,t-=c.offsetY*n/l,r*=c.width/a,n*=c.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Ul extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new Ht(ni,ii,e,t);s.layers=this.layers,this.add(s);const c=new Ht(ni,ii,e,t);c.layers=this.layers,this.add(c);const o=new Ht(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new Ht(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new Ht(ni,ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,c,o,a]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,o,a,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,a),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xo extends Ot{constructor(e,t,n,r,s,c,o,a,l,h){e=e!==void 0?e:[],t=t!==void 0?t:fi,super(e,t,n,r,s,c,o,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Il extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gn?Mt:$t),this.texture=new Xo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qt(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Tn});s.uniforms.tEquirect.value=t;const c=new $e(r,s),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Xt),new Ul(1,10,this).update(e,c),t.minFilter=o,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(s)}}const es=new P,Nl=new P,Ol=new Ve;class In{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=es.subVectors(n,t).cross(Nl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(es),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ol.getNormalMatrix(e),r=this.coplanarPoint(es).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new As,ar=new P;class Rs{constructor(e=new In,t=new In,n=new In,r=new In,s=new In,c=new In){this.planes=[e,t,n,r,s,c]}set(e,t,n,r,s,c){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,r=e.elements,s=r[0],c=r[1],o=r[2],a=r[3],l=r[4],h=r[5],d=r[6],u=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],E=r[13],S=r[14],b=r[15];if(n[0].setComponents(a-s,u-l,m-p,b-f).normalize(),n[1].setComponents(a+s,u+l,m+p,b+f).normalize(),n[2].setComponents(a+c,u+h,m+g,b+E).normalize(),n[3].setComponents(a-c,u-h,m-g,b-E).normalize(),n[4].setComponents(a-o,u-d,m-_,b-S).normalize(),t===mn)n[5].setComponents(a+o,u+d,m+_,b+S).normalize();else if(t===xr)n[5].setComponents(o,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ar.x=r.normal.x>0?e.max.x:e.min.x,ar.y=r.normal.y>0?e.max.y:e.min.y,ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qo(){let i=null,e=!1,t=null,n=null;function r(s,c){t(s,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Fl(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,h){const d=l.array,u=l.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,h,d){const u=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,l),p.count===-1&&g.length===0&&i.bufferSubData(d,0,u),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):i.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):i.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function c(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,r(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:c,remove:o,update:a}}class Kt extends kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,c=t/2,o=Math.floor(n),a=Math.floor(r),l=o+1,h=a+1,d=e/o,u=t/a,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*u-c;for(let S=0;S<l;S++){const b=S*d-s;g.push(b,-E,0),_.push(0,0,1),m.push(S/o),m.push(1-f/a)}}for(let f=0;f<a;f++)for(let E=0;E<o;E++){const S=E+l*f,b=E+l*(f+1),U=E+1+l*(f+1),A=E+1+l*f;p.push(S,b,A),p.push(b,U,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ql=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$l=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ql=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Th=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ph=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$h=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Su=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Du=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ku=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ku=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ju=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Bl,alphahash_pars_fragment:zl,alphamap_fragment:Gl,alphamap_pars_fragment:Hl,alphatest_fragment:kl,alphatest_pars_fragment:Vl,aomap_fragment:Wl,aomap_pars_fragment:Xl,batching_pars_vertex:ql,batching_vertex:Yl,begin_vertex:$l,beginnormal_vertex:Kl,bsdfs:Jl,iridescence_fragment:Zl,bumpmap_pars_fragment:jl,clipping_planes_fragment:Ql,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:th,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:rh,color_pars_vertex:sh,color_vertex:ah,common:oh,cube_uv_reflection_fragment:ch,defaultnormal_vertex:lh,displacementmap_pars_vertex:hh,displacementmap_vertex:uh,emissivemap_fragment:fh,emissivemap_pars_fragment:dh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:vh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Ph,envmap_vertex:Mh,fog_vertex:Sh,fog_pars_vertex:yh,fog_fragment:Eh,fog_pars_fragment:Th,gradientmap_pars_fragment:bh,lightmap_fragment:wh,lightmap_pars_fragment:Ah,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Lh,lights_toon_fragment:Dh,lights_toon_pars_fragment:Uh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Nh,lights_physical_fragment:Oh,lights_physical_pars_fragment:Fh,lights_fragment_begin:Bh,lights_fragment_maps:zh,lights_fragment_end:Gh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:qh,map_particle_fragment:Yh,map_particle_pars_fragment:$h,metalnessmap_fragment:Kh,metalnessmap_pars_fragment:Jh,morphcolor_vertex:Zh,morphnormal_vertex:jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:eu,normal_fragment_begin:tu,normal_fragment_maps:nu,normal_pars_fragment:iu,normal_pars_vertex:ru,normal_vertex:su,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:ou,clearcoat_normal_fragment_maps:cu,clearcoat_pars_fragment:lu,iridescence_pars_fragment:hu,opaque_fragment:uu,packing:fu,premultiplied_alpha_fragment:du,project_vertex:pu,dithering_fragment:mu,dithering_pars_fragment:gu,roughnessmap_fragment:_u,roughnessmap_pars_fragment:vu,shadowmap_pars_fragment:xu,shadowmap_pars_vertex:Mu,shadowmap_vertex:Su,shadowmask_pars_fragment:yu,skinbase_vertex:Eu,skinning_pars_vertex:Tu,skinning_vertex:bu,skinnormal_vertex:wu,specularmap_fragment:Au,specularmap_pars_fragment:Ru,tonemapping_fragment:Cu,tonemapping_pars_fragment:Lu,transmission_fragment:Pu,transmission_pars_fragment:Du,uv_pars_fragment:Uu,uv_pars_vertex:Iu,uv_vertex:Nu,worldpos_vertex:Ou,background_vert:Fu,background_frag:Bu,backgroundCube_vert:zu,backgroundCube_frag:Gu,cube_vert:Hu,cube_frag:ku,depth_vert:Vu,depth_frag:Wu,distanceRGBA_vert:Xu,distanceRGBA_frag:qu,equirect_vert:Yu,equirect_frag:$u,linedashed_vert:Ku,linedashed_frag:Ju,meshbasic_vert:Zu,meshbasic_frag:ju,meshlambert_vert:Qu,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:sf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:cf,meshphysical_frag:lf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:ff,points_frag:df,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},ue={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},sn={basic:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Lt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Lt([ue.lights,ue.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};sn.physical={uniforms:Lt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const or={r:0,b:0,g:0};function vf(i,e,t,n,r,s,c){const o=new Ye(0);let a=s===!0?0:1,l,h,d=null,u=0,p=null;function g(m,f){let E=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?t:e).get(S)),S===null?_(o,a):S&&S.isColor&&(_(S,1),E=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,c):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Sr)?(h===void 0&&(h=new $e(new qt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:mi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(S.colorSpace)!==tt,(d!==S||u!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $e(new Kt(2,2),new kn({name:"BackgroundMaterial",uniforms:mi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(or,Vo(i)),n.buffers.color.setClear(or.r,or.g,or.b,f,c)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),a=f,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,_(o,a)},render:g}}function xf(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||s!==null,o={},a=m(null);let l=a,h=!1;function d(L,G,Y,K,J){let j=!1;if(c){const Z=_(K,Y,G);l!==Z&&(l=Z,p(l.object)),j=f(L,K,Y,J),j&&E(L,K,Y,J)}else{const Z=G.wireframe===!0;(l.geometry!==K.id||l.program!==Y.id||l.wireframe!==Z)&&(l.geometry=K.id,l.program=Y.id,l.wireframe=Z,j=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,X(L,G,Y,K),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function u(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,G,Y){const K=Y.wireframe===!0;let J=o[L.id];J===void 0&&(J={},o[L.id]=J);let j=J[G.id];j===void 0&&(j={},J[G.id]=j);let Z=j[K];return Z===void 0&&(Z=m(u()),j[K]=Z),Z}function m(L){const G=[],Y=[],K=[];for(let J=0;J<r;J++)G[J]=0,Y[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:K,object:L,attributes:{},index:null}}function f(L,G,Y,K){const J=l.attributes,j=G.attributes;let Z=0;const ae=Y.getAttributes();for(const le in ae)if(ae[le].location>=0){const ee=J[le];let de=j[le];if(de===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;Z++}return l.attributesNum!==Z||l.index!==K}function E(L,G,Y,K){const J={},j=G.attributes;let Z=0;const ae=Y.getAttributes();for(const le in ae)if(ae[le].location>=0){let ee=j[le];ee===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),J[le]=de,Z++}l.attributes=J,l.attributesNum=Z,l.index=K}function S(){const L=l.newAttributes;for(let G=0,Y=L.length;G<Y;G++)L[G]=0}function b(L){U(L,0)}function U(L,G){const Y=l.newAttributes,K=l.enabledAttributes,J=l.attributeDivisors;Y[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),J[L]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),J[L]=G)}function A(){const L=l.newAttributes,G=l.enabledAttributes;for(let Y=0,K=G.length;Y<K;Y++)G[Y]!==L[Y]&&(i.disableVertexAttribArray(Y),G[Y]=0)}function R(L,G,Y,K,J,j,Z){Z===!0?i.vertexAttribIPointer(L,G,Y,J,j):i.vertexAttribPointer(L,G,Y,K,J,j)}function X(L,G,Y,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const J=K.attributes,j=Y.getAttributes(),Z=G.defaultAttributeValues;for(const ae in j){const le=j[ae];if(le.location>=0){let V=J[ae];if(V===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const ee=V.normalized,de=V.itemSize,Se=t.get(V);if(Se===void 0)continue;const Me=Se.buffer,Pe=Se.type,Ue=Se.bytesPerElement,Te=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||V.gpuType===bo);if(V.isInterleavedBufferAttribute){const F=V.data,x=F.stride,I=V.offset;if(F.isInstancedInterleavedBuffer){for(let C=0;C<le.locationSize;C++)U(le.location+C,F.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let C=0;C<le.locationSize;C++)b(le.location+C);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let C=0;C<le.locationSize;C++)R(le.location+C,de/le.locationSize,Pe,ee,x*Ue,(I+de/le.locationSize*C)*Ue,Te)}else{if(V.isInstancedBufferAttribute){for(let F=0;F<le.locationSize;F++)U(le.location+F,V.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let F=0;F<le.locationSize;F++)b(le.location+F);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let F=0;F<le.locationSize;F++)R(le.location+F,de/le.locationSize,Pe,ee,de*Ue,de/le.locationSize*F*Ue,Te)}}else if(Z!==void 0){const ee=Z[ae];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(le.location,ee);break;case 3:i.vertexAttrib3fv(le.location,ee);break;case 4:i.vertexAttrib4fv(le.location,ee);break;default:i.vertexAttrib1fv(le.location,ee)}}}}A()}function y(){N();for(const L in o){const G=o[L];for(const Y in G){const K=G[Y];for(const J in K)g(K[J].object),delete K[J];delete G[Y]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const G=o[L.id];for(const Y in G){const K=G[Y];for(const J in K)g(K[J].object),delete K[J];delete G[Y]}delete o[L.id]}function q(L){for(const G in o){const Y=o[G];if(Y[L.id]===void 0)continue;const K=Y[L.id];for(const J in K)g(K[J].object),delete K[J];delete Y[L.id]}}function N(){se(),h=!0,l!==a&&(l=a,p(l.object))}function se(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:N,resetDefaultState:se,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:S,enableAttribute:b,disableUnusedAttributes:A}}function Mf(i,e,t,n){const r=n.isWebGL2;let s;function c(h){s=h}function o(h,d){i.drawArrays(s,h,d),t.update(d,s,1)}function a(h,d,u){if(u===0)return;let p,g;if(r)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,d,u),t.update(d,s,u)}function l(h,d,u){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,s,1)}}this.setMode=c,this.render=o,this.renderInstances=a,this.renderMultiDraw=l}function Sf(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=c||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=u>0,b=c||e.has("OES_texture_float"),U=S&&b,A=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:U,maxSamples:A}}function yf(i){const e=this;let t=null,n=0,r=!1,s=!1;const c=new In,o=new Ve,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||r;return r=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const E=s?0:n,S=E*4;let b=f.clippingState||null;a.value=b,b=h(g,u,S,p);for(let U=0;U!==S;++U)b[U]=t[U];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=a.value,g!==!0||m===null){const f=p+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,b=p;S!==_;++S,b+=4)c.copy(d[S]).applyMatrix4(E,o),c.normal.toArray(m,b),m[b+3]=c.constant}a.value=m,a.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ef(i){let e=new WeakMap;function t(c,o){return o===ms?c.mapping=fi:o===gs&&(c.mapping=di),c}function n(c){if(c&&c.isTexture){const o=c.mapping;if(o===ms||o===gs)if(e.has(c)){const a=e.get(c).texture;return t(a,c.mapping)}else{const a=c.image;if(a&&a.height>0){const l=new Il(a.height/2);return l.fromEquirectangularTexture(i,c),e.set(c,l),c.addEventListener("dispose",r),t(l.texture,c.mapping)}else return null}}return c}function r(c){const o=c.target;o.removeEventListener("dispose",r);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yo extends Wo{constructor(e=-1,t=1,n=1,r=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,c=n+e,o=r+t,a=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,c=s+l*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,c,o,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oi=4,Ha=[.125,.215,.35,.446,.526,.582],Fn=20,ts=new Yo,ka=new Ye;let ns=null,is=0,rs=0;const Nn=(1+Math.sqrt(5))/2,ri=1/Nn,Va=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Nn,ri),new P(0,Nn,-ri),new P(ri,0,Nn),new P(-ri,0,Nn),new P(Nn,ri,0),new P(-Nn,ri,0)];class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ns,is,rs),e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fi||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ns=this._renderer.getRenderTarget(),is=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Di,format:tn,colorSpace:gn,depthBuffer:!1},r=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(s)),this._blurMaterial=bf(s,e,t)}return r}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,ts)}_sceneToCubeUV(e,t,n,r){const o=new Ht(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ka),h.toneMapping=bn,h.autoClear=!1;const p=new Fi({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new $e(new qt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(ka),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,a[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,a[f]),o.lookAt(0,l[f],0)):(o.up.set(0,a[f],0),o.lookAt(0,0,l[f]));const S=this._cubeSize;cr(r,E*S,f>2?S:0,S,S),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fi||e.mapping===di;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qa());const s=r?this._cubemapMaterial:this._equirectMaterial,c=new $e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const a=this._cubeSize;cr(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(c,ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=Va[(r-1)%Va.length];this._blur(e,r-1,r,s,c)}t.autoClear=n}_blur(e,t,n,r,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",s),this._halfBlur(c,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,c,o){const a=this._renderer,l=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $e(this._lodPlanes[r],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Fn;m>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const f=[];let E=0;for(let R=0;R<Fn;++R){const X=R/_,y=Math.exp(-X*X/2);f.push(y),R===0?E+=y:R<m&&(E+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=c==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const b=this._sizeLods[r],U=3*b*(r>S-oi?r-S+oi:0),A=4*(this._cubeSize-b);cr(t,U,A,3*b,2*b),a.setRenderTarget(t),a.render(d,ts)}}function Tf(i){const e=[],t=[],n=[];let r=i;const s=i-oi+1+Ha.length;for(let c=0;c<s;c++){const o=Math.pow(2,r);t.push(o);let a=1/o;c>i-oi?a=Ha[c-i+oi-1]:c===0&&(a=0),n.push(a);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),S=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,X=A>2?0:-1,y=[R,X,0,R+2/3,X,0,R+2/3,X+1,0,R,X,0,R+2/3,X+1,0,R,X+1,0];E.set(y,_*g*A),S.set(u,m*g*A);const w=[A,A,A,A,A,A];b.set(w,f*g*A)}const U=new kt;U.setAttribute("position",new an(E,_)),U.setAttribute("uv",new an(S,m)),U.setAttribute("faceIndex",new an(b,f)),e.push(U),r>oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(i,e,t){const n=new Hn(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function bf(i,e,t){const n=new Float32Array(Fn),r=new P(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function qa(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ya(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,l=a===ms||a===gs,h=a===fi||a===di;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Wa(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Wa(i));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function r(o){let a=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&a++;return a===l}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Af(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rf(i,e,t,n){const r={},s=new WeakMap;function c(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}u.removeEventListener("dispose",c),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",c),r[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let S=0,b=E.length;S<b;S+=3){const U=E[S+0],A=E[S+1],R=E[S+2];u.push(U,A,A,R,R,U)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const U=S+0,A=S+1,R=S+2;u.push(U,A,A,R,R,U)}}else return;const m=new(No(u)?ko:Ho)(u,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:h}}function Cf(i,e,t,n){const r=n.isWebGL2;let s;function c(p){s=p}let o,a;function l(p){o=p.type,a=p.bytesPerElement}function h(p,g){i.drawElements(s,g,o,p*a),t.update(g,s,1)}function d(p,g,_){if(_===0)return;let m,f;if(r)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,o,p*a,_),t.update(g,s,_)}function u(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/a,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,o,p,0,_);let f=0;for(let E=0;E<_;E++)f+=g[E];t.update(f,s,1)}}this.setMode=c,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Lf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,o){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Pf(i,e){return i[0]-e[0]}function Df(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Uf(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,c=new at,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,h,d){const u=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==_){let G=function(){se.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var p=G;m!==void 0&&m.texture.dispose();const S=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,U=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],X=h.morphAttributes.color||[];let y=0;S===!0&&(y=1),b===!0&&(y=2),U===!0&&(y=3);let w=h.attributes.position.count*y,q=1;w>e.maxTextureSize&&(q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*q*4*_),se=new Bo(N,w,q,_);se.type=En,se.needsUpdate=!0;const L=y*4;for(let Y=0;Y<_;Y++){const K=A[Y],J=R[Y],j=X[Y],Z=w*q*4*Y;for(let ae=0;ae<K.count;ae++){const le=ae*L;S===!0&&(c.fromBufferAttribute(K,ae),N[Z+le+0]=c.x,N[Z+le+1]=c.y,N[Z+le+2]=c.z,N[Z+le+3]=0),b===!0&&(c.fromBufferAttribute(J,ae),N[Z+le+4]=c.x,N[Z+le+5]=c.y,N[Z+le+6]=c.z,N[Z+le+7]=0),U===!0&&(c.fromBufferAttribute(j,ae),N[Z+le+8]=c.x,N[Z+le+9]=c.y,N[Z+le+10]=c.z,N[Z+le+11]=j.itemSize===4?c.w:1)}}m={count:_,texture:se,size:new _e(w,q)},s.set(h,m),h.addEventListener("dispose",G)}let f=0;for(let S=0;S<u.length;S++)f+=u[S];const E=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",u),d.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let b=0;b<g;b++)_[b]=[b,0];n[h.id]=_}for(let b=0;b<g;b++){const U=_[b];U[0]=b,U[1]=u[b]}_.sort(Df);for(let b=0;b<8;b++)b<g&&_[b][1]?(o[b][0]=_[b][0],o[b][1]=_[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Pf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const U=o[b],A=U[0],R=U[1];A!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+b)!==m[A]&&h.setAttribute("morphTarget"+b,m[A]),f&&h.getAttribute("morphNormal"+b)!==f[A]&&h.setAttribute("morphNormal"+b,f[A]),r[b]=R,E+=R):(m&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),f&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),r[b]=0)}const S=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:a}}function If(i,e,t,n){let r=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=e.get(a,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),r.get(a)!==l&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,l))),a.isSkinnedMesh){const u=a.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return d}function c(){r=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:c}}class $o extends Ot{constructor(e,t,n,r,s,c,o,a,l,h){if(h=h!==void 0?h:zn,h!==zn&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=yn),n===void 0&&h===pi&&(n=Bn),super(null,r,s,c,o,a,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=a!==void 0?a:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ko=new Ot,Jo=new $o(1,1);Jo.compareFunction=Io;const Zo=new Bo,jo=new gl,Qo=new Xo,$a=[],Ka=[],Ja=new Float32Array(16),Za=new Float32Array(9),ja=new Float32Array(4);function _i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=$a[r];if(s===void 0&&(s=new Float32Array(r),$a[r]=s),e!==0){n.toArray(s,0);for(let c=1,o=0;c!==e;++c)o+=t,i[c].toArray(s,o)}return s}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tr(i,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ja.set(n),i.uniformMatrix2fv(this.addr,!1,ja),mt(t,n)}}function Gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Za.set(n),i.uniformMatrix3fv(this.addr,!1,Za),mt(t,n)}}function Hf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ja.set(n),i.uniformMatrix4fv(this.addr,!1,Ja),mt(t,n)}}function kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function qf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Jo:Ko;t.setTexture2D(e||s,r)}function Zf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jo,r)}function jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qo,r)}function Qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zo,r)}function ed(i){switch(i){case 5126:return Nf;case 35664:return Of;case 35665:return Ff;case 35666:return Bf;case 35674:return zf;case 35675:return Gf;case 35676:return Hf;case 5124:case 35670:return kf;case 35667:case 35671:return Vf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return qf;case 36294:return Yf;case 36295:return $f;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Jf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function td(i,e){i.uniform1fv(this.addr,e)}function nd(i,e){const t=_i(e,this.size,2);i.uniform2fv(this.addr,t)}function id(i,e){const t=_i(e,this.size,3);i.uniform3fv(this.addr,t)}function rd(i,e){const t=_i(e,this.size,4);i.uniform4fv(this.addr,t)}function sd(i,e){const t=_i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ad(i,e){const t=_i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function od(i,e){const t=_i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cd(i,e){i.uniform1iv(this.addr,e)}function ld(i,e){i.uniform2iv(this.addr,e)}function hd(i,e){i.uniform3iv(this.addr,e)}function ud(i,e){i.uniform4iv(this.addr,e)}function fd(i,e){i.uniform1uiv(this.addr,e)}function dd(i,e){i.uniform2uiv(this.addr,e)}function pd(i,e){i.uniform3uiv(this.addr,e)}function md(i,e){i.uniform4uiv(this.addr,e)}function gd(i,e,t){const n=this.cache,r=e.length,s=Tr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Ko,s[c])}function _d(i,e,t){const n=this.cache,r=e.length,s=Tr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||jo,s[c])}function vd(i,e,t){const n=this.cache,r=e.length,s=Tr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Qo,s[c])}function xd(i,e,t){const n=this.cache,r=e.length,s=Tr(t,r);pt(n,s)||(i.uniform1iv(this.addr,s),mt(n,s));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Zo,s[c])}function Md(i){switch(i){case 5126:return td;case 35664:return nd;case 35665:return id;case 35666:return rd;case 35674:return sd;case 35675:return ad;case 35676:return od;case 5124:case 35670:return cd;case 35667:case 35671:return ld;case 35668:case 35672:return hd;case 35669:case 35673:return ud;case 5125:return fd;case 36294:return dd;case 36295:return pd;case 36296:return md;case 35678:case 36198:case 36298:case 36306:case 35682:return gd;case 35679:case 36299:case 36307:return _d;case 35680:case 36300:case 36308:case 36293:return vd;case 36289:case 36303:case 36311:case 36292:return xd}}class Sd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ed(t.type)}}class yd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Md(t.type)}}class Ed{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,c=r.length;s!==c;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ss=/(\w+)(\])?(\[|\.)?/g;function Qa(i,e){i.seq.push(e),i.map[e.id]=e}function Td(i,e,t){const n=i.name,r=n.length;for(ss.lastIndex=0;;){const s=ss.exec(n),c=ss.lastIndex;let o=s[1];const a=s[2]==="]",l=s[3];if(a&&(o=o|0),l===void 0||l==="["&&c+2===r){Qa(t,l===void 0?new Sd(o,i,e):new yd(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Ed(o),Qa(t,d)),t=d}}}class fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),c=e.getUniformLocation(t,s.name);Td(s,c,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,c=t.length;s!==c;++s){const o=t[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bd=37297;let wd=0;function Ad(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=r;c<s;c++){const o=c+1;n.push(`${o===e?">":" "} ${o}: ${t[c]}`)}return n.join(`
`)}function Rd(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===vr&&t===_r?n="LinearDisplayP3ToLinearSRGB":e===_r&&t===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case gn:case yr:return[n,"LinearTransferOETF"];case Mt:case ws:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function to(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const c=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ad(i.getShaderSource(e),c)}else return r}function Cd(i,e){const t=Rd(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ld(i,e){let t;switch(e){case zc:t="Linear";break;case Gc:t="Reinhard";break;case Hc:t="OptimizedCineon";break;case kc:t="ACESFilmic";break;case Wc:t="AgX";break;case Vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ci).join(`
`)}function Dd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ci).join(`
`)}function Ud(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Id(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),c=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[c]={type:s.type,location:i.getAttribLocation(e,c),locationSize:o}}return t}function ci(i){return i!==""}function no(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function io(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ys(i){return i.replace(Nd,Fd)}const Od=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fd(i,e){let t=ze[e];if(t===void 0){const n=Od.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ys(t)}const Bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ro(i){return i.replace(Bd,zd)}function zd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function so(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===So?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case di:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function Vd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eo:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Bc:e="ENVMAP_BLENDING_ADD";break}return e}function Wd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xd(i,e,t,n){const r=i.getContext(),s=t.defines;let c=t.vertexShader,o=t.fragmentShader;const a=Gd(t),l=Hd(t),h=kd(t),d=Vd(t),u=Wd(t),p=t.isWebGL2?"":Pd(t),g=Dd(t),_=Ud(s),m=r.createProgram();let f,E,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ci).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ci).join(`
`),E.length>0&&(E+=`
`)):(f=[so(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ci).join(`
`),E=[p,so(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?ze.tonemapping_pars_fragment:"",t.toneMapping!==bn?Ld("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Cd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ci).join(`
`)),c=ys(c),c=no(c,t),c=io(c,t),o=ys(o),o=no(o,t),o=io(o,t),c=ro(c),o=ro(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=S+f+c,U=S+E+o,A=eo(r,r.VERTEX_SHADER,b),R=eo(r,r.FRAGMENT_SHADER,U);r.attachShader(m,A),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function X(N){if(i.debug.checkShaderErrors){const se=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(R).trim();let Y=!0,K=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,A,R);else{const J=to(r,A,"vertex"),j=to(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+J+`
`+j)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(L===""||G==="")&&(K=!1);K&&(N.diagnostics={runnable:Y,programLog:se,vertexShader:{log:L,prefix:f},fragmentShader:{log:G,prefix:E}})}r.deleteShader(A),r.deleteShader(R),y=new fr(r,m),w=Id(r,m)}let y;this.getUniforms=function(){return y===void 0&&X(this),y};let w;this.getAttributes=function(){return w===void 0&&X(this),w};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(m,bd)),q},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}let qd=0;class Yd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $d(e),t.set(e,n)),n}}class $d{constructor(e){this.id=qd++,this.code=e,this.usedTimes=0}}function Kd(i,e,t,n,r,s,c){const o=new zo,a=new Yd,l=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function m(y,w,q,N,se){const L=N.fog,G=se.geometry,Y=y.isMeshStandardMaterial?N.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),J=K&&K.mapping===Sr?K.image.height:null,j=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=Z!==void 0?Z.length:0;let le=0;G.morphAttributes.position!==void 0&&(le=1),G.morphAttributes.normal!==void 0&&(le=2),G.morphAttributes.color!==void 0&&(le=3);let V,ee,de,Se;if(j){const Rt=sn[j];V=Rt.vertexShader,ee=Rt.fragmentShader}else V=y.vertexShader,ee=y.fragmentShader,a.update(y),de=a.getVertexShaderID(y),Se=a.getFragmentShaderID(y);const Me=i.getRenderTarget(),Pe=se.isInstancedMesh===!0,Ue=se.isBatchedMesh===!0,Te=!!y.map,F=!!y.matcap,x=!!K,I=!!y.aoMap,C=!!y.lightMap,z=!!y.bumpMap,O=!!y.normalMap,ie=!!y.displacementMap,ne=!!y.emissiveMap,M=!!y.metalnessMap,v=!!y.roughnessMap,H=y.anisotropy>0,te=y.clearcoat>0,Q=y.iridescence>0,oe=y.sheen>0,ye=y.transmission>0,fe=H&&!!y.anisotropyMap,ve=te&&!!y.clearcoatMap,we=te&&!!y.clearcoatNormalMap,Ne=te&&!!y.clearcoatRoughnessMap,re=Q&&!!y.iridescenceMap,Je=Q&&!!y.iridescenceThicknessMap,We=oe&&!!y.sheenColorMap,Ie=oe&&!!y.sheenRoughnessMap,be=!!y.specularMap,xe=!!y.specularColorMap,Be=!!y.specularIntensityMap,Ke=ye&&!!y.transmissionMap,ct=ye&&!!y.thicknessMap,He=!!y.gradientMap,he=!!y.alphaMap,D=y.alphaTest>0,pe=!!y.alphaHash,me=!!y.extensions,Ce=!!G.attributes.uv1,Ae=!!G.attributes.uv2,je=!!G.attributes.uv3;let Qe=bn;return y.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Qe=i.toneMapping),{isWebGL2:h,shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:ee,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ue,instancing:Pe,instancingColor:Pe&&se.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:gn,map:Te,matcap:F,envMap:x,envMapMode:x&&K.mapping,envMapCubeUVHeight:J,aoMap:I,lightMap:C,bumpMap:z,normalMap:O,displacementMap:u&&ie,emissiveMap:ne,normalMapObjectSpace:O&&y.normalMapType===nl,normalMapTangentSpace:O&&y.normalMapType===Uo,metalnessMap:M,roughnessMap:v,anisotropy:H,anisotropyMap:fe,clearcoat:te,clearcoatMap:ve,clearcoatNormalMap:we,clearcoatRoughnessMap:Ne,iridescence:Q,iridescenceMap:re,iridescenceThicknessMap:Je,sheen:oe,sheenColorMap:We,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:xe,specularIntensityMap:Be,transmission:ye,transmissionMap:Ke,thicknessMap:ct,gradientMap:He,opaque:y.transparent===!1&&y.blending===hi,alphaMap:he,alphaTest:D,alphaHash:pe,combine:y.combine,mapUv:Te&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:C&&_(y.lightMap.channel),bumpMapUv:z&&_(y.bumpMap.channel),normalMapUv:O&&_(y.normalMap.channel),displacementMapUv:ie&&_(y.displacementMap.channel),emissiveMapUv:ne&&_(y.emissiveMap.channel),metalnessMapUv:M&&_(y.metalnessMap.channel),roughnessMapUv:v&&_(y.roughnessMap.channel),anisotropyMapUv:fe&&_(y.anisotropyMap.channel),clearcoatMapUv:ve&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(y.sheenRoughnessMap.channel),specularMapUv:be&&_(y.specularMap.channel),specularColorMapUv:xe&&_(y.specularColorMap.channel),specularIntensityMapUv:Be&&_(y.specularIntensityMap.channel),transmissionMapUv:Ke&&_(y.transmissionMap.channel),thicknessMapUv:ct&&_(y.thicknessMap.channel),alphaMapUv:he&&_(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(O||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:Ae,vertexUv3s:je,pointsUvs:se.isPoints===!0&&!!G.attributes.uv&&(Te||he),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:se.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:le,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:me&&y.extensions.derivatives===!0,extensionFragDepth:me&&y.extensions.fragDepth===!0,extensionDrawBuffers:me&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)w.push(q),w.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(E(w,y),S(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function E(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function b(y){const w=g[y.type];let q;if(w){const N=sn[w];q=Ll.clone(N.uniforms)}else q=y.uniforms;return q}function U(y,w){let q;for(let N=0,se=l.length;N<se;N++){const L=l[N];if(L.cacheKey===w){q=L,++q.usedTimes;break}}return q===void 0&&(q=new Xd(i,w,y,s),l.push(q)),q}function A(y){if(--y.usedTimes===0){const w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function R(y){a.remove(y)}function X(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:U,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:X}}function Jd(){let i=new WeakMap;function e(s){let c=i.get(s);return c===void 0&&(c={},i.set(s,c)),c}function t(s){i.delete(s)}function n(s,c,o){i.get(s)[c]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Zd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ao(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function oo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function c(d,u,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=c(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function a(d,u,p,g,_,m){const f=c(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,u){t.length>1&&t.sort(d||Zd),n.length>1&&n.sort(u||ao),r.length>1&&r.sort(u||ao)}function h(){for(let d=e,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:a,finish:h,sort:l}}function jd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let c;return s===void 0?(c=new oo,i.set(n,[c])):r>=s.length?(c=new oo,s.push(c)):c=s[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tp=0;function np(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ip(i,e){const t=new Qd,n=ep(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,c=new ut,o=new ut;function a(h,d){let u=0,p=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,m=0,f=0,E=0,S=0,b=0,U=0,A=0,R=0,X=0,y=0;h.sort(np);const w=d===!0?Math.PI:1;for(let N=0,se=h.length;N<se;N++){const L=h[N],G=L.color,Y=L.intensity,K=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=G.r*Y*w,p+=G.g*Y*w,g+=G.b*Y*w;else if(L.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(L.sh.coefficients[j],Y);y++}else if(L.isDirectionalLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const Z=L.shadow,ae=n.get(L);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.directionalShadow[_]=ae,r.directionalShadowMap[_]=J,r.directionalShadowMatrix[_]=L.shadow.matrix,b++}r.directional[_]=j,_++}else if(L.isSpotLight){const j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(G).multiplyScalar(Y*w),j.distance=K,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,r.spot[f]=j;const Z=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,Z.updateMatrices(L),L.castShadow&&X++),r.spotLightMatrix[f]=Z.matrix,L.castShadow){const ae=n.get(L);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.spotShadow[f]=ae,r.spotShadowMap[f]=J,A++}f++}else if(L.isRectAreaLight){const j=t.get(L);j.color.copy(G).multiplyScalar(Y),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),r.rectArea[E]=j,E++}else if(L.isPointLight){const j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),j.distance=L.distance,j.decay=L.decay,L.castShadow){const Z=L.shadow,ae=n.get(L);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,ae.shadowCameraNear=Z.camera.near,ae.shadowCameraFar=Z.camera.far,r.pointShadow[m]=ae,r.pointShadowMap[m]=J,r.pointShadowMatrix[m]=L.shadow.matrix,U++}r.point[m]=j,m++}else if(L.isHemisphereLight){const j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(Y*w),j.groundColor.copy(L.groundColor).multiplyScalar(Y*w),r.hemi[S]=j,S++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=g;const q=r.hash;(q.directionalLength!==_||q.pointLength!==m||q.spotLength!==f||q.rectAreaLength!==E||q.hemiLength!==S||q.numDirectionalShadows!==b||q.numPointShadows!==U||q.numSpotShadows!==A||q.numSpotMaps!==R||q.numLightProbes!==y)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=E,r.point.length=m,r.hemi.length=S,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=A+R-X,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=X,r.numLightProbes=y,q.directionalLength=_,q.pointLength=m,q.spotLength=f,q.rectAreaLength=E,q.hemiLength=S,q.numDirectionalShadows=b,q.numPointShadows=U,q.numSpotShadows=A,q.numSpotMaps=R,q.numLightProbes=y,r.version=tp++)}function l(h,d){let u=0,p=0,g=0,_=0,m=0;const f=d.matrixWorldInverse;for(let E=0,S=h.length;E<S;E++){const b=h[E];if(b.isDirectionalLight){const U=r.directional[u];U.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(f),u++}else if(b.isSpotLight){const U=r.spot[g];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(f),U.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(f),g++}else if(b.isRectAreaLight){const U=r.rectArea[_];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(f),o.identity(),c.copy(b.matrixWorld),c.premultiply(f),o.extractRotation(c),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const U=r.point[p];U.position.setFromMatrixPosition(b.matrixWorld),U.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const U=r.hemi[m];U.direction.setFromMatrixPosition(b.matrixWorld),U.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:r}}function co(i,e){const t=new ip(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function c(d){n.push(d)}function o(d){r.push(d)}function a(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:a,setupLightsView:l,pushLight:c,pushShadow:o}}function rp(i,e){let t=new WeakMap;function n(s,c=0){const o=t.get(s);let a;return o===void 0?(a=new co(i,e),t.set(s,[a])):c>=o.length?(a=new co(i,e),o.push(a)):a=o[c],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class sp extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=el,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ap extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lp(i,e,t){let n=new Rs;const r=new _e,s=new _e,c=new at,o=new sp({depthPacking:tl}),a=new ap,l={},h=t.maxTextureSize,d={[An]:Nt,[Nt]:An,[Dt]:Dt},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:op,fragmentShader:cp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let f=this.type;this.render=function(A,R,X){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),w=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Tn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const se=f!==pn&&this.type===pn,L=f===pn&&this.type!==pn;for(let G=0,Y=A.length;G<Y;G++){const K=A[G],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const j=J.getFrameExtents();if(r.multiply(j),s.copy(J.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,J.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,J.mapSize.y=s.y)),J.map===null||se===!0||L===!0){const ae=this.type!==pn?{minFilter:Pt,magFilter:Pt}:{};J.map!==null&&J.map.dispose(),J.map=new Hn(r.x,r.y,ae),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const Z=J.getViewportCount();for(let ae=0;ae<Z;ae++){const le=J.getViewport(ae);c.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),N.viewport(c),J.updateMatrices(K,ae),n=J.getFrustum(),b(R,X,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===pn&&E(J,X),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,w,q)};function E(A,R){const X=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(r.x,r.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,X,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,X,p,_,null)}function S(A,R,X,y){let w=null;const q=X.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(q!==void 0)w=q;else if(w=X.isPointLight===!0?a:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=w.uuid,se=R.uuid;let L=l[N];L===void 0&&(L={},l[N]=L);let G=L[se];G===void 0&&(G=w.clone(),L[se]=G,R.addEventListener("dispose",U)),w=G}if(w.visible=R.visible,w.wireframe=R.wireframe,y===pn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:d[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=i.properties.get(w);N.light=X}return w}function b(A,R,X,y,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld);const se=e.update(A),L=A.material;if(Array.isArray(L)){const G=se.groups;for(let Y=0,K=G.length;Y<K;Y++){const J=G[Y],j=L[J.materialIndex];if(j&&j.visible){const Z=S(A,j,y,w);A.onBeforeShadow(i,A,R,X,se,Z,J),i.renderBufferDirect(X,null,se,Z,A,J),A.onAfterShadow(i,A,R,X,se,Z,J)}}}else if(L.visible){const G=S(A,L,y,w);A.onBeforeShadow(i,A,R,X,se,G,null),i.renderBufferDirect(X,null,se,G,A,null),A.onAfterShadow(i,A,R,X,se,G,null)}}const N=A.children;for(let se=0,L=N.length;se<L;se++)b(N[se],R,X,y,w)}function U(A){A.target.removeEventListener("dispose",U);for(const X in l){const y=l[X],w=A.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function hp(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const pe=new at;let me=null;const Ce=new at(0,0,0,0);return{setMask:function(Ae){me!==Ae&&!D&&(i.colorMask(Ae,Ae,Ae,Ae),me=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,je,Qe,gt,Rt){Rt===!0&&(Ae*=gt,je*=gt,Qe*=gt),pe.set(Ae,je,Qe,gt),Ce.equals(pe)===!1&&(i.clearColor(Ae,je,Qe,gt),Ce.copy(pe))},reset:function(){D=!1,me=null,Ce.set(-1,0,0,0)}}}function s(){let D=!1,pe=null,me=null,Ce=null;return{setTest:function(Ae){Ae?Ue(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Ae){pe!==Ae&&!D&&(i.depthMask(Ae),pe=Ae)},setFunc:function(Ae){if(me!==Ae){switch(Ae){case Lc:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Nc:i.depthFunc(i.GREATER);break;case Oc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Ae}},setLocked:function(Ae){D=Ae},setClear:function(Ae){Ce!==Ae&&(i.clearDepth(Ae),Ce=Ae)},reset:function(){D=!1,pe=null,me=null,Ce=null}}}function c(){let D=!1,pe=null,me=null,Ce=null,Ae=null,je=null,Qe=null,gt=null,Rt=null;return{setTest:function(et){D||(et?Ue(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(et){pe!==et&&!D&&(i.stencilMask(et),pe=et)},setFunc:function(et,Ct,rn){(me!==et||Ce!==Ct||Ae!==rn)&&(i.stencilFunc(et,Ct,rn),me=et,Ce=Ct,Ae=rn)},setOp:function(et,Ct,rn){(je!==et||Qe!==Ct||gt!==rn)&&(i.stencilOp(et,Ct,rn),je=et,Qe=Ct,gt=rn)},setLocked:function(et){D=et},setClear:function(et){Rt!==et&&(i.clearStencil(et),Rt=et)},reset:function(){D=!1,pe=null,me=null,Ce=null,Ae=null,je=null,Qe=null,gt=null,Rt=null}}}const o=new r,a=new s,l=new c,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,S=null,b=null,U=null,A=null,R=null,X=null,y=new Ye(0,0,0),w=0,q=!1,N=null,se=null,L=null,G=null,Y=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,j=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),J=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),J=j>=2);let ae=null,le={};const V=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),de=new at().fromArray(V),Se=new at().fromArray(ee);function Me(D,pe,me,Ce){const Ae=new Uint8Array(4),je=i.createTexture();i.bindTexture(D,je),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<me;Qe++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(pe,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(pe+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return je}const Pe={};Pe[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Ue(i.DEPTH_TEST),a.setFunc(mr),ne(!1),M(Vs),Ue(i.CULL_FACE),O(Tn);function Ue(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Te(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function F(D,pe){return p[D]!==pe?(i.bindFramebuffer(D,pe),p[D]=pe,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=pe),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=pe)),!0):!1}function x(D,pe){let me=_,Ce=!1;if(D)if(me=g.get(pe),me===void 0&&(me=[],g.set(pe,me)),D.isWebGLMultipleRenderTargets){const Ae=D.texture;if(me.length!==Ae.length||me[0]!==i.COLOR_ATTACHMENT0){for(let je=0,Qe=Ae.length;je<Qe;je++)me[je]=i.COLOR_ATTACHMENT0+je;me.length=Ae.length,Ce=!0}}else me[0]!==i.COLOR_ATTACHMENT0&&(me[0]=i.COLOR_ATTACHMENT0,Ce=!0);else me[0]!==i.BACK&&(me[0]=i.BACK,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function I(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const C={[On]:i.FUNC_ADD,[mc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};if(n)C[Ys]=i.MIN,C[$s]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(C[Ys]=D.MIN_EXT,C[$s]=D.MAX_EXT)}const z={[_c]:i.ZERO,[vc]:i.ONE,[xc]:i.SRC_COLOR,[ds]:i.SRC_ALPHA,[bc]:i.SRC_ALPHA_SATURATE,[Ec]:i.DST_COLOR,[Sc]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[ps]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[wc]:i.CONSTANT_COLOR,[Ac]:i.ONE_MINUS_CONSTANT_COLOR,[Rc]:i.CONSTANT_ALPHA,[Cc]:i.ONE_MINUS_CONSTANT_ALPHA};function O(D,pe,me,Ce,Ae,je,Qe,gt,Rt,et){if(D===Tn){f===!0&&(Te(i.BLEND),f=!1);return}if(f===!1&&(Ue(i.BLEND),f=!0),D!==pc){if(D!==E||et!==q){if((S!==On||A!==On)&&(i.blendEquation(i.FUNC_ADD),S=On,A=On),et)switch(D){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFunc(i.ONE,i.ONE);break;case Xs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ws:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,U=null,R=null,X=null,y.set(0,0,0),w=0,E=D,q=et}return}Ae=Ae||pe,je=je||me,Qe=Qe||Ce,(pe!==S||Ae!==A)&&(i.blendEquationSeparate(C[pe],C[Ae]),S=pe,A=Ae),(me!==b||Ce!==U||je!==R||Qe!==X)&&(i.blendFuncSeparate(z[me],z[Ce],z[je],z[Qe]),b=me,U=Ce,R=je,X=Qe),(gt.equals(y)===!1||Rt!==w)&&(i.blendColor(gt.r,gt.g,gt.b,Rt),y.copy(gt),w=Rt),E=D,q=!1}function ie(D,pe){D.side===Dt?Te(i.CULL_FACE):Ue(i.CULL_FACE);let me=D.side===Nt;pe&&(me=!me),ne(me),D.blending===hi&&D.transparent===!1?O(Tn):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ce=D.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function M(D){D!==fc?(Ue(i.CULL_FACE),D!==se&&(D===Vs?i.cullFace(i.BACK):D===dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),se=D}function v(D){D!==L&&(J&&i.lineWidth(D),L=D)}function H(D,pe,me){D?(Ue(i.POLYGON_OFFSET_FILL),(G!==pe||Y!==me)&&(i.polygonOffset(pe,me),G=pe,Y=me)):Te(i.POLYGON_OFFSET_FILL)}function te(D){D?Ue(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Q(D){D===void 0&&(D=i.TEXTURE0+K-1),ae!==D&&(i.activeTexture(D),ae=D)}function oe(D,pe,me){me===void 0&&(ae===null?me=i.TEXTURE0+K-1:me=ae);let Ce=le[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},le[me]=Ce),(Ce.type!==D||Ce.texture!==pe)&&(ae!==me&&(i.activeTexture(me),ae=me),i.bindTexture(D,pe||Pe[D]),Ce.type=D,Ce.texture=pe)}function ye(){const D=le[ae];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(D){de.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function Ke(D){Se.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Se.copy(D))}function ct(D,pe){let me=d.get(pe);me===void 0&&(me=new WeakMap,d.set(pe,me));let Ce=me.get(D);Ce===void 0&&(Ce=i.getUniformBlockIndex(pe,D.name),me.set(D,Ce))}function He(D,pe){const Ce=d.get(pe).get(D);h.get(pe)!==Ce&&(i.uniformBlockBinding(pe,Ce,D.__bindingPointIndex),h.set(pe,Ce))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ae=null,le={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,S=null,b=null,U=null,A=null,R=null,X=null,y=new Ye(0,0,0),w=0,q=!1,N=null,se=null,L=null,G=null,Y=null,de.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:Ue,disable:Te,bindFramebuffer:F,drawBuffers:x,useProgram:I,setBlending:O,setMaterial:ie,setFlipSided:ne,setCullFace:M,setLineWidth:v,setPolygonOffset:H,setScissorTest:te,activeTexture:Q,bindTexture:oe,unbindTexture:ye,compressedTexImage2D:fe,compressedTexImage3D:ve,texImage2D:be,texImage3D:xe,updateUBOMapping:ct,uniformBlockBinding:He,texStorage2D:We,texStorage3D:Ie,texSubImage2D:we,texSubImage3D:Ne,compressedTexSubImage2D:re,compressedTexSubImage3D:Je,scissor:Be,viewport:Ke,reset:he}}function up(i,e,t,n,r,s,c){const o=r.isWebGL2,a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return p?new OffscreenCanvas(M,v):Mr("canvas")}function _(M,v,H,te){let Q=1;if((M.width>te||M.height>te)&&(Q=te/Math.max(M.width,M.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const oe=v?Ss:Math.floor,ye=oe(Q*M.width),fe=oe(Q*M.height);d===void 0&&(d=g(ye,fe));const ve=H?g(ye,fe):d;return ve.width=ye,ve.height=fe,ve.getContext("2d").drawImage(M,0,0,ye,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ye+"x"+fe+")."),ve}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return Ta(M.width)&&Ta(M.height)}function f(M){return o?!1:M.wrapS!==en||M.wrapT!==en||M.minFilter!==Pt&&M.minFilter!==Xt}function E(M,v){return M.generateMipmaps&&v&&M.minFilter!==Pt&&M.minFilter!==Xt}function S(M){i.generateMipmap(M)}function b(M,v,H,te,Q=!1){if(o===!1)return v;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe=v;if(v===i.RED&&(H===i.FLOAT&&(oe=i.R32F),H===i.HALF_FLOAT&&(oe=i.R16F),H===i.UNSIGNED_BYTE&&(oe=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(oe=i.R8UI),H===i.UNSIGNED_SHORT&&(oe=i.R16UI),H===i.UNSIGNED_INT&&(oe=i.R32UI),H===i.BYTE&&(oe=i.R8I),H===i.SHORT&&(oe=i.R16I),H===i.INT&&(oe=i.R32I)),v===i.RG&&(H===i.FLOAT&&(oe=i.RG32F),H===i.HALF_FLOAT&&(oe=i.RG16F),H===i.UNSIGNED_BYTE&&(oe=i.RG8)),v===i.RGBA){const ye=Q?gr:Ze.getTransfer(te);H===i.FLOAT&&(oe=i.RGBA32F),H===i.HALF_FLOAT&&(oe=i.RGBA16F),H===i.UNSIGNED_BYTE&&(oe=ye===tt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function U(M,v,H){return E(M,H)===!0||M.isFramebufferTexture&&M.minFilter!==Pt&&M.minFilter!==Xt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function A(M){return M===Pt||M===Ks||M===Lr?i.NEAREST:i.LINEAR}function R(M){const v=M.target;v.removeEventListener("dispose",R),y(v),v.isVideoTexture&&h.delete(v)}function X(M){const v=M.target;v.removeEventListener("dispose",X),q(v)}function y(M){const v=n.get(M);if(v.__webglInit===void 0)return;const H=M.source,te=u.get(H);if(te){const Q=te[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(M),Object.keys(te).length===0&&u.delete(H)}n.remove(M)}function w(M){const v=n.get(M);i.deleteTexture(v.__webglTexture);const H=M.source,te=u.get(H);delete te[v.__cacheKey],c.memory.textures--}function q(M){const v=M.texture,H=n.get(M),te=n.get(v);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),c.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(H.__webglFramebuffer[Q]))for(let oe=0;oe<H.__webglFramebuffer[Q].length;oe++)i.deleteFramebuffer(H.__webglFramebuffer[Q][oe]);else i.deleteFramebuffer(H.__webglFramebuffer[Q]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[Q])}else{if(Array.isArray(H.__webglFramebuffer))for(let Q=0;Q<H.__webglFramebuffer.length;Q++)i.deleteFramebuffer(H.__webglFramebuffer[Q]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Q=0;Q<H.__webglColorRenderbuffer.length;Q++)H.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[Q]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let Q=0,oe=v.length;Q<oe;Q++){const ye=n.get(v[Q]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),c.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(M)}let N=0;function se(){N=0}function L(){const M=N;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),N+=1,M}function G(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function Y(M,v){const H=n.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.version>0&&H.__version!==M.version){const te=M.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,M,v);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function K(M,v){const H=n.get(M);if(M.version>0&&H.__version!==M.version){de(H,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function J(M,v){const H=n.get(M);if(M.version>0&&H.__version!==M.version){de(H,M,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function j(M,v){const H=n.get(M);if(M.version>0&&H.__version!==M.version){Se(H,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}const Z={[_s]:i.REPEAT,[en]:i.CLAMP_TO_EDGE,[vs]:i.MIRRORED_REPEAT},ae={[Pt]:i.NEAREST,[Ks]:i.NEAREST_MIPMAP_NEAREST,[Lr]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Xc]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},le={[il]:i.NEVER,[ll]:i.ALWAYS,[rl]:i.LESS,[Io]:i.LEQUAL,[sl]:i.EQUAL,[cl]:i.GEQUAL,[al]:i.GREATER,[ol]:i.NOTEQUAL};function V(M,v,H){if(H?(i.texParameteri(M,i.TEXTURE_WRAP_S,Z[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,Z[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,Z[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ae[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ae[v.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==en||v.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,A(v.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Pt&&v.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Pt||v.minFilter!==Lr&&v.minFilter!==Pi||v.type===En&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(M,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ee(M,v){let H=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",R));const te=v.source;let Q=u.get(te);Q===void 0&&(Q={},u.set(te,Q));const oe=G(v);if(oe!==M.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,H=!0),Q[oe].usedTimes++;const ye=Q[M.__cacheKey];ye!==void 0&&(Q[M.__cacheKey].usedTimes--,ye.usedTimes===0&&w(v)),M.__cacheKey=oe,M.__webglTexture=Q[oe].texture}return H}function de(M,v,H){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);const Q=ee(M,v),oe=v.source;t.bindTexture(te,M.__webglTexture,i.TEXTURE0+H);const ye=n.get(oe);if(oe.version!==ye.__version||Q===!0){t.activeTexture(i.TEXTURE0+H);const fe=Ze.getPrimaries(Ze.workingColorSpace),ve=v.colorSpace===$t?null:Ze.getPrimaries(v.colorSpace),we=v.colorSpace===$t||fe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ne=f(v)&&m(v.image)===!1;let re=_(v.image,Ne,!1,r.maxTextureSize);re=ne(v,re);const Je=m(re)||o,We=s.convert(v.format,v.colorSpace);let Ie=s.convert(v.type),be=b(v.internalFormat,We,Ie,v.colorSpace,v.isVideoTexture);V(te,v,Je);let xe;const Be=v.mipmaps,Ke=o&&v.isVideoTexture!==!0&&be!==Po,ct=ye.__version===void 0||Q===!0,He=U(v,re,Je);if(v.isDepthTexture)be=i.DEPTH_COMPONENT,o?v.type===En?be=i.DEPTH_COMPONENT32F:v.type===yn?be=i.DEPTH_COMPONENT24:v.type===Bn?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:v.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===zn&&be===i.DEPTH_COMPONENT&&v.type!==bs&&v.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=yn,Ie=s.convert(v.type)),v.format===pi&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,v.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Bn,Ie=s.convert(v.type))),ct&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,be,re.width,re.height,0,We,Ie,null));else if(v.isDataTexture)if(Be.length>0&&Je){Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,He,be,Be[0].width,Be[0].height);for(let he=0,D=Be.length;he<D;he++)xe=Be[he],Ke?t.texSubImage2D(i.TEXTURE_2D,he,0,0,xe.width,xe.height,We,Ie,xe.data):t.texImage2D(i.TEXTURE_2D,he,be,xe.width,xe.height,0,We,Ie,xe.data);v.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(i.TEXTURE_2D,He,be,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,We,Ie,re.data)):t.texImage2D(i.TEXTURE_2D,0,be,re.width,re.height,0,We,Ie,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ke&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,be,Be[0].width,Be[0].height,re.depth);for(let he=0,D=Be.length;he<D;he++)xe=Be[he],v.format!==tn?We!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,re.depth,We,xe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,be,xe.width,xe.height,re.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,xe.width,xe.height,re.depth,We,Ie,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,be,xe.width,xe.height,re.depth,0,We,Ie,xe.data)}else{Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,He,be,Be[0].width,Be[0].height);for(let he=0,D=Be.length;he<D;he++)xe=Be[he],v.format!==tn?We!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,xe.width,xe.height,We,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,he,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,he,0,0,xe.width,xe.height,We,Ie,xe.data):t.texImage2D(i.TEXTURE_2D,he,be,xe.width,xe.height,0,We,Ie,xe.data)}else if(v.isDataArrayTexture)Ke?(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,be,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,We,Ie,re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,We,Ie,re.data);else if(v.isData3DTexture)Ke?(ct&&t.texStorage3D(i.TEXTURE_3D,He,be,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,We,Ie,re.data)):t.texImage3D(i.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,We,Ie,re.data);else if(v.isFramebufferTexture){if(ct)if(Ke)t.texStorage2D(i.TEXTURE_2D,He,be,re.width,re.height);else{let he=re.width,D=re.height;for(let pe=0;pe<He;pe++)t.texImage2D(i.TEXTURE_2D,pe,be,he,D,0,We,Ie,null),he>>=1,D>>=1}}else if(Be.length>0&&Je){Ke&&ct&&t.texStorage2D(i.TEXTURE_2D,He,be,Be[0].width,Be[0].height);for(let he=0,D=Be.length;he<D;he++)xe=Be[he],Ke?t.texSubImage2D(i.TEXTURE_2D,he,0,0,We,Ie,xe):t.texImage2D(i.TEXTURE_2D,he,be,We,Ie,xe);v.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(i.TEXTURE_2D,He,be,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,Ie,re)):t.texImage2D(i.TEXTURE_2D,0,be,We,Ie,re);E(v,Je)&&S(te),ye.__version=oe.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Se(M,v,H){if(v.image.length!==6)return;const te=ee(M,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+H);const oe=n.get(Q);if(Q.version!==oe.__version||te===!0){t.activeTexture(i.TEXTURE0+H);const ye=Ze.getPrimaries(Ze.workingColorSpace),fe=v.colorSpace===$t?null:Ze.getPrimaries(v.colorSpace),ve=v.colorSpace===$t||ye===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,Ne=v.image[0]&&v.image[0].isDataTexture,re=[];for(let he=0;he<6;he++)!we&&!Ne?re[he]=_(v.image[he],!1,!0,r.maxCubemapSize):re[he]=Ne?v.image[he].image:v.image[he],re[he]=ne(v,re[he]);const Je=re[0],We=m(Je)||o,Ie=s.convert(v.format,v.colorSpace),be=s.convert(v.type),xe=b(v.internalFormat,Ie,be,v.colorSpace),Be=o&&v.isVideoTexture!==!0,Ke=oe.__version===void 0||te===!0;let ct=U(v,Je,We);V(i.TEXTURE_CUBE_MAP,v,We);let He;if(we){Be&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,xe,Je.width,Je.height);for(let he=0;he<6;he++){He=re[he].mipmaps;for(let D=0;D<He.length;D++){const pe=He[D];v.format!==tn?Ie!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,0,0,pe.width,pe.height,Ie,pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,0,0,pe.width,pe.height,Ie,be,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D,xe,pe.width,pe.height,0,Ie,be,pe.data)}}}else{He=v.mipmaps,Be&&Ke&&(He.length>0&&ct++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,xe,re[0].width,re[0].height));for(let he=0;he<6;he++)if(Ne){Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,re[he].width,re[he].height,Ie,be,re[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,xe,re[he].width,re[he].height,0,Ie,be,re[he].data);for(let D=0;D<He.length;D++){const me=He[D].image[he].image;Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,0,0,me.width,me.height,Ie,be,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,xe,me.width,me.height,0,Ie,be,me.data)}}else{Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie,be,re[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,xe,Ie,be,re[he]);for(let D=0;D<He.length;D++){const pe=He[D];Be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,0,0,Ie,be,pe.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,D+1,xe,Ie,be,pe.image[he])}}}E(v,We)&&S(i.TEXTURE_CUBE_MAP),oe.__version=Q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Me(M,v,H,te,Q,oe){const ye=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),ve=b(H.internalFormat,ye,fe,H.colorSpace);if(!n.get(v).__hasExternalTextures){const Ne=Math.max(1,v.width>>oe),re=Math.max(1,v.height>>oe);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,oe,ve,Ne,re,v.depth,0,ye,fe,null):t.texImage2D(Q,oe,ve,Ne,re,0,ye,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),O(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,n.get(H).__webglTexture,0,z(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,n.get(H).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(M,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let te=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||O(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===En?te=i.DEPTH_COMPONENT32F:Q.type===yn&&(te=i.DEPTH_COMPONENT24));const oe=z(v);O(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,te,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,te,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const te=z(v);H&&O(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,v.width,v.height):O(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{const te=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<te.length;Q++){const oe=te[Q],ye=s.convert(oe.format,oe.colorSpace),fe=s.convert(oe.type),ve=b(oe.internalFormat,ye,fe,oe.colorSpace),we=z(v);H&&O(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ve,v.width,v.height):O(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const te=n.get(v.depthTexture).__webglTexture,Q=z(v);if(v.depthTexture.format===zn)O(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===pi)O(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(M){const v=n.get(M),H=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ue(v.__webglFramebuffer,M)}else if(H){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]=i.createRenderbuffer(),Pe(v.__webglDepthbuffer[te],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Pe(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(M,v,H){const te=n.get(M);v!==void 0&&Me(te.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Te(M)}function x(M){const v=M.texture,H=n.get(M),te=n.get(v);M.addEventListener("dispose",X),M.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,c.memory.textures++);const Q=M.isWebGLCubeRenderTarget===!0,oe=M.isWebGLMultipleRenderTargets===!0,ye=m(M)||o;if(Q){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let ve=0;ve<v.mipmaps.length;ve++)H.__webglFramebuffer[fe][ve]=i.createFramebuffer()}else H.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)H.__webglFramebuffer[fe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(oe)if(r.drawBuffers){const fe=M.texture;for(let ve=0,we=fe.length;ve<we;ve++){const Ne=n.get(fe[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&O(M)===!1){const fe=oe?v:[v];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<fe.length;ve++){const we=fe[ve];H.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);const Ne=s.convert(we.format,we.colorSpace),re=s.convert(we.type),Je=b(we.internalFormat,Ne,re,we.colorSpace,M.isXRRenderTarget===!0),We=z(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Je,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),V(i.TEXTURE_CUBE_MAP,v,ye);for(let fe=0;fe<6;fe++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Me(H.__webglFramebuffer[fe][ve],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Me(H.__webglFramebuffer[fe],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);E(v,ye)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const fe=M.texture;for(let ve=0,we=fe.length;ve<we;ve++){const Ne=fe[ve],re=n.get(Ne);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),V(i.TEXTURE_2D,Ne,ye),Me(H.__webglFramebuffer,M,Ne,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),E(Ne,ye)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?fe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,te.__webglTexture),V(fe,v,ye),o&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Me(H.__webglFramebuffer[ve],M,v,i.COLOR_ATTACHMENT0,fe,ve);else Me(H.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,fe,0);E(v,ye)&&S(fe),t.unbindTexture()}M.depthBuffer&&Te(M)}function I(M){const v=m(M)||o,H=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0,Q=H.length;te<Q;te++){const oe=H[te];if(E(oe,v)){const ye=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(oe).__webglTexture;t.bindTexture(ye,fe),S(ye),t.unbindTexture()}}}function C(M){if(o&&M.samples>0&&O(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],H=M.width,te=M.height;let Q=i.COLOR_BUFFER_BIT;const oe=[],ye=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(M),ve=M.isWebGLMultipleRenderTargets===!0;if(ve)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let we=0;we<v.length;we++){oe.push(i.COLOR_ATTACHMENT0+we),M.depthBuffer&&oe.push(ye);const Ne=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ne===!1&&(M.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[we]),Ne===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ye]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ye])),ve){const re=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,H,te,0,0,H,te,Q,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,fe.__webglColorRenderbuffer[we]);const Ne=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function z(M){return Math.min(r.maxSamples,M.samples)}function O(M){const v=n.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(M){const v=c.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function ne(M,v){const H=M.colorSpace,te=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===xs||H!==gn&&H!==$t&&(Ze.getTransfer(H)===tt?o===!1?e.has("EXT_sRGB")===!0&&te===tn?(M.format=xs,M.minFilter=Xt,M.generateMipmaps=!1):v=Oo.sRGBToLinear(v):(te!==tn||Q!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}this.allocateTextureUnit=L,this.resetTextureUnits=se,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=F,this.setupRenderTarget=x,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=O}function fp(i,e,t){const n=t.isWebGL2;function r(s,c=$t){let o;const a=Ze.getTransfer(c);if(s===wn)return i.UNSIGNED_BYTE;if(s===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(s===qc)return i.BYTE;if(s===Yc)return i.SHORT;if(s===bs)return i.UNSIGNED_SHORT;if(s===bo)return i.INT;if(s===yn)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===Di)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===$c)return i.ALPHA;if(s===tn)return i.RGBA;if(s===Kc)return i.LUMINANCE;if(s===Jc)return i.LUMINANCE_ALPHA;if(s===zn)return i.DEPTH_COMPONENT;if(s===pi)return i.DEPTH_STENCIL;if(s===xs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Zc)return i.RED;if(s===Ro)return i.RED_INTEGER;if(s===jc)return i.RG;if(s===Co)return i.RG_INTEGER;if(s===Lo)return i.RGBA_INTEGER;if(s===Pr||s===Dr||s===Ur||s===Ir)if(a===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Pr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Pr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ur)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ir)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Js||s===Zs||s===js||s===Qs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Js)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===js)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Po)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ea||s===ta)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ea)return a===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ta)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===na||s===ia||s===ra||s===sa||s===aa||s===oa||s===ca||s===la||s===ha||s===ua||s===fa||s===da||s===pa||s===ma)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===na)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ia)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ra)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===aa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ca)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===la)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ha)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ua)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===da)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ma)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nr||s===ga||s===_a)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Nr)return a===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ga)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_a)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qc||s===va||s===xa||s===Ma)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Nr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===va)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ma)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class dp extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pp={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,c=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){c=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return o!==null&&(o.visible=r!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mp extends gi{constructor(e,t){super();const n=this;let r=null,s=1,c=null,o="local-floor",a=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const E=[],S=[],b=new _e;let U=null;const A=new Ht;A.layers.enable(1),A.viewport=new at;const R=new Ht;R.layers.enable(2),R.viewport=new at;const X=[A,R],y=new dp;y.layers.enable(1),y.layers.enable(2);let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=E[V];return ee===void 0&&(ee=new as,E[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=E[V];return ee===void 0&&(ee=new as,E[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=E[V];return ee===void 0&&(ee=new as,E[V]=ee),ee.getHandSpace()};function N(V){const ee=S.indexOf(V.inputSource);if(ee===-1)return;const de=E[ee];de!==void 0&&(de.update(V.inputSource,V.frame,l||c),de.dispatchEvent({type:V.type,data:V.inputSource}))}function se(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",L);for(let V=0;V<E.length;V++){const ee=S[V];ee!==null&&(S[V]=null,E[V].disconnect(ee))}w=null,q=null,e.setRenderTarget(m),p=null,u=null,d=null,r=null,f=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||c},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",se),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Hn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,de=null,Se=null;_.depth&&(Se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?pi:zn,de=_.stencil?Bn:yn);const Me={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(Me),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new Hn(u.textureWidth,u.textureHeight,{format:tn,type:wn,depthTexture:new $o(u.textureWidth,u.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(f);Pe.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(a),l=null,c=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(V){for(let ee=0;ee<V.removed.length;ee++){const de=V.removed[ee],Se=S.indexOf(de);Se>=0&&(S[Se]=null,E[Se].disconnect(de))}for(let ee=0;ee<V.added.length;ee++){const de=V.added[ee];let Se=S.indexOf(de);if(Se===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=S.length){S.push(de),Se=Pe;break}else if(S[Pe]===null){S[Pe]=de,Se=Pe;break}if(Se===-1)break}const Me=E[Se];Me&&Me.connect(de)}}const G=new P,Y=new P;function K(V,ee,de){G.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const Se=G.distanceTo(Y),Me=ee.projectionMatrix.elements,Pe=de.projectionMatrix.elements,Ue=Me[14]/(Me[10]-1),Te=Me[14]/(Me[10]+1),F=(Me[9]+1)/Me[5],x=(Me[9]-1)/Me[5],I=(Me[8]-1)/Me[0],C=(Pe[8]+1)/Pe[0],z=Ue*I,O=Ue*C,ie=Se/(-I+C),ne=ie*-I;ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ne),V.translateZ(ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const M=Ue+ie,v=Te+ie,H=z-ne,te=O+(Se-ne),Q=F*Te/v*M,oe=x*Te/v*M;V.projectionMatrix.makePerspective(H,te,Q,oe,M,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;y.near=R.near=A.near=V.near,y.far=R.far=A.far=V.far,(w!==y.near||q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,q=y.far);const ee=V.parent,de=y.cameras;J(y,ee);for(let Se=0;Se<de.length;Se++)J(de[Se],ee);de.length===2?K(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),j(V,y,ee)};function j(V,ee,de){de===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ms*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return a},this.setFoveation=function(V){a=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Z=null;function ae(V,ee){if(h=ee.getViewerPose(l||c),g=ee,h!==null){const de=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Se=!1;de.length!==y.cameras.length&&(y.cameras.length=0,Se=!0);for(let Me=0;Me<de.length;Me++){const Pe=de[Me];let Ue=null;if(p!==null)Ue=p.getViewport(Pe);else{const F=d.getViewSubImage(u,Pe);Ue=F.viewport,Me===0&&(e.setRenderTargetTextures(f,F.colorTexture,u.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(f))}let Te=X[Me];Te===void 0&&(Te=new Ht,Te.layers.enable(Me),Te.viewport=new at,X[Me]=Te),Te.matrix.fromArray(Pe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Pe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Me===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Se===!0&&y.cameras.push(Te)}}for(let de=0;de<E.length;de++){const Se=S[de],Me=E[de];Se!==null&&Me!==void 0&&Me.update(Se,ee,l||c)}Z&&Z(V,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const le=new qo;le.setAnimationLoop(ae),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}}function gp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vo(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,S,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(c(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,E,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,E,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _p(i,e,t,n){let r={},s={},c=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function a(E,S){const b=S.program;n.uniformBlockBinding(E,b)}function l(E,S){let b=r[E.id];b===void 0&&(g(E),b=h(E),r[E.id]=b,E.addEventListener("dispose",m));const U=S.program;n.updateUBOMapping(E,U);const A=e.render.frame;s[E.id]!==A&&(u(E),s[E.id]=A)}function h(E){const S=d();E.__bindingPointIndex=S;const b=i.createBuffer(),U=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let E=0;E<o;E++)if(c.indexOf(E)===-1)return c.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const S=r[E.id],b=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=b.length;A<R;A++){const X=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,w=X.length;y<w;y++){const q=X[y];if(p(q,A,y,U)===!0){const N=q.__offset,se=Array.isArray(q.value)?q.value:[q.value];let L=0;for(let G=0;G<se.length;G++){const Y=se[G],K=_(Y);typeof Y=="number"||typeof Y=="boolean"?(q.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,N+L,q.__data)):Y.isMatrix3?(q.__data[0]=Y.elements[0],q.__data[1]=Y.elements[1],q.__data[2]=Y.elements[2],q.__data[3]=0,q.__data[4]=Y.elements[3],q.__data[5]=Y.elements[4],q.__data[6]=Y.elements[5],q.__data[7]=0,q.__data[8]=Y.elements[6],q.__data[9]=Y.elements[7],q.__data[10]=Y.elements[8],q.__data[11]=0):(Y.toArray(q.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,q.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,b,U){const A=E.value,R=S+"_"+b;if(U[R]===void 0)return typeof A=="number"||typeof A=="boolean"?U[R]=A:U[R]=A.clone(),!0;{const X=U[R];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return U[R]=A,!0}else if(X.equals(A)===!1)return X.copy(A),!0}return!1}function g(E){const S=E.uniforms;let b=0;const U=16;for(let R=0,X=S.length;R<X;R++){const y=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,q=y.length;w<q;w++){const N=y[w],se=Array.isArray(N.value)?N.value:[N.value];for(let L=0,G=se.length;L<G;L++){const Y=se[L],K=_(Y),J=b%U;J!==0&&U-J<K.boundary&&(b+=U-J),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=K.storage}}}const A=b%U;return A>0&&(b+=U-A),E.__size=b,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const b=c.indexOf(S.__bindingPointIndex);c.splice(b,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const E in r)i.deleteBuffer(r[E]);c=[],r={},s={}}return{bind:a,update:l,dispose:f}}class ec{constructor(e={}){const{canvas:t=ul(),context:n=null,depth:r=!0,stencil:s=!0,alpha:c=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=c;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=bn,this.toneMappingExposure=1;const S=this;let b=!1,U=0,A=0,R=null,X=-1,y=null;const w=new at,q=new at;let N=null;const se=new Ye(0);let L=0,G=t.width,Y=t.height,K=1,J=null,j=null;const Z=new at(0,0,G,Y),ae=new at(0,0,G,Y);let le=!1;const V=new Rs;let ee=!1,de=!1,Se=null;const Me=new ut,Pe=new _e,Ue=new P,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return R===null?K:1}let x=n;function I(T,B){for(let W=0;W<T.length;W++){const $=T[W],k=t.getContext($,B);if(k!==null)return k}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ts}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",pe,!1),x===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),x=I(B,T),x===null)throw I(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let C,z,O,ie,ne,M,v,H,te,Q,oe,ye,fe,ve,we,Ne,re,Je,We,Ie,be,xe,Be,Ke;function ct(){C=new Af(x),z=new Sf(x,C,e),C.init(z),xe=new fp(x,C,z),O=new hp(x,C,z),ie=new Lf(x),ne=new Jd,M=new up(x,C,O,ne,z,xe,ie),v=new Ef(S),H=new wf(S),te=new Fl(x,z),Be=new xf(x,C,te,z),Q=new Rf(x,te,ie,Be),oe=new If(x,Q,te,ie),We=new Uf(x,z,M),Ne=new yf(ne),ye=new Kd(S,v,H,C,z,Be,Ne),fe=new gp(S,ne),ve=new jd,we=new rp(C,z),Je=new vf(S,v,H,O,oe,u,a),re=new lp(S,oe,z),Ke=new _p(x,ie,z,O),Ie=new Mf(x,C,ie,z),be=new Cf(x,C,ie,z),ie.programs=ye.programs,S.capabilities=z,S.extensions=C,S.properties=ne,S.renderLists=ve,S.shadowMap=re,S.state=O,S.info=ie}ct();const He=new mp(S,x);this.xr=He,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=C.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=C.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(G,Y,!1))},this.getSize=function(T){return T.set(G,Y)},this.setSize=function(T,B,W=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Y=B,t.width=Math.floor(T*K),t.height=Math.floor(B*K),W===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(G*K,Y*K).floor()},this.setDrawingBufferSize=function(T,B,W){G=T,Y=B,K=W,t.width=Math.floor(T*W),t.height=Math.floor(B*W),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,W,$){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,W,$),O.viewport(w.copy(Z).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,B,W,$){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,W,$),O.scissor(q.copy(ae).multiplyScalar(K).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){O.setScissorTest(le=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(T=!0,B=!0,W=!0){let $=0;if(T){let k=!1;if(R!==null){const ge=R.texture.format;k=ge===Lo||ge===Co||ge===Ro}if(k){const ge=R.texture.type,Ee=ge===wn||ge===yn||ge===bs||ge===Bn||ge===wo||ge===Ao,Re=Je.getClearColor(),De=Je.getClearAlpha(),Ge=Re.r,Oe=Re.g,Fe=Re.b;Ee?(p[0]=Ge,p[1]=Oe,p[2]=Fe,p[3]=De,x.clearBufferuiv(x.COLOR,0,p)):(g[0]=Ge,g[1]=Oe,g[2]=Fe,g[3]=De,x.clearBufferiv(x.COLOR,0,g))}else $|=x.COLOR_BUFFER_BIT}B&&($|=x.DEPTH_BUFFER_BIT),W&&($|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ve.dispose(),we.dispose(),ne.dispose(),v.dispose(),H.dispose(),oe.dispose(),Be.dispose(),Ke.dispose(),ye.dispose(),He.dispose(),He.removeEventListener("sessionstart",Rt),He.removeEventListener("sessionend",et),Se&&(Se.dispose(),Se=null),Ct.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=ie.autoReset,B=re.enabled,W=re.autoUpdate,$=re.needsUpdate,k=re.type;ct(),ie.autoReset=T,re.enabled=B,re.autoUpdate=W,re.needsUpdate=$,re.type=k}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){const B=T.target;B.removeEventListener("dispose",me),Ce(B)}function Ce(T){Ae(T),ne.remove(T)}function Ae(T){const B=ne.get(T).programs;B!==void 0&&(B.forEach(function(W){ye.releaseProgram(W)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,W,$,k,ge){B===null&&(B=Te);const Ee=k.isMesh&&k.matrixWorld.determinant()<0,Re=cc(T,B,W,$,k);O.setMaterial($,Ee);let De=W.index,Ge=1;if($.wireframe===!0){if(De=Q.getWireframeAttribute(W),De===void 0)return;Ge=2}const Oe=W.drawRange,Fe=W.attributes.position;let ht=Oe.start*Ge,Ft=(Oe.start+Oe.count)*Ge;ge!==null&&(ht=Math.max(ht,ge.start*Ge),Ft=Math.min(Ft,(ge.start+ge.count)*Ge)),De!==null?(ht=Math.max(ht,0),Ft=Math.min(Ft,De.count)):Fe!=null&&(ht=Math.max(ht,0),Ft=Math.min(Ft,Fe.count));const _t=Ft-ht;if(_t<0||_t===1/0)return;Be.setup(k,$,Re,W,De);let cn,ot=Ie;if(De!==null&&(cn=te.get(De),ot=be,ot.setIndex(cn)),k.isMesh)$.wireframe===!0?(O.setLineWidth($.wireframeLinewidth*F()),ot.setMode(x.LINES)):ot.setMode(x.TRIANGLES);else if(k.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),O.setLineWidth(ke*F()),k.isLineSegments?ot.setMode(x.LINES):k.isLineLoop?ot.setMode(x.LINE_LOOP):ot.setMode(x.LINE_STRIP)}else k.isPoints?ot.setMode(x.POINTS):k.isSprite&&ot.setMode(x.TRIANGLES);if(k.isBatchedMesh)ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ot.renderInstances(ht,_t,k.count);else if(W.isInstancedBufferGeometry){const ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,wr=Math.min(W.instanceCount,ke);ot.renderInstances(ht,_t,wr)}else ot.render(ht,_t)};function je(T,B,W){T.transparent===!0&&T.side===Dt&&T.forceSinglePass===!1?(T.side=Nt,T.needsUpdate=!0,Gi(T,B,W),T.side=An,T.needsUpdate=!0,Gi(T,B,W),T.side=Dt):Gi(T,B,W)}this.compile=function(T,B,W=null){W===null&&(W=T),m=we.get(W),m.init(),E.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),T!==W&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(S._useLegacyLights);const $=new Set;return T.traverse(function(k){const ge=k.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){const Re=ge[Ee];je(Re,W,k),$.add(Re)}else je(ge,W,k),$.add(ge)}),E.pop(),m=null,$},this.compileAsync=function(T,B,W=null){const $=this.compile(T,B,W);return new Promise(k=>{function ge(){if($.forEach(function(Ee){ne.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){k(T);return}setTimeout(ge,10)}C.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Qe=null;function gt(T){Qe&&Qe(T)}function Rt(){Ct.stop()}function et(){Ct.start()}const Ct=new qo;Ct.setAnimationLoop(gt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(T){Qe=T,He.setAnimationLoop(T),T===null?Ct.stop():Ct.start()},He.addEventListener("sessionstart",Rt),He.addEventListener("sessionend",et),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(B),B=He.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,R),m=we.get(T,E.length),m.init(),E.push(m),Me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(Me),de=this.localClippingEnabled,ee=Ne.init(this.clippingPlanes,de),_=ve.get(T,f.length),_.init(),f.push(_),rn(T,B,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(J,j),this.info.render.frame++,ee===!0&&Ne.beginShadows();const W=m.state.shadowsArray;if(re.render(W,T,B),ee===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(_,T),m.setupLights(S._useLegacyLights),B.isArrayCamera){const $=B.cameras;for(let k=0,ge=$.length;k<ge;k++){const Ee=$[k];Fs(_,T,Ee,Ee.viewport)}}else Fs(_,T,B);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(S,T,B),Be.resetDefaultState(),X=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function rn(T,B,W,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){$&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);const Ee=oe.update(T),Re=T.material;Re.visible&&_.push(T,Ee,Re,W,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const Ee=oe.update(T),Re=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ue.copy(Ee.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(Re)){const De=Ee.groups;for(let Ge=0,Oe=De.length;Ge<Oe;Ge++){const Fe=De[Ge],ht=Re[Fe.materialIndex];ht&&ht.visible&&_.push(T,Ee,ht,W,Ue.z,Fe)}}else Re.visible&&_.push(T,Ee,Re,W,Ue.z,null)}}const ge=T.children;for(let Ee=0,Re=ge.length;Ee<Re;Ee++)rn(ge[Ee],B,W,$)}function Fs(T,B,W,$){const k=T.opaque,ge=T.transmissive,Ee=T.transparent;m.setupLightsView(W),ee===!0&&Ne.setGlobalState(S.clippingPlanes,W),ge.length>0&&oc(k,ge,B,W),$&&O.viewport(w.copy($)),k.length>0&&zi(k,B,W),ge.length>0&&zi(ge,B,W),Ee.length>0&&zi(Ee,B,W),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function oc(T,B,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ge=z.isWebGL2;Se===null&&(Se=new Hn(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")?Di:wn,minFilter:Pi,samples:ge?4:0})),S.getDrawingBufferSize(Pe),ge?Se.setSize(Pe.x,Pe.y):Se.setSize(Ss(Pe.x),Ss(Pe.y));const Ee=S.getRenderTarget();S.setRenderTarget(Se),S.getClearColor(se),L=S.getClearAlpha(),L<1&&S.setClearColor(16777215,.5),S.clear();const Re=S.toneMapping;S.toneMapping=bn,zi(T,W,$),M.updateMultisampleRenderTarget(Se),M.updateRenderTargetMipmap(Se);let De=!1;for(let Ge=0,Oe=B.length;Ge<Oe;Ge++){const Fe=B[Ge],ht=Fe.object,Ft=Fe.geometry,_t=Fe.material,cn=Fe.group;if(_t.side===Dt&&ht.layers.test($.layers)){const ot=_t.side;_t.side=Nt,_t.needsUpdate=!0,Bs(ht,W,$,Ft,_t,cn),_t.side=ot,_t.needsUpdate=!0,De=!0}}De===!0&&(M.updateMultisampleRenderTarget(Se),M.updateRenderTargetMipmap(Se)),S.setRenderTarget(Ee),S.setClearColor(se,L),S.toneMapping=Re}function zi(T,B,W){const $=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ge=T.length;k<ge;k++){const Ee=T[k],Re=Ee.object,De=Ee.geometry,Ge=$===null?Ee.material:$,Oe=Ee.group;Re.layers.test(W.layers)&&Bs(Re,B,W,De,Ge,Oe)}}function Bs(T,B,W,$,k,ge){T.onBeforeRender(S,B,W,$,k,ge),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(S,B,W,$,T,ge),k.transparent===!0&&k.side===Dt&&k.forceSinglePass===!1?(k.side=Nt,k.needsUpdate=!0,S.renderBufferDirect(W,B,$,k,T,ge),k.side=An,k.needsUpdate=!0,S.renderBufferDirect(W,B,$,k,T,ge),k.side=Dt):S.renderBufferDirect(W,B,$,k,T,ge),T.onAfterRender(S,B,W,$,k,ge)}function Gi(T,B,W){B.isScene!==!0&&(B=Te);const $=ne.get(T),k=m.state.lights,ge=m.state.shadowsArray,Ee=k.state.version,Re=ye.getParameters(T,k.state,ge,B,W),De=ye.getProgramCacheKey(Re);let Ge=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?H:v).get(T.envMap||$.environment),Ge===void 0&&(T.addEventListener("dispose",me),Ge=new Map,$.programs=Ge);let Oe=Ge.get(De);if(Oe!==void 0){if($.currentProgram===Oe&&$.lightsStateVersion===Ee)return Gs(T,Re),Oe}else Re.uniforms=ye.getUniforms(T),T.onBuild(W,Re,S),T.onBeforeCompile(Re,S),Oe=ye.acquireProgram(Re,De),Ge.set(De,Oe),$.uniforms=Re.uniforms;const Fe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=Ne.uniform),Gs(T,Re),$.needsLights=hc(T),$.lightsStateVersion=Ee,$.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Oe,$.uniformsList=null,Oe}function zs(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=fr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Gs(T,B){const W=ne.get(T);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function cc(T,B,W,$,k){B.isScene!==!0&&(B=Te),M.resetTextureUnits();const ge=B.fog,Ee=$.isMeshStandardMaterial?B.environment:null,Re=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gn,De=($.isMeshStandardMaterial?H:v).get($.envMap||Ee),Ge=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Fe=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,Ft=!!W.morphAttributes.color;let _t=bn;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_t=S.toneMapping);const cn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=cn!==void 0?cn.length:0,ke=ne.get($),wr=m.state.lights;if(ee===!0&&(de===!0||T!==y)){const Vt=T===y&&$.id===X;Ne.setState($,T,Vt)}let lt=!1;$.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==wr.state.version||ke.outputColorSpace!==Re||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||ke.envMap!==De||$.fog===!0&&ke.fog!==ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ne.numPlanes||ke.numIntersection!==Ne.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Oe||ke.morphTargets!==Fe||ke.morphNormals!==ht||ke.morphColors!==Ft||ke.toneMapping!==_t||z.isWebGL2===!0&&ke.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,ke.__version=$.version);let Rn=ke.currentProgram;lt===!0&&(Rn=Gi($,B,k));let Hs=!1,vi=!1,Ar=!1;const Et=Rn.getUniforms(),Cn=ke.uniforms;if(O.useProgram(Rn.program)&&(Hs=!0,vi=!0,Ar=!0),$.id!==X&&(X=$.id,vi=!0),Hs||y!==T){Et.setValue(x,"projectionMatrix",T.projectionMatrix),Et.setValue(x,"viewMatrix",T.matrixWorldInverse);const Vt=Et.map.cameraPosition;Vt!==void 0&&Vt.setValue(x,Ue.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&Et.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,vi=!0,Ar=!0)}if(k.isSkinnedMesh){Et.setOptional(x,k,"bindMatrix"),Et.setOptional(x,k,"bindMatrixInverse");const Vt=k.skeleton;Vt&&(z.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Et.setValue(x,"boneTexture",Vt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Et.setOptional(x,k,"batchingTexture"),Et.setValue(x,"batchingTexture",k._matricesTexture,M));const Rr=W.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0&&z.isWebGL2===!0)&&We.update(k,W,Rn),(vi||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,Et.setValue(x,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Cn.envMap.value=De,Cn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),vi&&(Et.setValue(x,"toneMappingExposure",S.toneMappingExposure),ke.needsLights&&lc(Cn,Ar),ge&&$.fog===!0&&fe.refreshFogUniforms(Cn,ge),fe.refreshMaterialUniforms(Cn,$,K,Y,Se),fr.upload(x,zs(ke),Cn,M)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(fr.upload(x,zs(ke),Cn,M),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(x,"center",k.center),Et.setValue(x,"modelViewMatrix",k.modelViewMatrix),Et.setValue(x,"normalMatrix",k.normalMatrix),Et.setValue(x,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Vt=$.uniformsGroups;for(let Cr=0,uc=Vt.length;Cr<uc;Cr++)if(z.isWebGL2){const ks=Vt[Cr];Ke.update(ks,Rn),Ke.bind(ks,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function lc(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function hc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,W){ne.get(T.texture).__webglTexture=B,ne.get(T.depthTexture).__webglTexture=W;const $=ne.get(T);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const W=ne.get(T);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,W=0){R=T,U=B,A=W;let $=!0,k=null,ge=!1,Ee=!1;if(T){const De=ne.get(T);De.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(x.FRAMEBUFFER,null),$=!1):De.__webglFramebuffer===void 0?M.setupRenderTarget(T):De.__hasExternalTextures&&M.rebindTextures(T,ne.get(T.texture).__webglTexture,ne.get(T.depthTexture).__webglTexture);const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const Oe=ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?k=Oe[B][W]:k=Oe[B],ge=!0):z.isWebGL2&&T.samples>0&&M.useMultisampledRTT(T)===!1?k=ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?k=Oe[W]:k=Oe,w.copy(T.viewport),q.copy(T.scissor),N=T.scissorTest}else w.copy(Z).multiplyScalar(K).floor(),q.copy(ae).multiplyScalar(K).floor(),N=le;if(O.bindFramebuffer(x.FRAMEBUFFER,k)&&z.drawBuffers&&$&&O.drawBuffers(T,k),O.viewport(w),O.scissor(q),O.setScissorTest(N),ge){const De=ne.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,W)}else if(Ee){const De=ne.get(T.texture),Ge=B||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,De.__webglTexture,W||0,Ge)}X=-1},this.readRenderTargetPixels=function(T,B,W,$,k,ge,Ee){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){O.bindFramebuffer(x.FRAMEBUFFER,Re);try{const De=T.texture,Ge=De.format,Oe=De.type;if(Ge!==tn&&xe.convert(Ge)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Oe===Di&&(C.has("EXT_color_buffer_half_float")||z.isWebGL2&&C.has("EXT_color_buffer_float"));if(Oe!==wn&&xe.convert(Oe)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===En&&(z.isWebGL2||C.has("OES_texture_float")||C.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&W>=0&&W<=T.height-k&&x.readPixels(B,W,$,k,xe.convert(Ge),xe.convert(Oe),ge)}finally{const De=R!==null?ne.get(R).__webglFramebuffer:null;O.bindFramebuffer(x.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,B,W=0){const $=Math.pow(2,-W),k=Math.floor(B.image.width*$),ge=Math.floor(B.image.height*$);M.setTexture2D(B,0),x.copyTexSubImage2D(x.TEXTURE_2D,W,0,0,T.x,T.y,k,ge),O.unbindTexture()},this.copyTextureToTexture=function(T,B,W,$=0){const k=B.image.width,ge=B.image.height,Ee=xe.convert(W.format),Re=xe.convert(W.type);M.setTexture2D(W,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,W.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,$,T.x,T.y,k,ge,Ee,Re,B.image.data):B.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,$,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ee,B.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,$,T.x,T.y,Ee,Re,B.image),$===0&&W.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(T,B,W,$,k=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=T.max.x-T.min.x+1,Ee=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,De=xe.convert($.format),Ge=xe.convert($.type);let Oe;if($.isData3DTexture)M.setTexture3D($,0),Oe=x.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)M.setTexture2DArray($,0),Oe=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,$.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,$.unpackAlignment);const Fe=x.getParameter(x.UNPACK_ROW_LENGTH),ht=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Ft=x.getParameter(x.UNPACK_SKIP_PIXELS),_t=x.getParameter(x.UNPACK_SKIP_ROWS),cn=x.getParameter(x.UNPACK_SKIP_IMAGES),ot=W.isCompressedTexture?W.mipmaps[k]:W.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,ot.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ot.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,T.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,T.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?x.texSubImage3D(Oe,k,B.x,B.y,B.z,ge,Ee,Re,De,Ge,ot.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Oe,k,B.x,B.y,B.z,ge,Ee,Re,De,ot.data)):x.texSubImage3D(Oe,k,B.x,B.y,B.z,ge,Ee,Re,De,Ge,ot),x.pixelStorei(x.UNPACK_ROW_LENGTH,Fe),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ht),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ft),x.pixelStorei(x.UNPACK_SKIP_ROWS,_t),x.pixelStorei(x.UNPACK_SKIP_IMAGES,cn),k===0&&$.generateMipmaps&&x.generateMipmap(Oe),O.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),O.unbindTexture()},this.resetState=function(){U=0,A=0,R=null,O.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ws?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===yr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Gn:Do}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gn?Mt:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vp extends ec{}vp.prototype.isWebGL1Renderer=!0;class Ls{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new Ls(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xp extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Mp extends Ot{constructor(e,t,n,r,s,c,o,a,l){super(e,t,n,r,s,c,o,a,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let c;t?c=t:c=e*n[s-1];let o=0,a=s-1,l;for(;o<=a;)if(r=Math.floor(o+(a-o)/2),l=n[r]-c,l<0)o=r+1;else if(l>0)a=r-1;else{a=r;break}if(r=a,n[r]===c)return r/(s-1);const h=n[r],u=n[r+1]-h,p=(c-h)/u;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const c=this.getPoint(r),o=this.getPoint(s),a=t||(c.isVector2?new _e:new P);return a.copy(o).sub(c).normalize(),a}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,r=[],s=[],c=[],o=new P,a=new ut;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}s[0]=new P,c[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),c[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),c[p]=c[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(St(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(a.makeRotationAxis(o,g))}c[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(St(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(a.makeRotationAxis(r[g],p*g)),c[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ps extends on{constructor(e=0,t=0,n=1,r=1,s=0,c=Math.PI*2,o=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=c,this.aClockwise=o,this.aRotation=a}getPoint(e,t){const n=t||new _e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const c=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(c?s=0:s=r),this.aClockwise===!0&&!c&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=a-this.aX,p=l-this.aY;a=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Sp extends Ps{constructor(e,t,n,r,s,c){super(e,t,n,n,r,s,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Ds(){let i=0,e=0,t=0,n=0;function r(s,c,o,a){i=s,e=o,t=-3*s+3*c-2*o-a,n=2*s-2*c+o+a}return{initCatmullRom:function(s,c,o,a,l){r(c,o,l*(o-s),l*(a-c))},initNonuniformCatmullRom:function(s,c,o,a,l,h,d){let u=(c-s)/l-(o-s)/(l+h)+(o-c)/h,p=(o-c)/h-(a-c)/(h+d)+(a-o)/d;u*=h,p*=h,r(c,o,u,p)},calc:function(s){const c=s*s,o=c*s;return i+e*s+t*c+n*o}}}const lr=new P,os=new Ds,cs=new Ds,ls=new Ds;class yp extends on{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,c=(s-(this.closed?0:1))*e;let o=Math.floor(c),a=c-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:a===0&&o===s-1&&(o=s-2,a=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(lr.subVectors(r[0],r[1]).add(r[0]),l=lr);const d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(lr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),os.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),cs.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),ls.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(os.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),cs.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ls.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(os.calc(a),cs.calc(a),ls.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lo(i,e,t,n,r){const s=(n-e)*.5,c=(r-t)*.5,o=i*i,a=i*o;return(2*t-2*n+s+c)*a+(-3*t+3*n-2*s-c)*o+s*i+t}function Ep(i,e){const t=1-i;return t*t*e}function Tp(i,e){return 2*(1-i)*i*e}function bp(i,e){return i*i*e}function Ri(i,e,t,n){return Ep(i,e)+Tp(i,t)+bp(i,n)}function wp(i,e){const t=1-i;return t*t*t*e}function Ap(i,e){const t=1-i;return 3*t*t*i*e}function Rp(i,e){return 3*(1-i)*i*i*e}function Cp(i,e){return i*i*i*e}function Ci(i,e,t,n,r){return wp(i,e)+Ap(i,t)+Rp(i,n)+Cp(i,r)}class tc extends on{constructor(e=new _e,t=new _e,n=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,c=this.v2,o=this.v3;return n.set(Ci(e,r.x,s.x,c.x,o.x),Ci(e,r.y,s.y,c.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lp extends on{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,c=this.v2,o=this.v3;return n.set(Ci(e,r.x,s.x,c.x,o.x),Ci(e,r.y,s.y,c.y,o.y),Ci(e,r.z,s.z,c.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nc extends on{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends on{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ic extends on{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(Ri(e,r.x,s.x,c.x),Ri(e,r.y,s.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dp extends on{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,c=this.v2;return n.set(Ri(e,r.x,s.x,c.x),Ri(e,r.y,s.y,c.y),Ri(e,r.z,s.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rc extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const n=t,r=this.points,s=(r.length-1)*e,c=Math.floor(s),o=s-c,a=r[c===0?c:c-1],l=r[c],h=r[c>r.length-2?r.length-1:c+1],d=r[c>r.length-3?r.length-1:c+2];return n.set(lo(o,a.x,l.x,h.x,d.x),lo(o,a.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var ho=Object.freeze({__proto__:null,ArcCurve:Sp,CatmullRomCurve3:yp,CubicBezierCurve:tc,CubicBezierCurve3:Lp,EllipseCurve:Ps,LineCurve:nc,LineCurve3:Pp,QuadraticBezierCurve:ic,QuadraticBezierCurve3:Dp,SplineCurve:rc});class Up extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ho[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const c=r[s]-n,o=this.curves[s],a=o.getLength(),l=a===0?0:1-c/a;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const c=s[r],o=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,a=c.getPoints(o);for(let l=0;l<a.length;l++){const h=a[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new ho[r.type]().fromJSON(r))}return this}}class Ip extends Up{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new nc(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new ic(this.currentPoint.clone(),new _e(e,t),new _e(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,c){const o=new tc(this.currentPoint.clone(),new _e(e,t),new _e(n,r),new _e(s,c));return this.curves.push(o),this.currentPoint.set(s,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,c){const o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,r,s,c),this}absarc(e,t,n,r,s,c){return this.absellipse(e,t,n,n,r,s,c),this}ellipse(e,t,n,r,s,c,o,a){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,c,o,a),this}absellipse(e,t,n,r,s,c,o,a){const l=new Ps(e,t,n,r,s,c,o,a);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Us extends kt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=St(r,0,Math.PI*2);const s=[],c=[],o=[],a=[],l=[],h=1/t,d=new P,u=new _e,p=new P,g=new P,_=new P;let m=0,f=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.normalize(),a.push(p.x,p.y,p.z);break;case e.length-1:a.push(_.x,_.y,_.z);break;default:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),a.push(p.x,p.y,p.z),_.copy(g)}for(let E=0;E<=t;E++){const S=n+E*h*r,b=Math.sin(S),U=Math.cos(S);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*b,d.y=e[A].y,d.z=e[A].x*U,c.push(d.x,d.y,d.z),u.x=E/t,u.y=A/(e.length-1),o.push(u.x,u.y);const R=a[3*A+0]*b,X=a[3*A+1],y=a[3*A+0]*U;l.push(R,X,y)}}for(let E=0;E<t;E++)for(let S=0;S<e.length-1;S++){const b=S+E*e.length,U=b,A=b+e.length,R=b+e.length+1,X=b+1;s.push(U,A,X),s.push(R,X,A)}this.setIndex(s),this.setAttribute("position",new nt(c,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.points,e.segments,e.phiStart,e.phiLength)}}class Is extends Us{constructor(e=1,t=1,n=4,r=8){const s=new Ip;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Is(e.radius,e.length,e.capSegments,e.radialSegments)}}class Bi extends kt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],c=[],o=[],a=[],l=new P,h=new _e;c.push(0,0,0),o.push(0,0,1),a.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),c.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(c[u]/e+1)/2,h.y=(c[u+1]/e+1)/2,a.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class At extends kt{constructor(e=1,t=1,n=1,r=32,s=1,c=!1,o=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:c,thetaStart:o,thetaLength:a};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),c===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(p,2));function E(){const b=new P,U=new P;let A=0;const R=(t-e)/n;for(let X=0;X<=s;X++){const y=[],w=X/s,q=w*(t-e)+e;for(let N=0;N<=r;N++){const se=N/r,L=se*a+o,G=Math.sin(L),Y=Math.cos(L);U.x=q*G,U.y=-w*n+m,U.z=q*Y,d.push(U.x,U.y,U.z),b.set(G,R,Y).normalize(),u.push(b.x,b.y,b.z),p.push(se,1-w),y.push(g++)}_.push(y)}for(let X=0;X<r;X++)for(let y=0;y<s;y++){const w=_[y][X],q=_[y+1][X],N=_[y+1][X+1],se=_[y][X+1];h.push(w,q,se),h.push(q,N,se),A+=6}l.addGroup(f,A,0),f+=A}function S(b){const U=g,A=new _e,R=new P;let X=0;const y=b===!0?e:t,w=b===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*w,0),u.push(0,w,0),p.push(.5,.5),g++;const q=g;for(let N=0;N<=r;N++){const L=N/r*a+o,G=Math.cos(L),Y=Math.sin(L);R.x=y*Y,R.y=m*w,R.z=y*G,d.push(R.x,R.y,R.z),u.push(0,w,0),A.x=G*.5+.5,A.y=Y*.5*w+.5,p.push(A.x,A.y),g++}for(let N=0;N<r;N++){const se=U+N,L=q+N;b===!0?h.push(L,L+1,se):h.push(L+1,L,se),X+=3}l.addGroup(f,X,b===!0?1:2),f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gt extends At{constructor(e=1,t=1,n=32,r=1,s=!1,c=0,o=Math.PI*2){super(0,e,t,n,r,s,c,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:c,thetaLength:o}}static fromJSON(e){return new Gt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends kt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],c=[];o(r),l(n),h(),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(s.slice(),3)),this.setAttribute("uv",new nt(c,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new P,b=new P,U=new P;for(let A=0;A<t.length;A+=3)p(t[A+0],S),p(t[A+1],b),p(t[A+2],U),a(S,b,U,E)}function a(E,S,b,U){const A=U+1,R=[];for(let X=0;X<=A;X++){R[X]=[];const y=E.clone().lerp(b,X/A),w=S.clone().lerp(b,X/A),q=A-X;for(let N=0;N<=q;N++)N===0&&X===A?R[X][N]=y:R[X][N]=y.clone().lerp(w,N/q)}for(let X=0;X<A;X++)for(let y=0;y<2*(A-X)-1;y++){const w=Math.floor(y/2);y%2===0?(u(R[X][w+1]),u(R[X+1][w]),u(R[X][w])):(u(R[X][w+1]),u(R[X+1][w+1]),u(R[X+1][w]))}}function l(E){const S=new P;for(let b=0;b<s.length;b+=3)S.x=s[b+0],S.y=s[b+1],S.z=s[b+2],S.normalize().multiplyScalar(E),s[b+0]=S.x,s[b+1]=S.y,s[b+2]=S.z}function h(){const E=new P;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const b=m(E)/2/Math.PI+.5,U=f(E)/Math.PI+.5;c.push(b,1-U)}g(),d()}function d(){for(let E=0;E<c.length;E+=6){const S=c[E+0],b=c[E+2],U=c[E+4],A=Math.max(S,b,U),R=Math.min(S,b,U);A>.9&&R<.1&&(S<.2&&(c[E+0]+=1),b<.2&&(c[E+2]+=1),U<.2&&(c[E+4]+=1))}}function u(E){s.push(E.x,E.y,E.z)}function p(E,S){const b=E*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function g(){const E=new P,S=new P,b=new P,U=new P,A=new _e,R=new _e,X=new _e;for(let y=0,w=0;y<s.length;y+=9,w+=6){E.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),b.set(s[y+6],s[y+7],s[y+8]),A.set(c[w+0],c[w+1]),R.set(c[w+2],c[w+3]),X.set(c[w+4],c[w+5]),U.copy(E).add(S).add(b).divideScalar(3);const q=m(U);_(A,w+0,E,q),_(R,w+2,S,q),_(X,w+4,b,q)}}function _(E,S,b,U){U<0&&E.x===1&&(c[S]=E.x-1),b.x===0&&b.z===0&&(c[S]=U/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.vertices,e.indices,e.radius,e.details)}}class li extends Ns{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new li(e.radius,e.detail)}}class Le extends kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,c=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:c,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(c+o,Math.PI);let l=0;const h=[],d=new P,u=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],S=f/n;let b=0;f===0&&c===0?b=.5/t:f===n&&a===Math.PI&&(b=-.5/t);for(let U=0;U<=t;U++){const A=U/t;d.x=-e*Math.cos(r+A*s)*Math.sin(c+S*o),d.y=e*Math.cos(c+S*o),d.z=e*Math.sin(r+A*s)*Math.sin(c+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+b,1-S),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const S=h[f][E+1],b=h[f][E],U=h[f+1][E],A=h[f+1][E+1];(f!==0||c>0)&&p.push(S,b,A),(f!==n-1||a<Math.PI)&&p.push(b,U,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class br extends kt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const c=[],o=[],a=[],l=[],h=new P,d=new P,u=new P;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),a.push(u.x,u.y,u.z),l.push(g/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,E=(r+1)*p+g;c.push(_,m,E),c.push(m,f,E)}this.setIndex(c),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xt extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Os extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Np extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hs=new ut,uo=new P,fo=new P;class sc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;uo.setFromMatrixPosition(e.matrixWorld),t.position.copy(uo),fo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fo),t.updateMatrixWorld(),hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const po=new ut,Ti=new P,us=new P;class Op extends sc{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ti),us.copy(n.position),us.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(us),n.updateMatrixWorld(),r.makeTranslation(-Ti.x,-Ti.y,-Ti.z),po.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po)}}class mo extends Os{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Op}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fp extends sc{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bp extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Fp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=go(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=go();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function go(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ts}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ts);const _o={"Fire>Grass":2,"Fire>Bug":2,"Fire>Fire":.5,"Fire>Water":.5,"Fire>Rock":.5,"Water>Fire":2,"Water>Ground":2,"Water>Rock":2,"Water>Water":.5,"Water>Grass":.5,"Grass>Water":2,"Grass>Ground":2,"Grass>Rock":2,"Grass>Fire":.5,"Grass>Grass":.5,"Grass>Bug":.5,"Grass>Flying":.5,"Electric>Water":2,"Electric>Flying":2,"Electric>Electric":.5,"Electric>Grass":.5,"Electric>Ground":0,"Ground>Electric":2,"Ground>Fire":2,"Ground>Rock":2,"Ground>Grass":.5,"Ground>Flying":0,"Rock>Fire":2,"Rock>Flying":2,"Rock>Bug":2,"Rock>Ground":.5,"Flying>Grass":2,"Flying>Bug":2,"Flying>Electric":.5,"Flying>Rock":.5,"Bug>Grass":2,"Bug>Poison":.5,"Bug>Fire":.5,"Poison>Grass":2,"Poison>Poison":.5,"Poison>Ground":.5,"Normal>Rock":.5};function Gp(i,e,t){let n=1;for(const r of[e,t].filter(Boolean)){const s=`${i}>${r}`;n*=s in _o?_o[s]:1}return n}const nn={tackle:{name:"TACKLE",type:"Normal",power:40,acc:100,pp:35,maxpp:35},scratch:{name:"SCRATCH",type:"Normal",power:40,acc:100,pp:35,maxpp:35},pound:{name:"POUND",type:"Normal",power:40,acc:100,pp:35,maxpp:35},quick:{name:"QUICK ATK",type:"Normal",power:40,acc:100,pp:30,maxpp:30},gust:{name:"GUST",type:"Flying",power:40,acc:100,pp:35,maxpp:35},peck:{name:"PECK",type:"Flying",power:45,acc:100,pp:30,maxpp:30},wing:{name:"WING ATK",type:"Flying",power:60,acc:100,pp:25,maxpp:25},ember:{name:"EMBER",type:"Fire",power:45,acc:100,pp:25,maxpp:25},flame:{name:"FLAMETHROW",type:"Fire",power:90,acc:100,pp:15,maxpp:15},vine:{name:"VINE WHIP",type:"Grass",power:45,acc:100,pp:25,maxpp:25},razor:{name:"RAZOR LEAF",type:"Grass",power:55,acc:95,pp:25,maxpp:25},solar:{name:"SOLARBEAM",type:"Grass",power:120,acc:100,pp:10,maxpp:10},watergun:{name:"WATER GUN",type:"Water",power:45,acc:100,pp:25,maxpp:25},bubble:{name:"BUBBLEBEAM",type:"Water",power:65,acc:100,pp:20,maxpp:20},hydro:{name:"HYDRO PUMP",type:"Water",power:110,acc:80,pp:5,maxpp:5},thunder:{name:"THNDRSHOCK",type:"Electric",power:45,acc:100,pp:30,maxpp:30},thunderbolt:{name:"THUNDERBOLT",type:"Electric",power:90,acc:100,pp:15,maxpp:15},sting:{name:"POISONSTING",type:"Poison",power:35,acc:100,pp:35,maxpp:35},sludge:{name:"SLUDGE",type:"Poison",power:65,acc:100,pp:20,maxpp:20},twineedle:{name:"TWINNEEDLE",type:"Bug",power:50,acc:100,pp:20,maxpp:20},stringshot:{name:"STRING SHOT",type:"Bug",power:0,acc:95,pp:40,maxpp:40,effect:"slow"},harden:{name:"HARDEN",type:"Normal",power:0,acc:100,pp:30,maxpp:30,effect:"def+"},growl:{name:"GROWL",type:"Normal",power:0,acc:100,pp:40,maxpp:40,effect:"atk-"},tailwhip:{name:"TAIL WHIP",type:"Normal",power:0,acc:100,pp:30,maxpp:30,effect:"def-"},leer:{name:"LEER",type:"Normal",power:0,acc:100,pp:30,maxpp:30,effect:"def-"},dig:{name:"DIG",type:"Ground",power:80,acc:100,pp:10,maxpp:10},rockthrow:{name:"ROCK THROW",type:"Rock",power:55,acc:90,pp:15,maxpp:15},rockslide:{name:"ROCK SLIDE",type:"Rock",power:75,acc:90,pp:10,maxpp:10},slam:{name:"SLAM",type:"Normal",power:80,acc:75,pp:20,maxpp:20},bite:{name:"BITE",type:"Normal",power:60,acc:100,pp:25,maxpp:25},hyperfang:{name:"HYPER FANG",type:"Normal",power:80,acc:90,pp:15,maxpp:15},confusion:{name:"CONFUSION",type:"Normal",power:50,acc:100,pp:25,maxpp:25},psybeam:{name:"PSYBEAM",type:"Normal",power:65,acc:100,pp:20,maxpp:20},hyperbeam:{name:"HYPER BEAM",type:"Normal",power:150,acc:90,pp:5,maxpp:5}},Xe={bulbasaur:{name:"BULBASAUR",t1:"Grass",t2:"Poison",color:5025616,accent:3046706,size:1,shape:"frog",hp:45,atk:49,def:49,spd:45,catch:45,xp:64,evo:{at:16,to:"ivysaur"},moves:[[1,"tackle"],[1,"growl"],[7,"vine"],[13,"razor"]]},ivysaur:{name:"IVYSAUR",t1:"Grass",t2:"Poison",color:4431943,accent:1793568,size:1.25,shape:"frog",hp:60,atk:62,def:63,spd:60,catch:45,xp:142,evo:{at:32,to:"venusaur"},moves:[[1,"tackle"],[1,"growl"],[7,"vine"],[13,"razor"],[20,"sludge"]]},venusaur:{name:"VENUSAUR",t1:"Grass",t2:"Poison",color:3706428,accent:12720219,size:1.6,shape:"frog",hp:80,atk:82,def:83,spd:80,catch:45,xp:236,moves:[[1,"vine"],[1,"tackle"],[13,"razor"],[25,"sludge"],[40,"solar"]]},charmander:{name:"CHARMANDER",t1:"Fire",color:16747069,accent:16766287,size:1,shape:"lizard",hp:39,atk:52,def:43,spd:65,catch:45,xp:62,evo:{at:16,to:"charmeleon"},moves:[[1,"scratch"],[1,"growl"],[9,"ember"],[15,"quick"]]},charmeleon:{name:"CHARMELEON",t1:"Fire",color:16011550,accent:16766287,size:1.3,shape:"lizard",hp:58,atk:64,def:58,spd:80,catch:45,xp:142,evo:{at:36,to:"charizard"},moves:[[1,"scratch"],[9,"ember"],[15,"quick"],[24,"slash"in nn?"slash":"slam"]]},charizard:{name:"CHARIZARD",t1:"Fire",t2:"Flying",color:16733986,accent:16761095,size:1.7,shape:"dragon",hp:78,atk:84,def:78,spd:100,catch:45,xp:240,moves:[[1,"ember"],[15,"quick"],[30,"wing"],[46,"flame"]]},squirtle:{name:"SQUIRTLE",t1:"Water",color:4367861,accent:9268835,size:1,shape:"turtle",hp:44,atk:48,def:65,spd:43,catch:45,xp:63,evo:{at:16,to:"wartortle"},moves:[[1,"tackle"],[1,"tailwhip"],[8,"watergun"],[15,"bite"]]},wartortle:{name:"WARTORTLE",t1:"Water",color:2001125,accent:9489145,size:1.3,shape:"turtle",hp:59,atk:63,def:80,spd:58,catch:45,xp:142,evo:{at:36,to:"blastoise"},moves:[[1,"watergun"],[15,"bite"],[24,"bubble"]]},blastoise:{name:"BLASTOISE",t1:"Water",color:1402304,accent:11583173,size:1.65,shape:"turtle",hp:79,atk:83,def:100,spd:78,catch:45,xp:239,moves:[[1,"watergun"],[24,"bubble"],[42,"hydro"]]},pidgey:{name:"PIDGEY",t1:"Normal",t2:"Flying",color:10586239,accent:16763432,size:.9,shape:"bird",hp:40,atk:45,def:40,spd:56,catch:255,xp:50,evo:{at:18,to:"pidgeotto"},moves:[[1,"tackle"],[5,"gust"],[9,"quick"]]},pidgeotto:{name:"PIDGEOTTO",t1:"Normal",t2:"Flying",color:9268835,accent:16763432,size:1.2,shape:"bird",hp:63,atk:60,def:55,spd:71,catch:120,xp:122,moves:[[1,"gust"],[9,"quick"],[20,"wing"],[30,"quick"]]},rattata:{name:"RATTATA",t1:"Normal",color:10387166,accent:16119285,size:.85,shape:"mouse",hp:30,atk:56,def:35,spd:72,catch:255,xp:51,evo:{at:20,to:"raticate"},moves:[[1,"tackle"],[1,"tailwhip"],[7,"quick"],[14,"bite"]]},raticate:{name:"RATICATE",t1:"Normal",color:8280002,accent:16773494,size:1.2,shape:"mouse",hp:55,atk:81,def:60,spd:97,catch:127,xp:145,moves:[[1,"quick"],[14,"bite"],[25,"hyperfang"]]},pikachu:{name:"PIKACHU",t1:"Electric",color:16771899,accent:15022389,size:.95,shape:"mouse",hp:35,atk:55,def:40,spd:90,catch:190,xp:105,evo:{item:"thunderstone",to:"raichu"},moves:[[1,"scratch"],[1,"growl"],[6,"thunder"],[12,"quick"]]},raichu:{name:"RAICHU",t1:"Electric",color:16752640,accent:16777215,size:1.25,shape:"mouse",hp:60,atk:90,def:55,spd:110,catch:75,xp:214,moves:[[1,"thunder"],[12,"quick"],[30,"thunderbolt"]]},caterpie:{name:"CATERPIE",t1:"Bug",color:9159498,accent:16733986,size:.8,shape:"worm",hp:45,atk:30,def:35,spd:45,catch:255,xp:39,evo:{at:7,to:"metapod"},moves:[[1,"tackle"],[1,"stringshot"]]},metapod:{name:"METAPOD",t1:"Bug",color:6856504,accent:3369246,size:.9,shape:"cocoon",hp:50,atk:20,def:55,spd:30,catch:120,xp:72,evo:{at:10,to:"butterfree"},moves:[[1,"harden"]]},butterfree:{name:"BUTTERFREE",t1:"Bug",t2:"Flying",color:8069026,accent:9489145,size:1.15,shape:"butterfly",hp:60,atk:45,def:50,spd:70,catch:45,xp:178,moves:[[1,"confusion"],[12,"gust"],[20,"psybeam"]]},weedle:{name:"WEEDLE",t1:"Bug",t2:"Poison",color:10586239,accent:15277667,size:.8,shape:"worm",hp:40,atk:35,def:30,spd:50,catch:255,xp:39,evo:{at:7,to:"kakuna"},moves:[[1,"sting"]]},kakuna:{name:"KAKUNA",t1:"Bug",t2:"Poison",color:16498733,accent:6111287,size:.9,shape:"cocoon",hp:45,atk:25,def:50,spd:35,catch:120,xp:72,evo:{at:10,to:"beedrill"},moves:[[1,"harden"]]},beedrill:{name:"BEEDRILL",t1:"Bug",t2:"Poison",color:16766287,accent:2171169,size:1.15,shape:"bee",hp:65,atk:90,def:40,spd:75,catch:45,xp:178,moves:[[1,"peck"],[15,"twineedle"],[25,"sludge"]]},nidoran:{name:"NIDORAN",t1:"Poison",color:12216520,accent:4854924,size:.9,shape:"mouse",hp:46,atk:57,def:40,spd:50,catch:235,xp:59,moves:[[1,"scratch"],[8,"sting"],[14,"bite"]]},geodude:{name:"GEODUDE",t1:"Rock",t2:"Ground",color:10395294,accent:6111287,size:1,shape:"rock",hp:40,atk:80,def:100,spd:20,catch:255,xp:60,moves:[[1,"tackle"],[11,"rockthrow"],[20,"dig"]]},onix:{name:"ONIX",t1:"Rock",t2:"Ground",color:9276813,accent:4342338,size:2,shape:"snake",hp:35,atk:45,def:160,spd:70,catch:45,xp:151,moves:[[1,"tackle"],[15,"rockthrow"],[25,"rockslide"],[33,"dig"]]}};nn.slash=nn.slam;const fs=Object.keys(Xe),Hp=["bulbasaur","charmander","squirtle"],vo={route1:[{sp:"pidgey",lv:[3,5],w:30},{sp:"rattata",lv:[3,5],w:30},{sp:"caterpie",lv:[3,4],w:15},{sp:"weedle",lv:[3,4],w:15},{sp:"pikachu",lv:[4,5],w:7},{sp:"nidoran",lv:[4,5],w:3}],viridian:[{sp:"pidgey",lv:[5,8],w:25},{sp:"rattata",lv:[5,8],w:25},{sp:"caterpie",lv:[5,6],w:10},{sp:"weedle",lv:[5,6],w:10},{sp:"pikachu",lv:[6,8],w:12},{sp:"nidoran",lv:[6,8],w:10},{sp:"geodude",lv:[6,7],w:8}]};function kp(i){const e=vo[i]||vo.route1,t=e.reduce((r,s)=>r+s.w,0);let n=Math.random()*t;for(const r of e)if(n-=r.w,n<=0){const s=r.lv[0]+Math.floor(Math.random()*(r.lv[1]-r.lv[0]+1));return{species:r.sp,level:s}}return{species:"pidgey",level:4}}function Es(i,e){const t=Xe[i];return{maxhp:Math.floor((t.hp+15)*2*e/100)+e+10,atk:Math.floor((t.atk+15)*2*e/100)+5,def:Math.floor((t.def+15)*2*e/100)+5,spd:Math.floor((t.spd+15)*2*e/100)+5}}function Vp(i,e){const t=Xe[i],n=[];for(const[s,c]of t.moves)s<=e&&n.push(c);const r=[...new Set(n)].slice(-4);return r.length?r:["tackle"]}function si(i,e){const t=Es(i,e);return{uid:Math.random().toString(36).slice(2),species:i,level:e,xp:e*e*e,...t,hp:t.maxhp,moves:Vp(i,e).map(n=>({id:n,pp:nn[n].pp})),stages:{atk:0,def:0,spd:0}}}function dr(i){return i*i*i}function Wp(i,e,t,n,r,s){const c=(2*n/5+2)*t*(i/e)/50+2,o=r*s*(.85+Math.random()*.15);return Math.max(1,Math.floor(c*o))}const dt=2,wt=48,It=48,rt=i=>(i-wt/2+.5)*dt,st=i=>(i-It/2+.5)*dt,wi=i=>Math.floor(i/dt+wt/2),pr=i=>Math.floor(i/dt+It/2);function Xp(){return[[16,19,21,26],[26,19,31,26],[15,15,21,17],[26,15,32,17],[8,6,10,12],[37,6,40,12]]}function qp(i,e){return i>=22&&i<=25&&e>=18&&e<=26?!1:Xp().some(([t,n,r,s])=>i>=t&&i<=r&&e>=n&&e<=s)}function Yp(i,e){return e>=14?"route1":"viridian"}function $p(i,e){return e>=28?"PALLET TOWN":e>=14?"ROUTE 1":"VIRIDIAN CITY"}function xo(i){const e=Xe[i],t=new Yt,n=u=>new xt({color:u,roughness:.7}),r=n(e.color),s=n(e.accent),c=n(2236962),o=n(16777215),a=e.size,l=(u,p,g=0,_=0,m=0,f=0,E=0,S=0)=>{const b=new $e(u,p);return b.position.set(g,_,m),b.rotation.set(f,E,S),b.castShadow=!0,t.add(b),b},h=(u=.7*a)=>l(new Le(.55*a,14,12),r,0,u,0);switch(e.shape){case"frog":{h(),l(new Le(.42*a,12,10),r,0,1.25*a,.1),l(new Le(.14*a,8,8),o,-.2*a,1.4*a,.42*a),l(new Le(.14*a,8,8),o,.2*a,1.4*a,.42*a),l(new Le(.06*a,6,6),c,-.2*a,1.42*a,.54*a),l(new Le(.06*a,6,6),c,.2*a,1.42*a,.54*a),l(new At(.3*a,.42*a,.25*a,10),s,0,1.62*a,-.1);for(const u of[-1,1])l(new At(.13*a,.16*a,.5*a,8),r,u*.55*a,.35*a,.1),l(new At(.13*a,.16*a,.5*a,8),r,u*.55*a,.35*a,-.35);t.userData.ears=[];break}case"lizard":case"dragon":{h(.75*a),l(new Le(.4*a,12,10),r,0,1.3*a,.15),l(new Gt(.16*a,.4*a,8),o,-.16*a,1.05*a,.5),l(new Le(.13*a,8,8),o,-.18*a,1.45*a,.4*a),l(new Le(.13*a,8,8),o,.18*a,1.45*a,.4*a),l(new Le(.06*a,6,6),c,-.18*a,1.47*a,.5*a),l(new Le(.06*a,6,6),c,.18*a,1.47*a,.5*a),l(new Gt(.18*a,1.1*a,8),r,0,.6*a,-.8*a,-1.9,0,0);const u=l(new Gt(.14*a,.4*a,8),n(16766287),0,.75*a,-1.35*a);if(u.material.emissive=new Ye(16739584),u.material.emissiveIntensity=.8,t.userData.flame=u,e.shape==="dragon")for(const p of[-1,1])l(new Kt(.9*a,.5*a),new xt({color:9489145,side:Dt}),p*.55*a,1.1*a,-.3,0,p*.5,0);for(const p of[-1,1])l(new At(.12*a,.15*a,.55*a,8),r,p*.5*a,.35*a,0);break}case"turtle":{h(.7*a);const u=new xt({color:e.accent,roughness:.7,side:Dt}),p=new $e(new Le(.62*a,14,12,0,Math.PI*2,0,Math.PI/2.2),u);if(p.position.set(0,.85*a,-.12),p.castShadow=!0,t.add(p),l(new Le(.38*a,12,10),r,0,1.25*a,.25),l(new Le(.12*a,8,8),o,-.16*a,1.38*a,.55*a),l(new Le(.12*a,8,8),o,.16*a,1.38*a,.55*a),l(new Le(.05*a,6,6),c,-.16*a,1.4*a,.65*a),l(new Le(.05*a,6,6),c,.16*a,1.4*a,.65*a),e.name==="BLASTOISE")for(const g of[-1,1])l(new At(.16*a,.2*a,.7*a,10),n(11583173),g*.5*a,1*a,-.5,1.2,0,g*.4);break}case"bird":{h(.8*a),l(new Le(.36*a,12,10),r,0,1.35*a,.15),l(new Gt(.12*a,.35*a,8),s,0,1.32*a,.6*a,Math.PI/2,0,0),l(new Le(.1*a,8,8),c,-.14*a,1.45*a,.42*a),l(new Le(.1*a,8,8),c,.14*a,1.45*a,.42*a);const u=l(new Kt(.9*a,.45*a),new xt({color:e.color,side:Dt}),-.6*a,1*a,0),p=l(new Kt(.9*a,.45*a),new xt({color:e.color,side:Dt}),.6*a,1*a,0);t.userData.wings=[u,p],l(new Gt(.16*a,.6*a,6),s,0,.8*a,-.7*a,-1.8,0,0);break}case"mouse":{h(.65*a),l(new Le(.4*a,12,10),r,0,1.2*a,.1);const u=l(new Gt(.16*a,.45*a,6),s,-.28*a,1.65*a,0),p=l(new Gt(.16*a,.45*a,6),s,.28*a,1.65*a,0);t.userData.ears=[u,p],l(new Le(.09*a,8,8),c,-.14*a,1.28*a,.45*a),l(new Le(.09*a,8,8),c,.14*a,1.28*a,.45*a),l(new Le(.07*a,8,8),n(15022389),0,1.12*a,.48*a);const g=l(new At(.05*a,.08*a,1*a,6),s,.4*a,.7*a,-.4,0,0,1.1);if(t.userData.tail=g,e.name==="PIKACHU"||e.name==="RAICHU")for(const _ of[-1,1])l(new Le(.12*a,8,8),n(15022389),_*.38*a,1.18*a,.25*a);break}case"worm":{for(let u=0;u<4;u++)l(new Le((.42-u*.06)*a,10,8),u%2?s:r,0,.5*a,(-.6+u*.4)*a);l(new Le(.16*a,8,8),c,-.15*a,.75*a,.75*a),l(new Le(.16*a,8,8),c,.15*a,.75*a,.75*a),l(new Gt(.1*a,.35*a,6),s,0,.9*a,.75*a);break}case"cocoon":{l(new Is(.45*a,.7*a,6,12),r,0,.8*a,0),l(new br(.3*a,.07*a,8,14),s,0,1*a,0,Math.PI/2,0,0),l(new Le(.1*a,8,8),c,0,1.2*a,.4*a);break}case"butterfly":case"bee":{h(.7*a),l(new Le(.3*a,10,8),c,0,1.2*a,.1),l(new Le(.16*a,8,8),c,-.12*a,1.45*a,.2*a),l(new Le(.16*a,8,8),c,.12*a,1.45*a,.2*a);const u=new xt({color:e.shape==="bee"?14808574:9489145,side:Dt,transparent:!0,opacity:.95}),p=l(new Kt(.8*a,.6*a),u,-.5*a,1.2*a,-.1),g=l(new Kt(.8*a,.6*a),u,.5*a,1.2*a,-.1);t.userData.wings=[p,g],e.shape==="bee"&&l(new Gt(.12*a,.4*a,8),c,0,.6*a,-.7*a,-1.9,0,0);break}case"rock":{l(new li(.6*a),r,0,.7*a,0),l(new li(.3*a),s,.4*a,1.1*a,.2),l(new Le(.14*a,8,8),o,-.18*a,.85*a,.5*a),l(new Le(.14*a,8,8),o,.18*a,.85*a,.5*a),l(new Le(.06*a,6,6),c,-.18*a,.87*a,.6*a),l(new Le(.06*a,6,6),c,.18*a,.87*a,.6*a);for(const u of[-1,1])l(new li(.28*a),r,u*.65*a,.5*a,0);break}case"snake":{for(let u=0;u<6;u++)l(new li((.55-u*.05)*a),u%2?s:r,0,.6*a+u*.5*a,-Math.sin(u*.8)*.4*a);l(new Le(.14*a,8,8),o,-.15*a,3.2*a,.4*a),l(new Le(.14*a,8,8),o,.15*a,3.2*a,.4*a);break}default:h()}const d=new $e(new Bi(.6*a,16),new Fi({color:0,transparent:!0,opacity:.25}));return d.rotation.x=-Math.PI/2,d.position.y=.02,t.add(d),t.userData.baseY=0,t}function Mo({shirt:i=3635,pants:e=2241450,skin:t=16764057,cap:n=3635,hair:r=2236962}={}){const s=new Yt,c=l=>new xt({color:l,roughness:.8}),o=(l,h,d=0,u=0,p=0)=>{const g=new $e(l,h);return g.position.set(d,u,p),g.castShadow=!0,s.add(g),g};o(new qt(.55,.6,.35),c(e),0,.3,0),o(new qt(.6,.65,.4),c(i),0,.92,0),o(new qt(.18,.5,.18),c(t),-.4,.9,0),o(new qt(.18,.5,.18),c(t),.4,.9,0),o(new Le(.28,12,10),c(t),0,1.5,0),o(new qt(.34,.16,.06),c(r),0,1.52,.25),o(new At(.3,.3,.16,12),c(n),0,1.72,0),o(new qt(.3,.06,.3),c(n),0,1.66,.32),o(new Le(.09,8,8),c(16777215),0,1.82,0);const a=new $e(new Bi(.5,14),new Fi({color:0,transparent:!0,opacity:.25}));return a.rotation.x=-Math.PI/2,a.position.y=.02,s.add(a),s.userData.armL=s.children[2],s.userData.armR=s.children[3],s}function Kp(i){const e=new ec({canvas:i,antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.shadowMap.enabled=!0,e.shadowMap.type=yo;const t=new xp;t.background=new Ye(8900331),t.fog=new Ls(8900331,60,160);const n=new Ht(55,innerWidth/innerHeight,.1,500);t.add(new Np(12575743,4160819,.95));const r=new Bp(16774872,1.6);r.position.set(40,60,20),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.left=-60,r.shadow.camera.right=60,r.shadow.camera.top=60,r.shadow.camera.bottom=-60,t.add(r);const s=Array.from({length:wt},()=>Array(It).fill(!1)),c=(x,I,C,z)=>{for(let O=x;O<=C;O++)for(let ie=I;ie<=z;ie++)O>=0&&ie>=0&&O<wt&&ie<It&&(s[O][ie]=!0)},o=Ue(),a=new $e(new Kt(wt*dt,It*dt),new xt({map:o,roughness:1}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,t.add(a);const l=new Yt;t.add(l);const h=[],d=(x,I=.85)=>new xt({color:x,roughness:I});function u(x,I,C,z,O,ie,ne,M=0){const v=new $e(new qt(x,I,C),d(z));return v.position.set(O,ie,ne),v.rotation.y=M,v.castShadow=!0,v.receiveShadow=!0,l.add(v),v}function p(x,I,C=1){const z=rt(x),O=st(I),ie=new $e(new At(.22*C,.3*C,1.4*C,8),d(7162945));ie.position.set(z,.7*C,O),ie.castShadow=!0,l.add(ie);const ne=new $e(new Gt(1.2*C,1.8*C,8),d(3046706));ne.position.set(z,2*C,O),ne.castShadow=!0,l.add(ne);const M=new $e(new Gt(.85*C,1.3*C,8),d(3706428));M.position.set(z,3*C,O),M.castShadow=!0,l.add(M),c(x,I,x,I)}function g(x,I){u(dt*.95,.7,.18,9268835,rt(x),.35,st(I)),c(x,I,x,I)}function _(x,I){const C=rt(x),z=st(I),O=new $e(new At(.09,.12,3,8),d(3622735));O.position.set(C,1.5,z),O.castShadow=!0,l.add(O);const ie=new $e(new Le(.32,10,8),new xt({color:16775620,emissive:16771899,emissiveIntensity:.7}));ie.position.set(C,3.1,z),l.add(ie)}function m(x,I,C){const z=new $e(new Le(.16,6,5),d(C,.6));z.position.set(rt(x)+(Math.random()-.5),.18,st(I)+(Math.random()-.5)),l.add(z)}function f(x,I){const C=new Yt,z=new xt({color:3112234,side:Dt,roughness:1});for(let O=0;O<3;O++){const ie=new $e(new Kt(.9,.8),z);ie.position.set((Math.random()-.5)*.8,.4,(Math.random()-.5)*.8),ie.rotation.y=O*Math.PI/3,C.add(ie)}C.position.set(rt(x),0,st(I)),l.add(C),h.push(C)}function E(x,I,C,z,O,ie){const ne=rt(x+(C-1)/2),M=st(I+(z-1)/2);u(C*dt,2.6,z*dt,O,ne,1.3,M);const v=new $e(new At(.01,C*dt*.78,1.6,4,1),d(ie));return v.position.set(ne,3.4,M),v.rotation.y=Math.PI/4,v.scale.set(1,1,z/C*1),v.castShadow=!0,l.add(v),u(1.1,1.8,.15,5125166,ne,.9,M+z*dt/2+.02),u(1,1,.15,11789820,ne-2,1.6,M+z*dt/2+.02),u(1,1,.15,11789820,ne+2,1.6,M+z*dt/2+.02),c(x,I,x+C-1,I+z-1),{x:ne,z:M,w:C*dt,d:z*dt}}function S(x,I,C){u(.7,1,.18,6111287,rt(x),.5,st(I));const z=u(.9,.6,.1,16775620,rt(x),1.1,st(I));z.userData.sign=C}for(let x=0;x<wt;x++)for(const I of[0,1,It-2,It-1])p(x,I,1.1);for(let x=0;x<It;x++)for(const I of[0,1,wt-2,wt-1])p(I,x,1.1);c(0,0,wt-1,1),c(0,It-2,wt-1,It-1),c(0,0,1,It-1),c(wt-2,0,wt-1,It-1);for(let x=14;x<=27;x++){for(const I of[13,14,33,34])I>=22&&I<=25||p(I,x,.9);x%3===0&&(p(8+x%5,x,.8),p(39-x%4,x,.8))}for(let x=2;x<It-2;x++)for(let I=22;I<=25;I++)s[I][x]=!1;E(16,35,4,3,16119285,15022389),E(19,35,3,3,14938877,2001125),E(28,37,5,4,16774112,3046706),E(16,5,5,4,16777215,15022389),E(28,5,4,3,2001125,16771899),E(27,10,6,4,11583173,3622735);const b=(x,I,C)=>{const z=new $e(new Kt(2,1.2),new xt({color:x}));z.rotation.x=-Math.PI/2,z.position.set(I,.02,C),t.add(z)};b(15022389,rt(18),st(9)+2.2),b(2001125,rt(30),st(8)+2),b(16771899,rt(30),st(14)+2.4),S(21,33,`PALLET TOWN
Shades of your journey await!`),S(21,27,`ROUTE 1
Tall grass: wild POKéMON!`),S(24,13,`VIRIDIAN CITY
Gym Leader BROCK awaits!`),S(26,9,`VIRIDIAN GYM
Rock-solid trainer!`);for(let x=15;x<=21;x++)g(x,34);for(let x=27;x<=33;x++)g(x,34);_(22,32),_(25,32),_(22,14),_(25,14),_(20,9),_(29,9);for(let x=0;x<40;x++)m(15+Math.floor(Math.random()*20),35+Math.floor(Math.random()*6),[16732754,16771899,16777215][x%3]);c(5,42,14,46),c(6,5,10,8);const U=new xt({color:2733814,transparent:!0,opacity:.85,roughness:.2}),A=new $e(new Bi(5,20),U);A.rotation.x=-Math.PI/2,A.position.set(rt(9),.05,st(44)),t.add(A);const R=new $e(new Kt(5*dt,4*dt),U.clone());R.rotation.x=-Math.PI/2,R.position.set(rt(8),.05,st(6.5)),t.add(R);for(const[x,I,C,z]of Te())for(let O=x;O<=C;O++)for(let ie=I;ie<=z;ie++)O>=22&&O<=25&&ie>=18&&ie<=26||Math.random()<.55&&f(O,ie);const X=[];for(let x=0;x<8;x++){const I=new Yt;for(let C=0;C<3;C++){const z=new $e(new Le(2+Math.random()*2,8,6),new Fi({color:16777215,transparent:!0,opacity:.85}));z.position.set(C*3-3,Math.random(),0),I.add(z)}I.position.set((Math.random()-.5)*120,28+Math.random()*8,(Math.random()-.5)*120),t.add(I),X.push(I)}const y=[];function w(x,I,C,z,O,ie={}){const ne=Mo(z);ne.position.set(rt(I),0,st(C)),t.add(ne);const M={name:x,mesh:ne,gx:I,gz:C,dialog:O,face:0,wander:ie.wander||0,baseX:rt(I),baseZ:st(C),t:Math.random()*9,id:ie.id||x,extra:ie};return ie.noBlock||(s[I][C]=!0),y.push(M),M}w("MOM",17,34,{shirt:15277667,pants:4854924,cap:15277667},{},{id:"mom"}),w("OAK",30,36,{shirt:16777215,pants:7951688,cap:10395294,hair:10395294},{},{id:"oak"}),w("BLUE",26,32,{shirt:2001125,pants:2171169,cap:2001125},{},{id:"rival"}),w("NURSE",18,9,{shirt:16777215,pants:16027569,cap:16777215},{},{id:"nurse",noBlock:!0}),w("CLERK",30,8,{shirt:16750592,pants:3622735,cap:16750592},{},{id:"clerk",noBlock:!0}),w("BROCK",30,14,{shirt:16750592,pants:5125166,cap:5125166,skin:13010498},{},{id:"brock"}),w("KID",26,39,{shirt:5025616,pants:1793568,cap:16771899},{},{wander:3,id:"kid"}),w("GRANNY",24,7,{shirt:10233776,pants:2171169,cap:10233776},{},{wander:2,id:"granny"});const q=y.find(x=>x.id==="oak"),N=Mo({shirt:3635,pants:2241450,cap:3635});N.position.set(rt(23),0,st(41)),t.add(N);const se=new mo(16773808,0,18);se.position.set(0,4,0),N.add(se);const L=new Yt;L.position.set(0,220,0),t.add(L);const G=new $e(new At(14,16,2,24),new xt({color:14267266}));G.receiveShadow=!0,L.add(G);const Y=new $e(new br(10,.5,10,32),new xt({color:15022389}));Y.rotation.x=Math.PI/2,Y.position.y=1.1,L.add(Y);const K=new Yt;K.position.set(0,1,-6),L.add(K);const J=new Yt;J.position.set(0,1,6),L.add(J);const j=new mo(16777215,2,60);j.position.set(0,12,0),L.add(j);for(const[x,I,C]of[[-6,0,15022389],[6,0,16777215]]){const z=new $e(new At(1.4,1.8,1,12),new xt({color:C}));z.position.set(x,1.5,I),z.castShadow=!0,L.add(z);const O=new $e(new Le(.55,12,10),new xt({color:15022389,roughness:.3}));O.position.set(x,2.3,I),O.castShadow=!0,L.add(O);const ie=new $e(new At(.57,.57,.18,12),new xt({color:2236962}));ie.position.set(x,2.3,I),L.add(ie)}let Z=null,ae=null;function le(x,I){V(),x&&(Z=xo(x),Z.position.copy(K.position),Z.rotation.y=0,Z.scale.multiplyScalar(1.6),L.add(Z)),I&&(ae=xo(I),ae.position.copy(J.position),ae.rotation.y=Math.PI,ae.scale.multiplyScalar(1.6),L.add(ae))}function V(){for(const x of[Z,ae])x&&L.remove(x);Z=ae=null}const ee={yaw:0,dist:11,h:7,battle:!1},de=new P;function Se(x,I,C,z){if(z){const M=performance.now()/1e3,v=Math.sin(M*.25)*10,H=14+Math.cos(M*.25)*3;n.position.set(v,228,H),n.lookAt(0,222.5,0);return}const O=ee,ie=I-Math.sin(O.yaw)*O.dist,ne=C-Math.cos(O.yaw)*O.dist;n.position.lerp(new P(ie,O.h,ne),Math.min(1,x*5)),de.set(I,1.5,C),n.lookAt(de),r.position.set(I+40,60,C+20),r.target.position.set(I,0,C),r.target.updateMatrixWorld()}const Me=new zp;function Pe(x,I,C,z){for(let O=0;O<h.length;O+=2){const ie=h[O];ie.rotation.y=Math.sin(I*2+O)*.15}for(const O of X)O.position.x+=x*1.2,O.position.x>80&&(O.position.x=-80);A.position.y=.05+Math.sin(I*2)*.02;for(const O of y){O.t+=x,O.mesh.position.y=Math.abs(Math.sin(O.t*3))*.06,O.mesh.rotation.y=O.face+Math.sin(O.t*.7)*.15,O.wander&&!z&&(O.mesh.position.x=O.baseX+Math.sin(O.t*.3)*O.wander,O.mesh.position.z=O.baseZ+Math.cos(O.t*.23)*O.wander);const ie=O.mesh.userData.armL,ne=O.mesh.userData.armR;ie&&(ie.rotation.x=Math.sin(O.t*3)*.4,ne.rotation.x=-Math.sin(O.t*3)*.4)}if(C){const O=Math.sin(I*10);N.userData.armL.rotation.x=O*.8,N.userData.armR.rotation.x=-O*.8}else N.userData.armL.rotation.x*=.9,N.userData.armR.rotation.x*=.9;for(const O of[Z,ae])if(O){if(O.position.y=1+Math.abs(Math.sin(I*3+O.position.x))*.35,O.userData.wings)for(const ie of O.userData.wings)ie.rotation.y=Math.sin(I*12)*.5;O.userData.flame&&O.userData.flame.scale.setScalar(1+Math.sin(I*9)*.15)}}function Ue(){const I=document.createElement("canvas");I.width=I.height=1024;const C=I.getContext("2d"),z=1024/wt;for(let ne=0;ne<wt;ne++)for(let M=0;M<It;M++){let v=(ne+M)%2===0?"#66b455":"#5fae4e";ne>=22&&ne<=25&&(v="#d9b382"),M>=34&&M<=42&&ne>=14&&ne<=34&&!(ne>=22&&ne<=25)&&(v=(ne+M)%2?"#7cc45e":"#74bd58"),M>=4&&M<=13&&ne>=14&&ne<=34&&!(ne>=22&&ne<=25)&&(v=(ne+M)%2?"#7cc45e":"#74bd58"),C.fillStyle=v,C.fillRect(ne*z,M*z,z+1,z+1)}const O=[[16,19,21,26],[26,19,31,26],[15,15,21,17],[26,15,32,17],[8,6,10,12],[37,6,40,12]];for(const[ne,M,v,H]of O)for(let te=ne;te<=v;te++)for(let Q=M;Q<=H;Q++)te>=22&&te<=25&&Q>=18&&Q<=26||(C.fillStyle="#3d8b36",C.fillRect(te*z,Q*z,z+1,z+1),C.fillStyle="#4da543",C.fillRect(te*z+z*.2,Q*z+z*.2,z*.6,z*.6));C.fillStyle="#cfcfcf";for(let ne=22;ne<=25;ne++)for(let M=34;M<=42;M+=2)C.fillRect(ne*z+4,M*z+4,z-8,z-8);const ie=new Mp(I);return ie.colorSpace=Mt,ie.anisotropy=4,ie}function Te(){return[[16,19,21,26],[26,19,31,26],[15,15,21,17],[26,15,32,17],[8,6,10,12],[37,6,40,12]]}function F(){n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix(),e.setSize(innerWidth,innerHeight)}return addEventListener("resize",F),F(),{scene:t,camera:n,renderer:e,blocked:s,npcs:y,oakBlock:q,player:N,rig:ee,updateCamera:Se,animate:Pe,clock:Me,setBattleModels:le,clearBattleModels:V,foeAnchor:K,meAnchor:J,arena:L,grassTufts:h,isBlockedAt(x,I){var O;const C=wi(x),z=pr(I);if(C<2||z<2||C>wt-3||z>wt-3)return!0;for(let ie=C-1;ie<=C+1;ie++)for(let ne=z-1;ne<=z+1;ne++)if((O=s[ie])!=null&&O[ne]){const M=rt(ie),v=st(ne);if(Math.abs(x-M)<dt*.72&&Math.abs(I-v)<dt*.72)return!0}for(const ie of y){if(ie.id==="nurse"||ie.id==="clerk")continue;const ne=x-ie.mesh.position.x,M=I-ie.mesh.position.z;if(ne*ne+M*M<.8)return!0}return!1}}}let bi=null,Li=!1;function Jp(){return Li}function Zp(){return Li=!Li,Li}function ac(){return bi||(bi=new(window.AudioContext||window.webkitAudioContext)),bi.state==="suspended"&&bi.resume(),bi}function it(i,e,t,n="square",r=.12){if(!Li)try{const s=ac(),c=s.createOscillator(),o=s.createGain();c.type=n,c.frequency.value=i,o.gain.setValueAtTime(r,s.currentTime+e),o.gain.exponentialRampToValueAtTime(.001,s.currentTime+e+t),c.connect(o),o.connect(s.destination),c.start(s.currentTime+e),c.stop(s.currentTime+e+t+.02)}catch{}}const qe={blip(){it(660,0,.07)},confirm(){it(523,0,.08),it(784,.08,.12)},back(){it(392,0,.1)},hit(){it(160,0,.18,"sawtooth",.2),it(90,.02,.2,"square",.18)},superhit(){it(220,0,.1,"sawtooth",.2),it(140,.1,.2,"sawtooth",.22)},faint(){for(let i=0;i<6;i++)it(500-i*70,i*.09,.1)},ball(){it(700,0,.08),it(500,.1,.08),it(300,.2,.15)},catch_(){[523,659,784,1046].forEach((i,e)=>it(i,e*.1,.12))},run(){for(let i=0;i<4;i++)it(800+i*150,i*.06,.06)},heal(){[392,523,659,784].forEach((i,e)=>it(i,e*.09,.14,"triangle",.15))},encounter(){it(196,0,.12,"sawtooth",.2),it(262,.12,.12,"sawtooth",.2),it(392,.24,.3,"square",.18)},levelup(){[523,659,784,1046,1318].forEach((i,e)=>it(i,e*.08,.12))},evo(){for(let i=0;i<8;i++)it(400+i*120,i*.1,.1,"triangle",.15)},badge(){[523,523,523,659,784,1046].forEach((i,e)=>it(i,e*.12,.15))},buy(){it(880,0,.08),it(1174,.08,.15)},error(){it(180,0,.2,"square",.15)}};function ai(){try{ac()}catch{}}function hr(i){return i>=0?(2+i)/2:2/(2-i)}class jp{constructor({myParty:e,foeParty:t,isWild:n,isTrainer:r,trainerName:s,onMsg:c,onUpdate:o,onEnd:a,canCatch:l=!0}){this.myParty=e,this.foeParty=t,this.isWild=n,this.isTrainer=r,this.trainerName=s||"",this.onMsg=c,this.onUpdate=o,this.onEnd=a,this.canCatch=l&&n,this.mi=0,this.fi=0,this.me=e[0],this.foe=t[0],this.over=!1,this.busy=!1,this.rewards={xp:0,money:0}}alive(e){return e.hp>0}firstAlive(e){return e.findIndex(t=>t.hp>0)}async msg(e,t=1100){this.onMsg(e),await new Promise(n=>setTimeout(n,t))}hpFrac(e){return Math.max(0,e.hp/e.maxhp)}async start(){this.onUpdate(),this.isTrainer?await this.msg(`${this.trainerName} wants to battle!`,1300):await this.msg(`A wild ${Xe[this.foe.species].name} appeared!`,1300),await this.msg(`Go! ${Xe[this.me.species].name}!`),this.onUpdate()}foeChooseMove(){const e=this.foe.moves.filter(n=>n.pp>0),t=e.length?e:this.foe.moves;return t[Math.floor(Math.random()*t.length)]}async useMove(e,t,n,r){const s=nn[n.id];n.pp>0&&n.pp--;const c=Xe[e.species].name;if(await this.msg(`${c} used ${s.name}!`,800),s.effect&&s.power===0){s.effect==="def+"&&(e.stages.def=Math.min(6,e.stages.def+1),await this.msg(`${c}'s DEFENSE rose!`)),s.effect==="atk-"&&(t.stages.atk=Math.max(-6,t.stages.atk-1),await this.msg(`${Xe[t.species].name}'s ATTACK fell!`)),s.effect==="def-"&&(t.stages.def=Math.max(-6,t.stages.def-1),await this.msg(`${Xe[t.species].name}'s DEFENSE fell!`)),s.effect==="slow"&&(t.stages.spd=Math.max(-6,t.stages.spd-1),await this.msg(`${Xe[t.species].name} is slowed!`)),this.onUpdate();return}if(Math.random()*100>s.acc){await this.msg("But it missed!"),qe.back(),this.onUpdate();return}const o=s.type===Xe[e.species].t1||s.type===Xe[e.species].t2?1.5:1,a=Gp(s.type,Xe[t.species].t1,Xe[t.species].t2),l=e.atk*hr(e.stages.atk),h=t.def*hr(t.stages.def),d=Wp(l,h,s.power,e.level,o,a);t.hp=Math.max(0,t.hp-d),a===0?await this.msg("It doesn't affect enemy..."):a>1?(await this.msg(`Super effective! (-${d})`,700),qe.superhit()):a<1?(await this.msg(`Not very effective... (-${d})`,700),qe.hit()):(await this.msg(`Hit for ${d}!`,650),qe.hit()),this.flashFoe(!r),this.onUpdate(),t.hp<=0&&(qe.faint(),await this.msg(`${Xe[t.species].name} fainted!`))}flashFoe(e){const t=e?document.getElementById("b-foe-hp"):document.getElementById("b-me-hp");t&&(t.style.filter="brightness(3)",setTimeout(()=>t.style.filter="",180));const n=document.getElementById("flash");n&&(n.style.opacity=.7,setTimeout(()=>n.style.opacity=0,140))}async doTurn(e){if(!(this.over||this.busy)){this.busy=!0;try{const t=this.me.moves[e];if(!t||t.pp<=0)return await this.msg("No PP left for that move!"),this.busy=!1,"retry";const n=this.foeChooseMove(),r=this.me.spd*hr(this.me.stages.spd),s=this.foe.spd*hr(this.foe.stages.spd);if(r>=s||Math.random()<.1){if(await this.useMove(this.me,this.foe,t,!1),this.foe.hp<=0)return await this.handleFaint(!1),this.busy=!1,"done";if(await this.useMove(this.foe,this.me,n,!0),this.me.hp<=0)return await this.handleFaint(!0),this.busy=!1,"done"}else{if(await this.useMove(this.foe,this.me,n,!0),this.me.hp<=0)return await this.handleFaint(!0),this.busy=!1,"done";if(await this.useMove(this.me,this.foe,t,!1),this.foe.hp<=0)return await this.handleFaint(!1),this.busy=!1,"done"}}finally{this.busy=!1,this.onUpdate()}return"done"}}async handleFaint(e){if(e){if(this.mi=this.firstAlive(this.myParty),this.mi===-1){await this.lose();return}this.me=this.myParty[this.mi],this.me.stages={atk:0,def:0,spd:0},await this.msg(`Go! ${Xe[this.me.species].name}!`)}else{const t=Xe[this.foe.species].xp,n=Math.floor(t*this.foe.level/7*(this.isTrainer?1.5:1));if(await this.msg(`${Xe[this.me.species].name} gained ${n} EXP!`,900),await this.gainXp(this.me,n),this.fi++,this.fi>=this.foeParty.length){await this.win();return}else this.foe=this.foeParty[this.fi],this.foe.stages={atk:0,def:0,spd:0},this.isTrainer?await this.msg(`${this.trainerName} sent out ${Xe[this.foe.species].name}!`):await this.msg(`Wild ${Xe[this.foe.species].name} appeared!`)}this.onUpdate()}async gainXp(e,t){for(e.xp+=t;e.xp>=dr(e.level+1);){e.level++;const n=Es(e.species,e.level),r=n.maxhp-e.maxhp;e.maxhp=n.maxhp,e.atk=n.atk,e.def=n.def,e.spd=n.spd,e.hp=Math.min(e.maxhp,e.hp+r),qe.levelup(),await this.msg(`${Xe[e.species].name} grew to Lv${e.level}!`,1e3);const s=Xe[e.species];for(const[c,o]of s.moves)c===e.level&&!e.moves.some(a=>a.id===o)&&(e.moves.length>=4&&e.moves.shift(),e.moves.push({id:o,pp:nn[o].pp}),await this.msg(`${Xe[e.species].name} learned ${nn[o].name}!`,1100));if(s.evo&&s.evo.at&&e.level>=s.evo.at){const c=s.evo.to;qe.evo(),await this.msg(`What? ${s.name} is evolving!`,1300);const o=Es(c,e.level);e.species=c,e.maxhp=o.maxhp,e.atk=o.atk,e.def=o.def,e.spd=o.spd,e.hp=Math.min(e.hp+(o.maxhp-n.maxhp),e.maxhp);for(const[a,l]of Xe[c].moves)a<=e.level&&!e.moves.some(h=>h.id===l)&&(e.moves.length>=4&&e.moves.shift(),e.moves.push({id:l,pp:nn[l].pp}));await this.msg(`Congratulations! It evolved into ${Xe[c].name}!`,1400),this.onUpdate()}}this.onUpdate()}catchRate(){const e=this.foe,r=(3*e.maxhp-2*e.hp)*Xe[e.species].catch*1/(3*e.maxhp)*1;return Math.min(255,r)/255}async tryCatch(){if(!this.canCatch)return await this.msg("Can't steal a trainer's POKéMON!"),!1;qe.ball(),await this.msg("You threw a POKé BALL!",900);const e=this.catchRate();for(let t=0;t<3;t++)if(await this.msg(`...${"·".repeat(t+1)}`,450),Math.random()>e+.28)return await this.msg("Oh no! It broke free!"),!1;return qe.catch_(),await this.msg(`Gotcha! ${Xe[this.foe.species].name} was caught!`,1300),!0}async tryRun(){if(this.isTrainer)return await this.msg("No! There's no running from a trainer battle!"),!1;const e=this.me.spd,t=this.foe.spd;return e>=t||Math.random()<.6?(qe.run(),await this.msg("Got away safely!"),!0):(await this.msg("Can't escape!"),await this.useMove(this.foe,this.me,this.foeChooseMove(),!0),this.me.hp<=0&&await this.handleFaint(!0),"check")}async win(){if(this.over=!0,this.isTrainer){const e=400+this.foeParty.reduce((t,n)=>t+n.level,0)*60;this.rewards.money=e,qe.badge(),await this.msg(`You defeated ${this.trainerName}! Got ₽${e}!`,1400)}this.onEnd("win")}async lose(){this.over=!0,await this.msg("You have no POKéMON left... You blacked out!",1400),this.onEnd("lose")}}const ce=i=>document.getElementById(i);function Qp(i){const e={started:!1,hasStarter:!1,party:[],dexSeen:new Set,dexCaught:new Set,money:3e3,balls:5,potions:3,badges:[],flags:{},lastHeal:{x:rt(23),z:st(41)},player:{x:rt(23),z:st(41),dir:Math.PI,moving:!1},inBattle:!1,inDialog:!1,menuOpen:!1,encounterAcc:0},t=(F,x=2400)=>{const I=ce("toast");I.textContent=F,I.classList.remove("hidden"),clearTimeout(I._t),I._t=setTimeout(()=>I.classList.add("hidden"),x)};function n(){ce("hud-money").textContent=`₽ ${e.money}`,ce("hud-balls").textContent=`◉ ${e.balls}`,ce("hud-badges").textContent=`★ ${e.badges.length}`,ce("hud-dex").textContent=`DEX ${e.dexCaught.size}/${fs.length}`}function r(){try{const F={party:e.party,dexSeen:[...e.dexSeen],dexCaught:[...e.dexCaught],money:e.money,balls:e.balls,potions:e.potions,badges:e.badges,flags:e.flags,hasStarter:e.hasStarter,lastHeal:e.lastHeal,px:e.player.x,pz:e.player.z};localStorage.setItem("pr3d-save",JSON.stringify(F)),t("Game saved!"),qe.confirm()}catch{t("Save failed")}}function s(){try{return!!localStorage.getItem("pr3d-save")}catch{return!1}}function c(){var F;try{const x=JSON.parse(localStorage.getItem("pr3d-save"));return!x||!((F=x.party)!=null&&F.length)?!1:(e.party=x.party,e.dexSeen=new Set(x.dexSeen),e.dexCaught=new Set(x.dexCaught),e.money=x.money,e.balls=x.balls,e.potions=x.potions,e.badges=x.badges||[],e.flags=x.flags||{},e.hasStarter=x.hasStarter,e.lastHeal=x.lastHeal,e.player.x=x.px,e.player.z=x.pz,i.player.position.set(e.player.x,0,e.player.z),!0)}catch{return!1}}function o(){for(const F of e.party){F.hp=F.maxhp;for(const x of F.moves)x.pp=nn[x.id].pp;F.stages={atk:0,def:0,spd:0}}qe.heal(),t("Party fully healed!")}function a(F){e.dexSeen.add(F)}function l(F){e.dexSeen.add(F),e.dexCaught.add(F)}let h=[],d=null;function u(F,x,I=null){return new Promise(C=>{h.push({name:F,text:x,choices:I,res:C}),h.length===1&&ce("dialog").classList.contains("hidden"),p()})}function p(){if(!h.length){ce("dialog").classList.add("hidden"),e.inDialog=!1;return}e.inDialog=!0;const{name:F,text:x,choices:I}=h[0];ce("dialog").classList.remove("hidden"),ce("dialog-name").textContent=F,ce("dialog-choices").innerHTML="";const C=ce("dialog-text");C.textContent="";let z=0;if(clearInterval(C._t),C._t=setInterval(()=>{z+=2,C.textContent=x.slice(0,z),z>=x.length&&clearInterval(C._t)},14),C.onclick=O=>{O.stopPropagation(),clearInterval(C._t),C.textContent=x},d=I,I){ce("dialog-next").style.display="none";for(const O of I){const ie=document.createElement("button");ie.textContent=O.label,ie.onclick=ne=>{ne.stopPropagation(),qe.confirm();const M=O.value;h.shift(),p(),O.resolve},ie.onclick=ne=>{ne.stopPropagation(),qe.blip(),h.shift().res(O.value),p()},ce("dialog-choices").appendChild(ie)}}else ce("dialog-next").style.display="block"}function g(){if(ce("dialog").classList.contains("hidden")||d)return;const F=ce("dialog-text"),x=h[0];if(!x)return;if(F.textContent.length<x.text.length){clearInterval(F._t),F.textContent=x.text;return}qe.blip(),h.shift();const I=x.res;p(),I==null||I(null)}ce("dialog").addEventListener("click",g);async function _(){ai(),ce("intro").classList.remove("hidden");const F=["Hello there! Welcome to the world of POKéMON! My name is OAK. People call me the POKéMON PROF.","This world is inhabited by creatures called POKéMON! I study them in 3D, up close, in tall grass and caves.","You are about to leave PALLET TOWN on your own adventure. Choose one partner to protect you!"];let x=0;const I=()=>{ce("intro-text").textContent=F[x],ce("btn-intro-next").textContent=x<F.length-1?"NEXT ▼":"CHOOSE YOUR PARTNER ▼"};I(),ce("starter-row").innerHTML="";for(const C of Hp){const z=Xe[C],O=document.createElement("div");O.className="starter",O.innerHTML=`<div class="dot" style="background:#${z.color.toString(16).padStart(6,"0")}"></div><b>${z.name}</b><small>${z.t1} · Lv5</small><div style="font-size:12px;margin-top:4px">${C==="bulbasaur"?"Balanced seed":C==="charmander"?"Fiery & fast":"Tough & sturdy"}</div>`,O.onclick=()=>m(C),ce("starter-row").appendChild(O)}await new Promise(C=>{ce("btn-intro-next").onclick=()=>{qe.blip(),x++,x<F.length?I():(ce("intro-text").textContent="Click your partner below! These three are rare — choose wisely.",ce("btn-intro-next").style.display="none")},ce("intro")._res=C})}async function m(F){var I,C;qe.confirm();const x=si(F,5);e.party=[x],e.hasStarter=!0,l(F),a(F),e.balls=5,e.potions=3,ce("intro").classList.add("hidden"),(C=(I=ce("intro"))._res)==null||C.call(I),ce("btn-intro-next").style.display="",i.player.position.set(rt(23),0,st(41)),e.player.x=rt(23),e.player.z=st(41),n(),await u("OAK",`Excellent! ${Xe[F].name} is a fine choice! Take these 5 POKé BALLS and this POKéDEX.`),await u("OAK","Walk north through ROUTE 1's tall grass to VIRIDIAN CITY. Your rival BLUE is waiting west of my lab... and Leader BROCK guards the gym! Get 2 BADGES!"),t(`${Xe[F].name} joined your party!`),e.lastHeal={x:rt(23),z:st(41)}}function f(F=""){e.menuOpen=!0,ce("menu").classList.remove("hidden"),S(F)}function E(){e.menuOpen=!1,ce("menu").classList.add("hidden")}document.querySelectorAll("#menu [data-act]").forEach(F=>F.onclick=()=>{qe.blip();const x=F.dataset.act;x==="close"&&E(),(x==="pokedex"||x==="pokemon"||x==="bag"||x==="save"||x==="help")&&S(x)});function S(F){const x=ce("menu-body");F==="pokedex"?x.innerHTML=`<b>POKéDEX — seen ${e.dexSeen.size} / caught ${e.dexCaught.size}</b>`+fs.map(I=>{const C=e.dexSeen.has(I),z=e.dexCaught.has(I),O=Xe[I];return`<div class="dex-row">${z?"◉":C?"○":"?"} ${C?O.name:"???"} <small>${C?O.t1+(O.t2?"/"+O.t2:"")+" · HT "+(O.size*1.1).toFixed(1)+"m":""}</small></div>`}).join(""):F==="pokemon"?(x.innerHTML=e.party.map((I,C)=>{const z=Xe[I.species];return`<div class="party-row"><div class="dot" style="background:#${z.color.toString(16).padStart(6,"0")}"></div><div><b>${z.name}</b> Lv${I.level} <small>HP ${I.hp}/${I.maxhp} · ATK ${I.atk} DEF ${I.def} SPD ${I.spd}</small><br><small>${I.moves.map(O=>nn[O.id].name+" "+O.pp+"pp").join(" · ")}</small></div></div>`}).join("")+`<div><small>Potions: ${e.potions} · Balls: ${e.balls}</small> <button id="use-potion">Use Potion (heal 30)</button></div>`,ce("use-potion").onclick=()=>{const I=e.party.find(C=>C.hp>0&&C.hp<C.maxhp);if(e.potions<=0){t("No potions!"),qe.error();return}if(!I){t("Everyone is full HP");return}e.potions--,I.hp=Math.min(I.maxhp,I.hp+30),qe.heal(),n(),S("pokemon")}):F==="bag"?(x.innerHTML=`<div>◉ POKé BALL × ${e.balls}</div><div>🧪 POTION × ${e.potions} <button id="bag-potion">use</button></div><div>🏅 BADGES: ${e.badges.join(", ")||"none"}</div><div>₽ Money: ${e.money}</div><div><button id="mute-btn">${Jp()?"🔊 UNMUTE":"🔇 MUTE"}</button></div>`,ce("bag-potion").onclick=()=>S("pokemon"),ce("mute-btn").onclick=()=>{Zp(),S("bag")}):F==="save"?(r(),x.innerHTML="Progress saved to this browser."):F==="help"?ce("help").classList.remove("hidden"):x.innerHTML="Choose a category above. Quest: beat BLUE + BROCK."}ce("party-close").onclick=b;function b(){ce("party").classList.add("hidden")}ce("help-close").onclick=()=>ce("help").classList.add("hidden"),ce("win-close").onclick=()=>{ce("win").classList.add("hidden")};async function U(){qe.confirm();const F=await u("CLERK","Welcome to the MART! POKé BALL ₽200 · POTION ₽300. What will you buy? (Your money: ₽"+e.money+")",[{label:"◉ BALL ₽200",value:"ball"},{label:"🧪 POTION ₽300",value:"potion"},{label:"Leave",value:"x"}]);if(F==="ball")return e.money<200?(qe.error(),await u("CLERK","Not enough money!")):(e.money-=200,e.balls++,qe.buy(),await u("CLERK","Thank you! Come again!")),n(),U();if(F==="potion")return e.money<300?(qe.error(),await u("CLERK","Not enough money!")):(e.money-=300,e.potions++,qe.buy(),await u("CLERK","Thank you! Come again!")),n(),U()}function A(){let F=null,x=9;for(const I of i.npcs){const C=I.mesh.position.x-e.player.x,z=I.mesh.position.z-e.player.z,O=C*C+z*z;O<x&&(x=O,F=I)}return x<7?F:null}async function R(){if(e.inBattle||e.inDialog||e.menuOpen)return;ai();const F=A();if(F){F.face=Math.atan2(e.player.x-F.mesh.position.x,e.player.z-F.mesh.position.z),await w(F);return}const x=wi(e.player.x),I=pr(e.player.z);if(x===21&&I===33)return u("SIGN","PALLET TOWN — Shades of your journey await!");if(x===21&&I===27)return u("SIGN","ROUTE 1 — Tall grass hides wild POKéMON! Walk through it!");if(x===24&&I===13)return u("SIGN","VIRIDIAN CITY — Gym Leader BROCK awaits challengers!");if(x===26&&I===9)return u("SIGN","VIRIDIAN GYM — Rock-solid trainer!");if(x>=28&&x<=32&&I>=37&&I<=40&&!e.hasStarter)return X()}async function X(){await _()}function y(){var x;const F=(x=e.party[0])==null?void 0:x.species;return F==="bulbasaur"?"charmander":F==="charmander"?"squirtle":"bulbasaur"}async function w(F){switch(F.id){case"mom":await u("MOM","Oh, sweetie! You look tired. Let me heal your POKéMON..."),o(),e.lastHeal={x:i.player.position.x,z:i.player.position.z},n();break;case"oak":{e.hasStarter?e.flags.oakBalls?await u("OAK","Tall grass = encounters. Weaken them first, then throw a BALL. Thundershock fries water, fire melts grass!"):(e.flags.oakBalls=!0,e.balls+=5,n(),await u("OAK",`How is your POKéDEX? I gave you 5 extra BALLS. Catch many kinds! (Balls: ${e.balls})`)):await _();break}case"rival":{if(!e.hasStarter){await u("BLUE","Hey! Loser! Get a POKéMON from grandpa first, then I will crush you!");break}if(e.flags.rivalBeaten){await u("BLUE","Tch... you got lucky. BROCK uses rock types — bring water or grass moves!");break}await u("BLUE","Yo! I already caught strong ones! Let me see how weak you are!"),j("BLUE",[si(y(),7),si("pidgey",6)],"rival");break}case"nurse":await u("NURSE","Welcome to the POKéMON CENTER! Restoring your team..."),o(),e.lastHeal={x:rt(23),z:st(11)},n();break;case"clerk":await U();break;case"brock":{if(!e.hasStarter){await u("BROCK","Kid, you need a POKéMON before challenging my gym.");break}if(e.flags.brockBeaten){await u("BROCK","Your rock-crushing spirit is strong. The Boulder Badge suits you.");break}await u("BROCK","I am BROCK, the rock-hard Gym Leader! My GEODUDE and ONIX will flatten you!"),j("BROCK",[si("geodude",12),si("onix",14)],"brock");break}case"kid":await u("KID","I saw PIKACHU in the west grass! It is yellow and super rare! SHIFT = run faster!");break;case"granny":await u("GRANNY","If your party faints you wake at the last CENTER or home. Potions save lives, dearie. Press M for menu.");break}q()}function q(){if(e.flags.rivalBeaten&&e.flags.brockBeaten&&!e.flags.champion){e.flags.champion=!0,qe.badge();const F=e.dexCaught.size;ce("win-text").textContent=`You defeated BLUE and BROCK! Badges: ${e.badges.join(", ")}. Pokédex: ${F}/${fs.length}. You are the demo CHAMPION — keep catching them all!`,ce("win").classList.remove("hidden")}}let N=null;function se(){return e.party.filter(F=>F.hp>0).length}function L(F){ce("battle").classList.toggle("hidden",!F),ce("hud").classList.toggle("hidden",F),F||(["battle-fight","battle-party","battle-bag"].forEach(x=>ce(x).classList.add("hidden")),ce("battle-menu").classList.remove("hidden"))}function G(){if(!N)return;const F=N.me,x=N.foe;ce("b-me-name").textContent=Xe[F.species].name,ce("b-me-lv").textContent="Lv"+F.level,ce("b-foe-name").textContent=(N.isTrainer?N.trainerName+"'s ":"")+Xe[x.species].name,ce("b-foe-lv").textContent="Lv"+x.level,ce("b-me-hp").style.width=100*F.hp/F.maxhp+"%",ce("b-foe-hp").style.width=100*x.hp/x.maxhp+"%",ce("b-foe-hp").style.background=x.hp/x.maxhp>.5?"linear-gradient(90deg,#3fbf3f,#7dff7d)":x.hp/x.maxhp>.2?"linear-gradient(90deg,#d6a300,#ffe066)":"linear-gradient(90deg,#c62828,#ff8a80)",ce("b-me-hp").style.background=F.hp/F.maxhp>.5?"linear-gradient(90deg,#3fbf3f,#7dff7d)":F.hp/F.maxhp>.2?"linear-gradient(90deg,#d6a300,#ffe066)":"linear-gradient(90deg,#c62828,#ff8a80)",ce("b-me-hpnum").textContent=`HP ${F.hp}/${F.maxhp}`,ce("b-foe-hpnum").textContent=`HP ${x.hp}/${x.maxhp}`;const I=dr(F.level+1)-dr(F.level),C=F.xp-dr(F.level);ce("b-me-xp").style.width=Math.min(100,100*C/I)+"%",i.setBattleModels(x.species,F.species),n()}function Y(F){ce("battle-msg").textContent=F}function K(){["battle-fight","battle-party","battle-bag"].forEach(F=>ce(F).classList.add("hidden")),ce("battle-menu").classList.remove("hidden")}async function J(){if(e.inBattle||!e.hasStarter||se()===0)return;const F=wi(e.player.x),x=pr(e.player.z),{species:I,level:C}=kp(Yp(F,x)),z=si(I,C);a(I),await Z({foeParty:[z],isWild:!0,isTrainer:!1,canCatch:!0})}async function j(F,x,I){if(!e.inBattle){for(const C of x)a(C.species);await Z({foeParty:x,isWild:!1,isTrainer:!0,trainerName:F,canCatch:!1,tag:I})}}async function Z(F){e.inBattle=!0,E(),b(),qe.encounter();const x=ce("flash");x.style.opacity=.9,setTimeout(()=>x.style.opacity=0,220),await new Promise(C=>setTimeout(C,500)),L(!0);const I=e.party.findIndex(C=>C.hp>0);if(I>0){const[C]=e.party.splice(I,1);e.party.unshift(C)}for(const C of e.party)C.stages={atk:0,def:0,spd:0};for(const C of F.foeParty)C.stages={atk:0,def:0,spd:0};N=new jp({myParty:e.party,foeParty:F.foeParty,isWild:F.isWild,isTrainer:F.isTrainer,trainerName:F.trainerName,canCatch:F.canCatch,onMsg:C=>Y(C),onUpdate:G,onEnd:C=>le(C,F)}),N.msg=async(C,z=1100)=>{Y(C),await new Promise(O=>setTimeout(O,z))},ae(),G(),await N.start(),K()}function ae(){document.querySelectorAll("#battle-menu [data-b]").forEach(F=>{F.onclick=async()=>{if(!N||N.busy||N.over)return;ai(),qe.blip();const x=F.dataset.b;if(x==="fight"){const I=ce("battle-fight");I.classList.remove("hidden"),ce("battle-menu").classList.add("hidden"),I.innerHTML=N.me.moves.map((C,z)=>{const O=nn[C.id];return`<button data-i="${z}">${O.name}<br><small>${O.type} P${O.power} · ${C.pp}pp</small></button>`}).join("")+'<button id="bf-back">← BACK</button>',I.querySelectorAll("[data-i]").forEach(C=>C.onclick=async()=>{I.classList.add("hidden");const z=await N.doTurn(Number(C.dataset.i));G(),K()}),ce("bf-back").onclick=()=>K()}if(x==="bag"){const I=ce("battle-bag");I.classList.remove("hidden"),ce("battle-menu").classList.add("hidden"),I.innerHTML=`<button id="bb-ball">◉ BALL ×${e.balls}</button><button id="bb-pot">🧪 POTION ×${e.potions}</button><button id="bb-back">← BACK</button>`,ce("bb-back").onclick=()=>K(),ce("bb-ball").onclick=async()=>{if(e.balls<=0){qe.error(),Y("No POKé BALLS! Buy more at the MART!");return}e.balls--,n(),I.classList.add("hidden");const C=await N.tryCatch();if(G(),C){const z=N.foe;l(z.species);const O={...z,uid:Math.random().toString(36).slice(2),moves:z.moves.map(ie=>({...ie}))};e.party.length<6?e.party.push(O):e.flags.box=(e.flags.box||0)+1,Y(`Caught ${Xe[z.species].name}! ${e.party.length>=6?"Sent to BOX.":"Joined party!"}`),await new Promise(ie=>setTimeout(ie,1400)),N.over=!0,N.onEnd("catch")}else K()},ce("bb-pot").onclick=async()=>{if(e.potions<=0){qe.error();return}const C=N.me;if(C.hp>=C.maxhp){Y("Already full HP!");return}e.potions--,C.hp=Math.min(C.maxhp,C.hp+30),qe.heal(),I.classList.add("hidden"),Y("Used POTION! +30 HP"),await new Promise(z=>setTimeout(z,800)),await N.useMove(N.foe,N.me,N.foeChooseMove(),!0),N.me.hp<=0&&await N.handleFaint(!0),G(),K(),N.over}}if(x==="mon"){const I=ce("battle-party");I.classList.remove("hidden"),ce("battle-menu").classList.add("hidden"),I.innerHTML=e.party.map((C,z)=>{const O=Xe[C.species];return`<button data-i="${z}" ${C.hp<=0?'disabled style="opacity:.4"':""}>${O.name} Lv${C.level} ${C.hp}/${C.maxhp}</button>`}).join("")+'<button id="bp-back">← BACK</button>',ce("bp-back").onclick=()=>K(),I.querySelectorAll("[data-i]").forEach(C=>C.onclick=async()=>{const z=Number(C.dataset.i);if(e.party[z]===N.me||e.party[z].hp<=0)return;const O=e.party[0];e.party[0]=e.party[z],e.party[z]=O,N.me=e.party[0],N.mi=0,N.me.stages={atk:0,def:0,spd:0},qe.confirm(),I.classList.add("hidden"),Y(`Come back! Go! ${Xe[N.me.species].name}!`),await new Promise(ie=>setTimeout(ie,900)),await N.useMove(N.foe,N.me,N.foeChooseMove(),!0),N.me.hp<=0&&await N.handleFaint(!0),G(),K()})}if(x==="run"){const I=await N.tryRun();G(),I===!0?(N.over=!0,N.onEnd("run")):I==="check"&&N.me.hp<=0&&N.over}}})}async function le(F,x){if(n(),F==="lose"){e.money=Math.floor(e.money/2);for(const I of e.party)I.hp<=0&&(I.hp=Math.floor(I.maxhp/2));o(),e.player.x=e.lastHeal.x,e.player.z=e.lastHeal.z,i.player.position.set(e.player.x,0,e.player.z),L(!1),i.clearBattleModels(),e.inBattle=!1,N=null,await u("NURSE","You blacked out! Your team was restored... (lost half your money)"),n();return}if(F==="win"){if(x.isTrainer){const I=400+x.foeParty.reduce((C,z)=>C+z.level,0)*60;e.money+=I,x.tag==="rival"&&(e.flags.rivalBeaten=!0,e.badges.push("RIVAL"),i.npcs.find(C=>C.id==="rival").mesh.position.set(rt(20),0,st(40)),t("BLUE defeated! He storms off...")),x.tag==="brock"&&(e.flags.brockBeaten=!0,e.badges.push("BOULDER")),e.badges=[...new Set(e.badges)]}else Math.random()<.2&&(e.balls++,t("Found a leftover BALL! +1"));L(!1),i.clearBattleModels(),e.inBattle=!1,N=null,n(),q(),r();return}if(F==="run"||F==="catch"){L(!1),i.clearBattleModels(),e.inBattle=!1,N=null,n(),r();return}}const V={};addEventListener("keydown",F=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(F.code)&&F.preventDefault(),V[F.code]=!0,ai(),F.code==="Enter"&&!ce("title").classList.contains("hidden")&&ce("btn-start").click(),(F.code==="KeyE"||F.code==="Space")&&(e.started&&!e.inBattle&&g(),e.started&&!e.inBattle&&!e.inDialog&&!e.menuOpen&&R()),F.code==="Escape"||F.code==="KeyM"){if(!e.started||e.inBattle)return;if(ce("help").classList.contains("hidden")===!1){ce("help").classList.add("hidden");return}if(!ce("party").classList.contains("hidden")){b();return}e.menuOpen?E():f("pokemon")}}),addEventListener("keyup",F=>{V[F.code]=!1});let ee=!1,de=0;Se();function Se(){const F=ce("scene");F.addEventListener("mousedown",x=>{ee=!0,de=x.clientX}),addEventListener("mouseup",()=>ee=!1),addEventListener("mousemove",x=>{ee&&(i.rig.yaw-=(x.clientX-de)*.006,de=x.clientX)}),F.addEventListener("wheel",x=>{i.rig.dist=Math.min(20,Math.max(6,i.rig.dist+x.deltaY*.01))},{passive:!0}),F.addEventListener("click",()=>{e.started&&!e.inBattle&&!e.inDialog&&R()})}s()&&ce("btn-continue").classList.remove("hidden"),ce("btn-continue").onclick=()=>{ai(),qe.confirm(),c()?Me(!0):t("No valid save")},ce("btn-start").onclick=async()=>{ai(),qe.confirm(),ce("title").classList.add("hidden"),s()&&e.started,Me(!1),e.hasStarter||(await u("OAK","Welcome! First, visit my LAB (big green roof, south-east) — or press on and I will meet you now..."),await _())};function Me(F){e.started=!0,ce("hud").classList.remove("hidden"),ce("loading").style.display="none",i.player.position.set(e.player.x,0,e.player.z),n(),wi(e.player.x),t(F?"Welcome back, trainer!":"Use WASD to walk. Go north to ROUTE 1!"),F&&e.hasStarter}const Pe=7,Ue=11;function Te(){requestAnimationFrame(Te);const F=Math.min(.05,i.clock.getDelta()),x=i.clock.elapsedTime;let I=0,C=0;const z=!ce("intro").classList.contains("hidden");if(e.started&&!e.inBattle&&!e.inDialog&&!e.menuOpen&&!z&&ce("win").classList.contains("hidden"))if((V.KeyW||V.ArrowUp)&&(C-=1),(V.KeyS||V.ArrowDown)&&(C+=1),(V.KeyA||V.ArrowLeft)&&(I-=1),(V.KeyD||V.ArrowRight)&&(I+=1),I||C){const O=V.ShiftLeft||V.ShiftRight?Ue:Pe,ie=i.rig.yaw,ne=Math.sin(ie),M=Math.cos(ie);let v=I*M-C*ne,H=I*ne+C*M;const te=Math.hypot(v,H);v/=te,H/=te;const Q=e.player.x+v*O*F,oe=e.player.z+H*O*F;i.isBlockedAt(Q,e.player.z)||(e.player.x=Q),i.isBlockedAt(e.player.x,oe)||(e.player.z=oe),e.player.moving=!0;let fe=Math.atan2(v,H)-i.player.rotation.y;for(;fe>Math.PI;)fe-=Math.PI*2;for(;fe<-Math.PI;)fe+=Math.PI*2;i.player.rotation.y+=fe*Math.min(1,F*12),i.player.position.set(e.player.x,Math.abs(Math.sin(x*10))*.08,e.player.z);const ve=wi(e.player.x),we=pr(e.player.z);qp(ve,we)&&e.hasStarter?(e.encounterAcc+=F*te,e.encounterAcc>.55&&(e.encounterAcc=0,Math.random()<.22&&J())):e.encounterAcc=0;const Ne=$p(ve,we);ce("hud-location").textContent!==Ne&&(ce("hud-location").textContent=Ne)}else e.player.moving=!1,i.player.position.set(e.player.x,0,e.player.z),e.encounterAcc=Math.max(0,e.encounterAcc-F);else i.player.position.set(e.player.x,i.player.position.y*.8,e.player.z);i.updateCamera(F,e.player.x,e.player.z,e.inBattle),i.animate(F,x,e.player.moving,e.inBattle),i.renderer.render(i.scene,i.camera)}return n(),Te(),{S:e,save:r,interact:R,startWildBattle:J,openMenu:f}}const em=document.getElementById("scene");let ur;try{ur=Kp(em);const i=Qp(ur);window.__game=i,window.__kanto=ur,document.getElementById("loading").style.display="none",ur.rig.yaw=.6}catch(i){console.error(i),document.getElementById("loading").textContent="FAILED TO START 3D: "+i.message}
