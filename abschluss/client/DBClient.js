var aufgabe13;
(function (aufgabe13) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://eia2-sina-haas.herokuapp.com/";
    //Den Query zusammenstellen und mit sendRequest(query) an den Server weitergeben
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
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    //parsen des JSON in ein Array und dann dieses Array sortieren und in HTML darstellen
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let AlleSpieler = JSON.parse(xhr.response);
            for (let i = 0; i < AlleSpieler.length; i++) {
                // let nameS: string = AlleSpieler[i].name;
                // let scoreS: number = AlleSpieler[i].punktzahl;
                AlleSpieler.sort(compareNumbers);
            }
            console.log(AlleSpieler);
            for (let i = 0; i < 6; i++) {
                let prodElement = document.createElement("div");
                prodElement.innerHTML = `<div> Spieler ${AlleSpieler[i].name} : ${AlleSpieler[i].punktzahl} Punkte</div>`;
                document.getElementById("scoresBeste").appendChild(prodElement);
            }
        }
    }
    //Highscore Vergleich und danach wird das Array sortiert
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