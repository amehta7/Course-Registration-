const { updateProfessor } = require('../model/professor')

const updateProfById = (req, res) => {
  const data = req.body
  let { id } = req.params
  data.Pid = parseInt(id)
  //console.log(id)

  updateProfessor(data, (err, doc) => {
    if (err) throw err
    res.send('Data has been updated')
  })
}

module.exports = { updateProfById }
