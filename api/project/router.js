// build your `/api/projects` router here
const router = require('express').Router();

const Project = require('./model');

router.get('/', (req, res) => {
    Project.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    Project.add(req.body)
        .then(newProject => {
            res.status(200).json(newProject);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;