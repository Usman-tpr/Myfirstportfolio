import React from "react";
import "./Banner.css";
import TypeWriter from 'typewriter-effect'
import image from "./js.png";
import  reactimage from './react.png'
import bootimage from './bootstrap.jpg'
import {useState} from 'react'

const Banner = () => {
  const a= ''
  const Banner=[
    {
      showpic:image,
      title:'Javascript',
      des:"Javascript Is most Important Language for Frontend.JavaScript used for functionality in web pages.   Javascript also used in backend ,app development ,blokchain Development and many more..",
      desmore:'Javascript Is most Important Language for Frontend.JavaScript used for functionality in web pages. '
     
      
   
    },
    {
      showpic:reactimage,
      title:'React',
      des:"React Is a library OF javascript With a lot of Packages . React is used for frontend .It Easier the frontend work for a developer mainly components, hooks and routers is the awesome feature of the react library",
      desmore:'Javascript Is most Important Language for Frontend.JavaScript used for functionality in web pages. '
      
   
    },
    {
      showpic:bootimage,
      title:'Bootstrap',
      des:"Bootstrap is the Frame work of CSS.it is used for styling and resposiveness.bootstrap contain a builtin classes .if you connect your index.html with bootstrap then you can access all the clases by just writting it",
      desmore:'Javascript Is most Important Language for Frontend.JavaScript used for functionality in web pages. '
     
   
    },
  ]
  const[btn,setbtn]=useState('true')
  const btnhandle=()=>{
    setbtn(!btn)

  }
  return (
    <div>
    {Banner.map((items,index)=>
    
  <div className="container shadov" >
  <div className="row ">
    <div className="col-sm-4 jsimage ">
      <img src={items.showpic} alt="" />
    </div>
    <div className="col-sm-4 offset-sm-4 ">
      <h1 className="typeWritter"><TypeWriter
        options={{
          strings: [items.title],
          autoStart: true,
          loop: true,
          delay: 3
        }}/> </h1>
       <p>{items.des}{btn?null:items.desmore}
        
        <button className="btn btnmore" onClick={btnhandle}>{btn?'Read More':'Read less'}</button></p>
       
    </div>
  </div>
 
</div>
    )}
    </div>
  );
};

export default Banner;
