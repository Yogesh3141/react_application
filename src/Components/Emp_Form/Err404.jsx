import React from 'react'
import { Row } from 'react-bootstrap'
const Err404 = () => {
  return (
    <>
    <Row className="text-center">
     <h1 className='text-danger'>404 Error</h1>
     <p className='text-danger'>This Page dosesn't exist.</p>
    </Row>
    </>
  )
}

export default Err404
