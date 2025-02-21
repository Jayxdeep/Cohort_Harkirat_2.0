//.creating a counter in js[c]
let count=30;
let timer=setInterval(function(){
    console.clear();
    console.log(count)
    count--
    if(count<0)
        clearInterval(timer)
},1000);