const mongoose = require('mongoose')
require('mongoose-type-url')

const Schema = mongoose.Schema

const experienceSchema = new Schema({
    title: {
        type: String
    },
    desc : {
        type: String
    },
    role : {
        type: String
    },
    date : {
        start: { type: Date },
        end: { type: Date }
    },
    skills : [{
        type: String
    }],
    img : {
        data: Buffer,
        contentType: String
    },
    details : {
        images : {
            img1: { date: Buffer, contentType: String },
            img2: { date: Buffer, contentType: String },
            img3: { date: Buffer, contentType: String }
        },
        articles : {
            situation : { type: String },
            task : { type: String },
            action : { type: String },
            result : { type: String }
        },
        links : {
            github : mongoose.SchemaTypes.Url,
            relevant : [mongoose.SchemaTypes.Url]
        }
        
    }
})

module.exports = mongoose.model('Experience', experienceSchema)