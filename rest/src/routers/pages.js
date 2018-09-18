const Router = require('koa-router')

const router = new Router()

router.get('/', ctx => {
  ctx.body = 'Hello World from the pages controller'
})

module.exports = router
