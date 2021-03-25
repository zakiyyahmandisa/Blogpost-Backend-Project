
exports.up = function(knex) {
  return knex.schema.createTable('blogpost_tags', function(table){
      table.increments('id');
      table.integer('blogpost_id').references('blogposts.id')
      table.integer('tag_id').references('tags.id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('blogpost_tags')
};
