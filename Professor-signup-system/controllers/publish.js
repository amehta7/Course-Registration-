const service = require('../model/MQservice')

const publishMsg = (req, res) => {
  let Pid = req.param('Pid')

  service.publishQueue('pub_queue', Pid)
  res.send('Message sent')
}

module.exports = { publishMsg }
