"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[39],{3905:(e,n,l)=>{l.d(n,{Zo:()=>h,kt:()=>p});var i=l(7294);function r(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function t(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,i)}return l}function a(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?t(Object(l),!0).forEach((function(n){r(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function s(e,n){if(null==e)return{};var l,i,r=function(e,n){if(null==e)return{};var l,i,r={},t=Object.keys(e);for(i=0;i<t.length;i++)l=t[i],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)l=t[i],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d=i.createContext({}),u=function(e){var n=i.useContext(d),l=n;return e&&(l="function"==typeof e?e(n):a(a({},n),e)),l},h=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var l=e.components,r=e.mdxType,t=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=u(l),p=r,g=c["".concat(d,".").concat(p)]||c[p]||o[p]||t;return l?i.createElement(g,a(a({ref:n},h),{},{components:l})):i.createElement(g,a({ref:n},h))}));function p(e,n){var l=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=l.length,a=new Array(t);a[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<t;u++)a[u]=l[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,l)}c.displayName="MDXCreateElement"},570:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>s,toc:()=>u});var i=l(7462),r=(l(7294),l(3905));const t={},a="Mein Weg zum Numtrip-Game",s={permalink:"/EF_Informatik/Numtrip_blog",editUrl:"https://github.com/Liloubrandi/EF_Informatik/tree/main/blog/Numtrip_blog.md",source:"@site/blog/Numtrip_blog.md",title:"Mein Weg zum Numtrip-Game",description:"Eingabe und Start:",date:"2023-03-08T16:59:52.000Z",formattedDate:"8. M\xe4rz 2023",tags:[],readingTime:7.395,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Numtrip_finaler_blog",permalink:"/EF_Informatik/Numtrip_finaler_blog"}},d={authorsImageUrls:[]},u=[{value:"<strong>Eingabe und Start:</strong>",id:"eingabe-und-start",level:3},{value:"<strong>Validierung:</strong>",id:"validierung",level:3},{value:"<strong>Nachbarzellen kombinieren:</strong>",id:"nachbarzellen-kombinieren",level:3},{value:"<strong>Felder auff\xfcllen:</strong>",id:"felder-auff\xfcllen",level:3},{value:"<strong>Gewonnen und verloren:</strong>",id:"gewonnen-und-verloren",level:3},{value:"Gewonnen:",id:"gewonnen",level:4},{value:"Verloren:",id:"verloren",level:4},{value:"<strong>Zuf\xe4lliges Spielfeld generieren:</strong>",id:"zuf\xe4lliges-spielfeld-generieren",level:3}],h={toc:u};function o(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"eingabe-und-start"},(0,r.kt)("strong",{parentName:"h3"},"Eingabe und Start:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Als erstes musste ich irgendwie nach einer Eingabe nach Zeilen- und Spaltennummer fragen. Daf\xfcr habe ich eine Funktion "eingabe()" geschrieben, in der ich nach den beiden Zahlen frage. Die Eingabe wird noch validiert. Damit ich nun so lange frage, bis die Eingabe valide ist, verwende ich eine while-Schlaufe.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def eingabe():\n    # invalide Eingaben, damit der Code unter while \xfcberhaupt durchgef\xfchrt wird.\n    valid = False\n    while not valid:\n        zeile = input('Gib eine Zeilennummer zwischen 1 und 5 ein:')\n        spalte = input('Gib eine Spaltennummer zwischen 1 und 5 ein:')\n        if eingabe_validieren(zeile, spalte) and feldauswahl_validieren(zeile, spalte):\n            valid = True\n    # noch einmal, weil bei eingabe_validieren \xfcberpr\xfcft es nur\n    return (int(zeile) - 1, int(spalte) - 1)\n")),(0,r.kt)("p",null,"!!! WICHTIG: Ich muss die Zahlen zur\xfcckgeben, damit sie weiterverwendet werden k\xf6nnen.\n!!! WICHTIG: Die Zahlen m\xfcssen noch einmal mit int() in Zahlen verwandelt werden, weil bei der Validierung bloss geschaut wird, ob es m\xf6glich w\xe4re, diese in Zahlen umzuwandeln."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Dann habe ich eine neue Funktion "auswerten()" erstellt, die die Koordiaten liest und im Spielfeld sucht. Das gefundene Feld wird mit 0 markiert, was bei der "mache_spielfeld"-Funktion dazu f\xfchrt, dass das Feld leer ausgegeben wird.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def auswerten(zeile, spalte):\n    spielfeld[zeile][spalte] = 0\n")),(0,r.kt)("p",null,'!!! WICHTIG: Die Zahlen m\xfcssen an Variablen \xfcbergeben werden, die dann als "zeile" und "spalte" -Parameter an die Funktion "auswerten()" \xfcbergeben werden kann. Dies geschieht in "eingabe()".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"    x, y = eingabe()\n    auswerten(x, y)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Als letztes habe ich alle diese Funktionen in eine gesamte Funktion "play()" hineingeschrieben und diesen Vorgang solange das Spiel l\xe4uft (momentan unendlich lange) laufen lassen. Sp\xe4ter wurde dieser dann durch die Bedingungen "verloren()" und "gewonnen()" eingeschr\xe4nkt. (-> mein Game-Loop)')),(0,r.kt)("h3",{id:"validierung"},(0,r.kt)("strong",{parentName:"h3"},"Validierung:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ich habe mit Alice sehr viel besprochen. Bei mir waren Probleme beim Validieren aufgetreten, da ich die Werte falsch oder als String \xfcbergeben habe. Bei ihr wurde das Wort "True" \xfcbergeben. Beides konten wir jedoch beheben.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def eingabe_validieren(zeile, spalte):\n    try:\n        zeile = int(zeile) - 1\n        spalte = int(spalte) - 1\n        return True\n    except:\n        print('Zeilen- und Spaltennummer m\xfcssen Zahlen sein!')\n        return False\n")),(0,r.kt)("p",null,"??? Aufgetauchte Fragen: Muss hier 'return True' geschrieben werden? Wird hier zeile und spalte \xfcbergeben?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sp\xe4ter habe ich dann die Funktion noch erg\xe4nzt, indem ich auch noch \xfcberpr\xfcft habe ob der eingegebene Wert \xfcberhaupt im Bereich des Spielfelds liegt:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def eingabe_validieren(zeile, spalte):\n    try:\n        zeile = int(zeile) - 1\n        spalte = int(spalte) - 1\n        if zeile < 0 or zeile > 4:\n            print('Zeile ist nicht im Feld')\n            return False\n        if spalte < 0 or spalte > 4:\n            print('Spalte ist nicht im Feld')\n            return False\n        return True  # Notwendig? Ja, ewtas muss zur\xfcckgegeben werden\n    except:\n        print('Zeilen- und Spaltennummer m\xfcssen Zahlen sein!')\n        return False\n")),(0,r.kt)("p",null,'-Zum Abschluss der Validierung \xfcberpr\xfcfe ich noch, ob die Eingabe nicht nur valide, sondern auch erlaubt ist: mit der Funktion "feldauswahl_validieren()", die pr\xfcft, ob das Feld \xfcberhaupt einen Nachbar hat und somit ausgew\xe4hlt werden darf.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def feldauswahl_validieren(zeile, spalte):\n    zeile = int(zeile) - 1\n    spalte = int(spalte) - 1\n    if (spalte + 1) <= 4:\n        if spielfeld[zeile][spalte] == spielfeld[zeile][spalte + 1]:\n            return True\n    if (spalte - 1) >= 0:\n        if spielfeld[zeile][spalte] == spielfeld[zeile][spalte - 1]:\n            return True\n    if (zeile + 1) <= 4:\n        if spielfeld[zeile][spalte] == spielfeld[zeile + 1][spalte]:\n            return True\n    if (zeile - 1) >= 0:\n        if spielfeld[zeile][spalte] == spielfeld[zeile - 1][spalte]:\n            return True\n    print('Das ausgew\xe4hlte Feld muss Nachbaren haben')\n    return False\n")),(0,r.kt)("h3",{id:"nachbarzellen-kombinieren"},(0,r.kt)("strong",{parentName:"h3"},"Nachbarzellen kombinieren:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ich habe versucht den Floodfill-code so umzuwandeln, dass er in mein Spiel passt.")),(0,r.kt)("p",null,"??? Leider ist ein kleines Problem aufgetreten. Da ich die Zahl bereits vorher auf 0 gesetzt hatte, testet es nun, ob 0 die zu testende Zahl gleich ist wie 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def nachbarfelder_l\xf6schen(x, y, vorherige_Zahl):\n    if spielfeld[x][y] == vorherige_Zahl:  # Zahl ist ja bereits 0??\n        spielfeld[x][y] = 0\n        nachbarfelder_l\xf6schen(x, y + 1)  # rechts\n        nachbarfelder_l\xf6schen(x, y - 1)  # links\n        nachbarfelder_l\xf6schen(x + 1, y)  # unten\n        nachbarfelder_l\xf6schen(x - 1, y)  # oben\n")),(0,r.kt)("p",null,'-Die Probleme habe ich behoben, in dem ich die vorige Funktion "auswerten()" nicht alleine gebraucht habe, sondern in die Funktion "nachbarfelder_l\xf6schen()" eingebaut und auf "auswerten()" umgetauft habe. Zus\xe4tzlich habe ich eine Zahl vorher \xfcbergeben, welche die Zahl in diesem Feld speichert und bei der rekursiven Auswerten-funktion benutzt werden kann. Damit es keine Fehler gibt, habe ich die Rahmenbedingung in den Code eingebaut.\n-Sp\xe4ter habe ich dann die Funktion "auswerten()" erg\xe4nzt mit diesem flood-fill-Algorythmus, in der alle aneinanderliegenden Felder mit dem gleichen Wert auf 0 gesetzt werden. Die fertige auswerten-Funktion sieht nun so aus:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def auswerten(x, y, vorherige_Zahl):\n    # Rahmenbedingungen\n    if x < 0 or x > 4:\n        return False\n    if y < 0 or y > 4:\n        return False\n    # Feld\xfcberpr\xfcfen\n    # im Spielfeld die richtige Liste (zeile), dann richtige Position in Liste (spalte)\n    if spielfeld[x][y] == vorherige_Zahl:\n        spielfeld[x][y] = 0\n        auswerten(x, y + 1, vorherige_Zahl)  # rechts\n        auswerten(x, y - 1, vorherige_Zahl)  # links\n        auswerten(x + 1, y, vorherige_Zahl)  # unten\n        auswerten(x - 1, y, vorherige_Zahl)  # oben\n")),(0,r.kt)("h3",{id:"felder-auff\xfcllen"},(0,r.kt)("strong",{parentName:"h3"},"Felder auff\xfcllen:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Die Funktion "felder_auff\xfcllen()" hat mir von allem die meisten Sorgen bereitet. Egal was ich versuchte, irgenwie ging nichts, wie ich es wollte und ich fang die Fehler einfach nicht. Es schrieb zuf\xe4llige Zahlen irgendwo, wo ich sie nicht wollte und zuwenige oder falsche Felder fielen nach unten. Zudem habe ich sie zu Beginn viel zu kompliziert geschrieben, indem ich Variablen f\xfcr die Koordinaten erstellt habe und durch alle Zellen durchiteriert habe, anstatt direkt die Variablen in eine Range-Schlaufe zu tun.'),(0,r.kt)("li",{parentName:"ul"},"Zwei grosse Fehler haben sich bei mir ergeben. Der Zeilenindex hatte die Bedingung >= 0 zu sein. Jedoch hiess das, dass er beim letzten Mal von 0 noch aus -1 stellte. Dies gab ein Fehler bei den Grenzen. Behoben habe ich ihn durch das Wegnehmen des Gleichzeichen - so konnte der Zeilenindex maximal auf 0 kommen. Der zweite grosse Fehler war, dass ich die Zahlen vertauscht haben und dann direkt eine zuf\xe4llige Zahl eingesetzt habe. Hatte es oberhalb der vertauschten Zahlen noch eine Zahl, die nach unten fallen sollte, war dies nicht mehr m\xf6glich, da keine 0 mehr vorhanden war. Dadurch musste ich zuerst die Zahl auf 0 stellen und erst ganz am Ende durch das Feld gehen und alle leeren Felder mit zuf\xe4lligen Zahlen bef\xfcllen.")),(0,r.kt)("p",null,"Mein Endresultat:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def felder_auff\xfcllen(x, y, vorherige_zahl):\n    spielfeld[x][y] = vorherige_zahl * 2\n    for zeile in range(4, 0, -1):\n        for zelle in range(4, 0, -1):\n            if spielfeld[zeile][zelle] == 0:\n                zeilenindex = zeile\n                while zeilenindex > 0 and spielfeld[zeilenindex][zelle] == 0:\n                    zeilenindex = zeilenindex - 1\n                spielfeld[zeile][zelle] = spielfeld[zeilenindex][zelle]\n                spielfeld[zeilenindex][zelle] = 0\n    for zeile in range(5):\n        for zelle in range(5):\n            if spielfeld[zeile][zelle] == 0:\n                spielfeld[zeile][zelle] = random.choice([2, 4, 8])\n")),(0,r.kt)("p",null,"??? Eine Frage, die noch aufgetaucht ist: Wieso muss ich die letzten vier Zeilen mit range und den Koordinaten schreiben und kann nicht bloss durch die Zellen durchiterieren und die Zelle direkt vergleichen?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"for zeile in spielfeld:\n    for zelle in zeile:\n        if zelle == 0:\n            zelle == random.choice([2, 4, 8])\n")),(0,r.kt)("h3",{id:"gewonnen-und-verloren"},(0,r.kt)("strong",{parentName:"h3"},"Gewonnen und verloren:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ganz am Schluss des Spiels habe ich noch eine Bedingung eingebaut, wann man gewonnen hat (wenn man die Zahl 256 erreicht hat) und wann man verloren hat (wenn man kein Feld mehr hat mit gleichwertigen Nachbaren).")),(0,r.kt)("h4",{id:"gewonnen"},"Gewonnen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Die Funktion "gewonnen()" war relativ einfach. Ich musste bloss jedes Feld durchgehen und schauen, ob irgendeine Zelle den Wert 256 erreicht hat.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def gewonnen():\n    for zeile in spielfeld:\n        for zelle in zeile:\n            if zelle == 256:\n                print('Yee, du hast gewonnen!')\n                return True\n    return False\n")),(0,r.kt)("h4",{id:"verloren"},"Verloren:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Die Funktion "verloren()" war dagegen schon deutlich schwieriger zu machen. Ich musste dabei von jeder Zelle alle Nachbaren (oben, unten, links, rechts) \xfcberpr\xfcfen, ob sie den gleichen Wert haben. Zus\xe4tzlich muss ich vor der \xdcberpr\xfcfung aber auch schauen, ob das zu testende Feld \xfcberhaupt existiert, da es sonst einen Fehler gibt. Dies machte mir am Anfang noch Probleme. Ich habe dies gel\xf6st, indem ich die If-Bedingungen f\xfcr die "Nachbar\xfcberpr\xfcfung" in eine If-bedingung der "Existiert-feld-\xfcberpr\xfcfung" hineingesetzt habe.')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def verloren():\n    for zeile in range(5):\n        for zelle in range(5):\n            if (zelle + 1) <= 4:\n                if spielfeld[zeile][zelle] == spielfeld[zeile][zelle + 1]:\n                    return False\n            if (zelle - 1) >= 0:\n                if spielfeld[zeile][zelle] == spielfeld[zeile][zelle - 1]:\n                    return False\n            if (zeile + 1) <= 4:\n                if spielfeld[zeile][zelle] == spielfeld[zeile + 1][zelle]:\n                    return False\n            if (zeile - 1) >= 0:\n                if spielfeld[zeile][zelle] == spielfeld[zeile - 1][zelle]:\n                    return False\n    print('Schade, du hast verloren!')\n    return True\n")),(0,r.kt)("h3",{id:"zuf\xe4lliges-spielfeld-generieren"},(0,r.kt)("strong",{parentName:"h3"},"Zuf\xe4lliges Spielfeld generieren:")),(0,r.kt)("p",null,"-Als Finish habe ich noch ein zuf\xe4lliges Spielfeld generiert, damit man nicht immer mit dem gleichen Spielfeld startet. Dies habe ich gemacht, indem ich am Anfang ein leeres Spielfeld generiert habe und dies dann mit zuf\xe4lligen Zahlen (2, 4, 8 oder 16) bef\xfcllt habe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"def erstelle_zuf\xe4lliges_board():\n    global spielfeld\n    for zeile in range(5):\n        for zelle in range(5):\n            spielfeld[zeile].append(2**random.randint(1, 4))\n")),(0,r.kt)("p",null,'Hier sind vor allem die aktuellen Codebl\xf6cke von mir drin, jedoch mit Beschreibung meines Vorgehens und dem "Endresultat".'))}o.isMDXComponent=!0}}]);