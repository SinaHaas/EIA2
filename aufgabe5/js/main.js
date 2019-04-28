/* Aufgabe: <Aufgabe 4>
    Name: <Sina Haas>
    Matrikel: <>
    Datum: <19.04.19>
    In Zusammenarbeit mit Katharina Schmitt, Julian Schubert und Bente Gossel.
    */
var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", init);
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("prufe").addEventListener("click", pruefeAusgefuellt);
        elementeAnzeigen(aufgabe5.data);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        preisBerechnen(_event);
        bestellung(_event);
    }
    //Preisberechnung
    let summe = 0; //global, da sonst bei jedem change gleich 0.
    function preisBerechnen(_event) {
        let target = _event.target;
        let preis = target.getAttribute("preis");
        document.getElementById("bestellung").innerHTML = "";
        if (target.checked) {
            let prodElement = document.createElement('div');
            document.getElementById("bestellung").appendChild(prodElement);
            summe = summe + Number(preis);
            let gewählt = `<p>Summe: ${summe}€</p>`;
            prodElement.innerHTML = gewählt;
        }
        if (target.id == "Ja") {
            let preis = target.getAttribute("preis");
            summe = summe - Number(preis); //Nicht anzeigen lassen, da sonst bei am anfang liefern minus erscheint. 
        }
        if (target.type == "checkbox" && target.checked == false) {
            summe = summe - Number(preis);
            let prodElement = document.createElement('div');
            document.getElementById("bestellung").appendChild(prodElement);
            let gewählt = `<p> Summe: ${summe}€</p>`;
            prodElement.innerHTML = gewählt;
        }
    }
    //Bestellung anzeigen
    function bestellung(_event) {
        let input = document.getElementsByTagName("input");
        document.getElementById("rechnung").innerHTML = "";
        for (let l = 0; l < input.length; l++) {
            if (input[l].checked == true) {
                let prodElement = document.createElement("div");
                document.getElementById("rechnung").appendChild(prodElement);
                prodElement.innerHTML = input[l].value;
            }
        }
    }
    //Elemente darstellen
    function elementeAnzeigen(datenArray) {
        for (let key in datenArray) {
            let name = datenArray[key];
            console.log(name);
            let fieldset = document.createElement("fieldset");
            /*for(let key of datenArray){
                let preis: Alles[]=datenArray[key];
            }*/
            for (let h = 0; h < name.length; h++) {
                let input = document.createElement("input");
                let label = document.createElement("label");
                //console.log(datenArray);
                input.setAttribute("name", name[h].name);
                input.setAttribute("type", name[h].type);
                input.setAttribute("value", name[h].value);
                input.setAttribute("id", name[h].id);
                input.setAttribute("prufe", name[h].prufe);
                input.setAttribute("preis", name[h].preis.toString());
                label.innerText = name[h].value;
                label.setAttribute("for", name[h].id);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                document.body.appendChild(fieldset);
            }
        }
    }
    //Button 
    function pruefeAusgefuellt(_event) {
        let Name = document.getElementById("a");
        let Adresse = document.getElementById("b");
        let Postleizahl = document.getElementById("c");
        let pruefen;
        if (Adresse.value == "" || Postleizahl.value == "" || Name.value == "") {
            document.getElementById("pruefeEinfuegen").innerHTML = "";
            pruefen = document.getElementById("pruefeEinfuegen");
            pruefen.innerHTML += " Es fehlen Name, Adresse oder Postleitzahl";
        }
        else {
            document.getElementById("pruefeEinfuegen").innerHTML = "";
            pruefen = document.getElementById("pruefeEinfuegen");
            pruefen.innerHTML += " Alles ausgefüllt :)";
        }
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=main.js.map