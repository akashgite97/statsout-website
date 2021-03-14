import React, { useState } from 'react';
import Head from 'next/head';

export const Resetpassword = () => {
  const [formData, setFormData] = useState({ email: '' });

  const onsubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container '>
      <Head>
        <title>Reset Password- Statsout</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className='row'>
        <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4 my-4 text-center'>
          <h1 className=' text-dark'> Reset Password</h1>
          <form
            action=''
            className='justify-content-center form p-5 border border-grey shadow-sm'
            onClick={onsubmit}
          >
            <div className='form-group'>
              <label htmlFor='email' className='text-dark float-left'>
                Email:
              </label>
              <input
                type='email'
                className='form-control'
                required
                placeholder='jane.doe@example.com'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className='btn btn-primary w-50'>
              Reset Password
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-bottom: 235px;
          }
        `}
      </style>
    </div>
  );
};

export default Resetpassword;
