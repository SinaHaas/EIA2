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
            for (let i = 0; i < AlleSpieler.length; i++) {
                let nameS = AlleSpieler[i].name;
                let scoreS = AlleSpieler[i].punktzahl;
            }
            console.log(AlleSpieler);
        }
    }
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=DBClient.js.map