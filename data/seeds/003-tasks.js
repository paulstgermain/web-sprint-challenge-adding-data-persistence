
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'Strap some shoes on your feet.', task_notes: 'Shoes are in furnace room.', task_completed: false, project_id: 1},
        {task_description: 'Walk out the door and enjoy the fresh air!', task_notes: 'Seriously, get some sunshine you shut-in.', task_completed: false, project_id: 1},
        {task_description: 'Gather laundry in basket.', task_notes: 'Don\'t forget the stuff in the closet.', task_completed: false, project_id: 2},
        {task_description: 'Add detergent to machine.', task_notes: '', task_completed: false, project_id: 2},
        {task_description: 'Move laundry to dryer.', task_notes: '', task_completed: false, project_id: 2},
        {task_description: 'Remove and fold laundry.', task_notes: 'Actually fold it and put it away this time!', task_completed: false, project_id: 2},
      ]);
    });
};
