// 1.导入fs文件系统
const fs = require('fs')
// 2.读取文件
//     参数一：要读取的文件地址 参数二：编码格式 参数三：回调函数（读取结果，读取到的值）
fs.readFile('./成绩.txt','utf-8',function(err,dataStr){
    // 文件读取失败时
    if(err) return console.log("读取文件失败!"+err.message)
    // 文件读取成功
    // 将读取出来的数据按空格进行分割
    var oldList = dataStr.split(' ')
    // 将每一项的=用：代替
    var newlist = []
    oldList.forEach(item=>{
        
        newlist.push(item.replace('=','：'))
    })
    // 把新数组中每一项进行合并  join()能够使数组中每一项都与要拼接的内容进行拼接
    var newStr = newlist.join('\r\n')
    // console.log(newStr)
    // 写入新文件
    //   参数一：要写入的文件位置 参数二：要写入的字符串 参数三：回调函数（写入结果）
    fs.writeFile('./成绩-OK',newStr,function(err){
        if(err) return console.log("文件写入失败！"+err.message)
    })

})