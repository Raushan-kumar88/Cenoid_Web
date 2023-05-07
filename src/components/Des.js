import React from 'react'
import './Bannerdown.css'
function Des() {
  return (
<>
     <div className="demo6  max-sm:h-96 relative bg-center bg-cover h-72 mt-20" style={{backgroundImage: "url(https://picsum.photos/id/1003/1600/900)"}}>
  <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
  <div className="absolute max-sm:left-60  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ">
    <h1 className="font-bold text-lg -ml-40 max-sm:text-xl max-sm:mx-4 max-sm:mt-12 ">Upgrade Your Style Today</h1>
    <div className='justify-start flex float-left max-sm:inline-block'>
    <p className="mt-4 text-4xl -ml-40 max-sm:text-xl max-sm:mx-4  ">Shop Now and Experience the Comfort and Quality of Crocksi Shoes!</p>
    <button className='bg-red-500 w-52 h-10 text-center mt-10 ml-32 font-bold rounded-sm max-sm:mx-5 max-sm:mt-16'>Shop Now</button>
    </div>
    
  </div>
</div>
   </>
  )
}

export default Des

