const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(path.join(__dirname, "index.html"), `utf-8`, (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/home") {
        res.writeHead(302, { "Location": "/" });
        res.end(``);
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(path.join(__dirname, "about.html"), `utf-8`, (err, data) => {
            res.end(data);
        });
    } else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile(path.join(__dirname, "contact.html"), `utf-8`, (err, data) => {
            res.end(data);
        });
    }
});

server.listen(3000);
