const service = require('../model/MQservice')

const publishMsg = (req, res) => {
  let Scourse = req.param('Scourse')

  service.publishQueue('prof_queue', Scourse)
  res.send('Message sent')
}

module.exports = { publishMsg }
