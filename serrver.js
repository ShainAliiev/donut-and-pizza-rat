module

//load express
const express = require('express')

//create an instance of expres
const app = express()
const PORT = 3000

//Middleware functions
app.use((req, res, next) => {
    console.log('Running the middleware function!')
    next() //Go to the next middleware or the response.
})

//JSON Middleware
app.use(express.json())

//if we don't need to read data from the url
app.use(express.urlencoded({extended: false}))

//Set up view engine
app.set('view engine', 'ejs')
app.set('views', './Views')

//Root route
app.get('/', (req, res) => {
    res.render('home')
})



app.listen(PORT, () => {
    console.log('Server is running...')
})