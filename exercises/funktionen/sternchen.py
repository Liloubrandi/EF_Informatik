def durchgezogene_linie(anzahl_stern):
    print(anzahl_stern * '*')


def seiten_linie(anzahl_stern):
    # wieso plus und nicht Komma möglich?
    print('*' + (anzahl_stern - 2) * ' ' + '*')


def sternenrechteck(anzahl_stern, höhe):
    if anzahl_stern < 2:
        print('Anzahl der Sterne ist zu klein')
        return
    if höhe < 1:
        print('Höhe ist zu klein')
        return
    durchgezogene_linie(anzahl_stern)
    for i in range(höhe):
        seiten_linie(anzahl_stern)
    durchgezogene_linie(anzahl_stern)


sternenrechteck(5, 3)
