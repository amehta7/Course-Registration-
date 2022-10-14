const { updateUser } = require('../model/user')

const updateUserById = (req, res) => {
  const data = req.body
  let { id } = req.params
  data._id = id

  updateUser(data, (err, doc) => {
    if (err) throw err
    res.send('Data has been updated')
  })
}

module.exports = { updateUserById }
