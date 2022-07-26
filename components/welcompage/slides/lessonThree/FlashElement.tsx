import React from 'react';
import { ImCross } from 'react-icons/im';
import { motion, AnimatePresence } from 'framer-motion';
type Props = {
  onCloseHandler: () => void;
  title: string;
  descriptionImageUri: string;
  paraContent: string;
};

export default function FlashElement({
  onCloseHandler,
  title,
  descriptionImageUri,
  paraContent,
}: Props) {
  const escapeKeyHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();

      onCloseHandler();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', escapeKeyHandler);

    return () => {
      document.removeEventListener('keydown', escapeKeyHandler);
    };
  }, []);
  return (
    <AnimatePresence key={'Flash-Card'}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='h-full p-2 bg-white'>
        <div aria-label='Close-Nav-Bar' className='flex justify-end w-full'>
          <button className='duration-300 hover:scale-90 hover:text-sky-700'>
            <ImCross onClick={onCloseHandler} />
          </button>
        </div>
        <div className='flex items-center min-w-0 min-h-0 justify-arounp-2'>
          <div className='flex-auto overflow-y-auto'>
            <h1 className='text-xl font-bold font-inter'>{title}</h1>
            <br />
            <div className='flex flex-col w-full max-h-full gap-2'>
              {paraContent?.split('\n').map((paragraph, key) => (
                <p key={key} className='text-xs'>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center flex-1 max-h-full'>
            <img
              src={descriptionImageUri}
              className='max-w-[24rem] max-h-[25rem]'
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
