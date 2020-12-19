import React from 'react'
import Head from 'next/head'

import SiteConfig from '../../../site.config'

const AppHead = (props) => {
  const SiteTitle = props.title || SiteConfig.title

  return (
    <Head>
      {/* base */}
      <title>{SiteTitle}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={SiteConfig.description} />
      <meta name="application-name" content={SiteTitle} />
      <meta name="apple-mobile-web-app-title" content={SiteTitle} />
      <link rel="icon" href="./mario.ico"/>



      {/* facebook */}
      <meta property="og:url" content={SiteConfig.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SiteTitle} />
      <meta property="og:description" content={SiteConfig.description} />

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={SiteConfig.siteUrl} />
      <meta name="twitter:title" content={SiteTitle} />
      <meta name="twitter:description" content={SiteConfig.description} />

      {/* analytic */}
      {SiteConfig.googleAnalytic && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${SiteConfig.googleAnalytic}`}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${SiteConfig.googleAnalytic}');`
            }}
          />
        </>
      )}
    </Head>
  )
}

export default AppHead
