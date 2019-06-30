var aufgabe12;
(function (aufgabe12) {
    class Foodistsogut extends aufgabe12.bewegteDinge {
        constructor(_xK, _yK) {
            super(Math.random());
            this.x = _xK;
            this.y = _yK;
            this.dx = Math.random();
            this.dy = Math.random() * (8 - 2) + 2;
        }
        draw() {
            let nom = new Path2D();
            nom.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI);
            aufgabe12.crc.strokeStyle = "red";
            aufgabe12.crc.fillStyle = "red";
            aufgabe12.crc.fill(nom);
            aufgabe12.crc.stroke(nom);
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
    aufgabe12.Foodistsogut = Foodistsogut;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=foodistsogut.js.map