exports.home = (req, res) => {
  res.render('index');
}

exports.homePost = (req, res) => {
  // name in req.body is input name
  res.send(`Mensagem recebida: ${req.body.nome}`);
}