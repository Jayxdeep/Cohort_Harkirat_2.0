 //create a counter in js[counts dwon 30, to 0]
 //claculate time it take brwn setTimeout call and the inner funct actlly running 
 //create a terminal clock[HH:MM:SS]
//.creating clock terminnal
setInterval(function(){
    let now=new Date();
    let time=now.toLocaleTimeString();
    // let time2=now.toLocaleTimeString('en-GB',{hour12:false});
    console.clear();
    console.log(time);
},100);



//.creating a counter in js[c]
let count=30;
let timer=setInterval(function(){
    console.clear();
    console.log(count)
    count--
    if(Count<0)
        clearInterval(timer)
    console.log("Count finished")
},1000);