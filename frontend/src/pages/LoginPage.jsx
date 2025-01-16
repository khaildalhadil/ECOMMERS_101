import { useState } from "react";
import axios from "axios";
import userStore from "../store/userStore";

export default function Register() {

  const {token, user} = userStore();

  const [loginData, setLogInData] = useState({
    email: '',
    password: '',
  })

  async function handleSnedDataToDataBase(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/login', loginData);
      const data = res.data;
      console.log(data);
    } catch(err) {
      console.log(err.message, err);
    }
    // console.log(res);
    // const dataFromBackEnd = res.data;
    // console.log(dataFromBackEnd);
  }
  console.log("HI")
  return(
    <div className="text-white w-fit m-auto mt-20 bg-slate-700 rounded" >
      <div className=" p-10 " >
        <h1 className="text-4xl font-bold">Login Page</h1>
        <form className="flex flex-col gap-10 mt-10" >
          <div className="">
            <input 
            autoComplete='username'
            value={loginData.email}
            onChange={(e)=> setLogInData({...loginData, email: e.target.value})}
            
            className="w-full h-12 p-2 text-3xl font-bold text-black rounded outline-0"
            placeholder="Enter Your Email" type="email" />

          </div>
          <div>
            <input 
            autoComplete='current-password'
            value={loginData.password}
            onChange={(e)=> setLogInData({...loginData, password: e.target.value})}
            className="w-full h-12 p-2 text-3xl font-bold text-black rounded outline-0"
            placeholder="Enter Your password" type="password" />
          </div>
          <div>
            <button
            onClick={handleSnedDataToDataBase}
            className="w-full h-12 p-2 text-3xl font-bold text-while bg-green-600 rounded"
            >Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}