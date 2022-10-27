import React from 'react'
import './Banner.css'

const Skill = () => {
    const skill=[
        {title:'Frontend Developer',des:'I am a frontend developer with more than 1 year experience'},
        {title:'HTML',des:'I cleared HTML 60% about my knowledge.And i know about all the tags that are basic.' },
        {title:'CSS', des:'As we Know css contains millions of properties but the most used Properties are we know'},
        {title:'Bootstrap',des:'for Responsiveness i know bootstrap much by which we can easily response any website.'},
        {title:'javascript',des:'Javascript the difficult one to be honest i dont know much about javascript but for react we know much'},
        {title:'React',des:'On react i have a high experience because worked on it since last three months'}
    ]
  return (
    <div>
        <div className="container p-4">
            <div className="row">
               {skill.map((items,index)=>
                <div className="col-sm-3 offset-sm-1 cards ">
                <h2 className='titl'>{items.title}</h2>
                <h6>{items.des}</h6>
            </div>
               )}
            </div>
        </div>
        <div className="extra"></div>
    </div>
  )
}

export default Skill