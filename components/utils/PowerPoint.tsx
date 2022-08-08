import React from 'react';
import { ImCross } from 'react-icons/im';
type Props = {
  onCloseHandler: () => void;
  iframeSrc: string;
};

export default function PowerPoint({ onCloseHandler, iframeSrc }: Props) {
  return (
    <>
      <div aria-label='Close-Nav-Bar' className='flex justify-end w-full'>
        <button className='duration-300 hover:scale-90 hover:text-sky-700'>
          <ImCross onClick={onCloseHandler} />
        </button>
      </div>
      <div className='flex items-center justify-center w-full h-full'>
        <iframe
          src={iframeSrc}
          frameBorder='0'
          width='100%'
          height='520'
          allowFullScreen={true}
        />
      </div>
    </>
  );
}
