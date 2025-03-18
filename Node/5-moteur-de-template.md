# moteur de template

## EJS

Ejs est un moteur de template simple qui utilise la syntaxe javascript, un moteur de template sert à générer du html avec un langage de programmation

## installation

- `npm install ejs`
- définir dans le serveur que j'utilise ejs comme moteur de template : `app.set("view engine", "ejs");`
- pour renvoyer le fichier ejs on utilise la fonction `res.render`

## utilisation

L'avantage d'utilser un moteur de template c'est que maintenant je peux mettre mon html dans un fichier ejs, et si j'ai une dynamisation à faire comme une boucle ou une variable à afficher, je peux le mélanger à mon html directement dans ce fichier

admettons nous voulons dynamiser l'affichage des liens de villes je vais voir besoin de faire 2 choses

- récupérer les villes dans app.js
- passer la donnée à notre fichier ejs
- dans le fichier ejs il faudra boucler sur mon tableau de données

Pour faire passer de la donnée à notre template il faut fournir un objet en 2eme argument de la fonction render comme ceci : 
`res.render("home", { message: "bonjour" });`

ejs va transformer cet objet, chacune de ses propriétés va devenir un nom de variable et les valeurs associés seront leur valeur

## quelques raccourcie avec l'extension vs code ejs

Installez l'extension ejs support sur vs code vous permet d'utiliser des raccourcie pour générer les blocs ejs

- `ejsout` -> permet de générer un bloc d'affichage
- `ejseach` -> permet de générer une boucle