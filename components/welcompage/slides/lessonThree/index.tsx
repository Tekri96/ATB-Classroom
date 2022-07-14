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

const FlashCards = [
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'investing',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'banking',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards-02',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards-03',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards-04',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards-05',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards-06',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards-07',
  },
  {
    imageUri: '/flash-cards/investments.jpg',
    title: 'Investing',
    key: 'cards-08',
  },
];

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
          className='grid w-full h-full grid-cols-5 gap-2 p-4 border'
          aria-label='Flash-Cards'>
          {FlashCards.map((card) => (
            <FlashCard {...card} id={card.key} />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
