import React from 'react';
const Props = (prop) => {
    //console.warn(st1.name)
    //console.warn(st1.age)
    return(
      <div className='bg-light'>
      
      <p className='text-center text-danger fs-5'>Hello {prop.name}</p>
      <p className='text-center text-info fs-5'>MailId -:{prop.mail}</p>
      <p className='text-center text-info fs-5'>Address-:{prop.other.Address}</p>
      <p className='text-center text-info fs-5'>Mobile :  {prop.other.mobile}</p>

      </div>
    );
};
export default Props;