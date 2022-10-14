const { getAllUsers } = require('../model/user')

const getAllUserData = (req, res) => {
  getAllUsers((err, list) => {
    if (err) throw err

    res.json(list)
  })
}

module.exports = { getAllUserData }
