import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export const siteTitle = 'Greet'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=G-H5VXXTENN6`} />

          <Script>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H5VXXTENN6');
        `}
          </Script> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <title>{siteTitle}</title> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
