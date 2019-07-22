namespace aufgabe13 {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("keydown", bewegungSpielfisch);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let AllesArray: AlleObjekte[] = [];
    let fps: number = 30;
    let imageData: ImageData;
    export let spielfisch: Spielfisch;
    export let highscore: number = 0;
    console.log(highscore);


    // console.log(AllesArray);

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        hintergrund();


        for (let i: number = 0; i < 50; i++) {
            let x: number = Math.random() * (800 - 200) + 200;
            let y: number = Math.random() * (270 - 120) + 120;
            kies(x, y);
        }
        for (let i: number = 0; i < 20; i++) {
            let x: number = Math.random() * (850 - 200) + 200;
            let y: number = Math.random() * (600 - 400) + 400;
            pflanze3(x, y);
        }
        for (let i: number = 0; i < 5; i++) {
            let x: number = Math.random() * (300 - 1) + 1;
            let y: number = Math.random() * (500 - 400) + 400;
            pflanze(x, y);
        }
        for (let i: number = 0; i < 2; i++) {
            let x: number = Math.random() * (850 - 200) + 200;
            let y: number = 550
            pflanze2(x, y);
        }


        canvas.addEventListener("click", hermitdemfutter);
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //Animiert
        for (let i: number = 0; i < 50; i++) {
            let blub: Blub = new Blub(Math.random(), Math.random());
            AllesArray.push(blub);
        }
        for (let i: number = 0; i < 2; i++) {
            let fischi: BigFish = new BigFish(Math.random(), Math.random());
            AllesArray.push(fischi);
        }
        for (let i: number = 0; i < 16; i++) {
            let fischi: Fish = new Fish(Math.random(), Math.random());
            AllesArray.push(fischi);
        }
        for (let i: number = 0; i < 4; i++) {
            let fischi: Seepferdchen = new Seepferdchen(Math.random(), Math.random());
            AllesArray.push(fischi);
        }
        spielfisch = new Spielfisch(canvas.width / 2, canvas.height / 2);
        AllesArray.push(spielfisch);

        update();
        refresh();

        // fressFische();
    }

    function bewegungSpielfisch(_event: KeyboardEvent) {
        if (_event.keyCode == 39) { //rechts
            spielfisch.x += 8;
            if (spielfisch.x > 900) {
                spielfisch.x = 0
            }
        }
        if (_event.keyCode == 37) { //37
            spielfisch.x -= 8;
            if (spielfisch.x < 0) {
                spielfisch.x = 900;
            }
        }
        if (_event.keyCode == 40) { //unten
            spielfisch.y += 8;
            if (spielfisch.y > 600) {
                spielfisch.y = 0;
            }
        }
        if (_event.keyCode == 38) { //oben
            spielfisch.y -= 8;
            if (spielfisch.y < 0) {
                spielfisch.y = 600;
            }
        }
    }

    let timeout: number;

    function setTimeOut() {
        timeout = window.setTimeout(update, 1000 / fps);
    }

    function update(): void {
        setTimeOut();
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < AllesArray.length; i++) {
            AllesArray[i].update();
        }
    }

    function kies(_x: number, _y: number): void {
        let steine: Path2D = new Path2D();
        crc.lineWidth = 2;
        crc.strokeStyle = "brown";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        crc.fillStyle = "chocolate";
        crc.fill(steine);
        crc.stroke(steine);
    }

    function pflanze(_x: number, _y: number): void {
        let pflanz: Path2D = new Path2D();
        crc.strokeStyle = "green";
        crc.fillStyle = "springgreen";

        pflanz.moveTo(_x, _y);
        pflanz.lineTo(_x - 25, _y - 50);
        pflanz.lineTo(_x - 5, _y - 80);
        pflanz.lineTo(_x, _y - 100);
        pflanz.lineTo(_x + 5, _y - 60);
        pflanz.lineTo(_x - 5, _y - 40);
        pflanz.closePath();
        crc.lineWidth = 3;
        crc.stroke(pflanz);
        crc.fill(pflanz);
    }

    function pflanze2(_x: number, _y: number): void {
        let pflanz: Path2D = new Path2D();
        crc.lineWidth = 3;
        crc.strokeStyle = "green";
        crc.fillStyle = "yellowgreen";

        pflanz.arc(_x, _y, 50, 0, 2 * Math.PI);
        crc.stroke(pflanz);
        crc.fill(pflanz);

        let pflanz2: Path2D = new Path2D();
        pflanz2.arc(_x, _y - 80, 30, 0, 2 * Math.PI);
        crc.stroke(pflanz2);
        crc.fill(pflanz2);

        let pflanz3: Path2D = new Path2D();
        crc.strokeStyle = "green";
        crc.fillStyle = "yellowgreen";
        crc.lineWidth = 3;
        pflanz3.arc(_x, _y - 122, 10, 0, 2 * Math.PI);
        crc.stroke(pflanz3);
        crc.fill(pflanz3);

        let pflanz4: Path2D = new Path2D();
        crc.fillStyle = "crimson";
        crc.strokeStyle = "red";
        pflanz4.arc(_x, _y - 138, 3, 0, 2 * Math.PI);
        crc.stroke(pflanz4);
        crc.fill(pflanz4);
    }

    function pflanze3(_x: number, _y: number): void {
        let pflanz2: Path2D = new Path2D();
        crc.lineWidth = 3;
        crc.strokeStyle = "green";
        crc.fillStyle = "yellowgreen";

        pflanz2.moveTo(_x, _y);
        pflanz2.quadraticCurveTo(_x - 10, _y - 20, _x, _y - 40);
        pflanz2.moveTo(_x, _y - 40);
        pflanz2.quadraticCurveTo(_x + 10, _y - 60, _x, _y - 80);
        crc.lineWidth = 5;
        crc.stroke(pflanz2);

        let pflanz: Path2D = new Path2D();
        pflanz.moveTo(_x, _y);
        pflanz.quadraticCurveTo(_x - 20, _y - 20, _x, _y - 40);
        crc.lineWidth = 5;
        crc.stroke(pflanz);
    }


    function hintergrund(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 900, 600);
        crc.fillStyle = "seagreen";
        crc.fill(wasser);

        let boden: Path2D = new Path2D();
        boden.rect(0, 400, 900, 200);
        crc.fillStyle = "goldenrod";
        crc.fill(boden);

        let pflanz2: Path2D = new Path2D();
        crc.strokeStyle = "green";
        crc.fillStyle = "darkgreen";

        pflanz2.moveTo(800, 550);
        pflanz2.lineTo(775, 420);
        pflanz2.lineTo(795, 400);
        pflanz2.lineTo(795, 330);
        pflanz2.lineTo(805, 400);
        pflanz2.lineTo(795, 460);
        pflanz2.closePath();
        crc.lineWidth = 3;
        crc.stroke(pflanz2);
        crc.fill(pflanz2);

        let qual: Path2D = new Path2D();
        crc.fillStyle = "orange";

        qual.arc(700, 100, 50, Math.PI, 2 * Math.PI);
        crc.fill(qual);

        let arme: Path2D = new Path2D();
        crc.strokeStyle = "yellow";
        arme.moveTo(670, 100);
        arme.lineTo(675, 130);
        arme.lineTo(665, 160);
        arme.lineTo(670, 200);

        arme.moveTo(700, 100);
        arme.lineTo(695, 130);
        arme.lineTo(705, 160);
        arme.lineTo(700, 200);

        arme.moveTo(730, 100);
        arme.lineTo(725, 130);
        arme.lineTo(735, 160);
        arme.lineTo(730, 200);
        crc.lineWidth = 5;
        crc.stroke(arme);

        let steine: Path2D = new Path2D();
        crc.strokeStyle = "grey";
        crc.fillStyle = "grey";
        steine.moveTo(20, 600);
        steine.quadraticCurveTo(80, 400, 140, 600);
        steine.closePath();
        crc.fill(steine);
        crc.stroke(steine);

        for (let i: number = 0; i < 60; i = i + 50) {

            let x: number = 675 + i;
            let auge: Path2D = new Path2D();
            auge.arc(x, 75, 10, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(auge);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(x, 75, 5, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
        }
    }

    function hermitdemfutter(_event: MouseEvent): void {
        let xCanvas: number = _event.clientX;
        let yCanvas: number = _event.clientY;
        for (let i: number = 0; i < 10; i++) {
            let NomNom: Foodistsogut = new Foodistsogut(xCanvas, yCanvas);
            AllesArray.push(NomNom);
        }
    }

    export function highscoreFunk() {
        document.getElementById("highscore").innerHTML = "";
        let prodElement: HTMLDivElement = document.createElement("div");
        prodElement.innerHTML = `<div> ${highscore}</div>`;
        document.getElementById("highscore").appendChild(prodElement);
    }

    export let spielerName: string;

    export function nameEingeben(): void {
        window.clearTimeout(timeout);
        spielerName = prompt("Deine Punkte: " + highscore + " wie heißt du?");
        insert();
        window.location.reload();
    }










































































}