/**
 * Created by youngboo on 2016/4/2.
 */
var http = require('http')
var url = 'http://www.imooc.com/learn/564'
var cheerio = require('cheerio')
var domain = 'http://www.imooc.com/learn/'
var ids = []

while(i<1000){
    http.get(url,function(res){
        var html = ''
        res.on('data',function(){
            html += res.data;
        })

        res.on('end',function(){

        })
    })
}
