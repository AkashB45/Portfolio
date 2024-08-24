import React from 'react'
import './Experience.css'
import { useContext } from 'react'
import { Themecontext } from '../../App'
const Experience = () => {
  const {darkmode,setDarkmode} = useContext(Themecontext);

  return (
    <div className="experience" id='About'>
      <div className="achievement" >
        <div className="circle" style={darkmode?{color:'black'}:null}>18+</div>
        <span>Completed</span>
        <span>Courses</span>
      </div>
      <div className="achievement">
        <div className="circle" style={darkmode?{color:'black'}:null}>10+</div>
        <span>Finished</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={darkmode?{color:'black'}:null}>2+</div>
        <span>Attended</span>
        <span>Internships</span>
      </div>
    </div>
  )
}

export default Experience