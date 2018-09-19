const Router = require('koa-router')
const Page = require('../models/Page')

const router = new Router()

// Create
router.post('/pages', async ctx => {
  const document = await new Page(ctx.request.body).save()
  ctx.body = {
    data: document
  }
})

// Get one
router.get('/pages/:id', async ctx => {
  const document = await Page.findById(ctx.params.id)
  if (document === null) {
    ctx.throw(404, 'NotFound')
  }
  ctx.body = {
    data: document
  }
})

// List
router.get('/pages', async ctx => {
  const collection = await Page.find()
  ctx.body = {
    data: collection,
    total: collection.length
  }
})

// Update
router.put('/pages/:id', async ctx => {
  const document = await Page.findOneAndUpdate(
    ctx.params.id,
    ctx.request.body,
    { new: true }
  )
  if (document === null) {
    ctx.throw(404, 'NotFound')
  }
  ctx.body = {
    data: document
  }
})

// Remove
router.delete('/pages/:id', async ctx => {
  const document = await Page.findOneAndDelete(ctx.params.id)
  if (document === null) {
    ctx.throw(404, 'NotFound')
  }
  ctx.body = {
    data: document
  }
})

module.exports = router
