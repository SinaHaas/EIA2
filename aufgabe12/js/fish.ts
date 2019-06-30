namespace aufgabe12 {
    export class Fish extends BigFish {
        
        constructor() {
            super(Math.random());
            this.dx = Math.random() * 10;
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

    }
}