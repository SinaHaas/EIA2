var aufgabe13;
(function (aufgabe13) {
    class Blub {
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "blue";
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
            if (this.y < -5) {
                this.y = 600 + this.dy;
            }
        }
    }
    aufgabe13.Blub = Blub;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=blub.js.map