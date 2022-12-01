# Mein Weg zum Numtrip-Game

### **Eingabe und Start:**

- Als erstes musste ich irgendwie nach einer Eingabe nach Zeilen- und Spaltennummer fragen. Dafür habe ich eine Funktion "eingabe()" geschrieben, in der ich nach den beiden Zahlen frage, diese trenne und als Liste zurückgebe.

```py
def eingabe():
    koordinaten = input('Gib eine Zeilen- und danach eine Spaltennummer ein:')
    koordinaten_als_liste = koordinaten.split(' ')
    return koordinaten_als_liste
```

!!! WICHTIG: Ich muss die Liste zurückgeben, damit sie weiterverwendet werden kann.

- Dann habe ich eine neue Funktion "auswerten()" erstellt, die die Koordiaten aus der Liste herausliest, sie in Zahlen verwandelt und im Spielfeld sucht. Das gefundene Feld wird mit 0 markiert, was bei der "mache_spielfeld"-Funktion dazu führt, dass das Feld leer ausgegeben wird.

```py
def auswerten(zeile, spalte):
    zeile = int(zeile) - 1
    spalte = int(spalte) - 1
    # im Spielfeld die richtige Liste (zeile), dann richtige Position in Liste (spalte)
    spielfeld[zeile][spalte] = 0
```

!!! WICHTIG: Die Zahlen in der Liste müssen an Variablen übergeben werden, die dann als zeile und spalte Parameter an die Funktion "auswerten()" übergeben werden kann.

```py
    x, y = eingabe()
    auswerten(x, y)
```

- Als letztes habe ich alle diese Funktionen in eine gesamte Funktion "play()" hineingeschrieben und diesen Vorgang solange das Spiel läuft (momentan unendlich lange) laufen lassen.
