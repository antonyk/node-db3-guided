const db = require('../data/db-config');

module.exports = {
  all,
  // find,
  findById,
  add,
  update,
  remove

}


function all() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id }).first();
}

function add(user) {
  return db("users")
    .insert(user, "id")
}

async function update(idd, changes) {
  const [id] = await db("users").where({ id: idd }).update(idd, changes);
  return findById(id);
}

// function update(id, changes) {
//   return db("users")
//     .where({ id })
//     .update(changes)
// }

function remove(id) {
  return db("users")
    .where({ id })
    .del()
}

