import http from 'http'
import app from './app.ts'

const port = 9090

const server = http.createServer(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})