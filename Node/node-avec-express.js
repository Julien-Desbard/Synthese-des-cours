import express from "express"

const app = express();
const port = 3001;

app.get("/", (req, res) => {

    //res.sendFile(import.meta.dirname +"/index.html"); # pour importer un fichier statique html
res.send(console.log("hello world"))
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});