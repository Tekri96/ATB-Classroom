import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { PAGES, PageIdentifier } from '../';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { updateLessonOneStage } from '@/redux/slices/user';
import FlashCard from './FlashCard';
const StageWiseQuestions = dynamic(() => import('./QuestionsTemplate'));
type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function UserIntro({ gotoNextStage }: Props) {
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
        <div
          className='grid w-full h-full grid-cols-5 gap-2 p-4 border border-red-500'
          aria-label='Flash-Cards'>
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
          <FlashCard />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
