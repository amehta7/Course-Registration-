const { deleteStudent } = require('../model/students')

const deleteStudentById = (req, res) => {
  let { id } = req.params
  id = parseInt(id)

  deleteStudent(id, (err, obj) => {
    if (err) throw err
    res.send(`Data has been deleted`)
  })
}

module.exports = { deleteStudentById }
