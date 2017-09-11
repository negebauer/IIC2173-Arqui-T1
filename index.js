const app = require('./src/app')

port = process.env.PORT || 8080
app.listen(port, (err) => {
  if (err) {
    return console.error('Failed listen', err);
  }
  console.log(`Listening on port: ${port}`);
})
