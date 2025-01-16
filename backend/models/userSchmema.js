import mongoose from 'mongoose';

const UserChema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Enter Your First Name']
  },
  lastname: {
    type: String,
    required: [true, 'Enter Your Last Name']
  },
  email: {
    type: String,
    required: [true, 'Enter Your Email'],
    unique : [true, 'email have being register before !!!']
  },
  password: {
    type: String,
    required: [true, 'Enter Your Password']
  }
})

const User = mongoose.model('User', UserChema);

export default User;