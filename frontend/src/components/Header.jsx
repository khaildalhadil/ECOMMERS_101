import { Link, NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div 
    className=
      " w-2/3 text-lg text-white  top-4 right-1/2 m-auto py-4 px-2 flex justify-between items-center rounded bg-">
      <div>
        <Link to="/">
          <button>
            <i 
            class="fa-solid fa-cart-shopping"></i>
          </button>
        </Link>
      </div>
      <div className="flex gap-10 ">
        <NavLink to="/createItem" >
          <button
          className="bg-slate-800 rounded px-3 py-1 cursor-pointer"
          ><i class="fa-regular fa-square-plus"></i></button>
        </NavLink>
        <button
        className="bg-slate-800 rounded px-3 py-1 cursor-pointer"
        ><i class="fa-regular fa-sun"></i></button>
      </div>
    </div>
  )
}