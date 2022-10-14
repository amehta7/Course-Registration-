const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'studentdb'

const getAllStudents = (cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Students')
        .find({})
        .toArray(function (err, result) {
          cb(err, result)
          db.close()
        })
    }
  )
}

const getById = (id, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo.collection('Students').findOne({ Sno: id }, (err, result) => {
        cb(err, result)
        db.close()
      })
    }
  )
}

const updateStudent = (data, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Students')
        .updateOne({ Sno: data.Sno }, { $set: data }, function (err, result) {
          cb(err, result)
          db.close()
        })
    }
  )
}

const deleteStudent = (id, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo.collection('Students').deleteOne({ Sno: id }, function (err, obj) {
        cb(err, obj)
        db.close()
      })
    }
  )
}

module.exports = { getAllStudents, getById, updateStudent, deleteStudent }
