# Discord Module

![header](../static/discord-module-header.png)

<Aside type='info' header='Check out our tutorial'>
<a href="https://www.youtube.com/watch?v=5nW4xLKda-g">Tutorial von HilfePlus auf YouTube. Danke</a>

</Aside>

## Einleitung

Sie möchten auch über Kunden informiert werden, die auf Ihrem TeamSpeak³
Server, in Ihrerer Abwesenheit einen der Support Channel betreten hat?
Oder doch einfach nur als Übersicht? Kein Problem, das Discord module
ist eine Art Notification Bridge und sendet Benachrichtigungen in einen
vorher definierten Discord Channel.

## Installation

<Aside type='warning' header='⚠️ Dieses Module ist ab Version 2.6.0 verfügbar.'>
</Aside>

1.  Klicken Sie auf folgenden Link: [Discord Bot hinzufügen](https://discordapp.com/api/oauth2/authorize?client_id=303607172544200714&permissions=0&scope=bot)

2.  Wählen Sie den Discord Server aus und autorisieren Sie den Support++
    Discord Bot Ihrem Server beizutreten.

3.  Dieser Vorgang ist erfolgreich, wenn Sie den `Support++#9820` in der
    Mitgliederliste Ihres Discord Servers finden.

![header-d](../static/mliste.png)

4.  Schreiben Sie nun den Channel, in dem Sie auch die
    Benachrichtigungen empfangen möchten: `!id`

<Aside type='notic' header='Achtung: Der Bot benötigt Lese sowie Schreibrechte.'>
</Aside>

5.  Der Bot antwortet Ihnen mit einer solchen Nachricht:

    ![image-d](../static/token.png)

    Der Code in dem Codeblock, geben Sie nun in der Support++ Sinusbot
    Konfiguration ein. Fertig.

Sie sollten nach dem speichern eine Nachricht erhalten. Der Vorgang ist
nun abgeschlossen und Sie können nun Nachrichten in Discord empfangen.

## Probleme

**Ich empfangen keine Antwort auf `!id`**  
Überprüfen Sie, ob der Bot die benötigten Berechtigungen besitzt,
Nachrichten zu schreiben und Sie zu lesen.

**Ich erhalte die Fehlernachricht `5990 Blocked`**
Es scheint so, als ob unser System Sie aufgrund von Float oder Spamming
blockiert hat. Wir geben Ihnen jederzeit eine Möglichkeit, diese
Blockade aufzuheben. Bitte schreiben Sie uns einfach auf Discord.

**Gibt es die Funktion `/reply` noch?**
Momentan nicht, wir sind aber mit Hochdruck daran, diese Funktion
überarbeitet und mit mehr Funktionen wieder freizuschalten.
