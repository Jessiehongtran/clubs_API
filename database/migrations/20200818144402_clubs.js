
exports.up = function(knex) {
  return knex.schema.createTable('clubs', tbl => {
      tbl.increments()
      tbl.string('club_name')
      tbl.string('image_url')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('clubs')
};
