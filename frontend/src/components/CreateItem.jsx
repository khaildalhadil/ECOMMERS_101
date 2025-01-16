import { useState } from "react";
import {useProductStore} from '../store/userStore';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import productsStore from "../store/productsStore";

export default function CreateItem() {

  const {products} = productsStore();
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
      name: '',
      urlIamge: '',
      price: 0,
    })
    
    async function handelSnedDataToDataBase(e) {
      e.preventDefault();
      try {
        const res = await axios.post("http://127.0.0.1:8000/items/add", newProduct);
        const data = await res.data;
        console.log('from in ', data.status, data.message);
        // addProducts(newProduct)
        navigate("/")
      } catch (err) {
        console.log(err, err.message);
      }
    }

  return(
    <div 
    className=" bg-slate-900 h-screen"
    >
      <form
      className="w-1/2 m-auto pt-32"
      >
        <h1
        className="text-5xl font-bold text-white text-center mb-20 "
        >Create New Product</h1>
        <div 
        className="w-full bg-slate-800 flex flex-col gap-4 p-8" 
        >
          <div className="w-full ">
            <input 
            value={newProduct.name}
            onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            name="name"
            placeholder="Product Name"
            className=" text-white w-full py-3 px-2 bg-inherit border border-gray-400 rounded" 
            type="text" />
          </div>
          <div>
            <input
            value={newProduct.urlIamge}
            onChange={(e) => setNewProduct({...newProduct, urlIamge: e.target.value})}
            name="urlIamge"
            placeholder="urlIamge"
            className=" text-white w-full py-3 px-2 bg-inherit border border-gray-400 rounded" 
            type="text" />
          </div>
          <div>
            <input
            value={newProduct.price}
            onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            name="price"
            placeholder="price"
            className=" text-white w-full py-3 px-2 bg-inherit border border-gray-400 rounded" 
            type="text" />
          </div>
          <div>
            <button
            onClick={handelSnedDataToDataBase}
            className="  w-full bg-sky-300 p-2 rounded text-1xl text-gray-800 font-bold "
            >Add Prodcut</button>
          </div>
        </div>
      </form>
    </div>
  )
}