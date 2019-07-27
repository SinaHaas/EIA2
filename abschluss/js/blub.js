var aufgabe13;
(function (aufgabe13) {
    class Blub extends aufgabe13.bewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x * (200 - 50) + 50;
            this.y = _y * (600 - 100) + 100;
            this.dx = 0;
            this.dy = 0.3 * -10;
            this.ofType = "blubberblasen";
        }
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "lightblue";
            aufgabe13.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "lightblue";
            aufgabe13.crc.fill(blub);
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
        }
    }
    aufgabe13.Blub = Blub;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=blub.js.map