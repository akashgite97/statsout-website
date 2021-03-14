import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { IconContext } from 'react-icons';
import { IoMdArrowDropdown } from 'react-icons/io';

const FaqData = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className='my-3 overflow-hidden'>
        <h5 onClick={toggle}>
          {' '}
          <IoMdArrowDropdown size='2rem' />
          {title}
        </h5>
      </div>

      <Collapse isOpen={isOpen}>
        <>
          <p className='description overflow-hidden'>{description}</p>
        </>
      </Collapse>
      <style jsx>
        {`
          .description {
            margin-left: 2.5rem;
            font-size: large;
            font-weight: 400;
          }
        `}
      </style>
    </>
  );
};

export default FaqData;
