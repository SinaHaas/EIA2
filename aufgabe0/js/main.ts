var person:string = prompt("Name bitte", "Hop Hop");


function prom(): void {

    if (person != null) {
        document.getElementById("lalala").innerHTML =
            "Hallo " + person;

    }
    console.info("Hallo " + person)
}

prom()