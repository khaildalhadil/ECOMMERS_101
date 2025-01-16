import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div 
    className=
      " w-2/3 text-lg text-white  top-4 right-1/2 m-auto py-4 px-2 flex justify-between items-center rounded bg-">
      <div className="flex gap-10 ">
        <NavLink to="/login" >
          <button
          className="px-4 cursor-pointer py-2 rounded bg-slate-700"
          >Login </button>
        </NavLink>
        <NavLink to="/register" >
          <button
          className="px-4 cursor-pointer py-2 rounded bg-slate-700"
          >Register </button>
        </NavLink>
      </div>
      <div className="flex gap-10 items-center">
        <NavLink to="/createItem" >
          <button
          className="bg-slate-800 rounded px-3 py-1 cursor-pointer"
          ><i className="fa-regular fa-square-plus"></i></button>
        </NavLink>
        <button
        className="bg-slate-800 rounded px-3 py-1 cursor-pointer"
        ><i className="fa-regular fa-sun"></i></button>
        <Link to="/">
          <button>
            <i 
            className="fa-solid fa-cart-shopping"></i>
          </button>
        </Link>
      </div>
    </div>
  )
}