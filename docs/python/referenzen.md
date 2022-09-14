## Phänomen der Listen'verknüpfung':

Der Teil...

```py
matrix[1][1]
```

...ist auf die erste Zeile in der Matrixliste bezogen. Da diese Zeile oben als...

```py
zeile = [0, 1, 0]
```

...definiert ist, heisst das, dass 'matrix[1][1]' sich indirekt auf diese Liste bezieht. Ändert sich also in dieser Zeilenliste etwas, wird dies _verändert_ nachher drei Mal wiederholt, was zu Resultat führt, dass drei Mal eine Zeile mit drei Nullen vorkommt.
