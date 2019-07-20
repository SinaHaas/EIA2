var aufgabe13;
(function (aufgabe13) {
    class Foodistsogut extends aufgabe13.bewegteDinge {
        constructor(_xK, _yK) {
            super();
            this.x = _xK;
            this.y = _yK;
            this.dx = Math.random();
            this.dy = Math.random() * (8 - 2) + 2;
        }
        draw() {
            let nom = new Path2D();
            nom.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI);
            aufgabe13.crc.strokeStyle = "red";
            aufgabe13.crc.fillStyle = "red";
            aufgabe13.crc.fill(nom);
            aufgabe13.crc.stroke(nom);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 580) {
                this.y = 580;
                this.x = this.x -= this.dx;
            }
        }
    }
    aufgabe13.Foodistsogut = Foodistsogut;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=foodistsogut.js.map