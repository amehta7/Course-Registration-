const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'coursedb'

const getAllCourses = (cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Courses')
        .find({})
        .toArray(function (err, result) {
          cb(err, result)
          db.close()
        })
    }
  )
}

module.exports = { getAllCourses }
