import React , {useState} from "react";

const State = () => {
     const [data, setData] = useState(true);     
    
    //console.warn("_____");
    return(
     <>
     <div className="text-center">
     <h2 className="text-info text-right">{data ?<span>Login</span> : <span>Logout</span> }</h2>
     <button className="btn btn-primary mt-2" onClick={()=>setData(!data)}>Submit</button>
     </div>
     </>
    )
};
export default State;