
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.increments('id');
      table.string('fname');
      table.string('username');
      table.string('password');
      table.string('profile_pic')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
