namespace aufgabe13 {
    export class Seepferdchen extends BewegteDinge {
        ofType: string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (100 - 1) + 1;
            this.y = _y * (400 - 20) + 20;
            this.dx = _x * 10;
            this.dy = 0;
            this.ofType = "mitteFisch";
        }

        draw(): void {
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
            // crc.closePath;
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
            // crc.closePath;
            crc.fill(schweif);
            crc.stroke(schweif);

            let flosseUnten: Path2D = new Path2D();
            crc.fillStyle = "blue";
            flosseUnten.moveTo(this.x + 10, this.y + 5);
            flosseUnten.lineTo(this.x + 5, this.y + 20);
            flosseUnten.lineTo(this.x + 20, this.y + 5);
            crc.lineWidth = 2;
            // crc.closePath;
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
            if (this.x > 900) {
                this.x = (0 - 30) + this.dx;
            }
        }
    }
}



