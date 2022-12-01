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

!!! WICHTIG: Ich muss die Zahlen zurückgeben, damit sie weiterverwendet werden können.

- Dann habe ich eine neue Funktion "auswerten()" erstellt, die die Koordiaten liest und im Spielfeld sucht. Das gefundene Feld wird mit 0 markiert, was bei der "mache_spielfeld"-Funktion dazu führt, dass das Feld leer ausgegeben wird.

```py
def auswerten(zeile, spalte):
    # im Spielfeld die richtige Liste (zeile), dann richtige Position in Liste (spalte)
    spielfeld[zeile][spalte] = 0
```

!!! WICHTIG: Die Zahlen müssen an Variablen übergeben werden, die dann als zeile und spalte Parameter an die Funktion "auswerten()" übergeben werden kann. Dies geschieht in eingabe_validieren()"

```py
    x, y = eingabe()
    auswerten(x, y)
```

- Als letztes habe ich alle diese Funktionen in eine gesamte Funktion "play()" hineingeschrieben und diesen Vorgang solange das Spiel läuft (momentan unendlich lange) laufen lassen.
