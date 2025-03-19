# Mettre en place le router et les routes

1- Créer un dossier routes

2- créer un fichier router.js

3- importer express
```js
import express from "express";
```

4- déclarer la const router 

```js
const router = express.Router();
```

5- ranger les routes dans ce fichier

```js
router.get("/", (req, res) => {
    res.render("index");
});
```

6- ensuite importer le router dans le server

```js
import { router } from "./routes/router.js";
```

7- le router étant un middleware, il faut déclarer dans le server qu'on va s'en servir

```js
app.use(router);
```

8- Importer le sobjets et autres imports nécessaire spour gérer les routes ainsi logées dans router.js

```js
import { games } from "../games.js";
```
