import Card from '../components/Card.jsx';

export default function Products () {
  return(
    <div className="bg-white w-full py-4 font-mono" >
      <div className="w-4/5 m-auto " >
        <h1 className='text-2xl py-10' >All Products For You!</h1>
        <div className=' grid grid-cols-4 gap-10' >
          
          {/* {products.map((item, i) => {
            return <Card key={i} item={item} />
          })} */}
        </div>
      </div>
    </div>
  )
}

