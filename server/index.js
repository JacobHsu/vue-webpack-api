var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors({credentials: true, origin: true}))

app.options('/products') // enable pre-flight request for DELETE request
app.get('/products', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})