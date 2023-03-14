import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GLSQNX4ZJD"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || []; 
        function gtag() {dataLayer.push(arguments);}
        gtag('js', new Date()); 
        gtag('config', 'G-GLSQNX4ZJD'), {
        page_path: window.location.pathname,
        };
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
