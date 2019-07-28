var aufgabe13;
(function (aufgabe13) {
    class BigFish extends aufgabe13.BewegteDinge {
        //malt den größten Fisch
        constructor(_x, _y) {
            super();
            this.x = _x * (10 - 5) + 5;
            this.y = _y * (350 - 100) + 100;
            this.dx = _x * -10;
            this.dy = 0;
            this.ofType = "GroßerFisch";
        }
        draw() {
            let fischiUnten = new Path2D();
            aufgabe13.crc.fillStyle = "blue";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            fischiUnten.moveTo(this.x, this.y);
            fischiUnten.quadraticCurveTo(this.x, this.y + 90, this.x + 190, this.y);
            aufgabe13.crc.stroke(fischiUnten);
            aufgabe13.crc.fill(fischiUnten);
            let fischiOben = new Path2D();
            fischiOben.moveTo(this.x, this.y);
            fischiOben.quadraticCurveTo(this.x, this.y - 110, this.x + 190, this.y);
            aufgabe13.crc.stroke(fischiOben);
            aufgabe13.crc.fill(fischiOben);
            let fischiFlosse = new Path2D();
            fischiFlosse.moveTo(this.x + 190, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y - 50);
            fischiFlosse.lineTo(this.x + 230, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y + 50);
            fischiFlosse.closePath();
            aufgabe13.crc.stroke(fischiFlosse);
            aufgabe13.crc.fill(fischiFlosse);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 10, 13, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(fischiAUge);
            aufgabe13.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 5, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
            }
            if (this.x < 0 - 300) {
                this.x = 900 + this.dx;
            }
        }
    }
    aufgabe13.BigFish = BigFish;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=bigFish.js.map