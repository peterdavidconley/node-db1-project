const router = require('express').Router()
const Account = require('./accounts-model');
const md = require('./accounts-middleware');

// `[GET] /api/accounts` returns an array of accounts (or an empty array if there aren't any).

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Account.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

// `[GET] /api/accounts/:id` returns an account by the given id.

router.get('/:id', md.checkAccountId, async (req, res, next) => {

  try {
    const account = await Account.getById(req.params.id)
    res.json(account)
  } catch (err) {
    next(err)
  }

})

//`[POST] /api/accounts` returns the created account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, async (req, res, next) => {

  try {
    const data = await Account.create(req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }

})

// - `[PUT] /api/accounts/:id` returns the updated account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.

router.put('/:id', md.checkAccountId, md.checkAccountNameUnique, md.checkAccountPayload, async (req, res, next) => {
  
  try {
    const data = await Account.updateById(req.params.id, req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }

});

// - `[DELETE] /api/accounts/:id` returns the deleted account.

router.delete('/:id', md.checkAccountId, async (req, res, next) => {

  try {
    const data = await Account.deleteById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }

})

router.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router;
