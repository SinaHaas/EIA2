var aufgabe13;
(function (aufgabe13) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-sina-haas.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + aufgabe13.spielerName + "&punkte=" + aufgabe13.highscore;
        sendRequest(query, handleInsertResponse);
        console.log(query);
    }
    aufgabe13.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    aufgabe13.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    let score = 0;
    let scoresImArray;
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let AlleSpieler = JSON.parse(xhr.response);
            let SortierteScores = [];
            for (let i = 0; i < AlleSpieler.length; i++) {
                let nameS = AlleSpieler[i].name;
                let scoreS = AlleSpieler[i].punktzahl;
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
            for (let i = 0; i < 6; i++) {
                // document.getElementById("scoresBeste").innerHTML = "";
                let prodElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${AlleSpieler[i].name} : ${AlleSpieler[i].punktzahl} Punkte</div>`;
                document.getElementById("scoresBeste").appendChild(prodElement);
            }
        }
    }
    function compareNumbers(a, b) {
        let scoreA = a.punktzahl;
        let scoreB = b.punktzahl;
        if (scoreA < scoreB) {
            return 1;
        }
        if (scoreA > scoreB) {
            return -1;
        }
        return 0;
    }
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=DBClient.js.map