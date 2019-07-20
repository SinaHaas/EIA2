var aufgabe13;
(function (aufgabe13) {
    class Spielfisch extends aufgabe13.AlleObjekte {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
        }
        draw() {
            let fischi = new Path2D();
            fischi.arc(this.x + 100, this.y + 70, 30, 0, 2 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fillStyle = "purple";
            aufgabe13.crc.stroke(fischi);
            aufgabe13.crc.fill(fischi);
        }
    }
    aufgabe13.Spielfisch = Spielfisch;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=spielfisch.js.map