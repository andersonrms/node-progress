module.exports = (req, res, next) => {
    console.log('Middleware global');

    if(req.body.cliente) {
        req.body.cliente = req.body.cliente === 'Proibido' ? 'Nome probido' : req.body.cliente
        console.log(`nome: ${req.body.cliente}`)
    }

    next(); //required
}