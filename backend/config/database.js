const mongoose=require("mongoose");

const connectDatabase = () => {
    
    mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))

    .catch((error) => console.error(error));
}
module.exports=connectDatabase;