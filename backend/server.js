const express =  require('express')
const cors =  require('cors')
const models = require('./models')

const users = require('./controllers/users')
const cars = require('./controllers/cars')
const columns = require('./controllers/columns')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

//ENDPOINTS
app.post    ('/api/users', users.index)
app.get     ('/api/users/:id', users.show)
app.post    ('/api/users/insert', users.create)
app.put     ('/api/users/update/:id', users.update)
app.delete  ('/api/users/delete/:id', users.delete)

app.get     ('/api/cars', cars.index)
app.get     ('/api/cars/:user_id', cars.indexUsersCar)
app.post    ('/api/cars/insert', cars.create)
app.put     ('/api/cars/update/:id', cars.update)
app.delete  ('/api/cars/delete/:id', cars.delete)

app.get     ('/api/columns', columns.index)
app.get     ('/api/columns/:id', columns.show)
app.get     ('/api/columns/insert', columns.create)
app.get     ('/api/columns/update/:id', columns.update)
app.get     ('/api/columns/delete/:id', columns.delete)

app.listen(PORT, () => {
  models.sequelize
  .authenticate()
  .then(() => {
      console.log('Connection successful')
      console.log(`App listening on http://localhost:${PORT}`)
  })
  .catch((error) => {
      console.log("Error creating connection:", error)
  })
})
