//const cors =  require('cors')
//app.use(cors)

const express =  require('express')
const models = require('./models')
const users = require('./controllers/users')

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('app.use(cors) commentato, bloccava il server')
})

//ENDPOINTS
app.get     ('/api/users', users.index)
app.get     ('/api/users/:id', users.show)
app.post    ('/api/users/insert', users.create)
app.put     ('/api/users/update/:id', users.update)
app.delete  ('/api/users/delete/:id', users.delete)


app.listen(PORT, () => {
  models.sequelize
  .authenticate()
  .then(function () {
      console.log('Connection successful')
      console.log(`App listening on http://localhost:${PORT}`)
  })
  .catch(function(error) {
      console.log("Error creating connection:", error)
  })
})
