import React from 'react';
import Head from 'next/head';
import { DashboardSocial } from '../components/DashboardSocial';
import {
  FaInstagramSquare,
  FaStripeS,
  FaFacebookSquare,
  FaGoogle,
  FaTwitter,
  FaSignal,
} from 'react-icons/fa';
import { GrStripe } from 'react-icons/gr';

const Integrations = () => {
  return (
    <div className='container'>
      <Head>
        <title>Integrations- Statsout</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className='row d-flex justify-content-md-around'>
        <div className='col-md-8   col-sm-12 p-4 my-4  '>
          <h1>Integrations</h1>
          <h3 className='my-3'>Connect your accounts</h3>
          <p>You can connect multiple accounts from the same platform.</p>
          <p>
            To update your integration (e.g. after adding a new profile) simply
            reconnect using<br></br> the account you made changes to.
          </p>
        </div>
        <div className=' col-md-4 col-sm-12  my-5 left   '>
          <DashboardSocial
            icon={<FaGoogle color='#EA4335' />}
            title='Connect Google'
          />

          <p className='pl-2 py-sm-0 analytics  '>
            <FaSignal color='rgb(249, 171, 0)' /> Google Anaylytics<br></br>
            <FaGoogle color='#EA4335' /> Google Search Console
          </p>

          <DashboardSocial
            icon={<FaFacebookSquare color='#3b5998' />}
            title='Connect Facebook'
          />
          <p className='pl-2'>
            <FaFacebookSquare color='#3b5998' /> Facebook Pages
            <br></br>
            <FaInstagramSquare color='#DD2A7B' /> Instagram
            <br />
            <small className='small'>
              An Instagram Business Account with
              <br /> at least 100 followers is required to
              <br /> access Instagram insights.
            </small>
          </p>

          <DashboardSocial
            icon={<GrStripe color='#6168CF' />}
            title='Connect Stripe'
          />
          <DashboardSocial
            icon={<FaTwitter color='#1DA1F3' />}
            title='Connect Twitter'
          />
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  );
};

export default Integrations;
