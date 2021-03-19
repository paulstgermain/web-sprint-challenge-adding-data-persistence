
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Take a Walk', project_description: 'You sit at your computer too much.', project_completed: false},
        {project_name: 'Do Laundry', project_description: 'Time to chip away at that mountain.', project_completed: false}
      ]);
    });
};
