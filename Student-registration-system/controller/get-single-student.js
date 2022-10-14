const { getById } = require('../model/students')

const getSingleStudent = (req, res) => {
  let { id } = req.params
  id = parseInt(id)
  //console.log(id)

  getById(id, (err, data) => {
    if (err) throw err
    res.json(data)
  })
}

module.exports = { getSingleStudent }
