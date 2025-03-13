# Dans l'ordre pour initialiser un projet npm

`npm init -y`
`gitignore avec /node_modules` sert à ne pas envoyer les fichiers/dossiers lister à github lors des add commit push
`npm i ... (les modules necessaires aux projets)` - j'installe toutes les dépendances necessaires au projet
# Si le projet a déjà un package.json

`npm install` (installe toutes les dépendances du projet)

# àjouter `"type": "module"` dans le fichier json :
  `"type": "module",`

# Ajouter un script pour lancer facilement le server  : 
  "scripts": {
    `"dev": "node --watch app.js"` ==> `app.js` représente le nom du fichier du server à lancer
    ...
  },
  Se lance avec la cmd : `npm run dev`

# ajouter un fichier gitignore
.gitignore et y mentionner `/node_modules`

# importer autre chose qu'un module
En général, il faut ajouter `.js` à la fin de l'import. Exemple avec le plugin de dayjs : 
`import advancedFormat from 'dayjs/plugin/advancedFormat.js'`

Note challenge
route dynamique à faire par rapport aux noms de capitales : probablement par une recherche de nom de capitale, via une recherche native dans JS
