import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from "../constants"
import {logo, menu, close} from "../assets"
const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={()=>{
          setActive('');
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-100 h-100 -ml-10 mr-5' width={200}/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Wahaj <span className='sm:block hidden'> Javed</span></p>
        </Link>
        <ul className='link-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar