var aufgabe11;
(function (aufgabe11) {
    class BigFish {
        draw() {
            let fischiUnten = new Path2D();
            aufgabe11.crc.fillStyle = "crimson";
            fischiUnten.moveTo(this.x, this.y);
            fischiUnten.quadraticCurveTo(this.x, this.y + 90, this.x + 190, this.y);
            aufgabe11.crc.stroke(fischiUnten);
            aufgabe11.crc.fill(fischiUnten);
            let fischiOben = new Path2D();
            fischiOben.moveTo(this.x, this.y);
            fischiOben.quadraticCurveTo(this.x, this.y - 110, this.x + 190, this.y);
            aufgabe11.crc.stroke(fischiOben);
            aufgabe11.crc.fill(fischiOben);
            let fischiFlosse = new Path2D();
            fischiFlosse.moveTo(this.x + 190, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y - 50);
            fischiFlosse.lineTo(this.x + 230, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y + 50);
            fischiFlosse.closePath();
            aufgabe11.crc.stroke(fischiFlosse);
            aufgabe11.crc.fill(fischiFlosse);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 10, 13, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "white";
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.stroke(fischiAUge);
            aufgabe11.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 5, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "black";
            aufgabe11.crc.fill(augeInnen);
        }
        update() {
            this.move();
            this.draw();
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
    aufgabe11.BigFish = BigFish;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=fish2.js.map