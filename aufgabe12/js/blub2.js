var aufgabe12;
(function (aufgabe12) {
    class BlubZwei {
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "blue";
            aufgabe12.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 3, 0, 2 * Math.PI);
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
            }
        }
    }
    aufgabe12.BlubZwei = BlubZwei;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=blub2.js.map