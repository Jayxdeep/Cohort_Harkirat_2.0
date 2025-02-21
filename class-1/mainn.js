function caluculateArithmetic(a,b,arithmeticFinalFunction){//rithmeticFinalFunction [callback funct]
    const ans=arithmeticFinalFunction(a,b)
    return ans;
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const val=caluculateArithmetic(6,2,sub);
console.log(val);

//setTimeout
function greet(){
    console.log("hello world")
}
function grrtAlien(){
    console.log("hello alien")
}
setTimeout(grrtAlien,3000)//1s=1000ms greet is fucnt itself
// setInterval(grrtAlien,3000)//prints at an interval of suppose of 3ms