import QuestionTemplate from '@/components/utils/QuestionTemplate';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IFeedBackPoints, updateFeedback } from '@/redux/slices/user';
import React from 'react';
import Stars from './Stars';
import { motion } from 'framer-motion';
const questions = {
  learnedValuableSkills: 'I Learned Valuable Skills',
  learningwasIntuitive: 'My Learning Was Intuitively planned',
  learningwasEasy: 'My Learning Was Easy',
  learningwasFun: 'My Learning Was Fun',
  learningwasPractical: 'My Learning Was Practical',
};

export default function StarFeedback() {
  const { feedback } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  return (
    <div className='w-full p-2 bg-white rounded-md'>
      {Object.keys(questions).map((question) => (
        <div
          key={question}
          className='flex items-center justify-between w-full'>
          <motion.h1
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5, ease: 'easeIn' }}
            className='text-xs font-inter'>
            {questions[question as keyof typeof questions] + ': '}
          </motion.h1>

          <Stars
            starCount={feedback[question as keyof IFeedBackPoints]}
            onStarChange={(value) =>
              dispatch(
                updateFeedback({
                  value: value + 1,
                  feedbackKey: question as keyof IFeedBackPoints,
                })
              )
            }
          />
        </div>
      ))}
    </div>
  );
}
