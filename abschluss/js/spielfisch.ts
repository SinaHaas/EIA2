namespace aufgabe13 {
    export class Spielfisch extends AlleObjekte {
        groesse: number;
        auge: number;
        augeinn: number;
        schweifAnfang: number;
        abstandSchweif: number;
        abstandSchweif2: number;
        ofType: string;

        constructor(_x: number, _y: number) {
            super();
            this.x = _x;
            this.y = _y;
            this.groesse = 20;
            this.auge = 10;
            this.augeinn = 5;
            this.abstandSchweif = this.groesse + 40;
            this.abstandSchweif2 = this.groesse + 20;
            this.ofType = "SpielfischKlein";
            this.schweifAnfang = 20;
        }

        draw(): void {
            let schweif: Path2D = new Path2D();
            schweif.moveTo(this.x + this.schweifAnfang, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y - 50);
            schweif.lineTo(this.x + this.abstandSchweif2, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y + 50);
            crc.fillStyle = "MediumTurquoise";
            crc.strokeStyle = "black";
            crc.lineWidth = 3;
            crc.fill(schweif);
            schweif.closePath();
            crc.stroke(schweif);

            let fischi: Path2D = new Path2D();
            fischi.arc(this.x, this.y, this.groesse, 0, 2 * Math.PI);
            crc.strokeStyle = "black";
            crc.lineWidth = 5;
            crc.fillStyle = "yellow";
            crc.stroke(fischi);
            crc.fill(fischi);

            let fischiAUge: Path2D = new Path2D();
            fischiAUge.arc(this.x - 10, this.y, this.auge, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.strokeStyle = "black";
            crc.stroke(fischiAUge);
            crc.fill(fischiAUge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x - 10, this.y, this.augeinn, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }

        fressFische(): void {
            for (let i: number = 0; i < AllesArray.length; i++) {
                // console.log("hi");
                let xDistance: number = AllesArray[i].x - this.x;
                let yDistance: number = AllesArray[i].y - this.y;
                let distance: number = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                let radiusOfDistance: number = 30;

                // console.log(AllesArray[i].x)
                //console.log(AllesArray[i]) 
                // console.log(distance);

                //Fress kleinen Fisch egal wann 
                if (distance < 30 && AllesArray[i] != spielfisch && AllesArray[i].ofType == "kleinerFisch") {
                    // console.log(AllesArray[i]);
                    AllesArray.splice(i, 1);
                    this.groesse += 1;
                    this.abstandSchweif += 1;
                    this.abstandSchweif2 += 1;
                    this.schweifAnfang += 1;
                    highscore = highscore + 1;
                    highscoreFunk();

                    let fischi: Fish = new Fish(Math.random(), Math.random());
                    AllesArray.push(fischi);
                }

                //Fress Großen Fisch wenn größer
                if (distance < radiusOfDistance && AllesArray[i] != spielfisch && this.groesse > 60 && AllesArray[i].ofType == "GroßerFisch") {
                    AllesArray.splice(i, 1);
                    highscore = highscore + 5;
                    highscoreFunk();

                    let fischi: BigFish = new BigFish(Math.random(), Math.random());
                    AllesArray.push(fischi);
                }

                //Fress mittleren Fisch wenn größer 
                if (distance < radiusOfDistance && AllesArray[i] != spielfisch && this.groesse > 30 && AllesArray[i].ofType == "mitteFisch") {
                    AllesArray.splice(i, 1);
                    highscore = highscore + 3;
                    highscoreFunk();
                }

                //Tod wenn großer Fisch
                if (distance < radiusOfDistance && AllesArray[i] != spielfisch && this.groesse < 60 && AllesArray[i].ofType == "GroßerFisch") {
                    alert("Du hast verloren :(")
                    nameEingeben();
                }
            }
        }

    }
}

