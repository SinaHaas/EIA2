var aufgabe13;
(function (aufgabe13) {
    //Eventlistener um init auszuführen
    document.addEventListener("DOMContentLoaded", init);
    //Eventlistener für einen keydown um Fisch steuern zu können
    document.addEventListener("keydown", bewegungSpielfisch);
    aufgabe13.AllesArray = [];
    let fps = 30;
    let imageData;
    aufgabe13.highscore = 0;
    let timeout;
    console.log(aufgabe13.highscore);
    // console.log(AllesArray);
    function init() {
        aufgabe13.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe13.crc = aufgabe13.canvas.getContext("2d");
        hintergrund();
        aufgabe13.refresh(); //
        //Hintergrundobjekte zufällig plaziert 
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * (800 - 200) + 200;
            let y = Math.random() * (270 - 120) + 120;
            kies(x, y);
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * (850 - 200) + 200;
            let y = Math.random() * (600 - 400) + 400;
            pflanze3(x, y);
        }
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * (300 - 1) + 1;
            let y = Math.random() * (500 - 400) + 400;
            pflanze(x, y);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * (850 - 200) + 200;
            let y = 550;
            pflanze2(x, y);
        }
        aufgabe13.canvas.addEventListener("click", hermitdemfutter); //Ruft Futter fallenlassen Funktion auf
        imageData = aufgabe13.crc.getImageData(0, 0, aufgabe13.canvas.width, aufgabe13.canvas.height);
        //Animierte Objekte im Canvas
        for (let i = 0; i < 50; i++) {
            let blub = new aufgabe13.Blub(Math.random(), Math.random());
            aufgabe13.AllesArray.push(blub);
        }
        for (let i = 0; i < 5; i++) {
            let fisch = new aufgabe13.FetterFisch(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fisch);
        }
        for (let i = 0; i < 1; i++) {
            let fisch = new aufgabe13.Pferdchen(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fisch);
        }
        for (let i = 0; i < 4; i++) {
            let futter = new aufgabe13.FutterImCanvas(Math.random(), Math.random());
            aufgabe13.AllesArray.push(futter);
        }
        for (let i = 0; i < 2; i++) {
            let fischi = new aufgabe13.BigFish(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fischi);
        }
        for (let i = 0; i < 16; i++) {
            let fischi = new aufgabe13.Fish(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fischi);
        }
        for (let i = 0; i < 4; i++) {
            let fischi = new aufgabe13.Seepferdchen(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fischi);
        }
        aufgabe13.spielfisch = new aufgabe13.Spielfisch(aufgabe13.canvas.width / 2, aufgabe13.canvas.height / 2);
        aufgabe13.AllesArray.push(aufgabe13.spielfisch);
        update();
    }
    //Steuerung des Spielfisches durch keydown
    function bewegungSpielfisch(_event) {
        if (_event.keyCode == 39) { //rechts
            aufgabe13.spielfisch.x += 8;
            if (aufgabe13.spielfisch.x > 900) {
                aufgabe13.spielfisch.x = 0;
            }
        }
        if (_event.keyCode == 37) { //37
            aufgabe13.spielfisch.x -= 8;
            if (aufgabe13.spielfisch.x < 0) {
                aufgabe13.spielfisch.x = 900;
            }
        }
        if (_event.keyCode == 40) { //unten
            aufgabe13.spielfisch.y += 8;
            if (aufgabe13.spielfisch.y > 600) {
                aufgabe13.spielfisch.y = 0;
            }
        }
        if (_event.keyCode == 38) { //oben
            aufgabe13.spielfisch.y -= 8;
            if (aufgabe13.spielfisch.y < 0) {
                aufgabe13.spielfisch.y = 600;
            }
        }
    }
    //Funktion für das Timeout, um diese später nutzen zu können
    function setTimeOut() {
        timeout = window.setTimeout(update, 1000 / fps);
    }
    //Update Funktion
    function update() {
        setTimeOut();
        aufgabe13.crc.clearRect(0, 0, aufgabe13.canvas.width, aufgabe13.canvas.height);
        aufgabe13.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < aufgabe13.AllesArray.length; i++) {
            aufgabe13.AllesArray[i].update();
        }
    }
    //Alles für den Hintergrund 
    function kies(_x, _y) {
        let steine = new Path2D();
        aufgabe13.crc.lineWidth = 2;
        aufgabe13.crc.strokeStyle = "brown";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        aufgabe13.crc.fillStyle = "chocolate";
        aufgabe13.crc.fill(steine);
        aufgabe13.crc.stroke(steine);
    }
    function pflanze(_x, _y) {
        let pflanz = new Path2D();
        aufgabe13.crc.strokeStyle = "green";
        aufgabe13.crc.fillStyle = "springgreen";
        pflanz.moveTo(_x, _y);
        pflanz.lineTo(_x - 25, _y - 50);
        pflanz.lineTo(_x - 5, _y - 80);
        pflanz.lineTo(_x, _y - 100);
        pflanz.lineTo(_x + 5, _y - 60);
        pflanz.lineTo(_x - 5, _y - 40);
        pflanz.closePath();
        aufgabe13.crc.lineWidth = 3;
        aufgabe13.crc.stroke(pflanz);
        aufgabe13.crc.fill(pflanz);
    }
    function pflanze2(_x, _y) {
        let pflanz = new Path2D();
        aufgabe13.crc.lineWidth = 3;
        aufgabe13.crc.strokeStyle = "green";
        aufgabe13.crc.fillStyle = "yellowgreen";
        pflanz.arc(_x, _y, 50, 0, 2 * Math.PI);
        aufgabe13.crc.stroke(pflanz);
        aufgabe13.crc.fill(pflanz);
        let pflanz2 = new Path2D();
        pflanz2.arc(_x, _y - 80, 30, 0, 2 * Math.PI);
        aufgabe13.crc.stroke(pflanz2);
        aufgabe13.crc.fill(pflanz2);
        let pflanz3 = new Path2D();
        aufgabe13.crc.strokeStyle = "green";
        aufgabe13.crc.fillStyle = "yellowgreen";
        aufgabe13.crc.lineWidth = 3;
        pflanz3.arc(_x, _y - 122, 10, 0, 2 * Math.PI);
        aufgabe13.crc.stroke(pflanz3);
        aufgabe13.crc.fill(pflanz3);
        let pflanz4 = new Path2D();
        aufgabe13.crc.fillStyle = "crimson";
        aufgabe13.crc.strokeStyle = "red";
        pflanz4.arc(_x, _y - 138, 3, 0, 2 * Math.PI);
        aufgabe13.crc.stroke(pflanz4);
        aufgabe13.crc.fill(pflanz4);
    }
    function pflanze3(_x, _y) {
        let pflanz2 = new Path2D();
        aufgabe13.crc.lineWidth = 3;
        aufgabe13.crc.strokeStyle = "green";
        aufgabe13.crc.fillStyle = "yellowgreen";
        pflanz2.moveTo(_x, _y);
        pflanz2.quadraticCurveTo(_x - 10, _y - 20, _x, _y - 40);
        pflanz2.moveTo(_x, _y - 40);
        pflanz2.quadraticCurveTo(_x + 10, _y - 60, _x, _y - 80);
        aufgabe13.crc.lineWidth = 5;
        aufgabe13.crc.stroke(pflanz2);
        let pflanz = new Path2D();
        pflanz.moveTo(_x, _y);
        pflanz.quadraticCurveTo(_x - 20, _y - 20, _x, _y - 40);
        aufgabe13.crc.lineWidth = 5;
        aufgabe13.crc.stroke(pflanz);
    }
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 900, 600);
        aufgabe13.crc.fillStyle = "seagreen";
        aufgabe13.crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 400, 900, 200);
        aufgabe13.crc.fillStyle = "goldenrod";
        aufgabe13.crc.fill(boden);
        let pflanz2 = new Path2D();
        aufgabe13.crc.strokeStyle = "green";
        aufgabe13.crc.fillStyle = "darkgreen";
        pflanz2.moveTo(800, 550);
        pflanz2.lineTo(775, 420);
        pflanz2.lineTo(795, 400);
        pflanz2.lineTo(795, 330);
        pflanz2.lineTo(805, 400);
        pflanz2.lineTo(795, 460);
        pflanz2.closePath();
        aufgabe13.crc.lineWidth = 3;
        aufgabe13.crc.stroke(pflanz2);
        aufgabe13.crc.fill(pflanz2);
        let qual = new Path2D();
        aufgabe13.crc.fillStyle = "orange";
        qual.arc(700, 100, 50, Math.PI, 2 * Math.PI);
        aufgabe13.crc.fill(qual);
        let arme = new Path2D();
        aufgabe13.crc.strokeStyle = "yellow";
        arme.moveTo(670, 100);
        arme.lineTo(675, 130);
        arme.lineTo(665, 160);
        arme.lineTo(670, 200);
        arme.moveTo(700, 100);
        arme.lineTo(695, 130);
        arme.lineTo(705, 160);
        arme.lineTo(700, 200);
        arme.moveTo(730, 100);
        arme.lineTo(725, 130);
        arme.lineTo(735, 160);
        arme.lineTo(730, 200);
        aufgabe13.crc.lineWidth = 5;
        aufgabe13.crc.stroke(arme);
        let steine = new Path2D();
        aufgabe13.crc.strokeStyle = "grey";
        aufgabe13.crc.fillStyle = "grey";
        steine.moveTo(20, 600);
        steine.quadraticCurveTo(80, 400, 140, 600);
        steine.closePath();
        aufgabe13.crc.fill(steine);
        aufgabe13.crc.stroke(steine);
        for (let i = 0; i < 60; i = i + 50) {
            let x = 675 + i;
            let auge = new Path2D();
            auge.arc(x, 75, 10, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(x, 75, 5, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
    }
    //Futter fallen lassen bei einem Klick der Maus 
    function hermitdemfutter(_event) {
        let xCanvas = _event.clientX;
        let yCanvas = _event.clientY;
        for (let i = 0; i < 10; i++) {
            let NomNom = new aufgabe13.Foodistsogut(xCanvas, yCanvas);
            aufgabe13.AllesArray.push(NomNom);
        }
    }
    //Rechnet Highscore 
    function highscoreFunk() {
        document.getElementById("highscore").innerHTML = "";
        let prodElement = document.createElement("div");
        prodElement.innerHTML = `<div> Dein Highscore: ${aufgabe13.highscore}</div>`;
        document.getElementById("highscore").appendChild(prodElement);
    }
    aufgabe13.highscoreFunk = highscoreFunk;
    //Wird aufgerufen, wenn man stirbt. Der Spieler gibt Namen ein und dieser wird mit Highscore an den Server gegeben
    function nameEingeben() {
        window.clearTimeout(timeout);
        aufgabe13.spielerName = prompt("Deine Punkte: " + aufgabe13.highscore, "Dein Name");
        aufgabe13.insert();
        // window.location.reload();
    }
    aufgabe13.nameEingeben = nameEingeben;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=main.js.map