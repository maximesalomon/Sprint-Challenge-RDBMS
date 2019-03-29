exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        table.increments();

        table.text('description');
        table.text('notes')
        table.boolean('completed')

        table
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };