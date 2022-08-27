const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')

// enable req.body
app.use(express.urlencoded({ extended: true }))

// dirname: pasta que estamos './'
app.use(express.static(path.resolve(__dirname, 'public')))

// config views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//config rotas
app.use(routes)

app.listen(3000, () => {
  console.log('Server starting on 3000 port...')
})