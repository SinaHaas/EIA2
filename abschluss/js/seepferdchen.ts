namespace aufgabe13 {
    export class Seepferdchen extends bewegteDinge {
        ofType:string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (600 - 100) + 200;
            this.y = _y * (350 - 100) + 100;
            this.dx = _x * 10;
            this.dy = 0;
            this.ofType = "mitteFisch"
        }

        draw(): void {
            // let pflanz: Path2D = new Path2D();
            // crc.strokeStyle = "black";
            // crc.fillStyle = "orangered";

            // pflanz.moveTo(this.x, this.y);
            // pflanz.lineTo(this.x + 45, this.y - 50);
            // pflanz.lineTo(this.x + 65, this.y - 80);
            // pflanz.lineTo(this.x + 70, this.y - 110);
            // pflanz.lineTo(this.x + 75, this.y - 60);
            // pflanz.lineTo(this.x + 65, this.y - 40);
            // pflanz.closePath();
            // crc.stroke(pflanz);
            // crc.fill(pflanz);

            // let kopf: Path2D = new Path2D();
            // kopf.moveTo(this.x + 68, this.y - 100);
            // kopf.lineTo(this.x + 70, this.y - 125);
            // kopf.lineTo(this.x + 95, this.y - 110);
            // kopf.closePath();
            // crc.stroke(kopf);
            // crc.fill(kopf);

            // let auge: Path2D = new Path2D();
            // auge.arc(this.x + 75, this.y - 114, 3, 0, 2 * Math.PI);
            // crc.fillStyle = "white";
            // crc.strokeStyle = "black";
            // crc.stroke(auge);
            // crc.fill(auge);

            // let augeInnen: Path2D = new Path2D();
            // augeInnen.arc(this.x + 75, this.y - 114, 1.5, 0, 2 * Math.PI);
            // crc.fillStyle = "black";
            // crc.fill(augeInnen);

            // let schweif: Path2D = new Path2D();
            // schweif.moveTo(this.x, this.y);
            // schweif.lineTo(this.x + 10, this.y - 10);
            // schweif.lineTo(this.x + 10, this.y + 10);
            // schweif.lineTo(this.x, this.y);
            // crc.fillStyle = "gold";
            // crc.strokeStyle = "black";
            // crc.lineWidth = 1;
            // crc.fill(schweif);
            // schweif.closePath();
            // crc.stroke(schweif);

            // let fischi: Path2D = new Path2D();
            // fischi.arc(this.x - 10, this.y, 10, 0, 2 * Math.PI);
            // crc.strokeStyle = "black";
            // crc.lineWidth = 3;
            // crc.fillStyle = "red";
            // crc.stroke(fischi);
            // crc.fill(fischi);
            let flosseOben: Path2D = new Path2D();
            crc.fillStyle = "blue";
            flosseOben.moveTo(this.x + 30, this.y - 20);
            flosseOben.lineTo(this.x + 25, this.y - 35);
            flosseOben.lineTo(this.x + 20, this.y - 28);
            flosseOben.lineTo(this.x + 12, this.y - 30);
            flosseOben.lineTo(this.x + 15, this.y - 23);
            flosseOben.lineTo(this.x, this.y - 13);
            flosseOben.lineTo(this.x + 6, this.y - 6);
            crc.lineWidth = 2;
            crc.closePath;
            crc.fill(flosseOben);
            crc.stroke(flosseOben);

            let schweif: Path2D = new Path2D();
            crc.fillStyle = "blue";
            schweif.moveTo(this.x, this.y);
            schweif.lineTo(this.x - 20, this.y - 30);
            schweif.lineTo(this.x - 10, this.y);
            schweif.lineTo(this.x - 20, this.y + 30);
            schweif.lineTo(this.x, this.y);
            crc.lineWidth = 2;
            crc.closePath;
            crc.fill(schweif);
            crc.stroke(schweif);

            let flosseUnten: Path2D = new Path2D();
            crc.fillStyle = "blue";
            flosseUnten.moveTo(this.x + 10, this.y + 5);
            flosseUnten.lineTo(this.x + 5, this.y + 20);
            flosseUnten.lineTo(this.x + 20, this.y + 5);
            crc.lineWidth = 2;
            crc.closePath;
            crc.fill(flosseUnten);
            crc.stroke(flosseUnten);

            let fischOberkörperkurve: Path2D = new Path2D();
            crc.fillStyle = "red";
            fischOberkörperkurve.moveTo(this.x, this.y);
            fischOberkörperkurve.quadraticCurveTo(this.x + 30, this.y - 40, this.x + 50, this.y);
            fischOberkörperkurve.moveTo(this.x + 50, this.y);
            fischOberkörperkurve.quadraticCurveTo(this.x + 20, this.y + 20, this.x, this.y);
            crc.lineWidth = 2;
            crc.stroke(fischOberkörperkurve);
            crc.fill(fischOberkörperkurve);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 10, 6, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy
            }
            if (this.x > 900) {
                this.x = (0 - 30) + this.dx
            }
        }
    }
}



