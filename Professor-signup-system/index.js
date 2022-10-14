const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'professordb'

MongoClient.connect(mongoURI, function (err, db) {
  if (err) throw err

  const dbo = db.db(dbName)

  const myObj = [
    {
      Pid: 1,
      Pname: 'David',
      Pphno: '8765436789',
      Paddress: { Apt: 234, city: 'Patna', state: 'Bihar', country: 'India' },
      Pqualification: 'Master of Arts',
      Pcourse: 'History',
    },
    {
      Pid: 2,
      Pname: 'Michael',
      Pphno: '9876531234',
      Paddress: {
        Apt: 10,
        city: 'Gurgaon',
        state: 'Haryana',
        country: 'India',
      },
      Pqualification: 'Master of Computer Science',
      Pcourse: 'Database Management System',
    },
    {
      Pid: 3,
      Pname: 'John',
      Pphno: '9965436789',
      Paddress: {
        Apt: 104,
        city: 'Dublin',
        state: 'California',
        country: 'USA',
      },
      Pqualification: 'Master of Computer Science',
      Pcourse: 'Java Programming',
    },
    {
      Pid: 4,
      Pname: 'Uzair',
      Pphno: '7654321234',
      Paddress: {
        Apt: 101,
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
      },
      Pqualification: 'Master of Commerce',
      Pcourse: 'Business Management',
    },
    {
      Pid: 5,
      Pname: 'Branko',
      Pphno: '7865432178',
      Paddress: {
        Apt: 809,
        city: 'Albany',
        state: 'New York',
        country: 'USA',
      },
      Pqualification: 'Master of Commerce',
      Pcourse: 'Marketing',
    },
    {
      Pid: 6,
      Pname: 'Dinesh',
      Pphno: '4565432178',
      Paddress: {
        Apt: 211,
        city: 'Albany',
        state: 'New York',
        country: 'USA',
      },
      Pqualification: 'B.Tech',
      Pcourse: 'Computer Science',
    },
    {
      Pid: 7,
      Pname: 'Henish',
      Pphno: '6765432178',
      Paddress: {
        Apt: 932,
        city: 'San Jose',
        state: 'California',
        country: 'USA',
      },
      Pqualification: 'Master of Arts',
      Pcourse: 'Social Science',
    },
    {
      Pid: 8,
      Pname: 'Anna',
      Pphno: '8769076543',
      Paddress: {
        Apt: 345,
        city: 'Gandhinagar',
        state: 'Gujarat',
        country: 'India',
      },
      Pqualification: 'Master of Commerce',
      Pcourse: 'Economics',
    },
    {
      Pid: 9,
      Pname: 'Bhoomi',
      Pphno: '6547890432',
      Paddress: {
        Apt: 489,
        city: 'New York',
        state: 'New York',
        country: 'USA',
      },
      Pqualification: 'Master of Commerce',
      Pcourse: 'Human Resource Management',
    },
    {
      Pid: 10,
      Pname: 'Harshil',
      Pphno: '7765432178',
      Paddress: {
        Apt: 690,
        city: 'Dublin',
        state: 'New York',
        country: 'USA',
      },
      Pqualification: 'Master of Commerce',
      Pcourse: 'Finance Management',
    },
  ]

  dbo.collection('Professors').insertMany(myObj, function (err, res) {
    if (err) throw err
    console.log('The number of documents inserted are: ', res.insertedCount)
    console.log(res)
  })
})
