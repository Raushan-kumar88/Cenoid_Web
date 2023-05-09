import React from 'react'
import { NavLink } from 'react-router-dom';
import card1 from '../Images/card1.webp'
import card2 from '../Images/card2.webp'
import card3 from '../Images/card3.webp'
import card4 from '../Images/card4.webp'

import './card1.css'
import { BiSearch } from 'react-icons/bi';
const Card1 = (props) => {
    const cards = [
        {
          image: card1,
          title: 'Bougie Dramatic Crocksi',
          description: '$195.00',
        },
        {
          image: card2,
          title: 'Bougie Dramatic Crocksi',
          description: '$195.00',
        },
        {
          image: card3,
          title: 'Bougie Dramatic Crocksi',
          description: '$195.00',
        },
        {
          image: card4,
          title: 'Bougie Dramatic Crocksi',
          description: '$195.00',
        },
      ];
  return (
    <>
    <div className="main">
    <h1>{props.name}</h1>
    <p>{props.des}</p>
        <div className="card-row">
      {cards.map((card) => (
        <div className="card">
            <img className='' src={card.image} alt="" />
            <div className="hover">
            <h2>{card.title}</h2>
            <h3>{card.description}</h3>
            <div className='demo4 flex align-middle space-x-20 text-center'>
            <NavLink id='h4'  to=''>SELECT OPTIONS</NavLink>
            <NavLink className='mt-2' to=''><BiSearch/></NavLink>
            </div>
            {/* <h4 id='h4'>SELECT OPTIONS <span>--></span></h4> */}
            </div>

        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Card1