# Explication



## Usage

Les middleware peuvent être rangés dans un dossier Middleware et appelés comme des fonctions rangées dans des modules: 
```js
import {localGamesMiddleware } from "./middlewares/localsGamesMiddleware.js";
app.use(localGamesMiddleware);
```

### next()

Si on veut enchainer les middleware, il faut indiuer que le middleware en cours doit passer à la suivante : 
```js
app.use((req, res, next) => {
    request ++;
    console.log(`Il y a eu ${request} requêtes sur votre site`);
    next();
})
```
en l'absence de `next()`, vu que le middlewre n'envoie pas de réponse, le navigateur serait en boucle infinie

#### locals

```js
// les middlewares peuvent servir à manipuler la requete ou la réponse avant d'aller sur une route
app.use((req,res, next) => {
    res.locals.games = games; // ajoute à la réponse en cours la variable games. A chaque fois que ce middleware sera appelé, 
    // il enverra une nouvelle valeur de games dans la réponse
 /* ça évite d'ajouter la variable games dans notre*/ res.render({games})/*et même de faire un*/ res.render(): 
    next();
})
```
la variable ainsi envoyée n'est plus disponible simplement en l'appelant : 
```js
 games // à changer par : 
 
 ```