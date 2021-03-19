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

router.get('/:id', (req, res) => {
    Project.getById(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

router.post('/', (req, res) => {
    Project.add(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.put('/:id', (req, res) => {
    Project.update(req.params.id, req.body)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

router.delete('/:id', (req, res) => {
    Project.delete(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'Project successfully deleted.' });
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

module.exports = router;