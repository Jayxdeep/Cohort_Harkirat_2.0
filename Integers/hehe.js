function explainParseInt(value){
    console.log("origina Value:",value)
    let res=parseInt(value);
    console.log("after parseint:",res)
}
//usage of parseInt
explainParseInt("42")
explainParseInt("42px")
explainParseInt("3.14")
//some changes