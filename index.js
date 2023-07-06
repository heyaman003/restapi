import express from 'express';
import bodyparser from 'body-parser'
import userRoutes from './routes/users.js'
const app=express();
app.use(bodyparser.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
       console.log(req.url)
       res.send("hieee")
})
app.listen(8080,()=>{
       console.log("server started at :http://localhost:8080");
})