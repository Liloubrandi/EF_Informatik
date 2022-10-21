# Variablen
gesucht = 'test'

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


def is_valid(inp):  # inp ist der Input
    return True


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
        falsch_geraten.append(valid_inp)


def gewonnen():
    for buchstabe in gesucht:
        if buchstabe not in gefunden:
            return False
    return True


def game_over():
    pass


def play():
    while not game_over:
        buchstabe = eingabe()
        auswerten(buchstabe)
        print(buchstabe)
        show()
    if gewonnen():
        print('gewonnen!:)')
    else:
        print('verloren:(')


play()
