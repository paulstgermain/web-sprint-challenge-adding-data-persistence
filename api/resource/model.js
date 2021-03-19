// build your `Resource` model here
const db = require('../../data/dbConfig');

const get = () => {
    return db('resources');
};

const getById = (id) => {
    return db('resources')
        .where('resource_id', id);
};

const add = (resource) => {
    return db('resources')
        .insert(resource)
        .then(id => {
            return getById(id);
        });
};

module.exports = {
    get,
    add
}