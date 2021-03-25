
exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table){
      table.increments('id');
      table.text('content');
      table.integer('post_id').references('blogposts.id')
      table.integer('user_id').references('users.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};
