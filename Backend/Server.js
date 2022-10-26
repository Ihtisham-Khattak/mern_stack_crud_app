const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const workOutRouting = require('./Routing/workOut')


const app = express();

//Middleware
app.use(cors())
app.use(express.json())

//Routing PORT
const PORT = process.env.PORT || 4003

//Routing 
app.use('/api/workout',workOutRouting)


//MOngooose Connection
mongoose.connect(process.env.MONGO_URI)
.then( () => {
    app.listen( PORT, () => {

        console.log(`Mongo is connected and Port is listening on http://localhost:${PORT}/`)
    })
})
.catch( (err) => {
    console.log(err)
})

