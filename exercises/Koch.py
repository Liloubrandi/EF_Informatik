from turtle import *


def Kochkurve(size):
    if size < 8:
        forward(size)
        left(60)
        forward(size)
        right(120)
        forward(size)
        left(60)
        forward(size)
    else:
        Kochkurve(size / 3)
        left(60)
        Kochkurve(size / 3)
        right(120)
        Kochkurve(size / 3)
        left(60)
        Kochkurve(size / 3)


Kochkurve(60)
