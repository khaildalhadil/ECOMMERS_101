import Carousel from '../components/Carousel.jsx'

export default function Slider() {
  const slides = [
    "./images/slide1.png",
    // "./images/slide2.png",
    "./images/slide3.png",
  ]
  return(
    <div className="pt-28 w-4/5 m-auto relative py-5 " >
      <Carousel >
        {slides.map((imgUrl, i)=>(
          <img 
          className="w-full"
          src={imgUrl} alt="slide" />
        ))}
      </Carousel>



    </div>
  )
}