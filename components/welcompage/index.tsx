import React from 'react';
import { motion } from 'framer-motion';
import Slides, { PageIdentifier, PAGES } from './slides';
import { AnimatePresence } from 'framer-motion';

export default function WelcomePage() {
  const [page, setPage] = React.useState<PageIdentifier>(PAGES.INTRODUCTION);
  const gotoNextStage = (stage: PageIdentifier) => setPage(stage);
  return (
    <div className='w-screen h-screen pageLayoutGrid bg-[#5ABCE6] overflow-hidden flex items-center justify-center'>
      <div className='h-full'>
        <div className='relative flex flex-col justify-center'>
          <div className='absolute translate-x-full translate-y-full'>
            <div className='absolute top-0 w-64 p-2 translate-x-4 bg-white -translate-y-2/3'>
              <div className='absolute bottom-0 flex w-6 h-8 translate-y-full bg-white triangle' />

              <motion.p
                initial={{ y: -20 }}
                animate={{ y: [20, 0] }}
                className='text-xs font-inter'>
                Hi! My name is XD. Welcome to the ATB Classroom. I'm so happy to
                have you here. Let's get started and dive in to all things
                finance.
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
      <div className='flex flex-col items-center w-full h-full'>
        <Slides pageId={page} gotoNextStage={gotoNextStage} />
      </div>
    </div>
  );
}