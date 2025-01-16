import User from '../models/userSchmema.js';
import {createJWT} from '../util/JWT.js';
import bcrypt from 'bcrypt';

export const register = async (req, res, next) => {
  console.log('Hi in register route in node ', req.body);
  try {
    const {firstname, lastname, email, password} = req.body;
    // if (!)
    const hishedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hishedPassword
    })
    
    const newUserData = await newUser.save();
    
    const token = createJWT({id: newUser._id});

    res.status(200).json({status: 'success', token, newUser});

  } catch(err) {
    res.status(400).json({status: 'fall', err: err.message, allError: err})
  }
}

export const logIn = async (req, res, next) => {
  
  try {
    const {email, password} = req.body;
    const currentUser = await User.findOne({email});

    if (!password || !email) return res.status(401).json({status: 'fall', message:'email and password are required'});
    if (!currentUser) return res.status(401).json({status: 'fall', message:'user not found '})

    const match = await bcrypt.compare(password, currentUser.password);
    if (!match) return res.status(401).json({status: 'fall', message: 'email or password is wrong'})

    const token = createJWT({id: currentUser._id});

    res.status(200).json({status: 'success', token, currentUser});

  } catch(err) {
    res.status(400).json({status: 'fall', message: err.message, allError: err})
  }
}
