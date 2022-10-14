const { deleteUser } = require('../model/user')

const deleteUserById = (req, res) => {
  let { id } = req.params

  deleteUser(id, (err, obj) => {
    if (err) throw err
    res.send(`Data has been deleted`)
  })
}

module.exports = { deleteUserById }
