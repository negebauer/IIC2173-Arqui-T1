const koa = require('koa')
const moment = require('moment')
const mongo = require('./db')
const Ip = require('./ip')
const render = require('./render')

const app = new koa()
app.context.db = mongo()
moment.locale('es')

app.use(async ctx =>{
  const ip = new Ip({
    ip: ctx.request.header['x-forwarded-for'] || 'no-ip',
    visitedDate: Date.now(),
  })
  await ip.save()
  const ips = await Ip
    .find({}, { ip: true, visitedDate: true, _id: false })
    .limit(10)
    .sort({visitedDate: -1})
    .lean()
  ctx.body = render(ips.map(ip => ({
    ...ip,
    visited: moment(ip.visitedDate).calendar(),
    visitedDate: undefined
  })))
})

module.exports = app
