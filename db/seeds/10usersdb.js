
exports.seed = function(knex, Promise) {
  return knex('usersdb')
    .then(function () {
      return Promise.all([
        knex('usersdb').insert({name: 'Joann', email: 'joann@j.com', password: '123456'})
      ])
    })
}
