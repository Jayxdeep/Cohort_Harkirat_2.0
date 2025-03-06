const fs=require("fs")
function jayReadFile(){
    console.log("Inside jayreadfile")
    return new Promise(function(resolve){
        console.log("inside promise")
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve")
            resolve(data)
        })
    })
}
function onDone(data){
    console.log(data)
}
jayReadFile().then(onDone)


// var d=new Promise(function(onDone){
//     setTimeout(function(){
//         onDone("food")
//     },1000)
   
// })
// function callback(){
//    console.log(d)
// }
// console.log(d)
// d.then(callback)