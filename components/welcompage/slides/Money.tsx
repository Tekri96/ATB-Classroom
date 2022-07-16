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
        key={PAGES.MONEY}
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
            src='/assets/money.png'
            alt='Bank Background'
            className='h-[15rem] w-[15rem]'
          />
          <h1 className='w-full text-center text-md font-inter'>
            The answer is money. Money
            <br />
            is what people use to buy
            <br />
            or sell things and services.
          </h1>
        </motion.div>
        <br />
        <h4 className='text-sm font-inter'>
          Click this{' '}
          <a
            href='https://www.youtube.com/watch?v=AjTwcQYgISA&ab_channel=InkwellMedia'
            target='_blank'
            className='text-white underline'>
            link
          </a>{' '}
          to watch a short video on the history of money!
        </h4>
        <h4 className='text-sm font-inter'>
          Click this{' '}
          <a
            href='https://docs.google.com/presentation/d/16Oho8ZZXSe_Bh05PITSRFueFWgNRF4eeu8NTG5GHHxk/edit#slide=id.g13b7dc884c0_0_1163'
            target='_blank'
            className='text-white underline'>
            link
          </a>{' '}
          to see a small presentation on how to manage your money.
        </h4>
        <br />
        <button
          className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
          onClick={() => gotoNextStage(PAGES.LESSON_ONE)}>
          Previous
        </button>
        <button
          className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
          onClick={() => gotoNextStage(PAGES.LESSON_TWO)}>
          Procceed to Next Lesson
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
