# a faire pour tout serveur

```js
import express from 'express';
const app = express()
const port = 3001
// pour utiliser ejs
app.set("view engine", "ejs");
// pour faire fonctionner les fichiers statiques dans public
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```