var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/sum', function (req, res, next) {
    var a = req.query.a || 0;
    var b = req.query.b || 0;
    var result = parseInt(a) + parseInt(b);
    res.json({msg: result})
})

app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 80')
})