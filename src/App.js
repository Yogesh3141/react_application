import "./App.css";
import React from "react";
import Dashbord from "./Components/Emp_Form/Dashbord";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Err404 from "./Components/Emp_Form/Err404";
import NavBar from "./Components/Emp_Form/NavBar";import { Row } from "react-bootstrap";
import Empchart from "./Components/Emp_Form/Empchart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Row className="row pt-lg-0 mx-auto">
      <div className="col-lg-2 shadow" style={{ height: "100vh" }}>
        <NavBar />
      </div>
      <div className="col-lg-10">
      <Routes>
        <Route path="/" element={ <Dashbord />}/>
        <Route path="/Reports" element={ <Empchart />}/>
        <Route path="/*" element={<Err404/>}/>
       </Routes>
      </div>
    </Row>      
      </BrowserRouter>
    </div>
  );
}

export default App;
