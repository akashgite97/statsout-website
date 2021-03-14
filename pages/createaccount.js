import React, { useState } from 'react';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const Createaccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password1: '',
    mobile: '',
  });

  const { email, password, password1 } = formData;
  const onsubmit = (e) => {
    e.preventDefault();
    if (password !== password1) {
      toast('Password does not match', { type: 'error' });
    }
    //console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className='overflow-hidden'>
      <Head>
        <title>Create Account - Statsout</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className='container signin-form'>
        <div className='row text-white'>
          <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4 my-4'>
            <h2 className='text-center text-dark mb-3'>Create Account</h2>
            <div className='px-2'>
              <form
                action=''
                className='justify-content-center p-5 border border-grey shadow-sm'
                onClick={onsubmit}
              >
                <ToastContainer />
                <div className='form-group'>
                  <label htmlFor='email' className='text-dark'>
                    Email:
                    <small className='text-danger font-weight-bold'>*</small>
                  </label>

                  <input
                    type='email'
                    className='form-control'
                    placeholder='jane.doe@example.com'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='Password' className='text-dark'>
                    Password:
                    <small className='text-danger font-weight-bold'>*</small>
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
                    Confirm Password:
                    <small className='text-danger font-weight-bold'>*</small>
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    name='password1'
                    value={formData.password1}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='mobile' className='text-dark'>
                    Mobile No:
                    <small className='text-danger font-weight-bold'>*</small>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    name='mobile'
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className='text-center'>
                  <button type='submit' className='btn btn-primary '>
                    Create Account
                  </button>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Createaccount;
