# WhatsApp Module

![header](../static/whatsapp-banner.png)


## Einleitung

Sie möchten auch über Kunden informiert werden, die auf Ihrem TeamSpeak³
Server, in Ihrerer Abwesenheit einen der Support Channel betreten hat?
Oder doch einfach nur als Übersicht? Kein Problem, das WhatsApp module
ist eine Art Notification Bridge und sendet Benachrichtigungen direkt 
an einen vorher verifizierten Nummer.

## Installation

<Aside type='warning' header='⚠️ Um dieses Module nutzen zu können, benötigen Sie einen Account für die closed beta. Sie können sich hier anmelden: <a href="https://beta-whatsapp.support-pp.de/">https://beta-whatsapp.support-pp.de/</a>'>
</Aside>
<Aside type='warning' header='⚠️ Dieses Module ist ab Version 2.7.0 verfügbar.'>
</Aside>

![header-d](../static/c85601fc28324c18bd5038d69a3d9464.png)

1.  Öffnen Sie unsere [WhatsApp-Console](https://whatsapp-console.support-pp.de/)
3.  Melden Sie sich mit den Zugangsdaten an. 
**Hinweis: Die Zugangsdaten erhalten Sie nach freigabe im BETA Programm. Die Zugangsdaten können nur durch Support++ Teammitglieder erstellt werden.**

![header-d](../static/781d8a083b652d122fbb26bdb503cb82.png)

7.  Scannen Sie den QR-Code mit einem entsprechenden QRCode-Scanner *(Tipp: moderne Smartphones haben diesen bereits in der normalen Kamera App integriert.)*

![header-d](../static/d748133e1c50173961ffe6459a36d204.png)

9.  Daraufhin öffnet sich WhatsApp mit einer Nachricht: ```!verify xxxxxxxxx```.

![header-d](../static/bf1c262837b5652d94f953539bfbd944.png)

11.  Senden Sie diese Nachricht an unseren Bot. Fertig! Sie haben Ihre Nummer nun verifiziert.
12.  Öffnen Sie erneut die [WhatsApp-Console](https://whatsapp-console.support-pp.de/) und aktualisieren Sie die Webseite.
    Sie sollten nun die Nachricht sehen, dass eine Nummer erfolgreich verknüpft wurde.
    
![header-d](../static/1a12ef21d719281cc18a58aca18523aa.png)

6. Klicken Sie auf den Button ("Create new API Key") um einen neuen Token zu generieren. Fügen Sie diesen in der Sinusbot Konfiguration ein. 
Mit diesem Schritt ist die Installation abgeschlossen.

Sie sollten nach dem speichern eine Nachricht erhalten. Der Vorgang ist
nun abgeschlossen und Sie können nun Nachrichten in Discord empfangen.

## Probleme

**Ich empfangen keine Nachrichten**  
Überprüfen Sie, ob Ihre Nummer verifiziert ist, Ihre API Key gültig ist und Sie den Bot nicht blockiert haben.
Kontaktieren Sie uns bei weiteren Problemen.

**Ich erhalte die Fehlernachricht `5990 Blocked`**
Es scheint so, als ob unser System Sie aufgrund von Float oder Spamming
blockiert hat. Wir geben Ihnen jederzeit eine Möglichkeit, diese
Blockade aufzuheben. Bitte schreiben Sie uns einfach auf Discord.

**Was bedeutet Limit erreicht?**
Wir haben eine Begrenzung für Nachrichten eingebaut. Sie können nur x Nachrichten pro Tag über WhatsApp empfangen.
Dies ist auf anfallende Kosten auf unsererseite zurückzuführen. 
