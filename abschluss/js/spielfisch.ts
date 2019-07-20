namespace aufgabe13 {
    export class Spielfisch extends AlleObjekte {

        constructor(_x:number, _y:number) {
            super();
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            let fischi: Path2D = new Path2D();
            fischi.arc(this.x + 100, this.y + 70, 30, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 3;
            crc.fillStyle = "purple";
            crc.stroke(fischi);
            crc.fill(fischi);
        }

    }
}