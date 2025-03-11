const express = require('express')
const app = express()
const port = 3000//creating new route to 3000
//same as fs.readFile fs purpose to write files on system
app.get("/route-handler",(req,res)=>{
  res.json({
    name:"Jaydeep",
    age:21
  })
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/conversation',(req,res)=>{
  console.log('Headers:',req.headers)
  res.send({
    msg:"i am Jaydeep"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})