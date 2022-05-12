import app from './app.js';
import connectDatabase from './config/database.js';

connectDatabase();


 const server = app.listen(process.env.PORT, () => {
    console.log(`Server is runing on port ${process.env.PORT}`);
});

// Umhandled Promise Rejection

process.on("unhandledRejection" , (err) =>{
    console.log(`Error: ${err.message}`);
    console.log("Server is Shutting Down due to unexpected error");

    server.close(()=>{
        process.exit(1)
    })
});