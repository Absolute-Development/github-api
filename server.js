require('./lib/scanner')

var log = require('./lib/shared').log('server.js')

var app = require('./lib/www')

app.listen(80, function() {
    log.info("Started server on http://"+app.address().address+":"+app.address().port)
})