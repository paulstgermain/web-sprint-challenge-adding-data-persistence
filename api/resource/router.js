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
            res.status(200).json(newResource);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;