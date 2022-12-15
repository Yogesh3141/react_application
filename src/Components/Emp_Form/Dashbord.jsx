import React from "react";
import Employe from "./Employe";
import Emtab from "./Emtab";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Dashbord = () => {
  const [show, setShow] = useState(false);
  
  const [ischanged,setIsChanged] =useState(false);

  const handleClose = () => setShow(false);

  const[nameEmp,setnampeEmp]=useState('');

  const searchevent=(e)=>{
    const searchdata = e.target.value;
    setnampeEmp(searchdata);
    //console.log(searchdata);  
  }

  return (
    <div>
        <Button
          variant="primary"
          onClick={() => setShow(true)}
          className="mt-3">
          Add Employee <AiOutlineUserAdd />      
        </Button>
        {show && <Employe handleClose={handleClose}  ischanged={ischanged} setIsChanged={setIsChanged} />}
        <input className="form-control mt-2" type="text" placeholder="Search Employee" onChange={searchevent} value={nameEmp} style={{width:'250px'}}/>
        <Emtab  ischanged={ischanged} setIsChanged={setIsChanged} nameEmp={nameEmp} />
        </div>
  );
};  

export default Dashbord;
