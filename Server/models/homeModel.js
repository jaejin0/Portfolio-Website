const mongoose = require('mongoose')

const Schema = mongoose.Schema

const homeSchema = new Schema({
    curPosition : {
        type: String
    },
    intent : {
        type: String
    }
})

module.exports = mongoose.model('Home', homeSchema)