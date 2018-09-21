const mongoose = require('../components/mongoose')

const Page = mongoose.model('Page', {
  pathname: {
    type: String,
    required: true,
    lowercase: true,
    match: /^[a-z0-9/-]+$/,
    index: true,
    unique: true
  },
  status: {
    type: String,
    required: true,
    uppercase: true,
    default: 'ACTIVE',
    enum: ['ACTIVE', 'DISABLED']
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 70
  },
  meta: {
    title: {
      type: String,
      trim: true,
      maxlength: 70
    },
    description: {
      type: String,
      trim: true,
      maxlength: 160
    }
  },
  body: {
    type: String,
    default: ''
  }
})

module.exports = Page
