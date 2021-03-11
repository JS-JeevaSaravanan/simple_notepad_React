
const http = require('http');
const fs = require('fs');
const qs = require('querystring');


const server = http.createServer( 
    (req, res) => {
        if(req.url === "/"){
            let template = fs.readFileSync("notepad.html");
            res.write(template);
            res.end();

        }
        if(req.url === "/save"){
            let json_string = "";
            req.on("data", data => {
                json_string += data;
            });
            
            req.on('end', () => {
                let data = json_string;
                data = JSON.parse(data);
                let text = data.text;

                fs.createWriteStream("new1.txt");
                fs.writeFileSync("new1.txt", text);
            });

        }
    }
)

server.listen(8000, "127.0.0.1");

