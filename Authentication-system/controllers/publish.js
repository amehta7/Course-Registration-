const service = require('../model/MQservice')

const publishMsg = (req, res) => {
  let Uname = req.param('Uname')

  service.publishQueue('user_queue', Uname)
  res.send('Message sent')
}

module.exports = { publishMsg }
