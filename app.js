import express from 'express';
import cors from 'cors';
import bookroutes from './routes/bookroutes.js';
import studentroutes from './routes/studentroutes.js';
import userRoute from './routes/userRoute.js';

let corsOptions = {
    origin: 'http://localhost:5173',
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/book', bookroutes);
app.use('/user', userRoute);
app.use('/student', studentroutes);


try {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Listening to port ${port}...`);
    });

} catch (e) {
    console.error(e);
}