var lection3;
(function (lection3) {
    /*
    Aufgabe: <Aufgabe 2, MauMau>
    Name: <Sina Haas>
    Matrikel: <>
    Datum: <07.04.19>
        
    In Zusammenarbeit mit Bente Gossel, Katharina Schmitt, Julian Schubert, mit Hilfe von Lucas Rohrberg.
    */
    let hk;
    function handkartenanzahl() {
        let handkarten = prompt("Handkartenanzahl eingeben", "1-5");
        hk = Number(handkarten);
        return hk;
    }
    let Karte1 = {
        Wert: "7",
        Typ: "Pik",
    };
    let Karte2 = {
        Wert: "8",
        Typ: "Pik",
    };
    let Karte3 = {
        Wert: "9",
        Typ: "Pik",
    };
    let Karte4 = {
        Wert: "10",
        Typ: "Pik",
    };
    let Karte5 = {
        Wert: "Bube",
        Typ: "Pik",
    };
    let Karte6 = {
        Wert: "Dame",
        Typ: "Pik",
    };
    let Karte7 = {
        Wert: "König",
        Typ: "Pik",
    };
    let Karte8 = {
        Wert: "Ass",
        Typ: "Pik",
    };
    let Karte9 = {
        Wert: "7",
        Typ: "Karo",
    };
    let Karte10 = {
        Wert: "8",
        Typ: "Karo",
    };
    let Karte11 = {
        Wert: "9",
        Typ: "Karo",
    };
    let Karte12 = {
        Wert: "10",
        Typ: "Karo",
    };
    let Karte13 = {
        Wert: "Bube",
        Typ: "Karo",
    };
    let Karte14 = {
        Wert: "Dame",
        Typ: "Karo",
    };
    let Karte15 = {
        Wert: "König",
        Typ: "Karo",
    };
    let Karte16 = {
        Wert: "Ass",
        Typ: "Karo",
    };
    let Karte17 = {
        Wert: "7",
        Typ: "Kreuz",
    };
    let Karte18 = {
        Wert: "8",
        Typ: "Kreuz",
    };
    let Karte19 = {
        Wert: "9",
        Typ: "Kreuz",
    };
    let Karte20 = {
        Wert: "10",
        Typ: "Kreuz",
    };
    let Karte21 = {
        Wert: "Bube",
        Typ: "Kreuz",
    };
    let Karte22 = {
        Wert: "Dame",
        Typ: "Kreuz",
    };
    let Karte23 = {
        Wert: "König",
        Typ: "Kreuz",
    };
    let Karte24 = {
        Wert: "Ass",
        Typ: "Kreuz",
    };
    let Karte25 = {
        Wert: "7",
        Typ: "Herz",
    };
    let Karte26 = {
        Wert: "8",
        Typ: "Herz",
    };
    let Karte27 = {
        Wert: "9",
        Typ: "Herz",
    };
    let Karte28 = {
        Wert: "10",
        Typ: "Herz",
    };
    let Karte29 = {
        Wert: "Bube",
        Typ: "Herz",
    };
    let Karte30 = {
        Wert: "Dame",
        Typ: "Herz",
    };
    let Karte31 = {
        Wert: "König",
        Typ: "Herz",
    };
    let Karte32 = {
        Wert: "Ass",
        Typ: "Herz",
    };
    let kartenStapel = [Karte1, Karte2, Karte3, Karte4, Karte5, Karte6, Karte7, Karte8, Karte9, Karte10, Karte11, Karte12, Karte13, Karte14, Karte15, Karte16, Karte17, Karte18, Karte19, Karte20, Karte21, Karte22, Karte23, Karte24, Karte25, Karte26, Karte27, Karte28, Karte29, Karte30, Karte31, Karte32];
    handkartenanzahl();
    /*let kartenFarben: string[] = ["Pik", "Karo", "Kreuz", "Herz"];
    let kartenWerte: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];

    // Farben: Pik, Karo, Kreuz, Herz -> 8 Stück jeder Farbe
    // Werte: 7-10, Bube, Dame, König, Ass -> Alle einmal in einer Farbe
    // 32 Karten

    let neuKarte: string
    let neuKarte1: string
    let neuKarte2: string
    let neuKarte3: string*/
    /*let kartenStapel: string[] = [];*/
    /*function generiereKarten() {
        let i: number
        for (i = 0; i <= kartenWerte.length - 1; i++) {
            neuKarte = kartenFarben[0] + kartenWerte[i];
            neuKarte1 = kartenFarben[1] + kartenWerte[i];
            neuKarte2 = kartenFarben[2] + kartenWerte[i];
            neuKarte3 = kartenFarben[3] + kartenWerte[i];

            kartenStapel.push(neuKarte, neuKarte1, neuKarte2, neuKarte3);

            console.log(neuKarte)
            console.log(neuKarte1)
            console.log(neuKarte2)
            console.log(neuKarte3)
        }

    }
    
    generiereKarten();*/
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
        console.log("Works."); //Nur Test ob cklick Button funktioniert 
        kartenHand.sort(typvergleich);
        document.getElementById("kartenHand").innerHTML = ""; //Alle Karten in dem DIv werden gelöscht
        for (let i = 0; i < kartenHand.length; i++) { //Nur die Anzahl im Array wird sotiert 
            writeHtml(i);
        }
    }
    function typvergleich(a, b) {
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
    }
    /*erstellen der Handkarten*/
    function writeHtmlKarteZiehen(_k) {
        let prodElement = document.createElement('div');
        document.getElementById("kartenHand").appendChild(prodElement);
        let karteziehen = `<div class="${kartenStapel[_k].Typ}"> ${kartenStapel[_k].Typ} ${kartenStapel[_k].Wert} </div>`;
        prodElement.innerHTML = karteziehen;
    }
    function writeHtml(_y) {
        let prodElement = document.createElement('div');
        document.getElementById("kartenHand").appendChild(prodElement);
        let karte = `<div class="${kartenHand[_y].Typ}" id="${kartenHand[_y].Typ}">${kartenHand[_y].Typ} ${kartenHand[_y].Wert}</div>`;
        prodElement.innerHTML = karte;
    }
    /* ziehe eine Karte zufällig wenn Klick */
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
            kartenHand.push(kartenStapel[k]);
            writeHtmlKarteZiehen(k);
            kartenStapel.splice(k, 1);
        }
        else {
            alert("Nö keine Karten mehr, Ätsch");
        }
    }
    let ablegestapel = [];
    /*document.getElementById("").addEventListener("click", legeEineKarteAb);*/
    /*let triggerer = event.target
    triggerer.addEventListener("click", legeEineKarteAb);
    var x = event.target.tagName;
    

    function legeEineKarteAb(x:event) {
        var b = event.target;
        document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";

        ablegestapel.push(kartenHand[1]);
        

    }

    function myFunction(event) {
        var x = event.target;
        document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
      }

    console.log(ablegestapel);*/
    /*let auslöser:HTMLElement = <HTMLElement>event.target;*/
    /*document.getElementById("kartenHand").addEventListener("click", findeAuslöser) //Wenn irgendwo im kartenHand Bereich geklickt wird, wird der Auslöser ermittelt

    function findeAuslöser(ev: MouseEvent) {

        let test = ev.target;
        if (test.id == 'idKarte') {
            ablegestapel.push(kartenHand[positionImArray])
        }


    }*/
})(lection3 || (lection3 = {}));
//# sourceMappingURL=main.js.map