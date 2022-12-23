board = [
    [2, 4, 1, 8, 8],
    [4, 2, 8, 2, 1],
    [4, 4, 8, 4, 2],
    [2, 8, 1, 4, 1],
    [2, 4, 4, 4, 4]
]

for zeile in board:
    for zelle in zeile:
        # end='' macht, dass es keinen Zeilenumbruch gibt und die nächste Zeile hintendran geschrieben wird.
        print(' -', end='')
    print(' ')
    for zelle in zeile:
        # Es schreibt ein | und dann fügt es wegen den {}-Klammern das genannte(zelle)ein.
        print(f'|{zelle}', end='')
    print('|')

for zelle in board[0]:  # Anzahl Zellen in board[0] -> 5 Mal
    print(' -', end='')
print(' ')
