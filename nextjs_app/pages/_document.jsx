import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import createEmotionServer from 'create-emotion-server'
import { cache } from './_app.jsx'

const { extractCritical } = createEmotionServer(cache)

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
          <link rel='apple-touch-icon' sizes='180x180' href='/public/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/public/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/public/favicon-16x16.png' />
          <link rel='manifest' href='/public/site.webmanifest' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)
  const styles = extractCritical(initialProps.html)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key='emotion-style-tag'
        data-emotion-css={styles.ids.join(' ')}
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />
    ]
  }
}
