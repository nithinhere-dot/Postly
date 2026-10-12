const mongoose=require("mongoose")
require("dotenv").config();

const MONGO_URI=process.env.MONGO_URI

async function connectionDB(){
    await mongoose.connect(MONGO_URI)

    console.log("Db Connected successfully")
}

module.exports=connectionDB;