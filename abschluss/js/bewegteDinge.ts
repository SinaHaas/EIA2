namespace aufgabe13 {
    export class bewegteDinge extends AlleObjekte {
        dx: number;
        dy: number;

        constructor() {
            super()
            //
        } 

        draw(): void {
            //
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}