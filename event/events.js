/**
 * Created by youngboo on 2016/3/28.
 */
var EventEmitter = require('events').EventEmitter
var life = new EventEmitter()
life.setMaxListeners(11)
function water(who){
    console.log("给"+who+"倒水1")
}
life.on('a',water)
life.on('a',function(who){
    console.log("给"+who+"倒水2")
})
life.on('a',function(who){
    console.log("给"+who+"倒水3")
})
life.on('a',function(who){
    console.log("给"+who+"倒水4")
})
life.on('a',function(who){
    console.log("给"+who+"倒水5")
})
life.on('a',function(who){
    console.log("给"+who+"倒水6")
})
life.on('a',function(who){
    console.log("给"+who+"倒水7")
})
life.on('a',function(who){
    console.log("给"+who+"倒水8")
})
life.on('a',function(who){
    console.log("给"+who+"倒水9")
})
life.on('a',function(who){
    console.log("给"+who+"倒水10")
})
life.on('a',function(who){
    console.log("给"+who+"倒水11")
})
life.on('b',function(who){
    console.log("给"+who+"倒水12")
})

life.emit('a',"我")
life.emit('b',"妹子")
life.removeListener('a',water)
life.removeAllListeners('a')
var hasConfortListener = life.emit('a',"汉字")
var hasLoved = life.emit('b',"妹子")
console.log(hasConfortListener)
console.log(life.listeners('a').length)
console.log(life.listeners('b').length)
console.log(hasLoved)