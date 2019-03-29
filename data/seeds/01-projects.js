
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'project_1', description: "description_1 blah blah blah", completed: false },
        { name: 'project_2', description: "description_2 blah blah blah", completed: false },
        { name: 'project_3', description: "description_3 blah blah blah", completed: false },
      ]);
    });
};
