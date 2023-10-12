import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-p_dark dark:text-white p-4 bg-shade">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
