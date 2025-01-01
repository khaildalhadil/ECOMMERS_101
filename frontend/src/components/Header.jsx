

export default function Header() {
  return (
    <div 
    className=
      " z-20 bg-white w-4/5 text-lg absolute top-4 right-1/2 translate-x-1/2 py-4 px-2 flex justify-between items-center rounded text-gray-600">
      <div>
        <img 
        className="h-10"
        src="./images/logo.png" alt="logo" />
      </div>
      <div className="flex gap-2 " >
        <p><a href="">Home</a></p>
        <p><a href="">Home</a></p>
        <p><a href="">Home</a></p>
        <p><a href="">Home</a></p>
        <p><a href="">Home</a></p>
      </div>
      <div className="flex gap-4 ">
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
        <button><i class="fa-solid fa-cart-shopping"></i></button>
        <button><i class="fa-solid fa-user"></i></button>
      </div>
    </div>
  )
}