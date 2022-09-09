#primzahlen = []
#rechnen = [2, 3, 5, 7]
# for i in range(1, 100):
#   if i > 1:
#       for x in range(3):
#           if (i % rechnen[x] == 0):
#                break
#       else:
#           primzahlen.append(i)
# print(primzahlen)

primzahlen = []
for i in range(1, 100):
    if i > 1:
        for x in range(2, i):
            if (i % x) == 0:
                break
        else:
            primzahlen.append(i)
print(primzahlen)
