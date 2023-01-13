# Mein Weg zum Numtrip-Game

### **Eingabe und Start:**

- Als erstes musste ich irgendwie nach einer Eingabe nach Zeilen- und Spaltennummer fragen. Dafür habe ich eine Funktion "eingabe()" geschrieben, in der ich nach den beiden Zahlen frage. Die Eingabe wird noch validiert.

```py
def eingabe():
    zeile = input('Gib eine Zeilennummer zwischen 1 und 6 ein:')
    spalte = input('Gib eine Spaltennummer zwischen 1 und 6 ein:')
    eingabe_validieren(zeile, spalte)
    return (zeile, spalte)
```

Obiger Code funktioniert so noch nicht genau, war bloss erster Versuch, Lösung weiter unten im Blog bei Validierung.

!!! WICHTIG: Ich muss die Zahlen zurückgeben, damit sie weiterverwendet werden können.

- Dann habe ich eine neue Funktion "auswerten()" erstellt, die die Koordiaten liest und im Spielfeld sucht. Das gefundene Feld wird mit 0 markiert, was bei der "mache_spielfeld"-Funktion dazu führt, dass das Feld leer ausgegeben wird.

```py
def auswerten(zeile, spalte):
    spielfeld[zeile][spalte] = 0
```

!!! WICHTIG: Die Zahlen müssen an Variablen übergeben werden, die dann als zeile und spalte Parameter an die Funktion "auswerten()" übergeben werden kann. Dies geschieht in eingabe_validieren()"

```py
    x, y = eingabe()
    auswerten(x, y)
```

- Als letztes habe ich alle diese Funktionen in eine gesamte Funktion "play()" hineingeschrieben und diesen Vorgang solange das Spiel läuft (momentan unendlich lange) laufen lassen.

### **Validierung: (2.12.22)**

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

```py
def eingabe():
    zeile = " "
    spalte = " "
    while not eingabe_validieren(zeile, spalte):
        zeile = input('Gib eine Zeilennummer zwischen 1 und 6 ein:')
        spalte = input('Gib eine Spaltennummer zwischen 1 und 6 ein:')
    return (int(zeile), int(spalte))
```

!!! WICHTIG: Die Zahlen müssen noch einmal mit int() in Zahlen verwandelt werden, weil bei der Validierung bloss geschaut wird, ob es möglich wäre, diese in Zahlen umzuwandeln.

### **Nachbarzellen kombinieren**

- Ich habe versucht den Floodfill-code so umzuwandeln, dass er in mein Spiel passt.

??? Leider ist ein kleines Problem aufgetreten. Da ich die Zahl bereits vorher auf 0 gesetzt hatte und es also testet, ob diese Zahl (also 0) eine 2 ist - was ja nie der Fall sein wird.

```py
def nachbarfelder_löschen(x, y, vorherige_Zahl):
    if spielfeld[x][y] == vorherige_Zahl:  # Zahl ist ja bereits 0??
        spielfeld[x][y] = 0
        nachbarfelder_löschen(x, y + 1)  # rechts
        nachbarfelder_löschen(x, y - 1)  # links
        nachbarfelder_löschen(x + 1, y)  # unten
        nachbarfelder_löschen(x - 1, y)  # oben
```

???Ausserdem wird nur die Zahl 2 getestet und nicht die Zahl, die vorher im Kasten stand - ich weiss nicht wie ich diese übergeben soll.

```py
nachbarfelder_löschen(zeile, spalte, 2)
```

- Die Probleme habe ich nun behoben, indem ich die Funktion auswerten ganz weggenommen habe (und somit die Zahl erst im "nachbarfelder_kombinieren" auf 0 gesetzt wird.) und die Funktion "nachbarfelder_komninieren" als Ganzes in "auswerten()" umgewandelt habe. Zusätzlich habe ich eine Zahl vorher übergeben, welche die Zahl in diesem Feld speichert und bei der rekursiven Auswerten-funktion benutzt werden kann. Damit es keine Fehler gibt, habe ich die Rahmenbedingung in den Code eingebaut.

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
