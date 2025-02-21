function sum(num1,num2){//2->num1,3->num2,displayResult->fncCall
    let res=num1+num2;
    return res;//displayResult is functoin that gets passed in fncall
}
function displayResult(data){
    console.log("Result of the sum is:"+data);
}
function displayResultPassive(data){
    console.log("Sums result is :"+ data)
}
// const ans=sum(2,3,displayResult);//callbacks
displayResult(sum(4,6))
displayResultPassive(sum(5,5))
