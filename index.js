require('dotenv').config()
const express = require('express')

const bodyParser = require('body-parser')

const schoolRoutes = require('./src/routers/school.routers')

const errorMiddleware = require('./src/middleware/errorhandler.middleware')

const sequelize = require('./src/config/db.config')

const app = express()

app.use(bodyParser.json())

app.use('/api/schools', schoolRoutes)

app.use(errorMiddleware)

sequelize
  .sync()
  .then(() => {
    console.log('Database connected and synced')
  })
  .catch((err) => console.error('Database connection error:', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
