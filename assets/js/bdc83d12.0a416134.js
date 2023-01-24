"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[22],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),d=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},o=function(e){var n=d(e.components);return t.createElement(u.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=i,p=c["".concat(u,".").concat(m)]||c[m]||h[m]||l;return r?t.createElement(p,a(a({ref:n},o),{},{components:r})):t.createElement(p,a({ref:n},o))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<l;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5995:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const l={},a=void 0,s={permalink:"/EF_Informatik/Numtrip_finaler_blog",editUrl:"https://github.com/Liloubrandi/EF_Informatik/tree/main/blog/Numtrip_finaler_blog.md",source:"@site/blog/Numtrip_finaler_blog.md",title:"Numtrip_finaler_blog",description:"Finaler Blogbeitrag Numtrip",date:"2023-01-24T23:03:17.000Z",formattedDate:"24. Januar 2023",tags:[],readingTime:3.78,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Mein Weg zum Numtrip-Game",permalink:"/EF_Informatik/Numtrip_blog"},nextItem:{title:"Wiedereinstieg in Python",permalink:"/EF_Informatik/2022/08/26/Wiedereinstieg-in-Python"}},u={authorsImageUrls:[]},d=[{value:"<strong>Finaler Blogbeitrag Numtrip</strong>",id:"finaler-blogbeitrag-numtrip",level:2},{value:"Ziel des Spiels:",id:"ziel-des-spiels",level:3},{value:"Umsetzung des Spiels:",id:"umsetzung-des-spiels",level:2},{value:"Top-down-Entwurf mit meinen Funktionen:",id:"top-down-entwurf-mit-meinen-funktionen",level:3},{value:"Der Flood-fill-Algorythmus:",id:"der-flood-fill-algorythmus",level:3},{value:"Meine gr\xf6ssten Herausvorderungen:",id:"meine-gr\xf6ssten-herausvorderungen",level:3},{value:"Tipps f\xfcr andere Sch\xfcler:",id:"tipps-f\xfcr-andere-sch\xfcler",level:3}],o={toc:d};function h(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"finaler-blogbeitrag-numtrip"},(0,i.kt)("strong",{parentName:"h2"},"Finaler Blogbeitrag Numtrip")),(0,i.kt)("h3",{id:"ziel-des-spiels"},"Ziel des Spiels:"),(0,i.kt)("p",null,"Man soll ein Spielfeld mit (quadratischen) Felder mit jeweils einer Zahl haben, welches ausgegeben werden kann und f\xfcr den Benutzer sichtbar ist. Der Benutzer w\xe4hlt nun ein Feld seiner Wahl (solange es einen gleichwertigen Nachbar hat). Dieses Feld und alle gleichwertigen Nachbaren werden nun gel\xf6scht und an der Stelle des ausgew\xe4hlten Feldes steht nun der doppelte Wert des vorherigen Werts. Dann fallen alle nach unten (schliessen auf) falls unter ihnen noch ein leeres Feld ist und der Rest des Spielfelds wird mit zuf\xe4lligen Zahlen aufgef\xfcllt.\n!!!Im Spiel kommen als Zahlen nur Zweierpotenzen vor(bei mir ohne 1). Das Ziel besteht dann darin, 256 zu erreichen in einem Feld, ohne vorher zu verlieren. Verlieren tut man, wenn man kein Feld mehr mit gleichwertigen Nachbaren hat."),(0,i.kt)("p",null,"Ein weiteres Ziel f\xfcr uns war auch, dass wir die gelernten Grundlagen nicht nur theoretisch beherrschen, sondern auch praktisch und verbunden miteinander."),(0,i.kt)("h2",{id:"umsetzung-des-spiels"},"Umsetzung des Spiels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Voraussetzung: Man sollte Python 3.10.6 installiert haben. Man sollte zudem ein Programm heruntergeladen haben, welches Code ausf\xfchren kann.")),(0,i.kt)("h3",{id:"top-down-entwurf-mit-meinen-funktionen"},"Top-down-Entwurf mit meinen Funktionen:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Top-Down Numtrip",src:r(7943).Z,width:"1005",height:"445"})),(0,i.kt)("h3",{id:"der-flood-fill-algorythmus"},"Der Flood-fill-Algorythmus:"),(0,i.kt)("p",null,"Ich habe mich daf\xfcr entschieden, den Flood-fill-Algorhythmus kurz zu erl\xe4utern, da ich mich bereits im Pythonrepetition mit rekursiven Funktionen besch\xe4ftigt haben.",(0,i.kt)("br",{parentName:"p"}),"\n","Das Prinzip von rekursiven Funktionen ist, dass sich die Funktion selbst aufruft. Dadurch ensteht eine (zugegeben ziemlich komplexe) Verschachtelung der Ausf\xfchrungen, die in der Funktion get\xe4tigt werden. Zudem muss immer eine Abbruchbedingung formuliert werden, da sonst der Algorythmus unendlich lange weiterl\xe4uft."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das schwerste am Schreiben einer rekursiven Funktion ist wohl, dass man im Kopf versucht zu \xfcberlegen wann die Funktion sich selbst aufruft, damit die Verschachtelung an der richtigen Stelle geschieht.")),(0,i.kt)("p",null,"Ich brauchte eine rekursive Funktion beim L\xf6schen der Felder mit dem gleichen Wert. In der Funktion sollte gepr\xfcft werden, ob das anliegende Feld der gleiche Wert hat und wenn ja, ob das anliegende Feld dieses anliegenden Feldes auch den gleichen Wert hat. Um diese \xdcberpr\xfcfung eben auch von den anliegenden Felder aus zu machen, muss sich die Funktion selbst aufrufen -> rekursive Funktion.\nMein Flood-fil-Algorythmus im Spiel sieht so aus (mit Rahmenbedingungen, damit es nicht ausserhalb des Feldes \xfcberpr\xfcft):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def auswerten(x, y, vorherige_Zahl):\n    # Rahmenbedingungen\n    if x < 0 or x > 4:\n        return False\n    if y < 0 or y > 4:\n        return False\n    # Feld\xfcberpr\xfcfen\n    # im Spielfeld die richtige Liste (zeile), dann richtige Position in Liste (spalte)\n    if spielfeld[x][y] == vorherige_Zahl:\n        spielfeld[x][y] = 0\n        auswerten(x, y + 1, vorherige_Zahl)  # rechts\n        auswerten(x, y - 1, vorherige_Zahl)  # links\n        auswerten(x + 1, y, vorherige_Zahl)  # unten\n        auswerten(x - 1, y, vorherige_Zahl)  # oben\n")),(0,i.kt)("h3",{id:"meine-gr\xf6ssten-herausvorderungen"},"Meine gr\xf6ssten Herausvorderungen:"),(0,i.kt)("p",null,'Am meisten M\xfche hatte ich mit der Funktion "felder_auff\xfcllen()", in der die Felder "hinunterfallen", wenn unter ihnen ein leeres Feld ist. Dann sollte das Spielfeld zuf\xe4llig aufgef\xfcllt werden in allen Zellen, die noch leer sind.',(0,i.kt)("br",{parentName:"p"}),"\n",'Ich hatte immer pl\xf6tzlich nach etwa 20 Z\xfcgen ein leeres Feld und ich wusste nicht woher. Ich habe einfach gedacht, dass ich vergessen habe die restlichen Felder aufzuf\xfcllen und nur den Feldern, die ausgetauscht wurden einen neuen Wert zugwiesen haben. Jedoch habe ich nicht gemerkt, dass auch vorher beim "Herunterfallen" einen Fehler passiert ist. Hatte es n\xe4mlich z.B. zwei Zahlen oberhalb eines leeren Feldes, so habe ich die untere mit der leeren getauscht, jedoch dann eine Zufallszahl hingesetzt bevor die zweite Zahl auch noch "hinunterfallen" konnte.',(0,i.kt)("br",{parentName:"p"}),"\n","Eigentlich nur ein kleiner Fehler, der jedoch sehr lange unentdeckt blieb und mich verzweifeln liess."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"if spielfeld[zeile][zelle] == 0:\n    zeilenindex = zeile\n    while zeilenindex > 0 and spielfeld[zeilenindex][zelle] == 0:\n        zeilenindex = zeilenindex - 1\n    spielfeld[zeile][zelle] = spielfeld[zeilenindex][zelle]\n    spielfeld[zeilenindex][zelle] = random.choice([2, 4, 8]) #-> FEHLER! Zuerst sollte da auf 0 gesetzt werden.\n")),(0,i.kt)("h3",{id:"tipps-f\xfcr-andere-sch\xfcler"},"Tipps f\xfcr andere Sch\xfcler:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Beginne immer bei 0 beim z\xe4hlen!! Jedoch ist es f\xfcr den Benutzer einfacher bei 1 zu beginnen. Also lasse den Benutzer beim Eingeben von Zahlen bei 1 starten, vergesse jedoch nicht, dann beim Auswerten der Eingabe die Zahl noch um eins zu verkleinern."),(0,i.kt)("li",{parentName:"ul"},"\xdcberpr\xfcfe, ob die Grenzen stimmen! Will ich x >= 0 oder nur x > 0 schreiben, dies macht einen Unterschied und kann den ganzen Code ver\xe4ndern. -> Auch da wieder: Man beginnt bei 0 mit z\xe4hlen!"),(0,i.kt)("li",{parentName:"ul"},"\xdcberlege dir vorher genau einen Plan (eventuell sogar mit Skizze) und kommentiere komplexe Funktionen oder Zeilen, damit du auch sp\xe4ter noch verstehst, was gemacht wurde."),(0,i.kt)("li",{parentName:"ul"},"Bleibe dran! Manchmal geht es ewigs, bis man einen Fehler findet oder bis etwas so funktioniert, wie man es will. Dies kann nervenraubend sein, aber du schaffst das!")))}h.isMDXComponent=!0},7943:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/Top_down_Numtrip-ac8fc4968ad83f8d92d15fc71c9857b4.jpg"}}]);