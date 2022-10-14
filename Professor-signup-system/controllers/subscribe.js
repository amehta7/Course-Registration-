const service = require('../model/MQservice')
const ms = require('../model/MongoService')

const subMsg = (req, res) => {
  service.subscribeQueue('prof_queue', (msg) => {
    let Scourse = msg.content.toString()
    ms.getByCourse(Scourse, (err, data) => {
      if (err) throw err
      res.json(data)
    })
  })
}

module.exports = { subMsg }
