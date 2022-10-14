const { updateStudent } = require('../model/students')

const updateStudentById = (req, res) => {
  const data = req.body
  let { id } = req.params
  data.Sno = parseInt(id)
  //console.log(id)

  updateStudent(data, (err, doc) => {
    if (err) throw err
    res.send('Data has been updated')
  })
}

module.exports = { updateStudentById }
