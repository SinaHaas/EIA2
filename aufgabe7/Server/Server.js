"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); // Wir sagen, dass mit Node gearbeitet werden soll
const Url = require("url");
var aufgabe7;
(function (aufgabe7) {
    console.log("Starting server"); //In der Console wird starting Server ausgegeben 
    let port = Number(process.env.PORT); //Neue Variable vom Typ number wird erstellt. Wird zur Nummer umgewandelt und alles was in der Variable Port steht (Umgebungsvariable) wird in eine Number umgewandelt. 
    if (!port) // Wenn port unwahr ist 
        port = 8100; // dann port unser local host. Also 8100 -> Auschluss von anderen Möglichkeiten. 
    let server = Http.createServer(); // Variable server vom Typ Http.Server wird erstellt. Ein Server wird in der Variable erstellt. 
    server.addListener("request", handleRequest); // Eventlistener request auf Server, wenn Anfragen an den Server kommen, wird handleRequest ausgeführt.
    server.addListener("listening", handleListen); // ein Eventlistener auf den Server. handleListen wird ausgefürht. Listening hört zu. 
    server.listen(port); // Serverinstanz hört auf gegegenen Port.
    function handleListen() {
        console.log("Listening"); // Ein Console.log "Listening" wird ausgegeben. Zur Kontrolle ob alles funktioniert. 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>");
        // let jsonString: string = JSON.stringify(url.query);
        // _response.write(jsonString);
        _response.end();
    }
})(aufgabe7 || (aufgabe7 = {}));
// request Datenteil den man lesen kann
// response Datenteil in welchen man Daten schreiben kann 
// ein resonce stream ist die ANtwort des Servers auf unsere Anfrage 
//# sourceMappingURL=Server.js.map