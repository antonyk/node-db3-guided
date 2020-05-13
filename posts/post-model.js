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
  return db("posts as p")
    .join("users as u", "p.user_id", "=", "u.id")
    .select("p.contents as quote", "u.username as saidBy");
}

function findById(id) {
  return db("posts")
    .where({ id }).first();
}

function add(user) {
  return db("posts")
    .insert(user, "id")
}

async function update(idd, changes) {
  const [id] = await db("posts").where({ id: idd }).update(idd, changes);
  return findById(id);
}

// function update(id, changes) {
//   return db("users")
//     .where({ id })
//     .update(changes)
// }

function remove(id) {
  return db("posts")
    .where({ id })
    .del()
}

