const Koa = require('koa')
const pagesRouter = require('./routers/pages')

const app = new Koa()

app
  .use(pagesRouter.routes())
  .use(pagesRouter.allowedMethods())

app.listen(80)
