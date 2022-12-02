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

Aufgetauchte Fragen: Muss hier 'return True' geschrieben werden? Wird hier zeile und spalte übergeben?

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
