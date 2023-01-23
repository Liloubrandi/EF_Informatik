"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[959],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={},l="Wiedereinstieg in Python",s={permalink:"/EF_Informatik/2022/08/26/Wiedereinstieg-in-Python",editUrl:"https://github.com/Liloubrandi/EF_Informatik/tree/main/blog/2022-08-26-Wiedereinstieg-in-Python.md",source:"@site/blog/2022-08-26-Wiedereinstieg-in-Python.md",title:"Wiedereinstieg in Python",description:"---",date:"2022-08-26T00:00:00.000Z",formattedDate:"26. August 2022",tags:[],readingTime:1.305,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Mein Weg zum Numtrip-Game",permalink:"/EF_Informatik/Numtrip_blog"}},o={authorsImageUrls:[]},u=[{value:"Mein pers\xf6nlicher Einstieg:",id:"mein-pers\xf6nlicher-einstieg",level:3},{value:"Meine Fehler:",id:"meine-fehler",level:3},{value:"Das war mir besonders neu:",id:"das-war-mir-besonders-neu",level:3},{value:"Fragen, die aufgetaucht sind zu \xdcbungen:",id:"fragen-die-aufgetaucht-sind-zu-\xfcbungen",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mein-pers\xf6nlicher-einstieg"},"Mein pers\xf6nlicher Einstieg:"),(0,i.kt)("p",null,"Ich habe vorher noch nie mit der Bibliothek 'turtle' gearbeitet, deshalb kam mir (ausser viellicht die Struktur) fast nichts bekannt vor. Es war jedoch sehr selbsterkl\xe4rend und deswegen konnte ich gut den Anschluss finden.",(0,i.kt)("br",{parentName:"p"}),"\n","."),(0,i.kt)("h3",{id:"meine-fehler"},"Meine Fehler:"),(0,i.kt)("p",null,"Obwohl ich diesen Fehler bereits begangen habe, habe ich immer vergessen die ",(0,i.kt)("strong",{parentName:"p"},"Anf\xfchrungszeichen")," bei den ",(0,i.kt)("strong",{parentName:"p"},"Farben")," in der Klammer hinzuzuf\xfcgen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\npencolor('red')\npensize(5)\nforward(30)\nright(90)\n")),(0,i.kt)("p",null,"Wenn man in einem If etwas mitem einem Gleichzeichen vergleichen will, muss man immer ein Doppelgleich (==) setzen. Ein = w\xe4re eine Zuweisung bei einer Variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"if i == 3:\n    sechseck(100-10*i,'green')\n#Dies ist nur ein Ausschnitt aus Codeblock\n")),(0,i.kt)("p",null,"Ich habe erst nach dem dritten Mal lesen gemerkt, dass ich bei der Aufgabe mit der Stadt nicht 'pencolor(choice(","[1,3,5,7,9]","))' schreiben muss, sondern die Farbnahmen auflisten muss haha:/",(0,i.kt)("br",{parentName:"p"}),"\n","."),(0,i.kt)("h3",{id:"das-war-mir-besonders-neu"},"Das war mir besonders neu:"),(0,i.kt)("p",null,"Das man sequenzieren kann mit 'for i in range(n)'"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from turtle import *\n\nfor i in range(4))\n    left(90)\n    forward(80)\n")),(0,i.kt)("p",null,"."),(0,i.kt)("h3",{id:"fragen-die-aufgetaucht-sind-zu-\xfcbungen"},"Fragen, die aufgetaucht sind zu \xdcbungen:"),(0,i.kt)("p",null,"Kann man Kreise (circle(x,y)) nur nach links machen oder auch der andere Weg?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"blume()\nright(40)\npencolor('black')\npensize(2)\nfor i in range(20):\n    forward(10)\n    right(2)\n#nicht richtiges Codebeispiel, nur Auschnitt aus dem Code mit meiner L\xf6sung (anstatt mit den circle-Funktionsaufruf)\n")),(0,i.kt)("p",null,"Kann Python auch hochrechnen mit Hochzeichen (^) anstatt nur mit x ","*"," x?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"left(135)\n    forward(sqrt(size * size + size * size))\n    left(90)\n    forward(sqrt(size * size + size * size)/2)\n#nur Ausschnitt aus Codeblock\n")),(0,i.kt)("p",null,"Wie mache ich beim Ratespiel die M\xf6glichkeit das Ganze abzubrechen?"))}p.isMDXComponent=!0}}]);