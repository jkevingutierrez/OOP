var HttpDispatcher = require('httpdispatcher');
var http = require('http');
var fs = require('fs');

var AbstractFabricaCalculadora = require('./Entities/FabricasCalculadoras/AbstractFabricaCalculadora');
var FabricaCalculadoraBasica = require('./Entities/FabricasCalculadoras/FabricaCalculadoraBasica');
var FabricaCalculadoraCientifica = require('./Entities/FabricasCalculadoras/FabricaCalculadoraCientifica');

const PORT = 8080;

var dispatcher = new HttpDispatcher();
dispatcher.setStatic('/static');
dispatcher.setStaticDirname('static');

var server = http.createServer(handleRequest);

dispatcher.onGet('/', function(request, response) {
    fs.readFile('./static/index.html', function(err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        response.write(data);
        response.end();
    });
});

dispatcher.onGet('/operators', function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var operators = ['Division', 'Multiplicacion', 'Potenciacion', 'Raiz', 'Resta', 'Suma'];
    var json = JSON.stringify({
        operators: operators
    });

    response.end(json);
});

dispatcher.onPost('/operate', function(request, response) {
    var body = JSON.parse(request.body);
    console.log(body);
    var fabrica = new FabricaCalculadoraCientifica();
    var calculadora = fabrica.crearCalculadora();
    var resultado = calculadora.calcular(body.left, body.right, body.operator);

    if (body) {
        var json = JSON.stringify({
            result: resultado
        });
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(json);
    } else {
        response.writeHead(400);
        response.end();
    }

});

dispatcher.onError(function(request, response) {
    fs.readFile('./static/404.html', function(err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        response.write(data);
        response.end();
    });
});

//Lets start our server
server.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(request, response) {
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch (error) {
        console.error(error);
    }
}
