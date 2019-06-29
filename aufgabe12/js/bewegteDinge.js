var aufgabe12;
(function (aufgabe12) {
    class bewegteDinge {
        constructor(_x) {
            this.x = _x * (200 - 20) + 20;
            this.y = Math.random() * aufgabe12.canvas.height;
            this.dx = _x * 3;
            this.dy = Math.random() - 10;
        }
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "blue";
            aufgabe12.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "lightblue";
            aufgabe12.crc.fill(blub);
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
                this.x = 100;
            }
        }
    }
    aufgabe12.bewegteDinge = bewegteDinge;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=bewegteDinge.js.map