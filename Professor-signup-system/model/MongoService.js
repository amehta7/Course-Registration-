const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'professordb'

module.exports.getByCourse = (course, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Professors')
        .findOne({ Pcourse: course }, (err, result) => {
          if (err) throw err
          cb(null, result)
        })
    }
  )
}
