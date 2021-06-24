const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(require('./projects/macura-app/src/assets/db/db')())
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
    console.log('JSON Server is running')
})