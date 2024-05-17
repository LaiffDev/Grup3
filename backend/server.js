const express =  require('express')
const cors =  require('cors')
const app = express()
const PORT =  3008

//USES

app.use((cors))


app.get('/', function (req, res) {
  res.send('SERVER RUNNING AS REQUESTED');
});




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
