function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
function findSumTill100(){
    console.log(findSum(100));//finds sum fro 0+1+2+3+...+99
}
//sync busywaiting
// function syncSleep(){
//     let a=1;
//     for(let i=0;i<100000000;i++)
//     a++
// } 
// syncSleep()
// findSumTill100()
setTimeout(findSumTill100,2000)//caling async functm
console.log("hello world")