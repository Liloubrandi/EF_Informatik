## Login - Cookies

Was ist ein Cookie?

- Ein Cookie speichert wichtige Informationen wie (bei unserem Login) Passwort (Nur der Hashwert des Passwortes), Name, Geburtsdatum usw.
- Es ist eine kleine Textdatei, die gespeichert wird (vom Client) und später vom Webserver wieder aufgerufen werden kann.

Weshalb ist ein Cookie praktisch? Wie funktioniert ein Login damit?

- Es vereinfacht das Login: Das Cookie kann sich deine Daten merken und diese bei einem Login mitschicken (als Vorschlag). Somit kann man sich dann anmelden, ohne alles jedes mal von neuem einzugeben.
- Die mitgeschickten Daten werden dann mit den gespeicherten Daten verglichen. Stimmen sie überein, so gelingt das Login.

Unser Beispiel benutzt eine einfache Benutzerdatenbank. Was darf NIE so gemacht werden, wie wirs gemacht haben? Welche Ansätze gibts zur Verbesserung?

- Das Passwort darf nicht einfach als Textdatei gespeichert werden. Wenn jemand auf die Datenbank zugreifen kann, wo alle diese informationen gespeichert sind, kann er also diese einfach so veröffentlichen oder weiter benutzen (Data-Breaches). Zur Lösung speichert man einen so genannten Hashwert des Passworts. Dieser ist eindeutig einem Passwort zugeorndet, jedoch, augrund der kleineren Wertemenge von Hashes, nicht umkehrbar - man kann mit deinem Passwort auf den Hashwert kommen, jedoch nicht vom Hashwert auf das Passwort.
