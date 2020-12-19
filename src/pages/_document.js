import Document, { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'


import SiteConfig from '../../site.config'

class AppDocument extends Document {
  static async getInitialProps (ctx) {
    console.log(ctx)
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang={SiteConfig.lang}>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
