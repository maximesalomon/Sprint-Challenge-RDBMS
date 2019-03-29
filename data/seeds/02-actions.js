
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { name: 'action_1', description: "description_1 blah blah blah blah", notes: "note_1 this is a note.", completed: false, project_id: 1 },
        { name: 'action_2', description: "description_2 blah blah blah blah", notes: "note_2 this is a note.", completed: false, project_id: 1 },
        { name: 'action_3', description: "description_3 blah blah blah blah", notes: "note_3 this is a note.", completed: false, project_id: 2 },
      ]);
    });
};
