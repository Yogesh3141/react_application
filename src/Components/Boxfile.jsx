import React, {useState} from "react";
const Boxfile =() => {
const [state,changestate]=useState(null)
const [print,setprint]=useState(false)
    function getdata(val){
        changestate(val.target.value)
    }
    return(
       <>
       <div className="text-center">
       {
        print ? 
        <h1>{state}</h1>
        :null
       }
       <input type ="text" className="mt-3"   onChange={getdata}></input><br></br>
       <button className="btn btn-primary mt-2" onClick={() =>setprint(true)}>Print Data</button>
       </div>
       </>
    )
}
export default Boxfile;