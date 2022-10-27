import React from 'react'
import devimage from './Developer.webp'

const About = () => {
  return (
    <div><div className="container about p-5">
       <div className="row">
       <div className="col-sm-4 devimage">
        <img src={devimage} alt="" />
        </div>
        <div className="col-sm-4 offset-sm-2 p-3"><h1>About Me</h1><h6>MY Name is Usman Ali Studying software Enginnering in Islamia college .i am in 5th semester .beside this i am a frontend developer with 3 months experience.currently i am working in React Library</h6></div>
       </div>
        
        </div>
        <div className="extra1 "></div>
        </div>
  )
}

export default About