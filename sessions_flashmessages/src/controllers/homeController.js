exports.home = (req, res, next) => {
  //req.session.user = { nome: 'Anderson', device: 'Linux POP-OS' }
  //req.flash('description', 'flash message test')
  console.log(req.flash('description'))
  res.render('index');
  return;
}

exports.homePost = (req, res) => {
  // name in req.body is input name
  res.send(req.body);
  return; //mata a funcao
}