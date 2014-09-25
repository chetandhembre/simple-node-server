var Router = require("routes-router")
var http = require("http")

var router = Router()


router.addRoute("/foo", function (req, res) {
    res.end("foo")
})

router.addRoute("/bar", function (req, res, opts) {
    res.end("bar")
})

var server = http.createServer(router)

server.listen(8000, function () {
   console.log('server started!!!')
})
