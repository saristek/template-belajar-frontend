import { Head, Html, Main, NextScript } from 'next/document';

import Favicon from '@/components/Favicon';
export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <Favicon />
      <body className="bg-white text-black antialiased dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
