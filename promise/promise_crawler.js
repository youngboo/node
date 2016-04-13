/**
 * Created by abcdefg on 2016/3/29.
 */
var Promise = require('bluebird')
var http = require('http')
var url = 'http://www.imooc.com/learn/564'
var domain = 'http://www.imooc.com/learn/'
var cheerio = require('cheerio')
var ids =[564,599,641,607,589]
function promiseCrawler(url){
    return new Promise(function(resolve,reject){
        var url = domain+ids[i]
        http.get(url,function(res){
            var html = ''
            res.on('data',function(data){
                html +=data
            })
            res.on('end',function(){
                resolve(html)

            })
        }).on('error', function (e) {
            reject(e.message())
        })
    })
}

function crawlerSomePage([]){
    pages.forEach(function(item){
         var page = domain + item
        console.log("正在爬取"+page)
        http.get(page,function(res){
            var html = ''
            res.on('data',function(data){
                html +=data
            })
            res.on('end',function(){
               console.log("")

            })
        }).on('error', function (e) {
            console.log('爬取出错')
        })
    })
}
crawlerSomePage(pages)


