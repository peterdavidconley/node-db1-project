const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  
  console.log('account payload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {

  console.log('account name unique middleware')
  next()
}

exports.checkAccountId = async (req, res, next) => {
  
  try {
    const account = await Account.getById(req.params.id)
    if (!account) {
      res.status(404).json({
        message: 'Account not found'
      })
    } else {
      req.account = account
      next()
    }

  } catch (err) {
    next(err)
  }
  
}
