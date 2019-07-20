var aufgabe13;
(function (aufgabe13) {
    class bewegteDinge extends aufgabe13.AlleObjekte {
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
    aufgabe13.bewegteDinge = bewegteDinge;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=bewegteDinge.js.map