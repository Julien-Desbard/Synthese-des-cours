# Tableaux (array)

## Définition

Un tableau permet de placer un ensemble de valeurs dans une variable (ou dans un paramètre de fonction).

Au lieu d'avoir une case, on a "plusieurs cases" dans la variable, une case par valeur.

```js
const name1 = "Lucie";
const name2 = "Frank";
const name3 = "Phil";
```

Et si on a beaucoup de prénoms ? (ou qu'on veut appliquer un traitement automatiquement sur tous ces prénoms 😉 ) => ranger ces valeurs dans une seule variable de type tableau.

## Sous le capot

Chaque élément du tableau est repéré par un numéro, on appelle ça un _index_. Les index commencent à zéro.

![](./schemas/tableau.png)

La valeur "Lucie" est à l'index 0 du tableau, la valeur "Franck" est à l'index 1, la valeur "Phil" est à l'index 2.

🗒️ Un tableau qui a `n` éléments a `n-1` comme index du dernier élément, puisqu'on commence à zéro => Si le tableau a 8 éléments alors l'index du dernier élément est 7.

## Créer un tableau

```js
// [ ensemble des valeurs séparées par des virgules ]
const names = ["Lucie", "Franck", "Phil"];
console.log(names);

// Les tableaux ne sont pas réservés aux chaînes de caractères
const scores = [51, 28, 64];

// On peut même mélanger des types, mais on verra demain qu'il y a mieux pour ce cas, parce que là c'est compliqué de repérer à quoi correspond chaque information
const userData = ["Pierre", 48, 75000, "Paris"];
```

## Lire un élément d'un tableau

Pour lire un élément du tableau on indique l'index de cet élément.

```js
const names = ["Lucie", "Franck", "Phil"];

// on peut utiliser directement la valeur
console.log(names[1]); // Franck

// on peut ranger la valeur dans une variable pour l'utiliser plus tard
const secondName = names[1];
console.log(secondName); // Franck
```

⚠️ les index commencent à zéro : le premier élément a l'index 0, le deuxième élément a l'index 1, etc.

Si on demande un index qui n'existe pas, on obtient la valeur undefined

```js
console.log("test : " + names[3]);
// => test : undefined
```

## Connaître le nombre d'éléments d'un tableau

On peut connaître le nombre d'éléments d'un tableau en appliquant `.length` dessus (attention à l'ordre des lettres dans ce mot 😆).

```js
const names = ["Lucie", "Franck", "Phil"];

console.log("Nombre d'éléments : " + names.length); // 3
```

Pas de parenthèses après le mot _length_ : on veut _récupérer une information qui appartient au tableau_, et pas _appliquer un traitement (une fonction) sur le tableau_.

## Ajouter un élément dans un tableau

Pour ajouter un élément en dernière position du tableau (juste après le dernier index) :
`nomTableau.push( valeur à ajouter )`

```js
const names = ["Lucie", "Franck", "Phil"];
console.log(names); // (3) ['Lucie', 'Franck', 'Phil']

// on appelle une fonction push sur le tableau
names.push("Toto");
console.log(names); // (4) ['Lucie', 'Franck', 'Phil', 'Toto']

names.push("Henri");
console.log(names); // (5) ['Lucie', 'Franck', 'Phil', 'Toto', 'Henri']
```

_push_ c'est une fonction qui s'applique uniquement sur les tableaux.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push


On peut construire un tableau qui est vide au départ, et on le remplit au fil du code :
```js
// on construit un tableau vide
const names = [];

names.push("Phil");
console.log(names); // (1) ['Phil']

names.push("Lucie");
console.log(names); // (2) ['Phil', 'Lucie']
```

Il y a d'autres façons d'ajouter un élément dans un tableau, notamment si on veut intercaler un nouvel élément en déplaçant les éléments suivants. A découvrir plus tard, avec la suppression d'élément(s) qui a aussi plusieurs possibilités 😜 .

Bonus : 
> unshift ajoute un élément au début du tableau.
> splice permet d'ajouter un élément à une position spécifique du tableau.


## Modifier la valeur d'un élément d'un tableau

```js
const names = ["Lucie", "Franck", "Phil"];
console.log(names); // (3) ['Lucie', 'Franck', 'Phil']

// on change la valeur qui est dans une case du tableau, pas le tableau complet
// => la valeur à l'index 1
names[1] = "Pierre";
console.log(names); // (3) ['Lucie', 'Pierre', 'Phil']
```

## let ou const sur un tableau ?

❔ JavaScript nous laisse modifier un tableau qu'on a défini avec _const_ et pas _let_ ?

_const_ empêche de **redéfinir** une variable (`laVariable = nouvelle valeur`), pas de la _modifier_.

Pour une chaîne de caractères ou un nombre, _modifier_ et _redéfinir_ ça revient au même. Mais pour un tableau c'est deux choses différentes.

```js
const names = ["Lucie", "Franck", "Phil"];

names[1] = "Pierre";
// OK, on n'a pas redéfini la variable, on a juste changé quelque chose dans la variable


names = ["Cédric", "Marie"];
// JavaScript nous dit "TypeError: Assignment to constant variable", c'est interdit. Le tableau contient encore Lucie/Franck/Phil


// => si on veut pouvoir REMPLACER un tableau par un autre tableau, il faut définir la variables du tableau avec LET
let friends = ["Lucie", "Franck", "Phil"];
console.log(friends); // (3) ['Lucie', 'Franck', 'Phil']

friends = ["Cédric", "Marie"];
console.log(friends); // (2) ['Cédric', 'Marie']
```

Analogie :
> un tableau avec const, c'est comme un mur et tu peux le repeindre ou rajouter des briques mais pas le detruire et le remplacer
