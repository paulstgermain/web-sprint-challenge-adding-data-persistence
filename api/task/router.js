// build your `/api/tasks` router here
const router = require('express').Router();

const Task = require('./model');

router.get('/', (req, res, next) => {
    Task.get()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    Task.getById(req.params.id)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Task.add(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next);
});

router.put('/:id', (req, res, next) => {
    Task.update(req.params.id, req.body)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Task.remove(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'Task successfully deleted.' })
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
      custom: 'Something went wrong.',
    })
  
    next();
  })

module.exports = router;