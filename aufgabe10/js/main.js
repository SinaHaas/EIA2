var aufgabe10;
(function (aufgabe10) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        boden();
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * (600 - 200) + 200;
            let y = Math.random() * (300 - 1) + 1;
            fischis(x, y);
        }
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
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * (600 - 100) + 200;
            let y = Math.random() * (350 - 100) + 100;
            fischi2(x, y);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * (700 - 200) + 200;
            let y = Math.random() * (350 - 200) + 200;
            seepferdchen(x, y);
        }
        qualle();
        for (let i = 0; i < 30; i++) {
            let x = Math.random() * (200 - 20) + 20;
            let y = Math.random() * canvas.height;
            blubbers(x, y);
        }
    }
    function boden() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 900, 600);
        crc.fillStyle = "seagreen";
        crc.fill(wasser);
        let boden = new Path2D();
        boden.rect(0, 400, 900, 200);
        crc.fillStyle = "saddlebrown";
        crc.fill(boden);
    }
    function fischis(_x, _y) {
        let schweif = new Path2D();
        schweif.moveTo(_x + 90, _y + 70);
        schweif.lineTo(_x + 50, _y + 50);
        schweif.lineTo(_x + 60, _y + 70);
        schweif.lineTo(_x + 50, _y + 90);
        crc.fillStyle = "gold";
        crc.strokeStyle = "black";
        crc.lineWidth = 1;
        crc.fill(schweif);
        schweif.closePath();
        crc.stroke(schweif);
        let fischi = new Path2D();
        fischi.arc(_x + 100, _y + 70, 10, 0, 2 * Math.PI);
        crc.strokeStyle = "black";
        crc.lineWidth = 3;
        crc.fillStyle = "blue";
        crc.stroke(fischi);
        crc.fill(fischi);
    }
    function fischi2(_x, _y) {
        let fischiUnten = new Path2D();
        crc.fillStyle = "crimson";
        fischiUnten.moveTo(_x, _y);
        fischiUnten.quadraticCurveTo(_x, _y + 90, _x + 190, _y);
        crc.stroke(fischiUnten);
        crc.fill(fischiUnten);
        let fischiOben = new Path2D();
        fischiOben.moveTo(_x, _y);
        fischiOben.quadraticCurveTo(_x, _y - 110, _x + 190, _y);
        crc.stroke(fischiOben);
        crc.fill(fischiOben);
        let fischiFlosse = new Path2D();
        fischiFlosse.moveTo(_x + 190, _y);
        fischiFlosse.lineTo(_x + 250, _y - 50);
        fischiFlosse.lineTo(_x + 230, _y);
        fischiFlosse.lineTo(_x + 250, _y + 50);
        fischiFlosse.closePath();
        crc.stroke(fischiFlosse);
        crc.fill(fischiFlosse);
        let fischiAUge = new Path2D();
        fischiAUge.arc(_x + 30, _y - 10, 13, 0, 2 * Math.PI);
        crc.fillStyle = "white";
        crc.strokeStyle = "black";
        crc.stroke(fischiAUge);
        crc.fill(fischiAUge);
        let augeInnen = new Path2D();
        augeInnen.arc(_x + 30, _y - 10, 5, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(augeInnen);
    }
    function kies(_x, _y) {
        let steine = new Path2D();
        crc.strokeStyle = "black";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        crc.fillStyle = "chocolate";
        crc.fill(steine);
        crc.stroke(steine);
    }
    function pflanze(_x, _y) {
        let pflanz = new Path2D();
        crc.strokeStyle = "black";
        crc.fillStyle = "lime";
        pflanz.moveTo(_x, _y);
        pflanz.lineTo(_x - 25, _y - 50);
        pflanz.lineTo(_x - 5, _y - 80);
        pflanz.lineTo(_x, _y - 100);
        pflanz.lineTo(_x + 5, _y - 60);
        pflanz.lineTo(_x - 5, _y - 40);
        pflanz.closePath();
        crc.lineWidth = 3;
        crc.stroke(pflanz);
        crc.fill(pflanz);
    }
    function seepferdchen(_x, _y) {
        let pflanz = new Path2D();
        crc.strokeStyle = "black";
        crc.fillStyle = "orangered";
        pflanz.moveTo(_x, _y);
        pflanz.lineTo(_x + 45, _y - 50);
        pflanz.lineTo(_x + 65, _y - 80);
        pflanz.lineTo(_x + 70, _y - 110);
        pflanz.lineTo(_x + 75, _y - 60);
        pflanz.lineTo(_x + 65, _y - 40);
        pflanz.closePath();
        crc.stroke(pflanz);
        crc.fill(pflanz);
        let kopf = new Path2D();
        kopf.moveTo(_x + 68, _y - 100);
        kopf.lineTo(_x + 70, _y - 125);
        kopf.lineTo(_x + 95, _y - 110);
        kopf.closePath();
        crc.stroke(kopf);
        crc.fill(kopf);
        let auge = new Path2D();
        auge.arc(_x + 75, _y - 114, 3, 0, 2 * Math.PI);
        crc.fillStyle = "white";
        crc.strokeStyle = "black";
        crc.stroke(auge);
        crc.fill(auge);
        let augeInnen = new Path2D();
        augeInnen.arc(_x + 75, _y - 114, 1.5, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(augeInnen);
    }
    function pflanze2() {
        let pflanz2 = new Path2D();
        crc.strokeStyle = "black";
        crc.fillStyle = "darkgreen";
        pflanz2.moveTo(800, 550);
        pflanz2.lineTo(775, 420);
        pflanz2.lineTo(795, 400);
        pflanz2.lineTo(795, 330);
        pflanz2.lineTo(805, 400);
        pflanz2.lineTo(795, 460);
        pflanz2.closePath();
        crc.lineWidth = 3;
        crc.stroke(pflanz2);
        crc.fill(pflanz2);
    }
    function qualle() {
        let qual = new Path2D();
        crc.fillStyle = "orange";
        qual.arc(700, 100, 50, Math.PI, 2 * Math.PI);
        crc.fill(qual);
        let arme = new Path2D();
        crc.strokeStyle = "yellow";
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
        crc.lineWidth = 5;
        crc.stroke(arme);
        for (let i = 0; i < 60; i = i + 50) {
            let x = 675 + i;
            let auge = new Path2D();
            auge.arc(x, 75, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(x, 75, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }
    }
    function blubbers(_x, _y) {
        let blubaußen = new Path2D();
        blubaußen.arc(_x, _y, 9, 0, 2 * Math.PI);
        crc.fillStyle = "blue";
        crc.fill(blubaußen);
        let blub = new Path2D();
        blub.arc(_x, _y, 7, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.fill(blub);
    }
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=main.js.map