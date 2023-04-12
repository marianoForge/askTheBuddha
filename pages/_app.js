import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../config/theme';
import Script from 'next/script';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout/layout';

import '../styles/globals.css';

// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   '&.Mui-checked': {
//     color: theme.status.danger,
//   },
// }));

// export const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

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

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
