const { deleteProfessor } = require('../model/professor')

const deleteProfById = (req, res) => {
  let { id } = req.params
  id = parseInt(id)

  deleteProfessor(id, (err, obj) => {
    if (err) throw err
    res.send(`Data has been deleted`)
  })
}

module.exports = { deleteProfById }
