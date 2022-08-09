import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PAGES, PageIdentifier } from '.';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateUserName } from '@/redux/slices/user';

type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function UserIntro({ gotoNextStage }: Props) {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.user);
  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateUserName(e.target.value));
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
        <h1 className='text-sm font-inter'>
          Before we get started, I would like to know you. I love making
          friends!
        </h1>
        <br />
        <h4 className='text-sm font-inter'>
          Enter your name:{' '}
          <span className='font-bold'>
            <input value={name} onChange={onChangeHanlder} />
          </span>
        </h4>
        <br />
        <button
          className='bg-button py-2 px-4 rounded-md text-white font-inter'
          onClick={() => gotoNextStage(PAGES.LESSON_ONE)}>
          Next
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
