namespace aufgabe12 {
    export class Foodistsogut extends bewegteDinge {

        constructor(_xK: number, _yK: number) {
            super(Math.random());
            this.x = _xK;
            this.y = _yK;
            this.dx = Math.random();
            this.dy = Math.random() * (8 - 2) + 2;
        }

        draw(): void {
            let nom: Path2D = new Path2D();
            nom.arc(this.x, this.y, 7, Math.PI, 2 * Math.PI);
            crc.strokeStyle = "red";
            crc.fillStyle = "red";
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
