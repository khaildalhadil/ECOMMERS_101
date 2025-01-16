import {create} from 'zustand';

const userStore = create((set) => ({
  // init
  user: null,
  token: '',
  // method
  setUser: (userData)=> set({user: userData}),
  setToken: (tokenFromUser)=> set({token: tokenFromUser})
}))

export default userStore;