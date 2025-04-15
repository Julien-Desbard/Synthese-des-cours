# Programmation orientée objet 

## Problématique

En créant une multitude d'objet similaire comme des héros on a pu constater la problématique suivante : 

- répétition dans le code
- code + suceptible aux erreurs
- code difficile à maintenir (une modif sur un objet implique une modif sur tous les objets)
- code sans cadre, les objets sont libres et il est possible de créer des objets qui ne collent pas à l'attendu pour l'application

## La POO - la solution

La programmation orienté objet est une méthodologie utilisée dans beaucoup de langages qui repose sur les classes et les objets.
En javascript le concept est le même que sur les autres langages bien qu'en arrière plan pas vraiment, le javascript utilise des prototypes, les classes sont qu'un sucre syntaxique

Les avantages : 
- Réutilisation de code (possibilité de créer plusieurs objets en partant d'un même code)
- Sécurité (le code va être mieux encapsulé)
- Entretien / maintenance plus efficace

Les inconvenients : 
- Peu être plus gourmand en terme de ressource pour la machine
- complexité des fois inutiles pour des petits projets
- Peut vite devenir bordélique car en js la poo peut se mélanger avec une approche plus fonctionnelle

voir suite dans le fichier Heros-poo.js

### setter

Pour certaines propriétés d'objets, les developpeurs veulent cadrer la façon dont les propriétés sont modifiés
- exemple ajouter de la sécurité sur un password
- par exemple filtrer un champs (un email, vérifier qu'un email valide est bien fournis)
- vérifier si la personne a bien le droit en terme de role pour modifier ce qu'elle modifie

### getter 

Comme pour le setter certains accès à une propriété necessitent d'être cadré et on va utiliser un getter
- Pour faire un filtre de sécurité, vérifier qu'une valeur ne comporte aucun risque de sécurité avant de l'afficher
- ou sinon tout simplement parce que la propriété est privé et qu'on a un setter

### propriété privé

Une propriété privé rend la propriété innaccessible en lecture et en écriture en dehors de la classe
Souvent obligatoire quand on fait un setter, sinon le setter s'appelle de manière récursive
