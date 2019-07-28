namespace aufgabe13 {
    export class Fish extends BewegteDinge {
        ofType: string;

        //malt den kleinen Fisch
        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (600 - 100) + 200;
            this.y = _y * (350 - 100) + 100;
            this.dx = _x * -10;
            this.dy = 0;
            this.ofType = "kleinerFisch";
        }

        draw(): void {
            let schweif: Path2D = new Path2D();
            schweif.moveTo(this.x, this.y);
            schweif.lineTo(this.x + 20, this.y - 15);
            schweif.lineTo(this.x + 10, this.y);
            schweif.lineTo(this.x + 20, this.y + 15);
            crc.fillStyle = "gold";
            crc.strokeStyle = "black";
            crc.lineWidth = 3;
            crc.fill(schweif);
            schweif.closePath();
            crc.stroke(schweif);

            let fischi: Path2D = new Path2D();
            fischi.arc(this.x - 10, this.y, 10, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 3;
            crc.fillStyle = "orangered";
            crc.stroke(fischi);
            crc.fill(fischi);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x - 15, this.y, 3, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x - 15, this.y, 2, 0, 2 * Math.PI);
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