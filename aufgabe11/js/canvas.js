var aufgabe11;
(function (aufgabe11) {
    class Fish {
        draw() {
            let schweif = new Path2D();
            schweif.moveTo(this.x + 90, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 50);
            schweif.lineTo(this.x + 60, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 90);
            aufgabe11.crc.fillStyle = "gold";
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.lineWidth = 1;
            aufgabe11.crc.fill(schweif);
            schweif.closePath();
            aufgabe11.crc.stroke(schweif);
            let fischi = new Path2D();
            fischi.arc(this.x + 100, this.y + 70, 10, 0, 2 * Math.PI);
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.lineWidth = 3;
            aufgabe11.crc.fillStyle = "blue";
            aufgabe11.crc.stroke(fischi);
            aufgabe11.crc.fill(fischi);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = (0 - 90) + this.dx;
            }
        }
    }
    aufgabe11.Fish = Fish;
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
            if (this.x < 0) {
                this.x = 900 + this.dx;
            }
        }
    }
    aufgabe11.BigFish = BigFish;
    class Seepferdchen {
        draw() {
            let pflanz = new Path2D();
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.fillStyle = "orangered";
            pflanz.moveTo(this.x, this.y);
            pflanz.lineTo(this.x + 45, this.y - 50);
            pflanz.lineTo(this.x + 65, this.y - 80);
            pflanz.lineTo(this.x + 70, this.y - 110);
            pflanz.lineTo(this.x + 75, this.y - 60);
            pflanz.lineTo(this.x + 65, this.y - 40);
            pflanz.closePath();
            aufgabe11.crc.stroke(pflanz);
            aufgabe11.crc.fill(pflanz);
            let kopf = new Path2D();
            kopf.moveTo(this.x + 68, this.y - 100);
            kopf.lineTo(this.x + 70, this.y - 125);
            kopf.lineTo(this.x + 95, this.y - 110);
            kopf.closePath();
            aufgabe11.crc.stroke(kopf);
            aufgabe11.crc.fill(kopf);
            let auge = new Path2D();
            auge.arc(this.x + 75, this.y - 114, 3, 0, 2 * Math.PI);
            aufgabe11.crc.fillStyle = "white";
            aufgabe11.crc.strokeStyle = "black";
            aufgabe11.crc.stroke(auge);
            aufgabe11.crc.fill(auge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 75, this.y - 114, 1.5, 0, 2 * Math.PI);
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
        }
    }
    aufgabe11.Seepferdchen = Seepferdchen;
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
        }
    }
    aufgabe11.Blub = Blub;
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=canvas.js.map