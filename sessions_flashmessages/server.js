require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')


// em casas de erro, passar junto com a string o obj { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(process.env.CONNECTION_STRING).then(() => {
  console.log('start database')
  app.emit('pronto') // metodo para fazer primeiro a conexão - mandamos um emit(evento) para o app 
}).catch(e => console.log(e))

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
 
const sessionOptions = session({
    secret: 'texto q ninguem vai saber',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000 *60*60*24*7, //tempo q vai durar o cookie (7dias)
        httpOnly:true
    },
});
 
app.use(sessionOptions);
app.use(flash());

const routes = require('./routes')
const path = require('path')
const middleware = require('./src/middlewares')

// enable req.body
app.use(express.urlencoded({ extended: true }))

// dirname: pasta que estamos './'
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(middleware);



// config views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//config rotas
app.use(routes)

//captura o evento pronto e depois inicia o app
app.on('pronto', () =>{
  app.listen(3000, () => {
    console.log('Server starting on 3000 port...')
  })
})

// conectando primeiro com a base, garante que o server só vai subir apos a conexão