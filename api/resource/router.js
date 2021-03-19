// build your `/api/resources` router here
const router = require('express').Router();

const Resource = require('./model');

router.get('/', (req, res) => {
    Resource.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Resource.add(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Resource.update(req.params.id, req.body)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

router.deleted('/:id', (req, res) => {
    Resource.remove(req.params.id)
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(err => {
            res.status(500).json(err.message);
        });
});

module.exports = router;