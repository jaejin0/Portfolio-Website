const mongoose = require('mongoose')
// require('mongoose-type-url')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: {
        type: String
    },
    desc : {
        type: String
    },
    date : {
        start: { type: Date },
        end: { type: Date }
    },
    skills : [{
        type: String
    }],
    mainImage : {
        data: Buffer,
        contentType: String
    },
    details : {
        images : [{
            data: Buffer,
            contentType: String
        }],
        articles : {
            situation : { type: String },
            task : { type: String },
            action : { type: String },
            result : { type: String }
        },
        links : {
            github : { type: String },
            devpost : { type: String },
            relevantLinks : [{
                type: String
            }]
        }
        
    }
}, { collection: 'projects'})

module.exports = mongoose.model('Project', projectSchema)