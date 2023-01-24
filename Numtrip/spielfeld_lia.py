import random

spielfeld = [
    [],
    [],
    [],
    [],
    []
]


def erstelle_zufälliges_board():
    global spielfeld
    for zeile in range(5):
        for zelle in range(5):
            spielfeld[zeile].append(2**random.randint(1, 4))


def mache_spielfeld():
    zeile = 1
    print('  +', end='')
    print(len(spielfeld[1]) * '-------+')
    for line in spielfeld:
        print(zeile, end='')
        print(' |', end='')
        print(len(spielfeld[1]) * '       |')
        print('  ', end='')
        for field in line:
            if field == 0:
                print(f'|       ', end='')
            elif 99 > field > 9:
                print(f'|   {field}  ', end='')
            elif field > 99:
                print(f'|  {field}  ', end='')
            else:
                print(f'|   {field}   ', end='')
        print('|')
        print('  |', end='')
        print(len(spielfeld[1]) * '       |')
        print('  +', end='')
        print(len(spielfeld[1]) * '-------+')
        zeile = zeile + 1


def spaltennummer():
    spalte = 1
    print('  ', end='')
    for field in range(len(spielfeld[0])):
        if field == len(spielfeld[0]) - 1:
            print(spalte)
        else:
            print(spalte, end='       ')
            spalte = spalte + 1


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


def gewonnen():
    for zeile in spielfeld:
        for zelle in zeile:
            if zelle == 256:
                print('Yee, du hast gewonnen!')
                return True
    return False


def verloren():
    for zeile in range(5):
        for zelle in range(5):
            if (zelle + 1) <= 4:
                if spielfeld[zeile][zelle] == spielfeld[zeile][zelle + 1]:
                    return False
            if (zelle - 1) >= 0:
                if spielfeld[zeile][zelle] == spielfeld[zeile][zelle - 1]:
                    return False
            if (zeile + 1) <= 4:
                if spielfeld[zeile][zelle] == spielfeld[zeile + 1][zelle]:
                    return False
            if (zeile - 1) >= 0:
                if spielfeld[zeile][zelle] == spielfeld[zeile - 1][zelle]:
                    return False
    print('Schade, du hast verloren!')
    return True


def play():
    while not gewonnen() and not verloren():
        spaltennummer()
        mache_spielfeld()
        x, y = eingabe()
        vorherige_zahl = spielfeld[x][y]
        auswerten(x, y, vorherige_zahl)
        felder_auffüllen(x, y, vorherige_zahl)


erstelle_zufälliges_board()
play()
