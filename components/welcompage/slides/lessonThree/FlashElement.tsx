import React from 'react';
import { ImCross } from 'react-icons/im';
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
  return (
    <div className='h-full p-2 bg-white'>
      <div aria-label='Close-Nav-Bar' className='flex justify-end w-full'>
        <button className='duration-300 hover:scale-90 hover:text-sky-700'>
          <ImCross onClick={onCloseHandler} />
        </button>
      </div>
      <div className='flex items-center justify-center p-2'>
        <div className=''>
          <h1 className='text-xl font-bold font-inter'>{title}</h1>
          <br />
          <div className='flex flex-col w-full gap-2'>
            {paraContent?.split('\n').map((paragraph, key) => (
              <p key={key} className='h-full my-auto text-xs'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className='h-full'>
          <img src={descriptionImageUri} className='w-[60rem]' />
        </div>
      </div>
    </div>
  );
}
