var lection3;
(function (lection3) {
    /*
    Aufgabe: <Aufgabe 3>
    Name: <Sina Haas>
    Matrikel: <>
    Datum: <14.04.19>
        
    In Zusammenarbeit mit Bente Gossel, Katharina Schmitt, Julian Schubert, mit Hilfe von Lucas Rohrberg.
    */
    let hk;
    function handkartenanzahl() {
        let handkarten = prompt("Handkartenanzahl eingeben", "1-6");
        hk = Number(handkarten);
        if (hk > 6 || hk < 1) {
            alert("Lesen Bitte :) Zwischen 1-6 Handkarten");
            handkartenanzahl();
        }
        return hk;
    }
    handkartenanzahl();
    let Karte1 = {
        Wert: "7",
        Typ: "Pik",
        Reihenfolge: 1,
    };
    let Karte2 = {
        Wert: "8",
        Typ: "Pik",
        Reihenfolge: 2,
    };
    let Karte3 = {
        Wert: "9",
        Typ: "Pik",
        Reihenfolge: 3,
    };
    let Karte4 = {
        Wert: "10",
        Typ: "Pik",
        Reihenfolge: 4,
    };
    let Karte5 = {
        Wert: "Bube",
        Typ: "Pik",
        Reihenfolge: 5,
    };
    let Karte6 = {
        Wert: "Dame",
        Typ: "Pik",
        Reihenfolge: 6,
    };
    let Karte7 = {
        Wert: "König",
        Typ: "Pik",
        Reihenfolge: 7,
    };
    let Karte8 = {
        Wert: "Ass",
        Typ: "Pik",
        Reihenfolge: 8,
    };
    let Karte9 = {
        Wert: "7",
        Typ: "Karo",
        Reihenfolge: 9,
    };
    let Karte10 = {
        Wert: "8",
        Typ: "Karo",
        Reihenfolge: 10,
    };
    let Karte11 = {
        Wert: "9",
        Typ: "Karo",
        Reihenfolge: 11,
    };
    let Karte12 = {
        Wert: "10",
        Typ: "Karo",
        Reihenfolge: 12,
    };
    let Karte13 = {
        Wert: "Bube",
        Typ: "Karo",
        Reihenfolge: 13,
    };
    let Karte14 = {
        Wert: "Dame",
        Typ: "Karo",
        Reihenfolge: 14,
    };
    let Karte15 = {
        Wert: "König",
        Typ: "Karo",
        Reihenfolge: 15,
    };
    let Karte16 = {
        Wert: "Ass",
        Typ: "Karo",
        Reihenfolge: 16,
    };
    let Karte17 = {
        Wert: "7",
        Typ: "Kreuz",
        Reihenfolge: 17,
    };
    let Karte18 = {
        Wert: "8",
        Typ: "Kreuz",
        Reihenfolge: 18,
    };
    let Karte19 = {
        Wert: "9",
        Typ: "Kreuz",
        Reihenfolge: 19,
    };
    let Karte20 = {
        Wert: "10",
        Typ: "Kreuz",
        Reihenfolge: 20,
    };
    let Karte21 = {
        Wert: "Bube",
        Typ: "Kreuz",
        Reihenfolge: 21,
    };
    let Karte22 = {
        Wert: "Dame",
        Typ: "Kreuz",
        Reihenfolge: 22,
    };
    let Karte23 = {
        Wert: "König",
        Typ: "Kreuz",
        Reihenfolge: 23,
    };
    let Karte24 = {
        Wert: "Ass",
        Typ: "Kreuz",
        Reihenfolge: 24,
    };
    let Karte25 = {
        Wert: "7",
        Typ: "Herz",
        Reihenfolge: 25,
    };
    let Karte26 = {
        Wert: "8",
        Typ: "Herz",
        Reihenfolge: 26,
    };
    let Karte27 = {
        Wert: "9",
        Typ: "Herz",
        Reihenfolge: 27,
    };
    let Karte28 = {
        Wert: "10",
        Typ: "Herz",
        Reihenfolge: 28,
    };
    let Karte29 = {
        Wert: "Bube",
        Typ: "Herz",
        Reihenfolge: 29,
    };
    let Karte30 = {
        Wert: "Dame",
        Typ: "Herz",
        Reihenfolge: 30,
    };
    let Karte31 = {
        Wert: "König",
        Typ: "Herz",
        Reihenfolge: 31,
    };
    let Karte32 = {
        Wert: "Ass",
        Typ: "Herz",
        Reihenfolge: 32,
    };
    let kartenStapel = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8,
        Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18,
        Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28,
        Karte29, Karte30, Karte31, Karte32];
    let kartenHand = [];
    let x;
    let y;
    function verteileKarten() {
        for (y = 0; y < hk; y++) {
            x = Math.floor((Math.random() * kartenStapel.length));
            kartenHand.push(kartenStapel[x]);
            writeHtml(y);
            kartenStapel.splice(x, 1);
        }
    }
    verteileKarten();
    /* sortiere Karten*/
    document.getElementById("sortieren").addEventListener("click", sortiereKarten);
    function sortiereKarten() {
        console.log("Works."); //Nur Test ob click Button funktioniert 
        kartenHand.sort(vergleich);
        /*kartenHand.sort(vergleich2);*/
        document.getElementById("kartenHand").innerHTML = ""; //Alle Karten in dem Div werden gelöscht
        for (let i = 0; i < kartenHand.length; i++) { //Nur die Anzahl im Array wird sotiert, dann hört Schleife auf 
            writeHtml(i);
        }
    }
    function vergleich(a, b) {
        let typ1 = a.Typ;
        let typ2 = b.Typ;
        if (typ1 > typ2) {
            return 1;
        }
        if (typ1 < typ2) {
            return -1;
        }
        else {
            return 0;
        }
    } // Kann auch Strings vergleichen  
    /*function vergleich2(uno: Karte, dos: Karte): number{
        let typuno = uno.Wert;
        let typdos = dos.Wert;

        if(typuno > typdos){
            return 1;
        }

        else if(typuno < typdos){
            return -1;
        }

        else { return 0}
    }*/ //geht sowieso nicht, da dann die vorherige Sortierung nach Wert aufgehoben werden würde.
    /*Augelagert, da ich später noch einmal darauf zugreife.*/
    function writeHtml(_y) {
        let prodElement = document.createElement('div');
        document.getElementById("kartenHand").appendChild(prodElement);
        let karte = `<div class="${kartenHand[_y].Typ}" id="${kartenHand[_y].Reihenfolge}">${kartenHand[_y].Typ} ${kartenHand[_y].Wert}</div>`;
        prodElement.innerHTML = karte;
    }
    /* ziehe eine Karte zufällig wenn Klick und Leertaste*/
    document.getElementById("stapel").addEventListener("click", zieheEineKarte);
    document.body.addEventListener("keydown", leertaste);
    function leertaste(event) {
        if (event.keyCode == 32) {
            zieheEineKarte();
        }
    }
    /*ziehe eine Karte vom Stapel wenn du auf den Stapel klickst*/
    function zieheEineKarte() {
        if (kartenStapel.length > 0) {
            let k;
            k = Math.floor((Math.random() * kartenStapel.length));
            let prodElement = document.createElement('div');
            document.getElementById("kartenHand").appendChild(prodElement);
            kartenHand.push(kartenStapel[k]);
            /*writeHtmlKarteZiehen(k);*/
            let karteziehen = `<div class="${kartenStapel[k].Typ}"> ${kartenStapel[k].Typ} ${kartenStapel[k].Wert} </div>`;
            prodElement.innerHTML = karteziehen;
            kartenStapel.splice(k, 1);
            document.getElementById("kartenHand").innerHTML = ""; //leeren um den Array Bereich mit dem erstellten Array erneut zu füllen. Verhindert, dass ich beim Karten ablegen, gezogene Karten vor dem sortieren nicht ablegen kann.
            for (let v = 0; v < kartenHand.length; v++) {
                writeHtml(v);
            }
        }
        else {
            alert("Nö keine Karten mehr, Ätsch");
        }
    }
    /*Karten ablegen*/
    let ablegestapel = [];
    document.getElementById("kartenHand").addEventListener("click", karteAblegen); //Wenn irgendwo im kartenHand Bereich geklickt wird, wird der Auslöser ermittelt
    function karteAblegen(event) {
        let s = 0;
        while (s < kartenHand.length) { //while oder for, kommt aufs selbe raus.
            //karteId ist vom Typ HTML Element und speichert Wert, welcher das Event triggert.
            let karteId = event.target;
            if (kartenHand[s].Reihenfolge == Number(karteId.getAttribute("id"))) { //Muss von String zur Number werden um beide vergleichen zu können // läuft Karten im Hand Array einmal durch, wenn es zur geklickten ID passt wird es in den Ablagestapel gepushed
                ablegestapel.push(kartenHand[s]);
                let prodElement = document.createElement('div');
                document.getElementById("ablagestapel").appendChild(prodElement);
                let ablegekarte = `<div class="${kartenHand[s].Typ}" id="${kartenHand[s].Reihenfolge}">${kartenHand[s].Typ} ${kartenHand[s].Wert}</div>`;
                prodElement.innerHTML = ablegekarte;
                kartenHand.splice(s, 1);
                document.getElementById("kartenHand").innerHTML = "";
                for (let o = 0; o < kartenHand.length; o++) {
                    writeHtml(o); // Der neue KartenHand Bereich/Array muss nun wieder neu dargestellt werden, das sonst die Karte nicht verschwindet
                }
            }
            s++;
        }
    }
})(lection3 || (lection3 = {}));
//# sourceMappingURL=main.js.map