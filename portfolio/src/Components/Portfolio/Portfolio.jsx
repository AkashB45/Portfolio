import React from 'react'
import './Portfolio.css'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import {Swiper,SwiperSlide} from 'swiper/react'
import { useContext } from 'react'
import { Themecontext } from '../../App'
import 'swiper/css'
const Portfolio = () => {
    const {darkmode,setDarkmode} = useContext(Themecontext);

  return (
    <div className="portfolio" id='Projects'>
        <span style={darkmode?{color:'white'}:null}>Recent Project</span>
        <span> Works..</span>
        <Swiper 
        spaceBetween={30}
        grabCursor={true}
        slidesPerView={3}
        className='portfolio-slider'>
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio