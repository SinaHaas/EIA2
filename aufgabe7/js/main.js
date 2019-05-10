var aufgabe7;
(function (aufgabe7) {
    let adresse = "https://eia2-sina-haas.herokuapp.com/?";
    window.addEventListener("load", init);
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("submit").addEventListener("click", informationUebergeben);
        document.getElementById("prufe").addEventListener("click", pruefeAusgefuellt);
        document.getElementById("submit").addEventListener("click", richtigAnzeigen);
        elementeAnzeigen(aufgabe7.data);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        preisBerechnen(_event);
        bestellung(_event);
    }
    let summe = 0;
    function preisBerechnen(_event) {
        let target = _event.target;
        let eisSumme = 0;
        //let liefern:number=0;
        let input = document.getElementsByTagName("input");
        document.getElementById("bestellung").innerHTML = "";
        /*f (target.type=="radio") {
            let preis: string = target.getAttribute("preis")
            liefern = liefern + Number(preis);
        }*/
        if (target.checked == true && target.type == "checkbox") {
            let preis = target.getAttribute("preis");
            summe = summe + Number(preis);
        }
        if (target.type == "checkbox" && target.checked == false) {
            let preis = target.getAttribute("preis");
            summe = summe - Number(preis);
        }
        for (let i = 0; i < input.length; i++) {
            if (input[i].type == "number") {
                let preis1 = input[i].getAttribute("preis");
                eisSumme = eisSumme + Number(preis1) * Number(input[i].value);
            }
        }
        let gesamt = eisSumme + summe;
        //console.log(liefern);
        let prodElement = document.createElement('div');
        document.getElementById("bestellung").appendChild(prodElement);
        let gewählt = `<p>Summe: ${gesamt} €</p>`;
        prodElement.innerHTML = gewählt;
    }
    //Bestellung anzeigen
    function bestellung(_event) {
        let input = document.getElementsByTagName("input");
        let target = _event.target;
        if (target.type == "checkbox" || target.type == "radio") {
            document.getElementById("behaelter").innerHTML = "";
            for (let l = 0; l < input.length; l++) {
                if (input[l].checked == true) {
                    let text = input[l].getAttribute("text");
                    let prodElement = document.createElement("div");
                    document.getElementById("behaelter").appendChild(prodElement);
                    prodElement.innerHTML = text;
                }
            }
        }
        if (target.type == "number") {
            document.getElementById("rechnung").innerHTML = "";
            for (let x = 0; x < input.length; x++) {
                if (target.type == "number" && Number(input[x].value) >= 1) {
                    let prodElement = document.createElement('div');
                    document.getElementById("rechnung").appendChild(prodElement);
                    let gewählt = `<p>${input[x].value} x${input[x].name}</p>`;
                    prodElement.innerHTML = gewählt;
                }
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
                input.setAttribute("value", name[h].value.toString());
                input.setAttribute("id", name[h].id);
                input.setAttribute("text", name[h].text);
                input.setAttribute("step", name[h].step.toString());
                input.setAttribute("min", name[h].min.toString());
                input.setAttribute("max", name[h].max.toString());
                input.setAttribute("preis", name[h].preis.toString());
                label.innerText = name[h].text;
                label.setAttribute("for", name[h].id);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                document.getElementById("anhang").appendChild(fieldset);
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
    function richtigAnzeigen() {
        let input = document.getElementsByTagName("input");
        for (let x = 0; x < input.length; x++) {
            if (input[x].type == "checkbox" && input[x].checked == true) {
                input[x].setAttribute("value", "1");
            }
        }
    }
    function informationUebergeben() {
        let input = document.getElementsByTagName("input");
        let adr = "";
        for (let i = 0; i < input.length; i++) {
            //console.log("value: " + input[i].value);
            if (input[i].value != "0" && input[i].type == "number") {
                let name = input[i].name;
                let wert = input[i].value;
                adr = adr + name + "=" + wert + "&";
                console.log("hi");
            }
            if (input[i].type == "radio" && input[i].checked == true) {
                let name = input[i].name;
                let wert = input[i].value;
                adr = adr + name + "=" + wert + "&";
            }
            if (input[i].type == "checkbox" && input[i].checked == true) {
                let name = input[i].name;
                let wert = input[i].value;
                adr = adr + name + "=" + wert + "&";
            }
            if (input[i].type == "text") {
                let name = input[i].name;
                let wert = input[i].value;
                adr = adr + name + "=" + wert + "&";
                console.log("hi");
            }
        }
        anfrageAbschicken(adr);
        console.log(adresse + adr);
    }
    function anfrageAbschicken(_adr) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", adresse + _adr, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            let pruefen;
            document.getElementById("bla").innerHTML = "";
            pruefen = document.getElementById("bla");
            pruefen.innerHTML += xhr.response;
        }
    }
})(aufgabe7 || (aufgabe7 = {}));
//# sourceMappingURL=main.js.map