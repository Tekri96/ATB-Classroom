import type { NextPage } from 'next';
import Head from 'next/head';
import WelcomePage from '@/components/welcompage';
import React from 'react';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ATB Classroom</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WelcomePage />
    </React.Fragment>
  );
};

export default Home;
