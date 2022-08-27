exports.home = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button type="submit">Enviars</button>
    </form>
  `);
}

exports.homePost = (req, res) => {
  // name in req.body is input name
  res.send(`Mensagem recebida: ${req.body.nome}`);
}