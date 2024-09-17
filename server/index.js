import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/AuthRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const databaseUrl = process.env.DATABASE_URL;

app.use(cors({
  origin: ['http://localhost:5173', process.env.DATABASE_URL, 'https://localhost:5174'],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: false,
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);

const server = app.listen(port, () => {
  console.log(`Server is running https://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('DB is currently running on ');
});

mongoose
  .connect(databaseUrl)
  .then(() => console.log('DB Connection Successfully'))
  .catch((error) => console.log(error.message));
