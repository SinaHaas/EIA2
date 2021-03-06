namespace aufgabe13 {
    export class Pferdchen extends BewegteDinge {
        ofType: string;

        //malt das Seepferdchen
        constructor(_x: number, _y: number) {
            super();
            this.x = _x * (700 - 100) + 100;
            this.y = _y * (100 - 20) + 20;
            this.dx = 0;
            this.dy = -5;
            this.ofType = "pferdchen";
        }

        draw(): void {
            let pflanz: Path2D = new Path2D();
            crc.strokeStyle = "black";
            crc.lineWidth = 4;
            crc.fillStyle = "orangered";

            pflanz.moveTo(this.x, this.y);
            pflanz.lineTo(this.x + 45, this.y - 50);
            pflanz.lineTo(this.x + 65, this.y - 80);
            pflanz.lineTo(this.x + 70, this.y - 110);
            pflanz.lineTo(this.x + 75, this.y - 60);
            pflanz.lineTo(this.x + 65, this.y - 40);
            pflanz.closePath();
            crc.stroke(pflanz);
            crc.fill(pflanz);

            let kopf: Path2D = new Path2D();
            kopf.moveTo(this.x + 68, this.y - 100);
            kopf.lineTo(this.x + 70, this.y - 125);
            kopf.lineTo(this.x + 95, this.y - 110);
            kopf.closePath();
            crc.stroke(kopf);
            crc.fill(kopf);

            let auge: Path2D = new Path2D();
            auge.arc(this.x + 75, this.y - 114, 3, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(auge);
            crc.fill(auge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x + 75, this.y - 114, 1.5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 600 + this.dy;
            }
        }
    }
}



