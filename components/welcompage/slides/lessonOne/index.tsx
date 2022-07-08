import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { PAGES, PageIdentifier } from '../';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { updateLessonOneStage } from '@/redux/slices/user';
const StageWiseQuestions = dynamic(() => import('./QuestionsTemplate'));
type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function UserIntro({ gotoNextStage }: Props) {
  const {
    lessonOne: { stage },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const QuestionAnswer = <StageWiseQuestions stage={stage} key={stage} />;
  return (
    <AnimatePresence>
      <motion.div
        key={PAGES.USER_INTRODUCTION}
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
          onClick={() =>
            dispatch(updateLessonOneStage(stage + 1 > 2 ? 2 : stage + 1))
          }>
          Next
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
