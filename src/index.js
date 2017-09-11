const Koa = require('koa')

const app = new Koa()

app.use(ctx =>{
  ctx.body = { message: "Hello world!asdasd" }
})

module.exports = app
