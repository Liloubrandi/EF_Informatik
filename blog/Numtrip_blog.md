# Mein Weg zum Numtrip-Game

### **Eingabe und Start:**

- Als erstes musste ich irgendwie nach einer Eingabe nach Zeilen- und Spaltennummer fragen. Dafür habe ich eine Funktion "eingabe()" geschrieben, in der ich nach den beiden Zahlen frage. Die Eingabe wird noch validiert. Damit ich nun so lange frage, bis die Eingabe valide ist, verwende ich eine while-Schlaufe.

```py
def eingabe():
    # invalide Eingaben, damit der Code unter while überhaupt durchgeführt wird.
    valid = False
    while not valid:
        zeile = input('Gib eine Zeilennummer zwischen 1 und 5 ein:')
        spalte = input('Gib eine Spaltennummer zwischen 1 und 5 ein:')
        if eingabe_validieren(zeile, spalte) and feldauswahl_validieren(zeile, spalte):
            valid = True
    # noch einmal, weil bei eingabe_validieren überprüft es nur
    return (int(zeile) - 1, int(spalte) - 1)
```

!!! WICHTIG: Ich muss die Zahlen zurückgeben, damit sie weiterverwendet werden können.
!!! WICHTIG: Die Zahlen müssen noch einmal mit int() in Zahlen verwandelt werden, weil bei der Validierung bloss geschaut wird, ob es möglich wäre, diese in Zahlen umzuwandeln.

- Dann habe ich eine neue Funktion "auswerten()" erstellt, die die Koordiaten liest und im Spielfeld sucht. Das gefundene Feld wird mit 0 markiert, was bei der "mache_spielfeld"-Funktion dazu führt, dass das Feld leer ausgegeben wird.

```py
def auswerten(zeile, spalte):
    spielfeld[zeile][spalte] = 0
```

!!! WICHTIG: Die Zahlen müssen an Variablen übergeben werden, die dann als "zeile" und "spalte" -Parameter an die Funktion "auswerten()" übergeben werden kann. Dies geschieht in "eingabe()".

```py
    x, y = eingabe()
    auswerten(x, y)
```

- Als letztes habe ich alle diese Funktionen in eine gesamte Funktion "play()" hineingeschrieben und diesen Vorgang solange das Spiel läuft (momentan unendlich lange) laufen lassen. Später wurde dieser dann durch die Bedingungen "verloren()" und "gewonnen()" eingeschränkt. (-> mein Game-Loop)

### **Validierung:**

- Ich habe mit Alice sehr viel besprochen. Bei mir waren Probleme beim Validieren aufgetreten, da ich die Werte falsch oder als String übergeben habe. Bei ihr wurde das Wort "True" übergeben. Beides konten wir jedoch beheben.

```py
def eingabe_validieren(zeile, spalte):
    try:
        zeile = int(zeile) - 1
        spalte = int(spalte) - 1
        return True
    except:
        print('Zeilen- und Spaltennummer müssen Zahlen sein!')
        return False
```

??? Aufgetauchte Fragen: Muss hier 'return True' geschrieben werden? Wird hier zeile und spalte übergeben?

- Später habe ich dann die Funktion noch ergänzt, indem ich auch noch überprüft habe ob der eingegebene Wert überhaupt im Bereich des Spielfelds liegt:

```py
def eingabe_validieren(zeile, spalte):
    try:
        zeile = int(zeile) - 1
        spalte = int(spalte) - 1
        if zeile < 0 or zeile > 4:
            print('Zeile ist nicht im Feld')
            return False
        if spalte < 0 or spalte > 4:
            print('Spalte ist nicht im Feld')
            return False
        return True  # Notwendig? Ja, ewtas muss zurückgegeben werden
    except:
        print('Zeilen- und Spaltennummer müssen Zahlen sein!')
        return False
```

-Zum Abschluss der Validierung überprüfe ich noch, ob die Eingabe nicht nur valide, sondern auch erlaubt ist: mit der Funktion "feldauswahl_validieren()", die prüft, ob das Feld überhaupt einen Nachbar hat und somit ausgewählt werden darf.

