var aufgabe11;
(function (aufgabe11) {
    class Blub {
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "blue";
            aufgabe11.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "lightblue";
            aufgabe11.crc.fill(blub);
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
    aufgabe11.Blub = Blub;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=blub.js.map