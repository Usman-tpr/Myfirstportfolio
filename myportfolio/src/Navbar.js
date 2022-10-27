import React from "react";
import { NavLink } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import "./webnav.css";

const Navbar = () => {
    const[expandmenu,setexpandmenu]=useState('true')
    const handlemenu=()=>{
        setexpandmenu(!expandmenu)
    }
  return (
    <React.Fragment>
    <div className="head ">
      <div className="container ">
        <div className="row ">
          <div className="title col-md-4">
            <h1>Usman Ali</h1>
          </div>
      
          <div className="navbar offset-md-4 col-md-4 ">
            <nav >
              <NavLink to='/'> Home</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/about'>About me</NavLink>
             <NavLink to='/skill'>My Skills</NavLink>
            </nav>
          </div>
          <div className="list col-2" onClick={handlemenu}>
           
{expandmenu?( <GiHamburgerMenu className="icon "size={30}/>):(<AiOutlineClose size={30}/>)}
          </div>
         
        </div>
      </div>
   
    </div>
    <div className={expandmenu?'unshow':'menue offset-7 col-2  flex-column'}>
              <a href="no">Home</a>
              <a href="no">Contact Me</a>
              <a href="no">About me</a>
              <a href="no">Skills</a>
      </div>
      </React.Fragment>
  );
};

export default Navbar;
