
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Shoes', resource_description: 'Beat up, but still good.'},
        {resource_name: 'Detergent', resource_description: 'Cleaning agent for clothes.'}
      ]);
    });
};
