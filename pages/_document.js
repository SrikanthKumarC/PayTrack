import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-gray-950 dark:text-white p-4'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
