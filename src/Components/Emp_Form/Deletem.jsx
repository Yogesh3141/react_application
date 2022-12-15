import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  


const Deletem = (props) => {

    const { handleClose, deleteuser} = props;

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete Data!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>deleteuser(true)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
    }


export default Deletem
