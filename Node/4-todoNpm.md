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
    "start": "node app.js"
  },
