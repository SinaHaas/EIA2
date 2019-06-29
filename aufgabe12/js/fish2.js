var aufgabe12;
(function (aufgabe12) {
    class BigFish extends aufgabe12.bewegteDinge {
        constructor() {
            super(Math.random());
            this.x = Math.random() * (600 - 100) + 200;
            this.y = Math.random() * (350 - 100) + 100;
            ;
            this.dx = Math.random() * -10;
            this.dy = 0;
        }
        draw() {
            let fischiUnten = new Path2D();
            aufgabe12.crc.fillStyle = "crimson";
            fischiUnten.moveTo(this.x, this.y);
            fischiUnten.quadraticCurveTo(this.x, this.y + 90, this.x + 190, this.y);
            aufgabe12.crc.stroke(fischiUnten);
            aufgabe12.crc.fill(fischiUnten);
            let fischiOben = new Path2D();
            fischiOben.moveTo(this.x, this.y);
            fischiOben.quadraticCurveTo(this.x, this.y - 110, this.x + 190, this.y);
            aufgabe12.crc.stroke(fischiOben);
            aufgabe12.crc.fill(fischiOben);
            let fischiFlosse = new Path2D();
            fischiFlosse.moveTo(this.x + 190, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y - 50);
            fischiFlosse.lineTo(this.x + 230, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y + 50);
            fischiFlosse.closePath();
            aufgabe12.crc.stroke(fischiFlosse);
            aufgabe12.crc.fill(fischiFlosse);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 10, 13, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "white";
            aufgabe12.crc.strokeStyle = "black";
            aufgabe12.crc.stroke(fischiAUge);
            aufgabe12.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 5, 0, 2 * Math.PI);
            aufgabe12.crc.fillStyle = "black";
            aufgabe12.crc.fill(augeInnen);
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
    aufgabe12.BigFish = BigFish;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=fish2.js.map