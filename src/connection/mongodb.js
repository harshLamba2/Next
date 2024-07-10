import mongoose from "mongoose";

const connectMongoDb= async()=>{
    try{

        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Mongoose Connected')

    }catch(error){
        console.log(error);
    }
}

export default connectMongoDb;