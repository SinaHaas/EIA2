var aufgabe13;
(function (aufgabe13) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", bewegungSpielfisch);
    aufgabe13.AllesArray = [];
    let fps = 30;
    let imageData;
    // console.log(AllesArray);
    function init() {
        aufgabe13.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe13.crc = aufgabe13.canvas.getContext("2d");
        hintergrund();
        for (let i = 0; i < 30; i++) {
            let x = Math.random() * (800 - 200) + 200;
            let y = Math.random() * (270 - 120) + 120;
            kies(x, y);
        }
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * (900 - 1) + 1;
            let y = Math.random() * (560 - 450) + 450;
            pflanze(x, y);
        }
        aufgabe13.canvas.addEventListener("click", hermitdemfutter);
        imageData = aufgabe13.crc.getImageData(0, 0, aufgabe13.canvas.width, aufgabe13.canvas.height);
        //Animiert
        // for (let i: number = 0; i < 20; i++) {
        //     let blub: bewegteDinge = new bewegteDinge();
        //     AllesArray.push(blub);
        // }
        for (let i = 0; i < 2; i++) {
            let fischi = new aufgabe13.BigFish(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fischi);
        }
        for (let i = 0; i < 16; i++) {
            let fischi = new aufgabe13.Fish(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fischi);
        }
        for (let i = 0; i < 2; i++) {
            let fischi = new aufgabe13.Seepferdchen(Math.random(), Math.random());
            aufgabe13.AllesArray.push(fischi);
        }
        aufgabe13.spielfisch = new aufgabe13.Spielfisch(aufgabe13.canvas.width / 2, aufgabe13.canvas.height / 2);
        aufgabe13.AllesArray.push(aufgabe13.spielfisch);
        update();
        // fressFische();
    }
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
    function update() {
        window.setTimeout(update, 1000 / fps);
        aufgabe13.crc.clearRect(0, 0, aufgabe13.canvas.width, aufgabe13.canvas.height);
        aufgabe13.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < aufgabe13.AllesArray.length; i++) {
            aufgabe13.AllesArray[i].update();
        }
    }
    function kies(_x, _y) {
        let steine = new Path2D();
        aufgabe13.crc.lineWidth = 2;
        aufgabe13.crc.strokeStyle = "black";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        aufgabe13.crc.fillStyle = "chocolate";
        aufgabe13.crc.fill(steine);
        aufgabe13.crc.stroke(steine);
    }
    function pflanze(_x, _y) {
        let pflanz = new Path2D();
        aufgabe13.crc.strokeStyle = "black";
        aufgabe13.crc.fillStyle = "lime";
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
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 900, 600);
        aufgabe13.crc.fillStyle = "seagreen";
        aufgabe13.crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 400, 900, 200);
        aufgabe13.crc.fillStyle = "saddlebrown";
        aufgabe13.crc.fill(boden);
        let pflanz2 = new Path2D();
        aufgabe13.crc.strokeStyle = "black";
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
    function hermitdemfutter(_event) {
        let xCanvas = _event.clientX;
        let yCanvas = _event.clientY;
        for (let i = 0; i < 10; i++) {
            let NomNom = new aufgabe13.Foodistsogut(xCanvas, yCanvas);
            aufgabe13.AllesArray.push(NomNom);
        }
    }
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=main.js.map