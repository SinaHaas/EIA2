namespace Eisdealer {

    window.addEventListener("load", init);
    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("prufe").addEventListener("click", allesAusgefuellt);

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event) {
        bestellen(_event);
        berechnePreis(_event);
    }

    let Bestellung: String[] = [];

    function bestellen(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        
        if (target.type == "checkbox" && target.checked) {

            document.getElementById("bestellung").innerHTML = "";
            let prodElement = document.createElement('div');
            document.getElementById("bestellung").appendChild(prodElement);
            Bestellung.push(target.value);
            let gewählt: string = `
            <p id="${target.id}">${Bestellung}</p>`
            prodElement.innerHTML = gewählt;
        }

        if (target.name == "Liefern") {
            document.getElementById("li").innerHTML = "";
            let prodElement = document.createElement('div');
            document.getElementById("li").appendChild(prodElement);
            let blub: string = `
            <p id="${target.id}">${target.value}</p>`
            prodElement.innerHTML = blub;
        }

        if (target.name == "Behälter") {
            document.getElementById("sleep").innerHTML = "";
            let prodElement = document.createElement('div');
            document.getElementById("sleep").appendChild(prodElement);
            let blub: string = `
            <p id="${target.id}">${target.value}</p>`
            prodElement.innerHTML = blub;
        }

        if (target.type == "checkbox" && target.checked == false) {

            for (let u: number = 0; u < Bestellung.length; u++) {
                if (Bestellung[u] == target.value) {
                    document.getElementById("bestellung").innerHTML = "";
                    Bestellung.splice(u, 1);
                    let prodElement = document.createElement('div');
                    document.getElementById("bestellung").appendChild(prodElement);
                    let gewählt: string = `
                    <p id="${target.id}">${Bestellung}</p>`
                    prodElement.innerHTML = gewählt;
                }
            }
        }
        console.log(Bestellung);
    }

    let Eis: string[] = [];
    let Zusatz: string[] = [];
    let Liefern: string[] = [];

    function berechnePreis(_event: Event) {
        let currentEventtarget: HTMLInputElement = <HTMLInputElement>_event.currentTarget;
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        /*let fred:string= target.getAttribute("fred");*/

        if (currentEventtarget.id == "eissorten" && target.checked) {
            /*alert("HiEissorte");*/
            Eis.push(target.value);
            console.log(Eis.length);
        }

        if (currentEventtarget.id == "zusätze" && target.checked) {
            /*alert("hizusatz")*/
            Zusatz.push(target.value);
            console.log(Zusatz.length * 0.2);
        }
        if (target.id == "Ja") {
            Liefern.push(target.value);
            console.log(target);
        }

        if (target.id == "Nein") {
            Liefern = [] ;
        }

        if (target.checked == false) {
            for (let r: number = 0; r < Eis.length; r++) {
                if (target.value == Eis[r]) {
                    Eis.splice(r, 1)
                }
            }
            for (let g: number = 0; g < Zusatz.length; g++) {
                if (target.value == Zusatz[g]) {
                    Zusatz.splice(g, 1)
                }
            }
        }

        let Ergebnis: number = Eis.length * 1;
        let Ergebnis2: number = Zusatz.length * 0.2;
        let Ergebnis3: number = Liefern.length * 1;

        let prodElement = document.createElement('div');

        document.getElementById("kap").innerHTML = "";
        document.getElementById("kap").appendChild(prodElement);

        let ergebnis: string = `
            <p id="${target.id}">Kosten Bestellung: ${Ergebnis + Ergebnis2} € & Lieferkosten: ${Ergebnis3} €</p>`
        prodElement.innerHTML = ergebnis;
    }

    //document.getElementById("prufe").addEventListener("click", allesAusgefuellt);
    function allesAusgefuellt(): void {

        let Name: HTMLInputElement = <HTMLInputElement>document.getElementById("a");
        let Adresse: HTMLInputElement = <HTMLInputElement>document.getElementById("b");
        let Postleizahl: HTMLInputElement = <HTMLInputElement>document.getElementById("c");

        let pruefen: HTMLElement;

            if (Adresse.value == "" || Postleizahl.value == "" ||  Name.value =="") {
                document.getElementById("pru").innerHTML = "";
                pruefen = document.getElementById("pru");
                pruefen.innerHTML += " Es fehlen Name oder Adresse oder Postleitzahl";
            }
            else {
                document.getElementById("pru").innerHTML = "";
                pruefen = document.getElementById("pru");
                pruefen.innerHTML += " Alles ausgefüllt :)";
            }
        }
        
}




