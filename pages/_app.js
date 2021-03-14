import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layouts } from '../components/layouts/Layouts';

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />;
    </Layouts>
  );
}

export default MyApp;
