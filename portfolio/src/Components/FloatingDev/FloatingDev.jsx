import React from 'react'
import '../FloatingDev/FloatingDev.css'
import { useContext } from 'react'
import { Themecontext } from '../../App'
const FloatingDev = ({image,txt1,txt2}) => {
  const {darkmode,setDarkmode} = useContext(Themecontext);

  return (
    <div className="floatingDev" style={darkmode?{color:'black'}:null}>
        <img src={image} alt="" />
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDev