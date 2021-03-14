import React from 'react';
import {
  FaInstagramSquare,
  FaStripeS,
  FaFacebookSquare,
  FaGoogle,
  FaSignal,
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
export const DashboardSocial = ({ icon, title, description }) => {
  return (
    <div className='row'>
      <div className='col-md-6 mr-3 my-md-2 my-sm-0 '>
        <button className='btn  w-75'>
          <IconContext.Provider value={{ size: '1.1rem' }}>
            {icon}
          </IconContext.Provider>
          <span className='ml-2 font-weight-bold'>{title}</span>
        </button>
        <br />
        <small>{description}</small>
      </div>
      <br />
      <br />

      <style jsx>
        {`
          .btn {
            background: #fff;
            color: #4d4d4d;
            -moz-box-shadow: 0 0.05em 0.05em 0.05em rgba(51, 51, 51, 0.25);
            box-shadow: 0 0.05em 0.05em 0.05em rgb(51 51 51 / 25%);
          }

          .btn:hover {
            border-color: #651fff;
          }
        `}
      </style>
    </div>
  );
};
