const Project = require('../models/projectModel')
const mongoose = require('mongoose')

// get all projects
const getProjects = async (req, res) => {
    const projects = await Project.find({}, {
        details: 0
    }).sort({ start: -1 })

    res.status(200).json(projects)
}

// get a single project
const getProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such project"})
    }

    const project = await Project.findById(id)

    if (!project) {
        return res.status(404).json({error: "No such project"})
    } 
    res.status(200).json(project)
}

module.exports = {
    getProjects,
    getProject
}