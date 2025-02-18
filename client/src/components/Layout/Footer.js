import React from 'react'
import { SiJoplin } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'> 
        <h4>
        <SiJoplin />
        Job Portal
        </h4>
        <ul className='about'>
          <li>About us</li>
          <li>Careers</li>
          <li>Credits</li>
        </ul>
        <ul className='help'>
          <li>Help center</li>
          <li>Privacy Policy</li>
          <li>Terms & conditions</li>
          <li>Trust & safety</li>
        </ul>
        <div className='download-app'>
          <p>Download app</p>
          <img src='https://th.bing.com/th/id/OIP._XovafiIQQ0Wk6F_qRRiZwHaBN?w=1024&h=167&rs=1&pid=ImgDetMain' alt='download-app'/>
        </div>
      </div>
      <p>All rights reserved &copy; Rahul</p>
    </div>
  )
}

export default Footer