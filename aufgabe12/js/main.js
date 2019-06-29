var aufgabe12;
(function (aufgabe12) {
    document.addEventListener("DOMContentLoaded", init);
    aufgabe12.bewegteDingeArray = [];
    let fps = 30;
    let imageData;
    function init() {
        aufgabe12.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe12.crc = aufgabe12.canvas.getContext("2d");
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
        aufgabe12.canvas.addEventListener("click", hermitdemfutter);
        imageData = aufgabe12.crc.getImageData(0, 0, aufgabe12.canvas.width, aufgabe12.canvas.height);
        //Animiert
        for (let i = 0; i < 20; i++) {
            let blub = new aufgabe12.bewegteDinge(Math.random());
            aufgabe12.bewegteDingeArray.push(blub);
        }
        for (let i = 0; i < 2; i++) {
            let fisch = new aufgabe12.BigFish();
            aufgabe12.bewegteDingeArray.push(fisch);
        }
        for (let i = 0; i < 16; i++) {
            let fisch = new aufgabe12.Fish();
            aufgabe12.bewegteDingeArray.push(fisch);
        }
        for (let i = 0; i < 2; i++) {
            let fisch = new aufgabe12.Seepferdchen();
            aufgabe12.bewegteDingeArray.push(fisch);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aufgabe12.crc.clearRect(0, 0, aufgabe12.canvas.width, aufgabe12.canvas.height);
        aufgabe12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < aufgabe12.bewegteDingeArray.length; i++) {
            aufgabe12.bewegteDingeArray[i].update();
        }
    }
    function kies(_x, _y) {
        let steine = new Path2D();
        aufgabe12.crc.lineWidth = 2;
        aufgabe12.crc.strokeStyle = "black";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        aufgabe12.crc.fillStyle = "chocolate";
        aufgabe12.crc.fill(steine);
        aufgabe12.crc.stroke(steine);
    }
    function pflanze(_x, _y) {
        let pflanz = new Path2D();
        aufgabe12.crc.strokeStyle = "black";
        aufgabe12.crc.fillStyle = "lime";
        pflanz.moveTo(_x, _y);
        pflanz.lineTo(_x - 25, _y - 50);
        pflanz.lineTo(_x - 5, _y - 80);
        pflanz.lineTo(_x, _y - 100);
        pflanz.lineTo(_x + 5, _y - 60);
        pflanz.lineTo(_x - 5, _y - 40);
        pflanz.closePath();
        aufgabe12.crc.lineWidth = 3;
        aufgabe12.crc.stroke(pflanz);
        aufgabe12.crc.fill(pflanz);
    }
    function hintergrund() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 900, 600);
        aufgabe12.crc.fillStyle = "seagreen";
        aufgabe12.crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 400, 900, 200);
        aufgabe12.crc.fillStyle = "saddlebrown";
        aufgabe12.crc.fill(boden);
        let pflanz2 = new Path2D();
        aufgabe12.crc.strokeStyle = "black";
        aufgabe12.crc.fillStyle = "darkgreen";
        pflanz2.moveTo(800, 550);
        pflanz2.lineTo(775, 420);
        pflanz2.lineTo(795, 400);
        pflanz2.lineTo(795, 330);
        pflanz2.lineTo(805, 400);
        pflanz2.lineTo(795, 460);
        pflanz2.closePath();
        aufgabe12.crc.lineWidth = 3;
        aufgabe12.crc.stroke(pflanz2);
        aufgabe12.crc.fill(pflanz2);
        let qual = new Path2D();
        aufgabe12.crc.fillStyle = "orange";
        qual.arc(700, 100, 50, Math.PI, 2 * Math.PI);
        aufgabe12.crc.fill(qual);
        let arme = new Path2D();
        aufgabe12.crc.strokeStyle = "yellow";
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
        aufgabe12.crc.lineWidth = 5;
        aufgabe12.crc.stroke(arme);
        for (let i = 0; i < 60; i = i + 50) {
            let x = 675 + i;
            let auge = new Path2D();
            auge.arc(x, 75, 10, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "white";
            aufgabe12.crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(x, 75, 5, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "black";
            aufgabe12.crc.fill(augeInnen);
        }
    }
    function hermitdemfutter(_event) {
        let xCanvas = _event.clientX;
        let yCanvas = _event.clientY;
        for (let i = 0; i < 5; i++) {
            let NomNom = new aufgabe12.Futter(xCanvas, yCanvas);
            aufgabe12.bewegteDingeArray.push(NomNom);
        }
    }
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=main.js.map