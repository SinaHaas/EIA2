var aufgabe13;
(function (aufgabe13) {
    class Fish extends aufgabe13.bewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x * (600 - 100) + 200;
            this.y = _y * (350 - 100) + 100;
            this.dx = _x * 10;
            this.dy = 0;
            this.ofType = "kleinerFisch";
        }
        draw() {
            let schweif = new Path2D();
            schweif.moveTo(this.x, this.y);
            schweif.lineTo(this.x + 20, this.y - 20);
            schweif.lineTo(this.x + 10, this.y);
            schweif.lineTo(this.x + 20, this.y + 20);
            aufgabe13.crc.fillStyle = "gold";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1;
            aufgabe13.crc.fill(schweif);
            schweif.closePath();
            aufgabe13.crc.stroke(schweif);
            let fischi = new Path2D();
            fischi.arc(this.x - 10, this.y, 10, 0, 2 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fillStyle = "blue";
            aufgabe13.crc.stroke(fischi);
            aufgabe13.crc.fill(fischi);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
            }
            if (this.x < 0 - 300) {
                this.x = 900 + this.dx;
            }
        }
    }
    aufgabe13.Fish = Fish;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=fish.js.map