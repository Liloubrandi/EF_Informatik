spielfeld = [
    [8, 4, 16, 8, 32],
    [2, 2, 2, 16, 16],
    [4, 8, 2, 2, 2],
    [8, 4, 8, 16, 4],
    [8, 8, 16, 32, 4]
]


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
            elif field > 9:
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
        if zeile < 1 or zeile > 5:
            print('Zeile ist nicht im Feld')
            return False
        elif spalte < 1 or spalte > 5:
            print('Spalte ist nicht im Feld')
            return False
        return True  # Notwendig? Ja, ewtas muss zurückgegeben werden
    except:
        print('Zeilen- und Spaltennummer müssen Zahlen sein!')
        return False
    # Kein Feld, dass keine gleichen Nachbaren hat


def eingabe():
    # invalide Eingaben, damit der Code unter while überhaupt durchgeführt wird.
    zeile = " "
    spalte = " "
    while not eingabe_validieren(zeile, spalte):
        zeile = input('Gib eine Zeilennummer zwischen 1 und 5 ein:')
        spalte = input('Gib eine Spaltennummer zwischen 1 und 5 ein:')
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
    index_zeile = 4
    for zeile in spielfeld[-1::-1]:
        index_zelle = 4
        for zelle in zeile[-1::-1]:
            if zelle == 0:
                zeilenindex = index_zeile
                while not zeilenindex < 0 and spielfeld[zeilenindex][index_zelle] == 0:
                    zeilenindex = zeilenindex - 1
                spielfeld[index_zeile][index_zelle] = spielfeld[zeilenindex][index_zelle]
            index_zelle = index_zelle - 1
        index_zeile = index_zeile - 1


def play():
    while True:
        spaltennummer()
        mache_spielfeld()
        x, y = eingabe()
        vorherige_zahl = spielfeld[x][y]
        auswerten(x, y, vorherige_zahl)
        felder_auffüllen(x, y, vorherige_zahl)
        spaltennummer()
        mache_spielfeld()


play()
