import React, { useState } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/Account.module.css';
import Head from 'next/head';

const Account = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password1: '',
  });

  const { email, password, password1 } = formData;
  const onsubmit = (e) => {
    e.preventDefault();
    if (password !== password1) {
      toast('Password does not match', { type: 'error' });
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className='overflow-hidden'>
      <Head>
        <title>Account - Statsout</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <div className='container'>
        <div className='row text-white'>
          <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4 my-4'>
            <h2 className=' text-dark mb-3 '>Account</h2>
            <div
              className={`${(styles.btn, styles.card)} card text-white mb-3`}
            >
              <div className='card-body'>
                <p className='card-text text-dark'>
                  Your account has not been activated yet.
                </p>
                <button className={`${styles.btn} btn text-white shadow`}>
                  Activate your account
                </button>
              </div>
            </div>
            <div className='px-2'>
              <form
                action=''
                className='justify-content-center'
                onClick={onsubmit}
              >
                <ToastContainer />
                <div className='form-group my-5'>
                  <h4 className='text-dark'>Update Email</h4>
                  <label htmlFor='email' className='text-dark'>
                    Your email address:
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='jane.doe@example.com'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <button className='btn btn-outline-success my-3'>
                    Update Email
                  </button>
                </div>

                <div className='form-group text-dark'>
                  <h4>Change password</h4>
                  <label htmlFor='Password' className='text-dark'>
                    New password:
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='Password' className='text-dark'>
                    Confirm :
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    name='password1'
                    value={formData.password1}
                    onChange={handleChange}
                  />
                  <button className='btn btn-outline-success my-3'>
                    Change Password
                  </button>
                </div>
                <div className='text-dark my-3'>
                  <h5>Delete Account</h5>
                  <p>
                    Remove all data associated with your account from our
                    servers.
                  </p>
                  <button className='btn btn-outline-danger '>
                    Delete Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
