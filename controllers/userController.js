import { v4 as uuidv4 } from 'uuid';

let users=[
       {
       name:"aman",
       age:21,
       phoneno:6287958624
       },
       {
       name:"jui",
       age:21,
       phoneno:6287958624
       },
]


const getFunction=(req,res)=>{

       res.send(users);
}
const postFunction=(req,res)=>{
       const user=req.body;
       const userId=uuidv4();
       const userWithId={...user,id:userId}
       users.push({...user,id:userId});
      res.send(`${user.name} added to database`);
}
const getFunctionWithPrams=(req,res)=>{
       const user=users.find((user)=>req.params.name===user.name);
       console.log(req.params)
       res.send(user)
}
const deleteFunction=(req,res)=>{
       const user=users.find((user)=>req.params.name===user.name);
       console.log(req.params)
       users.pop(user);
       res.send(users)
}
const patchFunction= (req, res) => {
       const user = users.find((user) => req.params.name === user.name);
       const x=user.name;
       const {name,age,phoneno}=req.body;
       
       if(name) user.name=name;
       if(age) user.age=age;
       if(phoneno) user.phoneno=phoneno;
       res.send(`user  has been change `);
     }
export {getFunction,postFunction,patchFunction,getFunctionWithPrams,deleteFunction}