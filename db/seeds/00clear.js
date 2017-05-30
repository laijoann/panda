
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('usersdb').del()
  ])
}
