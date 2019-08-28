const express = require('express');
const handlebars = require('express-handlebars')

const app = express();
const port = 3000;


app.engine('handlebars', handlebars())
app.set("view engine", 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})