```py
def feldauswahl_validieren(zeile, spalte):
    zeile = int(zeile) - 1
    spalte = int(spalte) - 1
    if (spalte + 1) <= 4:
        if spielfeld[zeile][spalte] == spielfeld[zeile][spalte + 1]:
            return True
    if (spalte - 1) >= 0:
        if spielfeld[zeile][spalte] == spielfeld[zeile][spalte - 1]:
            return True
    if (zeile + 1) <= 4:
        if spielfeld[zeile][spalte] == spielfeld[zeile + 1][spalte]:
            return True
    if (zeile - 1) >= 0:
        if spielfeld[zeile][spalte] == spielfeld[zeile - 1][spalte]:
            return True
    print('Das ausgewählte Feld muss Nachbaren haben')
    return False
```

### **Nachbarzellen kombinieren:**

- Ich habe versucht den Floodfill-code so umzuwandeln, dass er in mein Spiel passt.

??? Leider ist ein kleines Problem aufgetreten. Da ich die Zahl bereits vorher auf 0 gesetzt hatte, testet es nun, ob 0 die zu testende Zahl gleich ist wie 0.

```py
def nachbarfelder_löschen(x, y, vorherige_Zahl):
    if spielfeld[x][y] == vorherige_Zahl:  # Zahl ist ja bereits 0??
        spielfeld[x][y] = 0
        nachbarfelder_löschen(x, y + 1)  # rechts
        nachbarfelder_löschen(x, y - 1)  # links
        nachbarfelder_löschen(x + 1, y)  # unten
        nachbarfelder_löschen(x - 1, y)  # oben
```

-Die Probleme habe ich behoben, in dem ich die vorige Funktion "auswerten()" nicht alleine gebraucht habe, sondern in die Funktion "nachbarfelder_löschen()" eingebaut und auf "auswerten()" umgetauft habe. Zusätzlich habe ich eine Zahl vorher übergeben, welche die Zahl in diesem Feld speichert und bei der rekursiven Auswerten-funktion benutzt werden kann. Damit es keine Fehler gibt, habe ich die Rahmenbedingung in den Code eingebaut.
-Später habe ich dann die Funktion "auswerten()" ergänzt mit diesem flood-fill-Algorythmus, in der alle aneinanderliegenden Felder mit dem gleichen Wert auf 0 gesetzt werden. Die fertige auswerten-Funktion sieht nun so aus:

```py
def auswerten(x, y, vorherige_Zahl):
    # Rahmenbedingungen
    if x < 0 or x > 4:
        return False
    if y < 0 or y > 4:
        return False
    # Feldüberprüfen
    # im Spielfeld die richtige Liste (zeile), dann richtige Position in Liste (spalte)
    if spielfeld[x][y] == vorherige_Zahl:
        spielfeld[x][y] = 0
        auswerten(x, y + 1, vorherige_Zahl)  # rechts
        auswerten(x, y - 1, vorherige_Zahl)  # links
        auswerten(x + 1, y, vorherige_Zahl)  # unten
        auswerten(x - 1, y, vorherige_Zahl)  # oben
```

### **Felder auffüllen:**

- Die Funktion "felder_auffüllen()" hat mir von allem die meisten Sorgen bereitet. Egal was ich versuchte, irgenwie ging nichts, wie ich es wollte und ich fang die Fehler einfach nicht. Es schrieb zufällige Zahlen irgendwo, wo ich sie nicht wollte und zuwenige oder falsche Felder fielen nach unten. Zudem habe ich sie zu Beginn viel zu kompliziert geschrieben, indem ich Variablen für die Koordinaten erstellt habe und durch alle Zellen durchiteriert habe, anstatt direkt die Variablen in eine Range-Schlaufe zu tun.
- Zwei grosse Fehler haben sich bei mir ergeben. Der Zeilenindex hatte die Bedingung >= 0 zu sein. Jedoch hiess das, dass er beim letzten Mal von 0 noch aus -1 stellte. Dies gab ein Fehler bei den Grenzen. Behoben habe ich ihn durch das Wegnehmen des Gleichzeichen - so konnte der Zeilenindex maximal auf 0 kommen. Der zweite grosse Fehler war, dass ich die Zahlen vertauscht haben und dann direkt eine zufällige Zahl eingesetzt habe. Hatte es oberhalb der vertauschten Zahlen noch eine Zahl, die nach unten fallen sollte, war dies nicht mehr möglich, da keine 0 mehr vorhanden war. Dadurch musste ich zuerst die Zahl auf 0 stellen und erst ganz am Ende durch das Feld gehen und alle leeren Felder mit zufälligen Zahlen befüllen.

