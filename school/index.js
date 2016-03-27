/**
 * Created by youngboo on 2016/3/27.
 */
var kclass = require('./kclass')

exports.add = function(all){
    all.forEach(function (item, index) {
        var teacherName = item.teacherName;
        var students = item.students;
        kclass.add(teacherName,students)
    })
}
