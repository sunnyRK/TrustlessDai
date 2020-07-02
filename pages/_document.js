import Document, { Head, Main, NextScript } from 'next/document';

export default class myDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
          <link rel="stylesheet" href="/static/styles.css"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Archivo:500|Open+Sans:300,700"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
          #__next {
            height: 100%;
          }
        `}</style>
      </html>
    )
  }
}