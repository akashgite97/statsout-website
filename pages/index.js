import Head from 'next/head';
import { GraphCard } from '../components/GraphCard';
import { Header } from '../components/layouts/header';
import { Social } from '../components/layouts/Social';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stasout: a dashboard for your most important stats</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <section>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h1 className='font-weight-bold'>
                A dashboard for your most important stats
              </h1>
              <h5 className='my-3 text-muted'>
                Get metrics from different platforms, accounts, and profiles, in
                one place.
              </h5>
              <button className={`${styles.btn} btn text-white shadow`}>
                Try it out
              </button>
              <br></br>
              <small>No need to sign up</small>
              <Social />
            </div>
          </div>
        </div>
      </section>

      <section className='garph-data'>
        <div className='container'>
          <div className='row  '>
            <div className='col-12 '>
              <div className='card-deck'>
                <GraphCard img='/img/Analytics.png' />
                <GraphCard img='/img/instagram.png' />
                <GraphCard img='/img/stripe.png' />
              </div>
            </div>
          </div>
          <div className='row my-3'>
            <div className='col-12'>
              <div className='card-deck'>
                <GraphCard img='/img/Google.png' />
                <GraphCard img='/img/facebook.png' />
                <GraphCard img='/img/Stripebalance.png' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-md-12 text-center '>
              <button className={`${styles.btn} btn btn-50 text-white shadow `}>
                Build your dashboard
              </button>
              <br></br>
              <small>You can try it without signing up</small>

              <p className={`${styles.p} my-3`}>
                Couldn't find a necessary integration?<br></br> Get notified
                when it's ready.
              </p>

              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
