const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'userdb'

MongoClient.connect(mongoURI, function (err, db) {
  if (err) throw err

  const dbo = db.db(dbName)

  const myObj = [
    {
      Uname: 'David',
      Upassword: 'secretdavid',
      Rname: 'Admin',
    },
    {
      Uname: 'Joe',
      Upassword: 'joesecret',
      Rname: 'Professor',
    },
    {
      Uname: 'Nilam',
      Upassword: 'nisecretlam',
      Rname: 'Student',
    },
    {
      Uname: 'Branko',
      Upassword: 'brankosecret',
      Rname: 'Admin',
    },
    {
      Uname: 'Bharat',
      Upassword: 'secretbharat',
      Rname: 'Professor',
    },
    {
      Uname: 'Ankit',
      Upassword: 'ankitsecret',
      Rname: 'Student',
    },
    {
      Uname: 'Manish',
      Upassword: 'manishsecret',
      Rname: 'Student',
    },
    {
      Uname: 'Bhaskar',
      Upassword: 'bhsecret',
      Rname: 'Student',
    },
  ]

  dbo.collection('Users').insertMany(myObj, function (err, res) {
    if (err) throw err
    console.log('The number of documents inserted are: ', res.insertedCount)
    console.log(res)
  })
})
