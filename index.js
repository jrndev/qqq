const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static('public'))

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get('/api/locations', (req, res) => {
  const param = req.params.id
  res.header("Content-Type",'application/json')
  res.json(database)
})

app.get('/api/locations/:p', (req, res) => {
  res.header("Content-Type",'application/json')
  req.params.p === 'pretty' ? res.send(JSON.stringify(database, null, 4)) : res.json(database)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})