import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PAGES, PageIdentifier, firstQuestionChoices } from '.';
import { BiRadioCircleMarked } from 'react-icons/bi';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { updateLessonOneChoice } from '@/redux/slices/user';
type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function UserIntro({ gotoNextStage }: Props) {
  const { lessonOneChoice } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
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
        <h1 className='text-sm font-inter'>What do you like?</h1>
        {firstQuestionChoices.map((element) => {
          const className =
            lessonOneChoice === element
              ? 'text-green-600 font-inter'
              : 'text-white';
          return (
            <div className='flex items-center gap-2 cursor-pointer'>
              <BiRadioCircleMarked
                key={element}
                className={className}
                onClick={() => dispatch(updateLessonOneChoice(element))}
              />
              <label className={className}>{element}</label>
            </div>
          );
        })}

        <br />

        <button
          className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
          onClick={() => gotoNextStage(PAGES.LESSON_TWO)}>
          Next
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
