/**
 * Created by abcdefg on 2016/3/28.
 */
/*

 */
var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    'content':'为了部落',
        'mid':8837
})
var options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'post',
    headers:{
         'Accept':'application/json, text/javascript, */*; q=0.01',
         'Accept-Encoding':'gzip, deflate',
         'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
         'Connection':'keep-alive',
         'Content-Length':postData.length,
         'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
         'Cookie':'imooc_uuid=4e085a62-ec17-44e5-a3d5-7c919a49e01e; imooc_isnew_ct=1452570140; IMCDNS=0; loginstate=1; apsid=RiMWJlNDYyZjY1NzlmZWY1OTRjNjBhMjJiNmNmNDIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTkzNjAyNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1MDQxNDIyMDFAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGU4M2VjOWVkYTcxZTcxYjliODRiMjAxMDkyMzk2NWQxnp3TVp6d01Y%3DYW; last_login_username=504142201%40qq.com; PHPSESSID=0v3nd024dr6sf0do6eh1r4kib3; jwplayer.qualityLabel=è¶æ¸; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1456707577,1458647548,1459139982; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1459142222; imooc_isnew=2; cvde=56f8b58e73043-21',
         'DNT':'1',
         'Host':'www.imooc.com',
         'Origin':'http://www.imooc.com',
         'Referer':'http://www.imooc.com/video/8837',
         'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36',
         'X-Requested-With':'XMLHttpRequest'
    }
}
var req = http.request(options,function(res){
    console.log('status:'+res.statusCode)
    console.log('headers: '+JSON.stringify(res.headers))
    console.log('content'+res.)
    res.on('data',function(chunk){
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })
    res.on('end',function(){
        console.log('评论完毕')

    })
    res.on('error',function(){
        console.log('出错了')

    })
})
req.write(postData)
req.end()