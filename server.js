import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import UserRouter from './routes/userRoutes.js';
import ImageRouter from './routes/imageRoutes.js';

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
await connectDB();

app.use('/api/users', UserRouter);
app.use('/api/image', ImageRouter);

app.get('/', (req, res) => {
    res.send('Api is running...');
    })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})