const mongoose = require('mongoose')

const workOut = mongoose.Schema({

    title: {
        type: String,
        require: true,
        minLength: 5
    },
    repeat: {
        type: Number,
        require: true
    },
    load: {
        type: Number,
        require: true
    }
}, {timestamp: true})



module.exports = mongoose.model('workOutModel', workOut) 