const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'professordb'

const getAllProfessors = (cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Professors')
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

      dbo.collection('Professors').findOne({ Pid: id }, (err, result) => {
        cb(err, result)
        db.close()
      })
    }
  )
}

const updateProfessor = (data, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Professors')
        .updateOne({ Pid: data.Pid }, { $set: data }, function (err, result) {
          cb(err, result)
          db.close()
        })
    }
  )
}

const deleteProfessor = (id, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo.collection('Professors').deleteOne({ Pid: id }, function (err, obj) {
        cb(err, obj)
        db.close()
      })
    }
  )
}

module.exports = { getAllProfessors, getById, updateProfessor, deleteProfessor }
