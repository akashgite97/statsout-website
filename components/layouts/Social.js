import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaInstagramSquare,
  FaStripeS,
  FaFacebookSquare,
  FaGoogle,
  FaSignal,
} from 'react-icons/fa';
import { GrStripe } from 'react-icons/gr';

export const Social = () => {
  return (
    <>
      <div>
        <IconContext.Provider value={{ size: '3rem', className: 'my-3 pl-3 ' }}>
          <FaSignal color='rgb(249, 171, 0)' /> <span> Analytics</span>
          <FaGoogle color='EA4335' /> <span> Search Console</span>
          <FaFacebookSquare color='#3b5998' /> <span>Facebook</span>
          <FaInstagramSquare color='#DD2A7B' /> <span>Instagram</span>
          <GrStripe color='#6168CF' /> <span>Stripe</span>
        </IconContext.Provider>
      </div>
    </>
  );
};

<style jsx>
  {`
    span {
      font-weight: bold;
      font-size: 30px;
    }
  `}
</style>;
