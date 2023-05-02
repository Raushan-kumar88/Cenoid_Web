import React from 'react'
import style  from './hello.module.css'
// import DiamondIcon from '@mui/icons-material/Diamond';
// import { IoDiamond } from 'react-icons/io';
import { IoDiamond } from 'react-icons/io5';



import aboutimg from '../Images/aboutimg.jpg'
// import T1 from '../Images/back1.png'
export default function Abouts() {
  return (
    <>
    <div className={style.home}>
    <div className={style.containerL}>
        {/* <h4 className=''><IoDiamond size={30} className='text-[#002964]'/></h4> */}
        <div className='relative w-12 h-12  bg-gray-300 rounded-bl-2xl ml-14'>
        <IoDiamond  size={30} className='text-[#002964] absolute top-[20%] left-[20%] '/>
        </div>
        <h3>ABOUT US</h3>
        <h2>Selected materials designed for comfort and sustainability</h2>
        <p>At Crocksi, we believe that everyone deserves to have shoes that not only look great, but also feel comfortable and fit perfectly. That’s why we offer a wide range of customized shoes for men and women, designed to your exact specifications and tailored to your unique measurements.</p>
        <hr />
        <button className='mt-8'>Contact Us</button>
    </div>
    <div className={style.containerR}>
      {/* <img className='w-10' src={T1} alt="" /> */}
      <img src={aboutimg} alt='dkemo'/>
    </div>
    </div>
    </>
  )
}
