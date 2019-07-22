namespace aufgabe13 {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://eia2-sina-haas.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + spielerName + "&punkte=" + highscore;
        sendRequest(query, handleInsertResponse);
        console.log(query);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    let score: number = 0;
    let scoresImArray: string;
    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let AlleSpieler: Spieler[] = JSON.parse(xhr.response);
            let SortierteScores: string[] = [];

            for (let i: number = 0; i < AlleSpieler.length; i++) {
                let nameS: string = AlleSpieler[i].name;
                let scoreS: number = AlleSpieler[i].punktzahl;

                // if (score < AlleSpieler[i].punktzahl) {
                //     score = AlleSpieler[i].punktzahl;
                //     scoresImArray = score.toString + AlleSpieler[i].name;
                // }
                AlleSpieler.sort(compareNumbers);
            }
            // for (let i: number = 0; i < AlleSpieler.length; i++) {
            //     if (score == AlleSpieler[i].punktzahl) {
            //         AlleSpieler.splice(i, 1);
            //         SortierteScores.push(scoresImArray);
            //     }
            // }
            console.log(AlleSpieler);
        }
    }

    function compareNumbers(a: Spieler, b: Spieler): number { //Highscore Vergleich und danach wird das Array sortiert 
        let scoreA: number = a.punktzahl;
        let scoreB: number = b.punktzahl;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
}