import mongoose from "mongoose";

const connectMongoDb= async()=>{
    try{

        if (mongoose.connection.readyState === 1) {
            console.log('MongoDB is already connected.');
            return;
        }    

        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Mongoose Connected')

    }catch(error){
        console.log(error);
    }
}

export default connectMongoDb;