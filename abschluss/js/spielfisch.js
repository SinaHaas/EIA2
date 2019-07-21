var aufgabe13;
(function (aufgabe13) {
    class Spielfisch extends aufgabe13.AlleObjekte {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
        }
        draw() {
            let r = 30;
            let fischi = new Path2D();
            fischi.arc(this.x, this.y, r, 0, 2 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fillStyle = "purple";
            aufgabe13.crc.stroke(fischi);
            aufgabe13.crc.fill(fischi);
            let fischiAUge = new Path2D();
            fischiAUge.arc(this.x, this.y, 13, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(fischiAUge);
            aufgabe13.crc.fill(fischiAUge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
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
                if (distance < 30 && aufgabe13.AllesArray[i] != aufgabe13.spielfisch) {
                    // console.log(AllesArray[i]);
                    aufgabe13.AllesArray.splice(i, 1);
                }
            }
        }
    }
    aufgabe13.Spielfisch = Spielfisch;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=spielfisch.js.map