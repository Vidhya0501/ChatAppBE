const mongoose =require("mongoose");
const dotenv= require("dotenv")

dotenv.config()

const DB_URL=process.env.DB_URL

const connectDB = ()=>{
    mongoose.connect(DB_URL)
.then(()=>console.log("Database connected successfully"))
.catch((err)=>console.log("Error in database connection",err))
}
module.exports = connectDB


