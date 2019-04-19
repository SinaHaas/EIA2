var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("prufe").addEventListener("click", allesAusgefuellt);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        bestellen(_event);
        berechnePreis(_event);
    }
    let Bestellung = [];
    function bestellen(_event) {
        let target = _event.target;
        if (target.type == "checkbox" && target.checked) {
            document.getElementById("bestellung").innerHTML = "";
            let prodElement = document.createElement('div');
            document.getElementById("bestellung").appendChild(prodElement);
            Bestellung.push(target.value);
            let gewählt = `
            <p id="${target.id}">${Bestellung}</p>`;
            prodElement.innerHTML = gewählt;
        }
        if (target.name == "Liefern") {
            document.getElementById("li").innerHTML = "";
            let prodElement = document.createElement('div');
            document.getElementById("li").appendChild(prodElement);
            let blub = `
            <p id="${target.id}">${target.value}</p>`;
            prodElement.innerHTML = blub;
        }
        if (target.name == "Behälter") {
            document.getElementById("sleep").innerHTML = "";
            let prodElement = document.createElement('div');
            document.getElementById("sleep").appendChild(prodElement);
            let blub = `
            <p id="${target.id}">${target.value}</p>`;
            prodElement.innerHTML = blub;
        }
        if (target.type == "checkbox" && target.checked == false) {
            for (let u = 0; u < Bestellung.length; u++) {
                if (Bestellung[u] == target.value) {
                    document.getElementById("bestellung").innerHTML = "";
                    Bestellung.splice(u, 1);
                    let prodElement = document.createElement('div');
                    document.getElementById("bestellung").appendChild(prodElement);
                    let gewählt = `
                    <p id="${target.id}">${Bestellung}</p>`;
                    prodElement.innerHTML = gewählt;
                }
            }
        }
        console.log(Bestellung);
    }
    let Eis = [];
    let Zusatz = [];
    let Liefern = [];
    function berechnePreis(_event) {
        let currentEventtarget = _event.currentTarget;
        let target = _event.target;
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
            Liefern = [];
        }
        if (target.checked == false) {
            for (let r = 0; r < Eis.length; r++) {
                if (target.value == Eis[r]) {
                    Eis.splice(r, 1);
                }
            }
            for (let g = 0; g < Zusatz.length; g++) {
                if (target.value == Zusatz[g]) {
                    Zusatz.splice(g, 1);
                }
            }
        }
        let Ergebnis = Eis.length * 1;
        let Ergebnis2 = Zusatz.length * 0.2;
        let Ergebnis3 = Liefern.length * 1;
        let prodElement = document.createElement('div');
        document.getElementById("kap").innerHTML = "";
        document.getElementById("kap").appendChild(prodElement);
        let ergebnis = `
            <p id="${target.id}">Kosten Bestellung: ${Ergebnis + Ergebnis2} € & Lieferkosten: ${Ergebnis3} €</p>`;
        prodElement.innerHTML = ergebnis;
    }
    //document.getElementById("prufe").addEventListener("click", allesAusgefuellt);
    function allesAusgefuellt() {
        let Name = document.getElementById("a");
        let Adresse = document.getElementById("b");
        let Postleizahl = document.getElementById("c");
        let pruefen;
        if (Adresse.value == "" || Postleizahl.value == "" || Name.value == "") {
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
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map