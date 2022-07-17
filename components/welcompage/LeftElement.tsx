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
    <div className='self-center h-full'>
      <div className='relative flex flex-col justify-center'>
        <div className='absolute translate-x-full translate-y-full'>
          <AnimatePresence key={userMessage}>
            <motion.div className='absolute top-0 w-64 p-2 translate-x-4 bg-white min-h-20 -translate-y-2/3'>
              <div className='absolute bottom-0 flex w-6 h-8 translate-y-full bg-white triangle' />
              {mounted ? (
                <motion.p
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className='text-xs font-inter'>
                  {userMessage}
                </motion.p>
              ) : null}
            </motion.div>
          </AnimatePresence>

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
