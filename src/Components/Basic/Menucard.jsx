import React from "react";

const Menucard = ({showdata}) => {
    console.log(showdata);
  return (
    <>
    <section className="main-card--cointainer">
    {showdata.map((curtel)=>{
        return(
            <>
        <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">
              {curtel.id}
            </span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">
              {curtel.name}
            </h2>
            <span className="card-description subtle">
              {curtel.description}
            </span>
            <div className="card-read">Read</div>
          </div>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          className="card-media"
          alt="images"
        />
        <span className="card-tag subtle">Order now</span>
      </div>
      </>
        )
    })}
    </section>
     
    </>
  );
};

export default Menucard;
