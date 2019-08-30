const express = require('express');
const handlebars = require('express-handlebars')
const path = require('path')

const app = express();
const port = 3000;


app.engine('handlebars', handlebars())
app.set("view engine", 'handlebars')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.send("Hello")
})
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})