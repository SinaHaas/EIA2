/* Aufgabe: <Aufgabe 4>
    Name: <Sina Haas>
    Matrikel: <>
    Datum: <19.04.19>
    In Zusammenarbeit mit Katharina Schmitt, Julian Schubert und Bente Gossel. 
    */
namespace aufgabe5 {


    window.addEventListener("load", init);

    function init(_event: Event): void {

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("prufe").addEventListener("click", pruefeAusgefuellt);
        elementeAnzeigen(data);


        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event) {
        preisBerechnen(_event);
        bestellung(_event)
    }

    //Preisberechnung
    let summe: number = 0; //global, da sonst bei jedem change gleich 0.

    function preisBerechnen(_event: Event):void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let preis: string = target.getAttribute("preis");
        document.getElementById("bestellung").innerHTML = "";

        if (target.checked) {
            let prodElement:HTMLDivElement = document.createElement('div');
            document.getElementById("bestellung").appendChild(prodElement);
            summe = summe + Number(preis);
            let gewählt: string = `<p>Summe: ${summe}€</p>`
            prodElement.innerHTML = gewählt;
        }

        if (target.id == "Ja") {
            let preis: string = target.getAttribute("preis");
            summe = summe - Number(preis); //Nicht anzeigen lassen, da sonst bei am anfang liefern minus erscheint. 
        }

        if (target.type == "checkbox" && target.checked == false) {
            summe = summe - Number(preis);
            let prodElement:HTMLDivElement = document.createElement('div');
            document.getElementById("bestellung").appendChild(prodElement);
            let gewählt: string = `<p> Summe: ${summe}€</p>`
            prodElement.innerHTML = gewählt;
        }
    }

    //Bestellung anzeigen
    function bestellung(_event: Event): void {

        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        document.getElementById("rechnung").innerHTML = "";
        for (let l: number = 0; l < input.length; l++) {
            if (input[l].checked == true) {
                let prodElement: HTMLDivElement = document.createElement("div");
                document.getElementById("rechnung").appendChild(prodElement);
                prodElement.innerHTML = input[l].value;
            }
        }

    }

    //Elemente darstellen
    function elementeAnzeigen(datenArray: Auswahl): void {
        for (let key in datenArray) {
            let name: Alles[] = datenArray[key];
            console.log(name);

            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");

            /*for(let key of datenArray){
                let preis: Alles[]=datenArray[key];
            }*/

            for (let h: number = 0; h < name.length; h++) {
                let input: HTMLInputElement = document.createElement("input");
                let label: HTMLLabelElement = document.createElement("label")

                //console.log(datenArray);

                input.setAttribute("name", name[h].name);
                input.setAttribute("type", name[h].type);
                input.setAttribute("value", name[h].value);
                input.setAttribute("id", name[h].id);
                input.setAttribute("prufe", name[h].prufe)
                input.setAttribute("preis", name[h].preis.toString())
                label.innerText = name[h].value;

                label.setAttribute("for", name[h].id);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                document.body.appendChild(fieldset);
            }
        }
    }

    //Button 
    function pruefeAusgefuellt(_event: MouseEvent): void {

        let Name: HTMLInputElement = <HTMLInputElement>document.getElementById("a");
        let Adresse: HTMLInputElement = <HTMLInputElement>document.getElementById("b");
        let Postleizahl: HTMLInputElement = <HTMLInputElement>document.getElementById("c");


        let pruefen: HTMLElement;

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




















































}