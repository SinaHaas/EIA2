namespace aufgabe12 {
    export class bewegteDinge {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor(_x: number) {
            this.x = _x * (200 - 20) + 20;
            this.y = Math.random() * canvas.height;
            this.dx = _x * 3;
            this.dy = Math.random() - 10;
        } 

        draw(): void {
            let blubaußen: Path2D = new Path2D();
            blubaußen.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            crc.fillStyle = "blue";
            crc.fill(blubaußen);

            let blub: Path2D = new Path2D();
            blub.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(blub);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < -5) {
                this.y = 600 + this.dy;
                this.x = 100;
            }
        }
    }
}