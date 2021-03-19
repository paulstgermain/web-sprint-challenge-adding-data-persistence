// build your `Resource` model here
const db = require('../../data/dbConfig');

const get = () => {
    return db('resources');
};

const getById = (id) => {
    return db('resources')
        .where('resource_id', id)
        .select('resource_name')
        .first();
};

const add = (resource) => {
    return db('resources')
        .insert(resource)
        .then(id => {
            return getById(id);
        });
};

const update = (id, changes) => {
    return db('resources')
        .where('resource_id', id)
        .update(changes);
};

const remove = (id) => {
    return db('resources')
        .where('resource_id', id)
        .del();
};

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}