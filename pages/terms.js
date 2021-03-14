import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Privacy = () => {
  return (
    <div className='container'>
      <Head>
        <title>Terms of Service - Statsout</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div className='row'>
        <div className='col-xl-6 col-lg-8 col-md-10 col-sm-12 mx-auto  form p-4 my-4  '>
          <h1>Terms of Service</h1>
          <h5 className='my-3'>1. Terms</h5>
          <p>
            By accessing the website at{' '}
            <Link href='https://statsout.com/'>
              <a>statsout.com, </a>
            </Link>
            , you are agreeing to be bound by these terms of service, all
            applicable laws and regulations, and agree that you are responsible
            for compliance with any applicable local laws. If you do not agree
            with any of these terms, you are prohibited from using or accessing
            this site. The materials contained in this website are protected by
            applicable copyright and trademark law.
          </p>
          <h5>2. Use License</h5>
          <p>
            <ol type='a'>
              <li>
                You agree to use Statsout and it's connection to third-party
                services only through our user interface.
              </li>
              <li>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Statsout's website for
                personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
                <ol type='i'>
                  <li>modify or copy the materials;</li>
                  <li>
                    use the materials for any commercial purpose, or for any
                    public display (commercial or non-commercial);
                  </li>
                  <li>
                    attempt to decompile or reverse engineer any software
                    contained on Statsout's website;
                  </li>
                  <li>
                    remove any copyright or other proprietary notations from the
                    materials; or
                  </li>
                  <li>
                    transfer the materials to another person or "mirror" the
                    materials on any other server.
                  </li>
                </ol>
              </li>
              <li>
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by Statsout at any
                time. Upon terminating your viewing of these materials or upon
                the termination of this license, you must destroy any downloaded
                materials in your possession whether in electronic or printed
                format.
              </li>
            </ol>
          </p>
          <h5>3. Disclaimer</h5>
          <ol>
            <li>
              The materials on Statsout's website are provided on an 'as is'
              basis. Statsout makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </li>
            <li>
              Further, Statsout does not warrant or make any representations
              concerning the accuracy, likely results, or reliability of the use
              of the materials on its website or otherwise relating to such
              materials or on any sites linked to this site.
            </li>
          </ol>
          <h5>4. Limitations</h5>
          <p>
            In no event shall Statsout or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Statsout's website, even if
            Statsout or a Statsout authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
          <h5>5. Accuracy of materials</h5>
          <p>
            The materials appearing on Statsout's website could include
            technical, typographical, or photographic errors. Statsout does not
            warrant that any of the materials on its website are accurate,
            complete or current. Statsout may make changes to the materials
            contained on its website at any time without notice. However
            Statsout does not make any commitment to update the materials.
          </p>
          <h5>6. Links</h5>
          <p>
            Statsout has not reviewed all of the sites linked to its website and
            is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Statsout of the
            site. Use of any such linked website is at the user's own risk.
          </p>
          <h5>7. Modifications</h5>
          <p>
            Statsout may revise these terms of service for its website at any
            time without notice. By using this website you are agreeing to be
            bound by the then current version of these terms of service.
          </p>
          <h5>8. Governing Law</h5>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Delaware, USA and you irrevocably submit
            to the exclusive jurisdiction of the courts in that State or
            location.
          </p>
          <p>
            <span className='font-italic'>Unemployment LLC</span> operates the
            statsout.com website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
