exports.checkAccountPayload = (req, res, next) => {
  
  console.log('account payload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {

  console.log('account name unique middleware')
  next()
}

exports.checkAccountId = (req, res, next) => {
  
  console.log('account id middleware')
  next()
}
