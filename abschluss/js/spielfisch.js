var aufgabe13;
(function (aufgabe13) {
    class Spielfisch extends aufgabe13.AlleObjekte {
        constructor(_x, _y) {
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
        draw() {
            let fischi = new Path2D();
            fischi.arc(this.x, this.y, this.groesse, 0, 2 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fillStyle = "purple";
            aufgabe13.crc.stroke(fischi);
            aufgabe13.crc.fill(fischi);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x, this.y, this.auge, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(fischiAUge);
            aufgabe13.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x, this.y, this.augeinn, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
            let schweif = new Path2D();
            schweif.moveTo(this.x + this.groesse, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y - 50);
            schweif.lineTo(this.x + this.abstandSchweif2, this.y);
            schweif.lineTo(this.x + this.abstandSchweif, this.y + 50);
            aufgabe13.crc.fillStyle = "gold";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1;
            aufgabe13.crc.fill(schweif);
            schweif.closePath();
            aufgabe13.crc.stroke(schweif);
        }
        fressFische() {
            for (let i = 0; i < aufgabe13.AllesArray.length; i++) {
                // console.log("hi");
                //let distance:number = Math.sqrt(this.x*this.x) * Math.sqrt(AllesArray[i].x*AllesArray[i].x);
                let xDistance = aufgabe13.AllesArray[i].x - this.x;
                let yDistance = aufgabe13.AllesArray[i].y - this.y;
                let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
                // if(distance < 0){
                //     delete AllesArray[i];
                // }
                // console.log(AllesArray[i].x)
                //console.log(AllesArray[i])
                // console.log(distance);
                if (distance < 30 && aufgabe13.AllesArray[i] != aufgabe13.spielfisch && aufgabe13.AllesArray[i].ofType == "kleinerFisch") {
                    // console.log(AllesArray[i]);
                    aufgabe13.AllesArray.splice(i, 1);
                    this.groesse += 3;
                    this.abstandSchweif += 3;
                    this.abstandSchweif2 += 3;
                    aufgabe13.highscore = aufgabe13.highscore + 1;
                    aufgabe13.highscoreFunk();
                }
                if (distance < 30 && aufgabe13.AllesArray[i] != aufgabe13.spielfisch && this.groesse > 60 && aufgabe13.AllesArray[i].ofType == "GroßerFisch") {
                    aufgabe13.AllesArray.splice(i, 1);
                    aufgabe13.highscore = aufgabe13.highscore + 5;
                    aufgabe13.highscoreFunk();
                }
                if (distance < 30 && aufgabe13.AllesArray[i] != aufgabe13.spielfisch && this.groesse < 60 && aufgabe13.AllesArray[i].ofType == "GroßerFisch") {
                    alert("Du hast verloren :(");
                }
            }
        }
    }
    aufgabe13.Spielfisch = Spielfisch;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=spielfisch.js.map