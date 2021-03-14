import React from 'react';
import Link from 'next/link';

import Head from 'next/head';

const Privacy = () => {
  return (
    <div className='container'>
      <Head>
        <title>Privacy- Statsout</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className='row'>
        <div className='col-xl-6 col-lg-8 col-md-10 col-sm-12 mx-auto  form p-4 my-4  '>
          <h1>Privacy Policy</h1>
          <p>
            We ask for read-only access to your third-party accounts and only
            collect metrics displayed on Statsout. We collect it by fair and
            lawful means, with your knowledge and consent.
          </p>

          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p>
            When you sign in using any third-party platforms (e.g. Google or
            Facebook) we only access and store information visible in your
            dashboard and integrations. That includes the name of the account,
            list of profiles to fetch statistics from (e.g. domain names), and
            access tokens that are unique to Statsout and cannot be linked or
            used to access your data outside the scope of statsout.com.
          </p>
          <p>We don’t share any information publicly or with third-parties.</p>
          <p>
            Our billing is operated by{' '}
            <Link href='https://stripe.com/in'>
              <a>Stripe.</a>
            </Link>
            Statsout does not store any of the personal information you provide
            when processing payments.
          </p>
          <p>
            We use Google Analytics to monitor and analyze the use of our
            service but we use it in a GDPR compliant mode, i.e. we do not track
            users, we do not share the data, we anonymize each visit, and we
            respect your Do Not Track settings. For more information on the
            privacy practices of Google, please visit the{' '}
            <Link href='https://policies.google.com/privacy?hl=en'>
              <a>Google Privacy & Terms web page.</a>
            </Link>
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us at contact@statsout.com.
          </p>
          <p>This policy is effective as of December 1st 2020.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
