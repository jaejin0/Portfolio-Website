const mongoose = require('mongoose')

const Schema = mongoose.Schema

const aboutSchema = new Schema({
    image : {
        data: Buffer,
        contentType: String
    },
    gpa : {
        type: Number
    },
    courseworks : [{
        type: String
    }],
    languages : [{
        type: String
    }],
    frameworks : [{
        type: String
    }],
    tools : [{
        type: String
    }],
    certificates : [{
        type: String
    }]
}, { collection: 'about'})

module.exports = mongoose.model('About', aboutSchema)