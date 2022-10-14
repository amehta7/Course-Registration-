const MongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://localhost:27017'
const dbName = 'coursedb'

MongoClient.connect(mongoURI, function (err, db) {
  if (err) throw err

  const dbo = db.db(dbName)

  const myObj = [
    {
      Cid: 1,
      Cname: 'History',
      Cphno:
        'Study the cultural, economic, political, and social developments that have shaped the world from c. 1200 CE to the present. You will analyze texts, visual sources, and other historical evidence and write essays expressing historical arguments.',
      Cduration: '1 Years',
      Cstartdate: '1 Oct 2021',
      Cenddate: '30 Sep 2022',
      Ctimings: '09 AM TO 11 AM',
      Pid: 1,
    },
    {
      Cid: 2,
      Cname: 'Database Management System',
      Cphno:
        'A study of database models including the hierarhical, networ, relational and object oriented models and the examination of such practical issues as database design, setup, and manipulation.',
      Cduration: '2 Years',
      Cstartdate: '1 March 2019',
      Cenddate: '1 March 2021',
      Ctimings: '2 PM To 5 PM',
      Pid: 2,
    },
    {
      Cid: 3,
      Cname: 'Java Programming',
      Cphno:
        'In this Introduction to Java Programming training course, you gain extensive hands-on experience writing, compiling, and executing Java programs.',
      Cduration: '1 Year',
      Cstartdate: '1 Nov 2022',
      Cenddate: '1 Nov 2023',
      Ctimings: '10 AM To 3 PM',
      Pid: 3,
    },
    {
      Cid: 4,
      Cname: 'Business Management',
      Cphno:
        'Studying for a business management degree allows you to develop a broad understanding of business organisations and provides you with subject-specific knowledge in areas such as markets, customers, finance, operations, communication, information technology and business policy and strategy.',
      Cduration: '1 Year',
      Cstartdate: '1 Dec 2022',
      Cenddate: '1 Dec 2023',
      Ctimings: '10 AM To 2 PM',
      Pid: 4,
    },
    {
      Cid: 5,
      Cname: 'Marketing',
      Cphno:
        'Master the tools of business strategy to contribute meaningfully to your organization. Create value for customers, employees, and suppliers, and generate financial success.',
      Cduration: '1 Year',
      Cstartdate: '1 Dec 2022',
      Cenddate: '1 Dec 2023',
      Ctimings: '10 AM To 2 PM',
      Pid: 5,
    },
    {
      Cid: 6,
      Cname: 'Computer Science',
      Cphno:
        'Principal areas of study within Computer Science include artificial intelligence, computer systems and networks, security, database systems, human computer interaction, vision and graphics, numerical analysis, programming languages, software engineering, bioinformatics and theory of computing.',
      Cduration: '1 Year',
      Cstartdate: '1 Dec 2022',
      Cenddate: '1 Dec 2023',
      Ctimings: '10 AM To 2 PM',
      Pid: 6,
    },
    {
      Cid: 7,
      Cname: 'Social Science',
      Cphno:
        'Social Science is a major category of academic disciplines that study human society and social relationships. Social Science disciplines include Economics, Political Science, Psychology, Sociology, Anthropology, History, and Linguistics, among others.',
      Cduration: '1 Year',
      Cstartdate: '1 Dec 2022',
      Cenddate: '1 Dec 2023',
      Ctimings: '10 AM To 2 PM',
      Pid: 7,
    },
    {
      Cid: 8,
      Cname: 'Economics',
      Cphno:
        'Economics is a discipline which combines politics, sociology, psychology and history. When you study economics you gain a toolkit of skills, approaches and ways of thinking that you can apply to a wide range of problems.',
      Cduration: '1 Year',
      Cstartdate: '1 Dec 2022',
      Cenddate: '1 Dec 2023',
      Ctimings: '10 AM To 2 PM',
      Pid: 8,
    },
    {
      Cid: 9,
      Cname: 'Human Resource Management',
      Cphno:
        'HRM degree programs provide training and instruction in labor law and relations, employee recruitment and development processes, management theories, organizational communication, and other subjects that prepare students to manage an organizations human assets.',
      Cduration: '1 Year',
      Cstartdate: '1 Dec 2022',
      Cenddate: '1 Dec 2023',
      Ctimings: '10 AM To 2 PM',
      Pid: 9,
    },
    {
      Cid: 10,
      Cname: 'Finance Management',
      Cphno:
        'Financial management teaches you to manage your financial resources both on the personal level and within your business plan. It is more than just balance sheets. It is comprised of short term and long term goals, with cash management plans and investment decisions in place.',
      Cduration: '1 Year',
      Cstartdate: '1 Dec 2022',
      Cenddate: '1 Dec 2023',
      Ctimings: '10 AM To 2 PM',
      Pid: 10,
    },
  ]

  dbo.collection('Courses').insertMany(myObj, function (err, res) {
    if (err) throw err
    console.log('The number of documents inserted are: ', res.insertedCount)
    console.log(res)
  })
})
