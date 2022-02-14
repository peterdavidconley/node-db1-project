const db = require('../../data/db-config');

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('accounts').where('id', id).first()
}

async function create ({ name, budget}) {
  let result = await db('accounts').insert({ name, budget });
  let id = result[0];
  return {
    name,
    budget,
    id: id,
  };
}

async function updateById (id, {name, budget}) {
  await db('accounts').where({ id: id }).update({ name, budget });
  return {
    name,
    budget,
    id,
  }

}

async function deleteById (id) {
  let result = await getById(id);
  await db('accounts').where({ id: id }).del();
  return result;
  
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
