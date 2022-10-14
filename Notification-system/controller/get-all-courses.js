const { getAllCourses } = require('../model/course')

const getAllCourseData = (req, res) => {
  getAllCourses((err, list) => {
    if (err) throw err

    res.json(list)
  })
}

module.exports = { getAllCourseData }
