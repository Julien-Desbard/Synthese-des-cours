# Dans l'ordre pour initialiser un projet npm

```js
npm init -y
gitignore avec /node_modules // sert à ne pas envoyer les fichiers/dossiers lister à github lors des add commit push
npm i ... (les modules necessaires aux projets) // j'installe toutes les dépendances necessaires au projet
```

# Si le projet a déjà un package.json

```js
npm install // (installe toutes les dépendances du projet)
```

# àjouter 

```js
"type": "module" // dans le fichier json :
```

# Ajouter un script pour lancer facilement le server  : 
```js
"scripts": {
"dev": "node --watch app.js" //==> app.js  représente le nom du fichier du server à lancer
}
```
Se lance avec la cmd : `npm run dev`

# ajouter un fichier gitignore
créer un fichier .gitignore et y mentionner 
```js
/node_modules
```

# importer autre chose qu'un module
En général, il faut ajouter `.js` à la fin de l'import. Exemple avec le plugin de dayjs : 
```js
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
```
