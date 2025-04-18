# basics

remplace pgpool pour gérer l'accès à la base de donnée

## import via Sequelize

pour créer une tablea dnas la BDD depuis une classe, on définit la class dans modele : 

```js
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/sequelize.js";

export class Difficulty extends Model {}

Difficulty.init(
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        // sequelize par defaut cherche la table au pluriel si vous ne suivez pas la convention il faut préciser le nom de table
        tableName: "difficulty",
        // par defaut sequelize pense qu'il y a des champs created_at et updated_at dans toute les tables, ce code permet d'annuler ce comportement
        timestamps: false
    }
);


```

puis on crée un script d'import du modele en question, dans un fichier .js quelconque par exemple : 

```js

```