# Find dans un tableau

Exemple : 
```js
app.get("/game/:nomDuJeu", (req,res) => {
    let writtenName = req.params.nomDuJeu // Récupère le nom du jeu indiqué dans la barre de recherche
    let gameName = gamesData.find((element) => element.name === writtenName) // cherche le nom du jeu dans le tableau gamesData et le compare à writtenName
    let gameIndex = gamesData.findIndex((element) => element.name === writtenName)} // cherche le nom du jeu dans le tableau gamesData et renvoie son index
    
```
## forEach

```js
capitalCities.forEach(city => { %> //pour chaque élément du tableau capitalCities, dont les valeurs sont provisoirement logéés dans la variable city...
            <li><a href="/city/<%= city.name.toLowerCase() %>"><%= city.name %></a></li>})// crée un <li> et un <a>> avec le nom contenu dans chaque objet du tableau
```

Le tableau en question : 
```js
export const capitalCities = [
    {
        name: "Paris",
        tz: "Europe/Paris"
    },
    {
        name: "Londres",
        tz: "Europe/London"
    }
];
```
### fonction fléchée

```js
const randomValueFromArray = (array) => { // Récupère une valeur aléatoire pour le tableau dont le nom remplacera la variable array
    return array[Math.floor(Math.random() * array.length)]}
```

Exemple appliqué : 
```js
const hellos = [ // le tableau
    "Bonjour", // Français
    "Hello", // Anglais
    "Hola", // Espagnol
    "Hallo", // Allemand
    "Ciao", // Italien
    "Olá", // Portugais
];

${randomValueFromArray(hellos)}// la fonction appliqué au tableau