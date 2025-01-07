import { useState } from "react";

export default function UpdateUI({id, onCancel, dataToSend}) {

  const [dataFromForm, setDataFromForm] = useState({
    name: '',
    urlIamge: '',
    price: ''
  })
  
  return(
  <div className="w-1/4 bg-slate-800 z-10 translate-x-1/2 translate-y-1/2 absolute right-1/2 bottom-1/2 p-6">
    <h1 className="text-2xl font-bold mb-7">
      Update Product
    </h1>
    <div className="flex flex-col ">
      <div>
        <input 
          name="name"
          value={dataFromForm.name}
          onChange={(e)=> setDataFromForm({...dataFromForm, name: e.target.value})}
          placeholder="Enter now Name"
          type="text" 
          className="w-full h-10 p-2 text-white bg-inherit border border-gray-600 font-bold text-2xl mb-5" 
          />
      </div>
      <div>
        <input 
          name="urlIage"
          value={dataFromForm.urlIamge}
          onChange={(e)=> setDataFromForm({...dataFromForm, urlIamge: e.target.value})}
          placeholder="Enter now URL image"
          className="w-full h-10 p-2 text-white bg-inherit border border-gray-600 font-bold text-2xl mb-5" 
          type="text" />
      </div>
      <div>
        <input 
          name="price"
          value={dataFromForm.price}
          onChange={(e)=> setDataFromForm({...dataFromForm, price: e.target.value})}
          placeholder="Enter now Price"
          className="w-full h-10 p-2 text-white bg-inherit border border-gray-600 font-bold text-2xl mb-5" 
          type="text" />
      </div>
    </div>
    <div className="flex gap-10">
      <button 
        className="p-2 bg-slate-700 font-bold rounded"
        onClick={()=> dataToSend(dataFromForm)}
        >Update</button>
        <button 
        onClick={()=> onCancel(false)}
        >Cancel</button>
    </div>
  </div>
  )
}