const service = require('../model/MQservice')
const ms = require('../model/MongoService')

const subMsg = (req, res) => {
  service.subscribeQueue('pub_queue', (msg) => {
    let Pid = parseInt(msg.content.toString())
    ms.getById(Pid, (err, data) => {
      if (err) throw err
      res.json(data)
    })
  })
}

const subCourse = (req, res) => {
  service.subscribeQueue('prof_queue', (msg) => {
    let Scourse = msg.content.toString()
    ms.getByCourse(Scourse, (err, data) => {
      if (err) throw err
      res.json(data)
    })
  })
}

const subUser = (req, res) => {
  service.subscribeQueue('user_queue', (msg) => {
    let Uname = msg.content.toString()
    res.send(`${Uname} has been login`)
  })
}

module.exports = { subMsg, subCourse, subUser }
