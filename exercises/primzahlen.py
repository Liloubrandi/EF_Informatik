# Möglichkeit 1:
primzahlen = [2, 3, 5, 7]
rechnen = [2, 3, 5, 7]
for i in range(1, 100):
    if i > 1:
        for x in range(4):
            if (i % rechnen[x] == 0):
                break
        else:
            primzahlen.append(i)
print(primzahlen)

# Möglichkeit 2:
primzahlen = []
for i in range(1, 100):
    if i > 1:
        for x in range(2, i):
            if i % x == 0:
                break
        else:
            primzahlen.append(i)
print(primzahlen)

# Möglichkeit 3:
primzahlen = [2, 3, 5, 7]
for i in range(2, 100):
    if i % 2 != 0 and i % 3 != 0 and i % 5 != 0 and i % 7 != 0:
        primzahlen.append(i)
print(primzahlen)
