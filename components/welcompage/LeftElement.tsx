import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
type Props = {
  userMessage: string;
};
function LeftElement({ userMessage }: Props) {
  return (
    <div className='self-center h-full'>
      <div className='relative flex flex-col justify-center'>
        <div className='absolute translate-x-full translate-y-full'>
          <div className='absolute top-0 w-64 p-2 translate-x-4 bg-white -translate-y-2/3'>
            <div className='absolute bottom-0 flex w-6 h-8 translate-y-full bg-white triangle' />
            <motion.p
              initial={{ y: -20 }}
              animate={{ y: [20, 0] }}
              transition={{ duration: 0.5 }}
              className='text-xs font-inter'>
              {userMessage}
            </motion.p>
          </div>
          <img
            src='/assets/boy.png'
            alt='Boy Image'
            className='h-[12rem] mt-16'
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(LeftElement);
