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
handkartenanzahl();
let kartenFarben = ["Pik", "Karo", "Kreuz", "Herz"];
let kartenWerte = ["7", "8", "9", "10", "Bube", "Dame", "König", "Ass"];
// Farben: Pik, Karo, Kreuz, Herz -> 8 Stück jeder Farbe 
// Werte: 7-10, Bube, Dame, König, Ass -> Alle einmal in einer Farbe 
// 32 Karten 
let neuKarte;
let neuKarte1;
let neuKarte2;
let neuKarte3;
let kartenStapel = [];
function generiereKarten() {
    let i;
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
let kartenHand = [];
let x;
/*function verteileKarten() {

    for (let y = 0; y < hk; y++) {
        x = Math.floor((Math.random() * kartenStapel.length));

        let prodElement = document.createElement('div');

        document.getElementById("kartenHand").appendChild(prodElement);

        kartenHand.push(kartenStapel[x]);
        let karte: string = `<p class="${kartenHand[y]}">${kartenHand[y]}</p>`

        prodElement.innerHTML = karte;

        kartenStapel.splice(x, 1);

    }
}

verteileKarten();*/
/* sortiere Karten*/
/*function sortiereKarten() {
    kartenHand.sort();
}

sortiereKarten();

console.log(kartenHand);





/* ziehe eine Karte zufällig wenn Klick */
document.getElementById("stapel").addEventListener("click", zieheEineKarte);
/*function zieheEineKarte() {
    

        for (let y = 0; y < kartenStapel.length; y++) {

            x = Math.floor((Math.random() * kartenStapel.length));
    
            kartenHand.push(kartenStapel[x]);
            
    
            kartenStapel.splice(x, 1);

            document.getElementById("kartenHand").innerHTML = kartenHand[y];

        } //läuft die Schleife 16mal durch, dann ist die Abbruchbedingung erfüllt, da Stapel16 und Hand 16

}*/
function zieheEineKarte() {
    if (kartenHand.length < kartenStapel.length) {
        let k;
        k = Math.floor((Math.random() * kartenStapel.length));
        kartenHand.push(kartenStapel[k]);
        kartenStapel.splice(k, 1);
        console.log(kartenHand);
    }
}
/*console.log(kartenStapel);
console.log(kartenHand);*/
//# sourceMappingURL=main.js.map