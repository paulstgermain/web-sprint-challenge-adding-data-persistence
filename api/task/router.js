// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.get('/', (req, res) => {
    Task.get()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Task.add(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;