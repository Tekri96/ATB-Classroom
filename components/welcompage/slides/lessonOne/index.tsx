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
  const QuestionAnswer = <StageWiseQuestions stage={stage} />;
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
        {QuestionAnswer}
        <br />
        <div className='flex justify-around w-full px-2'>
          <button
            className='px-4 py-2 text-white rounded-md bg-button font-inter'
            onClick={() => {
              if (stage - 1 < 0) {
                gotoNextStage(PAGES.USER_INTRODUCTION);
              } else {
                dispatch(updateLessonOneStage(stage - 1));
              }
            }}>
            Previous
          </button>
          <button
            className='px-4 py-2 text-white rounded-md bg-button font-inter'
            onClick={() => {
              if (stage + 1 > 2) gotoNextStage(PAGES.MONEY);
              else
                dispatch(updateLessonOneStage(stage + 1 > 2 ? 2 : stage + 1));
            }}>
            Next
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
