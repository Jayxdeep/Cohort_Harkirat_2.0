function explainParseInt(value){
    console.log("origina Value:",value)
    let res=parseInt(value);
    console.log("after parseint:",res)
}
//usage of parseInt
explainParseInt("42")
explainParseInt("42px")
explainParseInt("3.14")

function explainParseFloat(value){
    console.log("origina Value:",value)
    let res=parseFloat(value);
    console.log("after parswFlaot:",res)
}
//usage of parseFloat
explainParseFloat("42")
explainParseFloat("42px")
explainParseFloat("3.14");
