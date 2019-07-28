var aufgabe13;
(function (aufgabe13) {
    class Spielfisch extends aufgabe13.AlleObjekte {
        constructor(_x, _y) {
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
        draw() {
            let schweif = new Path2D();
            schweif.moveTo(this.x + this.schweifAnfang, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y - 50);
            schweif.lineTo(this.x + this.abstandSchweif2, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y + 50);
            aufgabe13.crc.fillStyle = "MediumTurquoise";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fill(schweif);
            schweif.closePath();
            aufgabe13.crc.stroke(schweif);
            let fischi = new Path2D();
            fischi.arc(this.x, this.y, this.groesse, 0, 2 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 5;
            aufgabe13.crc.fillStyle = this.color;
            aufgabe13.crc.stroke(fischi);
            aufgabe13.crc.fill(fischi);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x - 10, this.y, this.auge, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(fischiAUge);
            aufgabe13.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x - 10, this.y, this.augeinn, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
        //Spielerfisch soll andere Fische fressen können und auch von ihnen gfressen werden 
        fressFische() {
            for (let i = 0; i < aufgabe13.AllesArray.length; i++) {
                // console.log("hi");
                let xDistance = aufgabe13.AllesArray[i].x - this.x;
                let yDistance = aufgabe13.AllesArray[i].y - this.y;
                let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                let radiusOfDistance = this.groesse;
                if (aufgabe13.AllesArray[i] != aufgabe13.spielfisch) {
                    //Fress kleinen Fisch egal wann 
                    if (distance < radiusOfDistance && aufgabe13.AllesArray[i].ofType == "kleinerFisch") {
                        // console.log(AllesArray[i]);
                        aufgabe13.AllesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        aufgabe13.highscore = aufgabe13.highscore + 1;
                        aufgabe13.highscoreFunk();
                        let kleinerFisch = new aufgabe13.Fish(Math.random(), Math.random());
                        aufgabe13.AllesArray.push(kleinerFisch);
                    }
                    //Fress mittleren Fisch wenn größer 
                    else if (distance < radiusOfDistance && this.groesse > 30 && aufgabe13.AllesArray[i].ofType == "mitteFisch") {
                        aufgabe13.AllesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        aufgabe13.highscore = aufgabe13.highscore + 5;
                        aufgabe13.highscore = aufgabe13.highscore + 3;
                        aufgabe13.highscoreFunk();
                        let fischi = new aufgabe13.Seepferdchen(Math.random(), Math.random());
                        aufgabe13.AllesArray.push(fischi);
                    }
                    //Fress Großen Fisch wenn größer
                    else if (distance < radiusOfDistance && this.groesse > 60 && aufgabe13.AllesArray[i].ofType == "GroßerFisch") {
                        aufgabe13.AllesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        aufgabe13.highscore = aufgabe13.highscore + 5;
                        aufgabe13.highscoreFunk();
                        let fischi = new aufgabe13.BigFish(Math.random(), Math.random());
                        aufgabe13.AllesArray.push(fischi);
                    }
                    //Fress mittelgroßen Fisch wenn größer
                    else if (distance < radiusOfDistance && this.groesse > 40 && aufgabe13.AllesArray[i].ofType == "mittelgrosserFisch") {
                        aufgabe13.AllesArray.splice(i, 1);
                        this.groesse += 1;
                        this.abstandSchweif += 1;
                        this.abstandSchweif2 += 1;
                        this.schweifAnfang += 1;
                        aufgabe13.highscore = aufgabe13.highscore + 5;
                        aufgabe13.highscoreFunk();
                        let fischi = new aufgabe13.FetterFisch(Math.random(), Math.random());
                        aufgabe13.AllesArray.push(fischi);
                    }
                    //Tod wenn großer Fisch 
                    else if (distance < radiusOfDistance && this.groesse < 60 && aufgabe13.AllesArray[i].ofType == "GroßerFisch") {
                        aufgabe13.nameEingeben();
                        console.log("gF");
                    }
                    //Tod wenn mittlerer Fisch
                    else if (distance < radiusOfDistance && this.groesse < 30 && aufgabe13.AllesArray[i].ofType == "mitteFisch") {
                        aufgabe13.nameEingeben();
                        console.log("mF");
                    }
                    //Tod wenn mittelgroßer Fisch 
                    else if (distance < radiusOfDistance && this.groesse < 40 && aufgabe13.AllesArray[i].ofType == "mittelgrosserFisch") {
                        aufgabe13.nameEingeben();
                        console.log("mgF");
                    }
                    //Blubberblasen schrumpfen einen, wenn man ab einer bestimmten Größe durch sie durch schwimmt 
                    else if (this.groesse > 60 && distance < radiusOfDistance && aufgabe13.AllesArray[i].ofType == "blubberblasen") {
                        this.groesse -= 10;
                        this.abstandSchweif -= 10;
                        this.abstandSchweif2 -= 10;
                        this.schweifAnfang -= 10;
                    }
                    //Futter ist ebenfalls ab einer bestimmten Größe gefährlich 
                    else if (this.groesse > 50 && distance < radiusOfDistance && aufgabe13.AllesArray[i].ofType == "foodImCanvas") {
                        this.groesse -= 3;
                        this.abstandSchweif -= 3;
                        this.abstandSchweif2 -= 3;
                        this.schweifAnfang -= 3;
                        aufgabe13.highscore = aufgabe13.highscore - 1;
                        aufgabe13.highscoreFunk();
                        aufgabe13.AllesArray.splice(i, 1);
                        let futter = new aufgabe13.FutterImCanvas(Math.random(), Math.random());
                        aufgabe13.AllesArray.push(futter);
                    }
                    //Seepferdchen sind immer tödlich 
                    else if (this.groesse > 10 && distance < radiusOfDistance && aufgabe13.AllesArray[i].ofType == "pferdchen") {
                        aufgabe13.nameEingeben();
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
    aufgabe13.Spielfisch = Spielfisch;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=spielfisch.js.map