import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

const isSSR = typeof window !== 'undefined'
const isDevMode = process.env.NODE_ENV === 'development'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body className={isDevMode ? 'debug-screens' : ''}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
