"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[243],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={},a=void 0,s={unversionedId:"Netzwerke/login-cookies",id:"Netzwerke/login-cookies",title:"login-cookies",description:"Login - Cookies",source:"@site/docs/Netzwerke/login-cookies.md",sourceDirName:"Netzwerke",slug:"/Netzwerke/login-cookies",permalink:"/EF_Informatik/docs/Netzwerke/login-cookies",draft:!1,editUrl:"https://github.com/Liloubrandi/EF_Informatik/tree/main/docs/Netzwerke/login-cookies.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\xdcbersicht Netzwerke",permalink:"/EF_Informatik/docs/Netzwerke/Uebersicht_Netzwerke"},next:{title:"about-me",permalink:"/EF_Informatik/docs/about-me"}},l={},c=[{value:"Login - Cookies",id:"login---cookies",level:2}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"login---cookies"},"Login - Cookies"),(0,i.kt)("p",null,"Was ist ein Cookie?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Cookie speichert wichtige Informationen wie (bei unserem Login) Passwort (Nur der Hashwert des Passwortes), Name, Geburtsdatum usw."),(0,i.kt)("li",{parentName:"ul"},"Es ist eine kleine Textdatei, die gespeichert wird (vom Client) und sp\xe4ter vom Webserver wieder aufgerufen werden kann.")),(0,i.kt)("p",null,"Weshalb ist ein Cookie praktisch? Wie funktioniert ein Login damit?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es vereinfacht das Login: Das Cookie kann sich deine Daten merken und diese bei einem Login mitschicken (als Vorschlag). Somit kann man sich dann anmelden, ohne alles jedes mal von neuem einzugeben."),(0,i.kt)("li",{parentName:"ul"},"Die mitgeschickten Daten werden dann mit den gespeicherten Daten verglichen. Stimmen sie \xfcberein, so gelingt das Login.")),(0,i.kt)("p",null,"Unser Beispiel benutzt eine einfache Benutzerdatenbank. Was darf NIE so gemacht werden, wie wirs gemacht haben? Welche Ans\xe4tze gibts zur Verbesserung?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Passwort darf nicht einfach als Textdatei gespeichert werden. Wenn jemand auf die Datenbank zugreifen kann, wo alle diese informationen gespeichert sind, kann er also diese einfach so ver\xf6ffentlichen oder weiter benutzen (Data-Breaches). Zur L\xf6sung speichert man einen so genannten Hashwert des Passworts. Dieser ist eindeutig einem Passwort zugeorndet, jedoch, augrund der kleineren Wertemenge von Hashes, nicht umkehrbar - man kann mit deinem Passwort auf den Hashwert kommen, jedoch nicht vom Hashwert auf das Passwort.")))}m.isMDXComponent=!0}}]);