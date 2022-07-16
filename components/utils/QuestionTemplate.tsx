import React from 'react';
import { motion } from 'framer-motion';
type Props = {
  questionString: string;
};

export default function QuestionTemplate({ questionString }: Props) {
  return (
    <motion.h1
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5, ease: 'easeIn' }}
      className='text-sm font-inter'>
      {questionString}
    </motion.h1>
  );
}
