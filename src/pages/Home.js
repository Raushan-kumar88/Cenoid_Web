import React from 'react'
// import ImageSlider from '../components/ImageSlider';
import Abouts from '../components/Abouts';
import Bannerdown from '../components/Bannerdown';
import Card1 from '../components/Card1';
import Scorlling from '../components/Scorlling';
import Description from '../components/Description';
import Des from '../components/Des';
import Fotter from '../components/Fotter';
import Copyright from '../components/Copyright';



export default function Home() {
    // const images = [
    //     'https://source.unsplash.com/random/800x600',
    //     'https://source.unsplash.com/random/800x600',
    //     'https://source.unsplash.com/random/800x600',
    // ];

  return (
      <div>
          {/* <h1>home</h1> */}
            
            <Bannerdown/>
            <Abouts/>
            <Card1 name="Best Selling Products" des="Discover Our Newest Products" 
            />
            <Scorlling/>
            <Card1 name="Latest Collections" des="Discover The Latest Fasion Trends" 
            />
            <Description/>
            <Card1 name="Best Selling Products" des="Discover Our Best-Selling Products" 
            />
            <Des/>
            <Fotter/>
            {/* <Copyright/> */}
          {/* <ImageSlider images={images}/> */}
          {/* <div className="max-w-xs rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <img className="w-full h-48 object-cover" src="https://source.unsplash.com/random/800x600" alt="Product" />
              <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Product Name</div>
                  <p className="text-gray-700 text-base">$19.99</p>
              </div>
          </div> */}
          

            


          {/* <FaBeer /> */}
    </div>
  )
}
