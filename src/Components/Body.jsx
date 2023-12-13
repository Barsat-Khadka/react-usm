import React from 'react'
import Process1 from '../assets/images/Hobby1.png'
import Process2 from '../assets/images/Hobby2.png'
import Process3 from '../assets/images/Hobby3.png'


const Body = () => {
  return (
    <div>
       <div className="container px-4 py-5 delivery-process">
    <h2 className="pb-2 display-5 fw-bold top-text-before text-center">Hobbies</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col px-5 text-center">
        <div className="bg-gradient">
          <img src={Process1} alt="" className='w-25 h-25' />
        </div>
        <h2 className='top-text-before  hovering-card'>Walking</h2>
        <p className='top-text-before'>Walking has always been a way for me to enter a whole new reality .......</p>
      </div>
      <div className="col px-5 text-center">
        <div className="bg-gradient">
        <img src={Process2} alt="" className='w-25 h-25' />
        </div>
        <h2 className='top-text-before hovering-card'>Table Tennis</h2>
        <p className='top-text-before'> Once a pro said to me: "You miss 100% of the shots you dont take" and till then i do not hesitate to take one 45 degree shot whenever the opportunity arises!</p>
        <p className="icon-link top-text-before custom-underline">
          Sometimes you win , sometimes you learn. 
          <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg>
        </p>
      </div>
      <div className="col px-5 text-center">
        <div className="bg-gradient">
        <img src={Process3} alt="" className='w-25 h-25' />
        </div>
        <h2 className='top-text-before hovering-card'>CPU repairing</h2>
        <p className='top-text-before'>A weird hobby, but i gradually developed keen interest during my times as a technician in hardware repair companies</p>
          <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"/></svg>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Body
