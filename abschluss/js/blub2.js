var aufgabe13;
(function (aufgabe13) {
    class BlubZwei extends aufgabe13.BewegteDinge {
        constructor(_x) {
            super();
        }
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "blue";
            aufgabe13.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "lightblue";
            aufgabe13.crc.fill(blub);
        }
    }
    aufgabe13.BlubZwei = BlubZwei;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=blub2.js.map