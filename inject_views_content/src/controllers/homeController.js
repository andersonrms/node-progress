exports.home = (req, res, next) => {
  //req.session.user = { nome: 'Anderson', device: 'Linux POP-OS' }
  //req.flash('description', 'flash message test')
  res.render('index', {
    titulo: 'Esse é o nosso <strong>título</strong>',
    numeros: [0,1,2,3,4,5,6,7,8,9]
  });
  return;
}

exports.homePost = (req, res) => {
  // name in req.body is input name
  res.send(req.body);
  return; //mata a funcao
}