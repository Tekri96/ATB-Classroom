import React from 'react';

type Props = {};

export default function WelcomePage() {
  return (
    <div className='w-screen h-screen bg-[#5ABCE6] flex items-center justify-center'>
      <div className='h-full'>
        <div className='relative flex flex-col justify-center ml-8 -mr-32'>
          <div className='absolute translate-x-full translate-y-full'>
            <div className='absolute top-0 w-64 h-32 translate-x-4 bg-white -translate-y-2/3'>
              <div className='absolute w-6 h-8 bg-red-400' />
            </div>
            <img
              src='/assets/boy.png'
              alt='Boy Image'
              className='h-[12rem] mt-16'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center w-full h-full'>
        <img
          src='/assets/bank.png'
          alt='Bank Background'
          className='h-[20rem] w-[25rem]'
        />
        <h1 className='text-4xl font-inter'>
          Welcome to <span className='font-bold'>ATB Classroom</span>
        </h1>
        <br />
        <h4 className='text-xl font-inter'>
          By Professor <span className='font-bold'>XD</span>
        </h4>
        <br />
        <button className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'>
          Lets Begin
        </button>
      </div>
    </div>
  );
}
