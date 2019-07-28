var aufgabe13;
(function (aufgabe13) {
    class BewegteDinge extends aufgabe13.AlleObjekte {
        constructor() {
            super();
            //
        }
        draw() {
            //
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    aufgabe13.BewegteDinge = BewegteDinge;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=bewegteDinge.js.map