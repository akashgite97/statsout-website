import React from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className='container '>
      <div className='row '>
        <div className='col-md-6 right '>
          <Link href='/'>
            <a>
              <img src='/favicon.svg' width={30} height={30} />
            </a>
          </Link>

          <Link href='/faq'>
            <a className='ml-3'>FAQ</a>
          </Link>
          <Link href='/privacy'>
            <a className='ml-3'>Privacy</a>
          </Link>
          <Link href='/terms'>
            <a className='ml-3'>Terms</a>
          </Link>
        </div>
        <div className='col-md-6 left '>
          <ul className='social-icons float-md-right'>
            <li>
              <p className='ml-3  '>contact@statsout.com</p>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <FaTwitter color='#1DA1F3' />
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <FaFacebookSquare color='#3b5998' />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .social-icons {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .social-icons li {
            display: inline-block;
            margin-left: 10px;
            font-size: 22px;
          }

          @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
            .right {
              margin-left: 35px;
              margin-bottom: 10px;
            }
            .footer {
              margin-left: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
