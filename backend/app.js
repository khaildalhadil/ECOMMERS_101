import express from "express";
const app = express();

import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());
// app.use(express.statis('public'))

export default app;

import router from './routers/itemRouters.js';
app.use('/', router);

app.use('*', (req, res, next)=> {
  res.status(404).json({
    message: 'Page not found'
  })
})