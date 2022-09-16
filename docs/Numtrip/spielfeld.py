import random
# spielfeld = [
#    [2, 4, 4, 8, 32],
#    [2, 2, 8, 16, 16],
#    [4, 8, 8, 2, 2],
#    [2, 4, 8, 16, 2],
#    [8, 8, 16, 2, 2],
# ]

spielfeld = []


def pprint(feld):
    for zeile in spielfeld:
        print(zeile)


for i in range(5):
    spielfeld.append([])
    for j in range(5):
        spielfeld[i].append(2**random.randint(1, 4))

pprint(spielfeld)
