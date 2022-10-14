const { getById } = require('../model/professor')

const getSingleProf = (req, res) => {
  let { id } = req.params
  id = parseInt(id)
  //console.log(id)

  getById(id, (err, data) => {
    if (err) throw err
    res.json(data)
  })
}

module.exports = { getSingleProf }
