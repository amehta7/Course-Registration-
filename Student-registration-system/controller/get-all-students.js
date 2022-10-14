const { getAllStudents } = require('../model/students')

const getAllStudentsData = (req, res) => {
  getAllStudents((err, list) => {
    if (err) throw err
    res.json(list)
  })
}

module.exports = { getAllStudentsData }
