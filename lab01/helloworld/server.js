const express = require('express')
const app = express()
const port = process.env.PORT || 8099

app.get('/', (req, res) => {
  res.send('Hello World!<br>omg')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

