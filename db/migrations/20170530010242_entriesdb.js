
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('entriesdb', function (table) {
      table.increments('id').primary()
      table.dateTime('date')
      table.string('company')
      table.string('position')
      table.string('link')
      table.text('details')
      table.timestamps()
      table.integer('usersid').unsigned().references('id').inTable('usersdb').onDelete('CASCADE')
      //whether an entry is interview or screening or just job applied
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('entriesdb')
  ])
}
