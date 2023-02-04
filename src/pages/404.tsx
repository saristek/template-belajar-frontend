import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import DefaultLayout from '@/components/layouts/page/DefaultLayout';
import ArrowLink from '@/components/links/ArrowLink';
import { PageSEO } from '@/components/SEO';

export default function NotFoundPage() {
  return (
    <DefaultLayout>
      <PageSEO title='Not Found' description='no page found here' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
