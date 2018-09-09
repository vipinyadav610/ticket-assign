import express from 'express'
import path from 'path'
import compression from 'compression'

const app = express()

app.use(compression())
app.use('/', express.static(path.join(__dirname, '../../dist')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

app.listen(7001, () => {
  console.log('server is listening on port 7001')
})
