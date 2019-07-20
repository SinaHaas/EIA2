namespace aufgabe13 {
    export class BlubZwei extends bewegteDinge{
        
        constructor(_x:number){
            super();
        }

        draw(): void {
            let blubaußen: Path2D = new Path2D();
            blubaußen.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc.fillStyle = "blue";
            crc.fill(blubaußen);

            let blub: Path2D = new Path2D();
            blub.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(blub);
        }    
    }
}