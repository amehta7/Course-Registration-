const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const profRouter = require('../routes/professor')
const homeRouter = require('../routes/home')
const notFoundMiddleware = require('../middleware/not-found')

const PORT = 8081

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, '../', 'public', 'client')))

app.use('/', homeRouter)
app.use('/api', profRouter)

app.use(notFoundMiddleware)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
