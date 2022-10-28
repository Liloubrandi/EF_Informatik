import zufallsworte as zufall
# Im Terminal " pip3 install zufallsworte " eingeben.

# Variablen
gesucht = zufall.zufallswoerter(1)[0]  # gibt ein Zufallswort zurück
# Problem bei Wörter mit grossen Anfangsbuchstaben. Lösung:
gesucht = gesucht.lower()

gefunden = []
falsch_geraten = []


def show():
    print('Falsche Buchstaben:', falsch_geraten)
    for buchstabe in gesucht:
        if buchstabe in gefunden:
            print(buchstabe, end=' ')  # schreibt die erratenen Buchstaben
        else:
            # schreibt die Lücken der noch zu erratenen Buchstaben
            print('_', end=' ')
    print('')


def is_valid(inp):  # inp ist der Input - ist er valide?
    if len(inp) != 1:
        return False
    return inp.isalpha()


def eingabe():
    buchstabe = input('Buchstabe? ')
    # Buchstabe wird in is_valid eingefügt/ falls is_valid false ausgibt
    while not is_valid(buchstabe):
        buchstabe = input('Buchstabe? ')
    return buchstabe.lower()  # macht Grossbuchstaben zu Kleinbuchstaben


# valid_inp ist bloss der Name, zeigt aber, dass man davon ausgeht, dass ein valider Input hineinkommt.
def auswerten(valid_inp):
    if valid_inp in gesucht:
        gefunden.append(valid_inp)
    else:
        # Buchstabe wird entweder zu gefunden oder zu falsch_geraten hinzugefügt.
        falsch_geraten.append(valid_inp)


def gewonnen():
    for buchstabe in gesucht:  # tester, ob man jeden Buchstaben hat.
        if buchstabe not in gefunden:
            return False
    return True


def game_over():
    if len(falsch_geraten) > 10:
        return True
    return gewonnen()


def play():
    while not game_over():
        show()
        inp = eingabe()
        auswerten(inp)
    if gewonnen():
        print('gewonnen!:), das Wort war:', gesucht)
    else:
        print('verloren:(, gesucht wäre:', gesucht)


play()
