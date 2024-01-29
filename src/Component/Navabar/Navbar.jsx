import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import {NavLink } from 'react-router-dom'
import Menu from '../../Image/Menu.png'
const Navbar = () => {

  return (
    <div>
      <div className='flex flex-row justify-between p-2 bg-[#192A56] h-[80px] w-[100%] '>
        <Paragraph ParagraphText="React Router Practice" className="  text-[24px]  md:text-[40px] text-[#e4dede] font-[600] " />
        <ul className=' hidden lg:flex flex-row  justify-between  mt-4 px-4  text-[20px] text-[#edeaea] font-[600]'>
          <li className='px-2'>
            <NavLink to='about/contact' style={({isActive})=>({
              color:isActive ?'#EC4849':"",
              borderBottom:isActive ?"2px solid #EC4849":""
            })} >
              contact
            </NavLink>
          </li>
          <li className='px-6'>
            <NavLink to='about '  style={({isActive})=>({
              color:isActive ?'#EC4849':"",
              borderBottom:isActive ?"2px solid #EC4849":""
            })} >
              About
            </NavLink>
          </li >
          <li className='px-6 w-[100px] bg-[#43d0f7] pt-2 rounded-[24px]'>
            <NavLink to='/login'>
              Login
            </NavLink>
          </li>
        </ul>
        <div className='block lg:hidden mt-[-10px]'>
       <img src={Menu} alt="Menu" className="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
