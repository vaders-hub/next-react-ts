import { createServer }  from "https";
import { parse } from "url";
import next from "next";
import fs from "fs";
import path from 'path'
const port = 3002;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname + "/../certs/key.pem")),
  cert: fs.readFileSync(path.join(__dirname + "/../certs/cert.pem")),
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, () => {
        
        console.log("ready - started server on url: https://localhost:" + port);
    });
});
