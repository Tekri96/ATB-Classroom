import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Popup from '@/components/utils/Popup';
import FlashElement from './FlashElement';
interface IFlashCardProps {
  imageUri: string;
  title: string;
  id: string;
}

export default function FlashCard(props: IFlashCardProps) {
  const { imageUri, title, id } = props;
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  return (
    <React.Fragment>
      <motion.div
        layoutId={id}
        className='flex flex-col items-center p-1 bg-white rounded-md'
        onClick={() => setSelectedId(id)}>
        <img src={imageUri} alt='Investing' className='flex-auto w-[12rem]' />
        <h1 className='text-center text-md font-inter'>{title}</h1>
      </motion.div>
      <Popup
        Component={<FlashElement />}
        show={selectedId !== null}
        onCloseHandler={() => setSelectedId(null)}
      />
    </React.Fragment>
  );
}
