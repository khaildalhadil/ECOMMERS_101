import app from './app.js';
import mongoose from 'mongoose';

const URL = process.env.LINK.replace('<db_password>', process.env.PASSWORD);

mongoose.connect(URL)
  .then(()=> console.log('connected to mongoose ✔'))
  .catch((err)=> console.log(err.message))

app.listen(8000, ()=> {
  console.log("Listen in port 8000")
})