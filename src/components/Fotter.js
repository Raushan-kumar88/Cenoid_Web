import React from 'react'
// import reactRouterDom from 'react-router-dom'
import './fotter.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

function Fotter() {
  return (
    <>
        <div className='fotter'>
            <div className="img">
                <img src="https://crocksi.xendekweb.com/wp-content/uploads/2023/04/CROCKSI-New-update.png" alt="logo" />
                <p>At Crocksi, we believe that everyone 
                deserves to have shoes that not only look great, 
                but also feel comfortable and fit perfectly.</p>
            </div>
            <div className="sec">

                <h1>GENERAL</h1>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Our Shop</h3>
                <h3>Contact</h3>
            </div>
            <div className="sec">
                <h1>KNOW US</h1>
                <h3>Privacy Policy</h3>
                <h3>Shop</h3>
                <h3>Cart</h3>
                <h3>Support</h3>
            </div>
            <div className="sec">
                <h1>GET IN TOUCH</h1>
                <h3>267-608-7267</h3>
                {/* <div className='flex bg-slate-300'><FiMail/><h3>267-608-7267</h3></div> */}
                <h3>malikantoinette78@gmail.com</h3>
                <div className='icon flex text-xl space-x-4 mt-5 ml-4'>
                <BsFacebook/> <AiFillLinkedin/> <BsInstagram/> <FiMail/>
                </div>
            </div>
        </div>
    </>

  )
}

export default Fotter