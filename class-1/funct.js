function sum(num1,num2,fncCall){//2->num1,3->num2,displayResult->fncCall
    let res=num1+num2;
    fncCall(res);//displayResult is functoin that gets passed in fncall
}
function displayResult(data){
    console.log("Result of the sum is:"+data);
}
function displayResultPassive(data){
    console.log("Sums result is :"+ data)
}
// const ans=sum(2,3,displayResult);//callbacks
displayResult(sum(4,6))

//callbacks
// function sum(a,b){
//     console.log(a+b)
// }
// function caluculate(a,b,callback){
//     callback(a,b);
// }
// caluculate(2,3,sum);    

//cllback hell
// function getData(dataID){
//     setTimeout(()=>{    
//         console.log("data",dataID)
//     },2000)
// }
function num(n,callback){
    return callback(n);
}
function double(n){
    return n*2;
}
console.log(num(5,double));

//nested functoin
