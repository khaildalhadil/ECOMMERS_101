import {create} from 'zustand';
import axios from 'axios';

const productsStore = create((set) => ({
  products: [],
  addProducts: (newProducts) => set((state) => ({products: [...state.products, newProducts]})),
  // updatProducts: ()
  deleteProduct: async (id)=>  {
    const res = await axios.delete(`http://127.0.0.1:8000/items/${id}`);
    set((state) => ({products: state.products.filter(el => el.id != id)}))
  },
  fetchProducts: async () => {
    const res = await fetch('http://127.0.0.1:8000/items');
    const data = await res.json();
    set({products: data.data})
  },
  
}))

export default productsStore;