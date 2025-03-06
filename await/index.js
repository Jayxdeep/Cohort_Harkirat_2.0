function jayAsyncFunction(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there")
        },1000)
    })
    return p
}
async function main(params) {//caller side
    let value=await jayAsyncFunction()
    console.log(value)
}
main()