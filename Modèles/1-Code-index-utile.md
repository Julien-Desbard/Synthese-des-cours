# Option si on veut utiliser un formulaire en mode POST

Ajouter dans l'index : 
```js
app.use(express.urlencoded({extended: true})) //si je veux utiliser les formulaires en post
```

Si on veut ajouter les infos du formulaire dans un tableau, il faut ajouter appendfile

```js
import { appendFile } from 'node:fs';
router.post("/suggestion", (req, res) => {
    // la route de traitement de mon formulaire -> route en post donc bien que le meme nom que la route du dessus le verbe http va faire l'arbitrage entre les deux
    //  dans un futur proche, on mettrait les infos de req.body en base de données
    const pseudo = req.body.pseudo;
    const movie = req.body.movie;
    // fileSystem est un module de node qui permet de traiter des fichiers du systeme
    // il a une fonction appendFile qui permet d'ajouter des elements dans un fichier
    // la fonction prend en 1 argument le chemin
    // en deuxieme argument les donnees
    // en troisieme argument une callback d'erreur
    appendFile(
        path.join(import.meta.dirname, "data", "suggest.txt"), 
        `${pseudo} nous suggère de rajouter le film :${movie} à notre bdd ${os.EOL}`, 
        (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    }); 
}) 
```
