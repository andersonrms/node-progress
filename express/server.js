const express = require('express');
const app = express();
const routes = require('./routes')
// enable req.body
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
  console.log('Server starting on 3000 port...')
})