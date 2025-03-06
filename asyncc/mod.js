const fs=require("fs")
//fileSystem module
fs.readFile("a.txt","utf-8",function(_err,data){//err first callback and then data 
    //takes sometime to read file 
console.log(data)
})
console.log("hello ji")//why this runs frst? this is a async funct
let a=0
for(let i=0;i<10000000000;i++)
    a++
console.log("hey there")//this thread is busy here and once it has completed callbacks are mostly used in async