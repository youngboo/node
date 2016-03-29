/**
 * Created by abcdefg on 2016/3/29.
 */
var https = require('https')
var fs = require('fs')
var options = {
    key:fs.readFileSync('ssh_key.pem'),
    value:fs.readFileSync('ssh_cert.pem')
}
https.createServer(options,function(req,res){
    res.writeHeader(200)
    res.end('hello')
}).listen(9900)