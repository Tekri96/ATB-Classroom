import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slides, { PageIdentifier, PAGES } from './slides';
import { useAppSelector } from '@/redux/hooks';
import LeftElement from './LeftElement';
import Link from 'next/link';

export default function WelcomePage() {
  const [page, setPage] = React.useState<PageIdentifier>(PAGES.INTRODUCTION);
  const gotoNextStage = (stage: PageIdentifier) => setPage(stage);
  const { userMessage } = useAppSelector((state) => state.user);
  return (
    <div className='w-screen h-screen pageLayoutGrid bg-[#bfe4f3] overflow-hidden flex items-center justify-center'>
      <LeftElement userMessage={userMessage} />

      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className='flex flex-col items-center justify-center w-full h-full'>
        <Slides pageId={page} gotoNextStage={gotoNextStage} />
      </motion.div>
      <div className='p-2'>
        Developed By{' '}
        <span>
          <Link href='https://www.linkedin.com/in/saurabh-anand-b018a0166/'>
            <a className='text-blue-600 underline'> Saurabh Anand</a>
          </Link>
        </span>
      </div>
    </div>
  );
}
