const mongoose = require('../components/mongoose')

const Page = mongoose.model('Page', {
  pathname: String
})

module.exports = Page
