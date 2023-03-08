## Cheatsheet APIs

**Was ist eine API?**
Eine API ist ein Programm, welches auf dem Server läuft und auf Nachfragen des Clients warten. Nach einer Nachfrage übermittelt die API die nötigen, gefundenen Daten.

**JSON Format**
JavaScript Object Notation. Ist eine Art die Daten im Body zu formatieren und basiert auf dem Key-Value System. -> Format: {"key": "value"}

**XML Format**
Extensible Markup Language. Ist eine Art die Daten im Body zu formatieren und basiert auf Root- und Childnotes (übergeordnete und untergeordnete Nodes). -> Format: <rootnodes><value_tag/childnode>value</value_tag/childnode></rootnodes>

**HTTP request**
HTTP = Hypertext Transfer Protocol -> ist ein Protokoll. Das ist eine Nachfrage nach Daten von Client an den Server (Request-Response Cycle zwischen Client und Server), welcher mit der "Sprache" HTTP übertragen wird.

- URL: Adresse
- Methoden: Art des Requests
  GET: Fordert den Server auf, eine Ressource abzurufen
  POST: Eine neue Ressource kreieren
  PUT: Eine vorhandene Ressource bearbeiten/aktualisiseren
  DELETE: Eine Ressource zu löschen
- Headers: Metadaten des Requests - welche Art von Gerät wird verwendet("User-agent")
- Body: eigentliche Daten (oft in JSON (XML))

**HTTP statuscodes**
Codes, um auf einen Request zu antworten. Jeder Code hat eine andere Bedeutung, z.B.:

- 404: Ressource nicht gefunden
- 200: Alles OK
- 401: Zugriff verweigert

**Endpunkte**
Letzter Schritt nach Anfrage bevor eine Antwort kommt. (Nur auf dem Server, nach allen Slashs in der URL)

**Polling**
Das wiederholte Requesten eines Updates der Daten vom Client.
-> Long Polling: Der Client requestet ein Update und der Server antwortet erst, wenn es Update gibt, um effizienter zu sein.

**Integration**
Wenn zwei Syteme (Websites, Desktops, Smartphones) über eine API verbunden sind. Bei einer Integration hat es immer zwei Seiten - den Server und den Client.
