import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { PAGES, PageIdentifier } from '../';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { updateLessonTwoStage } from '@/redux/slices/user';
const StageWiseQuestions = dynamic(() => import('./QuestionsTemplate'));
type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function UserIntro({ gotoNextStage }: Props) {
  const {
    lessonTwo: { stage },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const QuestionAnswer = <StageWiseQuestions stage={stage} key={stage} />;
  return (
    <AnimatePresence>
      <motion.div
        key={PAGES.LESSON_TWO}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeIn' }}>
        <img
          src='/assets/bank.png'
          alt='Bank Background'
          className='h-[20rem] w-[25rem]'
        />
        {QuestionAnswer}
        <br />
        <button
          className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
          onClick={() => {
            if (stage + 1 > 1) gotoNextStage(PAGES.BANK);
            else dispatch(updateLessonTwoStage(stage + 1 > 1 ? 1 : stage + 1));
          }}>
          Next
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
