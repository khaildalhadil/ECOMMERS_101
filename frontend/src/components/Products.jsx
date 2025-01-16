import Card from '../components/Card.jsx';
import { useMyItesm } from '../itemsContext.jsx';
import productsStore from "../store/productsStore";
import { useEffect } from 'react';

export default function Products () {

  const {products, fetchProducts, deleteProduct} = productsStore();
  // const {items, getItems} = useMyItesm();
  
  useEffect(() =>{
    getItems()
  }, [items])
  
  console.log("Re")
  return(
    <div className=" w-2/3 py-4 font-mono m-auto" >
      <div className="w-full m-auto " >
        <h1 className='text-3xl py-10 text-center text-white' >All Products For You!</h1>
        <div className=' grid grid-cols-3 gap-10' >
          
          {products.map((item, i) => {
            return <Card key={i} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

