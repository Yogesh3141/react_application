import React from 'react'
import { Link } from 'react-router-dom' 

const Links = () => {
  return (
    <>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutus'>Aboutus</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li><Link to='/contact'>ContactUs</Link></li>

    </ul>
     
      
    </>
  )
}

export default Links
