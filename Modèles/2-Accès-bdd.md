

Connexion SQL : `psql -U postgres`
mdp : `js4life`
Accès bdd : `\c tiramisu_trombinoclock;`


- 1 - Pour se connecter à postgresql via le terminal : `psql -U postgres` mot de passe : (js4life)
- Pour créer un nouvel utilisateur : `CREATE USER nom_utilisateur WITH LOGIN PASSWORD 'mot_de_passe';`;
- Pour voir la liste des users postgres `\du`
- Pour donner les droits admin à un user sur tous le serveur : `ALTER USER name WITH SUPERUSER;`;
- Pour créer une BDD et donner les droits à un user spécifique : `CREATE DATABASE nom_db OWNER nom_user;`
- Pour lister les bdd : `\l;`
- 2 - Pour se connecter à une bdd : `\c nom_db;`
- Pour importer un script : `\i /chemin/vers/fichier.sql;`
- liste des tables : `\d;`