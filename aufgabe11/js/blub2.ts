namespace aufgabe11 {
    export class BlubZwei {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        draw(): void {
            let blubaußen: Path2D = new Path2D();
            blubaußen.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc.fillStyle = "blue";
            crc.fill(blubaußen);

            let blub: Path2D = new Path2D();
            blub.arc(this.x, this.y, 3, 0, 2 * Math.PI);
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
            }
        }
    }
}