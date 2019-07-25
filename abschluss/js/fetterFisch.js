var aufgabe13;
(function (aufgabe13) {
    class FetterFisch extends aufgabe13.bewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x * (200 - 50) + 50;
            this.y = _y * (600 - 100) + 100;
            this.dx = _x * -10;
            this.dy = 0;
            this.ofType = "mittelgrosserFisch";
        }
        draw() {
            aufgabe13.crc.fillStyle = "maroon";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1;
            let fischFlosse2 = new Path2D();
            fischFlosse2.moveTo(this.x + 25, this.y - 30);
            fischFlosse2.lineTo(this.x + 30, this.y - 50);
            fischFlosse2.lineTo(this.x + 50, this.y - 40);
            fischFlosse2.lineTo(this.x + 45, this.y - 30);
            fischFlosse2.closePath();
            aufgabe13.crc.fill(fischFlosse2);
            aufgabe13.crc.stroke(fischFlosse2);
            let fischFlosse3 = new Path2D();
            fischFlosse3.moveTo(this.x + 55, this.y - 30);
            fischFlosse3.lineTo(this.x + 60, this.y - 45);
            fischFlosse3.lineTo(this.x + 70, this.y - 40);
            fischFlosse3.lineTo(this.x + 65, this.y - 25);
            fischFlosse3.closePath();
            aufgabe13.crc.fill(fischFlosse3);
            aufgabe13.crc.stroke(fischFlosse3);
            let flosseUnten = new Path2D();
            flosseUnten.moveTo(this.x + 50, this.y + 12);
            flosseUnten.lineTo(this.x + 65, this.y + 30);
            flosseUnten.lineTo(this.x + 70, this.y + 10);
            flosseUnten.closePath();
            aufgabe13.crc.fill(flosseUnten);
            aufgabe13.crc.stroke(flosseUnten);
            let fischKoerperUnten = new Path2D();
            aufgabe13.crc.fillStyle = "DeepSkyBlue";
            fischKoerperUnten.moveTo(this.x, this.y);
            fischKoerperUnten.quadraticCurveTo(this.x + 15, this.y + 30, this.x + 100, this.y);
            fischKoerperUnten.moveTo(this.x, this.y);
            fischKoerperUnten.quadraticCurveTo(this.x + 20, this.y - 70, this.x + 100, this.y);
            aufgabe13.crc.stroke(fischKoerperUnten);
            aufgabe13.crc.fill(fischKoerperUnten);
            let fischFlosse = new Path2D();
            fischFlosse.moveTo(this.x + 100, this.y);
            fischFlosse.lineTo(this.x + 120, this.y - 30);
            fischFlosse.lineTo(this.x + 110, this.y);
            fischFlosse.lineTo(this.x + 120, this.y + 30);
            fischFlosse.closePath();
            aufgabe13.crc.stroke(fischFlosse);
            aufgabe13.crc.fill(fischFlosse);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 20, 8, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(fischiAUge);
            aufgabe13.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 20, 5, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy;
            }
            if (this.x < 0) {
                this.x = 900 + this.dx;
            }
        }
    }
    aufgabe13.FetterFisch = FetterFisch;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=fetterFisch.js.map