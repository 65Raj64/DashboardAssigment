const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },

    email: {
        require: true,
        type: String,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        require: true,
        type: String,
        minlength: 8,

    }
})
module.exports=mongoose.model("User",userSchema)