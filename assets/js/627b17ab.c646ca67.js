"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=i,p=c["".concat(o,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(p,s(s({ref:t},d),{},{components:n})):r.createElement(p,s({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9974:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},s="\xdcbersicht Netzwerke",l={unversionedId:"Netzwerke/Uebersicht_Netzwerke",id:"Netzwerke/Uebersicht_Netzwerke",title:"\xdcbersicht Netzwerke",description:"Vom LAN zum Internet",source:"@site/docs/Netzwerke/Uebersicht_Netzwerke.md",sourceDirName:"Netzwerke",slug:"/Netzwerke/Uebersicht_Netzwerke",permalink:"/EF_Informatik/docs/Netzwerke/Uebersicht_Netzwerke",draft:!1,editUrl:"https://github.com/Liloubrandi/EF_Informatik/tree/main/docs/Netzwerke/Uebersicht_Netzwerke.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blogbeitrag_APIs",permalink:"/EF_Informatik/docs/Netzwerke/Blogbeitrag_APIs"},next:{title:"login-cookies",permalink:"/EF_Informatik/docs/Netzwerke/login-cookies"}},o={},u=[{value:"Vom LAN zum Internet",id:"vom-lan-zum-internet",level:2},{value:"IP-Adressen",id:"ip-adressen",level:2},{value:"Schichtenmodell",id:"schichtenmodell",level:2},{value:"Netzwerkzugangsschicht",id:"netzwerkzugangsschicht",level:2}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\xfcbersicht-netzwerke"},"\xdcbersicht Netzwerke"),(0,i.kt)("h2",{id:"vom-lan-zum-internet"},"Vom LAN zum Internet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host:")," alle Ger\xe4te, welche Daten \xfcber ein Netzwerk erhalten oder verschicken k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client:")," senden Anfragen, verlangen etwas / Servers: antworten auf Anfragen, liefern etwas (Computer mit Programmen zum antworten spezifischer Anfragen); Rolle kann sich je nach Kommunikationsverh\xe4ltnis \xe4ndern"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IP-Adresse:")," Identit\xe4t eines Hosts und sind hierarschisch angeordnet (Networks, Subnetworks, Device)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Netzwerk:")," transportiert die Daten, entsteht sobald mindestens zwei Hosts miteinander verbunden sind, es k\xf6nnen auch Netzwerke in Netzwerken sein (Subnetworks), Im Internet sind viele Netzwerke (LANs) miteinander verbunden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LAN:")," Local Area Network (Schulhausnetzwerk), ",(0,i.kt)("strong",{parentName:"li"},"WAN:")," Wide Area Network (Telefonnetzwerk)")),(0,i.kt)("p",null,"Ger\xe4te in einem Netzwerk:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Repeater:")," Signale verschwinden nach einer gewissen Distanz, ein Repeater gibt das Signal erneut aus (wiederholt es)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hub:")," multi-port repeater, repetiert Signale f\xfcr alle angeschlossenen Ger\xe4te"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bridge:")," Verbinden zwei Hubs (haben nur zwei Ports), sie wissen wer auf welcher Seite ist und k\xf6nnen so verhindern, dass alle die Nachricht erhalten (nur ein paar)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Switch:")," Kombination von Hub und Bridge, erleichtert die Kommunikation innerhalb eines Netzwerks, haben mehrere Ports, wissen welches Ger\xe4t bei welchem Port zu finden ist - Kommunikation von (nur) zwei Ger\xe4ten m\xf6glich, ",(0,i.kt)("strong",{parentName:"li"},"Switching:")," Transportieren von Daten innerhalb eines Netzwerks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Router:")," erleichtert die Kommunikation zwischen (mind. 2) Netzwerken, verbinden Netzwerke miteinander (leiten Daten von einem Netzwerk zum andern (Gateway)), sind auch f\xfcr die Sicherheit (filtering) zust\xe4ndig, sie wissen mit welchen Netzwerken sie verbunden sind und haben in beiden Netzwerken eine IP-Adresse (Routes in Routing-Tables), ",(0,i.kt)("strong",{parentName:"li"},"Routing:")," Transportieren von Daten zwischen Netzwerken")),(0,i.kt)("h2",{id:"ip-adressen"},"IP-Adressen"),(0,i.kt)("p",null,"Besteht aus 32 Bits (4 mal 8 (0 - 255)), geschrieben als Dezimalzahlen (je 1 Byte gross), abgetrennt durch Punkte"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Netzwerkteil:")," vorderer Teil, Grundadresse des Netzwerks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hostteil:")," hinterer Teil, einzigartig innerhalb eines Netzwerks f\xfcr jeden Host"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Netzmaske:")," Beginnt mit Einsen und wechselt irgendwann auf Nullen (Einsen = Netzwerktteil, Nullen = Hostteil); ",(0,i.kt)("strong",{parentName:"li"},"Netzwerkadresse:")," Netzwerkteil mit Nullen aufgef\xfcllt zu vollst\xe4ndiger IP-Adresse (nicht als IP-Adressse f\xfcr einzelnes Ger\xe4t, wird verwendet, beim Verbinden von Netzwerken \xfcber Router)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Suffixnotation:")," Es reicht zu wissen, wie viele eins am Anfang der Netzmaske stehen - Zahl als Suffix an IP-Adresse angeh\xe4ngt (Bsp: 13.162.25.4/",(0,i.kt)("strong",{parentName:"li"},"23"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Broadcastadressen:")," um ein IP-Paket an alle Ger\xe4te eines Netzwerks zu schicken, wenn man alle Host-bits auf 1 setzt, 255.255.255.255 kann ebenfalls als Broadcastadresse verwendet werden (nur f\xfcr das eigene Netzwerk)")),(0,i.kt)("p",null,"Spezielle IP-Adressen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Loopback-Adresse:")," 127.0.0.1, IP-Paket an sich selbst schicken, Teil des Netzwerks 127.0.0.0/8 (oft nur 127.0.0.1 verwendet)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"0.0.0.0:")," Platzhalter; eine beliebige, noch keine g\xfcltige oder aktuelles Netzwerk"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multicast-Adressen:")," gebraucht, um IP-Pakete an mehrere (aber nicht alle) Empf\xe4nger in einem LAN zu senden (Streaming, Gaming), Adressen 224.0.0.0 bis 239.255.255.255"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Private Netzwerkadressen:")," Alle IP-Adressen weltweit eindeutig, reicht jedoch, wenn nur in isolierten privaten Netzwerk eindeutig",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Adressen f\xfcr private Netzwerke: 10.0.0.0 bis 10.255.255.255, 172.16.0.0 bis 172.31.255.255 und 192.168.0.0 bis 172.168.255.255"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network Address Translation (NAT):")," private Adresse wird durch Router in eine \xf6ffentliche umgewandelt f\xfcr Eintritt ins Internet (und umgekehrt)")))),(0,i.kt)("h2",{id:"schichtenmodell"},"Schichtenmodell"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgaben der Netzwerke"),", um eine Nachricht zu \xfcbermitteln:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Es braucht ein \xdcbermittlungsmedium"),(0,i.kt)("li",{parentName:"ul"},"Die Bits der Nachricht m\xfcssen in Signale umgewandelt werden"),(0,i.kt)("li",{parentName:"ul"},"Fehlererkennung und -korrektur (Pr\xfcfsummen, Parit\xe4tsbit)"),(0,i.kt)("li",{parentName:"ul"},"Adressen f\xfcr Empf\xe4ngerbestimmung (und Absender)"),(0,i.kt)("li",{parentName:"ul"},"Unabh\xe4ngige Adressierungsart f\xfcr Routing in \xfcbergeordneten Netzwerken (von LANs/WLANs ins Internet)"),(0,i.kt)("li",{parentName:"ul"},"Nachrichten innerhalb einer Kommunikationsverbindung werden durchnummeriert, f\xfcr eine Wiederholung der Nachricht im Falle eines Verlustes"),(0,i.kt)("li",{parentName:"ul"},"Dritte Adressierungsebene f\xfcr Zuordnung zu unterschiedlichen Diensten - welche Datenpakete wo hin - ",(0,i.kt)("strong",{parentName:"li"},"Ports")),(0,i.kt)("li",{parentName:"ul"},"Anwendungsspezifische Protokolle (HTTP) zum Verst\xe4ndnis und zur Interpretation der empfangenen Nachrichten\nDiese Aufgaben werden auf verschiedene Schichten mit eigenem Protokoll verteilt - Schichtenmodell (Stapel von Protokollen)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Das OSI-Modell:"),(0,i.kt)("br",{parentName:"p"}),"\n","Funktionieren alle Schichten, so kann Networking (Daten zwischen Hosts hin und her schicken) funktionieren.  "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Physical:")," Transportmittel (Bits transportieren) (Repeater/Hubs, Kabel, WLAN)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Data Link:")," Hop-to-Hop-Delivery, Interagiert mit Schicht 1 (Bits \xfcbertragen auf NICs), Adressierungsschema (MAC-Adressen) (NIC: Network Interface Cards, Switches)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Network:")," End-to-End-Delivery, Adressierungsschema (IP-Adressen) (Router, Hosts, alles mit IP-Adresse)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ARP:")," Address Resolution Protocol, verbindet Schicht 2 und 3"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Transport:")," Service-to-Service-Delivery, Datenstr\xf6me unterscheiden und verschiedenen Diensten zuordnen (TCP und UDP als Strategien (0-65535)), Adressierungsschema (Ports)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Application:")," (5-7, Session, Presentation, Application), eigentliche Daten, deren Interpretation   ")),(0,i.kt)("p",null,"Senden - Encapsulation (Kapselung): Daten in Schicht 4: Segment (Port) - Schicht 3: Packet (IP-Adresse) - Schicht 2: Frame (MAC-Adresse) - Schicht 1: Bits (Beim Empfangen genau r\xfcckw\xe4rts - De-Encapsulation)\n",(0,i.kt)("strong",{parentName:"p"},"Header:")," Die vorangestellten Informationen zur Leitung durch das Internet (Protokolle und Adressen)\n",(0,i.kt)("strong",{parentName:"p"},"Trailer:")," Informationen, welche helfen festzustellen, ob ein Fehler geschehen ist bei der \xdcbertragung der Daten\n",(0,i.kt)("img",{alt:"OSI-Modell",src:n(6651).Z,width:"1074",height:"268"})," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Das TCP-IP-Modell:"),"\n",(0,i.kt)("img",{alt:"TCP-IP-Modell",src:n(3300).Z,width:"1745",height:"1336"})," "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Netzzugangsschicht:")," Daten k\xf6nnen zuverl\xe4ssig zwischen verbundenen Ger\xe4tem \xfcbertragen werden (Medium, Frames, Signale, Fehlererkennung, MAC-Adressen, ARP (\xdcbersetzung von Adressen))"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Internetschicht:")," Lokale Netzwerke zu Internet zusammengeschlossen und Daten dadurch geleitet werden k\xf6nnen (Pakete, IP-Adressen, Weg f\xfcr Paket)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Transportschicht:")," Transport zwischen zwei Endpunkten (Segmente, Ports, Segmentierung, \xdcberwachung (Reihenfolge))"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Anwendungsschicht:")," spezialisiserte Protokolle f\xfcr bestimmte Anwendungen")),(0,i.kt)("h2",{id:"netzwerkzugangsschicht"},"Netzwerkzugangsschicht"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Aufgaben des Hosts (verbunden innerhalb eines Netzwerks):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Schritte sind immer die gleichen, auch wenn Switches oder Hubs dazwischen sind"),(0,i.kt)("li",{parentName:"ul"},"F\xfcgt an die zu schickenden Daten Layer3-Header (IP-Adresse) und Layer2-Header (MAC-Adresse) an"),(0,i.kt)("li",{parentName:"ul"},"Host braucht ARP request (Broadcast Nachfrage), um die MAC-Adresse eines Hosts (mit bekannter IP-Adresse) herauszufinden",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ffff.ffff.ffff"),": reservierte MAC-Adresse f\xfcr Broadcast-Nachrichten (an alle eines Netzwerks)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ARP Mappings")," sind gespeichert in ",(0,i.kt)("strong",{parentName:"li"},"ARP Caches")," (Zugeordnete MAC-Adressen zu den IP-Adressen)")))}m.isMDXComponent=!0},6651:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OSI-Modell-5d202004da63536e01ed1b708debc35c.png"},3300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/TCP-IP-Modell-efb9b4bb70231ed1d662021c35670fd2.png"}}]);