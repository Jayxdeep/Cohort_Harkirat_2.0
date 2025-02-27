function calSum(n){
    let a=0;
    for(let i=0;i<n;i++){
        a+=i;
    }
    return a;
}
const beforeDate=new Date();
const beforeTimeMS=beforeDate.getTime();
calSum(100000000)
const afterDate=new Date();
const afterTimeMs=afterDate.getTime();
console.log(afterTimeMs-beforeTimeMS)

function time(){
    console.log(new Date().getTime())
}
setInterval(time,1000)