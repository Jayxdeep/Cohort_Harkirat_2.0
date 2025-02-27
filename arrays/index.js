function pushExample(arr,ele){//push
    console.log("original Array:",arr)
    arr.push(ele);
    console.log("After push:",arr)
}
pushExample([1,2,3],4)

function popExp(arr,ele){//pop
    console.log("original array:",arr)
    arr.pop()
    console.log("AFTER POP:",arr)
}
popExp([1,2,3])
//shift()
function shiftEx(arr){
    console.log("Original Array:",arr)
    arr.shift();
    console.log("AFTER SHIFT:",arr)
}
shiftEx([1,2,3])
//unshift()
function unshiftEx(arr,ele){
    console.log("origonal Array:",arr)
    arr.unshift(ele)
    console.log("AFTER UNSHIFT:",arr)
}
unshiftEx([1,2,3,4])
//concat
function concatex(arr1,arr2){
    console.log("ORiginal Arrays:",arr1,arr1)
    let arr3=arr1.concat(arr2);
    console.log("AFTER CONCAT:",arr3)
}
concatex([1,2,3],[4,5,6])
const arrr1=[1,2,3]
const arrr2=[4,5,6]
console.log(arrr1.concat(arrr2))
//foreach
function forEachEX(arr){
    console.log("Original Array:",arr)
    arr.forEach(function(item,index){
        console.log(item,index);
    })
}
forEachEX([1,2,3,])
