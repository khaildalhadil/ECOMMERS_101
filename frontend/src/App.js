import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import Slider from './components/Slider.jsx'
import CreateItem from './components/CreateItem.jsx'

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() =>{
    async function addItemsFromApi() {
      const getItems = await fetch('http://127.0.0.1:8000/items');
      // 
      const {data} = await getItems.json();
      setItems(data);
    }
    addItemsFromApi();
   }, [items])

  return (
  <BrowserRouter >
    <div className='bg-slate-900 h-screen' >
    <Header/>
    <Routes>
      <Route path='/' element={<Products products={items} /> } />
      <Route path='/createItem' element={<CreateItem />} />  
    </Routes>
    </div>
  </BrowserRouter>
  )
}