namespace aufgabe11 {

    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let fishArray: Fish[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        boden();
        for (let i: number = 0; i < 30; i++) {
            let x: number = Math.random() * (800 - 200) + 200;
            let y: number = Math.random() * (270 - 120) + 120;
            kies(x, y);
        }
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * (900 - 1) + 1;
            let y: number = Math.random() * (560 - 450) + 450;
            pflanze(x, y);
        }
        pflanze2();
        qualle();
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //Animiert
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * (600 - 200) + 200;
            let y: number = Math.random() * (300 - 1) + 1;
            //let x: number = Math.random() * canvas.width;
            //let y: number = Math.random() * canvas.height;
            let dx: number = Math.random() * 10;
            let dy: number = 0;
            let fish1: Fish;
            fish1 = new Fish();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            fishArray.push(fish1);
            fish1.draw();
            console.log(fish1);
        }

        for (let i: number = 0; i < 2; i++) {
            let x: number = Math.random() * (600 - 100) + 200;
            let y: number = Math.random() * (350 - 100) + 100;
            let dx: number = Math.random() * -10;
            let dy: number = 0;
            let fish2: BigFish;
            fish2 = new BigFish();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2.dy = dy;
            fishArray.push(fish2);
            fish2.draw();
            console.log(fish2);
        }

        for (let i: number = 0; i < 2; i++) {
            let x: number = Math.random() * (700 - 200) + 200;
            let y: number = Math.random() * (350 - 200) + 200;
            let dx: number = Math.random() * 10 - 5;
            let dy: number = Math.random() * 10 - 5;
            let seepferd: Seepferdchen;
            seepferd = new Seepferdchen();
            seepferd.x = x;
            seepferd.y = y;
            seepferd.dx = dx;
            seepferd.dy = dy;
            fishArray.push(seepferd);
            seepferd.draw();
            console.log(seepferd);
        }

        for (let i: number = 0; i < 30; i++) {
            let x: number = Math.random() * (200 - 20) + 20;
            let y: number = Math.random() * canvas.height;
            let dx: number = 0;
            let dy: number = Math.random() * -10;
            let blub: Blub;
            blub = new Blub();
            blub.x = x;
            blub.y = y;
            blub.dx = dx;
            blub.dy = dy;
            fishArray.push(blub);
            blub.draw();
            console.log(blub);
        }

        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
    }

    function boden(): void {

        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 900, 600);
        crc.fillStyle = "seagreen";
        crc.fill(wasser);

        let boden: Path2D = new Path2D();
        boden.rect(0, 400, 900, 200);
        crc.fillStyle = "saddlebrown";
        crc.fill(boden);
    }

    function kies(_x: number, _y: number): void {
        let steine: Path2D = new Path2D();
        crc.strokeStyle = "black";
        steine.arc(_x + 50, _y + 300, 7, Math.PI, 2 * Math.PI);
        crc.fillStyle = "chocolate";
        crc.fill(steine);
        crc.stroke(steine);
    }

    function pflanze(_x: number, _y: number): void {
        let pflanz: Path2D = new Path2D();
        crc.strokeStyle = "black";
        crc.fillStyle = "lime";

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

    function pflanze2(): void {

        let pflanz2: Path2D = new Path2D();
        crc.strokeStyle = "black";
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
    }

    function qualle(): void {
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











































































}