
import {useContext, createContext, useState} from 'react';

const myItems = createContext();

const MyContextProvoider = ({children}) => {
  const [items, setItems] = useState([]);

  async function getItems() {
    const res = await fetch('http://127.0.0.1:8000/items');
    const data = await res.json();
    setItems(data.data);
  }

  return(
    <MyContextProvoider value={{items, getItems}}>
      {children}
    </MyContextProvoider>
  )
}

function useMyItesm(){
  const context = useContext(myItems);
  return context;
}

export {useMyItesm, MyContextProvoider}