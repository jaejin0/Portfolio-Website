const Experience = require('../models/experienceModel')
const mongoose = require('mongoose')

// get all experiences
const getExperiences = async (req, res) => {
    const experiences = await Experience.find({}, {
        details: 0
    }).sort({ start: -1 })

    res.status(200).json(experiences)
}

// get a single experience
const getExperience = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such experience"})
    }

    const experience= await Experience.findById(id)

    if (!experience) {
        return res.status(404).json({error: "No such experience"})
    } 
    res.status(200).json(experience)
}

module.exports = {
    getExperiences,
    getExperience
}