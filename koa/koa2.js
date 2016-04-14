/**
 * Created by youngboo on 2016/4/13.
 */
var koa = require('koa')
var app = koa()
var http = require('http')
app.use(function *(){
    this.body = "hello koa"
    this.cookies.set("cookie_test", "123456", [])
})
http.createServer(app.callback()).listen(3000)
http.createServer(app.callback()).listen(3001)
