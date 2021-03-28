
exports.up = function(knex) {
    return knex.schema.alterTable("blogposts", function(table) {
        table.text('media')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable("blogposts", function(table) {
        table.dropColumn("media")
    })
};
