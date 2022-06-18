import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>ATB Classroom</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='p-24 bg-sky-500'>Hello Quiz</div>
    </div>
  );
};

export default Home;
