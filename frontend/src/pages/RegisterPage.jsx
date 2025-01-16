import {useState} from 'react';
import axios from "axios";
import {useFormik} from 'formik';
import * as Yup from 'yup';
// import {  } from 'zustand';
import useStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const {setUser, setToken} = useStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().min(2, 'to short!').max(10, 'to Long!').required('firstname is required'),
      lastname: Yup.string().min(2, 'to short!').max(10, 'to Long!').required('last name is required'),
      email: Yup.string().required('Email is required').email('Invalid Email Address'),
      password: Yup.string().required('Password is required').max(50, 'to long').min(7, 'password should be more then 8 charcters'),
    }),
    async onSubmit(values){
      try {
        const res = await axios.post('http://127.0.0.1:8000/register', values);
        const data = await res.data;
        const {token, newUser} = data;
        setToken(token);
        setUser(newUser);
        navigate('/')
      } catch (err) {
        console.log(err.response.data.err);
      }
    },
  })

  // console.log(formik.errors);
  return(
    <div className="text-white w-fit m-auto mt-20 bg-slate-700 rounded" >
      <div className=" p-10 " >
        <h1 className="text-4xl font-bold">registration Page</h1>
        
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-10 mt-10" >
            <div className="">
              <input 
              name='firstname'
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-12 p-2 text-3xl font-bold text-black rounded outline-0"
              placeholder="Enter Your firstname" type="text" />
              {/* <div>
                <h1 className='text-9xl bg-red-800 '>
                  {formik.errors.email && formik.touched.email}
                </h1>
              </div> */}
            </div>
            <div className="">
              <input 
              name='lastname'
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-12 p-2 text-3xl font-bold text-black rounded outline-0"
              placeholder="Enter Your lastname" type="text" />
            </div>
            <div className="">
              <input 
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-12 p-2 text-3xl font-bold text-black rounded outline-0"
              placeholder="Enter Your Email" type="email" />
            </div>
            <div>
              <input 
              autoComplete='current-password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full h-12 p-2 text-3xl font-bold text-black rounded outline-0"
              placeholder="Enter Your password" type="password" />
            </div>
            <div>
              <button
              type='sumbit'
              className="w-full h-12 p-2 text-3xl font-bold text-while bg-green-600 rounded"
              >register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}