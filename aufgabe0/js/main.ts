let personName:string = prompt("Name bitte", "Hop Hop");


function prom(): void {

    if (personName != null) {
        document.getElementById("lalala").innerHTML =
            "Hallo " + personName;

    }
    console.info("Hallo " + personName)
}

prom()