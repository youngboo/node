/**
 * Created by youngboo on 2016/3/27.
 */
var http = require('http')
var url = 'http://www.imooc.com/learn/564'
var cheerio = require('cheerio')
http.get(url,function(res){
    var html = ''
    res.on('data',function(data){
        html +=data
    })
    res.on('end',function(){
        //console.log(html)
       var chapData = filterHtml(html)
        printChapData(chapData)

    })
}).on('error', function () {
    console.log('获取出错')
})

function printChapData(chapData){
    var printStr = ''
    chapData.forEach(function(item){
        printStr += "课程信息:"+item.name+"\r\n"
        item.videos.forEach(function(item){
            printStr += "【"+item.href+"】 "+item.text+"\n"
        })
    })
    console.log(printStr)
}

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
            var video = $(this).find('.studyvideo')
            var href = video.attr("href")
            var text  =video.text()
            charpdata.videos.push({'href':href,'text':text})
        })
        list.push(charpdata)
    })
    return list;
}