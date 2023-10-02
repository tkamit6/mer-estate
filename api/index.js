import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js'
dotenv.config();

mongoose.connect(process.env.MONGO_DB_PASSWORD).then(() => {
    console.log("Connected to server");
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on 3000');
})

app.use('/', userRouter )
