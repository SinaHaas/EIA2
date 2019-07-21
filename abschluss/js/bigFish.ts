
namespace aufgabe13 {
    export class BigFish extends bewegteDinge {
        ofType: string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (600 - 100) + 200;
            this.y = _y * (350 - 100) + 100;;
            this.dx = _x * -10;
            this.dy = 0;
            this.ofType = "GroßerFisch";
        }

        draw(): void {
            let fischiUnten: Path2D = new Path2D();
            crc.fillStyle = "crimson";
            fischiUnten.moveTo(this.x, this.y);
            fischiUnten.quadraticCurveTo(this.x, this.y + 90, this.x + 190, this.y);
            crc.stroke(fischiUnten);
            crc.fill(fischiUnten);

            let fischiOben: Path2D = new Path2D();
            fischiOben.moveTo(this.x, this.y);
            fischiOben.quadraticCurveTo(this.x, this.y - 110, this.x + 190, this.y);
            crc.stroke(fischiOben);
            crc.fill(fischiOben);

            let fischiFlosse: Path2D = new Path2D();
            fischiFlosse.moveTo(this.x + 190, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y - 50);
            fischiFlosse.lineTo(this.x + 230, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y + 50);
            fischiFlosse.closePath();
            crc.stroke(fischiFlosse);
            crc.fill(fischiFlosse);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 10, 13, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }

        move(): void {
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
}