const Experience = require('../models/experienceModel')
const mongoose = require('mongoose')

// get all experiences
const getExperiences = async (req, res) => {
    const experiences = await Experience.find({
        title: 1, desc: 1, role: 1, date: 1, skills: 1, img: 1
    }).sort({ startDate: -1 })

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