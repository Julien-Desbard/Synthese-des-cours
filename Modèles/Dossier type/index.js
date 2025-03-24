require('dotenv').config()
import path from "node:path";
import express from "express";
import { router } from "./app/routers/router.js";
const app = express();
//const port = 3001; remplacé par l'installation de dotenv
app.set("view engine", "ejs");
// maintenant qu'on a un dossier app, il faut préciser que notre dossier views est dedans et plus à la racine
// path.join + import.meta.dirname = methode la plus clean pour faire un chemin absolu dans notre projet
app.set("views", path.join(import.meta.dirname, "app", "views"));

app.use(express.static(path.join(import.meta.dirname, "public")));
// j'active le middleware pour pouvoir utiliser les formulaires en post
app.use(express.urlencoded({ extended: true }));

app.use(router);

/*app.listen(port, () => {
    console.log(`server running on ${port}`);
});*/

app.listen(process.env.PORT, () => {
    console.log(`projet démarré : http://localhost:${process.env.PORT}`);
  });