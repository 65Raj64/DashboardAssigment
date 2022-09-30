
const jwt = require("jsonwebtoken");
const jwtkey='secret';
const model=require("../model/model")


const registerUser=async function(req,res){
    try {
       
        let  data = JSON.stringify(req.body)
        
   const { phone, name, email, password } = req.body
        let registerUser= await model.create(data)
        if(await model.findOne({email:req.body.email})){
            res.status(400).send("User Already Exists");
            return;
          }
    
        res.status(201).send({ status: true, msg:registerUser })
      
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }   
    
}


const loginUsers = async function (req, res) {
    
    if(req.body.password && req.body.email)
{
   
    let user=await model.findOne(req.body).select("-password");
    if(user){
        jwt.sign({user},jwtkey,{expiresIn:"2h"},()=>{
           if(err){
               res.send("Something is wrong")
           }
            res.send({user , auth:token})
        })      
    }else{
        res.send({result:'No Usert found'})
    }
}


}
   



const Logout=async function (req,res){
    try {
        res.clearCookie('jwt');
        const user =await model.findOne({email:req.body.email});
        if(user){
          const a = await user.clearToken();
          res.status(200).send("Logout Sucessful")
        }else{
          throw new Error("HUI")
        }
      } catch (e) {
        res.status(401).send(" Cookie Not Cleared")
      }
    
}






module.exports={registerUser,loginUsers,Logout,}
