
exports.up = function(knex) {
  return knex.schema.createTable('blogposts', function(table) {
      table.increments('id');
      table.text('post')
      table.timestamp('date')
      table.integer('user_id').references('users.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('blogposts')
};
