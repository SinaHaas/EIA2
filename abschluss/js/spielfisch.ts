namespace aufgabe13 {
    export class Spielfisch extends AlleObjekte {
        groesse: number;
        auge: number;
        augeinn: number;
        schweifAnfang: number;
        abstandSchweif: number;
        abstandSchweif2: number;
        ofType: string;
        color: string;

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
            this.color = "yellow";
        }

        //Zeichnen des Spielerfisches mit Variablen anstelle von Werten, um die Größe anpassen zu können
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
            crc.fillStyle = this.color;
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

        //Spielerfisch soll andere Fische fressen können und auch von ihnen gfressen werden 
        fressFische(): void {
            for (let i: number = 0; i < allesArray.length; i++) {
                // console.log("hi");
                let xDistance: number = allesArray[i].x - this.x;
                let yDistance: number = allesArray[i].y - this.y;
                let distance: number = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                let radiusOfDistance: number = this.groesse;

                if (allesArray[i] != spielfisch) {

                    //Fress kleinen Fisch egal wann 
                    if (distance < radiusOfDistance && allesArray[i].ofType == "kleinerFisch") {
                        // console.log(AllesArray[i]);
                        allesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        highscore = highscore + 1;
                        highscoreFunk();
                        let kleinerFisch: Fish = new Fish(Math.random(), Math.random());
                        allesArray.push(kleinerFisch);
                    }
                    //Fress mittleren Fisch wenn größer 
                    else if (distance < radiusOfDistance && this.groesse > 30 && allesArray[i].ofType == "mitteFisch") {
                        allesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        highscore = highscore + 5;
                        highscore = highscore + 3;
                        highscoreFunk();
                        let fischi: Seepferdchen = new Seepferdchen(Math.random(), Math.random());
                        allesArray.push(fischi);
                    }
                    //Fress Großen Fisch wenn größer
                    else if (distance < radiusOfDistance && this.groesse > 60 && allesArray[i].ofType == "GroßerFisch") {
                        allesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        highscore = highscore + 5;
                        highscoreFunk();
                        let fischi: BigFish = new BigFish(Math.random(), Math.random());
                        allesArray.push(fischi);
                    }
                    //Fress mittelgroßen Fisch wenn größer
                    else if (distance < radiusOfDistance && this.groesse > 40 && allesArray[i].ofType == "mittelgrosserFisch") {
                        allesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        highscore = highscore + 5;
                        highscoreFunk();
                        let fischi: FetterFisch = new FetterFisch(Math.random(), Math.random());
                        allesArray.push(fischi);
                    }
                    //Tod wenn großer Fisch 
                    else if (distance < radiusOfDistance && this.groesse < 60 && allesArray[i].ofType == "GroßerFisch") {
                        nameEingeben();
                        console.log("gF");
                    }
                    //Tod wenn mittlerer Fisch
                    else if (distance < radiusOfDistance && this.groesse < 30 && allesArray[i].ofType == "mitteFisch") {
                        nameEingeben();
                        console.log("mF");
                    }
                    //Tod wenn mittelgroßer Fisch 
                    else if (distance < radiusOfDistance && this.groesse < 40 && allesArray[i].ofType == "mittelgrosserFisch") {
                        nameEingeben();
                        console.log("mgF");
                    }
                    //Blubberblasen schrumpfen einen, wenn man ab einer bestimmten Größe durch sie durch schwimmt 
                    else if (this.groesse > 60 && distance < radiusOfDistance && allesArray[i].ofType == "blubberblasen") {
                        this.groesse -= 10;
                        this.abstandSchweif -= 10;
                        this.abstandSchweif2 -= 10;
                        this.schweifAnfang -= 10;
                    }
                    //Futter ist ebenfalls ab einer bestimmten Größe gefährlich 
                    else if (this.groesse > 50 && distance < radiusOfDistance && allesArray[i].ofType == "foodImCanvas") {
                        this.groesse -= 3;
                        this.abstandSchweif -= 3;
                        this.abstandSchweif2 -= 3;
                        this.schweifAnfang -= 3;
                        highscore = highscore - 1;
                        highscoreFunk();
                        allesArray.splice(i, 1);
                        let futter: FutterImCanvas = new FutterImCanvas(Math.random(), Math.random());
                        allesArray.push(futter);
                    }
                    //Seepferdchen sind immer tödlich 
                    else if (this.groesse > 10 && distance < radiusOfDistance && allesArray[i].ofType == "pferdchen") {
                        nameEingeben();
                    }

                } 

            }

            //Ändere Frabe zu rot wenn größer als mittlerer Fisch
            if (this.groesse > 30) {
                this.color = "red";
            }
            //Ändere Farbe zu hellblau wenn größer als mittelgroßer Fisch
            if (this.groesse > 40) {
                this.color = "DeepSkyBlue";
            }
            //Ändere Farbe zu blau wenn größer als großer Fisch
            if (this.groesse > 60) {
                this.color = "blue"; 
            }
            //Wenn man unter 30 schrumpft, dann wird man wieder gelb
            if (this.groesse < 30) {
                this.color = "yellow";
            }
        }
    }
}


