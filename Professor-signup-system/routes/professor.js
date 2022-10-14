const express = require('express')
const router = express.Router()

const { getAllProfData } = require('../controllers/get-all-prof')
const { getSingleProf } = require('../controllers/get-single-prof')
const { updateProfById } = require('../controllers/update-prof')
const { deleteProfById } = require('../controllers/delete-prof')
const { publishMsg } = require('../controllers/publish')
const { subMsg } = require('../controllers/subscribe')
const { publishStudent } = require('../controllers/publish-student')

router.get('/professors', getAllProfData)
router.get('/professors/:id', getSingleProf)
router.patch('/updateprof/:id', updateProfById)
router.delete('/deleteprof/:id', deleteProfById)
router.get('/publish/:Pid', publishMsg)
router.get('/subscribe', subMsg)
router.get('/publish/:Pcourse', publishStudent)

module.exports = router
