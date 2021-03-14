import React from 'react';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <Link href='/'>
          <a className={`${styles.navbrand} navbar-brand `} href='#'>
            Statsout
          </a>
        </Link>

        <ul className='navbar-nav ml-auto order-sm-2'>
          <li className='nav-item '>
            <Link href='/dashboard'>
              <a className='nav-link font-weight-bold'>Dashboard</a>
            </Link>
          </li>

          <li className='nav-item '>
            <Link href='/createaccount'>
              <a className='nav-link font-weight-bold'>Create account</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/account'>
              <a className='nav-link font-weight-bold'>Account</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/signin'>
              <a className='nav-link font-weight-bold'>Sign in</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
