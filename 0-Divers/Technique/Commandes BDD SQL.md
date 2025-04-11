#  Les commandes | Basics

- Pour se connecter à postgresql via le terminal : `psql -U postgres` mot de passe : (js4life)
- Pour créer un nouvel utilisateur : `CREATE USER nom_utilisateur WITH LOGIN PASSWORD 'mot_de_passe';`; ==> julien / Faitchier
- Pour voir la liste des users postgres `\du`
- Pour donner les droits admin à un user sur tous le serveur : `ALTER USER name WITH SUPERUSER;`;
- Pour créer une BDD et donner les droits à un user spécifique :  `CREATE DATABASE tiramisu_trombinoclock OWNER julien;`
- Pour lister les bdd : `\l`
- Poyur lister les tables `\d`
- Pour se connecter à une bdd : `\c nom_de_la_table;`
- Pour importer un script : `\i /chemin/vers/fichier.sql`
- 

