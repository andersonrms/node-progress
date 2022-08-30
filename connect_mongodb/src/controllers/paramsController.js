exports.param1 = (req, res) => {
  res.send(`${req.params.id}`)
}

exports.param2 = (req, res) => {
  res.send(req.params)
}
