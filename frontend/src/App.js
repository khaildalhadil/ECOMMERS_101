import { useEffect, useState } from 'react';

import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import Slider from './components/Slider.jsx'

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() =>{
    async function addItemsFromApi() {
      const getItems = await fetch('http://127.0.0.1:8000/items');
      const items = await getItems.json();
      console.log(items);
    }
    addItemsFromApi();
   }, [])

  return (
    <div className='bg-red-100 h-screen' >
      {/* <Header/>
      <Slider />
      <Products /> */}
    </div>
  )
}