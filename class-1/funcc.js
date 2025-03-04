function sum(a,b)
{
    const sumval=a+b;
    return sumval;
}   
const val=sum(2,3);
const val2=sum(2,10);
console.log(val);
console.log(val2);


// let sum=0;
// for(let i=0;i<1000000000000000000000;i++){
//     sum=sum+i;
// }
// console.log(sum);
//function calling function
 function sq(n){
    return n*n;
 }
 function cb(n){
    return n*n*n
 }
 function everything(a,b,fn){
    const val1=fn(a)
    const val2=fn(b)
    return val1+val2
 }

 console.log(everything(a,b,sq))
