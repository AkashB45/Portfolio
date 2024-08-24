import React from 'react'
import './Card.css'
import { useContext } from 'react'
import { Themecontext } from '../../App'
const Card = ({emoji,heading,detail}) => {
  const {darkmode,setDarkmode} = useContext(Themecontext);

  return (
    <div className="c-card" >
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card 