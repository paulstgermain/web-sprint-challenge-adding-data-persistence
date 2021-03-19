// build your `Task` model here
const db = require('../../data/dbConfig');

const get = () => {
    return db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.task_id', 'task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description');
};

const getById = (id) => {
    return db('tasks')
        .where('task_id', id);
};

const add = (newTask) => {
    return db('tasks')
        .insert(newTask)
        .then(id => {
            return getById(id);
        });
};

const update = (id, changes) => {
    return db('tasks')
        .where('task_id', id)
        .update(changes);
}

const remove = (id) => {
    return db('tasks')
        .where('task_id', id)
        .del();
}

module.exports = {
    get,
    getById,
    add,
    update,
    remove
};