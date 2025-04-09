//whatever is this code its ugly cos i didnt use middle wares and not using suppose u want to enter 10 functions of kidneys then u have to rewrite this shity code again and again so its better to use middlewares
const express=require('express')
const app=express()
const port=3000
app.get('/health-checkup',(req,res)=>{
    const kidId=req.query.kidId
    const username=req.headers.username
    const password=req.headers.password
    if(username!="jaydeep" || password!="pass"){
        res.status(401).json({
            msg:"user does not exist"
        })
        return
    }
    if(kidId!=1 &&  kidId!=2){//55 54
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return;
    }
    res.json("Your kidney is fine")
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
