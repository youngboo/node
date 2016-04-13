/**
 * Created by youngboo on 2016/4/13.
 */
var koa = require('koa')
var app = koa()

// x-response-time

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

// response

app.use(function*(){
     this.body = "hello world"
})
app.listen(3000)