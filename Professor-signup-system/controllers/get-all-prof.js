const { getAllProfessors } = require('../model/professor')

const getAllProfData = (req, res) => {
  getAllProfessors((err, list) => {
    if (err) throw err

    res.json(list)
  })
}

module.exports = { getAllProfData }
