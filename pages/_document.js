import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://www.apc.fr/skin/frontend/rwd/apcv2/fonts/HelveticaNeueLTStd-Bd.woff2"
            rel="stylesheet"
          />
            <link
            href="https://www.apc.fr/skin/frontend/rwd/apcv2/fonts/HelveticaNeueLTStd-Roman.woff2"
            rel="stylesheet"
          />
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
            rel="stylesheet"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
