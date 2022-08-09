import React from 'react';
import { motion } from 'framer-motion';
import Popup from '@/components/utils/Popup';
import FlashElement from './FlashElement';
interface IFlashCardProps {
  imageUri: string;
  title: string;
  id: string;
  descriptionImageUri: string;
  paraContent: string;
}

export default function FlashCard(props: IFlashCardProps) {
  const { imageUri, title, id, descriptionImageUri, paraContent } = props;
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  return (
    <React.Fragment>
      <motion.div
        layoutId={id}
        className='flex flex-col items-center p-2 gap-2 transition-all duration-300 bg-[#27363B] rounded-md cursor-pointer hover:scale-90'
        onClick={() => setSelectedId(id)}>
        <img
          src={imageUri}
          alt='Investing'
          className='flex-auto w-[10rem] h-[10rem]'
        />
        <h1 className='text-center text-white text-md font-inter'>{title}</h1>
      </motion.div>
      <Popup
        Component={
          <FlashElement
            onCloseHandler={() => setSelectedId(null)}
            title={title}
            descriptionImageUri={descriptionImageUri}
            paraContent={paraContent}
          />
        }
        show={selectedId !== null}
        onCloseHandler={() => setSelectedId(null)}
      />
    </React.Fragment>
  );
}
