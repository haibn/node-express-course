require("dotenv").config();
const express = require('express')
const app = express()

const mainRouter = require('./routes/main-router')

//middleware
app.use(express.json())

//routes
app.use('/api/v1', mainRouter);

const port = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`App is listening in port ${port}.`)
        })
    } catch (error) {
        console.log(error)   
    }
}

start()