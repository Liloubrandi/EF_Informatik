#import random

#spielfeld = []

# def pprint(feld):
#    for zeile in spielfeld:
#        print(zeile)

# for i in range(5):
#    spielfeld.append([])
#    for j in range(5):
#        spielfeld[i].append(2**random.randint(1, 4))

# pprint(spielfeld)

spielfeld = [
    [2, 4, 4, 8, 32],
    [2, 2, 8, 16, 16],
    [4, 8, 8, 2, 2],
    [2, 4, 8, 16, 2],
    [8, 8, 16, 2, 2],
]


def mache_spielfeld():
    zeile = 1
    for line in spielfeld:
        print(zeile, end='')
        # sollte es nur einmal am Anfang schreiben
        print(' +-------+-------+-------+-------+-------+')
        print('  |       |       |       |       |       |')
        print('  ', end='')
        for field in line:
            if field > 9:
                print(f'|   {field}  ', end='')
            elif field > 99:
                print(f'|  {field}  ', end='')
            else:
                print(f'|   {field}   ', end='')
        print('|')
        print('  |       |       |       |       |       |')
        print('  +-------+-------+-------+-------+-------+')
        zeile = zeile + 1


def spaltennummer():
    spalte = 1
    for field in spielfeld[1]:
        # sollte beim letzten Mal nur noch die Spalte schreiben.
        if field == len(spielfeld[1]):
            print(spalten)
        else:
            print(spalte, end='       ')
            spalte = spalte + 1


spaltennummer()
mache_spielfeld()
