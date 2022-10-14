const express = require('express')
const router = express.Router()
const path = require('path')

const { getAllUserData } = require('../controllers/get-all-users')
const { updateUserById } = require('../controllers/update-user')
const { deleteUserById } = require('../controllers/delete-user')
const { publishMsg } = require('../controllers/publish')

router.get('/userdata', getAllUserData)
router.patch('/updateuserdata/:id', updateUserById)
router.delete('/deleteuserdata/:id', deleteUserById)
router.get('/publish/:Uname', publishMsg)

module.exports = router
