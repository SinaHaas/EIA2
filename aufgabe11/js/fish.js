var aufgabe11;
(function (aufgabe11) {
    class Fish {
        draw() {
            let schweif = new Path2D();
            schweif.moveTo(this.x + 90, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 50);
            schweif.lineTo(this.x + 60, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 90);
            aufgabe11.crc.fillStyle = "gold";
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.lineWidth = 1;
            aufgabe11.crc.fill(schweif);
            schweif.closePath();
            aufgabe11.crc.stroke(schweif);
            let fischi = new Path2D();
            fischi.arc(this.x + 100, this.y + 70, 10, 0, 2 * Math.PI);
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.lineWidth = 3;
            aufgabe11.crc.fillStyle = "blue";
            aufgabe11.crc.stroke(fischi);
            aufgabe11.crc.fill(fischi);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = (0 - 90) + this.dx;
            }
        }
    }
    aufgabe11.Fish = Fish;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=fish.js.map