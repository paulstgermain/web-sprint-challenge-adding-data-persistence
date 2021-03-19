// build your `/api/resources` router here
const router = require('express').Router();

const Resource = require('./model');

router.get('/', (req, res, next) => {
    Resource.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    Resource.getById(req.params.id)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.add(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(next);
});

router.put('/:id', (req, res, next) => {
    Resource.update(req.params.id, req.body)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Resource.remove(req.params.id)
        .then(deleted => {
            res.status(200).json(deleted);
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