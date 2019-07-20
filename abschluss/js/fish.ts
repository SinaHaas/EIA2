namespace aufgabe13 {
    export class Fish extends bewegteDinge {
        
        constructor(_x:number,_y:number) {
            super();
            this.x = _x* (600 - 100) + 200;
            this.y = _y* (350 - 100) + 100;;
            this.dx = _x * 10;
            this.dy = 0;
        }

        draw(): void {
            let schweif: Path2D = new Path2D();
            schweif.moveTo(this.x + 90, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 50);
            schweif.lineTo(this.x + 60, this.y + 70);
            schweif.lineTo(this.x + 50, this.y + 90);
            crc.fillStyle = "gold";
            crc.strokeStyle = "black";
            crc.lineWidth = 1;
            crc.fill(schweif);
            schweif.closePath();
            crc.stroke(schweif);

            let fischi: Path2D = new Path2D();
            fischi.arc(this.x + 100, this.y + 70, 10, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 3;
            crc.fillStyle = "blue";
            crc.stroke(fischi);
            crc.fill(fischi);
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