import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
type Props = {
  userMessage: string;
};
function LeftElement({ userMessage }: Props) {
  const [mounted, setMounted] = React.useState(true);

  React.useEffect(() => {
    if (mounted) {
      setMounted(false);
      setTimeout(() => {
        setMounted(true);
      }, 100);
    }
  }, [userMessage]);
  return (
    <div className='self-center h-full mx-2'>
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='flex flex-col items-center justify-center'>
          <AnimatePresence key={userMessage}>
            <motion.div className='mx-2'>
              {mounted ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}>
                  <motion.p className='p-2 text-xs bg-white font-inter'>
                    {userMessage}
                  </motion.p>
                  <div className='flex justify-center w-full text-center'>
                    <div className='w-6 h-8 -mt-2 bg-white triangle' />
                  </div>
                </motion.div>
              ) : null}
            </motion.div>
          </AnimatePresence>
          <img
            src='/assets/boy.png'
            alt='Boy Image'
            className='h-[12rem] -ml-2 mt-2'
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(LeftElement);
