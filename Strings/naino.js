//basic string

function getLength(str){
    console.log("Original String:",str)
    console.log("length:",str.length)//.length gives length of string
}
getLength("Hizruboi")

//indexOf
function findIndexOf(str,target){
    console.log("Original string:",str);
    console.log("Index:",str.indexOf(target))//finds target in string
}
findIndexOf("hello world","world")

//lastIndexOf
function lastIndexOf(str,target){
    console.log("Original string:",str);
    console.log("Index:",str.lastIndexOf(target))
}
lastIndexOf("Hello world world world","world")

//slice
function getSlice(str,start,end){
    console.log("Original string:",str);
    console.log("after slice:",str.slice(start,end))
}
getSlice("Hello World",0,6)
// let ans="Hello World".slice(0,5)
// console.log(ans)  short way op : Hello


//  replace
 function replaceStr(str,target,repc){
    console.log("Original string:",str);
    console.log("after replace:",str.replace(target,repc))
 }
 replaceStr("Hello World","World","javascript")
 //split
 function splitString(str,sep){
    console.log("Original string:",str);
    console.log("after split:",str.split(sep))
 }
 splitString("i am hizruboi",(" "))
 
 //trim
 function trimString(str){
    console.log("Original string:",str);
    console.log("after trim:",str.trim())
 }
 trimString("  Hello World")
 
 // toUpperCase
 function toUpper(str){
    console.log("Original string:",str);
    console.log("after toUpperCase:",str.toUpperCase())
 }
 toUpper("chutpaglu")
 //
 function toLower(str){
    console.log("Original string:",str);
    console.log("after toLowerCase:",str.toLowerCase())
 }
 toLower("LUNPAGLI")