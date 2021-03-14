import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Dropdown from '../components/Dropdown';

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onsubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className='overflow-hidden'>
      <Head>
        <title>Sign In - Statsout</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  form p-4 my-4'>
            <h2 className='text-center text-dark mb-3'> Sign in</h2>
            <form
              action=''
              className='justify-content-center  p-5 border border-grey shadow-sm'
              onClick={onsubmit}
            >
              <div className='form-group'>
                <label htmlFor='email' className='text-dark'>
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
              <div className='form-group'>
                <label htmlFor='Password' className='text-dark'>
                  Password:
                </label>
                <input
                  type='password'
                  className='form-control'
                  required
                  value={formData.password}
                  name='password'
                  onChange={handleChange}
                />
              </div>
              <div className='text-center'>
                <button type='submit' className='btn btn-primary '>
                  Sign In
                </button>

                <br />

                <ul className='list-unstyled'>
                  <li className=' my-3 '>
                    <Link href='/resetpassword'>
                      <a>Forgot your password?</a>
                    </Link>
                  </li>
                  <li className=''>
                    <Link href='/createaccount'>
                      <a> Don't have an account?</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
