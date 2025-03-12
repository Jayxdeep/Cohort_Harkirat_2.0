const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const port = 3000//creating new route to 3000
//same as fs.readFile fs purpose to write files on system
app.use(bodyParser.json());

app.get("/route-handler",(req,res)=>{
  res.json({
    name:"Jaydeep",
    age:21
  })
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/backend api/conversation',(req,res)=>{
  const message=req.body.message;
  console.log(message)
  res.json({
    output:"2+2=4"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})