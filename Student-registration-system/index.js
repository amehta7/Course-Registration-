const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'studentdb'

MongoClient.connect(mongoURI, function (err, db) {
  if (err) throw err

  const dbo = db.db(dbName)

  const myObj = [
    {
      Sno: 1,
      Sname: 'Manish',
      Sphno: '8765436789',
      Saddress: { Apt: 234, city: 'Patna', state: 'Bihar', country: 'India' },
      Squalification: 'Bachelor of Arts',
      Scourse: 'History',
      Sreportcard: { History: 'A', SocialScience: 'A+', Art: 'B' },
    },
    {
      Sno: 2,
      Sname: 'Bhaskar',
      Sphno: '9876531234',
      Saddress: {
        Apt: 10,
        city: 'Gurgaon',
        state: 'Haryana',
        country: 'India',
      },
      Squalification: 'B.Tech',
      Scourse: 'Computer Science',
      Sreportcard: { DBMS: 'A', MOS: 'A+', CS: 'B' },
    },
    {
      Sno: 3,
      Sname: 'Anna',
      Sphno: '9965436789',
      Saddress: {
        Apt: 101,
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
      },
      Squalification: 'Bachelor of Arts',
      Scourse: 'Economics',
      Sreportcard: { English: 'A+', History: 'B+', Art: 'C' },
    },
    {
      Sno: 4,
      Sname: 'Hardik',
      Sphno: '9054367893',
      Saddress: { Apt: 267, city: 'Patna', state: 'Bihar', country: 'India' },
      Squalification: 'Bachelor of Arts',
      Scourse: 'Social Science',
      Sreportcard: { History: 'B', SocialScience: 'C', Art: 'A' },
    },
    {
      Sno: 5,
      Sname: 'Riddhi',
      Sphno: '7869876906',
      Saddress: {
        Apt: 965,
        city: 'Rajkot',
        state: 'Gujarat',
        country: 'India',
      },
      Squalification: 'Master of Commerce',
      Scourse: 'Finance Management',
      Sreportcard: {
        Banking_and_Financial_Institutions: 'A+',
        Financial_Analysis: 'B+',
        Monetary_Policy: 'C',
      },
    },
    {
      Sno: 6,
      Sname: 'Nilam',
      Sphno: '2869876906',
      Saddress: {
        Apt: 5678,
        city: 'Rajkot',
        state: 'Gujarat',
        country: 'India',
      },
      Squalification: 'Master of Computer Science',
      Scourse: 'Database Management System',
      Sreportcard: {
        DBMS: 'A+',
        Architectures: 'B+',
        Entities_and_Relationships: 'C',
      },
    },
    {
      Sno: 7,
      Sname: 'Ankit',
      Sphno: '7689032456',
      Saddress: {
        Apt: 3289,
        city: 'Jamnagar',
        state: 'Gujarat',
        country: 'India',
      },
      Squalification: 'Master of Computer Science',
      Scourse: 'Java Programming',
      Sreportcard: {
        Object_Oriented_Model: 'A+',
        Architectures: 'B+',
        Java: 'C',
      },
    },
    {
      Sno: 8,
      Sname: 'Darsh',
      Sphno: '5689032456',
      Saddress: {
        Apt: 390,
        city: 'Surat',
        state: 'Gujarat',
        country: 'India',
      },
      Squalification: 'Master of Commerce',
      Scourse: 'Business Management',
      Sreportcard: {
        Management_Model: 'A+',
        Architectures: 'B+',
        Business_Strategies: 'C',
      },
    },
    {
      Sno: 9,
      Sname: 'Dhwani',
      Sphno: '2689032456',
      Saddress: {
        Apt: 189,
        city: 'Bhavnagar',
        state: 'Gujarat',
        country: 'India',
      },
      Squalification: 'Master of Commerce',
      Scourse: 'Marketing',
      Sreportcard: {
        Management_Model: 'A+',
        Architectures: 'B+',
        Marketing_Strategies: 'C',
      },
    },
    {
      Sno: 10,
      Sname: 'Kashish',
      Sphno: '1689032456',
      Saddress: {
        Apt: 478,
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
      },
      Squalification: 'Master of Commerce',
      Scourse: 'Human Resource Management',
      Sreportcard: {
        Management_Model: 'A+',
        Architectures: 'B+',
        HR_Strategies: 'C',
      },
    },
  ]

  dbo.collection('Students').insertMany(myObj, function (err, res) {
    if (err) throw err
    console.log('The number of documents inserted are: ', res.insertedCount)
    console.log(res)
  })
})
