import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

export default function WelcomePage() {
  return (
    <div className='w-screen h-screen bg-[#5ABCE6] flex items-center justify-center'>
      <div className='h-full'>
        <div className='relative flex flex-col justify-center ml-8 -mr-32 '>
          <div className='absolute translate-x-full translate-y-full'>
            <div className='absolute top-0 w-64 p-2 translate-x-4 bg-white -translate-y-2/3'>
              <div className='absolute bottom-0 flex w-6 h-8 translate-y-full bg-white triangle' />
              <motion.p
                animate={{ y: [0, 20, 0] }}
                className='text-xs font-inter'>
                Hi! My name is XD. Welcome to the ATB Classroom. I'm so happy to
                have you here. Let's get started and dive in to all things
                finance.
              </motion.p>
              <div className='w-full text-end'>
                <button className='px-2 py-1 text-white bg-green-500 rounded-sm text-end'>
                  Next
                </button>
              </div>
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
