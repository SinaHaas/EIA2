//alert("Hello")//
let hk: number

function handkartenanzahl(): number {
    let handkarten: string = prompt("Handkartenanzahl eingeben");

    hk  = Number(handkarten); // Number()-> Sting to Number

    return hk;


}

console.log(handkartenanzahl());

handkartenanzahl();




/*interface Karten {
   
    Farbe:string;
    Wert:string; //Aufgrund As,König,Bube,Dame ein string 
}*/



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







/*function zufälligeHandkarten() {


    console.log(Math.floor((Math.random() * 10) + 1));
    
    let k:number

    for (k=0; k<= kartenStapel.length-1; k++) {

        kartenStapel.splice(k); 

    }
    
}*/

function verteileKarten (){
    let kartenHand:string[] =[];
    
     

    if (kartenHand.length <= hk ) {
        let x:number = 0; ;{
            x = Math.floor((Math.random() * kartenStapel.length)+1);
            kartenStapel.splice(x,1)

        }

    }
    

}




    
    

    

   








// Schleife, welche die eingegebene Zahl so oft zufällig generiert, wie der Nutzer eingibt. 


