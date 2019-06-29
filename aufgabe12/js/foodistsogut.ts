namespace aufgabe12 {
    export class Futter extends bewegteDinge {

        constructor(_x: number, _y: number) {
            super(Math.random());
            this.x = _x;
            this.y = _y;
            this.dx = Math.random();
            this.dy = Math.random() * (8 - 2) + 2;
        }

        draw(): void {
            let nom: Path2D = new Path2D();
            nom.arc(this.x, this.y, 4, Math.PI, 2 * Math.PI);
            crc.fillStyle = "red";
            crc.strokeStyle = "red";
            crc.fill(nom);
            crc.stroke(nom);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > 580) {
                this.y = 580;
                this.x = this.x -= this.dx;
            }
        }
    }
}
