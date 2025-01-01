

export default function Card({item}) {
  return(
    <div className="" >
      <div  id={item._id} >
        <img 
        className="h-90 w-90 object-cover "
        src={item.image} alt={item.name} />
      </div>
      <div className="flex justify-between py-3 font-bold" >
        <p
        className="text-sm"
        >{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className="flex justify-between text-teal-600" >
        <button
        className="border-solid border-2 p-1 px-2 text-sm rounded-full border-teal-600 font-bold"
        >Add to card</button>
        <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
      </div>
    </div>
  )
}