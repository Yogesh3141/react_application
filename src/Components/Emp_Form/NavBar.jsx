import { Col, Image, } from 'react-bootstrap';
import logo from '../Emp_Form/logo.svg';
import  {AiFillDashboard} from 'react-icons/ai';
import { Link} from 'react-router-dom';
import  {BsFillCalendarEventFill, BsCalendarMinus, BsCalendarPlus, BsBarChartLine , BsFillFileEarmarkBarGraphFill} from 'react-icons/bs'
const NavBar = () => {
  return (
   <Col>
    <Image src={logo} alt='hello' className='img-fluid pt-3 pb-3'/><br></br>
          
        <h5><Link className='text-decoration-none' to="/"><AiFillDashboard/> Dashboard</Link></h5><br></br>
        <h5><Link className='text-decoration-none' to="/Events"><BsFillCalendarEventFill/> Events</Link></h5><br></br>
        <h5><Link className='text-decoration-none' to="/Leaves"><BsCalendarMinus/> Leaves</Link></h5><br></br>
        <h5><Link className='text-decoration-none' to="/Attendance"><BsCalendarPlus/> Attendance Request</Link></h5><br></br>
        <h5><Link className='text-decoration-none' to="/Reports"><BsBarChartLine/> Reports</Link></h5><br></br>
        <h5><Link className='text-decoration-none' to="/Company"><BsFillFileEarmarkBarGraphFill/> Company Policies</Link></h5>
      
   </Col>
  )};
  export default NavBar;