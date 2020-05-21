
const média = require("./GABRIEL_DESAFIO_01");

console.log(média);

const http = require("http");

const host = "127.0.0.1";
const porta = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader("Content-Type", "text/plain");
        res.end(média.toString());
});

server.listen(porta, host, () => {
    console.log("Servidor ouvindo na porta " + porta);

});