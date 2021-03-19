// build your `/api/projects` router here
const router = require('express').Router();

const Project = require('./model');

router.get('/', (req, res, next) => {
    Project.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Project.getById(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    Project.add(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Project.update(req.params.id, req.body)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Project.delete(req.params.id)
        .then(deleted => { 
            res.status(200).json({ message: 'Project successfully deleted.' });
        })
        .catch(next);
});

router.use((err, req, res, next) => {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
      custom: 'Something went wrong.',
    })
  
    next();
  })

module.exports = router;