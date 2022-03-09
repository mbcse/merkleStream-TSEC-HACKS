var mongoose=require("mongoose");

var likeSchema=new mongoose.Schema({
    address:{
        type:String,
        unique:true,
    },
    likes:{type:Number,
    default:0}
});

module.exports=mongoose.model("userlike",likeSchema);