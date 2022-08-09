import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageIdentifier, PAGES } from '.';
import Popup from '@/components/utils/Popup';
import VideoComponent from '@/components/utils/VideoComponent';
import PowerPoint from '@/components/utils/PowerPoint';

type Props = {
  gotoNextStage: (stage: PageIdentifier) => void;
};
export default function Introduction({ gotoNextStage }: Props) {
  const [showYTVideoPopup, setShowYTVideoPopup] = React.useState(false);
  const [showPPTPopup, setShowPPTPopup] = React.useState(false);

  const showYTPopup = () => {
    setShowYTVideoPopup(true);
    setShowPPTPopup(false);
  };

  const hideYTVideoPopup = () => {
    setShowYTVideoPopup(false);
  };

  const showPPT = () => {
    setShowPPTPopup(true);
    setShowYTVideoPopup(false);
  };

  const hidePPTPopup = () => {
    setShowPPTPopup(false);
  };
  return (
    <AnimatePresence>
      <motion.div
        key={PAGES.MONEY}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeIn' }}
        className='flex flex-col items-center justify-center w-full h-full p-4'>
        <motion.div
          className='flex items-center w-full gap-4'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.75, ease: 'easeIn' }}>
          <Popup
            Component={
              <VideoComponent
                onCloseHandler={hideYTVideoPopup}
                ytVideoId={'S90pcbG6gsc'}
              />
            }
            onCloseHandler={hideYTVideoPopup}
            show={showYTVideoPopup}
          />
          <Popup
            Component={
              <VideoComponent
                onCloseHandler={hidePPTPopup}
                ytVideoId={'d-6qQgvxgAE'}
              />
            }
            onCloseHandler={hidePPTPopup}
            show={showPPTPopup}
          />
          <img
            src='/assets/atb-bank.jpg'
            alt='Bank Background'
            className='h-[20rem] w-[20rem]'
          />
          <h1 className='w-full text-2xl text-center font-inter'>
            Banks are a safe place to keep your money.
          </h1>
        </motion.div>
        <br />
        <h4 className='text-sm font-inter'>
          Click this{' '}
          <button
            aria-details='https://www.youtube.com/watch?v=S90pcbG6gsc&ab_channel=EasyPeasyFinance'
            onClick={showYTPopup}
            className='text-white underline'>
            link
          </button>{' '}
          to know what is a bank
        </h4>
        <h4 className='text-sm font-inter'>
          Click this{' '}
          <button
            aria-details='https://www.youtube.com/watch?v=d-6qQgvxgAE&ab_channel=EasyPeasyFinance'
            onClick={showPPT}
            className='text-white underline'>
            link
          </button>{' '}
          to watch a short video on what is a bank account
        </h4>

        <br />
        <div className='flex justify-around w-full px-2'>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => gotoNextStage(PAGES.LESSON_TWO)}>
            Previous
          </button>
          <button
            className='bg-[#00FF66] py-2 px-4 rounded-md text-white font-inter'
            onClick={() => gotoNextStage(PAGES.LESSON_THREE)}>
            Procceed to Next Lesson
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
