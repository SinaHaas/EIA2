namespace aufgabe13 {
    export class FetterFisch extends BewegteDinge {
        ofType: string;

        //malt den zweitgrößten Fisch
        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (200 - 50) + 50;
            this.y = _y * (600 - 100) + 100;
            this.dx = _x * -10;
            this.dy = 0;
            this.ofType = "mittelgrosserFisch";
        }

        draw(): void {
            crc.fillStyle = "maroon";
            crc.strokeStyle = "black";
            crc.lineWidth = 3;

            let fischFlosse2: Path2D = new Path2D();
            fischFlosse2.moveTo(this.x + 25, this.y - 30);
            fischFlosse2.lineTo(this.x + 30, this.y - 50);
            fischFlosse2.lineTo(this.x + 50, this.y - 40);
            fischFlosse2.lineTo(this.x + 45, this.y - 30);
            fischFlosse2.closePath();
            crc.fill(fischFlosse2);
            crc.stroke(fischFlosse2);

            let fischFlosse3: Path2D = new Path2D();
            fischFlosse3.moveTo(this.x + 55, this.y - 30);
            fischFlosse3.lineTo(this.x + 60, this.y - 45);
            fischFlosse3.lineTo(this.x + 70, this.y - 40);
            fischFlosse3.lineTo(this.x + 65, this.y - 25);
            fischFlosse3.closePath();
            crc.fill(fischFlosse3);
            crc.stroke(fischFlosse3);

            let flosseUnten: Path2D = new Path2D();
            flosseUnten.moveTo(this.x + 50, this.y + 12);
            flosseUnten.lineTo(this.x + 65, this.y + 30);
            flosseUnten.lineTo(this.x + 70, this.y + 10);
            flosseUnten.closePath();
            crc.fill(flosseUnten);
            crc.stroke(flosseUnten);

            let fischKoerperUnten: Path2D = new Path2D();
            crc.fillStyle = "DeepSkyBlue";
            fischKoerperUnten.moveTo(this.x, this.y);
            fischKoerperUnten.quadraticCurveTo(this.x + 15, this.y + 30, this.x + 100, this.y);
            fischKoerperUnten.moveTo(this.x, this.y);
            fischKoerperUnten.quadraticCurveTo(this.x + 20, this.y - 70, this.x + 100, this.y);
            crc.stroke(fischKoerperUnten);
            crc.fill(fischKoerperUnten);

            let fischFlosse: Path2D = new Path2D();
            fischFlosse.moveTo(this.x + 100, this.y);
            fischFlosse.lineTo(this.x + 120, this.y - 30);
            fischFlosse.lineTo(this.x + 110, this.y);
            fischFlosse.lineTo(this.x + 120, this.y + 30);
            fischFlosse.closePath();
            crc.stroke(fischFlosse);
            crc.fill(fischFlosse);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 20, 8, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 20, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy;
            }
            if (this.x < 0) {
                this.x = 900 + this.dx;
            }
        }
    }
}