/*
Aufgabe: <Aufgabe 4 Eisdealer>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <18.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
let Bestellung = [];
var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellen);
            fieldset.addEventListener("change", berechnePreis);
        }
    }
    function bestellen(_event) {
        let target = _event.target;
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox" || this.id == "number")
            console.log("Changed " + target.name + " to " + target.checked);
        let prodElement = document.createElement('div');
        document.getElementById("bestellung").appendChild(prodElement);
        Bestellung.push(target.value);
        let gewählt = `
            <p id="${target.id}">${Bestellung}</p>`;
        prodElement.innerHTML = gewählt;
    }
})(Eisdealer || (Eisdealer = {}));
let Eis = [];
let Zusatz = [];
function berechnePreis(_event) {
    let currentEventtarget = _event.currentTarget;
    let target = _event.target;
    if (currentEventtarget.id == "eissorten") {
        /*alert("HiEissorte");*/
        Eis.push(target.value);
        console.log(Eis.length * 1);
    }
    else if (currentEventtarget.id == "zusätze") {
        /*alert("hizusatz")*/
        Zusatz.push(target.value);
        console.log(Zusatz.length * 0.5);
    }
    ;
    let Ergebnis = Eis.length * 1;
    let Ergebnis2 = Zusatz.length * 0.5;
    let prodElement = document.createElement('div');
    document.getElementById("bestellung").appendChild(prodElement);
    let ergebnis = `
            <p id="${target.id}">${Ergebnis + Ergebnis2}</p>`;
    prodElement.innerHTML = ergebnis;
}
//# sourceMappingURL=main.js.map