 import express from 'express';
 import dotenv from 'dotenv';
 dotenv.config();

 
const app = express();

const port = 5000;

app.get('/', (req,res) => {
res.send("Satyam")
})


app.get('/twitter', (req,res) => {
    res.send("SatyamKanojiya")
})

app.get('/login',(req,res)=>{
    res.send("LOGIN")
})
// This Node.js code, using Express, 
// defines a route for handling HTTP GET requests to "/login" 
// and responds with the string "LOGIN" when accessed,
//  serving as a basic login page placeholder.



app.listen(process.env.PORT,()=>{
console.log(`server started on port ${port}`)
})