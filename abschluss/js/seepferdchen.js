var aufgabe13;
(function (aufgabe13) {
    class Seepferdchen extends aufgabe13.bewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x * (100 - 1) + 1;
            this.y = _y * (400 - 20) + 20;
            this.dx = _x * 10;
            this.dy = 0;
            this.ofType = "mitteFisch";
        }
        draw() {
            // let pflanz: Path2D = new Path2D();
            // crc.strokeStyle = "black";
            // crc.fillStyle = "orangered";
            // pflanz.moveTo(this.x, this.y);
            // pflanz.lineTo(this.x + 45, this.y - 50);
            // pflanz.lineTo(this.x + 65, this.y - 80);
            // pflanz.lineTo(this.x + 70, this.y - 110);
            // pflanz.lineTo(this.x + 75, this.y - 60);
            // pflanz.lineTo(this.x + 65, this.y - 40);
            // pflanz.closePath();
            // crc.stroke(pflanz);
            // crc.fill(pflanz);
            // let kopf: Path2D = new Path2D();
            // kopf.moveTo(this.x + 68, this.y - 100);
            // kopf.lineTo(this.x + 70, this.y - 125);
            // kopf.lineTo(this.x + 95, this.y - 110);
            // kopf.closePath();
            // crc.stroke(kopf);
            // crc.fill(kopf);
            // let auge: Path2D = new Path2D();
            // auge.arc(this.x + 75, this.y - 114, 3, 0, 2 * Math.PI);
            // crc.fillStyle = "white";
            // crc.strokeStyle = "black";
            // crc.stroke(auge);
            // crc.fill(auge);
            // let augeInnen: Path2D = new Path2D();
            // augeInnen.arc(this.x + 75, this.y - 114, 1.5, 0, 2 * Math.PI);
            // crc.fillStyle = "black";
            // crc.fill(augeInnen);
            // let schweif: Path2D = new Path2D();
            // schweif.moveTo(this.x, this.y);
            // schweif.lineTo(this.x + 10, this.y - 10);
            // schweif.lineTo(this.x + 10, this.y + 10);
            // schweif.lineTo(this.x, this.y);
            // crc.fillStyle = "gold";
            // crc.strokeStyle = "black";
            // crc.lineWidth = 1;
            // crc.fill(schweif);
            // schweif.closePath();
            // crc.stroke(schweif);
            // let fischi: Path2D = new Path2D();
            // fischi.arc(this.x - 10, this.y, 10, 0, 2 * Math.PI);
            // crc.strokeStyle = "black";
            // crc.lineWidth = 3;
            // crc.fillStyle = "red";
            // crc.stroke(fischi);
            // crc.fill(fischi);
            let flosseOben = new Path2D();
            aufgabe13.crc.fillStyle = "blue";
            flosseOben.moveTo(this.x + 30, this.y - 20);
            flosseOben.lineTo(this.x + 25, this.y - 35);
            flosseOben.lineTo(this.x + 20, this.y - 28);
            flosseOben.lineTo(this.x + 12, this.y - 30);
            flosseOben.lineTo(this.x + 15, this.y - 23);
            flosseOben.lineTo(this.x, this.y - 13);
            flosseOben.lineTo(this.x + 6, this.y - 6);
            aufgabe13.crc.lineWidth = 2;
            aufgabe13.crc.closePath;
            aufgabe13.crc.fill(flosseOben);
            aufgabe13.crc.stroke(flosseOben);
            let schweif = new Path2D();
            aufgabe13.crc.fillStyle = "blue";
            schweif.moveTo(this.x, this.y);
            schweif.lineTo(this.x - 20, this.y - 30);
            schweif.lineTo(this.x - 10, this.y);
            schweif.lineTo(this.x - 20, this.y + 30);
            schweif.lineTo(this.x, this.y);
            aufgabe13.crc.lineWidth = 2;
            aufgabe13.crc.closePath;
            aufgabe13.crc.fill(schweif);
            aufgabe13.crc.stroke(schweif);
            let flosseUnten = new Path2D();
            aufgabe13.crc.fillStyle = "blue";
            flosseUnten.moveTo(this.x + 10, this.y + 5);
            flosseUnten.lineTo(this.x + 5, this.y + 20);
            flosseUnten.lineTo(this.x + 20, this.y + 5);
            aufgabe13.crc.lineWidth = 2;
            aufgabe13.crc.closePath;
            aufgabe13.crc.fill(flosseUnten);
            aufgabe13.crc.stroke(flosseUnten);
            let fischOberkörperkurve = new Path2D();
            aufgabe13.crc.fillStyle = "red";
            fischOberkörperkurve.moveTo(this.x, this.y);
            fischOberkörperkurve.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 50, this.y);
            fischOberkörperkurve.moveTo(this.x + 50, this.y);
            fischOberkörperkurve.quadraticCurveTo(this.x + 20, this.y + 20, this.x, this.y);
            aufgabe13.crc.lineWidth = 2;
            aufgabe13.crc.stroke(fischOberkörperkurve);
            aufgabe13.crc.fill(fischOberkörperkurve);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 10, 6, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(fischiAUge);
            aufgabe13.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 3, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy;
            }
            if (this.x > 900) {
                this.x = (0 - 30) + this.dx;
            }
        }
    }
    aufgabe13.Seepferdchen = Seepferdchen;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=seepferdchen.js.map