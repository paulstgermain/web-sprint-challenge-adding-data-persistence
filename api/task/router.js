// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.get('/', (req, res) => {
    Task.get()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

router.get('/:id', (req, res) => {
    Task.getById(req.params.id)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

router.post('/', (req, res) => {
    Task.add(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

router.put('/:id', (req, res) => {
    Task.update(req.params.id, req.body)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

router.delete('/:id', (req, res) => {
    Task.remove(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'Task successfully deleted.' })
        })
        .catch(err => {
            res.status(500).json(err.message);
        })
})

module.exports = router;