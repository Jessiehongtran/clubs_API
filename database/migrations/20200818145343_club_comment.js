
exports.up = function(knex) {
  return knex.schema.createTable('club_comment', tbl => {
      tbl.increments()
      tbl.integer('club_id')
      tbl.integer('comment_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('club_comment');
};
