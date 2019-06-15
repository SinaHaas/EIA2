var aufgabe11;
(function (aufgabe11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fishArray = [];
    let biggerFish = [];
    let Pferdchen = [];
    let Blubberblasen = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        aufgabe11.crc = canvas.getContext("2d");
        boden();
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
        pflanze2();
        qualle();
        imageData = aufgabe11.crc.getImageData(0, 0, canvas.width, canvas.height);
        //Animiert
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * (600 - 200) + 200;
            let y = Math.random() * (300 - 1) + 1;
            //let x: number = Math.random() * canvas.width;
            //let y: number = Math.random() * canvas.height;
            let dx = Math.random() * 10;
            let dy = 0;
            let fish1;
            fish1 = new aufgabe11.Fish();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            fishArray.push(fish1);
            fish1.draw();
            console.log(fish1);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * (600 - 100) + 200;
            let y = Math.random() * (350 - 100) + 100;
            let dx = Math.random() * -10;
            let dy = 0;
            let fish2;
            fish2 = new aufgabe11.BigFish();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2.dy = dy;
            biggerFish.push(fish2);
            fish2.draw();
            console.log(fish2);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * (700 - 200) + 200;
            let y = Math.random() * (350 - 200) + 200;
            let dx = Math.random() * 5;
            let dy = Math.random() * -5;
            let seepferd;
            seepferd = new aufgabe11.Seepferdchen();
            seepferd.x = x;
            seepferd.y = y;
            seepferd.dx = dx;
            seepferd.dy = dy;
            Pferdchen.push(seepferd);
            seepferd.draw();
            console.log(seepferd);
        }
        for (let i = 0; i < 30; i++) {
            let x = Math.random() * (200 - 20) + 20;
            let y = Math.random() * canvas.height;
            let dx = 0;
            let dy = Math.random() * -10;
            let blub;
            blub = new aufgabe11.Blub();
            blub.x = x;
            blub.y = y;
            blub.dx = dx;
            blub.dy = dy;
            Blubberblasen.push(blub);
            blub.draw();
            console.log(blub);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aufgabe11.crc.clearRect(0, 0, canvas.width, canvas.height);
        aufgabe11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < biggerFish.length; i++) {
            biggerFish[i].update();
        }
        for (let i = 0; i < Pferdchen.length; i++) {
            Pferdchen[i].update();
        }
        for (let i = 0; i < Blubberblasen.length; i++) {
            Blubberblasen[i].update();
        }
    }
    function boden() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 900, 600);
        aufgabe11.crc.fillStyle = "seagreen";
        aufgabe11.crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 400, 900, 200);
        aufgabe11.crc.fillStyle = "saddlebrown";
        aufgabe11.crc.fill(boden);
    }
    function kies(_x, _y) {
        let steine = new Path2D();
        aufgabe11.crc.strokeStyle = "black";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        aufgabe11.crc.fillStyle = "chocolate";
        aufgabe11.crc.fill(steine);
        aufgabe11.crc.stroke(steine);
    }
    function pflanze(_x, _y) {
        let pflanz = new Path2D();
        aufgabe11.crc.strokeStyle = "black";
        aufgabe11.crc.fillStyle = "lime";
        pflanz.moveTo(_x, _y);
        pflanz.lineTo(_x - 25, _y - 50);
        pflanz.lineTo(_x - 5, _y - 80);
        pflanz.lineTo(_x, _y - 100);
        pflanz.lineTo(_x + 5, _y - 60);
        pflanz.lineTo(_x - 5, _y - 40);
        pflanz.closePath();
        aufgabe11.crc.lineWidth = 3;
        aufgabe11.crc.stroke(pflanz);
        aufgabe11.crc.fill(pflanz);
    }
    function pflanze2() {
        let pflanz2 = new Path2D();
        aufgabe11.crc.strokeStyle = "black";
        aufgabe11.crc.fillStyle = "darkgreen";
        pflanz2.moveTo(800, 550);
        pflanz2.lineTo(775, 420);
        pflanz2.lineTo(795, 400);
        pflanz2.lineTo(795, 330);
        pflanz2.lineTo(805, 400);
        pflanz2.lineTo(795, 460);
        pflanz2.closePath();
        aufgabe11.crc.lineWidth = 3;
        aufgabe11.crc.stroke(pflanz2);
        aufgabe11.crc.fill(pflanz2);
    }
    function qualle() {
        let qual = new Path2D();
        aufgabe11.crc.fillStyle = "orange";
        qual.arc(700, 100, 50, Math.PI, 2 * Math.PI);
        aufgabe11.crc.fill(qual);
        let arme = new Path2D();
        aufgabe11.crc.strokeStyle = "yellow";
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
        aufgabe11.crc.lineWidth = 5;
        aufgabe11.crc.stroke(arme);
        for (let i = 0; i < 60; i = i + 50) {
            let x = 675 + i;
            let auge = new Path2D();
            auge.arc(x, 75, 10, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "white";
            aufgabe11.crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(x, 75, 5, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "black";
            aufgabe11.crc.fill(augeInnen);
        }
    }
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=main.js.map