var aufgabe12;
(function (aufgabe12) {
    class Seepferdchen extends aufgabe12.Fish {
        constructor() {
            super();
            this.dy = Math.random() * -5;
        }
        draw() {
            let pflanz = new Path2D();
            aufgabe12.crc.strokeStyle = "black";
            aufgabe12.crc.fillStyle = "orangered";
            pflanz.moveTo(this.x, this.y);
            pflanz.lineTo(this.x + 45, this.y - 50);
            pflanz.lineTo(this.x + 65, this.y - 80);
            pflanz.lineTo(this.x + 70, this.y - 110);
            pflanz.lineTo(this.x + 75, this.y - 60);
            pflanz.lineTo(this.x + 65, this.y - 40);
            pflanz.closePath();
            aufgabe12.crc.stroke(pflanz);
            aufgabe12.crc.fill(pflanz);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 68, this.y - 100);
            kopf.lineTo(this.x + 70, this.y - 125);
            kopf.lineTo(this.x + 95, this.y - 110);
            kopf.closePath();
            aufgabe12.crc.stroke(kopf);
            aufgabe12.crc.fill(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 75, this.y - 114, 3, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "white";
            aufgabe12.crc.strokeStyle = "black";
            aufgabe12.crc.stroke(auge);
            aufgabe12.crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 75, this.y - 114, 1.5, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "black";
            aufgabe12.crc.fill(augeInnen);
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
    aufgabe12.Seepferdchen = Seepferdchen;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=pferdchen.js.map