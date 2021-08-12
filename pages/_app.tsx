import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';

/**
 * A wrapper for the website.
 *
 * This displays a common header across all pages.
 */
function Website({ Component, pageProps }: AppProps) {
  return (
    <div id="app" className="relative">
      <Navigation {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Website;
