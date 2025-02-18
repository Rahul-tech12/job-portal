import React from 'react'
import { SiJoplin } from "react-icons/si";

const Header = () => {
  return (
    <div className='navbar' >
        <div className='navbar-content'>
            <SiJoplin />
            <h2>Job Portal</h2>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/jobs'>Jobs</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
                
            </ul>
            <div className='button'>
                <a href='/register'>Register</a>
                <a href='/login'>Login</a>
                <a href='/recruiter'>Not a jobseeker?</a>
            </div>
        </div>
    </div>
  )
}

export default Header