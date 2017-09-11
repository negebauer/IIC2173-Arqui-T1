const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const model = 'ip'
const schema = new Schema(
  {
    ip: String,
    visited: String,
    visitedDate: Date,
  }
)

schema.methods = {

}

module.exports = mongoose.model(model, schema)
