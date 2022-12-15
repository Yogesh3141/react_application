import React, { createContext } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Employe from "./Employe";
import Deletem from "./Deletem";

const Emtab = ({ ischanged, setIsChanged, nameEmp }) => {
  const [getdata, setdata] = useState([]);
  const [state, setState] = useState({ show: false, id: "" });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteId, setDeleteId] = useState("");
  useEffect(() => {
    gett();
  }, [ischanged]);

  const gett = () => {
    axios
      .get("https://localhost:7071/api/CrudApi")
      .then((res) => setdata(res.data));
  };

  function deleteuser(id) {
    axios
      .delete(`https://localhost:7071/api/CrudApi/${id}`)
      .then(() => setIsChanged(!ischanged));
    handleClose();
  }

  return (  
    <>
      <Table striped bordered hover className="mt-4">
        <thead className="text-center">
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>BankName</th>
            <th>BankAddress</th>
            <th>Photo</th>
            <th>Signature</th>
            <th>salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {getdata
            .filter((e) => {
              if (nameEmp === "") {
                return e;
              } else if (
                e.employeeName.toLowerCase().includes(nameEmp.toLowerCase()) ||
                e.bankName.toLowerCase().includes(nameEmp.toLowerCase()) ||
                e.email.toLowerCase().includes(nameEmp.toLowerCase())
              ) {
                return e;
              }
            })
            .map((get, index) => {
              return (
                <tr key="index">
                  <td>{index + 1}</td>
                  <td>{get.employeeName}</td>
                  <td>{get.email}</td>
                  <td>{get.bankName}</td>
                  <td>{get.bankAddress}</td>
                  <td>
                    <img
                      src={require(`C:/Users/LENOVO/source/repos/CrudApi/CrudApi/uploadimage/${get.photo}`)}
                      style={{ height: "76px" }}
                    />
                  </td>
                  <td>
                    <img
                      src={require(`C:/Users/LENOVO/source/repos/CrudApi/CrudApi/signatureimages/${get.signature}`)}
                      style={{ height: "78px" }}
                    />
                  </td>
                  <td>{get.salary}</td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => setState({ show: true, id: get.id })}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleShow();
                        setDeleteId(get.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {show && (
        <Deletem
          show={show}
          handleClose={handleClose}
          deleteuser={(res) => (res ? deleteuser(deleteId) : handleClose)}
        />
      )}
      {state.show && (
        <Employe
          empId={state.id}
          handleClose={() => {
            setState({ show: false, id: "" });
          }}
          ischanged={ischanged}
          setIsChanged={setIsChanged}
        />
      )}
    </>
  );
};

export default Emtab;
