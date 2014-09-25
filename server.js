var Router = require("routes-router")
var http = require("http")

var router = Router()

var PORT = process.env["PORT"] || 8000

router.addRoute("/foo", function (req, res) {
    res.end("foo")
})

router.addRoute("/bar", function (req, res, opts) {
    res.end("bar")
})

var server = http.createServer(router)

server.listen(PORT, function () {
   console.log('server started!!!')
})
