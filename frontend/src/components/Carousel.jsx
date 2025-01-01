import {useState} from 'react';

export default function Carousel({children: slides}) {

  const [point, setPoint] = useState(0);

  function incrment() {
    point < 1 && point >= 0 ? setPoint((cur)=> cur + 1): setPoint(0);
  }
  
  function decrimant() {
    point <= 2 && point > 0 ? setPoint((cur)=> cur - 1): setPoint(2);
  }

  return(
    <div className="overflow-hidden relative">
      <div className="flex" >
        {slides[point]}
      </div>
      <div className="absolute w-full h-full translate-y-1/2 top-0 text-slate-800" >

        <button onClick={decrimant}>
          <i class="fa-solid fa-chevron-left absolute top-2  cursor-pointer left-2 text-2xl px-2 rounded-full bg-slate-100"></i>
        </button>

        <button onClick={incrment}>
          <i class="fa-solid fa-chevron-right absolute top-2 cursor-pointer right-2 text-2xl px-2 rounded-full bg-slate-100"></i>
        </button>
        
      </div>

      <div className="absolute translate-y-1/2 translate-x-1/2 right-1/2 flex gap-10 bottom-14 text-lg text-slate-800">
        <i class="fa-regular fa-circle-dot cursor-pointer"></i>
        <i class="fa-regular fa-circle-dot cursor-pointer"></i>
        <i class="fa-regular fa-circle-dot cursor-pointer"></i>
      </div>
    </div>
  )
}