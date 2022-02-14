const Account = require('./accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  
  const errorMessage = { status: 400 }
  const { name, budget} = req.body
  if (name === undefined || budget === undefined) {
      errorMessage.message = "name and budget are required"
  } else if (typeof name !== 'string') {
    errorMessage.message = "name of account must be a string"
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    errorMessage.message = "name of account must be between 3 and 100"
  } else if (typeof budget !== 'number' ) {
    errorMessage.message = "budget of account must be a number"
  } else if (number < 0 || number > 1,000,000) {
    errorMessage.message = "budget of account is too large or too small"
  }
  if (errorMessage.message) {
    next(errorMessage)
  } else {
    next()
  }
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
