# Identity Import

<Aside type='warning' header='⚠️ THIS PAGE IS OUTDATED'>
We're no longer support "Support++ demo"
</Aside>

TeamSpeak³ setzt auf Identitäten. Die Sicherheitsstufen geben an, wie lange jemand benötigt um eine neue Sicherheitsstufe der Identität zu erhöhen. Dahinter steckt Sicherheit stuff.

Standartmäßig stellt der TeamSpeak³ Server mit eine Sicherheitsstufe von 8 voraus.
Sinusbot hat generierte Identity mit dem Level 9.

In den meisten Fällen, ist es daher möglich direkt auf den TeamSpeak³ Server zu connecten.
Solle aber der Server eine höhere Sicherheitsstufe verlangen, müssen Sie diese manuell erhöhen.

## Anleitung

1.  Melden Sie sich in Ihrem TeamSpeak³ Client an.
2.  Unter dem Reiter `Extras` -> `Identitäten` finden Sie eine Liste aller bereits erstellen Identitäten.

    ![id-1](../static/identities.png)

3.  Wählen Sie eine aus. Oder erstellen Sie eine neue.

<Aside type='warning' header='Wir empfehlen, erstellen Sie auf jeden Fall eine neue Identität.'>

</Aside>

4.  Rechtsklick auf die `Identity` -> `exportieren` -> _(ja export bestätigen)_
5.  Wählen Sie nun einen Speicherort Ihrer Wahl aus.
6.  Öffnen Sie nun die gerade gespeicherte Datei. _(der Windows 10 Editor unterstützt Sie dabei)_
7.  Die Datei sollte nun so aussehen:

![id-2](../static/identity-file.png)
Kopieren Sie nun den Wert in den Anführungszeichen von `identity=`.

Tada!

## Support++ Demo

Wir gehen nun in die Support++ Demo

![id-3](../static/demo.png)

Wir fügen diesen nur noch in das Feld `Identity` ein. Und fertig!

**Dein Sinusbot hat nun eine höhere Identity.**
