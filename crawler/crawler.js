/**
 * Created by youngboo on 2016/3/27.
 */
var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.bilibili.com/mobile/video/av4283472.html'
function crawlerBy(minutes,url){
    console.log(url)
    setTimeout(function(url){
        http.get(url,function(res){
            var html = ''
            res.on('data',function(data){
                html +=data
            })
            res.on('end',function(){
                //console.log(html)
                //filterHtml(html)
                crawlerBy(minutes,url)
            })
        }).on('error', function () {
            console.log('获取出错')
        })

    },minutes*1000*60)
}

function filterHtml(html){
    var $ = cheerio.load(html);
    var ul = $(".ct")
    var list = ul.children('li')
    console.log(list.length)
    list.each(function(item){
        var video = $(this).find('span')
        var text  =video.html()
        console.log(text)
    })
    var dianji = ul.find("#dianji").html()
    var danmu =  $("#dm_count").html()
    var shoucang = $("#stow_count").html()


    console.log("点击:"+dianji+","+"弹幕:"+danmu+","+"收藏:"+shoucang)
}
function getHtml(){
    http.get(url,function(res){
        var html = ''
        res.on('data',function(data){
            html +=data
        })
        res.on('end',function(){
            //console.log(html)
            filterHtml(html)
            //crawlerBy(minutes,url)
        })
    }).on('error', function () {
        console.log('获取出错')
    })
}
getHtml()
//crawlerBy(0.5,url)