namespace aufgabe13 {
    export class Spielfisch extends AlleObjekte {
        groesse: number;
        auge: number;
        augeinn: number;
        abstandSchweif: number;
        abstandSchweif2: number;
        ofType: string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x;
            this.y = _y;
            this.groesse = 30;
            this.auge = 13;
            this.augeinn = 5;
            this.abstandSchweif = this.groesse + 50;
            this.abstandSchweif2 = this.groesse + 20;
            this.ofType = "SpielfischKlein";

        }

        draw(): void {
            let fischi: Path2D = new Path2D();
            fischi.arc(this.x, this.y, this.groesse, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 3;
            crc.fillStyle = "purple";
            crc.stroke(fischi);
            crc.fill(fischi);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x, this.y, this.auge, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x, this.y, this.augeinn, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);

            let schweif: Path2D = new Path2D();
            schweif.moveTo(this.x + this.groesse, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y - 50);
            schweif.lineTo(this.x + this.abstandSchweif2, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y + 50);
            crc.fillStyle = "gold";
            crc.strokeStyle = "black";
            crc.lineWidth = 1;
            crc.fill(schweif);
            schweif.closePath();
            crc.stroke(schweif);
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

                if (distance < 30 && AllesArray[i] != spielfisch && AllesArray[i].ofType == "kleinerFisch") {
                    // console.log(AllesArray[i]);
                    AllesArray.splice(i, 1);
                    this.groesse += 3;
                    this.abstandSchweif += 3;
                    this.abstandSchweif2 += 3;
                    highscore = highscore + 1; 
                    highscoreFunk();
                }
                if (distance < 30 && AllesArray[i] != spielfisch && this.groesse > 60 && AllesArray[i].ofType == "GroßerFisch") {
                    AllesArray.splice(i, 1);
                    highscore = highscore + 5;
                    highscoreFunk();
                }
                if(distance < 30 && AllesArray[i]!= spielfisch && this.groesse < 60 && AllesArray[i].ofType == "GroßerFisch"){
                    alert("Du hast verloren :(")
                }

            }
        }

    }
}

