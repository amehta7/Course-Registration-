const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'userdb'

const getAllUsers = (cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Users')
        .find({})
        .toArray(function (err, result) {
          cb(err, result)
          db.close()
        })
    }
  )
}

const updateUser = (data, cb) => {
  const myquery = { _id: 'data._id' }
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo
        .collection('Users')
        .findOneAndUpdate(myquery, { $set: data }, function (err, result) {
          cb(err, result)
          db.close()
        })
    }
  )
}

const deleteUser = (id, cb) => {
  MongoClient.connect(
    mongoURI,
    { useUnifiedTopology: true },
    function (err, db) {
      if (err) throw err

      const dbo = db.db(dbName)

      dbo.collection('Users').deleteOne({ _id: id }, function (err, obj) {
        cb(err, obj)
        db.close()
      })
    }
  )
}

module.exports = { getAllUsers, updateUser, deleteUser }
