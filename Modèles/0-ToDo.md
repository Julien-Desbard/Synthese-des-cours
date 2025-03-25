# Commencer un projet

```js
npm init -y
```
## Si le projet a déjà un package.json

```js
npm install // (installe toutes les dépendances du projet)
npm install ejs express dotenv pg
```
### àjouter dans le json 

```js
"main": "index.js",// dans le prmeier paquet
"type": "module", // dans le fichier json :
"scripts": { //dans les scripts
"dev": "node --watch index.js" //==> app.js  représente le nom du fichier du server à lancer
}
```
Se lance avec la cmd : `npm run dev`

Fichier .gitignore et y mentionner :
```js
/node_modules
.env
```
#### Fichier ENV - info de la BDD
```js
PORT=3000
PGUSER=julien
PGPASSWORD=Faitchier
PGDATABASE=tiramisu_trombinoclock
```
##### Router

Créer dossier routers et dedans un fichier router.js contenant de base : 
```js
import express from "express";
export const router = express.Router(); // je crée à l'aide d'express un router
```
On y logera les routes dynamiques ou non de la page

Ajouter dans le fichier index.js l'usage de router : 
```js
app.use(router);
```

###### importer autre chose qu'un module
En général, il faut ajouter `.js` à la fin de l'import. Exemple avec le plugin de dayjs : 
```js
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
```


POur importer un tableau sous format json, ajouter la partie `type : json` à la fin : 
```js
import articles from "../../data/articles.json" with {type:'json'}
```

###### Structure des fichiers : 
- App
  - middleware
  - controllers
  - routers
    - router.js
  - views
    - partials
      - header
      - footer
    - index.ejs    
- data
- node_module
- public
  - gitignore
  - index.js
  - package-lock.json
  - package.json