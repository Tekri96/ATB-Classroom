import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
type Props = {
  starCount: number;
  onStarChange: (value: number) => void;
};

const otherClasses = ' cursor-pointer hover:scale-90 duration-300';

export default function Stars({ starCount, onStarChange }: Props) {
  return (
    <motion.div className='flex gap-1'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
            animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: 'easeIn',
            }}>
            <AiOutlineStar
              className={
                starCount >= index + 1
                  ? 'text-yellow-500 hover:text-gray-400' + otherClasses
                  : 'text-gray-400 hover:text-yellow-500' + otherClasses
              }
              key={index}
              onClick={() => onStarChange(index)}
            />
          </motion.div>
        ))}
    </motion.div>
  );
}
