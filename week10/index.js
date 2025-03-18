import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Home Page!");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Me: Student Andrea Enriquez Martinez");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found - The page you are looking for does not exist.");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});