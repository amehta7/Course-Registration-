const express = require('express')
const router = express.Router()

const { getAllStudentsData } = require('../controller/get-all-students')
const { getSingleStudent } = require('../controller/get-single-student')
const { updateStudentById } = require('../controller/update-student')
const { deleteStudentById } = require('../controller/delete-student')
const { publishMsg } = require('../controller/publish')
const { subStudent } = require('../controller/subscribe')

router.get('/students', getAllStudentsData)
router.get('/students/:id', getSingleStudent)
router.patch('/updatestudent/:id', updateStudentById)
router.delete('/deletestudent/:id', deleteStudentById)
router.get('/publish/:Scourse', publishMsg)
router.get('/subscribe', subStudent)

module.exports = router
