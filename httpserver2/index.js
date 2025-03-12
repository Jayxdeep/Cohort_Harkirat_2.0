const express =require('express');
const app=express()
const port=process.env.PORT||3000;//access env variable
const bodyParser=require('body-parser')//middleware
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    // console.log(req.body)
    res.send("hello world")
})
app.get('/mobile-network/bat',(req,res)=>{
    res.send("I am jaydeep aka spiderman")
})
app.post('/backend-api/converstion',(req,res)=>{//basically ml thingy 
    //query params
    //body params req.body.message
    const message=req.query.message
    console.log(message)
    res.json({
        output:"2+2=4"
    })
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})