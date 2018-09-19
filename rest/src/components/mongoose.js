const mongoose = require('mongoose')

mongoose
  .connect('mongodb://mongo/test', { useNewUrlParser: true })
  .then(() => {
    console.log('Mongoose - OK')
  })
  .catch(err => {
    console.error('Mongeese error:', err)
  })

module.exports = mongoose
