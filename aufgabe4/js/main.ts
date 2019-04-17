/*
Aufgabe: <Aufgabe 4 Eisdealer>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <18.04.2019>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
let Bestellung: String[] = [];

namespace Eisdealer {

    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellen);
            fieldset.addEventListener("change", berechnePreis);
        }
    }

    function bestellen(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox" || this.id == "number")
            console.log("Changed " + target.name + " to " + target.checked);

        let prodElement = document.createElement('div');
        document.getElementById("bestellung").appendChild(prodElement);

        Bestellung.push(target.value);

        let gewählt: string = `
            <p id="${target.id}">${Bestellung}</p>`
        prodElement.innerHTML = gewählt;
    }
}

let Eis: string[] = [];
let Zusatz: string[] = [];

function berechnePreis(_event: Event) {
    let currentEventtarget: HTMLInputElement = <HTMLInputElement>_event.currentTarget;
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    if (currentEventtarget.id == "eissorten") {
        /*alert("HiEissorte");*/
        Eis.push(target.value);
        console.log(Eis.length * 1);
    }
    else if (currentEventtarget.id == "zusätze") {
        /*alert("hizusatz")*/
        Zusatz.push(target.value);
        console.log(Zusatz.length * 0.5);
    };

    let Ergebnis: number = Eis.length * 1;
    let Ergebnis2: number = Zusatz.length * 0.5;

    let prodElement = document.createElement('div');
    document.getElementById("bestellung").appendChild(prodElement);

    let ergebnis: string = `
            <p id="${target.id}">${Ergebnis + Ergebnis2}</p>`
    prodElement.innerHTML = ergebnis;
}



