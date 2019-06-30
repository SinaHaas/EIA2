var aufgabe12;
(function (aufgabe12) {
    class BlubZwei extends aufgabe12.bewegteDinge {
        constructor(_x) {
            super(_x);
        }
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "blue";
            aufgabe12.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "lightblue";
            aufgabe12.crc.fill(blub);
        }
    }
    aufgabe12.BlubZwei = BlubZwei;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=blub2.js.map