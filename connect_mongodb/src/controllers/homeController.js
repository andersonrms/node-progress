exports.home = (req, res, next) => {
  res.render('index');
  return;
}

exports.homePost = (req, res) => {
  // name in req.body is input name
  res.send(req.body);
  return; //mata a funcao
}