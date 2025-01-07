import {create} from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({products}),
  createProduct: async (newProdcuts) => {

    if (
        !newProdcuts.firstName ||  !newProdcuts.fullName ||  !newProdcuts.imgURL || 
        !newProdcuts.price || !newProdcuts.dec
      ){
        return {success: false, message: 'please fill in all fields.'}
    }
    const res = await fetch("http://localhost:8000/items/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'GET, PUT',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(newProdcuts)
    })
    const data = await res.json();
    set((state)=> ({products: [...state.products, data.newItem]}))
    return {success: true, message: 'Successfully added to database ✔'}
    }
  })
)


