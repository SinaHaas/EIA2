namespace aufgabe13 {
    export class Spielfisch extends AlleObjekte {

        constructor(_x: number, _y: number) {
            super();
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            let r: number = 30;
            let fischi: Path2D = new Path2D();
            fischi.arc(this.x, this.y, r, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 3;
            crc.fillStyle = "purple";
            crc.stroke(fischi);
            crc.fill(fischi);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x, this.y, 13, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }

        fressFische(): void {
            for (let i: number = 0; i < AllesArray.length; i++) {
                // console.log("hi");
                //let distance:number = Math.sqrt(this.x*this.x) * Math.sqrt(AllesArray[i].x*AllesArray[i].x);
                let xDistance: number = AllesArray[i].x - this.x;
                let yDistance: number = AllesArray[i].y - this.y;

                let distance: number = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

                // if(distance < 0){
                //     delete AllesArray[i];
                // }
                // console.log(AllesArray[i].x)
                //console.log(AllesArray[i])
                // console.log(distance);

                if (distance < 30 && AllesArray[i] != spielfisch) {
                    // console.log(AllesArray[i]);
                    AllesArray.splice(i, 1);
                }
            }
        }

    }
}

