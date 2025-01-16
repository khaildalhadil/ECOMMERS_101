import express from "express";
const app = express();

import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());
app.use(express.static('public'))
app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  next();
}); 


export default app;

import itemRouter from './routers/itemRouters.js';
app.use('/', itemRouter);

import userRouter from './routers/userRouters.js';
app.use('/', userRouter)

app.use('*', (req, res, next)=> {
  res.status(404).json({
    message: 'Page not found'
  })
})