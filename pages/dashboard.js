import React from 'react';
import Link from 'next/link';
import { DashboardSocial } from '../components/DashboardSocial';
import {
  FaInstagramSquare,
  FaStripeS,
  FaFacebookSquare,
  FaGoogle,
  FaTwitter,
} from 'react-icons/fa';
import { GrStripe } from 'react-icons/gr';
import Head from 'next/head';
import Dropdown from '../components/Dropdown';

export const Dashboard = () => {
  return (
    <>
      <div className='container dashboard'>
        <Head>
          <title>Dashboard - Statsout</title>
          <link rel='icon' href='/favicon.svg' />
        </Head>
        <div className='row'>
          <div className='col-xl-8 col-lg-10 col-md-12 col-sm-12 mx-auto  form p-4 my-4 text-center '>
            <h5 className='p'>
              This is a temporary session where you can try all the features for
              free.
              <br /> It will automatically expire after one hour.
              <br />
              All your settings will be saved when you{' '}
              <Link href='/createaccount'>
                <a>create an account.</a>
              </Link>
            </h5>
            <h3 className='my-5'>
              Connect all the platforms you want to fetch data from
            </h3>

            <div className='offset-md-3 '>
              <DashboardSocial
                icon={<FaGoogle color='#EA4335' />}
                title='Connect Google'
                description='Analytics and Search Console'
              />
              <DashboardSocial
                icon={<FaFacebookSquare color='#3b5998' />}
                title='Connect Facebook'
                description='Pages and Instagram'
              />

              <DashboardSocial
                icon={<GrStripe color='#6168CF' />}
                title='Connect Stripe'
              />

              <DashboardSocial
                icon={<FaTwitter color='#1DA1F3' />}
                title='Connect Twitter'
              />
            </div>

            <h5 className='text-dark my-3'>
              We ask for read-only access and never modify or share any of your
              data.
            </h5>
          </div>
        </div>
        <div className='row  bg-secondary '>
          <div className='col-md-4 col-sm-6 pl-0 border border-secondary '>
            <Dropdown />
          </div>
          <div className='col-md-8 '></div>
        </div>
        <style jsx>{`
          .p {
            line-height: 1.5rem;
            font=size: large;
            font-weight: 400;
          }
          .dashboard {
            margin-bottom: 200px;
          }
        `}</style>
      </div>
    </>
  );
};

export default Dashboard;
