const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pagesRouter = require('./routers/pages')

const app = new Koa()

app
  .use(bodyParser())
  .use(pagesRouter.routes())
  .use(pagesRouter.allowedMethods())

app.listen(80)
