const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send('Hello world! This is my Node.js application.')
})

const port = process.env.PORT ?? 8080

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
