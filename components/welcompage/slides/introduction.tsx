import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageIdentifier, PAGES } from '.';

type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function Introduction({ gotoNextStage }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        key={PAGES.INTRODUCTION}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeIn' }}>
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
        <button
          className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
          onClick={() => gotoNextStage(PAGES.USER_INTRODUCTION)}>
          Lets Begin
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
