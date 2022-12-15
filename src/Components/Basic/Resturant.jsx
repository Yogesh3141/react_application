import React,{useState} from 'react'
import './Style.css'
import Menu from './Menu_api'
import Menucard from './Menucard'

const Resturant = () => {
const [menudata, setmenudata] = useState(Menu)
  return (
    <>
      <Menucard showdata={menudata}/>
    </>
  )
}

export default Resturant
