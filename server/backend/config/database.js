import mongoose from 'mongoose';
//const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then((con) => console.log(`Database Connected : ${con.connection.host}`))
        
};

export default connectDatabase;