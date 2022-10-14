const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'coursedb'

module.exports.getById = (Pid, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo.collection('Courses').findOne({ Pid: Pid }, (err, result) => {
        if (err) throw err
        cb(null, result)
      })
    }
  )
}

module.exports.getByCourse = (course, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo.collection('Courses').findOne({ Cname: course }, (err, result) => {
        if (err) throw err
        cb(null, result)
      })
    }
  )
}
