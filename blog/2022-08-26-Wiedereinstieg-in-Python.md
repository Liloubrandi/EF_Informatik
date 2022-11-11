# Wiedereinstieg in Python

---

### Mein persönlicher Einstieg:

Ich habe vorher noch nie mit der Bibliothek 'turtle' gearbeitet, deshalb kam mir (ausser viellicht die Struktur) fast nichts bekannt vor. Es war jedoch sehr selbsterklärend und deswegen konnte ich gut den Anschluss finden.  
.

### Meine Fehler:

Obwohl ich diesen Fehler bereits begangen habe, habe ich immer vergessen die **Anführungszeichen** bei den **Farben** in der Klammer hinzuzufügen.

```py
from turtle import *

pencolor('red')
pensize(5)
forward(30)
right(90)
```

Wenn man in einem If etwas mitem einem Gleichzeichen vergleichen will, muss man immer ein Doppelgleich (==) setzen. Ein = wäre eine Zuweisung bei einer Variable.

```py
if i == 3:
    sechseck(100-10*i,'green')
#Dies ist nur ein Ausschnitt aus Codeblock
```

Ich habe erst nach dem dritten Mal lesen gemerkt, dass ich bei der Aufgabe mit der Stadt nicht 'pencolor(choice([1,3,5,7,9]))' schreiben muss, sondern die Farbnahmen auflisten muss haha:/  
.

### Das war mir besonders neu:

Das man sequenzieren kann mit 'for i in range(n)'

```py
from turtle import *

for i in range(4))
    left(90)
    forward(80)
```

.

### Fragen, die aufgetaucht sind zu Übungen:

Kann man Kreise (circle(x,y)) nur nach links machen oder auch der andere Weg?

```py
blume()
right(40)
pencolor('black')
pensize(2)
for i in range(20):
    forward(10)
    right(2)
#nicht richtiges Codebeispiel, nur Auschnitt aus dem Code mit meiner Lösung (anstatt mit den circle-Funktionsaufruf)
```

Kann Python auch hochrechnen mit Hochzeichen (^) anstatt nur mit x \* x?

```py
left(135)
    forward(sqrt(size * size + size * size))
    left(90)
    forward(sqrt(size * size + size * size)/2)
#nur Ausschnitt aus Codeblock
```

Wie mache ich beim Ratespiel die Möglichkeit das Ganze abzubrechen?
