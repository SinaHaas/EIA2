namespace aufgabe11 {
    export class Fish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

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

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = (0 - 90) + this.dx;
            }
        }
    }

    export class BigFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        draw(): void {
            let fischiUnten: Path2D = new Path2D();
            crc.fillStyle = "crimson";
            fischiUnten.moveTo(this.x, this.y);
            fischiUnten.quadraticCurveTo(this.x, this.y + 90, this.x + 190, this.y);
            crc.stroke(fischiUnten);
            crc.fill(fischiUnten);

            let fischiOben: Path2D = new Path2D();
            fischiOben.moveTo(this.x, this.y);
            fischiOben.quadraticCurveTo(this.x, this.y - 110, this.x + 190, this.y);
            crc.stroke(fischiOben);
            crc.fill(fischiOben);

            let fischiFlosse: Path2D = new Path2D();
            fischiFlosse.moveTo(this.x + 190, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y - 50);
            fischiFlosse.lineTo(this.x + 230, this.y);
            fischiFlosse.lineTo(this.x + 250, this.y + 50);
            fischiFlosse.closePath();
            crc.stroke(fischiFlosse);
            crc.fill(fischiFlosse);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x + 30, this.y - 10, 13, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x + 30, this.y - 10, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
            }
            if (this.x < 0) {
                this.x = 900 + this.dx;
            }
        }
    }

    export class Seepferdchen {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

        draw(): void {
            let pflanz: Path2D = new Path2D();
            crc.strokeStyle = "black";
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

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
    }

    export class Blub {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;

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
        }
    }






























































}