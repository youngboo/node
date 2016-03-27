/**
 * Created by youngboo on 2016/3/27.
 */
var http = require('http')
//var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/565'
http.get(url,function(res){
    var html = ''
    res.on('data',function(data){
        html +=data
    })
    res.on('end',function(){
        console.log(html)
        //filterHtml(html)

    })
}).on('error', function () {
    console.log('获取出错')
})

/*
function filterHtml(html){
    var $ = cheerio.load(html);
    var chapters = $(".chapter")
    var list =[]
    chapters.each(function(item){
        var chapter = $(this)
        var name = chapter.find('strong').text()
        var charpdata = {
            'name':name,
            'videos':[]
        }
        var videoList = chapter.find('.video').children('li')
        videoList.each(function(item){
            var video = $(this)
            var href = video.find('.studyvideo').attr("href")
            var text  =video.find('.studyvideo').text()
            charpdata.videos.push({'href':href,'text':text})
        })
        list.push(charpdata)
    })
    console.log(list)
}*/
