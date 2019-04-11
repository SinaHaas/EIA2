namespace lection3 {
    /*
    Aufgabe: <Aufgabe 2, MauMau>
    Name: <Sina Haas>
    Matrikel: <>
    Datum: <07.04.19>
    	
    In Zusammenarbeit mit Bente Gossel, Katharina Schmitt, Julian Schubert, mit Hilfe von Lucas Rohrberg.
    */

    let hk: number

    function handkartenanzahl(): number {
        let handkarten: string = prompt("Handkartenanzahl eingeben", "1-5");

        hk = Number(handkarten);

        return hk;
    }

    handkartenanzahl();

    let kartenFarben: string[] = ["Pik", "Karo", "Kreuz", "Herz"];
    let kartenWerte: string[] = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];

    // Farben: Pik, Karo, Kreuz, Herz -> 8 Stück jeder Farbe 
    // Werte: 7-10, Bube, Dame, König, Ass -> Alle einmal in einer Farbe 
    // 32 Karten 

    let neuKarte: string
    let neuKarte1: string
    let neuKarte2: string
    let neuKarte3: string

    let kartenStapel: string[] = [];


    function generiereKarten() {
        let i: number
        for (i = 0; i <= kartenWerte.length - 1; i++) {
            neuKarte = kartenFarben[0] + kartenWerte[i];
            neuKarte1 = kartenFarben[1] + kartenWerte[i];
            neuKarte2 = kartenFarben[2] + kartenWerte[i];
            neuKarte3 = kartenFarben[3] + kartenWerte[i];

            kartenStapel.push(neuKarte, neuKarte1, neuKarte2, neuKarte3);

            /*console.log(neuKarte)
            console.log(neuKarte1)
            console.log(neuKarte2)
            console.log(neuKarte3)*/
        }

    }

    generiereKarten();





    let kartenHand: string[] = [];
    let x: number;
    let y: number;

    function verteileKarten() {

        for (y = 0; y < hk; y++) {
            x = Math.floor((Math.random() * kartenStapel.length));

            let prodElement = document.createElement('div');

            document.getElementById("kartenHand").appendChild(prodElement);

            kartenHand.push(kartenStapel[x]);
            let karte: string = `<p class="${kartenHand[y]} id="wähleKarteAus">${kartenHand[y]}</p>`

            prodElement.innerHTML = karte;

            kartenStapel.splice(x, 1);

        }
    }

    verteileKarten();




    
    
    /* sortiere Karten*/
    document.getElementById("sortieren").addEventListener("click", sortiereKarten);

    function sortiereKarten() {
        kartenHand.sort();
    }









    /* ziehe eine Karte zufällig wenn Klick */

    document.getElementById("stapel").addEventListener("click", zieheEineKarte);
    


    /*function zieheEineKarte() {
        
    
            for (let y = 0; y < kartenStapel.length; y++) {
    
                x = Math.floor((Math.random() * kartenStapel.length));
        
                kartenHand.push(kartenStapel[x]);
                
        
                kartenStapel.splice(x, 1);
    
                document.getElementById("kartenHand").innerHTML = kartenHand[y];
    
            } //läuft die Schleife 16mal durch, dann ist die Abbruchbedingung erfüllt, da Stapel16 und Hand 16 
    
    } */



    /*ziehe eine Karte vom Stapel wenn du auf den Stapel klickst*/ 
    function zieheEineKarte() {

        if (kartenStapel.length > 0) {
            let k: number;
            k = Math.floor((Math.random() * kartenStapel.length));

            let prodElement = document.createElement('div');

            document.getElementById("kartenHand").appendChild(prodElement);


            kartenHand.push(kartenStapel[k]);
            let karteziehen: string = `<p class="${kartenStapel[k]}" id="wähleKarteAus">${kartenStapel[k]}</p>`

            prodElement.innerHTML = karteziehen;


            kartenStapel.splice(k, 1);

            console.log(kartenHand);
        }
    }
    console.log(kartenStapel);
    console.log(kartenHand);






    let Ablegestapel: string[] = [];

    
    /*let target = event.target 
    target.addEventListener("click", legeEineKarteAb);
    
   

    function legeEineKarteAb() {

        Ablegestapel.push();
        document.getElementById("kartenHand").innerHTML = "target";

    }*/


   















































}

