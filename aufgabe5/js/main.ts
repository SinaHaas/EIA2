namespace aufgabe5 {


    window.addEventListener("load", init);

    function init(_event: Event): void {

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        /*document.getElementById("prufe").addEventListener("click", pruefeAusgefuellt);*/
        elementeAnzeigen(data);


        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

    }

    function handleChange(_event: Event) {
        preisBerechnen(_event);
        bestellung(_event, data)
    }




    let summe: number = 0;



    function preisBerechnen(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let preis: string = target.getAttribute("preis");
        document.getElementById("bestellung").innerHTML = "";

        if (target.checked == true) {
            //let preis: string = target.getAttribute("preis");

            summe = summe + Number(preis);

            let prodElement: HTMLElement = document.createElement("div");
            document.getElementById("bestellung").appendChild(prodElement);
            let gesamtpreis: string = `<div> Summe ${summe} € </div>`;

            prodElement.innerHTML = gesamtpreis;
        }

        /*if (target.id == "Ja") {
            let preis: string = target.getAttribute("preis");
            summe = summe - Number(preis);
        }*/

        else if (target.checked == false) {
            //let preis: string = target.getAttribute("preis");
            summe = summe - Number(preis);

            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("bestellung").appendChild(prodElement);
            let gesamtpreis: string = `<div> Summe ${summe} € </div>`;

            prodElement.innerHTML = gesamtpreis;
        }
    }



    function bestellung(_event: Event, _datenArray: Auswahl): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.checked == true) {
            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("rechnung").appendChild(prodElement);
            prodElement.innerHTML = target.value;

        }

        else if (target.checked == false) {
            //let value: string = target.getAttribute("value");
            let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

            let loeschen: HTMLDivElement = <HTMLDivElement>document.getElementById("rechnung");

            for (let h: number = 0; h < input.length; h++) {
                if (input[h].value == target.value) {
                    //document.getElementById("rechnung").innerHTML = "";
                    loeschen.removeChild(loeschen.childNodes[h]);   //Müsste es an dieser Stelle nicht das Kind(Div) löschen welches target.value z.B Schokolade mit input[h].value (müsste doch auch Schokolade sein) vergleicht?
                    console.log(loeschen);
                    console.log(input[h].value);
                    console.log(target.value);






                }
            }

        }
    }










    /*function preisBerechnen(_event:Event,datenArray:Auswahl){
        let target:HTMLElement =<HTMLElement> _event.target;
        let preis:string= target.getAttribute("preis");
         
        let x:number= target.preis  
        
    }*/



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
                input.setAttribute("preis", name[h].preis.toString())
                label.innerText = name[h].value;

                label.setAttribute("for", name[h].id);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                document.body.appendChild(fieldset);
            }
        }
    }





















































}