import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PAGES, PageIdentifier } from '../';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import StarFeedback from './StarFeedback';
type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function FeedbackSection({ gotoNextStage }: Props) {
  const {
    lessonOne: { stage },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <AnimatePresence>
      <motion.div
        key={PAGES.LESSON_ONE}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeIn' }}>
        <img
          src='/assets/bank.png'
          alt='Bank Background'
          className='h-[20rem] w-[25rem]'
        />
        <h1>Thanks for taking up this assessment!</h1>
        <h1>Now, please take up this Feedback!</h1>
        <StarFeedback />
        <br />
        <div className='flex justify-around w-full px-2'>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => {
              gotoNextStage(PAGES.LESSON_THREE);
            }}>
            Previous
          </button>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => {
              gotoNextStage(PAGES.INTRODUCTION);
            }}>
            Submit Feedback and Exit
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
