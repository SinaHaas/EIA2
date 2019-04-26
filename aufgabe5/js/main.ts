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
        bestellung(_event, /*data*/)
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

        if (target.id == "Ja") {
            let preis: string = target.getAttribute("preis");
            summe = summe - Number(preis);
        }

        else if (target.checked == false) {
            //let preis: string = target.getAttribute("preis");
            summe = summe - Number(preis);

            let prodElement: HTMLDivElement = document.createElement("div");
            document.getElementById("bestellung").appendChild(prodElement);
            let gesamtpreis: string = `<div> Summe ${summe} € </div>`;

            prodElement.innerHTML = gesamtpreis;
        }
    }



    function bestellung(_event: Event, /*_datenArray: Auswahl*/): void {

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



    function pruefeAusgefuellt(): void {

        let Name: HTMLInputElement = <HTMLInputElement>document.getElementById("a");
        let Adresse: HTMLInputElement = <HTMLInputElement>document.getElementById("b");
        let Postleizahl: HTMLInputElement = <HTMLInputElement>document.getElementById("c");

        let pruefen: HTMLElement;

            if (Adresse.value == "" || Postleizahl.value == "" ||  Name.value =="") {
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