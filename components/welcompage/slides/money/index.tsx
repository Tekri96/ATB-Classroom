import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageIdentifier, PAGES } from '..';
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
                ytVideoId={'AjTwcQYgISA'}
              />
            }
            onCloseHandler={hideYTVideoPopup}
            show={showYTVideoPopup}
          />
          <Popup
            Component={
              <PowerPoint
                onCloseHandler={hidePPTPopup}
                iframeSrc={
                  'https://docs.google.com/presentation/d/e/2PACX-1vQxLsAD5aHcdSE4x6QgfgYl_VKAFnLBRCCbmFEZE5rqx2Fv5DYDP6VxT572e-8XQ9nVXPXZjzLBuGeo/embed?start=false&loop=true&delayms=3000'
                }
              />
            }
            onCloseHandler={hidePPTPopup}
            show={showPPTPopup}
          />
          <img
            src='/assets/money.png'
            alt='Bank Background'
            className='h-[20rem] w-[20rem]'
          />
          <h1 className='w-full text-2xl text-center font-inter'>
            The answer is money. Money is what people use to buy or sell things
            and services.
          </h1>
        </motion.div>
        <br />
        <h4 className='w-full text-md font-inter'>
          Click this{' '}
          <button
            aria-details='https://www.youtube.com/watch?v=AjTwcQYgISA&ab_channel=InkwellMedia'
            onClick={showYTPopup}
            className='text-white underline'>
            link
          </button>{' '}
          to watch a short video on the history of money!
        </h4>
        <h4 className='w-full text-md font-inter'>
          Click this{' '}
          <button
            aria-details='https://docs.google.com/presentation/d/16Oho8ZZXSe_Bh05PITSRFueFWgNRF4eeu8NTG5GHHxk/edit#slide=id.g13b7dc884c0_0_1163'
            className='text-white underline'
            onClick={showPPT}>
            link
          </button>{' '}
          to see a small presentation on how to manage your money.
        </h4>
        <br />
        <div className='flex justify-around w-full px-2'>
          <button
            className='bg-button py-2 px-4 rounded-md text-white font-inter'
            onClick={() => gotoNextStage(PAGES.LESSON_ONE)}>
            Previous
          </button>
          <button
            className='bg-button ml-2 py-2 px-4 rounded-md text-white font-inter'
            onClick={() => gotoNextStage(PAGES.LESSON_TWO)}>
            Procceed to Next Lesson
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
