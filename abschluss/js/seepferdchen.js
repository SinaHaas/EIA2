var aufgabe13;
(function (aufgabe13) {
    class Seepferdchen extends aufgabe13.bewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x * (600 - 100) + 200;
            this.y = _y * (350 - 100) + 100;
            ;
            this.dx = _x * 10;
            this.dy = 0;
        }
        draw() {
            let pflanz = new Path2D();
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.fillStyle = "orangered";
            pflanz.moveTo(this.x, this.y);
            pflanz.lineTo(this.x + 45, this.y - 50);
            pflanz.lineTo(this.x + 65, this.y - 80);
            pflanz.lineTo(this.x + 70, this.y - 110);
            pflanz.lineTo(this.x + 75, this.y - 60);
            pflanz.lineTo(this.x + 65, this.y - 40);
            pflanz.closePath();
            aufgabe13.crc.stroke(pflanz);
            aufgabe13.crc.fill(pflanz);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 68, this.y - 100);
            kopf.lineTo(this.x + 70, this.y - 125);
            kopf.lineTo(this.x + 95, this.y - 110);
            kopf.closePath();
            aufgabe13.crc.stroke(kopf);
            aufgabe13.crc.fill(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 75, this.y - 114, 3, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(auge);
            aufgabe13.crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 75, this.y - 114, 1.5, 0, 2 * Math.PI);
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