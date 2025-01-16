import axios from "axios";
import { useState } from "react";
import UpdateUI from './UpdateUI.jsx';
import { Navigate, useNavigate } from "react-router-dom";
import productsStore from "../store/productsStore";

export default function Card({item}) {

  const {products, deleteProduct, fetchProducts} = productsStore();

  const [openUpdateUI, setOpenUpdateUI] = useState(false);
  // console.log(item);

  async function handleDelete(id) {
    deleteProduct(id);
    setOpenUpdateUI(false);
  }

  async function dataToSend(data) {
    try {
      // data = data.filter
      const req = await axios.patch(`http://127.0.0.1:8000/items/${item._id}`, data);
      // const data = req.json();
      // console.log(data);
      setOpenUpdateUI(false);
    } catch(err) {
      console.log({err, message: err.message});
    }
  }

  return(
    <div className="text-white" >
      {openUpdateUI && <UpdateUI id={item._id} onCancel={setOpenUpdateUI} dataToSend={dataToSend} />}
      {openUpdateUI && 
        <div 
          onClick={()=> setOpenUpdateUI(false)} 
          className="h-full w-full bg-gray-900 cursor-pointer opacity-50 translate-x-1/2 translate-y-1/2 absolute right-1/2 bottom-1/2" >
        </div> 
      }
      <div  id={item._id} >
        <img 
        className="h-96 m-auto object-cover "
        src={item.urlIamge} alt={item.name} />
      </div>
      <div className="flex justify-between py-3 px-1 font-bold" >
        <p
        className="text-sm"
        >{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className="flex justify-between text-while items-center px-1" >
      <div>
        <i
        onClick={() => setOpenUpdateUI(true)}
        className="fa-regular fa-pen-to-square p-2 rounded bg-sky-600 mr-3 cursor-pointer"></i>
        <i
        onClick={() => handleDelete(item._id)}
        className="fa-solid fa-trash-can p-2 rounded bg-red-600 cursor-pointer"></i>  
      </div>
        <div>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </div>
    </div>
  )
}