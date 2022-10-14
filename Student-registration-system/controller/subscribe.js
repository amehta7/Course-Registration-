const service = require('../model/MQservice')
const ms = require('../model/MongoService')

const subStudent = (req, res) => {
  service.subscribeQueue('pub_queue', (msg) => {
    let Pcourse = msg.content.toString()
    ms.getByCourse(Pcourse, (err, data) => {
      if (err) throw err
      res.json(data)
    })
  })
}

module.exports = { subStudent }
