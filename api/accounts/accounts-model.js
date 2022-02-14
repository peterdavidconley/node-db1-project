const db = require('../../data/db-config');

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('accounts').where({ id: id })
}

const create = ({ name, budget}) => {
  let result = await db('accounts').insert({ name, budget });
  let id = result[0];
  return {
    name,
    budget,
    id: id,
  };
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
