require('dotenv').config()
const express = require('express')
const app = express()

// Set view engine to JSX
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Home route
app.get('/', (req, res) => {
    res.render('home')  
})

app.use('/places', require('./controllers/places'));

// Wildcard route for 404
app.get('*', (req, res) => {
    res.render('error404')  
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
