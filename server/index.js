const express=require("express")
const app=express();
const port=3000;
const user=[{
    nme:"Jaydeep",
    kidneys:[{
        healthy: false,
    }]
}]

app.get('/',(req,res)=>{
  const Jaykid=user[0].kidneys;
  const numkid=Jaykid.length;
  let numberofHealthyKidneys=0;
  for(let i=0;i<Jaykid.length;i++){
    if(Jaykid[i].healthy){
        numberofHealthyKidneys=numberofHealthyKidneys+1;
    }
  }
  const numberofUnhealthyKidneys=numkid-numberofHealthyKidneys;
  res.json({
    numkid,
    numberofHealthyKidneys,
    numberofUnhealthyKidneys
  })
})
app.use(express.json())//middleware

app.post('/',(req,res)=>{
    const isHealthy=req.body.isHealthy
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "DONE"
    })
})

app.put('/',(req,res)=>{
    for(let i=0; i<user[0].kidneys.length;i++)
    user[0].kidneys[i].healthy=true;
    res.json({})
})

app.delete('/',(req,res)=>{
    if(healthyKidney()){
        const newKidneys=[];
    for(let i=0;i<user[0].kidneys.length;i++)
    if(user[0].kidneys[i].healthy){
        newKidneys.push({
            healthy:true
        })
    }
    user[0].kidneys=newKidneys
    res.json({
        msg:"DONE"
    })
    }else{
        res.sendStatus(411)//checks for one unhealthy kidney 
    }
    
})
function healthyKidney(){
    let oneUnhealtyKidney=false;
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            oneUnhealtyKidney=true;
        }
    }
    return oneUnhealtyKidney;
}


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})