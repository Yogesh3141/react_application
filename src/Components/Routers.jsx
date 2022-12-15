import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Aboutus from './Aboutus'
import Service from './Service'
import Links from './Links'
// import Page404 from './Page404'
const Routers = () => {
  return (
    <>
      <BrowserRouter>
      <Links/>
      <Routes>
        <Route path='/' element={<p>Hello Home!!</p>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/service' element={<Service/>}/>
        {/* <Route path='/*' element={<Page404/>}/> */}
        <Route path='/*' element={<Navigate to='/'/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers
