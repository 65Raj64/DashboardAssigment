const express=require('express')
const router=express.Router()
const {registerUser,loginUsers,Logout}=require("../controller/controller")


router.post("/create",registerUser);
router.post("/login", loginUsers)
router.get('/logout',Logout)
module.exports=router;