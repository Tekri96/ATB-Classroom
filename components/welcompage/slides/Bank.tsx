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
        key={PAGES.BANK}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeIn' }}>
        <motion.div
          className='flex items-center w-full gap-4'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.75, ease: 'easeIn' }}>
          <img
            src='/assets/atb-bank.jpg'
            alt='Bank Background'
            className='h-[15rem] w-[15rem]'
          />
          <h1 className='w-full text-center text-md font-inter'>
            Banks are a safe place to keep your money.
          </h1>
        </motion.div>
        <br />
        <h4 className='text-sm font-inter'>
          Click this{' '}
          <a
            href='https://www.youtube.com/watch?v=S90pcbG6gsc&t=54s&ab_channel=EasyPeasyFinance'
            target='_blank'
            className='text-white underline'>
            link
          </a>{' '}
          to know what is a bank
        </h4>
        <h4 className='text-sm font-inter'>
          Click this{' '}
          <a
            href='https://www.youtube.com/watch?v=d-6qQgvxgAE&ab_channel=EasyPeasyFinance'
            target='_blank'
            className='text-white underline'>
            link
          </a>{' '}
          to watch a short video on what is a bank account
        </h4>

        <br />
        <div className='flex justify-around w-full px-2'>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => {}}>
            Previous
          </button>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => gotoNextStage(PAGES.LESSON_THREE)}>
            Procceed to Next Lesson
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
