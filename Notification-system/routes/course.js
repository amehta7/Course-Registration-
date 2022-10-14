const express = require('express')
const router = express.Router()

const { getAllCourseData } = require('../controller/get-all-courses')
const { subMsg, subCourse, subUser } = require('../controller/subscribe')

router.get('/courses', getAllCourseData)
router.get('/subscribe', subMsg)
router.get('/subscribe-course', subCourse)
router.get('/notify', subUser)

module.exports = router
