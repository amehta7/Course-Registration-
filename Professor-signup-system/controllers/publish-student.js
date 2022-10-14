const service = require('../model/MQservice')

const publishStudent = (req, res) => {
  let Pcourse = req.param('Pcourse')

  service.publishQueue('stu_queue', Pcourse)
  res.send('Message sent')
}

module.exports = { publishStudent }
