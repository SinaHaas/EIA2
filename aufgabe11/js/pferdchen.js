var aufgabe11;
(function (aufgabe11) {
    class Seepferdchen {
        draw() {
            let pflanz = new Path2D();
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.fillStyle = "orangered";
            pflanz.moveTo(this.x, this.y);
            pflanz.lineTo(this.x + 45, this.y - 50);
            pflanz.lineTo(this.x + 65, this.y - 80);
            pflanz.lineTo(this.x + 70, this.y - 110);
            pflanz.lineTo(this.x + 75, this.y - 60);
            pflanz.lineTo(this.x + 65, this.y - 40);
            pflanz.closePath();
            aufgabe11.crc.stroke(pflanz);
            aufgabe11.crc.fill(pflanz);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 68, this.y - 100);
            kopf.lineTo(this.x + 70, this.y - 125);
            kopf.lineTo(this.x + 95, this.y - 110);
            kopf.closePath();
            aufgabe11.crc.stroke(kopf);
            aufgabe11.crc.fill(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 75, this.y - 114, 3, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "white";
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.stroke(auge);
            aufgabe11.crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 75, this.y - 114, 1.5, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "black";
            aufgabe11.crc.fill(augeInnen);
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
            if (this.x > 900) {
                this.x = (0 - 30) + this.dx;
            }
        }
    }
    aufgabe11.Seepferdchen = Seepferdchen;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=pferdchen.js.map