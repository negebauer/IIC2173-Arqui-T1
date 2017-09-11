const mongoose = require('mongoose')

module.exports = () => {
  const mongoDB = process.env.MONGO || 'mongodb://127.0.0.1:27017/ips'
  mongoose.Promise = global.Promise
  mongoose.connect(mongoDB)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  return db
}
