spielfeld = [
    [2, 4, 8, 8, 32, 2],
    [2, 2, 8, 16, 16, 8],
    [4, 8, 2, 2, 2, 16],
    [2, 4, 8, 16, 2, 4],
    [8, 8, 16, 2, 2, 2],
    [8, 4, 2, 4, 16, 32]
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
        return True  # Notwendig?
    except:
        print('Zeilen- und Spaltennummer müssen Zahlen sein!')
        return False


def eingabe():
    # invalide Eingaben, damit der Code unter while überhaupt durchgeführt wird.
    zeile = " "
    spalte = " "
    while not eingabe_validieren(zeile, spalte):
        zeile = input('Gib eine Zeilennummer zwischen 1 und 6 ein:')
        spalte = input('Gib eine Spaltennummer zwischen 1 und 6 ein:')
    # noch einmal, weil bei eingabe_validieren überprüft es nur
    return (int(zeile), int(spalte))


def auswerten(zeile, spalte):
    # im Spielfeld die richtige Liste (zeile), dann richtige Position in Liste (spalte)
    spielfeld[zeile][spalte] = 0


def play():
    while True:
        spaltennummer()
        mache_spielfeld()
        x, y = eingabe()
        auswerten(x, y)
        spaltennummer()
        mache_spielfeld()


play()
