# E01 gestion de projet 

## Analyse 

Quand un client toque à notre porte il a souvent une idée très vague, et la part très importante du métier de développeur c'est de transformer cette idée en projet concret et réalisable.

## Clarification 

### Les users stories

Les user stories servent  à définir dans une application qui fait quoi et d'avoir une liste exaustive des fonctionnalités qu'il y aura dans l'application par exemple :

`En tant que visiteur je peux consulter la liste des promos`

### use cases

Selon la méthodo de projet de la boite il est possible de faire des diragrammes plutôt que des users stories textuelles et c'est le diagramme UML de use cases qui faira office de users stories

### Wireframes

C'est représentation du placement des éléments d'une page, sans notion de couleurs, de photos ou de charte graphique. Cela permet de visualiser si de manière fonctionnelle le besoin et l'attendu est bien compris. On partira de cette base pour faire les maquettes
[exemple](https://www.sooyoos.com/app/uploads/2021/03/pasted-image-0-1280x882.png)

### Cahier des charges 

Plus tard ces documents serviront à l'établissement d'un cahier des charges, plus ce cahier des charges est précis et détaillé et moins de surprise il y aura pour tout le monde.


## Mise en place d'un projet neuf

- mettre en place le repo git
- `npm init -y`
- mettre le .gitignore
- mettre le script de dev danc package.json
- mettre type module dans le package.json
- mettre en place l'architecture du projet
- `npm install ejs express`
- mettre en place le code de base du server
- setter ejs comme moteur de template
- setter le dossier public comme dossier statique
- setter le dossier de views
- afficher la homepage à l'aide d'un router et d'un controller

## Methodo nouvelle page

Nous sommes actuellements dans une architecture MVC donc la méthodo pour créer une page sera tout le temps la même

- Pour une nouvelle route de type /promos

- Je vais créer un promosController si je n'en ai pas.

- Dans ce contrôleur, je vais créer la fonction pour la route en question.

- La fonction récupère les données et rend la vue avec ses variables.

- Je crée un dossier dans les vues pour le nouveau type de route si ce n'est pas déjà fait, par exemple ici un dossier promos.

- Je crée la nouvelle vue (fichier ejs).

- Je crée la nouvelle route dans mon router et j'appelle le bon contrôleur et la bonne méthode.