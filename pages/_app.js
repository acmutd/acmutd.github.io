import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/globals.css';

function Website({ Component, pageProps }) {
  return (
    <div id="app" className='relative'>
      <Navigation {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Website;
