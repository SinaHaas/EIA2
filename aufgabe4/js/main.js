/*
Aufgabe: <Aufgabe 4 Eisdealer>
Name: <Katharina Schmitt>
Matrikel: <260918>
Datum: <18.04.2019>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellen);
        }
    }
    function bestellen(_event) {
        let target = _event.target;
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox" || this.id == "number")
            console.log("Changed " + target.name + " to " + target.checked);
        let prodElement = document.createElement('div');
        document.getElementById("bestellung").appendChild(prodElement);
        let gewählt = `
            <p id="${target.id}">${target.id}</p>
            `;
        prodElement.innerHTML = gewählt;
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map