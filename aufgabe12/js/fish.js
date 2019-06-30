var aufgabe12;
(function (aufgabe12) {
    class Fish extends aufgabe12.BigFish {
        constructor() {
            super(Math.random());
            this.dx = Math.random() * 10;
        }
        draw() {
            let schweif = new Path2D();
            schweif.moveTo(this.x + 90, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 50);
            schweif.lineTo(this.x + 60, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 90);
            aufgabe12.crc.fillStyle = "gold";
            aufgabe12.crc.strokeStyle = "black";
            aufgabe12.crc.lineWidth = 1;
            aufgabe12.crc.fill(schweif);
            schweif.closePath();
            aufgabe12.crc.stroke(schweif);
            let fischi = new Path2D();
            fischi.arc(this.x + 100, this.y + 70, 10, 0, 2 * Math.PI);
            aufgabe12.crc.strokeStyle = "black";
            aufgabe12.crc.lineWidth = 3;
            aufgabe12.crc.fillStyle = "blue";
            aufgabe12.crc.stroke(fischi);
            aufgabe12.crc.fill(fischi);
        }
    }
    aufgabe12.Fish = Fish;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=fish.js.map