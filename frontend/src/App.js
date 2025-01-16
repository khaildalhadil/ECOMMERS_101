import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Header from './components/Header.jsx'
import Products from './components/Products.jsx'
import Slider from './components/Slider.jsx'
import CreateItem from './components/CreateItem.jsx'
import NotFound from './pages/NotFound.jsx';
import Login from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import { MyContextProvoider } from './itemsContext.jsx';

export default function App() {

  return (
  <BrowserRouter >
    <div className='bg-slate-900 h-screen' >
      <Header/>
      <Routes>
        <MyContextProvoider>
          <Route path='/' element={<Products /> } />
          <Route path='/createItem' element={<CreateItem />} />  
        </MyContextProvoider>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}