Mein Endresultat:

```py
def felder_auffüllen(x, y, vorherige_zahl):
    spielfeld[x][y] = vorherige_zahl * 2
    for zeile in range(4, 0, -1):
        for zelle in range(4, 0, -1):
            if spielfeld[zeile][zelle] == 0:
                zeilenindex = zeile
                while zeilenindex > 0 and spielfeld[zeilenindex][zelle] == 0:
                    zeilenindex = zeilenindex - 1
                spielfeld[zeile][zelle] = spielfeld[zeilenindex][zelle]
                spielfeld[zeilenindex][zelle] = 0
    for zeile in range(5):
        for zelle in range(5):
            if spielfeld[zeile][zelle] == 0:
                spielfeld[zeile][zelle] = random.choice([2, 4, 8])
```

??? Eine Frage, die noch aufgetaucht ist: Wieso muss ich die letzten vier Zeilen mit range und den Koordinaten schreiben und kann nicht bloss durch die Zellen durchiterieren und die Zelle direkt vergleichen?

```py
for zeile in spielfeld:
    for zelle in zeile:
        if zelle == 0:
            zelle == random.choice([2, 4, 8])
```

### **Gewonnen und verloren:**

- Ganz am Schluss des Spiels habe ich noch eine Bedingung eingebaut, wann man gewonnen hat (wenn man die Zahl 256 erreicht hat) und wann man verloren hat (wenn man kein Feld mehr hat mit gleichwertigen Nachbaren).

#### Gewonnen:

- Die Funktion "gewonnen()" war relativ einfach. Ich musste bloss jedes Feld durchgehen und schauen, ob irgendeine Zelle den Wert 256 erreicht hat.

```py
def gewonnen():
    for zeile in spielfeld:
        for zelle in zeile:
            if zelle == 256:
                print('Yee, du hast gewonnen!')
                return True
    return False
```

#### Verloren:

- Die Funktion "verloren()" war dagegen schon deutlich schwieriger zu machen. Ich musste dabei von jeder Zelle alle Nachbaren (oben, unten, links, rechts) überprüfen, ob sie den gleichen Wert haben. Zusätzlich muss ich vor der Überprüfung aber auch schauen, ob das zu testende Feld überhaupt existiert, da es sonst einen Fehler gibt. Dies machte mir am Anfang noch Probleme. Ich habe dies gelöst, indem ich die If-Bedingungen für die "Nachbarüberprüfung" in eine If-bedingung der "Existiert-feld-überprüfung" hineingesetzt habe.

```py
def verloren():
    ort_in_zeile = 0
    for zeile in spielfeld:
        ort_in_zelle = 0
        for zelle in zeile:
            if (ort_in_zelle + 1) <= 4:
                if zelle == spielfeld[ort_in_zeile][ort_in_zelle + 1]:
                    return False
            if (ort_in_zelle - 1) >= 0:
                if zelle == spielfeld[ort_in_zeile][ort_in_zelle - 1]:
                    return False
            if (ort_in_zeile + 1) <= 4:
                if zelle == spielfeld[ort_in_zeile + 1][ort_in_zelle]:
                    return False
            if (ort_in_zeile - 1) >= 0:
                if zelle == spielfeld[ort_in_zeile - 1][ort_in_zelle]:
                    return False
            ort_in_zelle = ort_in_zelle + 1
        ort_in_zeile = ort_in_zeile + 1
    print('Schade, du hast verloren!')
    return True
```

Hier sind vor allem die aktuellen Codeblöcke von mir drin, jedoch mit Beschreibung meines Vorgehens und dem "Endresultat".
