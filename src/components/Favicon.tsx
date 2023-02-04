/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head';

import favicons from '@/data/favicons';
export default function Favicon() {
  return (
    <Head>
      {favicons.map((linkProps: any) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: light)'
        content='#fff'
      />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: dark)'
        content='#000'
      />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
    </Head>
  );
}
