## Selections basiques

récupérer un élément dans la BDD :

```SQL
SELECT last_name FROM students;
```

récupérer toute une BDD :

```SQL
SELECT * FROM students;
```

Récupérer plusieurs éléments spécifiques:

```sql
SELECT last_name, first_name FROM students;
```

## SELECTION | WHERE

Pour faire une recherche sur une condition spécifique

```sql
SELECT * FROM promos where name = 'Tiramisu';
```
