const mongoose = require('mongoose')

const Schema = mongoose.Schema

const aboutSchema = new Schema({
    img : {
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
    skills : [{
        type: String
    }],
    certificates : [{
        type: String
    }]
})

module.exports = mongoose.model('About', aboutSchema)