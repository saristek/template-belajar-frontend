import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '@fontsource/mukta'

import '@/styles/prism.css'
import '@/styles/application.css'

import siteMetadata from '@/data/siteMetadata';

import ProgressBar from '@/components/ProgressBar';
import { ScrollObserver } from '@/components/ScrollObserver';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        <ScrollObserver>
          <ProgressBar />
          <Component {...pageProps} />
        </ScrollObserver>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
