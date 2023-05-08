import React from 'react'
import './Bannerdown.css'
function Bannerdown() {
  return (
   <>
  <div className="demo6 relative w-full h-screen  object-cover" style={{backgroundImage: "url(https://crocksi.xendekweb.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-09-at-02.21.28.jpg)"}}>
  <div className="demo61 absolute inset-0 bg-gray-900 opacity-40"></div>
  <div className="absolute max-sm:left-24  transform left-32 mt-48 text-white ">
    <h1 className="text-5xl max-sm:text-4xl max-sm:mb-8">Step Up Your Style Game <br/> with Crocksi Fashion <br/>House Customized Shoes</h1>
    <p className="mt-4 text-sm max-sm:text-2xl max-sm:mb-8">Make a Statement with Your Feet – Crocksi Custom Shoes, Personalized Just for You</p>
    <button className="mt-8 bg-red-700 text-white py-2 px-4 rounded-sm hover:bg-gray-300 hover:text-gray-900 transition duration-200 ease-in-out">Get Started</button>
  </div>
</div>
   </>
  )
}

export default Bannerdown