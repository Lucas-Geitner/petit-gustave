import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class CustomDocument extends Document {
  render() {
    return (
      <html lang="fr">
        <Head>
        <link rel="shortcut icon" href="/images/favicon-dark.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,300;1,400;1,600;1,700&display=swap"
            rel="stylesheet"
          />

       <link href="https://fonts.googleapis.com/css2?family=Alice&display=swap" rel="stylesheet" />
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
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-177436480-1"
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-177436480-1');
                    `,
                }}
              />
        <meta charSet="utf-8" />
        <meta name="title" content="Grande maison en Drôme provençale" />
        <meta name="description" content="A Marsanne en Drôme provençale, notre grande maison familiale de 250m2 vous accueille pour vos séjours en famille ou entre amis !" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maison-en-provence.net/" />
        <meta property="og:title" content="Grande maison en Drôme provençale" />
        <meta property="og:description" content="A Marsanne en Drôme provençale, notre grande maison familiale de 250m2 vous accueille pour vos séjours en famille ou entre amis !" />
        <meta property="og:image" content="https://www.maison-en-provence.net/static/images/share.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.maison-en-provence.net/" />
        <meta property="twitter:title" content="Grande maison en Drôme provençale" />
        <meta property="twitter:description" content="A Marsanne en Drôme provençale, notre grande maison familiale de 250m2 vous accueille pour vos séjours en famille ou entre amis !" />
        <meta property="twitter:image" content="https://www.maison-en-provence.net/images/share.png" />

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
