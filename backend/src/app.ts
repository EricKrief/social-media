import express from 'express';
import userRouter from './routes/users';

const app = express();
app.use(express.json());

module.exports = {}
app.use('/api/users', userRouter);

app.listen(3000, () => {
    console.log('Server running!');
});