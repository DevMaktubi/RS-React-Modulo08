import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): any {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="http://localhost:8097"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
