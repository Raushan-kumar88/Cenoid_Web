import React from 'react'
import './description.css'
function Description() {
  return (
    <>
        <div className="contner">
            <div className="contain">
                <div>
                <h2>
                Get Creative with Crocksi
                </h2>
                <p className='mt-4 mx-20 text-base'>At Crocksi, we’re all about encouraging creativity and self-expression. 
                That’s why we offer our customers the <br/> unique opportunity to 
                design their own one-of-a-kind shoes using our online customization platform.</p>
                <div className='box flex'>
                    <div className="box1">
                    <div> <span className='flex space-x-8'><h4 className='ml-4 text-white text-lg font-semibold'>01  CUSTOMIZABLE DESIGNS</h4></span></div>
                    <p>Choose from a variety of designs, colors, and materials to 
                    create your perfect shoes.</p>
                    </div>
                    <div className="box2">
                    <div> <span className='flex space-x-8'><h4 className='ml-4 text-white text-lg font-semibold'>02  CUSTOMIZABLE DESIGNS</h4></span></div>
                    <p className=''>Choose from a variety of designs, colors, and materials to 
                    create your perfect shoes.</p>
                    </div>
                </div>
                <div className='box flex'>
                    <div className="box1">
                    <div> <span className='flex space-x-8'><h4 className='ml-4 text-white text-lg font-semibold'>03  CUSTOMIZABLE DESIGNS</h4></span></div>
                    <p>Choose from a variety of designs, colors, and materials to 
                    create your perfect shoes.</p>
                    </div>
                    <div className="box2">
                    <div> <span className='flex space-x-8'><h4 className='ml-4 text-white text-lg font-semibold'>04  CUSTOMIZABLE DESIGNS</h4></span></div>
                    <p className=''>Choose from a variety of designs, colors, and materials to 
                    create your perfect shoes.</p>
                    </div>
                </div>
                </div>
                <div>
                <img src="https://crocksi.xendekweb.com/wp-content/uploads/2023/03/WomenS-Casual-Floral-Flowers-Round-Toe-Crocs-Slippers-10.webp" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Description