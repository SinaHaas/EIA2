//alert("Hello")//
let hk;
function handkartenanzahl() {
    let handkarten = prompt("Handkartenanzahl eingeben");
    hk = Number(handkarten); // Number()-> Sting to Number
    return hk;
}
console.log(handkartenanzahl());
handkartenanzahl();
/*interface Karten {
   
    Farbe:string;
    Wert:string; //Aufgrund As,König,Bube,Dame ein string
}*/
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
/*function zufälligeHandkarten() {


    console.log(Math.floor((Math.random() * 10) + 1));
    
    let k:number

    for (k=0; k<= kartenStapel.length-1; k++) {

        kartenStapel.splice(k);

    }
    
}*/
function verteileKarten() {
    let kartenHand = [];
    if (kartenHand.length <= hk) {
        let x = 0;
        ;
        {
            x = Math.floor((Math.random() * kartenStapel.length) + 1);
            kartenStapel.splice(x, 1);
        }
    }
}
// Schleife, welche die eingegebene Zahl so oft zufällig generiert, wie der Nutzer eingibt. 
//# sourceMappingURL=main.js.map